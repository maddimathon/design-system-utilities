/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha
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
export declare function objectMap<T_Object extends object, T_Return extends unknown>(obj: T_Object, mapper: (p: {
    key: keyof T_Object;
    value: T_Object[keyof T_Object];
}) => T_Return): {
    [K in keyof T_Object]: T_Return;
};
//# sourceMappingURL=objectMap.d.ts.map