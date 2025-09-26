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
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since ___PKG_VERSION___
 */
export function objectGenerator<
    T_Keys extends number | string,
    T_Return extends unknown,
>(
    keys: T_Keys[] | readonly T_Keys[],
    mapper: ( key: T_Keys ) => T_Return,
): { [ K in T_Keys ]: T_Return; } {

    // @ts-expect-error
    let obj: { [ K in T_Keys ]: T_Return } = {};

    for ( const key of keys ) {
        obj[ key ] = mapper( key );
    }

    return obj;
}