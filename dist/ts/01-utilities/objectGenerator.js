/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha.draft
 */
export function objectGenerator(keys, mapper) {
    // @ts-expect-error
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
 * @since 0.1.0-alpha.draft
 */
export async function objectGeneratorAsync(keys, mapper) {
    // @ts-expect-error
    let obj = {};
    for (const key of keys) {
        obj[key] = await mapper(key);
    }
    return obj;
}
//# sourceMappingURL=objectGenerator.js.map