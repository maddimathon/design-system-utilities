/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { makeNumber } from './makeNumber.js';
/**
 * Makes any input a number if it makes a valid number.
 *
 * @since 0.1.1-alpha.1.draft
 */
export async function makeNumberAsync(input) {
    return makeNumber(input);
}
