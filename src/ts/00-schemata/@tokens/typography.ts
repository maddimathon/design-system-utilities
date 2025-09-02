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

export const Typography = z.object( {

    lineHeight: z.object( {
        '100': z.number().default( -2.75 ),
        '200': z.number().default( -2 ),
        '300': z.number().default( -1.25 ),
        '400': z.number().default( 0 ),
        '500': z.number().default( 1 ),
        '600': z.number().default( 2 ),
    } ).and( z.record( tokenLevels_extended, z.number() ) ),

    /**
     * Font sizes for the design system.
     */
    size: z.object( {

        title: z.number().default( 7 ),

        heading: z.object( {
            '1': z.number().default( 6 ),
            '2': z.number().default( 5 ),
            '3': z.number().default( 4 ),
            '4': z.number().default( 3 ),
            '5': z.number().default( 2 ),
            '6': z.number().default( 1 ),
        } ).and( z.record( z.number(), z.number() ) ),

        smaller: z.object( {
            // '5': z.number().default(-3.0),
            // '4': z.number().default(-2.5),
            // '3': z.number().default(-2.0),
            '2': z.number().default( -1.25 ),
            '1': z.number().default( -0.5 ),
        } ).and( z.record( z.number(), z.number() ) ),

        normal: z.number().default( 0 ),

        bigger: z.object( {
            '1': z.number().default( 1 ),
            '2': z.number().default( 2 ),
            '3': z.number().default( 3 ),
            '4': z.number().default( 4 ),
            '5': z.number().default( 5 ),
            '6': z.number().default( 6 ),
            // '7': z.number().default( 7 ),
            // '8': z.number().default( 8 ),
            // '9': z.number().default( 9 ),
        } ).and( z.record( z.number(), z.number() ) ),
    } ),
} );


/* # INPUT TOKENS
 * ========================================================================== */

/**
 * The partialized version of the {@link Typography} accepted as input.
 *
 * @since ___PKG_VERSION___
 * @interface
 */
export interface Partial_CSS {

    lineHeights?: Partial<z.infer<typeof Typography.shape.lineHeight>>;

    size?: {
        [ P in keyof z.infer<typeof Typography.shape.size> ]?: (
            z.infer<typeof Typography.shape.size>[ P ] extends object
            ? Partial<z.infer<typeof Typography.shape.size>[ P ]>
            : z.infer<typeof Typography.shape.size>[ P ]
        ) | undefined;
    },
};