/**
 * Utilities for constructing the schema.
 *
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { CssColours } from '@maddimathon/utility-sass';
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
/**
 * @since 0.1.0-beta.0.draft
 */
export declare namespace TokenTypes {
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Colour {
        /**
         * Takes colour params and returns any allowed level, including 'black'
         * or 'white'.
         *
         * @since 0.1.0-beta.0.draft
         */
        type AnyLevel<T_ColourTypes extends Colour.TypeParams> = "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes['extraLevels'];
        /**
         * Enforces some shade names that are always present.
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link Colour} namespace.
         */
        type GenericName<T_ColourName extends string> = "base" | T_ColourName;
        /**
         * Enforces some shade names that are always present.
         *
         * @since 0.1.0-beta.0.draft
         */
        type GenericNameArray<T_ColourName extends string> = readonly ["base", ...T_ColourName[]];
        /**
         * Creates a Record-like object indexed instead colour shade levels.
         *
         * @since 0.1.0-beta.0.draft
         * @internal
         */
        type LevelRecord<T_ColourTypes extends Colour.TypeParams, T_Value extends any> = {
            [L in ColourUtilities.Levels.Required]: T_Value;
        } & {
            [L in T_ColourTypes['extraLevels']]: T_Value;
        };
        /**
         * Creates a Record-like object indexed instead colour shade names.
         *
         * @since 0.1.0-beta.0.draft
         * @internal
         */
        type NameRecord<T_ColourTypes extends Colour.TypeParams, T_Value extends any> = {
            base: T_Value;
        } & {
            [C in T_ColourTypes['names']]: T_Value;
        };
        /**
         * Creates a partial-ized Record-like object indexed instead colour shade levels.
         *
         * @since 0.1.0-beta.0.draft
         * @internal
         */
        type PartialLevelRecord<T_ColourTypes extends Colour.TypeParams, T_Value extends any> = {
            [L in ColourUtilities.Levels.Required]?: undefined | T_Value;
        } & {
            [L in T_ColourTypes['extraLevels']]?: undefined | T_Value;
        };
        /**
         * Creates a partial-ized Record-like object indexed instead colour shade names.
         *
         * @since 0.1.0-beta.0.draft
         * @internal
         */
        type PartialNameRecord<T_ColourTypes extends Colour.TypeParams, T_Value extends any> = {
            base?: undefined | T_Value;
        } & {
            [C in T_ColourTypes['names']]?: undefined | T_Value;
        };
        /**
         * Slugs representing the colour tokens in this system.
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link Colour} namespace. Changed param to {@link Colour.TypeParams}.
         */
        type TokenSlug<T_ColourTypes extends Colour.TypeParams> = `${TokenTypes.Colour.GenericName<T_ColourTypes['names']>}-${ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']}`;
        /**
         * Type params for colour tokens.
         *
         * @since 0.1.0-beta.0.draft
         */
        type TypeParams<T_ColourNames extends string = string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> = {
            names: T_ColourNames;
            extraLevels: T_ExtraColourLevels;
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Css {
        /**
         * Any valid string value for css.
         *
         * @since 0.1.0-beta.0.draft
         */
        type AnyCssColour = CssColours.Keyword | CssColours.Slug | SystemColor;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type BorderRadius = 0 | AnyTokenLevel;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type BorderWidth = 0 | AnyTokenLevel;
        /**
         * Global keywords available for most properties.
         *
         * @since 0.1.0-beta.0.draft
         */
        type GlobalKeywords = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
        /**
         * @since 0.1.0-beta.0.draft
         */
        type LetterSpacing = 'normal' | number | Number.Em | Number.Percent | 'inherit';
        /**
         * @since 0.1.0-beta.0.draft
         */
        type LineHeight = 'normal' | number | Number.Em | Number.Percent | AnyTokenLevel | GlobalKeywords;
        /**
         * @since 0.1.0-beta.0.draft
         */
        namespace Number {
            /**
             * A number with em units.
             *
             * @since 0.1.0-beta.0.draft
             */
            type Em = 0 | `${number}em` | `-${number}em`;
            /**
             * A number with % units.
             *
             * @since 0.1.0-beta.0.draft
             */
            type Percent = 0 | `${number}%` | `-${number}%`;
        }
        /**
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link Css} namespace.
         */
        type SystemColor = CssColours.SystemColor | CssColours.SystemColor[];
        /**
         * @since 0.1.0-alpha
         */
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Photos {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type TypeParams<T_PhotoSlug extends string = string, T_ThumbnailSlug extends string = string> = {
            photoSlugs: T_PhotoSlug;
            thumbnailSlugs: T_ThumbnailSlug;
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Style {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type TypeParams<T_IconExtraSize extends string = string> = {
            iconSizes: T_IconExtraSize;
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Theme {
        /**
         * Allowed options for the values of theme tokens (representing either CSS
         * System Colors or colour design tokens in this system).
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link Theme} namespace.
         */
        type ColourOption<T_Types extends TokenTypes.Colour.TypeParams> = Css.AnyCssColour | "black" | "white" | Colour.TokenSlug<T_Types>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type GetBrightnessKeys<T_ThemeTypes extends TokenTypes.Theme.TypeParams> = "light" | "dark" | T_ThemeTypes['brightness'][number];
        /**
         * @since 0.1.0-beta.0.draft
         */
        type GetExtraBrightnessKeys<T_ThemeTypes extends TokenTypes.Theme.TypeParams> = Exclude<T_ThemeTypes['brightness'][number], Mode.BrightnessRequired>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type GetContrastKeys<T_ThemeTypes extends TokenTypes.Theme.TypeParams> = "low" | "average" | "high" | T_ThemeTypes['contrast'][number];
        /**
         * @since 0.1.0-beta.0.draft
         */
        type GetExtraContrastKeys<T_ThemeTypes extends TokenTypes.Theme.TypeParams> = Exclude<T_ThemeTypes['contrast'][number], Mode.ContrastRequired>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        namespace Mode {
            /**
             * An array of brightness mode slugs with the required slugs.
             *
             * @since 0.1.0-beta.0.draft
             */
            type Brightness<T_ParamValue extends BrightnessOption[] | readonly BrightnessOption[] = BrightnessOption[]> = readonly ["light", "dark", ...T_ParamValue];
            /**
             * All allowed brightness mode slugs.
             *
             * @since 0.1.0-beta.0.draft
             */
            type BrightnessOption = "light" | "dark";
            /**
             * All required brightness mode slugs.
             *
             * @since 0.1.0-beta.0.draft
             */
            type BrightnessRequired = "light" | "dark";
            /**
             * An array of contrast mode slugs with the required slugs.
             *
             * @since 0.1.0-alpha
             * @since 0.1.0-beta.0.draft — Moved to {@link Theme.Mode} namespace.
             */
            type Contrast<T_ParamValue extends ContrastOption[] | readonly ContrastOption[] = ContrastOption[]> = readonly ["low", "average", "high", ...T_ParamValue];
            /**
             * All allowed contrast mode slugs.
             *
             * @since 0.1.0-alpha
             * @since 0.1.0-beta.0.draft — Moved to {@link Theme.Mode} namespace.
             */
            type ContrastOption = "low" | "average" | "high" | "max";
            /**
             * Creates a Record-like object indexed instead by contrast mode values.
             *
             * @since 0.1.0-beta.0.draft
             * @internal
             */
            type ContrastRecord<T_ThemeTypes extends Theme.TypeParams, T_Value extends any> = {
                [C in ContrastRequired]: T_Value;
            } & {
                [C in TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>]: T_Value;
            };
            /**
             * All required contrast mode slugs.
             *
             * @since 0.1.0-beta.0.draft
             */
            type ContrastRequired = "low" | "average" | "high";
            /**
             * Creates an object of nested values indexed first by brightness mode, then by contrast mode.
             *
             * @since 0.1.0-beta.0.draft
             * @internal
             */
            type NestedObject<T_ThemeTypes extends Theme.TypeParams, T_NestedValue extends any> = {
                [B in BrightnessRequired]: ContrastRecord<T_ThemeTypes, T_NestedValue>;
            } & {
                [B in TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>]: ContrastRecord<T_ThemeTypes, T_NestedValue>;
            };
            /**
             * Creates a partial-ized Record-like object indexed instead by contrast mode values.
             *
             * @since 0.1.0-beta.0.draft
             * @internal
             */
            type PartialContrastRecord<T_ThemeTypes extends Theme.TypeParams, T_Value extends any> = {
                [C in ContrastRequired]?: undefined | T_Value;
            } & {
                [C in TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>]?: undefined | T_Value;
            };
            /**
             * Creates an object of nested values indexed first by brightness mode, then by contrast mode.
             *
             * @since 0.1.0-beta.0.draft
             * @internal
             */
            type PartialNestedObject<T_ThemeTypes extends TokenTypes.Theme.TypeParams, T_NestedValue extends any> = {
                [B in TokenTypes.Theme.Mode.BrightnessRequired]?: undefined | PartialContrastRecord<T_ThemeTypes, T_NestedValue>;
            } & {
                [B in TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>]?: undefined | PartialContrastRecord<T_ThemeTypes, T_NestedValue>;
            };
        }
        /**
         * Type params for theme tokens.
         *
         * @since 0.1.0-beta.0.draft
         */
        type TypeParams<T_ThemeName extends string = string, T_ThemeBrightnessMode extends readonly TokenTypes.Theme.Mode.BrightnessOption[] = readonly TokenTypes.Theme.Mode.BrightnessOption[], T_ThemeContrastMode extends readonly TokenTypes.Theme.Mode.ContrastOption[] = readonly TokenTypes.Theme.Mode.ContrastOption[], T_Keyword_Universal extends string = string, T_Keyword_Text extends string = string, T_Keyword_Background extends string = string> = {
            name: T_ThemeName;
            brightness: T_ThemeBrightnessMode;
            contrast: T_ThemeContrastMode;
            variations: {
                universal: T_Keyword_Universal;
                text: T_Keyword_Text;
                background: T_Keyword_Background;
            };
        };
    }
    type TypeParams<T_ColourTypes extends Colour.TypeParams = Colour.TypeParams, T_ThemeTypes extends Theme.TypeParams = Theme.TypeParams, T_ExtraIconNames extends string = string, T_LogoNames extends string = string, T_PhotosTypes extends Photos.TypeParams = Photos.TypeParams, T_StyleTypes extends Style.TypeParams = Style.TypeParams> = {
        colour: T_ColourTypes;
        iconNames: T_ExtraIconNames;
        logoNames: T_LogoNames;
        photos: T_PhotosTypes;
        style: T_StyleTypes;
        theme: T_ThemeTypes;
    };
}
/**
 * @since 0.1.0-beta.0.draft
 */
export type AnyTokenLevel = WholeTokenLevel | '050' | '150' | '250' | '350' | '450' | '550' | '650' | '750' | '850' | '950';
/**
 * @since 0.1.0-alpha
 * @since 0.1.0-beta.0.draft — Renamed.
 */
export type WholeTokenLevel = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
/**
 * @since 0.1.0-alpha
 */
export type RequiredHeadingLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
