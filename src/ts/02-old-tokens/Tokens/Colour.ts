/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

import { objectMap } from '../../01-utilities/objectMap.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';

/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 * @internal
 */
// <
//     T_AdditionalShadeMaps extends string = never,
// >
export class Tokens_Colour<
    T_ColourName extends string,
> extends AbstractTokens<
    Tokens_Colour.Schema<T_ColourName>,
    Tokens_Colour.Parsed<T_ColourName>,
    Tokens_Colour.Part<T_ColourName>,
    Tokens_Colour.JSON<T_ColourName>,
    Tokens_Colour.ScssVars<T_ColourName>
> {

    get schema(): Tokens_Colour.Schema<T_ColourName> {
        return Tokens_Colour.Schema( this.names );
    }

    public readonly maps: {
        [ K in T_ColourName ]: Tokens_Colour_ShadeMap<T_ColourName>;
    };

    public constructor (
        public readonly names: T_ColourName[],
        input?: Tokens_Colour.Part<T_ColourName>,
    ) {
        super( input ?? {} );

        this.maps = this.parseSchema(
            this.schema,
            input,
            {
                name: `Tokens_Colour`,
                location: 'src/ts/02-tokens/Tokens/Colour.ts:66',
            },
        );
    }

    /**
     * Adds contrast tests to all the colour maps.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTests() {

        for ( const t_colourName in this.maps ) {
            const colourName = t_colourName as keyof typeof this.maps;

            for ( const t_test_colourName in this.maps ) {
                const test_colourName = t_test_colourName as keyof typeof this.maps;

                await this.maps[ colourName ].addContrastTests(
                    test_colourName,
                    this.maps[ test_colourName ].map,
                );
            }
        }
    }

    public valueOf(): Tokens_Colour.Parsed<T_ColourName> {

        return objectMap(
            this.maps,
            ( { value } ) => value.valueOf()
        );
    }

    public toJSON(): Tokens_Colour.JSON<T_ColourName> {

        return objectMap(
            this.maps,
            ( { value } ) => value.toJSON()
        );
    }

    public toScssVars(): Tokens_Colour.ScssVars<T_ColourName> {

        return objectMap(
            this.maps,
            ( { value } ) => value.toScssVars()
        );
    }
}

/**
 * Utilities for the {@link Tokens} class.
 *
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour {



    /* SCHEMA
     * ====================================================================== */

    export const Schema = <
        T_ColourName extends string,
    >( names: T_ColourName[] ) => {

        const obj: {
            [ K in T_ColourName ]: typeof Tokens_Colour_ShadeMap.Schema;
        } = objectGenerator(
            names,
            () => Tokens_Colour_ShadeMap.Schema,
        );

        return z.object( obj ).transform(
            ( part ): {
                [ K in T_ColourName ]: Tokens_Colour_ShadeMap<T_ColourName>
            } => objectMap(
                part,
                ( { key, value } ) => new Tokens_Colour_ShadeMap( `Tokens_Colour.${ String( key ) }`, value )
            )
        );
    };

    export type Schema<
        T_ColourName extends string,
    > = z.ZodType<{
        [ K in T_ColourName ]: Tokens_Colour_ShadeMap<T_ColourName>;
    }, {}, {
            [ K in T_ColourName ]: typeof Tokens_Colour_ShadeMap.Schema[ '_input' ];
        }>;



    /* TYPES
     * ====================================================================== */

    export type Parsed<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]: Tokens_Colour_ShadeMap.Parsed<T_ColourName>;
        };

    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.Part<T_ColourName>;
        };

    export type JSON<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.JSON<T_ColourName>;
        };

    export type ScssVars<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.ScssVars<T_ColourName>;
        };
}