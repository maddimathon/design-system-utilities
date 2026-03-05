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

import type { CssColours } from '@maddimathon/utility-sass';

import type { ColourUtilities } from '../01-utilities/ColourUtilities.ts';

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
         * Enforces some shade names that are always present.
         * 
         * @since ___PKG_VERSION___
         */
        export type GenericNameArray<T_ColourName extends string> = readonly [ "base", ...T_ColourName[] ];

        /**
         * Creates a Record-like object indexed instead colour shade levels.
         * 
         * @since ___PKG_VERSION___
         * @internal
         */
        export type LevelRecord<
            T_ColourTypes extends Colour.TypeParams,
            T_Value extends any,
        > = {
            [ L in ColourUtilities.Levels.Required ]: T_Value;
        } & {
                [ L in T_ColourTypes[ 'extraLevels' ] ]: T_Value;
            };

        /**
         * Creates a Record-like object indexed instead colour shade names.
         * 
         * @since ___PKG_VERSION___
         * @internal
         */
        export type NameRecord<
            T_ColourTypes extends Colour.TypeParams,
            T_Value extends any,
        > = {
            base: T_Value;
        } & {
                [ C in T_ColourTypes[ 'names' ] ]: T_Value;
            };

        /**
         * Creates a partial-ized Record-like object indexed instead colour shade levels.
         * 
         * @since ___PKG_VERSION___
         * @internal
         */
        export type PartialLevelRecord<
            T_ColourTypes extends Colour.TypeParams,
            T_Value extends any,
        > = {
            [ L in ColourUtilities.Levels.Required ]?: undefined | T_Value;
        } & {
                [ L in T_ColourTypes[ 'extraLevels' ] ]?: undefined | T_Value;
            };

        /**
         * Creates a partial-ized Record-like object indexed instead colour shade names.
         * 
         * @since ___PKG_VERSION___
         * @internal
         */
        export type PartialNameRecord<
            T_ColourTypes extends Colour.TypeParams,
            T_Value extends any,
        > = {
            base?: undefined | T_Value;
        } & {
                [ C in T_ColourTypes[ 'names' ] ]?: undefined | T_Value;
            };

        /**
         * Slugs representing the colour tokens in this system.
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Colour} namespace.
         */
        export type TokenSlug<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        > = `${ TokenTypes.Colour.GenericName<T_ColourName> }-${ ColourUtilities.Levels.Required | T_ExtraColourLevels }`;

        /**
         * Type params for colour tokens.
         * 
         * @since ___PKG_VERSION___
         */
        export type TypeParams<
            T_ColourNames extends string = string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
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
         * Any valid string value for css.
         * 
         * @since ___PKG_VERSION___
         */
        export type AnyCssColour =
            | CssColours.Keyword
            | CssColours.Slug
            | SystemColor;

        /**
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link Css} namespace.
         */
        export type SystemColor =
            | CssColours.SystemColor
            | CssColours.SystemColor[];
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
        > = Css.AnyCssColour | "black" | "white" | Colour.TokenSlug<
            T_Types[ 'names' ],
            T_Types[ 'extraLevels' ]
        >;

        /**
         * @since ___PKG_VERSION___
         */
        export type GetBrightnessKeys<
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        > = "light" | "dark" | T_ThemeTypes[ 'brightness' ][ number ];

        /**
         * @since ___PKG_VERSION___
         */
        export type GetExtraBrightnessKeys<
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        > = Exclude<T_ThemeTypes[ 'brightness' ][ number ], Mode.BrightnessRequired>;

        /**
         * @since ___PKG_VERSION___
         */
        export type GetContrastKeys<
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        > = "low" | "average" | "high" | T_ThemeTypes[ 'contrast' ][ number ];

        /**
         * @since ___PKG_VERSION___
         */
        export type GetExtraContrastKeys<
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        > = Exclude<T_ThemeTypes[ 'contrast' ][ number ], Mode.ContrastRequired>;

        /**
         * @since ___PKG_VERSION___
         */
        export namespace Mode {

            /**
             * An array of brightness mode slugs with the required slugs.
             * 
             * @since ___PKG_VERSION___
             */
            export type Brightness<
                T_ParamValue extends BrightnessOption[] | readonly BrightnessOption[] = BrightnessOption[],
            > = readonly [ "light", "dark", ...T_ParamValue ];

            /**
             * All allowed brightness mode slugs.
             * 
             * @since ___PKG_VERSION___
             */
            export type BrightnessOption = "light" | "dark";

            /**
             * All required brightness mode slugs.
             * 
             * @since ___PKG_VERSION___
             */
            export type BrightnessRequired = "light" | "dark";

            /**
             * An array of contrast mode slugs with the required slugs.
             * 
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type Contrast<
                T_ParamValue extends ContrastOption[] | readonly ContrastOption[] = ContrastOption[],
            > = readonly [ "low", "average", "high", ...T_ParamValue ];

            /**
             * All allowed contrast mode slugs.
             * 
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to {@link Theme.Mode} namespace.
             */
            export type ContrastOption = "low" | "average" | "high" | "max";

            /**
             * Creates a Record-like object indexed instead by contrast mode values.
             * 
             * @since ___PKG_VERSION___
             * @internal
             */
            export type ContrastRecord<
                T_ThemeTypes extends Theme.TypeParams,
                T_Value extends any,
            > = {
                [ C in ContrastRequired ]: T_Value;
            } & {
                    [ C in T_ThemeTypes[ 'contrast' ][ number ] ]: T_Value;
                };

            /**
             * All required contrast mode slugs.
             * 
             * @since ___PKG_VERSION___
             */
            export type ContrastRequired = "low" | "average" | "high";

            /**
             * Creates an object of nested values indexed first by brightness mode, then by contrast mode.
             * 
             * @since ___PKG_VERSION___
             * @internal
             */
            export type NestedObject<
                T_ThemeTypes extends Theme.TypeParams,
                T_NestedValue extends any,
            > = {
                [ B in BrightnessRequired ]: ContrastRecord<T_ThemeTypes, T_NestedValue>;
            } & {
                    [ B in T_ThemeTypes[ 'brightness' ][ number ] ]: ContrastRecord<T_ThemeTypes, T_NestedValue>;
                };

            /**
             * Creates a partial-ized Record-like object indexed instead by contrast mode values.
             * 
             * @since ___PKG_VERSION___
             * @internal
             */
            export type PartialContrastRecord<
                T_ThemeTypes extends Theme.TypeParams,
                T_Value extends any,
            > = {
                [ C in ContrastRequired ]?: undefined | T_Value;
            } & {
                    [ C in TokenTypes.Theme.GetExtraContrastKeys<T_ThemeTypes> ]?: undefined | T_Value;
                };

            /**
             * Creates an object of nested values indexed first by brightness mode, then by contrast mode.
             * 
             * @since ___PKG_VERSION___
             * @internal
             */
            export type PartialNestedObject<
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
                T_NestedValue extends any,
            > = {
                [ B in TokenTypes.Theme.Mode.BrightnessRequired ]?: undefined | PartialContrastRecord<T_ThemeTypes, T_NestedValue>;
            } & {
                    [ B in TokenTypes.Theme.GetExtraBrightnessKeys<T_ThemeTypes> ]?: undefined | PartialContrastRecord<T_ThemeTypes, T_NestedValue>;
                };
        }

        /**
         * Type params for theme tokens.
         * 
         * @since ___PKG_VERSION___
         */
        export type TypeParams<
            T_ThemeName extends string = string,
            T_ThemeBrightnessMode extends readonly TokenTypes.Theme.Mode.BrightnessOption[] = readonly TokenTypes.Theme.Mode.BrightnessOption[],
            T_ThemeContrastMode extends readonly TokenTypes.Theme.Mode.ContrastOption[] = readonly TokenTypes.Theme.Mode.ContrastOption[],

            T_Keyword_Universal extends string = string,
            T_Keyword_Text extends string = string,
            T_Keyword_Background extends string = string,
        > = {
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

    export type TypeParams<
        T_ColourTypes extends Colour.TypeParams = Colour.TypeParams,
        T_ThemeTypes extends Theme.TypeParams = Theme.TypeParams,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,
    > = {
        colour: T_ColourTypes;
        iconNames: T_ExtraIconNames;
        logoNames: T_LogoNames;
        theme: T_ThemeTypes;
    };
}

/**
 * @since ___PKG_VERSION___
 */
export type AnyTokenLevel =
    | WholeTokenLevel
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
 * @since ___PKG_VERSION___ — Renamed.
 */
export type WholeTokenLevel =
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
