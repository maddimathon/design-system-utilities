/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare function objectKeySort<T_Obj extends Record<number | string, any>>(obj: T_Obj, recursive?: boolean, 
/**
 * Takes an object key and returns the value to use when sorting it.
 *
 * Use this to e.g., add padding to numbers before sorting as strings or to
 * sort 'primary', 'secondary', etc. as their numerical values.
 */
sortMaker?: (key: number | string) => string): T_Obj;
