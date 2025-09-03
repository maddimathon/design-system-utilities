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
 * @internal
 */
export class Tokens_Spacing extends AbstractTokens {
    get schema() {
        return Tokens_Spacing.Schema;
    }
    /**
     * Passed to the $margins token in the utility-sass base template.
     *
     * To get these into usable values, put the
     * {@link Tokens.spacing.multiplier} to the power of the value and
     * multiply it by your base value.
     *
     * For example, to make rems in scss this looks like:
     * ```scss
     * @each $key, $size in tokens.$margin {
     *     $margin: map.set(
     *         $margin,
     *         $key,
     *         math.round-to-pixel(math.pow(tokens.$scale_multiplier, $size) * 1.25)
     *     );
     * }
     * ```
     */
    margin;
    /**
     * Used for scaling various size sets relative to each other - e.g.,
     * margins, font sizes, line heights.
     */
    multiplier;
    constructor(input) {
        super(input ?? {});
        this.margin = this.parseSchema(this.schema.shape.margin, input?.margin ?? {}, {
            name: 'Tokens_Spacing.margin',
            location: 'src/ts/02-tokens/Tokens/Spacing.ts:71',
        });
        this.multiplier = this.parseSchema(this.schema.shape.multiplier, input?.multiplier, {
            name: 'Tokens_Spacing.multiplier',
            location: 'src/ts/02-tokens/Tokens/Spacing.ts:80',
        });
    }
    toJSON() {
        const _converter = (_val, _opts) => {
            const opts = {
                base: 1,
                multiplier: this.multiplier,
                roundToPixel: true,
                ..._opts,
            };
            let _rem = Math.pow(opts.multiplier, _val) * opts.base;
            if (opts.roundToPixel) {
                _rem = this.roundToPixel(_rem, opts.roundToPixel_factor);
            }
            return _rem;
        };
        const exp = this.valueOf();
        return {
            ...exp,
            margin: {
                rem: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0)),
                pt: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0, {
                    base: 11,
                    roundToPixel: true,
                    roundToPixel_factor: 2,
                })),
                px: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0, {
                    base: 16,
                    roundToPixel: true,
                    roundToPixel_factor: 1,
                })),
            },
        };
    }
    toScssVars() {
        const exp = this.valueOf();
        return {
            margin: exp.margin,
            spacing_multiplier: this.multiplier,
        };
    }
    valueOf() {
        return {
            multiplier: this.multiplier,
            margin: this.margin,
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Spacing) {
    /* SCHEMA
     * ====================================================================== */
    Tokens_Spacing.Schema = z.object({
        multiplier: z.number().default(1.15625),
        margin: z.object({
            '100': z.number().default(-9),
            '200': z.number().default(-6),
            '300': z.number().default(-3),
            '400': z.number().default(0),
            '600': z.number().default(4),
            '800': z.number().default(8),
        }).and(z.record(tokenLevels_extended, z.number())),
    });
})(Tokens_Spacing || (Tokens_Spacing = {}));
//# sourceMappingURL=Spacing.js.map