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
export class Tokens_Colour<
    T_AdditionalShadeMaps extends string = never,
> extends AbstractTokens<
    typeof Tokens_Colour.Schema,
    Tokens_Colour.Export<T_AdditionalShadeMaps>,
    Tokens_Colour.Part<T_AdditionalShadeMaps>,
    Tokens_Colour.JSON<T_AdditionalShadeMaps>,
    Tokens_Colour.ScssVars<T_AdditionalShadeMaps>
> {

    public static get DEFAULT() {

        return {
            base: {},

            primary: {
                '100': { h: 281, s: 81, l: 97 },
                '500': { h: 281, s: 50, l: 53 },
                '900': { h: 281, s: 85, l: 2 },
            },

            secondary: {
                '100': { h: 146, s: 72, l: 95 },
                '500': { h: 166, s: 90, l: 29 },
                '900': { h: 166, s: 100, l: 1 },
            },

            active: {
                '100': { h: 350, s: 83, l: 97 },
                '500': { h: 350, s: 49, l: 54 },
                '900': { h: 357, s: 100, l: 2 },
            },
        } satisfies Tokens_Colour.Part;
    }

    get schema() {
        return Tokens_Colour.Schema;
    }

    protected readonly additionalMapKeys: T_AdditionalShadeMaps[];

    public readonly base: Tokens_Colour_ShadeMap;
    public readonly primary: Tokens_Colour_ShadeMap;
    public readonly secondary: Tokens_Colour_ShadeMap;
    public readonly active: Tokens_Colour_ShadeMap;

    public readonly additional: {
        [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap;
    };

    public constructor (
        input: Tokens_Colour.Part<T_AdditionalShadeMaps>,
    );

    public constructor (
        input?: Tokens_Colour.Part<never>,
    );

    public constructor (
        input?: Tokens_Colour.Part<T_AdditionalShadeMaps>,
    ) {
        super( input ?? Tokens_Colour.DEFAULT as Tokens_Colour.Part<T_AdditionalShadeMaps> );

        this.base = new Tokens_Colour_ShadeMap( 'base', input?.base ?? {} );
        this.primary = new Tokens_Colour_ShadeMap( 'primary', input?.primary ?? {} );
        this.secondary = new Tokens_Colour_ShadeMap( 'secondary', input?.secondary ?? {} );
        this.active = new Tokens_Colour_ShadeMap( 'active', input?.active ?? {} );

        this.additionalMapKeys = Object.keys( input ?? {} ).filter(
            _key => _key.match( /^(base|primary|secondary|active)$/gi ) === null
        ) as T_AdditionalShadeMaps[];

        const addMaps: {
            [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap;
        } = {};

        for ( const key of this.additionalMapKeys ) {
            addMaps[ key ] = new Tokens_Colour_ShadeMap( key, input?.[ key ] );
        }

        this.additional = addMaps as {
            [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap;
        };
    }

    public valueOf(): Tokens_Colour.Export<T_AdditionalShadeMaps> {

        const addMaps: {
            [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.Export;
        } = {};

        for ( const key of this.additionalMapKeys ) {
            addMaps[ key ] = this.additional[ key ].valueOf();
        }

        return {
            base: this.base.valueOf(),
            primary: this.primary.valueOf(),
            secondary: this.secondary.valueOf(),
            active: this.active.valueOf(),

            ...addMaps as {
                [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.Export;
            },
        };
    }

    public toJSON(): Tokens_Colour.JSON<T_AdditionalShadeMaps> {

        const addMaps: {
            [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.JSON;
        } = {};

        for ( const key of this.additionalMapKeys ) {
            addMaps[ key ] = this.additional[ key ].toJSON();
        }

        return {
            base: this.base.toJSON(),
            primary: this.primary.toJSON(),
            secondary: this.secondary.toJSON(),
            active: this.active.toJSON(),

            ...addMaps as {
                [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.JSON;
            },
        };
    }

    public toScssVars(): Tokens_Colour.ScssVars<T_AdditionalShadeMaps> {

        const addMaps: {
            [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.ScssVars;
        } = {};

        for ( const key of this.additionalMapKeys ) {
            addMaps[ key ] = this.additional[ key ].toScssVars();
        }

        return {
            base: this.base.toScssVars(),
            primary: this.primary.toScssVars(),
            secondary: this.secondary.toScssVars(),
            active: this.active.toScssVars(),

            ...addMaps as {
                [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.ScssVars;
            },
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour {

    export const Schema = z.object( {
        base: Tokens_Colour_ShadeMap.Schema,
        primary: Tokens_Colour_ShadeMap.Schema,
        secondary: Tokens_Colour_ShadeMap.Schema,
        active: Tokens_Colour_ShadeMap.Schema,
    } ).and( z.record( z.string(), Tokens_Colour_ShadeMap.Schema ) );

    /**
     * @interface
     */
    export type Export<
        T_AdditionalShadeMaps extends string = never,
    > = {
        base: Tokens_Colour_ShadeMap.Export;
        primary: Tokens_Colour_ShadeMap.Export;
        secondary: Tokens_Colour_ShadeMap.Export;
        active: Tokens_Colour_ShadeMap.Export;
    } & {
            [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.Export;
        };

    export type JSON<
        T_AdditionalShadeMaps extends string = never,
    > = {
        base: Tokens_Colour_ShadeMap.JSON;
        primary: Tokens_Colour_ShadeMap.JSON;
        secondary: Tokens_Colour_ShadeMap.JSON;
        active: Tokens_Colour_ShadeMap.JSON;
    } & {
            [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.JSON;
        };

    /**
     * The partialized version of the {@link Tokens_Colour.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     * @interface
     */
    export type Part<
        T_AdditionalShadeMaps extends string = never,
    > = {
        base?: Tokens_Colour_ShadeMap.Part;
        primary?: Tokens_Colour_ShadeMap.Part;
        secondary?: Tokens_Colour_ShadeMap.Part;
        active?: Tokens_Colour_ShadeMap.Part;
    } & {
            [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.Part;
        };

    export type ScssVars<
        T_AdditionalShadeMaps extends string = never,
    > = {
        base?: Tokens_Colour_ShadeMap.ScssVars;
        primary?: Tokens_Colour_ShadeMap.ScssVars;
        secondary?: Tokens_Colour_ShadeMap.ScssVars;
        active?: Tokens_Colour_ShadeMap.ScssVars;
    } & {
            [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.ScssVars;
        };
}