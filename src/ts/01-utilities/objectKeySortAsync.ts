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
export async function objectKeySortAsync<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false
): Promise<T_Obj> {

    const entries: (
        | [ keyof T_Obj & number | string, T_Obj[ keyof T_Obj ] ]
        | Promise<[ keyof T_Obj & number | string, T_Obj[ keyof T_Obj ] ]>
    )[] = recursive
            ? Object.entries( obj ).map(
                async ( [ key, value ] ) => {
                    // returns
                    if ( typeof value !== 'object' || value === null ) {
                        return [ key, value ];
                    }

                    // returns
                    if ( Array.isArray( value ) ) {
                        return [ key, value ];
                    }

                    return objectKeySortAsync( value, recursive ).then( newValue => [ key, newValue ] );
                }
            )
            : Object.entries( obj );

    return Promise.all( entries ).then(
        toSort => Object.fromEntries(
            toSort.sort( ( a, b ) => {

                if ( a[ 0 ] > b[ 0 ] ) {
                    return 1;
                }

                if ( a[ 0 ] < b[ 0 ] ) {
                    return -1;
                }

                return 0;
            } )
        ) as T_Obj
    );
}