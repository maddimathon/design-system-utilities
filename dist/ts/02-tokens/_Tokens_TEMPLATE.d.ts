/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare class Tokens_TEMPLATE<T_SimpleStringParam extends string> extends AbstractTokens<{
    data: Tokens_TEMPLATE.Data<T_SimpleStringParam>;
    json: Tokens_TEMPLATE.JsonReturn<T_SimpleStringParam>;
    scss: Tokens_TEMPLATE.ScssVars<T_SimpleStringParam>;
}> {
    readonly data: Tokens_TEMPLATE.Data<T_SimpleStringParam>;
    static get default(): {};
    static build<T_SimpleStringParam extends string>(input: Tokens_TEMPLATE.InputParam<T_SimpleStringParam>): Promise<Tokens_TEMPLATE<T_SimpleStringParam>>;
    protected constructor(data: Tokens_TEMPLATE.Data<T_SimpleStringParam>);
    toJSON(): Tokens_TEMPLATE.JsonReturn<T_SimpleStringParam>;
    toScssVars(): Tokens_TEMPLATE.ScssVars<T_SimpleStringParam>;
}
/**
 * Utilities for the {@link Tokens_TEMPLATE} class.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare namespace Tokens_TEMPLATE {
    /**
     * @since 0.1.0-beta.0.draft
     */
    type Data<T_SimpleStringParam extends string> = {};
    /**
     * @since 0.1.0-beta.0.draft
     */
    type InputParam<T_SimpleStringParam extends string> = Partial<Data<T_SimpleStringParam>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    type JsonReturn<T_SimpleStringParam extends string> = Data<T_SimpleStringParam>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_SimpleStringParam extends string> = Data<T_SimpleStringParam>;
}
