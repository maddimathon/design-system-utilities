/**
 * Utilities for constructing the schema.
 * 
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';

import type { AbstractTokens } from './abstract/AbstractTokens.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.ts';

/**
 * @since 0.1.0-alpha
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
 * @since 0.1.0-alpha
 */
export type ColourTokenSlug<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
> = `${ T_ColourName }-${ ColourUtilities.Levels.Required | T_ExtraColourLevels }`;

/**
 * Allowed options for the values of theme tokens (representing either CSS
 * System Colors or colour design tokens in this system).
 * 
 * @since 0.1.0-alpha
 */
export type ThemeColourOption<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
> = CssSystemColor | "black" | "white" | ColourTokenSlug<T_ColourName, T_ExtraColourLevels>;

/**
 * @since 0.1.0-alpha
 */
export type ThemeMode_Contrast<
    T_Extra extends readonly ThemeMode_ContrastExtraOptions[] = never[],
> = readonly [ "low", "average", "high", "max", ...T_Extra ];

/**
 * @since 0.1.0-alpha
 */
export type ThemeMode_ContrastOption = "low" | "average" | "high" | "max";

/**
 * @since 0.1.0-alpha
 */
export type ThemeMode_ContrastExtraOptions = Exclude<
    ThemeMode_ContrastOption,
    ThemeMode_Contrast[ number ]
>;

/**
 * @since 0.1.0-alpha
 */
export type ThemeMode_ContrastAtLeastOne = readonly [
    ThemeMode_ContrastOption,
    ...ThemeMode_ContrastOption[]
];


/**
 * @since 0.1.0-alpha
 */
export type TokenLevels =
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

/**
 * @since 0.1.0-alpha
 */
export type TokenLevels_Extended =
    | '150'
    | '250'
    | '350'
    | '450'
    | '550'
    | '650'
    | '750'
    | '850';


/**
 * Enforces some shade names that are always present.
 * 
 * @since 0.1.0-alpha
 */
export type ColourNameGeneric<T_ColourName extends string> = "base" | T_ColourName;


/**
 * @since 0.1.0-alpha
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
