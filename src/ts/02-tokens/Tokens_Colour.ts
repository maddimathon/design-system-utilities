/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectMap } from '@maddimathon/utility-typescript';

import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGeneratorAsync } from '../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../01-utilities/objectKeySort_Tokens.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';

import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';

import type {
    TokenTypes,
} from './@types.d.ts';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Colour<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
    data: Tokens_Colour.Data<T_Types>;
    json: Tokens_Colour.JsonReturn<T_Types>;
    scss: Tokens_Colour.ScssVars<T_Types>;
}> {

    /**
     * Allows for async building.
     */
    public static async build<T_Types extends TokenTypes.Colour.TypeParams>(
        allNames: TokenTypes.Colour.GenericNameArray<T_Types[ 'names' ]>,
        extraLevels: readonly T_Types[ 'extraLevels' ][],
        input: Tokens_Colour.InputParam<T_Types>,
    ): Promise<Tokens_Colour<T_Types>> {

        return Promise.all( [

            Tokens_Colour_ShadeMap.Shade.build(
                allNames,
                extraLevels,
                'black',
                'black',
                input.black ?? Tokens_Colour_ShadeMap.Yardsticks.black,
            ),

            Tokens_Colour_ShadeMap.Shade.build(
                allNames,
                extraLevels,
                'white',
                'white',
                input.white ?? Tokens_Colour_ShadeMap.Yardsticks.white,
            ),

            objectGeneratorAsync(
                allNames,
                ( name ) => Tokens_Colour_ShadeMap.build(
                    allNames,
                    extraLevels,
                    name,
                    input[ name ] ?? {},
                ),
            ),

        ] ).then(
            ( [ black, white, colourMaps ] ) => new Tokens_Colour(
                allNames,
                extraLevels,
                {
                    $: { black, white },
                    ...colourMaps,
                },
            )
        );
    }

    protected constructor (
        protected readonly allNames: TokenTypes.Colour.GenericNameArray<T_Types[ 'names' ]>,
        protected readonly extraLevels: readonly T_Types[ 'extraLevels' ][],
        public readonly data: Tokens_Colour.Data<T_Types>,
    ) {
        super();
    }

    /**
     * Adds contrast tests to all the colour maps.
     * 
     * @since 0.1.0-alpha
     */
    public async addContrastTests(): Promise<void> {
        const promises: Promise<any>[] = [];

        for ( const colourName of [ 'black', 'white' ] as const ) {

            for ( const t_test_colourName in this.data ) {
                const test_colourName = t_test_colourName as keyof typeof this.data;

                // continues
                if (
                    test_colourName === '$'
                    || test_colourName === 'black'
                    || test_colourName === 'white'
                ) {
                    continue;
                }

                for ( const t_testLevel in this.data[ test_colourName ].data ) {
                    const testLevel = t_testLevel as ColourUtilities.Levels.Required | T_Types[ 'extraLevels' ];

                    promises.push(
                        this.data.$[ colourName ].addContrastTest(
                            test_colourName,
                            testLevel,
                            this.data[ test_colourName ].data[ testLevel ].data,
                        )
                    );
                }
            }
        }

        for ( const t_colourName in this.data ) {
            // continues
            if (
                t_colourName === '$'
                || t_colourName === 'black'
                || t_colourName === 'white'
            ) {
                continue;
            }

            const colourName = t_colourName as Exclude<keyof typeof this.data, '$' | 'black' | 'white'>;

            for ( const t_test_colourName in this.data ) {
                // continues
                if (
                    t_test_colourName === '$'
                    || t_test_colourName === 'black'
                    || t_test_colourName === 'white'
                ) {
                    continue;
                }

                const test_colourName = t_test_colourName as Exclude<keyof typeof this.data, '$' | 'black' | 'white'>;

                promises.push(
                    this.data[ colourName ].addContrastTests(
                        test_colourName,
                        this.data[ test_colourName ],
                    )
                );
            }
        }

        await Promise.all( promises );
    }

    public toJSON(): Tokens_Colour.JsonReturn<T_Types> {

        return objectMap(
            this.data,
            ( entry ) =>
                entry[ 0 ] === '$'
                    ? objectMap(
                        entry[ 1 ] as typeof this.data[ '$' ],
                        ( [ _key, _val ] ) => ( _val as Tokens_Colour_ShadeMap.Shade<T_Types> ).toJSON(),
                    )
                    : ( entry[ 1 ] as typeof this.data[ 'base' ] ).toJSON(),
        ) as Tokens_Colour.JsonReturn<T_Types>;
    }

    public toScssVars(): Tokens_Colour.ScssVars<T_Types> {

        return objectKeySort_Tokens(
            objectMap(
                this.data,
                ( [ key, value ] ) =>
                    key === '$'
                        ? objectMap(
                            value as typeof this.data[ '$' ],
                            ( [ _key, _val ] ) => ( _val as Tokens_Colour_ShadeMap.Shade<T_Types> ).toScssVars()
                        )
                        : ( value as typeof this.data[ 'base' ] ).toScssVars(),
            ) as Tokens_Colour.ScssVars<T_Types>
        );
    }
}

/**
 * Utilities for the {@link Tokens_Colour} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Colour {

    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade<T_Types>;
            white: Tokens_Colour_ShadeMap.Shade<T_Types>;
        };
    } & TokenTypes.Colour.NameRecord<
        T_Types,
        Tokens_Colour_ShadeMap<T_Types>
    >;

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_Types extends TokenTypes.Colour.TypeParams> = {
        black?: Tokens_Colour_ShadeMap.Shade.InputParam;
        white?: Tokens_Colour_ShadeMap.Shade.InputParam;
    } & TokenTypes.Colour.PartialNameRecord<
        T_Types,
        Tokens_Colour_ShadeMap.InputParam<T_Types>
    >;

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>;
            white: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>;
        };
    } & TokenTypes.Colour.NameRecord<
        T_Types,
        Tokens_Colour_ShadeMap.JsonReturn<T_Types>
    >;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade.ScssVars;
            white: Tokens_Colour_ShadeMap.Shade.ScssVars;
        };
    } & TokenTypes.Colour.NameRecord<
        T_Types,
        Tokens_Colour_ShadeMap.ScssVars<T_Types>
    >;
}