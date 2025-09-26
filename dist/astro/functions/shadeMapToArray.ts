/**
 * @since 0.1.0-alpha.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */


import type { TokenLevels } from '../../ts/02-tokens/@utils.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Tokens/Colour/Colour_ShadeMap.js';

export function shadeMapToArray<T_ColourName extends string = string>(
    map: Tokens_Colour_ShadeMap.JSON<T_ColourName>,
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