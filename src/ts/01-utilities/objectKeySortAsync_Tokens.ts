/**
 * @since 0.1.0-beta.0
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectKeySortAsync } from '@maddimathon/utility-typescript';

import { objectKeySort_Tokens } from './objectKeySort_Tokens.js';

/**
 * Sorts a record according to its keys and returns a sorted copy.
 * 
 * @since 0.1.0-beta.0
 */
export async function objectKeySortAsync_Tokens<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false,
): Promise<T_Obj> {
    return objectKeySortAsync<T_Obj>(
        obj,
        recursive,
        objectKeySort_Tokens.sortMaker,
    );
}