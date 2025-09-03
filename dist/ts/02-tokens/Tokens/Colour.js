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
export class Tokens_Colour extends AbstractTokens {
    static get DEFAULT() {
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
        };
    }
    get schema() {
        return Tokens_Colour.Schema;
    }
    additionalMapKeys;
    base;
    primary;
    secondary;
    active;
    additional;
    constructor(input) {
        super(input ?? Tokens_Colour.DEFAULT);
        this.base = new Tokens_Colour_ShadeMap('base', input?.base ?? {});
        this.primary = new Tokens_Colour_ShadeMap('primary', input?.primary ?? {});
        this.secondary = new Tokens_Colour_ShadeMap('secondary', input?.secondary ?? {});
        this.active = new Tokens_Colour_ShadeMap('active', input?.active ?? {});
        this.additionalMapKeys = Object.keys(input ?? {}).filter(_key => _key.match(/^(base|primary|secondary|active)$/gi) === null);
        const addMaps = {};
        for (const key of this.additionalMapKeys) {
            addMaps[key] = new Tokens_Colour_ShadeMap(key, input?.[key]);
        }
        this.additional = addMaps;
    }
    valueOf() {
        const addMaps = {};
        for (const key of this.additionalMapKeys) {
            addMaps[key] = this.additional[key].valueOf();
        }
        return {
            base: this.base.valueOf(),
            primary: this.primary.valueOf(),
            secondary: this.secondary.valueOf(),
            active: this.active.valueOf(),
            ...addMaps,
        };
    }
    toJSON() {
        const addMaps = {};
        for (const key of this.additionalMapKeys) {
            addMaps[key] = this.additional[key].toJSON();
        }
        return {
            base: this.base.toJSON(),
            primary: this.primary.toJSON(),
            secondary: this.secondary.toJSON(),
            active: this.active.toJSON(),
            ...addMaps,
        };
    }
    toScssVars() {
        const addMaps = {};
        for (const key of this.additionalMapKeys) {
            addMaps[key] = this.additional[key].toScssVars();
        }
        return {
            base: this.base.toScssVars(),
            primary: this.primary.toScssVars(),
            secondary: this.secondary.toScssVars(),
            active: this.active.toScssVars(),
            ...addMaps,
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
    Tokens_Colour.Schema = z.object({
        base: Tokens_Colour_ShadeMap.Schema,
        primary: Tokens_Colour_ShadeMap.Schema,
        secondary: Tokens_Colour_ShadeMap.Schema,
        active: Tokens_Colour_ShadeMap.Schema,
    }).and(z.record(z.string(), Tokens_Colour_ShadeMap.Schema));
})(Tokens_Colour || (Tokens_Colour = {}));
//# sourceMappingURL=Colour.js.map