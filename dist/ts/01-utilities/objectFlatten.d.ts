/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2
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
 * @since 0.1.0-alpha
 */
export declare function objectFlatten<T_Keys extends number | string, T_Values extends any>(obj: RecursiveRecord<T_Keys, T_Values>, prefix?: string, suffix?: string): {
    [key: string]: T_Values;
};
//# sourceMappingURL=objectFlatten.d.ts.map