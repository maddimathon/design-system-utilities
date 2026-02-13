/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { arrayUnique } from '@maddimathon/utility-typescript/functions';
// import { VariableInspector } from '@maddimathon/utility-typescript/classes';

import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';

import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import { Tokens_Colour_ShadeMap_Shade } from './Colour/ShadeMap/ShadeMap_Shade.js';

import type {
    ColourNameGeneric,
} from './@types.d.ts';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Colour<
    T_ColourName extends string,
    T_ExtraLevels extends ColourUtilities.Levels.Optional,
> extends AbstractTokens<Tokens_Colour.Data<T_ColourName, T_ExtraLevels>> {

    public readonly data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;

    protected readonly allNames: readonly ColourNameGeneric<T_ColourName>[];

    public constructor (
        allNames: readonly T_ColourName[],
        protected readonly extraLevels: readonly T_ExtraLevels[],
        input: Tokens_Colour.InputParam<T_ColourName, T_ExtraLevels>,
    ) {
        super();

        this.allNames = arrayUnique(
            [
                'base',
                ...allNames,
            ]
        );

        this.data = {

            black: new Tokens_Colour_ShadeMap_Shade(
                this.allNames,
                this.extraLevels,
                'black',
                'black',
                input.black ?? Tokens_Colour_ShadeMap.Yardsticks.black,
            ),

            white: new Tokens_Colour_ShadeMap_Shade(
                this.allNames,
                this.extraLevels,
                'white',
                'white',
                input.white ?? Tokens_Colour_ShadeMap.Yardsticks.white,
            ),

            ...objectGenerator(
                this.allNames,
                ( name ) => new Tokens_Colour_ShadeMap(
                    this.allNames,
                    this.extraLevels,
                    name,
                    input[ name ] ?? {},
                ),
            ),
        };
    }

    /**
     * Adds contrast tests to all the colour maps.
     * 
     * @since 0.1.0-alpha
     */
    public async addContrastTests() {

        for ( const t_colourName in this.data ) {
            const colourName = t_colourName as keyof typeof this.data;

            const promises: Promise<any>[] = [];

            for ( const t_test_colourName in this.data ) {
                const test_colourName = t_test_colourName as keyof typeof this.data;

                // continues
                if ( test_colourName === 'black' || test_colourName === 'white' ) {
                    continue;
                }

                if ( this.data[ colourName ] instanceof Tokens_Colour_ShadeMap_Shade ) {

                    for ( const t_testLevel in this.data[ test_colourName ].data ) {
                        const testLevel = t_testLevel as ColourUtilities.Levels.Required | T_ExtraLevels;

                        // VariableInspector.dump( { 'this.data[ test_colourName ]': this.data[ test_colourName ] }, { includeValue: false } );

                        promises.push(
                            (
                                this.data[ colourName ] as Tokens_Colour_ShadeMap_Shade<ColourNameGeneric<T_ColourName>, T_ExtraLevels>
                            ).addContrastTest(
                                test_colourName,
                                testLevel,
                                this.data[ test_colourName ].data[ testLevel ].data,
                            )
                        );
                    }

                } else {
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
    }

    public toJSON(): Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels> {
        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toJSON(),
        ) as Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
    }

    public toScssVars() {
        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toScssVars(),
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
    export type Data<
        T_ColourName extends string,
        T_ExtraLevels extends ColourUtilities.Levels.Optional,
    > = {
        black: Tokens_Colour_ShadeMap_Shade<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
        white: Tokens_Colour_ShadeMap_Shade<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    } & {
            [ N in ColourNameGeneric<T_ColourName> ]: Tokens_Colour_ShadeMap<
                ColourNameGeneric<T_ColourName>,
                T_ExtraLevels
            >;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraLevels extends ColourUtilities.Levels.Optional,
    > = {
        black?: Tokens_Colour_ShadeMap_Shade.InputParam;
        white?: Tokens_Colour_ShadeMap_Shade.InputParam;
    } & {
            [ N in ColourNameGeneric<T_ColourName> ]?: Tokens_Colour_ShadeMap.InputParam<
                ColourNameGeneric<T_ColourName>,
                T_ExtraLevels
            >;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends ColourUtilities.Levels.Optional,
    > = {
        black: Tokens_Colour_ShadeMap_Shade.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
        white: Tokens_Colour_ShadeMap_Shade.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    } & {
            [ N in ColourNameGeneric<T_ColourName> ]: Tokens_Colour_ShadeMap.JsonReturn<
                ColourNameGeneric<T_ColourName>,
                T_ExtraLevels
            >;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<
        T_ColourName extends string,
        T_ExtraLevels extends ColourUtilities.Levels.Optional,
    > = {
        black: Tokens_Colour_ShadeMap_Shade.ScssVars;
        white: Tokens_Colour_ShadeMap_Shade.ScssVars;
    } & {
            [ N in ColourNameGeneric<T_ColourName> ]: Tokens_Colour_ShadeMap.ScssVars<
                T_ExtraLevels
            >;
        };
}