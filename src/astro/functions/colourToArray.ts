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
import type { Tokens_Colour } from '../../ts/02-tokens/Tokens_Colour.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

import { shadeMapToArray } from './shadeMapToArray.js';

/**
 * @since 0.1.0-alpha
 */
export function colourToArray<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
>(
    p: { colour: Tokens_Colour.JsonReturn<T_ColourTypes>; }
): {
    name: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>,
    map: shadeMapToArray.ReturnItem<
        Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>
    >[],
}[] {
    const clr = p.colour;

    const names = Object.keys( clr ) as TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>[];

    return names
        .map(
            ( name ): false | {
                name: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>,
                map: shadeMapToArray.ReturnItem<
                    Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>
                >[],
            } =>
                clr[ name ] && !( 'hex' in clr[ name ] )
                    ? {
                        name,
                        map: shadeMapToArray<
                            T_ColourTypes,
                            Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>
                        >( clr[ name ] ),
                    }
                    : false
        )
        .filter( ( v ) => v !== false );
}