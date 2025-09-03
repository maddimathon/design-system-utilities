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
import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens {
    name;
    get schema() {
        return Tokens_Colour_ShadeMap_Shade.Schema;
    }
    hex;
    hsl;
    rgb;
    oklch;
    constructor(name, input) {
        super({});
        this.name = name;
        const parsed = this.parseSchema(this.schema, input ?? {}, {
            name: `Tokens_Colour_ShadeMap_Shade.${this.name}`,
            location: 'src/ts/02-tokens/Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.ts:56',
        });
        this.hex = parsed.hex;
        this.hsl = parsed.hsl;
        this.rgb = parsed.rgb;
        this.oklch = parsed.oklch;
    }
    valueOf() {
        return {
            hex: this.hex,
            hsl: this.hsl,
            rgb: this.rgb,
            oklch: this.oklch,
        };
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return `hsl( ${this.hsl.h}, ${this.hsl.s}%, ${this.hsl.l}% )`;
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Colour_ShadeMap_Shade) {
    Tokens_Colour_ShadeMap_Shade.Schema_Hex = z.string().toUpperCase().regex(/^#?[0-9|A-H]{3,6}$/i);
    Tokens_Colour_ShadeMap_Shade.Schema_HSL = z.object({
        h: z.number().nonnegative().lte(360),
        s: z.number().nonnegative().lte(100),
        l: z.number().nonnegative().lte(100),
    });
    Tokens_Colour_ShadeMap_Shade.Schema_RGB = z.object({
        r: z.number().nonnegative().lte(255),
        g: z.number().nonnegative().lte(255),
        b: z.number().nonnegative().lte(255),
    });
    Tokens_Colour_ShadeMap_Shade.Schema_OKLCH = z.object({
        l: z.number().nonnegative().lte(100),
        c: z.number().safe().lte(32),
        h: z.number().safe(),
    });
    Tokens_Colour_ShadeMap_Shade.Schema = z.union([
        Tokens_Colour_ShadeMap_Shade.Schema_Hex,
        Tokens_Colour_ShadeMap_Shade.Schema_HSL,
        Tokens_Colour_ShadeMap_Shade.Schema_RGB,
        Tokens_Colour_ShadeMap_Shade.Schema_OKLCH,
        z.object({
            hex: Tokens_Colour_ShadeMap_Shade.Schema_Hex,
            hsl: Tokens_Colour_ShadeMap_Shade.Schema_HSL,
            rgb: Tokens_Colour_ShadeMap_Shade.Schema_RGB,
            oklch: Tokens_Colour_ShadeMap_Shade.Schema_OKLCH,
        }),
    ]).transform((input) => {
        // returns - is already converted
        if (typeof input === 'object' && 'hex' in input) {
            return input;
        }
        // returns - is hex code
        if (typeof input === 'string') {
            return {
                hex: input,
                hsl: { h: 0, s: 0, l: 50 },
                rgb: { r: 80, g: 80, b: 80 },
                oklch: { l: 0.4313, c: 0, h: 0 },
            };
        }
        return {
            hex: '#505050',
            hsl: { h: 0, s: 0, l: 50 },
            rgb: { r: 80, g: 80, b: 80 },
            oklch: { l: 0.4313, c: 0, h: 0 },
        };
    });
    ;
    ;
})(Tokens_Colour_ShadeMap_Shade || (Tokens_Colour_ShadeMap_Shade = {}));
//# sourceMappingURL=Colour_ShadeMap_Shade.js.map