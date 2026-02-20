/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
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
export declare class Tokens_Typography<T_FontFamilySlug extends string> extends AbstractTokens<{
    data: Tokens_Typography.Data<T_FontFamilySlug>;
    json: Tokens_Typography.JsonReturn<T_FontFamilySlug>;
    scss: Tokens_Typography.ScssVars<T_FontFamilySlug>;
}> {
    protected readonly spacing: Tokens_Spacing;
    static get default(): Tokens_Typography.Data<never>;
    readonly data: Tokens_Typography.Data<T_FontFamilySlug>;
    readonly familyOverrides: undefined | {
        [K in T_FontFamilySlug]?: Tokens_Typography.Font.FamilyOverride;
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
    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";
    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_FontFamilySlug extends string, T_SizeValue = number> = {
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
    export type InputParam<T_FontFamilySlug extends string, T_SizeValue = number> = Partial<Omit<Data<T_FontFamilySlug, T_SizeValue>, 'lineHeight' | 'size'>> & {
        lineHeight?: Partial<Data<T_FontFamilySlug, T_SizeValue>['lineHeight']>;
        size?: Objects.RecursivePartial<Data<T_FontFamilySlug, T_SizeValue>['size']>;
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
     * @since 0.1.1-alpha.1.draft
     */
    export type ScssVars<T_FontFamilySlug extends string> = {
        font: {
            family: undefined | {
                [K in T_FontFamilySlug]?: {
                    weights: {
                        [K in TokenLevels]?: undefined | {
                            normal: undefined | Tokens_Typography.Font.SingleFamilyScss;
                            italic: undefined | Tokens_Typography.Font.SingleFamilyScss;
                        };
                    };
                    variable?: undefined | {
                        normal: undefined | Tokens_Typography.Font.SingleFamilyScss;
                        italic: undefined | Tokens_Typography.Font.SingleFamilyScss;
                    };
                };
            } & AbstractTokens.ScssReturn;
            familyOverrides: undefined | {
                [K in T_FontFamilySlug]?: undefined | Tokens_Typography.Font.FamilyOverride;
            };
            size: Tokens_Typography.Data<T_FontFamilySlug, number>['size'];
            sizeScale: Tokens_Typography.Data<T_FontFamilySlug, number>['sizeScale'];
        };
        line_height: Tokens_Typography.Data<T_FontFamilySlug, number>['lineHeight'];
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
        type FontFileOptions = {
            display?: undefined | "auto" | "block" | "fallback" | "optional" | "swap";
            lineGapOverride?: undefined | string;
            sizeAdjust?: undefined | string;
            unicodeRange?: undefined | string;
        };
        /**
         * @since 0.1.0-alpha
         */
        type File = FontFileOptions & {
            path: {
                [F in "local" | "ttf" | "woff" | "woff2"]?: string | string[];
            };
            style: "normal" | "italic";
            weight: TokenLevels | `${'000' | TokenLevels} ${TokenLevels | '1000'}`;
        };
        /**
         * @since 0.1.1-alpha.0
         */
        type FamilyOverride = {
            label: string;
            value: string;
            contentWidthScale?: number;
            labelClass?: string;
            lineHeightScale?: number;
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        type SingleFamilyScss = {
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
        /**
         * @since 0.1.0-alpha
         */
        type FamilyScss = {
            [L in TokenLevels | `${TokenLevels}i`]?: SingleFamilyScss;
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
        };
    }
    export {};
}
