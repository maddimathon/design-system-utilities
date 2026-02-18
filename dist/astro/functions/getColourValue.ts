/**
 * @since 0.1.1-alpha.1.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */

import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';
import type { TokenTypes } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

export function getColourValue<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
>(
    shade: null | undefined | Partial<
        | ColourUtilities.SingleShade
        | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>
    >,
): null | string {
    // returns
    if ( !shade || typeof shade !== 'object' ) {
        return null;
    }

    // returns
    if ( shade.hsl ) {
        return ColourUtilities.toString.hsl( shade.hsl );
    }

    // returns
    if ( shade.rgb ) {
        return ColourUtilities.toString.rgb( shade.rgb );
    }

    // returns
    if ( shade.hex ) {
        return ColourUtilities.toString.hex( shade.hex );
    }

    // returns
    if ( shade.lch ) {
        return ColourUtilities.toString.lch( shade.lch );
    }

    return null;
}

export function getBaseColourObject<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
>(
    baseMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes> & {
        black?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
        white?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
    },
    level: "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ],
): null | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes> {
    // returns
    if ( !( level in baseMap ) || !baseMap[ level ] ) {
        return null;
    }

    return baseMap[ level ];
}

export function getMapColourObject<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
>(
    shadeMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>,
    baseMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes> & {
        black?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
        white?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
    },
    level: "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ],
): null | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes> {
    // returns
    if ( level === 'black' || level === 'white' ) {
        return getBaseColourObject( baseMap, level );
    }

    // returns
    if ( !( level in shadeMap ) || !shadeMap[ level ] ) {
        return getBaseColourObject( baseMap, level );
    }

    return shadeMap[ level ] satisfies Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
}