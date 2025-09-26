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
 * A utility to map the values of an object using a callback function.
 * 
 * @param obj     The object to map.
 * @param mapper  The callback function used to define new values.
 * 
 * @since ___PKG_VERSION___
 */
export function objectMap<
    T_Object extends object,
    T_Return extends unknown,
>(
    obj: T_Object,
    mapper: ( p: { key: keyof T_Object, value: T_Object[ keyof T_Object ]; } ) => T_Return,
): { [ K in keyof T_Object ]: T_Return; } {

    // @ts-expect-error
    let mapped: { [ K in keyof T_Object ]: T_Return } = {};

    for ( const t_key in obj ) {
        const key = t_key as keyof T_Object;

        mapped[ key ] = mapper( { key, value: obj[ key ] } );
    }

    return mapped;
}