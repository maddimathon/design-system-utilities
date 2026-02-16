/**
 * Utilities for constructing the schema.
 * 
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Theme } from 'typedoc';
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';

import type { AbstractTokens } from './abstract/AbstractTokens.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.ts';

/**
 * @since ___PKG_VERSION___
 */
export namespace TokenTypes {

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Colour {

        /**
         * Enforces some shade names that are always present.
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Colour} namespace.
         */
        export type GenericName<T_ColourName extends string> = "base" | T_ColourName;

        /**
         * Slugs representing the colour tokens in this system.
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Colour} namespace.
         */
        export type TokenSlug<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        > = `${ T_ColourName }-${ ColourUtilities.Levels.Required | T_ExtraColourLevels }`;

        /**
         * Type params for colour tokens.
         * 
         * @since ___PKG_VERSION___
         */
        export type TypeParams<
            T_ColourNames extends string = string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional = never,
        > = {
            names: T_ColourNames;
            extraLevels: T_ExtraColourLevels;
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Css {

        /**
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Css} namespace.
         */
        export type SystemColor =
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
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Theme {

        /**
         * Allowed options for the values of theme tokens (representing either CSS
         * System Colors or colour design tokens in this system).
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Theme} namespace.
         */
        export type ColourOption<
            T_Types extends TokenTypes.Colour.TypeParams,
        > = Css.SystemColor | "black" | "white" | Colour.TokenSlug<T_Types[ 'names' ], T_Types[ 'extraLevels' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        export namespace Mode {

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type Contrast<
                T_Extra extends readonly ContrastExtraOptions[] = never[],
            > = readonly [ "low", "average", "high", "max", ...T_Extra ];

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type ContrastOption = "low" | "average" | "high" | "max";

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type ContrastExtraOptions = Exclude<
                ContrastOption,
                Contrast[ number ]
            >;

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type ContrastAtLeastOne = readonly [
                ContrastOption,
                ...ContrastOption[]
            ];
        }

        /**
         * Type params for theme tokens.
         * 
         * @since ___PKG_VERSION___
         */
        export type TypeParams<
            T_ThemeName extends string = string,
            T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = readonly [ "light", "dark" ],
            T_ThemeContrastMode extends TokenTypes.Theme.Mode.ContrastAtLeastOne = TokenTypes.Theme.Mode.ContrastAtLeastOne,

            T_Keyword_Universal extends string = string,
            T_Keyword_Text extends string = string,
            T_Keyword_Background extends string = string,

            T_ColourTypes extends Colour.TypeParams = Colour.TypeParams,
        > = {
            name: T_ThemeName;

            colour: T_ColourTypes;
            brightness: T_BrightnessMode;
            contrast: T_ContrastMode;

            variations: {
                universal: T_Keyword_Universal;
                text: T_Keyword_Text;
                background: T_Keyword_Background;
            };
        };
    }
}


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
