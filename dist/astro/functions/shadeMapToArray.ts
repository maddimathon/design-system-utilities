/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.9
 * @license MIT
 */

import type { ColourLevels, ColourLevels_Extended } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

export function shadeMapToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends ColourLevels_Extended = ColourLevels_Extended,
>(
    map: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>,
) {
    const levels = Object.keys( map ) as ColourLevels[];

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