/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_TEMPLATE extends AbstractTokens<Tokens_TEMPLATE.Data> {
    static get default(): Tokens_TEMPLATE.Data;
    readonly data: Tokens_TEMPLATE.Data;
    constructor(input: Tokens_TEMPLATE.InputParam);
    toJSON(): Tokens_TEMPLATE.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_TEMPLATE.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_TEMPLATE} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_TEMPLATE {
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
//# sourceMappingURL=@TEMPLATE.d.ts.map