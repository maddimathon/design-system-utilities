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
export async function objectMapAsync(obj, callback) {
    return Promise.resolve(Object.entries(obj)).then(async (entries) => Object.fromEntries(await Promise.all(entries.map(async ([key, value]) => Promise.resolve(callback([key, value])).then((newValue) => [key, newValue])))));
}
//# sourceMappingURL=objectMapAsync.js.map