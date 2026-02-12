/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0
 * @license MIT
 */
import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects';
import type { RequiredHeadingLevels, ThemeMode_ContrastOption, TokenLevels } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS_Style extends AbstractTokens<Tokens_CSS_Style.Data> {
    static buttonStyle(): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    };
    static headingStyle(heading: number): Tokens_CSS_Style.HeadingStyles;
    static inputStyle(): {
        $: Tokens_CSS_Style.InputStyles;
        disabled: Tokens_CSS_Style.InputStyles_Disabled;
    };
    static get default(): Tokens_CSS_Style.Data;
    readonly data: Tokens_CSS_Style.Data;
    constructor(input: Tokens_CSS_Style.InputParam);
    toJSON(): Tokens_CSS_Style.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_CSS_Style.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_CSS_Style} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS_Style {
    namespace CSS {
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }
    interface ButtonStyles {
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
    }
    interface ButtonStyles_Disabled extends Omit<ButtonStyles, 'border' | 'focus' | 'gap' | 'line-height' | 'margin' | 'padding' | 'width'> {
        border: Omit<ButtonStyles['border'], 'width'>;
        'letter-spacing': string;
        'text-transform': CSS.TextTransform;
    }
    interface ButtonStyles_Partial extends RecursivePartial<ButtonStyles> {
    }
    interface ButtonStyles_Disabled_Partial extends RecursivePartial<ButtonStyles_Disabled> {
    }
    interface HeadingStyles {
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
    }
    interface HeadingStyles_Partial extends Partial<HeadingStyles> {
    }
    /**
     * @since 0.1.1-alpha.0
     */
    interface InputStyles {
        border: {
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };
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
    }
    /**
     * @since 0.1.1-alpha.0
     */
    interface InputStyles_Disabled extends Omit<InputStyles, 'border' | 'focus' | 'label' | 'line-height' | 'margin' | 'padding'> {
        border: Omit<InputStyles['border'], 'width'>;
    }
    /**
     * @since 0.1.1-alpha.0
     */
    interface InputStyles_Partial extends RecursivePartial<InputStyles> {
    }
    /**
     * @since 0.1.1-alpha.0
     */
    interface InputStyles_Disabled_Partial extends RecursivePartial<InputStyles_Disabled> {
    }
    /**
     * @since 0.1.0-alpha
     */
    type Data = {
        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
        };
        heading: {
            [L in RequiredHeadingLevels]: HeadingStyles;
        } & {
            [key: number]: HeadingStyles;
        };
        input: {
            $: InputStyles;
            disabled: InputStyles_Disabled;
        };
        selection: {
            [C in Exclude<ThemeMode_ContrastOption, 'max'>]: {
                'background-opacity': string;
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam = {
        button?: {
            $?: ButtonStyles_Partial;
            disabled?: ButtonStyles_Disabled_Partial;
        };
        heading?: {
            [L in RequiredHeadingLevels]?: HeadingStyles_Partial;
        } & {
            [key: number]: HeadingStyles_Partial;
        };
        input?: {
            $?: InputStyles_Partial;
            disabled?: InputStyles_Disabled_Partial;
        };
        selection?: {
            [C in Exclude<ThemeMode_ContrastOption, 'max'>]?: {
                'background-opacity'?: string;
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn = Data;
}
//# sourceMappingURL=CSS_Style.d.ts.map