/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.8
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
export function objectMap(obj, callback) {
    const entries = Object.entries(obj);
    const mappedEntries = entries.map(([key, value]) => [
        key,
        callback([key, value]),
    ]);
    return Object.fromEntries(mappedEntries);
}
//# sourceMappingURL=objectMap.js.map