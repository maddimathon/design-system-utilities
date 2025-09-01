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

import * as Tokens_CSS from './CSS/index.js';



/* # SCHEMA
 * ========================================================================== */

/**
 * Complete schema for the design system tokens built using this package.
 * 
 * @since ___PKG_VERSION___
 */
export const Tokens = z.object( {
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
    css?: Tokens_CSS.Partial_CSS;
};

/**
 * Utilities for the {@link PartialTokens} interface.
 *
 * @since ___PKG_VERSION___
 */
export namespace PartialTokens {

    export interface CSS extends Tokens_CSS.Partial_CSS { }

    export namespace CSS {

        export interface Transition extends NonNullable<Tokens_CSS.Partial_CSS[ 'transition' ]> { }
    }
};