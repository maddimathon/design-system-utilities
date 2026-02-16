/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { LocalErrors } from '../../01-utilities/Errors.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import type { TokenTypes } from '../@types.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';


/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_ShadeMap<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
    data: Tokens_Colour_ShadeMap.Data<T_Types>;
    json: Tokens_Colour_ShadeMap.JsonReturn<T_Types>;
    scss: Tokens_Colour_ShadeMap.ScssVars<T_Types>;
}> {

    /**
     * Allows for async building.
     */
    public static async build<T_Types extends TokenTypes.Colour.TypeParams>(
        allNames: readonly T_Types[ 'names' ][],
        extraLevels: readonly T_Types[ 'extraLevels' ][],
        name: T_Types[ 'names' ],
        input: Tokens_Colour_ShadeMap.InputParam<T_Types>,
    ): Promise<Tokens_Colour_ShadeMap<T_Types>> {

        const errorMaker = (
            message: string,
            context: LocalErrors.Context,
            opts?: undefined | {
                cause?: LocalErrors.Cause;
            },
        ) => new LocalErrors.TokenBuildError( message, {
            class: 'Tokens_Colour_ShadeMap',
            method: 'build',
            ...context,
        }, opts );

        return Tokens_Colour_ShadeMap.completeMap(
            allNames,
            extraLevels,
            name,
            input,
            errorMaker,
        ).then(
            data => new Tokens_Colour_ShadeMap(
                allNames,
                extraLevels,
                name,
                data,
            )
        );
    }

    protected constructor (
        protected readonly allNames: readonly T_Types[ 'names' ][],
        protected readonly extraLevels: readonly T_Types[ 'extraLevels' ][],
        protected readonly name: T_Types[ 'names' ],
        public readonly data: Tokens_Colour_ShadeMap.Data<T_Types>,
    ) {
        super();
    }

    /**
     * Adds the given shade map to this map's shades' contrast results.
     * 
     * @since 0.1.0-alpha
     */
    public async addContrastTests(
        colourGroupName: T_Types[ 'names' ],
        testMap: Tokens_Colour_ShadeMap<T_Types>,
    ) {
        const promises: Promise<void>[] = [];

        for ( const t_thisLevel in this.data ) {
            const thisLevel = t_thisLevel as ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ];

            for ( const t_testLevel in testMap.data ) {
                const testLevel = t_testLevel as ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ];

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

    public toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_Types> {

        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toJSON(),
        );
    }

    public toScssVars(): Tokens_Colour_ShadeMap.ScssVars<T_Types> {

        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toScssVars(),
        );
    }
}

