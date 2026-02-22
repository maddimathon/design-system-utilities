/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { objectKeySort_Tokens } from './objectKeySort_Tokens.js';
import { objectKeySortAsync } from './objectKeySortAsync.js';
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.1-alpha.1.draft
 */
export async function objectKeySortAsync_Tokens(obj, recursive = false) {
    return objectKeySortAsync(obj, recursive, objectKeySort_Tokens.sortMaker);
}
