/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.1
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS_TEMPLATE extends AbstractTokens<Tokens_CSS_TEMPLATE.Data> {
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
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS_TEMPLATE {
    /**
     * @since 0.1.0-alpha
     */
    type Data = {};
    /**
     * @since 0.1.0-alpha
     */
    type InputParam = Partial<Data>;
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn = Data;
}
//# sourceMappingURL=CSS_@TEMPLATE.d.ts.map