/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Colour_ShadeMap {

    export type Data<T_Types extends TokenTypes.Colour.TypeParams> = {
        [ N in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]: Tokens_Colour_ShadeMap.Shade<T_Types>;
    };

    export type InputParam<T_Types extends TokenTypes.Colour.TypeParams> = {
        [ N in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]?: Tokens_Colour_ShadeMap.Shade.InputParam;
    };

    export type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = {
        [ N in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_Types extends TokenTypes.Colour.TypeParams> = {
        [ N in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]: Tokens_Colour_ShadeMap.Shade.ScssVars;
    };



    /* SHADE CLASS
     * ====================================================================== */

    /**
     * Generates a complete token object for the design system.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    export class Shade<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
        data: Shade.Data;
        json: Shade.JsonReturn<T_Types>;
        scss: Shade.ScssVars;
    }> {

        /**
         * Allows for async building.
         */
        public static async build<T_Types extends TokenTypes.Colour.TypeParams>(
            allNames: readonly T_Types[ 'names' ][],
            extraLevels: readonly T_Types[ 'extraLevels' ][],
            shadeName: "black" | "white" | T_Types[ 'names' ],
            thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
            input: Shade.InputParam,
        ) {
            const errorMaker = (
                message: string,
                context: LocalErrors.Context,
                opts?: undefined | {
                    cause?: LocalErrors.Cause;
                },
            ) => new LocalErrors.TokenBuildError( message, {
                class: 'Shade',
                method: 'build',
                ...context,
            }, opts );

            return ColourUtilities.validateShade( input, errorMaker ).then(
                data => new Shade(
                    allNames,
                    extraLevels,
                    shadeName,
                    thisLevel,
                    data,
                )
            );
        }

        public contrast: Shade.Contrast<T_Types> = {
            min: {},
            max: {},
            results: {},
        };

        protected constructor (
            protected readonly allNames: readonly T_Types[ 'names' ][],
            protected readonly extraLevels: readonly T_Types[ 'extraLevels' ][],
            protected readonly shadeName: "black" | "white" | T_Types[ 'names' ],
            protected readonly thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
            public readonly data: Shade.Data,
        ) {
            super();
        }

        /**
         * Adds the given shade to this shade's contrast results.
         * 
         * @since 0.1.0-alpha
         */
        public async addContrastTest(
            colourGroupName: T_Types[ 'names' ],
            level: ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
            testClr: ColourUtilities.SingleShade,
        ) {
            if ( typeof this.contrast.results[ colourGroupName ] === 'undefined' ) {
                this.contrast.results[ colourGroupName ] = {};
            }

            const contrastTest = new ColourUtilities.ContrastTest(
                this.shadeValue(),
                testClr,
            );

            if ( typeof this.contrast.min[ colourGroupName ] === 'undefined' ) {
                this.contrast.min[ colourGroupName ] = {
                    ui: undefined,
                    text: undefined,
                };
            }

            // SETTING MINIMUMS
            testNameLoop:
            for ( const testName of ( [ 'ui', 'text' ] as const ) ) {
                // continues
                if ( !contrastTest.aa[ testName ] && !contrastTest.aaa[ testName ] ) {
                    continue testNameLoop;
                }

                if ( typeof this.contrast.min[ colourGroupName ][ testName ] === 'undefined' ) {
                    this.contrast.min[ colourGroupName ][ testName ] = {
                        aa: undefined,
                        aaa: undefined,
                    };
                }

                standardsLoop:
                for ( const standard of [ 'aa', 'aaa' ] as const ) {
                    // if it didn't pass, ignore this
                    if ( !contrastTest[ standard ][ testName ] ) {
                        continue standardsLoop;
                    }

                    if (
                        // if there's no minimum, then this is the new minimum
                        typeof this.contrast.min[ colourGroupName ][ testName ]?.[ standard ] === 'undefined'

                        // this result is less than the existing minimum
                        || contrastTest.ratio < this.contrast.min[ colourGroupName ][ testName ]?.[ standard ].ratio
                    ) {

                        this.contrast.min[ colourGroupName ][ testName ][ standard ] = {
                            name: colourGroupName,
                            level,
                            ratio: contrastTest.ratio,
                        };
                    }
                }
            }

            // SETTING MAXIMUM
            if (
                // if there's no maximum, then this is the new maximum
                typeof this.contrast.max[ colourGroupName ] === 'undefined'

                // this result is more than the existing maximum
                || contrastTest.ratio > this.contrast.max[ colourGroupName ].ratio
            ) {

                this.contrast.max[ colourGroupName ] = {
                    name: colourGroupName,
                    level,
                    ratio: contrastTest.ratio,
                };
            }

            this.contrast.results[ colourGroupName ][ level ] = {
                ...contrastTest.toJSON(),
            };
        }

        public shadeValue(): ColourUtilities.SingleShade {

            return {
                hex: this.data.hex,
                hsl: this.data.hsl,
                rgb: this.data.rgb,
                lch: this.data.lch,
            };
        }

        public toJSON(): Shade.JsonReturn<T_Types> {

            const max = this.contrast.max;

            const min: Shade.Contrast.Minimum<T_Types, number> = objectMap(
                this.contrast.min,
                ( [ key, testGroup ] ) => ( {

                    ui: testGroup?.ui && {
                        aa: testGroup.ui.aa,
                        aaa: testGroup.ui.aaa,
                    },

                    text: testGroup?.text && {
                        aa: testGroup.text.aa,
                        aaa: testGroup.text.aaa,
                    },
                } ),
            );

            return {
                ...this.shadeValue(),
                contrast: {
                    max,
                    min,
                    results: this.contrast.results,
                },
            };
        }

        public toScssVars(): Shade.ScssVars {
            return ColourUtilities.toString.hsl( this.data.hsl );
        }
    };

    /**
     * Utilities for the {@link Shade} class.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    export namespace Shade {

        /**
         * @since 0.1.0-alpha
         */
        export type Data = ColourUtilities.SingleShade;

        /**
         * @since 0.1.0-alpha
         */
        export type InputParam = ColourUtilities.SingleShade_Input;

        /**
         * @since 0.1.0-alpha
         */
        export type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = ColourUtilities.Value_All & {
            contrast: Contrast<T_Types, number>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type ScssVars = string;



        /**
         * @since 0.1.0-alpha
         */
        export type ContrastResults<T_Types extends TokenTypes.Colour.TypeParams> = {
            [ N in T_Types[ 'names' ] ]?: undefined | {
                [ K in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]?: ColourUtilities.ContrastTest.Parsed;
            };
        };

        /**
         * @since 0.1.0-alpha
         */
        export type Contrast<
            T_Types extends TokenTypes.Colour.TypeParams,
            T_RatioValue extends number | undefined = number,
        > = {
            min: Contrast.Minimum<T_Types, T_RatioValue>;
            max: Contrast.Maximum<T_Types, T_RatioValue>;
            results: ContrastResults<T_Types>;
        };

        /**
         * @since 0.1.0-alpha
         */
        export namespace Contrast {

            /**
             * @since 0.1.0-alpha
             */
            export type SingleMinMax<
                T_Types extends TokenTypes.Colour.TypeParams,
                T_RatioValue extends number | undefined = number,
            > = undefined | {
                name: 'base' | T_Types[ 'names' ];
                level: ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ];
                ratio: T_RatioValue;
            };

            /**
             * @since 0.1.0-alpha
             */
            export type Maximum<
                T_Types extends TokenTypes.Colour.TypeParams,
                T_RatioValue extends number | undefined = number,
            > = {
                    [ N in 'base' | T_Types[ 'names' ] ]?: SingleMinMax<T_Types, T_RatioValue>;
                };

            /**
             * @since 0.1.0-alpha
             */
            export type Minimum<
                T_Types extends TokenTypes.Colour.TypeParams,
                T_RatioValue extends number | undefined = number,
            > = {
                    [ N in 'base' | T_Types[ 'names' ] ]?: undefined | {
                        [ K in keyof ColourUtilities.ContrastTest.SingleResult ]?: undefined | {
                            [ S in keyof ColourUtilities.ContrastTest.Standards ]?: SingleMinMax<T_Types, T_RatioValue>;
                        };
                    };
                };
        }
    }



    /* FUNCTIONS
     * ====================================================================== */

    /**
     * Completes a shade map and converts the level values to
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     */
    // UPGRADE - make this work by only setting lch or hsl hue value
    export async function completeMap<T_Types extends TokenTypes.Colour.TypeParams>(
        allNames: readonly T_Types[ 'names' ][],
        extraLevels: readonly T_Types[ 'extraLevels' ][],
        name: T_Types[ 'names' ],

        part: InputParam<T_Types>,

        errMaker: LocalErrors.ConstructorFn | null,
        _treatShadeAsBase?: boolean,
    ): Promise<{
        [ L in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]: Tokens_Colour_ShadeMap.Shade<T_Types>;
    }> {

        const treatShadeAsBase = _treatShadeAsBase ?? ( name.match( /^base(\-|\_|$)/i ) !== null );

        const inputKeys = Object.keys( part ) as ColourUtilities.Levels.Required[];

        const bases = {
            '100': { l: 98, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '900': { l: 2, c: 0, h: 0, },
        };

        const shadeMaker = async (
            _thisLevel: ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
            _input: Tokens_Colour_ShadeMap.Shade<T_Types> | Tokens_Colour_ShadeMap.Shade.InputParam,
        ): Promise<Tokens_Colour_ShadeMap.Shade<T_Types>> => {

            // to keep it within a reasonable spectrum (since I average lch values)
            const hsl = ColourUtilities.Async.toHSL( _input, errMaker ?? undefined, false );

            return hsl.then(
                validHSL => Tokens_Colour_ShadeMap.Shade.build(
                    allNames,
                    extraLevels,
                    name,
                    _thisLevel,
                    validHSL,
                )
            );
        };

        let _l_100: Promise<Tokens_Colour_ShadeMap.Shade<T_Types>>;
        let _l_500: Promise<Tokens_Colour_ShadeMap.Shade<T_Types>> | undefined = undefined;
        let _l_900: Promise<Tokens_Colour_ShadeMap.Shade<T_Types>>;

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
            if ( inputKeys.length > 0 ) {

                const _hue = Promise.all(
                    Object.values( part ).map(
                        p => ColourUtilities.Async.toLCH( p )
                    )
                ).then(
                    arr => arr.reduce(
                        ( ( partialSum, a ) => partialSum + a.h ),
                        0,
                    ) / Math.max( 1, inputKeys.length )
                );

                _l_100 = _hue.then(
                    ( h ) => shadeMaker( '100', part[ '100' ] ?? {
                        l: bases[ '100' ].l,
                        c: 5,
                        h,
                    } )
                );

                _l_900 = _hue.then(
                    ( h ) => shadeMaker( '900', part[ '900' ] ?? {
                        l: bases[ '900' ].l,
                        c: 4,
                        h,
                    } )
                );
            } else {
                _l_100 = shadeMaker( '100', part[ '100' ] ?? bases[ '100' ] );
                _l_900 = shadeMaker( '900', part[ '900' ] ?? bases[ '900' ] );
            }
        } else {
            // now we can safely assume these exist
            _l_100 = shadeMaker( '100', part[ '100' ] ?? bases[ '100' ] );
            _l_900 = shadeMaker( '900', part[ '900' ] ?? bases[ '900' ] );
        }

        const [
            l_100,
            l_900,
            l_500,
        ] = await Promise.all( [
            _l_100,
            _l_900,
            Promise.resolve( _l_500 ).then(
                async ( __clr ): Promise<Tokens_Colour_ShadeMap.Shade<T_Types>> => {
                    // return
                    if ( __clr ) {
                        return __clr;
                    }

                    // returns
                    if ( '500' in part && part[ '500' ] ) {
                        return shadeMaker( '500', part[ '500' ] );
                    }

                    return ColourUtilities.mixColours(
                        await _l_100,
                        await _l_900,
                    ).then( mixed => shadeMaker( '500', mixed ) );
                }
            ),
        ] );

        const shadeFetcher = async (
            level: ColourUtilities.Levels.Required,
            lowClr: Tokens_Colour_ShadeMap.Shade<T_Types>,
            highClr: Tokens_Colour_ShadeMap.Shade<T_Types>,
            saturationMultiplier?: number,
        ) => {
            // returns
            if ( level in part && part[ level ] ) {
                return shadeMaker( level, part[ level ] );
            }

            return ColourUtilities.mixColours(
                lowClr,
                highClr,
                saturationMultiplier,
            ).then( clr => shadeMaker( level, clr ) );
        };

        const [
            l_300,
            l_700,
        ] = await Promise.all( [
            shadeFetcher( '300', l_100, l_500, treatShadeAsBase ? 0 : 0.375 ),
            shadeFetcher( '700', l_500, l_900, treatShadeAsBase ? 0 : 0.375 ),
        ] );

        const [
            l_200,
            l_400,
            l_600,
            l_800,
        ] = await Promise.all( [
            shadeFetcher( '200', l_100, l_300 ),
            shadeFetcher( '400', l_300, l_500 ),
            shadeFetcher( '600', l_500, l_700 ),
            shadeFetcher( '800', l_700, l_900 ),
        ] );

        const [
            l_150,
            l_250,
            l_750,
            l_850,
        ] = await Promise.all( [
            shadeFetcher( '150', l_100, l_200 ),
            shadeFetcher( '250', l_200, l_300 ),
            shadeFetcher( '750', l_700, l_800 ),
            shadeFetcher( '850', l_800, l_900 ),
        ] );

        const defaultLevels: {
            [ L in ColourUtilities.Levels.Required ]: Tokens_Colour_ShadeMap.Shade<T_Types>;
        } = {
            '100': l_100,
            '150': l_150,
            '200': l_200,
            '250': l_250,
            '300': l_300,
            '400': l_400,
            '500': l_500,
            '600': l_600,
            '700': l_700,
            '750': l_750,
            '800': l_800,
            '850': l_850,
            '900': l_900,
        };

        const completeLevels: (
            | [
                ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
                Tokens_Colour_ShadeMap.Shade<T_Types>,
            ]
            | Promise<[
                ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ],
                Tokens_Colour_ShadeMap.Shade<T_Types>,
            ]>
        )[] = [];

        const levelsToInclude = [
            ...Object.keys( defaultLevels ) as ( keyof typeof defaultLevels )[],
            ...extraLevels
        ].sort();

        levelLoop:
        for ( const level of levelsToInclude ) {

            // continues
            if ( level in defaultLevels ) {
                completeLevels.push( [
                    level,
                    defaultLevels[ level as ColourUtilities.Levels.Required ],
                ] );
                continue levelLoop;
            }

            // continues
            if ( part[ level ] ) {
                completeLevels.push(
                    shadeMaker( level, part[ level ] ).then(
                        shade => [ level, shade ]
                    )
                );
                continue levelLoop;
            }

            let lowerLevel: ColourUtilities.Levels.Required;
            let higherLevel: ColourUtilities.Levels.Required;

            // continues for 000, 050, and 950
            switch ( level as ColourUtilities.Levels.Optional ) {

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
            }

            completeLevels.push(
                ColourUtilities.mixColours(
                    defaultLevels[ lowerLevel ],
                    defaultLevels[ higherLevel ],
                ).then(
                    mixed => shadeMaker(
                        level,
                        mixed,
                    ).then( shade => [ level, shade ] )
                )
            );
        }

        return Promise.all( completeLevels ).then(
            entries => Object.fromEntries( entries ) as {
                [ L in ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ] ]: Tokens_Colour_ShadeMap.Shade<T_Types>;
            }
        );
    }

    /**
     * Sample shade maps for contrast & level goals.
     */
    export namespace Yardsticks {

        export const black = { l: 0, c: 0, h: 0, } as const;
        export const white = { l: 100, c: 0, h: 0, } as const;

        export const base = {
            '100': { l: 97, c: 0, h: 0, },
            '300': { l: 78, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '700': { l: 22, c: 0, h: 0, },
            '900': { l: 3, c: 0, h: 0, },
        } as const;

        export const accent = {
            '100': { l: 97, c: 0, h: 0, },
            '500': { l: 50.5, c: 0, h: 0, },
            '900': { l: 4, c: 0, h: 0, },
        } as const;
    }
}