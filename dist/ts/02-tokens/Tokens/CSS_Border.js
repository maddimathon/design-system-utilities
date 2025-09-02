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
import { tokenLevels_extended } from '../../00-schemata/@utils.js';
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
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
        this.radius = this.objectMap(this.schema.shape.radius.parse(input?.radius ?? {}), (key, value) => key && this.roundToPixel(value, 32));
        this.stroke = this.objectMap(this.schema.shape.stroke.parse(input?.stroke ?? {}), (key, value) => key && this.roundToPixel(value, 32));
        this.width = this.objectMap(this.schema.shape.width.parse(input?.width ?? {}), (key, value) => key && this.roundToPixel(value, 32));
    }
    export() {
        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }
    toJSON() {
        return this.export();
    }
    toScssVars() {
        return this.export();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_CSS_Border) {
    Tokens_CSS_Border.Schema = z.object({
        radius: z.object({
            '100': z.number().default(0.25),
            '200': z.number().default(0.375),
            '400': z.number().default(0.625),
        }).and(z.record(tokenLevels_extended, z.number())),
        width: z.object({
            '100': z.number().default(0.0625),
            '200': z.number().default(0.125),
            '300': z.number().default(0.1875),
            '400': z.number().default(0.25),
        }).and(z.record(tokenLevels_extended, z.number())),
        stroke: z.object({
            '100': z.number().default(0.5 / 16),
            '200': z.number().default(1 / 16),
            '400': z.number().default(2 / 16),
            '600': z.number().default(3 / 16),
            '800': z.number().default(4 / 16),
            '900': z.number().default(6 / 16),
        }).and(z.record(tokenLevels_extended, z.number())),
    });
    ;
    ;
    ;
})(Tokens_CSS_Border || (Tokens_CSS_Border = {}));
//# sourceMappingURL=CSS_Border.js.map