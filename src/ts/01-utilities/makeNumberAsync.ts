/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { makeNumber } from './makeNumber.js';

/**
 * Makes any input a number if it makes a valid number.
 * 
 * @since ___PKG_VERSION___
 */
export async function makeNumberAsync( input: unknown ): Promise<null | number> {
    return makeNumber( input );
}