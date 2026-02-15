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
import type { ColourNameGeneric } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens_Internal } from '../../ts/02-tokens/Tokens.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';
import type { Tokens_Colour_ShadeMap_Shade } from '../../ts/02-tokens/Colour/ShadeMap/ShadeMap_Shade.js';

export function getColourValue<
    T_ColourName extends string = Tokens_Internal.Default_ColourName,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
>(
    shade: null | undefined | Partial<
        | ColourUtilities.SingleShade
        | Tokens_Colour_ShadeMap_Shade.JsonReturn<
            ColourNameGeneric<T_ColourName>,
            T_ExtraLevels
        >
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
    T_ColourName extends string = Tokens_Internal.Default_ColourName,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
>(
    baseMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels> & {
        black?: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
        white?: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
    },
    level: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraLevels,
): null | Tokens_Colour_ShadeMap_Shade.JsonReturn<
    T_ColourName,
    T_ExtraLevels
> {
    // returns
    if ( !( level in baseMap ) || !baseMap[ level ] ) {
        return null;
    }

    return baseMap[ level ];
}

export function getMapColourObject<
    T_ColourName extends string = Tokens_Internal.Default_ColourName,
    T_ExtraLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
>(
    shadeMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>,
    baseMap: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels> & {
        black?: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
        white?: Tokens_Colour_ShadeMap_Shade.JsonReturn<
            T_ColourName,
            T_ExtraLevels
        >;
    },
    level: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraLevels,
): null | Tokens_Colour_ShadeMap_Shade.JsonReturn<
    T_ColourName,
    T_ExtraLevels
> {
    // returns
    if ( level === 'black' || level === 'white' ) {
        return getBaseColourObject( baseMap, level );
    }

    // returns
    if ( !( level in shadeMap ) || !shadeMap[ level ] ) {
        return getBaseColourObject( baseMap, level );
    }

    return shadeMap[ level ] satisfies Tokens_Colour_ShadeMap_Shade.JsonReturn<
        T_ColourName,
        T_ExtraLevels
    >;
}