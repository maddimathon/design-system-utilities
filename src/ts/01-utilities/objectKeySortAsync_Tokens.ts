/**
 * @since ___PKG_VERSION___
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
 * @since ___PKG_VERSION___
 */
export async function objectKeySortAsync_Tokens<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false,
) {
    return objectKeySortAsync<T_Obj>(
        obj,
        recursive,
        objectKeySort_Tokens.sortMaker,
    );
}