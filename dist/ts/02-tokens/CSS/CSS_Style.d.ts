/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { RequiredHeadingLevels, TokenLevels } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_CSS_Style extends AbstractTokens<Tokens_CSS_Style.Data> {
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
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Style {
    namespace CSS {
        type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
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
     * @since 0.1.0-alpha.draft
     */
    type Data = {
        heading: {
            [L in RequiredHeadingLevels]: HeadingStyles;
        } & {
            [key: number]: HeadingStyles;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type InputParam = {
        heading?: {
            [L in RequiredHeadingLevels]?: HeadingStyles_Partial;
        } & {
            [key: number]: HeadingStyles_Partial;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type JsonReturn = Data;
}
//# sourceMappingURL=CSS_Style.d.ts.map