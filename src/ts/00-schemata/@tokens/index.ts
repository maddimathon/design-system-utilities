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

import * as Tokens_CSS from './css.js';
import * as Tokens_Typography from './typography.js';

import { tokenLevels_extended } from './@utils.js';



/* # SCHEMA
 * ========================================================================== */

/**
 * Complete schema for the design system tokens built using this package.
 * 
 * @since ___PKG_VERSION___
 */
export const Tokens = z.object( {

    spacing: z.object( {

        /**
         * Used for scaling various size sets relative to each other - e.g.,
         * margins, font sizes, line heights.
         */
        multiplier: z.number().default( 1.15625 ),

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
        margin: z.object( {
            '100': z.number().default( -9 ),
            '200': z.number().default( -6 ),
            '300': z.number().default( -3 ),
            '400': z.number().default( 0 ),
            '600': z.number().default( 4 ),
            '800': z.number().default( 8 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),
    } ),

    typography: Tokens_Typography.Typography,

    CSS: Tokens_CSS.CSS,
} );


/* # INPUT TOKENS
 * ========================================================================== */

/**
 * The partialized version of the {@link Tokens} accepted as input.
 *
 * @since ___PKG_VERSION___
 * @interface
 */
export interface PartialTokens {
    spacing?: Partial<z.infer<typeof Tokens.shape.spacing>>;
    typography?: Partial<z.infer<typeof Tokens.shape.typography>>;
    css?: Tokens_CSS.Partial_CSS;
};

/**
 * Utilities for the {@link PartialTokens} interface.
 *
 * @since ___PKG_VERSION___
 */
export namespace PartialTokens {

    export interface Spacing extends NonNullable<PartialTokens[ 'spacing' ]> { }

    export namespace Spacing {

        export interface Margin extends NonNullable<Partial<NonNullable<PartialTokens[ 'spacing' ]>[ 'margin' ]>> { }
    }

    export interface Typography extends NonNullable<PartialTokens[ 'typography' ]> { }

    export namespace Typography {

        export interface LineHeight extends NonNullable<Partial<NonNullable<PartialTokens[ 'typography' ]>[ 'lineHeight' ]>> { }

        export interface Size extends NonNullable<Partial<NonNullable<PartialTokens[ 'typography' ]>[ 'size' ]>> { }
    }

    export interface CSS extends Tokens_CSS.Partial_CSS { }

    export namespace CSS {

        export interface Border extends NonNullable<Tokens_CSS.Partial_CSS[ 'border' ]> { }

        export interface Transition extends NonNullable<Tokens_CSS.Partial_CSS[ 'transition' ]> { }

        export interface ZIndex extends NonNullable<Tokens_CSS.Partial_CSS[ 'zIndex' ]> { }
    }
};