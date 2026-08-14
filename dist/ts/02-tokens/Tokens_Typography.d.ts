/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { Classify, RecursivePartial } from '@maddimathon/utility-typescript/types';
import type { RecursiveRecord } from '../01-utilities/@types.js';
import type { AnyTokenLevel, RequiredHeadingLevels, WholeTokenLevel } from './@types.js';
import type { Tokens_Spacing } from './Tokens_Spacing.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Typography<T_FontFamilySlug extends string> extends AbstractTokens<{
    data: Tokens_Typography.Data<T_FontFamilySlug>;
    json: Tokens_Typography.JsonReturn<T_FontFamilySlug>;
    scss: Tokens_Typography.ScssVars<T_FontFamilySlug>;
}> {
    protected readonly spacing: Tokens_Spacing;
    static get default(): Omit<Tokens_Typography.Data<never>, 'sizeMultiplier'>;
    readonly data: Tokens_Typography.Data<T_FontFamilySlug>;
    readonly familyOverrides: undefined | {
        [F in Tokens_Typography.DefaultFontFamilies]?: undefined | Tokens_Typography.Font.FamilyOverride;
    } & {
        [F in T_FontFamilySlug]?: Tokens_Typography.Font.FamilyOverride;
    };
    constructor(spacing: Tokens_Spacing, input: Tokens_Typography.InputParam<T_FontFamilySlug>);
    toJSON(): Tokens_Typography.JsonReturn<T_FontFamilySlug>;
    toScssVars(): Tokens_Typography.ScssVars<T_FontFamilySlug>;
}
/**
 * Utilities for the {@link Tokens_Typography} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Typography {
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type DefaultFontFamilies = "icons";
    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";
    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_FontFamilySlug extends string, T_SizeValue = number> = {
        lineHeight: {
            [L in DefaultLineHeightLevels]: number;
        } & {
            [L in Exclude<AnyTokenLevel, DefaultLineHeightLevels>]?: number;
        };
        fonts: {
            [F in DefaultFontFamilies]?: undefined | Font.Family<F>;
        } & {
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
                [key: number]: T_SizeValue;
            };
            normal: T_SizeValue;
            bigger: {
                [key: number]: T_SizeValue;
            };
            [key: string]: T_SizeValue | RecursiveRecord<number | string, T_SizeValue>;
        };
        /**
         * @since 0.1.0-beta.0.draft — Renamed from sizeScale to sizeBase.
         */
        sizeBase: number;
        /**
         * To overrule the value in spacing tokens, optionally.
         *
         * @since 0.1.0-beta.0.draft
         */
        sizeMultiplier: number;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_FontFamilySlug extends string, T_SizeValue = number> = Partial<Omit<Data<T_FontFamilySlug, T_SizeValue>, 'fonts' | 'lineHeight' | 'size'>> & {
        fonts?: {
            [F in DefaultFontFamilies]?: undefined | false | Font.Family<F>;
        } & {
            [F in T_FontFamilySlug]?: undefined | Font.Family<F>;
        };
        lineHeight?: Partial<Data<T_FontFamilySlug, T_SizeValue>['lineHeight']>;
        size?: RecursivePartial<Data<T_FontFamilySlug, T_SizeValue>['size']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_FontFamilySlug extends string, T_SizeValue = {
        rem: number;
        pt: number;
        px: number;
    }> = Data<T_FontFamilySlug, T_SizeValue> & {
        familyOverrides: {
            [K in T_FontFamilySlug]?: undefined | Tokens_Typography.Font.FamilyOverride;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type ScssVars<T_FontFamilySlug extends string> = {
        font: {
            family?: undefined | {
                [F in T_FontFamilySlug]?: undefined | ScssVars.Family;
            };
            familyOverrides: undefined | {
                [K in T_FontFamilySlug]?: undefined | Tokens_Typography.Font.FamilyOverride;
            };
            size: Tokens_Typography.Data<T_FontFamilySlug, number>['size'];
            size_base: Tokens_Typography.Data<T_FontFamilySlug, number>['sizeBase'];
            size_multiplier: Tokens_Typography.Data<T_FontFamilySlug, number>['sizeMultiplier'];
        };
        line_height: Tokens_Typography.Data<T_FontFamilySlug, number>['lineHeight'];
    };
    export namespace ScssVars {
        type Family = Pick<Tokens_Typography.Font.Family, 'contentWidthScale' | 'css' | 'lineHeightScale'> & {
            weights: {
                [K in WholeTokenLevel]?: undefined | {
                    normal: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                    italic: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                };
            };
            variable?: undefined | {
                normal: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                italic: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
            };
        };
    }
    /**
     * @since 0.1.0-alpha
     */
    export namespace Font {
        /**
         * @since 0.1.0-alpha
         */
        const SystemMonospace: readonly ["Menlo", "Consolas", "Monaco", "Liberation Mono", "Lucida Console", "monospace", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"];
        /**
         * @since 0.1.0-alpha
         */
        const SystemUI: readonly ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"];
        /**
         * @since 0.1.0-alpha
         */
        type FontFileOptions = {
            /**
             * {@inheritDoc SingleFamilyScss['display']}
             */
            display?: undefined | SingleFamilyScss['display'];
            /**
             * {@inheritDoc SingleFamilyScss['line-gap-override']}
             */
            lineGapOverride?: undefined | SingleFamilyScss['line-gap-override'];
            /**
             * {@inheritDoc SingleFamilyScss['size-adjust']}
             */
            sizeAdjust?: undefined | SingleFamilyScss['size-adjust'];
            /**
             * {@inheritDoc SingleFamilyScss['unicode-range']}
             */
            unicodeRange?: undefined | SingleFamilyScss['unicode-range'];
        };
        /**
         * @since 0.1.0-alpha
         */
        type File = FontFileOptions & {
            path: {
                [F in "local" | "ttf" | "woff" | "woff2"]?: undefined | string | string[];
            };
            style: "normal" | "italic";
            weight: WholeTokenLevel | `${'000' | WholeTokenLevel} ${WholeTokenLevel | '1000'}`;
        };
        /**
         * Used to alter various size and alignment tokens in css, typically
         * when a font override is active (e.g., from the settings menu).
         *
         * @since 0.1.0-beta.0.draft
         */
        type FamilyOverride = {
            label: string;
            value: string;
            /**
             * A factor to alter the width values for this font.
             */
            contentWidthScale?: number;
            /**
             * A utility class value to set this font as font-family in css.
             */
            labelClass?: string;
            /**
             * A factor to alter the line height values for this font.
             */
            lineHeightScale?: number;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type SingleFamilyScss = {
            family: string;
            fallbacks: string[];
            src: {
                type: "local" | "truetype" | "woff" | "woff2";
                path: string;
            }[];
            /**
             * This should be the full URL value e.g., `url(data:font/woff;base64,)`
             */
            base64: undefined | string;
            style: "normal" | "italic";
            weight: WholeTokenLevel | `${'000' | WholeTokenLevel} ${WholeTokenLevel | '1000'}`;
            printFontFace: boolean;
            /**
             * CSS \@font-face 'font-display' setting.
             *
             * “Determines how a font face is displayed based on whether and
             * when it is downloaded and ready to use.”
             *
             * @see
             * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display}
             */
            display?: "auto" | "block" | "fallback" | "optional" | "swap";
            /**
             * CSS \@font-face setting.
             *
             * “Defines the line gap metric for the font.”
             *
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/line-gap-override}
             */
            'line-gap-override'?: "normal" | `${number}%`;
            /**
             * CSS \@font-face setting.
             *
             * “Defines a multiplier for glyph outlines and metrics associated
             * with this font. This makes it easier to harmonize the designs of
             * various fonts when rendered at the same font size.”
             *
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust}
             */
            'size-adjust'?: `${number}%`;
            /**
             * CSS \@font-face setting.
             *
             * “The range of Unicode code points to be used from the font.”
             *
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range}
             */
            'unicode-range'?: string;
        };
        /**
         * @since 0.1.0-alpha
         */
        type FamilyScss = {
            [L in WholeTokenLevel | `${WholeTokenLevel}i`]?: Classify<SingleFamilyScss>;
        };
        /**
         * @since 0.1.0-alpha
         */
        type Family<T_Slug extends string = string> = FontFileOptions & {
            slug: T_Slug;
            name: string;
            fallbacks?: string[];
            /**
             * Whether to append the system fonts list to the fallbacks when
             * outputting to scss.
             */
            appendSystemFontsToFallbacks?: boolean | "monospace";
            /**
             * Values to use in the css.
             */
            css?: undefined | RecursivePartial<{
                icon: {
                    inline: {
                        buffer: {
                            start: number;
                            end: number;
                        };
                    };
                    size: {
                        $: number;
                        inline: number;
                    };
                };
                /**
                 * Will be used as a multiplier.
                 */
                letterSpacing: number;
            }>;
            /**
             * A multiplier for the content/page widths when this font is
             * applied as an override.
             */
            contentWidthScale?: undefined | number;
            /**
             * Whether this should be an override option in website settings.
             */
            fontOverrideOption?: boolean;
            /**
             * A multiplier for the line height when this font is applied as an
             * override.
             */
            lineHeightScale?: undefined | number;
            /**
             * Whether to include font-face declarations in the css.
             *
             * @default true
             */
            printFontFace?: boolean;
            weights: {
                [K in WholeTokenLevel]?: {
                    normal: File;
                    italic: File;
                };
            };
            variable?: {
                normal: File;
                italic: File;
            };
        };
    }
    export {};
}
