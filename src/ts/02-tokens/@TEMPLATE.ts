/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';

import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_TEMPLATE extends AbstractTokens<Tokens_TEMPLATE.Data> {

    public static get default(): Tokens_TEMPLATE.Data {
        return {
        };
    }

    // public get data(): Tokens_TEMPLATE.Data {
    //     return {};
    // }
    public readonly data: Tokens_TEMPLATE.Data;

    public constructor (
        input: Tokens_TEMPLATE.InputParam,
    ) {
        super();

        this.data = {
            ...Tokens_TEMPLATE.default,
            ...input,
        };
    }

    public toJSON(): Tokens_TEMPLATE.JsonReturn {
        return this.data;
    }

    public toScssVars(): {
        [ K in keyof Tokens_TEMPLATE.Data ]: AbstractTokens.ScssReturn;
    } {
        return {};
    }
}

/**
 * Utilities for the {@link Tokens_TEMPLATE} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_TEMPLATE {

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {};

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = Partial<Data>;

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

}