/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import type { Objects } from '@maddimathon/utility-typescript/types';
import type { RecursiveRecord } from '../01-utilities/@types.js';
import type { RequiredHeadingLevels, TokenLevels, TokenLevels_Extended } from './@types.js';
import type { Tokens_Spacing } from './Tokens_Spacing.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Typography extends AbstractTokens<Tokens_Typography.Data> {
    protected readonly spacing: Tokens_Spacing;
    static get default(): Tokens_Typography.Data;
    readonly data: Tokens_Typography.Data;
    readonly familyOverrides: undefined | {
        label: string;
        value: string;
        contentWidthScale?: number;
        labelClass?: string;
        lineHeightScale?: number;
    }[];
    constructor(spacing: Tokens_Spacing, input: Tokens_Typography.InputParam);
    toJSON(): Tokens_Typography.JsonReturn;
    toScssVars(): {
        font: {
            size: {
                [key: string]: number | RecursiveRecord<string | number, number>;
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
    };
}
/**
 * Utilities for the {@link Tokens_Typography} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Typography {
    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";
    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_SizeValue = number, T_FontFamilySlug extends string = string> = {
        lineHeight: {
            [L in DefaultLineHeightLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultLineHeightLevels> | TokenLevels_Extended]?: number;
        };
        fonts: undefined | {
            [F in T_FontFamilySlug]: Font.Family<F>;
        };
        size: {
            heading: {
                [L in RequiredHeadingLevels]: T_SizeValue;
            } & {
                [key: number]: T_SizeValue;
            };
            smaller: {
                1: T_SizeValue;
                2: T_SizeValue;
                3: T_SizeValue;
                4: T_SizeValue;
                [key: number]: T_SizeValue;
            };
            normal: T_SizeValue;
            bigger: {
                [key: number]: T_SizeValue;
            };
            [key: string]: T_SizeValue | RecursiveRecord<number | string, T_SizeValue>;
        };
        sizeScale: number;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_FontFamilySlug extends string = string> = Partial<Omit<Data<number, T_FontFamilySlug>, 'lineHeight' | 'size'>> & {
        lineHeight?: Partial<Data<number, T_FontFamilySlug>['lineHeight']>;
        size?: Objects.RecursivePartial<Data<number, T_FontFamilySlug>['size']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_FontFamilySlug extends string = string> = Data<{
        rem: number;
        pt: number;
        px: number;
    }, T_FontFamilySlug> & {
        familyOverrides: undefined | {
            label: string;
            value: T_FontFamilySlug;
            contentWidthScale?: number;
            labelClass?: string;
            lineHeightScale?: number;
        }[];
    };
    /**
     * @since 0.1.0-alpha
     */
    export namespace Font {
        /**
         * @since 0.1.0-alpha
         */
        const SystemMonospace: string[];
        /**
         * @since 0.1.0-alpha
         */
        const SystemUI: string[];
        /**
         * @since 0.1.0-alpha
         */
        interface FontFileOptions {
            display?: undefined | "auto" | "block" | "fallback" | "optional" | "swap";
            lineGapOverride?: undefined | string;
            sizeAdjust?: undefined | string;
            unicodeRange?: undefined | string;
        }
        /**
         * @since 0.1.0-alpha
         */
        interface File extends FontFileOptions {
            path: {
                [F in "local" | "ttf" | "woff" | "woff2"]?: string | string[];
            };
            style: "normal" | "italic";
            weight: TokenLevels | `${'000' | TokenLevels} ${TokenLevels | '1000'}`;
        }
        /**
         * @since 0.1.0-alpha
         */
        type FamilyScss = {
            [L in TokenLevels | `${TokenLevels}i`]?: {
                family: string;
                fallbacks: string[];
                src: {
                    type: "local" | "truetype" | "woff" | "woff2";
                    path: string;
                }[];
                style: "normal" | "italic";
                weight: TokenLevels | `${'000' | TokenLevels} ${TokenLevels | '1000'}`;
                printFontFace: boolean;
                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                'line-gap-override'?: string;
                'size-adjust'?: string;
                'unicode-range'?: string;
            };
        };
        /**
         * @since 0.1.0-alpha
         */
        interface Family<T_Slug extends string = string> extends FontFileOptions {
            slug: T_Slug;
            name: string;
            fallbacks?: string[];
            /**
             * Whether to append the system fonts list to the fallbacks when
             * outputting to scss.
             */
            appendSystemFontsToFallbacks?: boolean | "monospace";
            /**
             * A multiplier for the content/page widths when this font is
             * applied as an override.
             */
            contentWidthScale?: number;
            /**
             * Whether this should be an override option in website settings.
             */
            fontOverrideOption?: boolean;
            /**
             * A multiplier for the line height when this font is applied as an
             * override.
             */
            lineHeightScale?: number;
            /**
             * Whether to include font-face declarations in the css.
             *
             * @default true
             */
            printFontFace?: boolean;
            weights: {
                [K in TokenLevels]?: {
                    normal: File;
                    italic: File;
                };
            };
            variable?: {
                normal: File;
                italic: File;
            };
        }
    }
    export {};
}
//# sourceMappingURL=Tokens_Typography.d.ts.map