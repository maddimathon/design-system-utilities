/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { TokenTypes } from '../../ts/02-tokens/@types.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

/**
 * Converts a shade map object to an array of objects with level (key) and value
 * properties.
 * 
 * @since 0.1.0-alpha
 */
export function shadeMapToArray<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
    T_Object extends shadeMapToArray.ObjTypeParam<T_ColourTypes> = shadeMapToArray.ObjTypeParam<T_ColourTypes>,
>(
    map: T_Object,
): shadeMapToArray.ReturnItem<T_Object>[] {
    const levels = Object.keys( map ) as ( keyof typeof map & ( number | string ) )[];

    return levels
        .map(
            ( level ): false | shadeMapToArray.ReturnItem<T_Object> => {

                // returns
                if ( !map[ level ] ) {
                    return false;
                }

                return {
                    level,
                    value: map[ level ],
                };
            }
        )
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

/**
 * Utilities for the {@link shadeMapToArray} function.
 * 
 * @since ___PKG_VERSION___
 */
export namespace shadeMapToArray {

    /**
     * Shape of the input object param for the {@link shadeMapToArray} function.
     * 
     * @since ___PKG_VERSION___
     */
    export type ObjTypeParam<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
    > =
        | Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>
        | Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes> & {
            black: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
            white: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
        };

    /**
     * Shape of a single item in the {@link shadeMapToArray} function's return array.
     * 
     * @since ___PKG_VERSION___
     */
    export type ReturnItem<
        T_Object extends ObjTypeParam<any>,
    > = {
        level: keyof T_Object & ( string | number );
        value: T_Object[ keyof T_Object ];
    };
}