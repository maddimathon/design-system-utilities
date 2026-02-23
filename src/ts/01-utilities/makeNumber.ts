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
 * Makes any input a number if it makes a valid number.
 * 
 * @since ___PKG_VERSION___
 */
export function makeNumber( input: unknown ): null | number {
    // returns
    if ( typeof input === 'number' ) {
        return input;
    }

    // returns if empty string
    if ( typeof input === 'string' ) {
        const _str = String( input ).replace( /[^\d\.\,]+/gi, '' );

        // returns
        if ( !_str.length ) {
            return null;
        }

        input = _str;
    }

    const num = Number( input );

    // returns
    if ( !Number.isNaN( num ) ) {
        return num;
    }

    return null;
}