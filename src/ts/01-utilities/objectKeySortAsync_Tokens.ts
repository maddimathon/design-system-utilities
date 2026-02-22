/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectKeySort_Tokens } from './objectKeySort_Tokens.js';
import { objectKeySortAsync } from './objectKeySortAsync.js';

/**
 * Sorts a record according to its keys and returns a sorted copy.
 * 
 * @since ___PKG_VERSION___
 */
export async function objectKeySortAsync_Tokens<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false,
): Promise<T_Obj> {

    return objectKeySortAsync(
        obj,
        recursive,
        objectKeySort_Tokens.sortMaker,
    );
}