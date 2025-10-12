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
export function objectMap(obj, mapper) {
    // @ts-expect-error
    let mapped = {};
    for (const t_key in obj) {
        const key = t_key;
        mapped[key] = mapper({ key, value: obj[key] });
    }
    return mapped;
}
//# sourceMappingURL=objectMap.js.map