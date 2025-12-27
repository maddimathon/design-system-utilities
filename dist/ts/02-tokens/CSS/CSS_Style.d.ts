/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4
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
    static buttonStyle(): Tokens_CSS_Style.ButtonStyles;
    static headingStyle(heading: number): Tokens_CSS_Style.HeadingStyles;
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
    interface ButtonStyles_Partial extends RecursivePartial<ButtonStyles> {
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
     * @since 0.1.0-alpha
     */
    type Data = {
        button: ButtonStyles;
        heading: {
            [L in RequiredHeadingLevels]: HeadingStyles;
        } & {
            [key: number]: HeadingStyles;
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
        button?: ButtonStyles_Partial;
        heading?: {
            [L in RequiredHeadingLevels]?: HeadingStyles_Partial;
        } & {
            [key: number]: HeadingStyles_Partial;
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