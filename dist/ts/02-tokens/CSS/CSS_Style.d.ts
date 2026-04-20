/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
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
    readonly data: Tokens_CSS_Style.Data;
    /**
     * Builds style tokens faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static build(partial?: Tokens_CSS_Style.InputParam): Promise<Tokens_CSS_Style>;
    /**
     * Builds style tokens data faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static buildData(partial?: Tokens_CSS_Style.InputParam): Promise<Tokens_CSS_Style.Data>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static alertStyle(iconStyles: Tokens_CSS_Style.IconStyles, partial?: Tokens_CSS_Style.InputParam['alert']): Promise<Tokens_CSS_Style.AlertStyles>;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static buttonStyle(iconStyles: Tokens_CSS_Style.IconStyles, partial?: Tokens_CSS_Style.InputParam['button']): Promise<{
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
        inline: Tokens_CSS_Style.ButtonStyles_Inline;
    }>;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static headingStyle<T_Key extends keyof Tokens_CSS_Style.Data['heading']>(heading: T_Key, partial?: NonNullable<Tokens_CSS_Style.InputParam['heading']>[T_Key]): Promise<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static iconStyle(partial?: Tokens_CSS_Style.InputParam['icon']): Promise<Tokens_CSS_Style.IconStyles>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static inputStyle(partial?: Tokens_CSS_Style.InputParam['input']): Promise<Tokens_CSS_Style.Data['input']>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static subtitleStyle(headingStyles: Tokens_CSS_Style.Data['heading'], partial: Tokens_CSS_Style.InputParam['subtitle']): Promise<Tokens_CSS_Style.SubtitleStyles>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static toggleStyle(iconStyles: Tokens_CSS_Style.IconStyles, widgetStyles: Tokens_CSS_Style.WidgetStyles, partial?: Tokens_CSS_Style.InputParam['toggle']): Promise<Tokens_CSS_Style.ToggleStyles>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static widgetStyle(partial?: Tokens_CSS_Style.InputParam['widget']): Promise<Tokens_CSS_Style.WidgetStyles>;
    static get default(): Promise<Tokens_CSS_Style.Data>;
    protected constructor(data: Tokens_CSS_Style.Data);
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
     * @since 0.1.0-beta.0.draft
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
        heading: {
            [H in RequiredHeadingLevels | 'unstyled']: AlertStyles_Heading;
        } & {
            [key: number]: AlertStyles_Heading;
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
            /**
             * Value for the first item after an icon (to be in em). Gets
             * overruled if that item is a heading.
             */
            margin: {
                block: {
                    start: number;
                };
            };
        };
        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
            /**
             * With units.
             */
            size: Omit<IconStyles['size'], 'font' | 'pseudo'>;
        };
        'line-height': AnyTokenLevel;
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin & {
            self: 'margins-flow-firm' | 'margins-flow-firm-large' | 'margins-flow-firm-small';
        };
        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type AlertStyles_Heading = {
        /**
         * Values for the inner heading after an icon (to be in em).
         */
        margin: {
            block: {
                start: number;
                end: number;
            };
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ButtonStyles = {
        border: {
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };
        display: "block" | "flex";
        focus: {
            offset: AnyTokenLevel;
        };
        font: {
            /**
             * Should be a font-size token slug.
             */
            size: string;
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };
        gap: {
            block: "0" | AnyTokenLevel;
            inline: "0" | AnyTokenLevel;
        };
        icon: Pick<IconStyles, 'font' | 'pseudo' | 'vertical-align'> & {
            buffer: {
                start: number;
                end: number;
            };
            embedded: {
                /**
                 * With units.
                 */
                bottom: string;
            };
            /**
             * With units.
             */
            size: Omit<IconStyles['size'], '$' | 'large'>;
        };
        'letter-spacing': string;
        'line-height': AnyTokenLevel;
        margin: {
            block: {
                start: "0" | AnyTokenLevel;
                end: "0" | AnyTokenLevel;
            };
        };
        padding: {
            block: "0" | AnyTokenLevel;
            inline: "0" | AnyTokenLevel;
        };
        'text-transform': CSS.TextTransform;
        width: string;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ButtonStyles_Disabled = Omit<ButtonStyles, 'border' | 'display' | 'focus' | 'font' | 'gap' | 'icon' | 'line-height' | 'margin' | 'padding' | 'width'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
        font: Omit<ButtonStyles['font'], 'size'>;
    };
    /**
     * Inline buttons are buttons meant to be inline with text (rather than in
     * its own line(s)).
     *
     * @since 0.1.0-beta.0.draft
     */
    type ButtonStyles_Inline = Omit<ButtonStyles, 'border' | 'display' | 'margin'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
    };
    /**
     * CSS allowed value types.
     *
     * @since 0.1.0-alpha
     */
    namespace CSS {
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }
    /**
     * The flow margins to be included in various other styles for the
     * set-flow-margins mixin.
     */
    type FlowMargin = {
        $: AnyTokenLevel;
        large: AnyTokenLevel;
        small: AnyTokenLevel;
        /**
         * Gap for button spans.
         */
        button: AnyTokenLevel;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
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
                start: "0" | AnyTokenLevel;
                end: "0" | AnyTokenLevel;
            };
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type HeadingStyles_Generic<T_Key extends keyof Tokens_CSS_Style.Data['heading']> = "unstyled" extends T_Key ? HeadingStyles_Unstyled : HeadingStyles;
    /**
     * @since 0.1.0-beta.0.draft
     */
    type HeadingStyles_Unstyled = Omit<HeadingStyles, 'margin'> & {
        /**
         * This should be a theme slug.
         */
        color: string;
        font: HeadingStyles['font'] & {
            /**
             * This should be a font family slug.
             */
            family: string;
            /**
             * This should be a font size slug.
             */
            size: string;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type IconStyles = {
        /**
         * This should be a theme slug.
         */
        color: string;
        font: {
            top: `${number}em`;
        };
        inline: {
            buffer: {
                $: string;
                start: number;
                end: number;
            };
            'line-height': number | `${number}em` | 'normal';
        };
        pseudo: {
            top: `${number}em`;
        };
        size: {
            $: string;
            large: string;
            /**
             * For inline icons using the icon font.
             */
            font: string;
            /**
             * For inline icons in before/after pseudo classes.
             */
            pseudo: string;
        };
        'vertical-align': string;
    };
    /**
     * @since 0.1.0-beta.0.draft
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
        /**
         * Used for input fields with the icon font family utility class.
         */
        icons: {
            'letter-spacing': string;
            offset: {
                block: {
                    start: `${number}em`;
                    end: `${number}em`;
                };
            };
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
         * @since 0.1.0-beta.0.draft
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
     * @since 0.1.0-beta.0.draft
     */
    type InputStyles_Variation = Omit<InputStyles, 'border' | 'focus' | 'icons' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'> & {
        border: Omit<InputStyles['border'], 'width'>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type SubtitleStyles = Omit<HeadingStyles_Unstyled, 'font'> & {
        font: Omit<HeadingStyles_Unstyled['font'], 'family'>;
        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
        };
        margin: HeadingStyles['margin'];
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ToggleStyles = {
        /**
         * For the toggle content.
         */
        content: {
            /**
             * This should be a theme slug.
             */
            background: string;
            border: {
                radius: {
                    $: '0' | AnyTokenLevel;
                    top: '0' | AnyTokenLevel;
                };
                style: {
                    $: "dotted" | "solid";
                    top: "dotted" | "solid";
                };
                width: AnyTokenLevel;
            };
            'line-height': AnyTokenLevel;
            padding: {
                block: AnyTokenLevel;
                inline: AnyTokenLevel;
            };
        };
        /**
         * For the toggle control.
         */
        control: {
            $: {
                padding: {
                    block: {
                        end: '0' | AnyTokenLevel;
                    };
                };
            };
            heading: {
                [H in RequiredHeadingLevels]: ToggleStyles_ControlHeading;
            } & {
                [key: number]: ToggleStyles_ControlHeading;
            };
        };
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin & {
            self: 'margins-flow-firm' | 'margins-flow-firm-large' | 'margins-flow-firm-small';
        };
        icon: Pick<IconStyles, 'vertical-align'> & {
            /**
             * With units.
             */
            buffer: {
                start: string;
                end: string;
            };
            /**
             * With units.
             */
            size: IconStyles['size']['$'];
        };
        /**
         * For the ToggleNavMenu astro component and
         * snippet-support-astro-toggle-nav-menu mixin.
         */
        nav: {
            /**
             * For the toggle content.
             */
            content: {
                /**
                 * This should be a theme slug.
                 */
                background: string;
                border: {
                    width: AnyTokenLevel;
                };
            };
            title: {
                /**
                 * This should be a theme slug.
                 */
                background: string;
            };
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ToggleStyles_ControlHeading = {
        padding: {
            block: {
                end: '0' | AnyTokenLevel;
            };
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type WidgetStyles = {
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
        'line-height': AnyTokenLevel;
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin;
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
         * @since 0.1.0-beta.0.draft
         */
        alert: AlertStyles;
        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
            inline: ButtonStyles_Inline;
        };
        heading: {
            unstyled: HeadingStyles_Unstyled;
        } & {
            [L in RequiredHeadingLevels]: HeadingStyles;
        } & {
            [key: number]: HeadingStyles;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        icon: IconStyles;
        /**
         * @since 0.1.0-beta.0.draft
         */
        input: {
            $: InputStyles;
            file: Pick<InputStyles, 'padding'>;
            disabled: InputStyles_Variation;
            readonly: InputStyles_Variation;
        };
        /**
         * Default values for the set-flow-margins mixin.
         *
         * @since 0.1.0-beta.0.draft
         */
        'flow-margin': FlowMargin;
        /**
         * Toggle block styles.
         *
         * @since 0.1.0-beta.0.draft
         */
        toggle: ToggleStyles;
        /**
         * @since 0.1.0-beta.0.draft — Restructured object nesting.
         */
        selection: {
            background?: {
                opacity?: {
                    [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'>]?: string;
                };
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        subtitle: SubtitleStyles;
        /**
         * @since 0.1.0-beta.0.draft
         */
        widget: WidgetStyles;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam = {
        /**
         * @since 0.1.0-beta.0.draft
         */
        alert?: Omit<RecursivePartial<AlertStyles>, 'heading'> & {
            heading?: undefined | ({
                [H in RequiredHeadingLevels | 'unstyled']?: undefined | Partial<AlertStyles_Heading>;
            } & {
                [key: number]: undefined | Partial<AlertStyles_Heading>;
            });
        };
        button?: {
            $?: RecursivePartial<ButtonStyles>;
            disabled?: RecursivePartial<ButtonStyles_Disabled>;
            inline?: RecursivePartial<ButtonStyles_Inline>;
        };
        heading?: {
            unstyled?: RecursivePartial<HeadingStyles_Unstyled>;
        } & {
            [L in RequiredHeadingLevels]?: RecursivePartial<HeadingStyles>;
        } & {
            [key: number]: RecursivePartial<HeadingStyles>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        icon?: RecursivePartial<IconStyles>;
        input?: {
            $?: RecursivePartial<InputStyles>;
            file?: RecursivePartial<Pick<InputStyles, 'padding'>>;
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        'flow-margin'?: RecursivePartial<Data['flow-margin']>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        toggle?: RecursivePartial<ToggleStyles>;
        /**
         * @since 0.1.0-beta.0.draft — Restructured object nesting.
         */
        selection?: {
            background?: {
                opacity?: {
                    [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'>]?: string;
                };
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        subtitle?: RecursivePartial<SubtitleStyles>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        widget?: RecursivePartial<WidgetStyles>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn = Data;
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars = Data;
}
