/**
 * Utilities for constructing the schema.
 * 
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';
import type { Tokens_Themes_Set_SingleMode } from './Themes/Themes_Set_SingleMode.ts';

/**
 * @since ___PKG_VERSION___
 */
export type ColourNameSchema<T_ColourName extends string> =
    | z.ZodLiteral<T_ColourName>
    | z.ZodUnion<[
        z.ZodLiteral<T_ColourName>,
        z.ZodLiteral<T_ColourName>,
        ...z.ZodLiteral<T_ColourName>[]
    ]>;

/**
 * @since ___PKG_VERSION___
 */
export type CssSystemColor =
    | "transparent"
    | "unset"
    | "AccentColor"
    | "AccentColorText"
    | "ActiveText"
    | "ButtonBorder"
    | "ButtonFace"
    | "ButtonText"
    | "Canvas"
    | "CanvasText"
    | "Field"
    | "FieldText"
    | "GrayText"
    | "Highlight"
    | "HighlightText"
    | "LinkText"
    | "Mark"
    | "MarkText"
    | "SelectedItem"
    | "SelectedItemText"
    | "VisitedText"
    | (
        "unset"
        | "AccentColor"
        | "AccentColorText"
        | "ActiveText"
        | "ButtonBorder"
        | "ButtonFace"
        | "ButtonText"
        | "Canvas"
        | "CanvasText"
        | "Field"
        | "FieldText"
        | "GrayText"
        | "Highlight"
        | "HighlightText"
        | "LinkText"
        | "Mark"
        | "MarkText"
        | "SelectedItem"
        | "SelectedItemText"
        | "VisitedText"
    )[];

/**
 * Slugs representing the colour tokens in this system.
 * 
 * @since ___PKG_VERSION___
 */
export type ColourTokenSlug<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourLevels_Extended,
> = `${ T_ColourName }-${ ColourLevels | T_ExtraColourLevels }`;

/**
 * Allowed options for the values of theme tokens (representing either CSS
 * System Colors or colour design tokens in this system).
 * 
 * @since ___PKG_VERSION___
 */
export type ThemeColourOption<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourLevels_Extended,
> = CssSystemColor | ColourTokenSlug<T_ColourName, T_ExtraColourLevels>;

/**
 * @since ___PKG_VERSION___
 */
export type ThemeMode_Contrast<
    T_Extra extends readonly string[] = never[],
> = readonly [ "low", "average", "high", "max", ...T_Extra ];

/**
 * @since ___PKG_VERSION___
 */
export type ThemeMode_ContrastOption = "low" | "average" | "high" | "max";

/**
 * @since ___PKG_VERSION___
 */
export type ThemeMode_ContrastExtraOptions = Exclude<
    ThemeMode_ContrastOption,
    ThemeMode_Contrast[ number ]
>;

/**
 * @since ___PKG_VERSION___
 */
export type ThemeMode_ContrastAtLeastOne = readonly [
    ThemeMode_ContrastOption,
    ...ThemeMode_ContrastOption[]
];


/**
 * @since ___PKG_VERSION___
 */
export type TokenLevels =
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

/**
 * @since ___PKG_VERSION___
 */
export type TokenLevels_Extended =
    | "000"
    | "050"
    | "150"
    | "250"
    | "350"
    | "450"
    | "550"
    | "650"
    | "750"
    | "850"
    | "950";


/**
 * @since ___PKG_VERSION___
 */
export type ColourLevels =
    | "100"
    | "150"
    | "200"
    | "250"
    | "300"
    | "350"
    | "400"
    | "500"
    | "600"
    | "650"
    | "700"
    | "750"
    | "800"
    | "850"
    | "900";

/**
 * @since ___PKG_VERSION___
 */
export type ColourLevels_Extended =
    | "000"
    | "050"
    | "450"
    | "550"
    | "950";


/**
 * @since ___PKG_VERSION___
 */
export type RequiredHeadingLevels =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10;
