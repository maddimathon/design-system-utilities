/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare class Tokens_CSS_TEMPLATE extends AbstractTokens<{
    data: Tokens_CSS_TEMPLATE.Data;
    json: Tokens_CSS_TEMPLATE.JsonReturn;
    scss: Tokens_CSS_TEMPLATE.ScssVars;
}> {
    static get default(): Tokens_CSS_TEMPLATE.Data;
    readonly data: Tokens_CSS_TEMPLATE.Data;
    constructor(input: Tokens_CSS_TEMPLATE.InputParam);
    toJSON(): Tokens_CSS_TEMPLATE.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_CSS_TEMPLATE.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_CSS_TEMPLATE} class.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare namespace Tokens_CSS_TEMPLATE {
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type Data = {};
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type InputParam = Partial<Data>;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type JsonReturn = Data;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars = Data;
}
//# sourceMappingURL=CSS_@TEMPLATE.d.ts.map