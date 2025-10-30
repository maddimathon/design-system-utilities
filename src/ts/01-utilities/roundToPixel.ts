/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

/**
 * A simple rounding function to use for rounding em and rem values for
 * nicer output.
 * 
 * @param num     Number to round.
 * @param factor  Optional. Number used to round the number to an inverse multiple.
 * 
 * @since 0.1.0-alpha
 * @source
 */
export function roundToPixel( num: number, factor: number = 16 ): number {
    return ( Math.round( num * factor ) / factor );
}