/**
 * @since 0.1.0-alpha.4
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */


/**
 * Maps a single-level object's properties to new values based on a callback
 * function.
 *
 * @since 0.1.0-alpha.4
 */
export async function objectMapAsync<
    T_Obj extends object,
    T_NewValue extends unknown,
>(
    obj: T_Obj,
    callback: ( entry: [
        keyof T_Obj,
        T_Obj[ keyof T_Obj ],
    ] ) => T_NewValue | Promise<T_NewValue>,
): Promise<{ [ K in keyof T_Obj ]: T_NewValue; }> {

    return Promise.resolve(
        Object.entries( obj ) as [ keyof T_Obj, T_Obj[ keyof T_Obj ] ][]
    ).then(
        async ( entries ) => Object.fromEntries(
            await Promise.all(
                entries.map(
                    async ( [ key, value ] ) => Promise.resolve(
                        callback( [ key, value ] )
                    ).then(
                        ( newValue ): [
                            keyof T_Obj,
                            T_NewValue,
                        ] => [ key, newValue ]
                    )
                )
            )
        ) as { [ K in keyof T_Obj ]: T_NewValue; }
    );
}