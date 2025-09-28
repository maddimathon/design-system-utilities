/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import type { TokenLevels, TokenLevels_Extended } from '../@types.js';

import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/ShadeMap_Shade.js';


/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Colour_ShadeMap<
    T_ColourName extends string,
    T_ExtraLevels extends TokenLevels_Extended,
> extends AbstractTokens<Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>> {

    public readonly data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;

    public readonly allLevels;

    public constructor (
        protected readonly allNames: readonly T_ColourName[],
        protected readonly extraLevels: readonly T_ExtraLevels[],
        protected readonly name: T_ColourName,
        input: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>,
    ) {
        super();

        this.allLevels = [
            ...this.tokenLevels,
            ...this.extraLevels,
        ];

        this.data = Tokens_Colour_ShadeMap.completeMap(
            this.allNames,
            this.extraLevels,
            this.name,
            input,
        );
    }

    /**
     * Adds the given shade map to this map's shades' contrast results.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTests(
        colourGroupName: T_ColourName,
        testMap: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>,
    ) {
        const promises: Promise<void>[] = [];

        for ( const t_thisLevel in this.data ) {
            const thisLevel = t_thisLevel as TokenLevels | T_ExtraLevels;

            for ( const t_testLevel in testMap.data ) {
                const testLevel = t_testLevel as TokenLevels | T_ExtraLevels;

                promises.push(
                    this.data[ thisLevel ].addContrastTest(
                        colourGroupName,
                        testLevel,
                        testMap.data[ testLevel ].data,
                    )
                );
            }
        }

        return Promise.all( promises );
    }

    public toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels> {

        return objectMap(
            this.data,
            ( { value } ) => value.toJSON(),
        );
    }

    public toScssVars(): {
        [ K in TokenLevels | T_ExtraLevels ]: AbstractTokens.ScssReturn;
    } {

        return objectMap(
            this.data,
            ( { value } ) => value.toScssVars(),
        );
    }
}

/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Colour_ShadeMap {

    export type Data<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in TokenLevels | T_ExtraLevels ]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
        };

    export type InputParam<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in TokenLevels | T_ExtraLevels ]?: Tokens_Colour_ShadeMap_Shade.InputParam;
        };

    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in TokenLevels | T_ExtraLevels ]: Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
        };



    /* FUNCTIIONS
     * ====================================================================== */

    // UPGRADE - make this work by only setting lch or hsl hue value
    export function completeMap<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    >(
        allNames: readonly T_ColourName[],
        extraLevels: readonly T_ExtraLevels[],
        name: T_ColourName,

        part: InputParam<T_ColourName, T_ExtraLevels>,
    ): {
            [ L in TokenLevels | T_ExtraLevels ]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
        } {

        const inputKeys = Object.keys( part ) as TokenLevels[];

        const bases = {
            '100': { l: 98, c: 0, h: 0 },
            '500': { l: 50, c: 0, h: 0 },
            '900': { l: 2, c: 0, h: 0 },
        };

        const shadeMaker = (
            _thisLevel: TokenLevels | T_ExtraLevels,
            _input: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels> | Tokens_Colour_ShadeMap_Shade.InputParam,
        ) => {

            // to keep it within a reasonable spectrum (since I average lch values)
            const hsl = ColourUtilities.toHSL(
                (
                    _input instanceof Tokens_Colour_ShadeMap_Shade
                        ? _input.data.lch
                        : _input
                ),
                false
            );

            return new Tokens_Colour_ShadeMap_Shade(
                allNames,
                extraLevels,
                name,
                _thisLevel,
                hsl,
            );
        };

        let _l_100: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
        let _l_500: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels> | undefined = undefined;
        let _l_900: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;

        /*
         * Making sure the minimum required levels are present. 
         */

        if ( !inputKeys.length ) {
            // we should set the default basics and generate a grey map, then
            _l_100 = shadeMaker( '100', bases[ '100' ] );
            _l_500 = shadeMaker( '500', bases[ '500' ] );
            _l_900 = shadeMaker( '900', bases[ '900' ] );

        } else if ( !( '100' in part ) && !( '900' in part ) || !( part[ '100' ] && part[ '900' ] ) ) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            // TODO - generate these from whatever existing keys
            _l_100 = shadeMaker( '100', bases[ '100' ] );
            _l_900 = shadeMaker( '900', bases[ '900' ] );

            if ( inputKeys.length > 0 ) {

                const _hue = Object.values( part ).map(
                    p => ColourUtilities.toLCH( p ).h
                ).reduce( ( partialSum, a ) => partialSum + a, 0 ) / Math.max( 1, inputKeys.length );

                _l_100 = shadeMaker( '100', {
                    l: bases[ '100' ].l,
                    c: 40,
                    h: _hue,
                } );
                _l_900 = shadeMaker( '900', {
                    l: bases[ '900' ].l,
                    c: 4,
                    h: _hue,
                } );
            } else {
                _l_100 = shadeMaker( '100', bases[ '100' ] );
                _l_900 = shadeMaker( '900', bases[ '900' ] );
            }
        } else {
            // now we can safely assume these exist
            _l_100 = shadeMaker( '100', part[ '100' ] );
            _l_900 = shadeMaker( '900', part[ '900' ] );
        }

        const l_100 = _l_100;
        const l_900 = _l_900;

        const l_500 = _l_500 ?? shadeMaker(
            '500',
            (
                ( !( '500' in part ) || !part[ '500' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '500' ]
            )
        );

        const l_300 = shadeMaker(
            '300',
            (
                ( !( '300' in part ) || !part[ '300' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_500, 1.25 )
                    // otherwise we can safely assume this exists
                    : part[ '300' ]
            )
        );

        const l_700 = shadeMaker(
            '700',
            (
                ( !( '700' in part ) || !part[ '700' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_500, l_900, 1.25 )
                    // otherwise we can safely assume this exists
                    : part[ '700' ]
            )
        );

        const l_200 = shadeMaker(
            '200',
            (
                ( !( '200' in part ) || !part[ '200' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_300 )
                    // otherwise we can safely assume this exists
                    : part[ '200' ]
            )
        );

        const l_400 = shadeMaker(
            '400',
            (
                ( !( '400' in part ) || !part[ '400' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_300, l_500 )
                    // otherwise we can safely assume this exists
                    : part[ '400' ]
            )
        );

        const l_600 = shadeMaker(
            '600',
            (
                ( !( '600' in part ) || !part[ '600' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_500, l_700 )
                    // otherwise we can safely assume this exists
                    : part[ '600' ]
            )
        );

        const l_800 = shadeMaker(
            '800',
            (
                ( !( '800' in part ) || !part[ '800' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_700, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '800' ]
            )
        );

        const defaultLevels: {
            [ L in TokenLevels ]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
        } = {
            '100': l_100,
            '200': l_200,
            '300': l_300,
            '400': l_400,
            '500': l_500,
            '600': l_600,
            '700': l_700,
            '800': l_800,
            '900': l_900,
        };

        // @ts-expect-error
        const completeLevels: {
            [ L in TokenLevels | T_ExtraLevels ]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
        } = {};

        const levelsToInclude = [
            ...AbstractTokens.tokenLevels,
            ...extraLevels
        ].sort();

        levelLoop:
        for ( const level of levelsToInclude ) {

            // continues
            if ( level in defaultLevels ) {
                completeLevels[ level ] = defaultLevels[ level as TokenLevels ];
                continue levelLoop;
            }

            let lowerLevel: TokenLevels;
            let higherLevel: TokenLevels;

            // continues for 000, 050, and 950
            switch ( level as T_ExtraLevels ) {

                case '000':
                    completeLevels[ level ] = shadeMaker(
                        level,
                        ColourUtilities.mixColours( 'FFFFFF', defaultLevels[ '100' ] ),
                    );
                    continue levelLoop;

                case '950':
                    completeLevels[ level ] = shadeMaker(
                        level,
                        ColourUtilities.mixColours( defaultLevels[ '900' ], '000000' ),
                    );
                    continue levelLoop;

                case '050':
                    completeLevels[ level ] = shadeMaker(
                        level,
                        ColourUtilities.mixColours(
                            (
                                ( '000' in completeLevels && completeLevels[ '000' as T_ExtraLevels ] )
                                    ? completeLevels[ '000' as T_ExtraLevels ]
                                    : ColourUtilities.mixColours( 'FFFFFF', defaultLevels[ '100' ] )
                            ),
                            defaultLevels[ '100' ]
                        ),
                    );
                    continue levelLoop;

                case '150':
                    lowerLevel = '100';
                    higherLevel = '200';
                    break;

                case '250':
                    lowerLevel = '200';
                    higherLevel = '300';
                    break;

                case '350':
                    lowerLevel = '300';
                    higherLevel = '400';
                    break;

                case '450':
                    lowerLevel = '400';
                    higherLevel = '500';
                    break;

                case '550':
                    lowerLevel = '500';
                    higherLevel = '600';
                    break;

                case '650':
                    lowerLevel = '600';
                    higherLevel = '700';
                    break;

                case '750':
                    lowerLevel = '700';
                    higherLevel = '800';
                    break;

                case '850':
                    lowerLevel = '800';
                    higherLevel = '900';
                    break;
            }

            completeLevels[ level ] = shadeMaker(
                level,
                ColourUtilities.mixColours( defaultLevels[ lowerLevel ], defaultLevels[ higherLevel ] ),
            );
        }

        return completeLevels;
    }
}