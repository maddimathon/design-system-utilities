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



/* # SCHEMA
 * ========================================================================== */

const transitionTime = z.string().regex( /^\d+m?s$/ );

export const CSS = z.object( {

    transition: z.object( {

        time: z.object( {
            fast: transitionTime.default( '250ms' ),
            normal: transitionTime.default( '500ms' ),
            slow: transitionTime.default( '750ms' ),
        } ).and( z.record( z.string(), transitionTime ) ),
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
    transition?: {
        time?: Partial<z.infer<typeof CSS.shape.transition>>,
    },
};