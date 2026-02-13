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
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';
import type { Tokens_Colour_ShadeMap_Shade } from '../../ts/02-tokens/Colour/ShadeMap/ShadeMap_Shade.js';

export function shadeMapToArray<
    T_ColourName extends string = string,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
    T_Object extends Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels> | {
        black: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
        white: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
    } = Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels> | {
        black: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
        white: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
    },
>(
    map: T_Object,
) {
    const levels = Object.keys( map ) as ( keyof typeof map & ( number | string ) )[];

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
        .filter( ( v ) => v !== false )
        .sort( ( a, b ) => {

            if ( a.level === 'white' || b.level === 'black' ) {
                return -1;
            }

            if ( a.level === 'black' || b.level === 'white' ) {
                return 1;
            }

            if ( a.level > b.level ) {
                return 1;
            }

            if ( a.level < b.level ) {
                return -1;
            }

            return 0;
        } );
};