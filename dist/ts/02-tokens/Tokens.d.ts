/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { ThemeMode_Contrast, ThemeMode_ContrastAtLeastOne, ThemeMode_ContrastExtraOptions, ColourLevels_Extended } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import type { Tokens_Themes_Set_SingleMode } from './Themes/Themes_Set_SingleMode.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> extends AbstractTokens<Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly input: Omit<Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, "themes">;
    protected readonly config: Tokens_Internal.Config;
    get data(): {
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data<number>;
        css: Tokens_CSS.Data;
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    };
    readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    readonly css: Tokens_CSS;
    readonly spacing: Tokens_Spacing;
    readonly themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    readonly typography: Tokens_Typography;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never>(input: Tokens_Internal.InputParam<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, config?: Partial<Tokens.Config<T_ExtraColourLevels>>): Promise<Tokens<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, input: Omit<Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, "themes">, config?: Tokens_Internal.Config);
    toJSON(): Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    toScssVars(): {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels> extends infer T extends object ? { [K in keyof T]: T_Return; } : never;
        themes: { [K_1 in T_ThemeName]: { [B in T_ThemeBrightnessMode[number]]: { [C in T_ThemeContrastMode[number]]: {
            system: {
                background: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                button: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                input: {
                    bg: {
                        $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                    border: {
                        $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                    text: {
                        $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                };
                link: {
                    $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    visited: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                selection: {
                    bg: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                text: {
                    $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    disabled: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                accent: {
                    bg: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                mark: {
                    bg: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                selected: {
                    bg: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
            };
            background: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            text: {
                $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                primary: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                secondary: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                grey: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & { [K_3 in T_ThemeKeyword_Universal]: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>; } & { [K_4 in T_ThemeKeyword_Text]: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>; };
            ui: {
                $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                primary: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                secondary: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                grey: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & { [K_5 in T_ThemeKeyword_Universal]: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>; } & { [K_6 in T_ThemeKeyword_Text]: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>; };
            heading: {
                1: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                9: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                2: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                3: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                4: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                5: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                6: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                7: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                8: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                10: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            selection: {
                bg: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                text: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            link: {
                $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                visited: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            button: {
                primary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                secondary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                disabled: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
            } & { [K_7 in T_ThemeKeyword_Universal]: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>>; };
            field: {
                bg: {
                    $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                border: {
                    $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                text: {
                    $: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: import("./@types.js").ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
            };
        }; }; }; };
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
                heading: {
                    1: number;
                    9: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    7: number;
                    8: number;
                    10: number;
                } & {
                    [key: number]: number;
                };
                smaller: {
                    [key: number]: number;
                    1: number;
                    2: number;
                    3: number;
                };
                normal: number;
                bigger: {
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
            900: number;
        } & {
            700?: number | undefined;
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
 * @since 0.1.0-alpha.draft
 * @internal
 * @private
 */
export declare namespace Tokens_Internal {
    interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }
    type Default_ColourName = 'base';
    type Default_ExtraColourLevels = ColourLevels_Extended;
    type Default_ThemeBrightnessMode = ['light', 'dark', ...string[]];
    type Default_ThemeContrastMode = ['low', 'average', 'high'];
    type Default_ThemeExtraContrastMode = ['low'];
    type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        typography: Tokens_Typography.Data;
    };
    interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: T_ThemeBrightnessMode;
            contrast?: T_ThemeContrastMode;
            input?: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        typography: Tokens_Typography.JsonReturn;
    };
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens {
    function sample(): Promise<Tokens<"base" | "purple" | "turquoise" | "red", ColourLevels_Extended, Tokens_Internal.Default_ThemeBrightnessMode, readonly ["low", "average", "high", "low"], "default", never, never>>;
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Config<T_ExtraColourLevels extends ColourLevels_Extended = ColourLevels_Extended> {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    }
    type Data<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> = Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    interface InputParam<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> extends Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
    }
    type JsonReturn<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> = Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    const SampleColours: {
        readonly yardstick: {
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
                readonly h: 5;
                readonly s: 100;
                readonly l: 98;
            };
            readonly '300': {
                readonly h: 4;
                readonly s: 100;
                readonly l: 79.5;
            };
            readonly '500': {
                readonly h: 3;
                readonly s: 68;
                readonly l: 53;
            };
            readonly '900': {
                readonly h: 7;
                readonly s: 90;
                readonly l: 4;
            };
        };
        readonly orange: {
            readonly '100': {
                readonly h: 35;
                readonly s: 100;
                readonly l: 96.5;
            };
            readonly '500': {
                readonly h: 22;
                readonly s: 75;
                readonly l: 43;
            };
            readonly '900': {
                readonly h: 19;
                readonly s: 100;
                readonly l: 3;
            };
        };
        readonly yellow: {
            readonly '100': {
                readonly h: 49;
                readonly s: 100;
                readonly l: 94;
            };
            readonly '300': {
                readonly h: 45;
                readonly s: 70;
                readonly l: 54;
            };
            readonly '500': {
                readonly h: 35;
                readonly s: 100;
                readonly l: 34;
            };
            readonly '900': {
                readonly h: 20;
                readonly s: 100;
                readonly l: 3;
            };
        };
        readonly green: {
            readonly '100': {
                readonly h: 112;
                readonly s: 53;
                readonly l: 97;
            };
            readonly '500': {
                readonly h: 125;
                readonly s: 50;
                readonly l: 35.5;
            };
            readonly '900': {
                readonly h: 112;
                readonly s: 81;
                readonly l: 2;
            };
        };
        readonly turquoise: {
            readonly '100': {
                readonly h: 157;
                readonly s: 68;
                readonly l: 96.5;
            };
            readonly '500': {
                readonly h: 168;
                readonly s: 92;
                readonly l: 27.5;
            };
            readonly '700': {
                readonly h: 163;
                readonly s: 100;
                readonly l: 14;
            };
            readonly '900': {
                readonly h: 153;
                readonly s: 100;
                readonly l: 2;
            };
        };
        readonly blue: {
            readonly '100': {
                readonly h: 245;
                readonly s: 100;
                readonly l: 98.5;
            };
            readonly '500': {
                readonly h: 230;
                readonly s: 63;
                readonly l: 60;
            };
            readonly '900': {
                readonly h: 244;
                readonly s: 41;
                readonly l: 4;
            };
        };
        readonly purple: {
            readonly '100': {
                readonly h: 270;
                readonly s: 100;
                readonly l: 98.5;
            };
            readonly '500': {
                readonly h: 280;
                readonly s: 60;
                readonly l: 56.5;
            };
            readonly '900': {
                readonly h: 285;
                readonly s: 75;
                readonly l: 4.5;
            };
        };
        readonly pink: {
            readonly '100': {
                readonly h: 325;
                readonly s: 100;
                readonly l: 98;
            };
            readonly '300': {
                readonly h: 322;
                readonly s: 100;
                readonly l: 79.5;
            };
            readonly '500': {
                readonly h: 320;
                readonly s: 58;
                readonly l: 51;
            };
            readonly '900': {
                readonly h: 322;
                readonly s: 85;
                readonly l: 5;
            };
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    namespace Themes {
        /**
         * @since 0.1.0-alpha.draft
         */
        namespace Set {
            /**
             * @since 0.1.0-alpha.draft
             */
            namespace SingleMode {
                interface JsonReturn<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> extends Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
                }
            }
        }
    }
}
//# sourceMappingURL=Tokens.d.ts.map