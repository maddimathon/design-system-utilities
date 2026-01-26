/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';
import type { Tokens_Colour } from '../../ts/02-tokens/Tokens_Colour.js';

import { shadeMapToArray } from './shadeMapToArray.js';

/**
 * @since 0.1.0-alpha
 */
export function colourToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
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