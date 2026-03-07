/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { objectKeySortAsync } from '@maddimathon/utility-typescript';
import { objectKeySort_Tokens } from './objectKeySort_Tokens.js';
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.0-beta.0.draft
 */
export async function objectKeySortAsync_Tokens(obj, recursive = false) {
    return objectKeySortAsync(obj, recursive, objectKeySort_Tokens.sortMaker);
}
