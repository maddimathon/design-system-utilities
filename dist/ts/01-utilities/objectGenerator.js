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
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since ___PKG_VERSION___
 */
export function objectGenerator(keys, mapper) {
    // @ts-expect-error
    let obj = {};
    for (const key of keys) {
        obj[key] = mapper(key);
    }
    return obj;
}
//# sourceMappingURL=objectGenerator.js.map