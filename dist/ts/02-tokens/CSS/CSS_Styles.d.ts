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
export declare class Tokens_CSS_Styles extends AbstractTokens<Tokens_CSS_Styles.Data> {
    static headingStyle(heading: number): Tokens_CSS_Styles.HeadingStyles;
    static get default(): Tokens_CSS_Styles.Data;
    readonly data: Tokens_CSS_Styles.Data;
    constructor(input: Tokens_CSS_Styles.InputParam);
    toJSON(): Tokens_CSS_Styles.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_CSS_Styles.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_CSS_Styles} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Styles {
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
//# sourceMappingURL=CSS_Styles.d.ts.map