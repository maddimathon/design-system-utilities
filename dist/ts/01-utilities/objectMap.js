/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.1
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
export function objectMap(obj, mapper) {
    // @ts-expect-error - this will be filled
    let mapped = {};
    for (const t_key in obj) {
        const key = t_key;
        mapped[key] = mapper({ key, value: obj[key] });
    }
    return mapped;
}
//# sourceMappingURL=objectMap.js.map