/**
 * @since 0.1.0-beta.0.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */

import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

import type { TokenTypes } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';

/**
 * Takes a colour object and returns a css-compatible string of its colour value
 * (if possible).
 * 
 * @since 0.1.0-beta.0.draft
 */
export function getColourValue<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
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

/**
 * Takes a base shade map and a level and returns that level's colour object, if
 * it exists.
 * 
 * @since 0.1.0-beta.0.draft
 */
export function getBaseColourObject<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
>(
    baseMap: undefined | Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes> & {
        black?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
        white?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
    },
    level: TokenTypes.Colour.AnyLevel<T_ColourTypes>,
): null | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes> {
    // returns
    if ( !baseMap || !( level in baseMap ) || !baseMap[ level ] ) {
        return null;
    }

    return baseMap[ level ];
}

/**
 * Takes any shade map, a fallback base shade map, and a target level and
 * returns that level's colour object, if it exists.
 *
 * @since 0.1.0-beta.0.draft
 */
export function getMapColourObject<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
>(
    shadeMap: undefined | Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes>,
    baseMap: undefined | Tokens_Colour_ShadeMap.JsonReturn<T_ColourTypes> & {
        black?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
        white?: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes>;
    },
    level: TokenTypes.Colour.AnyLevel<T_ColourTypes>,
): null | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourTypes> {
    // returns
    if ( !shadeMap ) {
        return null;
    }

    // returns
    if ( level === 'black' || level === 'white' ) {
        return getBaseColourObject( baseMap, level );
    }

    // returns
    if ( !( level in shadeMap ) || !shadeMap[ level ] ) {
        return getBaseColourObject( baseMap, level );
    }

    return shadeMap[ level ];
}