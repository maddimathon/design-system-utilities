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
        [ K in T_ColourName ]: Tokens_Colour_ShadeMap;
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

    public valueOf(): Tokens_Colour.Parsed<T_ColourName> {

        return AbstractTokens.objectMap(
            this.maps,
            ( name, map ) => map.valueOf()
        );
    }

    public toJSON(): Tokens_Colour.JSON<T_ColourName> {

        return AbstractTokens.objectMap(
            this.maps,
            ( name, map ) => map.toJSON()
        );
    }

    public toScssVars(): Tokens_Colour.ScssVars<T_ColourName> {

        return AbstractTokens.objectMap(
            this.maps,
            ( name, map ) => map.toScssVars()
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
        } = AbstractTokens.objectGenerator(
            names,
            () => Tokens_Colour_ShadeMap.Schema,
        );

        return z.object( obj ).transform(
            ( part ): {
                [ K in T_ColourName ]: Tokens_Colour_ShadeMap
            } => AbstractTokens.objectMap(
                part,
                ( key, value ) => new Tokens_Colour_ShadeMap( `Tokens_Colour.${ String( key ) }`, value )
            )
        );
    };

    export type Schema<
        T_ColourName extends string,
    > = z.ZodType<{
        [ K in T_ColourName ]: Tokens_Colour_ShadeMap;
    }, {}, {
            [ K in T_ColourName ]: typeof Tokens_Colour_ShadeMap.Schema[ '_input' ];
        }>;



    /* TYPES
     * ====================================================================== */

    export type Parsed<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]: Tokens_Colour_ShadeMap.Parsed;
        };

    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.Part;
        };

    export type JSON<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.JSON;
        };

    export type ScssVars<
        T_ColourName extends string,
    > = {
            [ K in T_ColourName ]?: Tokens_Colour_ShadeMap.ScssVars;
        };
}