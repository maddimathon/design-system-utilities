/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
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
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_CSS_TEMPLATE {
    /**
     * @since ___PKG_VERSION___
     */
    type Data = {};
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam = Partial<Data>;
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn = Data;
}
//# sourceMappingURL=CSS_@TEMPLATE.d.ts.map