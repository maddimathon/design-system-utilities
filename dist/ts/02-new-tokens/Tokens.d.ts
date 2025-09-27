/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
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
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string> extends AbstractTokens<Tokens.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly input: Omit<Tokens.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>, "themes">;
    protected readonly config: Partial<Tokens.Config>;
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
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[], T_ThemeName extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], input: Tokens.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName>, config?: Partial<Tokens.Config>): Promise<Tokens<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName>>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName>, input: Omit<Tokens.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>, "themes">, config?: Partial<Tokens.Config>);
    toJSON(): Tokens.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
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
            600: number;
            800: number;
        } & {
            500?: number | undefined;
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
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens {
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Config {
        tokensAsDefault: boolean;
    }
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
//# sourceMappingURL=Tokens.d.ts.map