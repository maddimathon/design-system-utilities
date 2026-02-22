/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
/**
 * Converts a Map (and any of its Map children, recursively) to a simple object.
 *
 * @category Utilities
 *
 * @since 0.1.1-alpha.1.draft
 */
export async function mapToObjectRecursive(map) {
    return Promise.all(Array.from(map.entries()).map(async ([key, value]) => {
        // returns
        if (!(value instanceof Map)) {
            return [key, value];
        }
        return mapToObjectRecursive(value).then(val => [key, val]);
    })).then((arr) => Object.fromEntries(arr));
}
