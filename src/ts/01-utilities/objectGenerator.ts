/**
 * @since 0.1.0-alpha
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
 * @since 0.1.0-alpha
 */
export function objectGenerator<
    T_Keys extends number | string,
    T_Return extends unknown,
>(
    keys: T_Keys[] | readonly T_Keys[],
    mapper: ( key: T_Keys ) => T_Return,
): { [ K in T_Keys ]: T_Return; } {

    // @ts-expect-error - this will be filled
    let obj: { [ K in T_Keys ]: T_Return } = {};

    for ( const key of keys ) {
        obj[ key ] = mapper( key );
    }

    return obj;
}

/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha
 */
export async function objectGeneratorAsync<
    T_Keys extends number | string,
    T_Return extends unknown,
>(
    keys: T_Keys[] | readonly T_Keys[],
    mapper: ( key: T_Keys ) => Promise<T_Return>,
): Promise<{ [ K in T_Keys ]: T_Return; }> {

    // @ts-expect-error - this will be filled
    let obj: { [ K in T_Keys ]: T_Return } = {};

    for ( const key of keys ) {
        obj[ key ] = await mapper( key );
    }

    return obj;
}