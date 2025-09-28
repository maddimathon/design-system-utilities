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
 * A simple rounding function to use for rounding em and rem values for
 * nicer output.
 *
 * @param num     Number to round.
 * @param factor  Optional. Number used to round the number to an inverse multiple.
 *
 * @since 0.1.0-alpha.draft
 * @source
 */
export function roundToPixel(num, factor = 16) {
    return (Math.round(num * factor) / factor);
}
//# sourceMappingURL=roundToPixel.js.map