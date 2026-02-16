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
 * Makes any input a number if it makes a valid number.
 *
 * @since 0.1.1-alpha.1.draft
 */
export async function makeNumberAsync(input) {
    // returns
    if (typeof input === 'number') {
        return input;
    }
    // returns if empty string
    if (typeof input === 'string') {
        input = String(input).replace(/[^\d\.\,]+/gi, '');
        // returns
        if (!input) {
            return null;
        }
    }
    const num = Number(input);
    // returns
    if (!Number.isNaN(num)) {
        return num;
    }
    return null;
}
