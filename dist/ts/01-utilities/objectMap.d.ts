/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
/**
 * A utility to map the values of an object using a callback function.
 *
 * @param obj     The object to map.
 * @param mapper  The callback function used to define new values.
 *
 * @since 0.1.0-alpha
*/
export declare function objectMap<T_Obj extends object, T_NewValue extends unknown>(obj: T_Obj, callback: (entry: [keyof T_Obj, T_Obj[keyof T_Obj]]) => T_NewValue): {
    [K in keyof T_Obj]: T_NewValue;
};
//# sourceMappingURL=objectMap.d.ts.map