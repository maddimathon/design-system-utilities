/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { CssColours } from '@maddimathon/utility-sass';

import type { TokenTypes } from '../02-tokens/@types.js';
import type { Tokens } from '../02-tokens/Tokens.js';

import { objectFlatten } from '@maddimathon/utility-typescript';

/**
 * Takes a font size slug and returns a css-friendly variable with fallback value.
 *
 * @since ___PKG_VERSION___
 */
export function getFontSizeCSS<
    T_Types extends TokenTypes.TypeParams,
>(
    tokens: Tokens.JsonReturn<T_Types>,
    fontSize: string,
): string {

    const varMaker = (
        slug: undefined | string,
        value: null | string,
    ) => slug?.length
            ? `var(--fs-${ slug }${ value ? `, ${ value }` : '' })`
            : String( value ?? slug ?? '' );

    // returns
    if ( !fontSize ) {
        return varMaker( fontSize, null );
    }

    // returns
    if (
        CssColours.isKeyword( fontSize )
        || CssColours.isSystemColor( fontSize )
    ) {
        return fontSize;
    }

    // returns
    if ( !tokens.typography.size ) {
        return varMaker( fontSize, null );
    }

    const flatSizes = objectFlatten<string, {
        rem: number;
        pt: number;
        px: number;
    }>( tokens.typography.size );

    // returns
    if ( !( fontSize in flatSizes ) ) {
        return varMaker( fontSize, null );
    }

    // returns
    if ( !flatSizes[ fontSize ] ) {
        return varMaker( fontSize, null );
    }

    return varMaker( fontSize, `${ flatSizes[ fontSize ].rem }rem` );
}