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
export declare class Tokens_CSS_Style<T_Params extends TokenTypes.Style.TypeParams> extends AbstractTokens<{
    data: Tokens_CSS_Style.Data<T_Params>;
    json: Tokens_CSS_Style.JsonReturn<T_Params>;
    scss: Tokens_CSS_Style.ScssVars<T_Params>;
}> {
    readonly data: Tokens_CSS_Style.Data<T_Params>;
    /**
     * Builds style tokens faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static build<T_Params extends TokenTypes.Style.TypeParams>(partial?: Tokens_CSS_Style.InputParam<T_Params>): Promise<Tokens_CSS_Style<T_Params>>;
    /**
     * Builds style tokens data faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static buildData<T_Params extends TokenTypes.Style.TypeParams>(partial?: Tokens_CSS_Style.InputParam<T_Params>): Promise<Tokens_CSS_Style.Data<T_Params>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static alertStyle<T_Params extends TokenTypes.Style.TypeParams>(iconStyles: Tokens_CSS_Style.IconStyles<never>, partial?: Tokens_CSS_Style.InputParam<T_Params>['alert']): Promise<Tokens_CSS_Style.AlertStyles>;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static buttonStyle<T_Params extends TokenTypes.Style.TypeParams>(iconStyles: Tokens_CSS_Style.IconStyles<never>, partial?: Tokens_CSS_Style.InputParam<T_Params>['button']): Promise<{
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
        inline: Tokens_CSS_Style.ButtonStyles_Inline;
    }>;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static headingStyle<T_Params extends TokenTypes.Style.TypeParams, T_Key extends keyof Tokens_CSS_Style.Data<T_Params>['heading']>(heading: T_Key, partial?: RecursivePartial<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>>): Promise<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static subheadingStyle<T_Params extends TokenTypes.Style.TypeParams, T_Key extends keyof Tokens_CSS_Style.Data<T_Params>['subheading']>(subheading: T_Key, headingStyles: Tokens_CSS_Style.Data<T_Params>['heading'], partial?: RecursivePartial<Tokens_CSS_Style.SubheadingStyles>): Promise<RecursivePartial<Tokens_CSS_Style.SubheadingStyles>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static iconStyle<T_Params extends TokenTypes.Style.TypeParams>(partial?: Tokens_CSS_Style.InputParam<T_Params>['icon']): Promise<Tokens_CSS_Style.IconStyles<T_Params>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static inputStyle<T_Params extends TokenTypes.Style.TypeParams>(partial?: Tokens_CSS_Style.InputParam<T_Params>['input']): Promise<Tokens_CSS_Style.Data<T_Params>['input']>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static toggleStyle<T_Params extends TokenTypes.Style.TypeParams>(headingStyles: Tokens_CSS_Style.Data<T_Params>['heading'], iconStyles: Tokens_CSS_Style.IconStyles<never>, widgetStyles: Tokens_CSS_Style.WidgetStyles, partial?: Tokens_CSS_Style.InputParam<T_Params>['toggle']): Promise<Tokens_CSS_Style.ToggleStyles>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static widgetStyle<T_Params extends TokenTypes.Style.TypeParams>(partial?: Tokens_CSS_Style.InputParam<T_Params>['widget']): Promise<Tokens_CSS_Style.WidgetStyles>;
    static get default(): Promise<Tokens_CSS_Style.Data<{
        iconSizes: never;
    }>>;
    protected constructor(data: Tokens_CSS_Style.Data<T_Params>);
    toJSON(): Tokens_CSS_Style.JsonReturn<T_Params>;
    toScssVars(): Tokens_CSS_Style.ScssVars<T_Params>;
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
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };
        /**
         * For the headline. This should be a theme slug.
         */
        color: string;
        gap: {
            block: 0 | AnyTokenLevel;
            inline: 0 | AnyTokenLevel;
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
            'line-height': TokenTypes.Css.LineHeight;
            /**
             * Value for the first item after an icon (to be in em). Gets
             * overruled if that item is a heading.
             */
            margin: {
                block: {
                    start: number;
                    end: number;
                };
            };
        };
        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
            size: Omit<IconStyles<never>['size'], 'font' | 'pseudo'>;
        };
        'line-height': TokenTypes.Css.LineHeight;
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin.WithSelfFirm;
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
         * This should be a theme slug.
         */
        'background-color': string;
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
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };
        display: "block" | "flex";
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': {
            self: FlowMargin.SelfFirm;
        };
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
        icon: Omit<IconStyles_Spacing, 'size'> & {
            size: Omit<IconStyles_Spacing['size'], '$' | 'large'>;
        };
        'letter-spacing': TokenTypes.Css.LetterSpacing;
        'line-height': TokenTypes.Css.LineHeight;
        padding: {
            block: 0 | AnyTokenLevel;
            inline: 0 | AnyTokenLevel;
        };
        'text-transform': TokenTypes.Css.TextTransform;
        width: string;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ButtonStyles_Disabled = Omit<ButtonStyles, 'border' | 'display' | 'flow-margin' | 'focus' | 'font' | 'gap' | 'icon' | 'line-height' | 'margin' | 'padding' | 'width'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
        font: Omit<ButtonStyles['font'], 'size'>;
    };
    /**
     * Inline buttons are buttons meant to be inline with text (rather than in
     * its own line(s)).
     *
     * @since 0.1.0-beta.0.draft
     */
    type ButtonStyles_Inline = Omit<ButtonStyles, 'border' | 'display' | 'flow-margin' | 'margin'> & {
        border: Omit<ButtonStyles['border'], 'width'>;
        'vertical-align': string;
    };
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
        button: AnyTokenLevel | {
            $: AnyTokenLevel;
            /**
             * Explicitly set a size for the button span gap for touch-screens.
             */
            touch?: AnyTokenLevel;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace FlowMargin {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Parsed = Omit<FlowMargin, 'button'> & {
            button: Extract<FlowMargin['button'], object>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Self = 'margins-flow' | 'margins-flow-small' | 'margins-flow-large';
        /**
         * @since 0.1.0-beta.0.draft
         */
        type SelfFirm = 'margins-flow-firm' | 'margins-flow-firm-small' | 'margins-flow-firm-large';
        /**
         * @since 0.1.0-beta.0.draft
         */
        type WithSelf = FlowMargin & {
            self: Self;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type WithSelfFirm = FlowMargin & {
            self: SelfFirm;
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    type HeadingStyles = {
        font: {
            /**
             * This should be a font family slug.
             */
            family: string;
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };
        icon?: undefined | RecursivePartial<Omit<IconStyles_Spacing, 'size' | 'vertical-align'>> & {
            /**
             * This should be a theme slug.
             */
            color?: undefined | string;
            size?: undefined | Partial<Omit<IconStyles_Spacing['size'], '$' | 'large'>>;
        };
        'letter-spacing': string;
        'line-height': TokenTypes.Css.LineHeight;
        'text-transform': TokenTypes.Css.TextTransform;
        margin: {
            block: {
                start: 0 | AnyTokenLevel;
            };
        };
        padding: {
            block: {
                start: 0 | TokenTypes.Css.Number.Em | AnyTokenLevel;
                end: 0 | TokenTypes.Css.Number.Em | AnyTokenLevel;
            };
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type HeadingStyles_Generic<T_Key extends keyof Tokens_CSS_Style.Data<TokenTypes.Style.TypeParams>['heading']> = "unstyled" extends T_Key ? HeadingStyles_Unstyled : HeadingStyles;
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
             * This should be a font size slug.
             */
            size: string;
        };
        'flow-margin': {
            self: FlowMargin.Self;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type IconStyles_Spacing = {
        buffer: {
            $: TokenTypes.Css.Number.Em;
            start: number;
            end: number;
        };
        embedded: {
            bottom: TokenTypes.Css.Number.Em;
        };
        font: {
            top: TokenTypes.Css.Number.Em;
        };
        pseudo: {
            top: TokenTypes.Css.Number.Em;
        };
        size: IconStyles<never>['size'];
        'vertical-align': IconStyles<never>['vertical-align'];
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type IconStyles<T_Params extends TokenTypes.Style.TypeParams> = {
        /**
         * This should be a theme slug.
         */
        color: string;
        font: IconStyles_Spacing['font'];
        inline: {
            buffer: IconStyles_Spacing['buffer'];
            'line-height': 'normal' | Exclude<TokenTypes.Css.LineHeight, AnyTokenLevel>;
        };
        pseudo: IconStyles_Spacing['pseudo'];
        size: {
            $: TokenTypes.Css.Number.Em;
            large: TokenTypes.Css.Number.Em;
            /**
             * For inline icons using the icon font.
             */
            font: TokenTypes.Css.Number.Em;
            /**
             * For inline icons in before/after pseudo classes.
             */
            pseudo: TokenTypes.Css.Number.Em;
        } & {
            [K in T_Params['iconSizes']]: TokenTypes.Css.Number.Em;
        };
        'vertical-align': string;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type InputStyles = {
        border: {
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': {
            self: FlowMargin.SelfFirm;
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
                    start: TokenTypes.Css.Number.Em;
                    end: TokenTypes.Css.Number.Em;
                };
            };
        };
        label: {
            font: {
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };
            'line-height': TokenTypes.Css.LineHeight;
        };
        'line-height': TokenTypes.Css.LineHeight;
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
    type InputStyles_Variation = Omit<InputStyles, 'border' | 'flow-margin' | 'focus' | 'icons' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'> & {
        border: Omit<InputStyles['border'], 'width'>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type SubheadingStyles = Omit<HeadingStyles_Unstyled, 'font' | 'subheading'> & {
        /**
         * Should be a theme slug.
         */
        color: string;
        font: Omit<HeadingStyles_Unstyled['font'], 'family'>;
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
                    $: TokenTypes.Css.BorderRadius;
                    top: TokenTypes.Css.BorderRadius;
                };
                style: {
                    $: "dotted" | "solid";
                    top: "dotted" | "solid";
                };
                width: TokenTypes.Css.BorderWidth;
            };
            'line-height': TokenTypes.Css.LineHeight;
            padding: {
                block: AnyTokenLevel;
                inline: AnyTokenLevel;
            };
        };
        /**
         * For the toggle control.
         */
        control: {
            $: ToggleStyles_ControlHeading;
            heading: {
                [H in RequiredHeadingLevels]: ToggleStyles_ControlHeading;
            } & {
                [key: number]: ToggleStyles_ControlHeading;
            };
        };
        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin.WithSelfFirm;
        icon: Pick<IconStyles<never>, 'vertical-align'> & {
            buffer: {
                start: TokenTypes.Css.Number.Em;
                end: TokenTypes.Css.Number.Em;
            };
            size: IconStyles<never>['size']['$'];
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
                    width: TokenTypes.Css.BorderWidth;
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
        margin: {
            block: {
                end: HeadingStyles['padding']['block']['end'];
            };
        };
        padding: {
            block: HeadingStyles['padding']['block'];
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
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };
        'line-height': TokenTypes.Css.LineHeight;
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
    type Data<T_Params extends TokenTypes.Style.TypeParams> = {
        /**
         * @since 0.1.0-beta.0.draft
         */
        alert: AlertStyles;
        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
            inline: ButtonStyles_Inline;
        };
        /**
         * Default values for the set-flow-margins mixin.
         *
         * @since 0.1.0-beta.0.draft
         */
        'flow-margin': FlowMargin.Parsed;
        /**
         * @since 0.1.0-beta.0.draft
         */
        form: {
            $: {
                'flow-margin': {
                    self: FlowMargin.Self;
                };
            };
            search: {
                'flow-margin': {
                    self: FlowMargin.SelfFirm;
                };
            };
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
        hr: {
            border: {
                width: TokenTypes.Css.BorderWidth;
            };
            /**
             * This should be a theme slug.
             */
            color: string;
            'flow-margin': {
                self: FlowMargin.SelfFirm;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        icon: IconStyles<T_Params>;
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
         * @since 0.1.0-beta.0.draft
         */
        label: {
            'flow-margin': {
                self: FlowMargin.Self;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        logo: {
            /**
             * This should be a theme slug.
             */
            color: string;
            'flow-margin': {
                self: FlowMargin.SelfFirm;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft — Restructured object nesting.
         */
        selection: {
            background: {
                opacity: {
                    [C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'>]: TokenTypes.Css.Number.Percent;
                };
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        subheading: {
            [L in RequiredHeadingLevels | 'unstyled']?: undefined | RecursivePartial<SubheadingStyles>;
        } & {
            [key: number]: RecursivePartial<SubheadingStyles>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        table: {
            'flow-margin': {
                self: FlowMargin.SelfFirm;
            };
        };
        /**
         * Toggle block styles.
         *
         * @since 0.1.0-beta.0.draft
         */
        toggle: ToggleStyles;
        /**
         * @since 0.1.0-beta.0.draft
         */
        widget: WidgetStyles;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_Params extends TokenTypes.Style.TypeParams> = {
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
        /**
         * @since 0.1.0-beta.0.draft
         */
        'flow-margin'?: RecursivePartial<Data<T_Params>['flow-margin']>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        form?: RecursivePartial<Data<T_Params>['form']>;
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
        hr?: RecursivePartial<Data<T_Params>['hr']>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        icon?: RecursivePartial<Omit<IconStyles<T_Params>, 'size'>> & {
            size: Partial<IconStyles<T_Params>['size']> & {
                [K in T_Params['iconSizes']]: TokenTypes.Css.Number.Em;
            };
        };
        input?: {
            $?: RecursivePartial<InputStyles>;
            file?: RecursivePartial<Pick<InputStyles, 'padding'>>;
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        label?: RecursivePartial<Data<T_Params>['label']>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        logo?: RecursivePartial<Data<T_Params>['logo']>;
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
        subheading?: {
            [L in RequiredHeadingLevels | 'unstyled']?: undefined | RecursivePartial<SubheadingStyles>;
        } & {
            [key: number]: RecursivePartial<SubheadingStyles>;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        table?: RecursivePartial<Data<T_Params>['table']>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        toggle?: RecursivePartial<ToggleStyles>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        widget?: RecursivePartial<WidgetStyles>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_Params extends TokenTypes.Style.TypeParams> = Data<T_Params>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_Params extends TokenTypes.Style.TypeParams> = Data<T_Params> & {
        /**
         * Opacity levels to print as colour tokens.
         */
        presetOpacities: TokenTypes.Css.Number.Percent[];
    };
}
