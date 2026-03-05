/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { RecursivePartial } from '@maddimathon/utility-typescript/types';
import type { AnyTokenLevel, RequiredHeadingLevels, TokenTypes, WholeTokenLevel } from '../@types.js';
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
    static alertStyle(partial?: Tokens_CSS_Style.InputParam['alert']): Tokens_CSS_Style.AlertStyles;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Added partial param.
     */
    static buttonStyle(partial?: Tokens_CSS_Style.InputParam['button']): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    };
    /**
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Added partial param.
     */
    static headingStyle(heading: number, partial?: NonNullable<Tokens_CSS_Style.InputParam['heading']>[number]): Tokens_CSS_Style.HeadingStyles;
    /**
     * @since 0.1.1-alpha.0
     * @since 0.1.1-alpha.1.draft — Added partial param.
     */
    static inputStyle(partial?: Tokens_CSS_Style.InputParam['input']): {
        readonly $: Tokens_CSS_Style.InputStyles;
        readonly disabled: Tokens_CSS_Style.InputStyles_Variation;
        readonly readonly: Tokens_CSS_Style.InputStyles_Variation;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    static widgetStyle(partial?: Tokens_CSS_Style.InputParam['widget']): Tokens_CSS_Style.WidgetStyles;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    protected static mergeData(partial: Tokens_CSS_Style.InputParam): {
        alert: Tokens_CSS_Style.AlertStyles;
        button: {
            $: Tokens_CSS_Style.ButtonStyles;
            disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
        };
        heading: {
            2: Tokens_CSS_Style.HeadingStyles;
            1: Tokens_CSS_Style.HeadingStyles;
            3: Tokens_CSS_Style.HeadingStyles;
            4: Tokens_CSS_Style.HeadingStyles;
            7: Tokens_CSS_Style.HeadingStyles;
            10: Tokens_CSS_Style.HeadingStyles;
            5: Tokens_CSS_Style.HeadingStyles;
            6: Tokens_CSS_Style.HeadingStyles;
            8: Tokens_CSS_Style.HeadingStyles;
            9: Tokens_CSS_Style.HeadingStyles;
        };
        input: {
            readonly $: Tokens_CSS_Style.InputStyles;
            readonly disabled: Tokens_CSS_Style.InputStyles_Variation;
            readonly readonly: Tokens_CSS_Style.InputStyles_Variation;
        };
        margin: {
            /**
             * Default values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        } | ({
            /**
             * Default values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        } & RecursivePartial<{
            /**
             * Default values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        }>);
        selection: {
            background: {
                opacity: {
                    low: string;
                    average: string;
                    high: string;
                };
            };
        };
        widget: Tokens_CSS_Style.WidgetStyles;
    };
    static get default(): {
        alert: Tokens_CSS_Style.AlertStyles;
        button: {
            $: Tokens_CSS_Style.ButtonStyles;
            disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
        };
        heading: {
            2: Tokens_CSS_Style.HeadingStyles;
            1: Tokens_CSS_Style.HeadingStyles;
            3: Tokens_CSS_Style.HeadingStyles;
            4: Tokens_CSS_Style.HeadingStyles;
            7: Tokens_CSS_Style.HeadingStyles;
            10: Tokens_CSS_Style.HeadingStyles;
            5: Tokens_CSS_Style.HeadingStyles;
            6: Tokens_CSS_Style.HeadingStyles;
            8: Tokens_CSS_Style.HeadingStyles;
            9: Tokens_CSS_Style.HeadingStyles;
        };
        input: {
            readonly $: Tokens_CSS_Style.InputStyles;
            readonly disabled: Tokens_CSS_Style.InputStyles_Variation;
            readonly readonly: Tokens_CSS_Style.InputStyles_Variation;
        };
        margin: {
            flow: {
                $: "400";
                large: "600";
                small: "300";
            };
        };
        selection: {
            background: {
                opacity: {
                    low: string;
                    average: string;
                    high: string;
                };
            };
        };
        widget: Tokens_CSS_Style.WidgetStyles;
    };
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
    type AlertStyles = {
        /**
         * This should be a theme slug.
         */
        background: string;
        border: {
            /**
             * This should be a theme slug.
             */
            color: string;
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };
        /**
         * For the headline. This should be a theme slug.
         */
        color: string;
        gap: {
            block: "0" | AnyTokenLevel;
            inline: "0" | AnyTokenLevel;
        };
        headline: {
            font: {
                /**
                 * Should be a font-size token slug.
                 */
                size: string;
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };
            'line-height': AnyTokenLevel;
        };
        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
            /**
             * In ems.
             */
            size: {
                $: number;
                large: number;
            };
        };
        'line-height': AnyTokenLevel;
        margin: {
            /**
             * Values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        };
        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };
    type ButtonStyles = {
        border: {
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };
        focus: {
            offset: AnyTokenLevel;
        };
        font: {
            /**
             * Should be a font-size token slug.
             *
             * @since 0.1.1-alpha.1.draft
             */
            size: string;
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };
        gap: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
        'letter-spacing': string;
        'line-height': AnyTokenLevel;
        'text-transform': CSS.TextTransform;
        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;
            };
        };
        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
        width: string;
    };
    type ButtonStyles_Disabled = Omit<ButtonStyles, 'border' | 'focus' | 'font' | 'gap' | 'line-height' | 'margin' | 'padding' | 'width'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
        font: Omit<ButtonStyles['font'], 'size'>;
        'letter-spacing': string;
        'text-transform': CSS.TextTransform;
    };
    /**
     * CSS allowed value types.
     *
     * @since 0.1.0-alpha
     */
    namespace CSS {
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }
    type HeadingStyles = {
        font: {
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };
        'letter-spacing': string;
        'line-height': AnyTokenLevel;
        'text-transform': CSS.TextTransform;
        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;
            };
        };
    };
    /**
     * @since 0.1.1-alpha.0
     */
    type InputStyles = {
        border: {
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };
        focus: {
            offset: AnyTokenLevel;
        };
        label: {
            font: {
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };
            'line-height': AnyTokenLevel;
        };
        'line-height': AnyTokenLevel;
        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;
                /**
                 * This is the gap between a label and its input.
                 */
                gap: AnyTokenLevel;
            };
        };
        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        placeholder: {
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
    type InputStyles_Variation = Omit<InputStyles, 'border' | 'focus' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'> & {
        border: Omit<InputStyles['border'], 'width'>;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type WidgetStyles = {
        border: {
            /**
             * This should be a theme slug.
             */
            color: string;
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };
        /**
         * For interior button spans.
         */
        'button-span': {
            gap: AnyTokenLevel;
        };
        'line-height': AnyTokenLevel;
        margin: {
            /**
             * Values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        };
        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type Data = {
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
         * @since 0.1.1-alpha.1.draft
         */
        margin: {
            /**
             * Default values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
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
        /**
         * @since 0.1.1-alpha.1.draft
         */
        widget: WidgetStyles;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam = {
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
         * @since 0.1.1-alpha.1.draft
         */
        margin?: RecursivePartial<Data['margin']>;
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
        /**
         * @since 0.1.1-alpha.1.draft
         */
        widget?: RecursivePartial<WidgetStyles>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn = Data;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars = Data;
}
