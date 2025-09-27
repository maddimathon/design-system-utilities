/**
 * @since 0.1.0-alpha.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */

import type { TokenLevels, TokenLevels_Extended } from '../../ts/02-new-tokens/@types.d.ts';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-new-tokens/Colour/Colour_ShadeMap.js';

export function shadeMapToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends TokenLevels_Extended = TokenLevels_Extended,
>(
    map: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>,
) {
    const levels = Object.keys( map ) as TokenLevels[];

    return levels
        .map( ( level ) => {

            // returns
            if ( !map[ level ] ) {
                return false;
            }

            return {
                level,
                values: map[ level ],
            };
        } )
        .filter( ( v ) => v !== false );
};