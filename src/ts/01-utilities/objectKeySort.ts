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
 * Sorts a record according to its keys and returns a sorted copy.
 * 
 * @since ___PKG_VERSION___
 */
export function objectKeySort<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false
): T_Obj {
    let entries = Object.entries( obj );

    if ( recursive ) {
        entries = entries.map( ( [ key, value ] ) => {
            // returns
            if ( typeof value !== 'object' || value === null ) {
                return [ key, value ];
            }

            // returns
            if ( Array.isArray( value ) ) {
                return [ key, value ];
            }

            return [ key, objectKeySort( value, recursive ) ];
        } );
    }

    return Object.fromEntries(
        entries.sort( ( a, b ) => {

            if ( a[ 0 ] > b[ 0 ] ) {
                return 1;
            }

            if ( a[ 0 ] < b[ 0 ] ) {
                return -1;
            }

            return 0;
        } )
    ) as T_Obj;
}