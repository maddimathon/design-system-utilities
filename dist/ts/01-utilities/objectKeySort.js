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
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.1-alpha.1.draft
 */
export function objectKeySort(obj, recursive = false) {
    let entries = Object.entries(obj);
    if (recursive) {
        entries = entries.map(([key, value]) => {
            // returns
            if (typeof value !== 'object' || value === null) {
                return [key, value];
            }
            // returns
            if (Array.isArray(value)) {
                return [key, value];
            }
            return [key, objectKeySort(value, recursive)];
        });
    }
    return Object.fromEntries(entries.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;
    }));
}
