/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { ThemeMode_Contrast, ThemeMode_ContrastAtLeastOne, ThemeMode_ContrastExtraOptions, TokenLevels_Extended } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Typography } from './Tokens_Typography.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string> extends AbstractTokens<Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly input: Omit<Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>, "themes">;
    protected readonly config: Tokens_Internal.Config;
    get data(): {
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data;
        css: Tokens_CSS.Data;
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>;
    };
    readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    readonly css: Tokens_CSS;
    readonly spacing: Tokens_Spacing;
    readonly themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>;
    readonly typography: Tokens_Typography;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName>(input: Tokens_Internal.InputParam<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName>, config?: Partial<Tokens.Config<T_ExtraColourLevels>>): Promise<Tokens<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName>>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>, input: Omit<Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>, "themes">, config?: Tokens_Internal.Config);
    toJSON(): Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
    toScssVars(): {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels> extends infer T extends object ? { [K in keyof T]: T_Return; } : never;
        themes: { [K_1 in T_ThemeName]: { [B in T_ThemeBrightnessMode[number]]: { [C in T_ThemeContrastMode[number]]: import("./Themes/Themes_Set_SingleMode.js").Tokens_Themes_Set_SingleMode.Data<import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>; }; }; };
        border: {
            radius: AbstractTokens.ScssReturn;
            width: AbstractTokens.ScssReturn;
            stroke: AbstractTokens.ScssReturn;
        };
        transition: {
            time: AbstractTokens.ScssReturn;
        };
        z_index: {
            [key: string]: number;
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
        };
        font: {
            size: {
                [key: string]: number | import("../index.js").RecursiveRecord<string | number, number>;
                title: number;
                heading: {
                    1: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    7: number;
                    8: number;
                    [key: number]: number;
                };
                smaller: {
                    1: number;
                    2: number;
                    3: number;
                    [key: number]: number;
                };
                normal: number;
                bigger: {
                    1: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    [key: number]: number;
                };
            };
        };
        line_height: {
            100: number;
            200: number;
            300: number;
            400: number;
            500: number;
            600: number;
        } & {
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        spacing_multiplier: number;
        margin: {
            100: number;
            200: number;
            300: number;
            400: number;
            500: number;
            600: number;
            800: number;
        } & {
            700?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
    };
    toScss(): string;
}
/**
 * Internal utilities for the {@link Tokens} class.
 *
 * @since ___PKG_VERSION___
 * @internal
 * @private
 */
export declare namespace Tokens_Internal {
    interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }
    type Default_ColourName = 'base';
    type Default_ExtraColourLevels = never;
    type Default_ThemeBrightnessMode = ['light', 'dark'];
    type Default_ThemeContrastMode = ['average', 'high', 'low'];
    type Default_ThemeExtraContrastMode = ['low'];
    type Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string> = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>;
        typography: Tokens_Typography.Data;
    };
    interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string> {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: T_ThemeBrightnessMode;
            contrast?: T_ThemeContrastMode;
            input?: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>;
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string> = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>;
        typography: Tokens_Typography.JsonReturn;
    };
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens {
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since ___PKG_VERSION___
     */
    interface Config<T_ExtraColourLevels extends TokenLevels_Extended = TokenLevels_Extended> {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    }
    type Data<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName> = Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
    interface InputParam<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName> extends Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName> {
    }
    type JsonReturn<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName> = Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
    const SampleColours: {
        readonly base: {
            readonly '100': {
                readonly l: 98;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 2;
                readonly c: 0;
                readonly h: 0;
            };
        };
        readonly red: {
            readonly '100': {
                readonly l: 98;
                readonly c: 50;
                readonly h: 25;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 75;
                readonly h: 38;
            };
            readonly '900': {
                readonly l: 2;
                readonly c: 9.125;
                readonly h: 40;
            };
        };
        readonly orange: {
            readonly '100': {
                readonly l: 98;
                readonly c: 35;
                readonly h: 40;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 65;
                readonly h: 55;
            };
            readonly '900': {
                readonly l: 2;
                readonly c: 4.75;
                readonly h: 45;
            };
        };
        readonly yellow: {
            readonly '100': "fdf8ed";
            readonly '500': "cc9200";
            readonly '900': "0a0400";
        };
        readonly green: {
            readonly '100': "cef6d2";
            readonly '500': "258d2e";
            readonly '900': "021705";
        };
        readonly turquoise: {
            readonly '100': "c8f4de";
            readonly '500': "068c6e";
            readonly '900': "001712";
        };
        readonly blue: {
            readonly '100': "d5e7f7";
            readonly '500': "487ba8";
            readonly '900': "051322";
        };
        readonly purple: {
            readonly '100': "eedaf9";
            readonly '500': "975eb1";
            readonly '900': "1b0824";
        };
        readonly pink: {
            readonly '100': "fbdbef";
            readonly '500': "ae5691";
            readonly '900': "25071b";
        };
    };
}
//# sourceMappingURL=Tokens.d.ts.map