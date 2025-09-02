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

import { tokenLevels_extended } from './@utils.js';



/* # SCHEMA
 * ========================================================================== */

const transitionTime = z.string().regex( /^\d+m?s$/ );

export const CSS = z.object( {

    border: z.object( {

        /**
         * Border radii for CSS.
         *
         * Default keys are '100', '200', '400'. After merging, values are
         * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        radius: z.object( {
            '100': z.number().default( 0.25 ),
            '200': z.number().default( 0.375 ),
            '400': z.number().default( 0.625 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),

        /**
         * Border widths for CSS.
         *
         * Default keys are '100', '200', '300', '400'. After merging, values
         * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        width: z.object( {
            '100': z.number().default( 0.0625 ),
            '200': z.number().default( 0.125 ),
            '300': z.number().default( 0.1875 ),
            '400': z.number().default( 0.25 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),

        /**
         * Relative stroke widths for CSS. Meant to be used for underlines and
         * spacing. Written in css as em units.
         *
         * Default keys are '100', '200', '400', '600', '800', '900'. After
         * merging, values are rounded with {@link AbstractTokens.roundToPixel}
         * (factor = 32).
         */
        stroke: z.object( {
            '100': z.number().default( 0.5 / 16 ),
            '200': z.number().default( 1 / 16 ),
            '400': z.number().default( 2 / 16 ),
            '600': z.number().default( 3 / 16 ),
            '800': z.number().default( 4 / 16 ),
            '900': z.number().default( 6 / 16 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),
    } ),

    transition: z.object( {

        /**
         * Transition time values for CSS.
         * 
         * Default keys are 'fast', 'normal', 'slow'.
         */
        time: z.object( {
            fast: transitionTime.default( '250ms' ),
            normal: transitionTime.default( '500ms' ),
            slow: transitionTime.default( '750ms' ),
        } ).and( z.record( z.string(), transitionTime ) ),
    } ),

    /**
     * Z-index values for CSS.
     * 
     * Default keys are 'nav', 'settings', 'skipLink'.
     */
    zIndex: z.object( {
        nav: z.number().default( 1000 ),
        settings: z.number().default( 9999 ),
        skipLink: z.number().default( 99999 ),
    } ),
} );


/* # INPUT TOKENS
 * ========================================================================== */

/**
 * The partialized version of the {@link CSS} accepted as input.
 *
 * @since ___PKG_VERSION___
 * @interface
 */
export interface Partial_CSS {

    border?: {
        radius?: Partial<z.infer<typeof CSS.shape.border.shape.radius>>,
        stroke?: Partial<z.infer<typeof CSS.shape.border.shape.stroke>>,
        width?: Partial<z.infer<typeof CSS.shape.border.shape.width>>,
    },

    transition?: {
        time?: Partial<z.infer<typeof CSS.shape.transition.shape.time>>,
    },

    zIndex?: Partial<z.infer<typeof CSS.shape.zIndex>>,
};