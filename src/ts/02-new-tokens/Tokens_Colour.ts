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

import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';

import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';

import type { TokenLevels_Extended } from './@utils.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Colour<
    T_ColourName extends string,
    T_ExtraLevels extends TokenLevels_Extended,
> extends AbstractTokens<Tokens_Colour.Data<T_ColourName, T_ExtraLevels>> {

    public readonly data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;

    public constructor (
        protected readonly allNames: readonly T_ColourName[],
        protected readonly extraLevels: readonly T_ExtraLevels[],
        input: Tokens_Colour.InputParam<T_ColourName, T_ExtraLevels>,
    ) {
        super();

        this.data = objectGenerator(
            this.allNames,
            ( name ) => new Tokens_Colour_ShadeMap(
                this.allNames,
                this.extraLevels,
                name,
                input[ name ] ?? {},
            ),
        );
    }

    /**
     * Adds contrast tests to all the colour maps.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTests() {

        for ( const t_colourName in this.data ) {
            const colourName = t_colourName as keyof typeof this.data;

            for ( const t_test_colourName in this.data ) {
                const test_colourName = t_test_colourName as keyof typeof this.data;

                await this.data[ colourName ].addContrastTests(
                    test_colourName,
                    this.data[ test_colourName ],
                );
            }
        }
    }

    public toJSON(): Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels> {

        return objectMap(
            this.data,
            ( { value } ) => value.toJSON(),
        );
    }

    public toScssVars() {

        return objectMap(
            this.data,
            ( { value } ) => value.toScssVars(),
        );
    }
}

/**
 * Utilities for the {@link Tokens_Colour} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Colour {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in T_ColourName ]: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in T_ColourName ]?: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = {
            [ N in T_ColourName ]: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
        };
}