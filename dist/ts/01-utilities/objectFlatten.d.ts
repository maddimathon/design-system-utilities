/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { RecursiveRecord } from './@types.js';
/**
 * Returns a single-level object record with kebab case keys based on nested
 * map keys.
 *
 * @param obj     Object to flatten.
 * @param prefix  Optional. String used to prefix the flattened keys.
 * @param suffix  Optional. String used to suffix the flattened keys.
 *
 * @since ___PKG_VERSION___
 */
export declare function objectFlatten<T_Keys extends string, T_Values extends any, T_Prefix extends string | never, T_Suffix extends string | never>(obj: RecursiveRecord<T_Keys, T_Values>, prefix?: T_Prefix, suffix?: T_Suffix): {
    [key: string]: T_Values;
};
//# sourceMappingURL=objectFlatten.d.ts.map