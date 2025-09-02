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
import * as Tokens_CSS from './css.js';
import * as Tokens_Typography from './typography.js';
import { tokenLevels_extended } from './@utils.js';
/* # SCHEMA
 * ========================================================================== */
/**
 * Complete schema for the design system tokens built using this package.
 *
 * @since 0.1.0-alpha.draft
 */
export const Tokens = z.object({
    spacing: z.object({
        /**
         * Used for scaling various size sets relative to each other - e.g.,
         * margins, font sizes, line heights.
         */
        multiplier: z.number().default(1.15625),
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
        margin: z.object({
            '100': z.number().default(-9),
            '200': z.number().default(-6),
            '300': z.number().default(-3),
            '400': z.number().default(0),
            '600': z.number().default(4),
            '800': z.number().default(8),
        }).and(z.record(tokenLevels_extended, z.number())),
    }),
    typography: Tokens_Typography.Typography,
    CSS: Tokens_CSS.CSS,
});
;
;
//# sourceMappingURL=index.js.map