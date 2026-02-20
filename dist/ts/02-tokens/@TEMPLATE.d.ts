/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare class Tokens_TEMPLATE extends AbstractTokens<{
    data: Tokens_TEMPLATE.Data;
    json: Tokens_TEMPLATE.JsonReturn;
    scss: Tokens_TEMPLATE.ScssVars;
}> {
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
 * @since 0.1.1-alpha.1.draft
 */
export declare namespace Tokens_TEMPLATE {
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
