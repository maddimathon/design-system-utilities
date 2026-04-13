/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function objectKeySort_Tokens<T_Obj extends Record<number | string, any>>(obj: T_Obj, recursive?: boolean): T_Obj;
export declare namespace objectKeySort_Tokens {
    function sortMaker(key: number | string): string;
    /**
     * Available for use to sort string arrays in the same order as this function.
     */
    function sorter(a: number | string, b: number | string): number;
}
