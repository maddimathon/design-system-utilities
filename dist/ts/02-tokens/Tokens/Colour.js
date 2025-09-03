/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
// <
//     T_AdditionalShadeMaps extends string = never,
// >
export class Tokens_Colour extends AbstractTokens {
    get schema() {
        return Tokens_Colour.Schema;
    }
    // protected readonly additionalMapKeys: T_AdditionalShadeMaps[];
    base;
    primary;
    secondary;
    active;
    // public readonly additional: {
    //     [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap;
    // };
    // public constructor (
    //     input: Tokens_Colour.Part,
    // );
    // public constructor (
    //     input?: Tokens_Colour.Part<never>,
    // );
    constructor(input) {
        super(input ?? {});
        const parsed = this.parseSchema(this.schema, input, {
            name: `Tokens_Colour`,
            location: 'src/ts/02-tokens/Tokens/Colour.ts:66',
        });
        this.base = parsed.base;
        this.primary = parsed.primary;
        this.secondary = parsed.secondary;
        this.active = parsed.active;
        // this.additionalMapKeys = Object.keys( input ?? {} ).filter(
        //     _key => _key.match( /^(base|primary|secondary|active)$/gi ) === null
        // ) as T_AdditionalShadeMaps[];
        // const addMaps: {
        //     [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap;
        // } = {};
        // for ( const key of this.additionalMapKeys ) {
        //     addMaps[ key ] = new Tokens_Colour_ShadeMap( key, input?.[ key ] );
        // }
        // this.additional = addMaps as {
        //     [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap;
        // };
    }
    valueOf() {
        // const addMaps: {
        //     [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.Parsed;
        // } = {};
        // for ( const key of this.additionalMapKeys ) {
        //     addMaps[ key ] = this.additional[ key ].valueOf();
        // }
        return {
            base: this.base.valueOf(),
            primary: this.primary.valueOf(),
            secondary: this.secondary.valueOf(),
            active: this.active.valueOf(),
            // ...addMaps as {
            //     [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.Parsed;
            // },
        };
    }
    toJSON() {
        // const addMaps: {
        //     [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.JSON;
        // } = {};
        // for ( const key of this.additionalMapKeys ) {
        //     addMaps[ key ] = this.additional[ key ].toJSON();
        // }
        return {
            base: this.base.toJSON(),
            primary: this.primary.toJSON(),
            secondary: this.secondary.toJSON(),
            active: this.active.toJSON(),
            // ...addMaps as {
            //     [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.JSON;
            // },
        };
    }
    toScssVars() {
        // const addMaps: {
        //     [ K in T_AdditionalShadeMaps ]?: Tokens_Colour_ShadeMap.ScssVars;
        // } = {};
        // for ( const key of this.additionalMapKeys ) {
        //     addMaps[ key ] = this.additional[ key ].toScssVars();
        // }
        return {
            base: this.base.toScssVars(),
            primary: this.primary.toScssVars(),
            secondary: this.secondary.toScssVars(),
            active: this.active.toScssVars(),
            // ...addMaps as {
            //     [ K in T_AdditionalShadeMaps ]: Tokens_Colour_ShadeMap.ScssVars;
            // },
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Colour) {
    /* SCHEMA
     * ====================================================================== */
    // TODO - make this work by only setting 500
    Tokens_Colour.Schema = z.object({
        base: Tokens_Colour_ShadeMap.Schema.default({}),
        primary: Tokens_Colour_ShadeMap.Schema.default({
            '100': { l: 96, c: 7, h: 318 },
            '500': { l: 47, c: 50, h: 318 },
            '900': { l: 2, c: 4, h: 318 },
        }),
        secondary: Tokens_Colour_ShadeMap.Schema.default({
            '100': { l: 98, c: 8.5, h: 180 },
            '500': { l: 52, c: 40.5, h: 180 },
            '900': { l: 2, c: 100, h: 180 },
        }),
        active: Tokens_Colour_ShadeMap.Schema.default({
            '100': { l: 96, c: 5, h: 15 },
            '500': { l: 50, c: 49, h: 15 },
            '900': { l: 2, c: 3, h: 15 },
        }),
    }).transform((part) => AbstractTokens.objectMap(part, (key, value) => new Tokens_Colour_ShadeMap(`Tokens_Colour.${key}`, value)));
})(Tokens_Colour || (Tokens_Colour = {}));
//# sourceMappingURL=Colour.js.map