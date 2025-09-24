/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

/**
 * Similar to the built-in `Record` type, but where the object's values can also
 * be identical records.
 *
 * @since ___PKG_VERSION___
 */
export type RecursiveRecord<
    T_Keys extends number | string | symbol = number | string | symbol,
    T_Values extends any = any,
    T_SubKeys extends number | string | symbol = T_Keys,
> = {
        [ K in T_Keys ]: T_Values | RecursiveRecord<T_SubKeys, T_Values>;
    };