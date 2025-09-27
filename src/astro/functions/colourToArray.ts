/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { TokenLevels_Extended } from '../../ts/02-new-tokens/@types.d.ts';
import type { Tokens_Colour } from '../../ts/02-new-tokens/Tokens_Colour.js';

import { shadeMapToArray } from './shadeMapToArray.js';

/**
 * @since ___PKG_VERSION___
 */
export function colourToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends TokenLevels_Extended = TokenLevels_Extended,
>(
    p: { colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>; }
) {
    const clr = p.colour;

    const names = Object.keys( clr ) as T_ColourName[];

    return names
        .map( ( name ) =>
            clr[ name ]
                ? {
                    name,
                    map: shadeMapToArray( clr[ name ] ),
                }
                : false
        )
        .filter( ( v ) => v !== false );
}