/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects';
import type { RequiredHeadingLevels, TokenTypes, TokenLevels } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS_Style extends AbstractTokens<{
    data: Tokens_CSS_Style.Data;
    json: Tokens_CSS_Style.JsonReturn;
    scss: Tokens_CSS_Style.ScssVars;
}> {
    /**
     * @since 0.1.1-alpha.1.draft
     */
    static alertStyle(): Tokens_CSS_Style.AlertStyles;
    static buttonStyle(): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    };
    static headingStyle(heading: number): Tokens_CSS_Style.HeadingStyles;
    /**
     * @since 0.1.1-alpha.0
     */
    static inputStyle(): {
        readonly $: Tokens_CSS_Style.InputStyles;
        readonly disabled: Tokens_CSS_Style.InputStyles_Variation;
        readonly readonly: Tokens_CSS_Style.InputStyles_Variation;
    };
    static get default(): Tokens_CSS_Style.Data;
    readonly data: Tokens_CSS_Style.Data;
    constructor(input: Tokens_CSS_Style.InputParam);
    toJSON(): Tokens_CSS_Style.JsonReturn;
    toScssVars(): Tokens_CSS_Style.ScssVars;
}
/**
 * Utilities for the {@link Tokens_CSS_Style} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS_Style {
    /**
     * @since 0.1.1-alpha.1.draft
     */
    export type AlertStyles = {
        /**
         * This should be a theme slug.
         */
        background: string;
        border: {
            /**
             * This should be a theme slug.
             */
            color: string;
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };
        /**
         * For the headline. This should be a theme slug.
         */
        color: string;
        gap: {
            block: "0" | TokenLevels;
            inline: "0" | TokenLevels;
        };
        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
            /**
             * In ems.
             */
            size: number;
        };
        'line-height': TokenLevels;
        margin: {
            default: TokenLevels;
        };
        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };
    };
    export type ButtonStyles = {
        border: {
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };
        focus: {
            offset: TokenLevels;
        };
        font: {
            style: "normal" | "italic";
            weight: TokenLevels;
        };
        gap: {
            block: TokenLevels;
            inline: TokenLevels;
        };
        'letter-spacing': string;
        'line-height': TokenLevels;
        'text-transform': CSS.TextTransform;
        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;
            };
        };
        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };
        width: string;
    };
    export type ButtonStyles_Disabled = Omit<ButtonStyles, 'border' | 'focus' | 'gap' | 'line-height' | 'margin' | 'padding' | 'width'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
        'letter-spacing': string;
        'text-transform': CSS.TextTransform;
    };
    export type HeadingStyles = {
        font: {
            style: "normal" | "italic";
            weight: TokenLevels;
        };
        'letter-spacing': string;
        'line-height': TokenLevels;
        'text-transform': CSS.TextTransform;
        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;
            };
        };
    };
    /**
     * @since 0.1.1-alpha.0
     */
    export type InputStyles = {
        /**
         * This should be a theme slug.
         *
         * @since 0.1.1-alpha.1.draft
         */
        accent: InteractiveStyles<string>;
        /**
         * This should be a theme slug.
         *
         * @since 0.1.1-alpha.1.draft
         */
        background: string;
        border: {
            /**
             * This should be a theme slug.
             */
            color: InteractiveStyles<string>;
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };
        /**
         * This should be a theme slug.
         *
         * @since 0.1.1-alpha.1.draft
         */
        color: string;
        focus: {
            offset: TokenLevels;
        };
        label: {
            font: {
                style: "normal" | "italic";
                weight: TokenLevels;
            };
            'line-height': TokenLevels;
        };
        'line-height': TokenLevels;
        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;
                /**
                 * This is the gap between a label and its input.
                 */
                gap: TokenLevels;
            };
        };
        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        placeholder: {
            /**
             * This should be a theme slug.
             */
            color: string;
            font: {
                style: "normal" | "italic";
            };
            opacity: {
                [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'high' | 'max'>]?: string;
            };
        };
    };
    /**
     * @since 0.1.1-alpha.0
     * @since 0.1.1-alpha.1.draft — Renamed from InputStyles_Disabled to InputStyles_Variation.
     */
    export type InputStyles_Variation = Omit<InputStyles, 'border' | 'focus' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'> & {
        border: Omit<InputStyles['border'], 'width'>;
    };
    type InteractiveStyles<T_StyleValue> = {
        [S in "$" | "hover" | "active"]: T_StyleValue;
    };
    /**
     * CSS allowed value types.
     *
     * @since 0.1.0-alpha
     */
    export namespace CSS {
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }
    /**
     * @since 0.1.0-alpha
     */
    export type Data = {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        alert: AlertStyles;
        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
        };
        heading: {
            [L in RequiredHeadingLevels]: HeadingStyles;
        } & {
            [key: number]: HeadingStyles;
        };
        /**
         * @since 0.1.1-alpha.0
         */
        input: {
            $: InputStyles;
            disabled: InputStyles_Variation;
            readonly: InputStyles_Variation;
        };
        /**
         * @since 0.1.1-alpha.1.draft — Restructured object nesting.
         */
        selection: {
            background?: {
                opacity?: {
                    [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'>]?: string;
                };
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        alert?: RecursivePartial<AlertStyles>;
        button?: {
            $?: RecursivePartial<ButtonStyles>;
            disabled?: RecursivePartial<ButtonStyles_Disabled>;
        };
        heading?: {
            [L in RequiredHeadingLevels]?: RecursivePartial<HeadingStyles>;
        } & {
            [key: number]: RecursivePartial<HeadingStyles>;
        };
        input?: {
            $?: RecursivePartial<InputStyles>;
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };
        /**
         * @since 0.1.1-alpha.1.draft — Restructured object nesting.
         */
        selection?: {
            background?: {
                opacity?: {
                    [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'>]?: string;
                };
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    export type ScssVars = Data;
    export {};
}
