/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0
 * @license MIT
 */

import type { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

export function shadeMapToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
>(
    map: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>,
) {
    const levels = Object.keys( map ) as ColourUtilities.Levels.Required[];

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