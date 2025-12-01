/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4
 * @license MIT
 */
import type { ThemeMode_Contrast, ThemeMode_ContrastAtLeastOne, ThemeMode_ContrastExtraOptions, ColourLevels_Extended, TokenLevels } from './@types.js';
import type * as TokenTypes from './@types.js';
import type { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Icons } from './Tokens_Icons.js';
import { Tokens_Logos } from './Tokens_Logos.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Themes_Set_SingleMode } from './Themes/Themes_Set_SingleMode.js';
import { Tokens_Typography } from './Tokens_Typography.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ExtraIconNames extends string, T_LogoNames extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> extends AbstractTokens<Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly input: Omit<Tokens_Internal.InputParam<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, "themes">;
    protected readonly config: Tokens_Internal.Config;
    get data(): {
        icons: Tokens_Icons.Data<T_ExtraIconNames>;
        logos: Tokens_Logos.Data<T_LogoNames>;
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data<number, string>;
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        css: Tokens_CSS.Data;
    };
    readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    readonly css: Tokens_CSS;
    readonly icons: Tokens_Icons<T_ExtraIconNames>;
    readonly logos: Tokens_Logos<T_LogoNames>;
    readonly spacing: Tokens_Spacing;
    readonly themes: Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    readonly typography: Tokens_Typography;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ExtraIconNames extends string = never, T_LogoNames extends string = never, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never>(input: Tokens_Internal.InputParam<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, config?: Partial<Tokens.Config<NoInfer<T_ExtraColourLevels>>>): Promise<Tokens<Tokens_Internal.Default_ColourName | T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, ThemeMode_Contrast<T_ThemeContrastMode_Extra>, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], themes: Tokens_Themes<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, input: Omit<Tokens_Internal.InputParam<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>, "themes">, config?: Tokens_Internal.Config);
    toJSON(): Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    toScssVars(): {
        icons: { [K in Tokens_Icons.DefaultIconNames | T_ExtraIconNames]: {
            slug: Tokens_Icons.DefaultIconNames | T_ExtraIconNames;
            label: string;
            height: number;
            width: number;
            aspectRatio: string;
            embedded: string;
        }; };
        logos: { [K_1 in keyof Tokens_Logos.Data<T_LogoNames>]: {
            label: string;
            height: number;
            width: number;
            aspectRatio: string;
        }; };
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels> extends infer T extends object ? { [K_2 in keyof T]: T_NewValue; } : never;
        themes: { [K_3 in T_ThemeName]: { [B in T_ThemeBrightnessMode[number]]: { [C in T_ThemeContrastMode[number]]: {
            system: {
                background: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                button: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                input: {
                    accent: {
                        $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                    bg: {
                        $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                    border: {
                        $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                    text: {
                        $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                        active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    };
                };
                link: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    visited: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                } & {
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                selection: {
                    bg: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                text: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                accent: {
                    bg: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                mark: {
                    bg: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                selected: {
                    bg: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    text: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
            };
            background: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            text: {
                $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                primary: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                secondary: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                grey: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & { [K_5 in T_ThemeKeyword_Universal]: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>; } & { [K_6 in T_ThemeKeyword_Text]: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>; };
            ui: {
                $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                primary: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                secondary: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                grey: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & { [K_7 in T_ThemeKeyword_Universal]: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>; } & { [K_8 in T_ThemeKeyword_Text]: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>; };
            heading: {
                1: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                2: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                9: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                3: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                4: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                5: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                6: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                7: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                8: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                10: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            selection: {
                bg: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                text: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            link: {
                $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                visited: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            'link-icon': {
                $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                visited: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            'link-ui': {
                $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                visited: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            } & {
                active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                disabled: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
            };
            button: {
                primary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                secondary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
                disabled: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
            } & { [K_9 in T_ThemeKeyword_Universal]: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>>; };
            field: {
                accent: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                bg: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                border: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
                text: {
                    $: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    hover: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                    active: TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>;
                };
            };
        }; }; }; };
        border: {
            radius: AbstractTokens.ScssReturn;
            width: AbstractTokens.ScssReturn;
            stroke: AbstractTokens.ScssReturn;
        };
        style: {
            button: AbstractTokens.ScssReturn;
            heading: AbstractTokens.ScssReturn;
            selection: AbstractTokens.ScssReturn;
        };
        transition: {
            properties: AbstractTokens.ScssReturn;
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
                    2: number;
                    9: number;
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
                    4: number;
                };
                normal: number;
                bigger: {
                    [key: number]: number;
                };
            };
            sizeScale: number;
            family: {
                [x: string]: {
                    variable: {
                        normal: {
                            family: string;
                            fallbacks: string[];
                            src: {
                                type: "local" | "truetype" | "woff" | "woff2";
                                path: string;
                            }[];
                            style: "normal" | "italic";
                            weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                            printFontFace: boolean;
                            display?: "auto" | "block" | "fallback" | "optional" | "swap";
                            'line-gap-override'?: string;
                            'size-adjust'?: string;
                            'unicode-range'?: string;
                        };
                        italic: {
                            family: string;
                            fallbacks: string[];
                            src: {
                                type: "local" | "truetype" | "woff" | "woff2";
                                path: string;
                            }[];
                            style: "normal" | "italic";
                            weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                            printFontFace: boolean;
                            display?: "auto" | "block" | "fallback" | "optional" | "swap";
                            'line-gap-override'?: string;
                            'size-adjust'?: string;
                            'unicode-range'?: string;
                        };
                    } | undefined;
                    weights: {
                        100?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        200?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        300?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        400?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        500?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        600?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        700?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        800?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                        900?: {
                            normal: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                            italic: {
                                family: string;
                                fallbacks: string[];
                                src: {
                                    type: "local" | "truetype" | "woff" | "woff2";
                                    path: string;
                                }[];
                                style: "normal" | "italic";
                                weight: TokenLevels | `${"000" | TokenLevels} ${TokenLevels | "1000"}`;
                                printFontFace: boolean;
                                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                                'line-gap-override'?: string;
                                'size-adjust'?: string;
                                'unicode-range'?: string;
                            };
                        } | undefined;
                    };
                };
            } | undefined;
            familyOverrides: {
                label: string;
                value: string;
                contentWidthScale?: number;
                labelClass?: string;
                lineHeightScale?: number;
            }[] | undefined;
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
 * @since 0.1.0-alpha
 * @internal
 * @private
 */
export declare namespace Tokens_Internal {
    interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }
    type Default_ColourName = 'base';
    type Default_ExtraColourLevels = ColourLevels_Extended;
    type Default_ThemeBrightnessMode = ['light', 'dark'];
    type Default_ThemeContrastMode = ['low', 'average', 'high', 'max'];
    type Default_ThemeExtraContrastMode = [];
    type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ExtraIconNames extends string, T_LogoNames extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        icons: Tokens_Icons.Data<T_ExtraIconNames>;
        logos: Tokens_Logos.Data<T_LogoNames>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        typography: Tokens_Typography.Data;
    };
    interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ExtraIconNames extends string, T_LogoNames extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        icons?: undefined | Tokens_Icons.InputParam<T_ExtraIconNames>;
        logos?: undefined | Tokens_Logos.InputParam<T_LogoNames>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: T_ThemeBrightnessMode;
            contrast?: T_ThemeContrastMode;
            input?: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly [string, ...string[]], T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne, T_ThemeName extends string, T_ExtraIconNames extends string, T_LogoNames extends string, T_ThemeKeyword_Universal extends string, T_ThemeKeyword_Text extends string> = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        icons: Tokens_Icons.JsonReturn<T_ExtraIconNames>;
        logos: Tokens_Logos.JsonReturn<T_LogoNames>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[number], T_ThemeContrastMode[number], T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        typography: Tokens_Typography.JsonReturn;
    };
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens {
    /**
     * @since 0.1.0-alpha
     */
    function sample(): Promise<Tokens<"base" | "purple" | "turquoise" | "red", TokenTypes.ColourLevels_Extended, Tokens_Internal.Default_ThemeBrightnessMode, readonly ["low", "average", "high", "max"], "default", never, never, never, never>>;
    /**
     * @since 0.1.0-alpha
     */
    type ColourLevels = TokenTypes.ColourLevels;
    /**
     * @since 0.1.0-alpha
     */
    type ColourLevels_Extended = TokenTypes.ColourLevels_Extended;
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha
     */
    interface Config<T_ExtraColourLevels extends ColourLevels_Extended = ColourLevels_Extended> {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    }
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ExtraIconNames extends string = string, T_LogoNames extends string = string, T_ThemeKeyword_Universal extends string = string, T_ThemeKeyword_Text extends string = string> = Tokens_Internal.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.0-alpha
     */
    type Instance<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ExtraIconNames extends string = string, T_LogoNames extends string = string, T_ThemeKeyword_Universal extends string = string, T_ThemeKeyword_Text extends string = string> = Tokens<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    /**
     * @since 0.1.0-alpha
     */
    interface InputParam<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ExtraIconNames extends string = string, T_LogoNames extends string = string, T_ThemeKeyword_Universal extends string = string, T_ThemeKeyword_Text extends string = string> extends Tokens_Internal.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
    }
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ExtraIconNames extends string = string, T_LogoNames extends string = string, T_ThemeKeyword_Universal extends string = string, T_ThemeKeyword_Text extends string = string> = Tokens_Internal.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ExtraIconNames, T_LogoNames, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
    /**
     * @since 0.1.0-alpha
     */
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
            readonly '300': {
                readonly h: 160;
                readonly s: 45;
                readonly l: 60;
            };
            readonly '500': {
                readonly h: 168;
                readonly s: 92;
                readonly l: 27.5;
            };
            readonly '700': {
                readonly h: 162;
                readonly s: 69;
                readonly l: 16.5;
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
     * @since 0.1.0-alpha
     */
    namespace Typography {
        /**
         * @since 0.1.0-alpha
         */
        type AllFonts<T_FontFamilySlug extends string = string> = {
            [K in T_FontFamilySlug]: Tokens_Typography.Font.Family<K>;
        };
        /**
         * @since 0.1.0-alpha
         */
        namespace Font {
            /**
             * @since 0.1.0-alpha
             */
            type AllLevels<T_FontFamilySlug extends string = string> = {
                [K in T_FontFamilySlug]: Omit<Tokens_Typography.Font.Family<K>, 'weights'> & {
                    weights: {
                        [K in TokenLevels]: {
                            normal: Tokens_Typography.Font.File;
                            italic: Tokens_Typography.Font.File;
                        };
                    };
                };
            };
            /**
             * @since 0.1.0-alpha
             */
            type File = Tokens_Typography.Font.File;
            /**
             * @since 0.1.0-alpha
             */
            const allWeights: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
            /**
             * @since 0.1.0-alpha
             */
            const SystemMonospace: string[];
            /**
             * @since 0.1.0-alpha
             */
            const SystemUI: string[];
            /**
             * Helps to generate all the weights for a font family.
             *
             * @since 0.1.0-alpha
             */
            function familyGenerator<T_Slug extends string>(slug: T_Slug, name: string, familyOpts?: Omit<Partial<Tokens_Typography.Font.Family<T_Slug>>, "path" | "style" | "weight"> & {
                includeLocalSrc?: boolean;
            }, weightOpts?: {
                [L in TokenLevels]?: familyGenerator.FileOptions;
            }): Tokens_Typography.Font.Family<T_Slug> & {
                weights: Required<Tokens_Typography.Font.Family<T_Slug>['weights']>;
            };
            /**
             * Utilities for the {@link familyGenerator} function.
             *
             * @since 0.1.0-alpha
             */
            namespace familyGenerator {
                /**
                 * @since 0.1.0-alpha
                 */
                type FileOptions = Omit<Tokens_Typography.Font.File, "path" | "style" | "weight"> & {
                    /**
                     * Whether to include local sources in the files list.
                     *
                     * @default true
                     */
                    includeLocalSrc?: boolean;
                    pathWeight?: TokenLevels | 'variable';
                    pathStyle?: "normal" | "italic";
                };
                /**
                 * @since 0.1.0-alpha
                 */
                function fileGenerator<T_Slug extends string>(subpath: T_Slug, name: string, weight: TokenLevels | `${'000' | TokenLevels} ${TokenLevels | '1000'}`, style: "normal" | "italic", opts?: familyGenerator.FileOptions): Tokens_Typography.Font.File;
            }
            /**
             * @since 0.1.0-alpha
             */
            namespace Family {
                const dyslexic: {
                    slug: "dyslexic";
                    name: string;
                    appendSystemFontsToFallbacks: true;
                    contentWidthScale: number;
                    fallbacks: string[];
                    lineHeightScale: number;
                    sizeAdjust: string;
                    weights: {
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
                const hyperlegible: {
                    slug: "hyperlegible";
                    name: string;
                    appendSystemFontsToFallbacks: true;
                    contentWidthScale: number;
                    fallbacks: string[];
                    lineHeightScale: number;
                    sizeAdjust: string;
                    weights: {
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
                const monospace: {
                    slug: "monospace";
                    name: string;
                    appendSystemFontsToFallbacks: "monospace";
                    contentWidthScale: number;
                    fallbacks: string[];
                    sizeAdjust: string;
                    weights: {
                        100: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        200: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        300: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        500: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        600: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
            }
        }
    }
    /**
     * @since 0.1.0-alpha
     */
    namespace Colour {
        /**
         * @since 0.1.0-alpha
         */
        type AllColours<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels> = Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        /**
         * @since 0.1.0-alpha
         */
        type PartialMap<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>;
        /**
         * @since 0.1.0-alpha.4
         */
        type CompleteMap<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    }
    /**
     * @since 0.1.0-alpha
     */
    namespace Themes {
        /**
         * @since 0.1.0-alpha
         */
        const allHeadingLevels: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        /**
         * @since 0.1.0-alpha
         */
        interface AllVariations<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> extends Tokens_Themes_Set_SingleMode.AllVariations<T_ColourName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
        }
        /**
         * @since 0.1.0-alpha
         */
        interface RequiredLevels<T_ExtraColourLevels extends ColourLevels_Extended> extends Tokens_Themes_Set_SingleMode.RequiredLevels<T_ExtraColourLevels> {
        }
        /**
         * @since 0.1.0-alpha
         */
        namespace Set {
            /**
             * @since 0.1.0-alpha
             */
            type InputParam<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeBrightnessMode extends readonly [string, ...string[]] = Tokens_Internal.Default_ThemeBrightnessMode, T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode, T_ThemeName extends string = Tokens_Themes.Default_ThemeName, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> = Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ThemeKeyword_Universal, T_ThemeKeyword_Text>;
        }
        /**
         * @since 0.1.0-alpha
         */
        namespace SingleMode {
            const colourOption: typeof Tokens_Themes_Set_SingleMode.Build.colourOption;
            /**
             * @since 0.1.0-alpha
             */
            interface Data_RecursivePartial<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never, __T_ColourOption extends TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels> = TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>> extends Tokens_Themes_Set_SingleMode.Data_RecursivePartial<T_ColourName, T_ExtraColourLevels, T_ThemeKeyword_Universal, T_ThemeKeyword_Text, __T_ColourOption> {
            }
            /**
             * @since 0.1.0-alpha
             */
            interface InputParam<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> extends Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
            }
            /**
             * @since 0.1.0-alpha
             */
            interface JsonReturn<T_ColourName extends string = Tokens_Internal.Default_ColourName, T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels, T_ThemeKeyword_Universal extends string = never, T_ThemeKeyword_Text extends string = never> extends Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeKeyword_Universal, T_ThemeKeyword_Text> {
            }
        }
    }
}
//# sourceMappingURL=Tokens.d.ts.map