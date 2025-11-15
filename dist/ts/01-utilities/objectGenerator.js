/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2.draft
 * @license MIT
 */
/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha
 */
export function objectGenerator(keys, mapper) {
    // @ts-expect-error - this will be filled
    let obj = {};
    for (const key of keys) {
        obj[key] = mapper(key);
    }
    return obj;
}
/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha
 */
export async function objectGeneratorAsync(keys, mapper) {
    // @ts-expect-error - this will be filled
    let obj = {};
    for (const key of keys) {
        obj[key] = await mapper(key);
    }
    return obj;
}
//# sourceMappingURL=objectGenerator.js.map