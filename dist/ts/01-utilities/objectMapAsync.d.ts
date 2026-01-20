/**
 * @since 0.1.0-alpha.4
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.10
 * @license MIT
 */
/**
 * Maps a single-level object's properties to new values based on a callback
 * function.
 *
 * @since 0.1.0-alpha.4
 */
export declare function objectMapAsync<T_Obj extends object, T_NewValue extends unknown>(obj: T_Obj, callback: (entry: [
    keyof T_Obj,
    T_Obj[keyof T_Obj]
]) => T_NewValue | Promise<T_NewValue>): Promise<{
    [K in keyof T_Obj]: T_NewValue;
}>;
//# sourceMappingURL=objectMapAsync.d.ts.map