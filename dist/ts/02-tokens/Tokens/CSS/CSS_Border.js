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
import { tokenLevels_extended, } from '../../../00-schemata/@utils.js';
import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_CSS_Border extends AbstractTokens {
    get schema() {
        return Tokens_CSS_Border.Schema;
    }
    /**
     * Border radii for CSS.
     *
     * Default keys are '100', '200', '400'. After merging, values are
     * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    radius;
    /**
     * Relative stroke widths for CSS. Meant to be used for underlines and
     * spacing. Written in css as em units.
     *
     * Default keys are '100', '200', '400', '600', '800', '900'. After
     * merging, values are rounded with {@link AbstractTokens.roundToPixel}
     * (factor = 32).
     */
    stroke;
    /**
     * Border widths for CSS.
     *
     * Default keys are '100', '200', '300', '400'. After merging, values
     * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    width;
    constructor(input) {
        super(input ?? {});
        this.radius = this.parseSchema(this.schema.shape.radius, input?.radius ?? {}, {
            name: 'Tokens_CSS_Border.radius',
            location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:74',
        });
        this.stroke = this.parseSchema(this.schema.shape.stroke, input?.stroke ?? {}, {
            name: 'Tokens_CSS_Border.stroke',
            location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:86',
        });
        this.width = this.parseSchema(this.schema.shape.width, input?.width ?? {}, {
            name: 'Tokens_CSS_Border.width',
            location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:98',
        });
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return this.valueOf();
    }
    valueOf() {
        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_CSS_Border) {
    /* SCHEMA
     * ====================================================================== */
    Tokens_CSS_Border.Schema = z.object({
        radius: z.object({
            '100': z.number().default(0.25),
            '200': z.number().default(0.375),
            '400': z.number().default(0.625),
        }).and(z.record(tokenLevels_extended, z.number())).transform((map) => AbstractTokens.objectMap(map, (_key, _value) => _key && (typeof _value === 'number'
            ? AbstractTokens.roundToPixel(_value, 32)
            : _value))),
        width: z.object({
            '100': z.number().default(0.0625),
            '200': z.number().default(0.125),
            '300': z.number().default(0.1875),
            '400': z.number().default(0.25),
        }).and(z.record(tokenLevels_extended, z.number())).transform((map) => AbstractTokens.objectMap(map, (_key, _value) => _key && (typeof _value === 'number'
            ? AbstractTokens.roundToPixel(_value, 32)
            : _value))),
        stroke: z.object({
            '100': z.number().default(0.5 / 16),
            '200': z.number().default(1 / 16),
            '400': z.number().default(2 / 16),
            '600': z.number().default(3 / 16),
            '800': z.number().default(4 / 16),
            '900': z.number().default(6 / 16),
        }).and(z.record(tokenLevels_extended, z.number())).transform((map) => AbstractTokens.objectMap(map, (_key, _value) => _key && (typeof _value === 'number'
            ? AbstractTokens.roundToPixel(_value, 32)
            : _value))),
    });
    ;
})(Tokens_CSS_Border || (Tokens_CSS_Border = {}));
//# sourceMappingURL=CSS_Border.js.map