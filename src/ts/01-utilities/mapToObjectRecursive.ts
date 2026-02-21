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
 * Converts a Map (and any of its Map children, recursively) to a simple object.
 * 
 * @category Utilities
 * 
 * @since ___PKG_VERSION___
 */
export async function mapToObjectRecursive<
    T_Keys extends unknown,
    T_Values extends unknown,
>( map: Map<T_Keys, T_Values> ): Promise<Record<
    T_Keys & ( number | string | symbol ),
    T_Values
>> {

    return Promise.all(
        Array.from( map.entries() ).map(
            async ( [ key, value ] ): Promise<[ T_Keys, T_Values ]> => {
                // returns
                if ( !( value instanceof Map ) ) {
                    return [ key, value ];
                }

                return mapToObjectRecursive( value ).then( val => [ key, val ] );
            }
        )
    ).then(
        ( arr ) => Object.fromEntries( arr )
    );
}