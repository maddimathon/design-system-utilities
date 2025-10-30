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
// import * as z from 'zod';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_TEMPLATE extends AbstractTokens<Tokens_CSS_TEMPLATE.Data> {

    public static get default(): Tokens_CSS_TEMPLATE.Data {
        return {
        };
    }

    // public get data(): Tokens_CSS_TEMPLATE.Data {
    //     return {};
    // }
    public readonly data: Tokens_CSS_TEMPLATE.Data;

    public constructor (
        input: Tokens_CSS_TEMPLATE.InputParam,
    ) {
        super();

        this.data = {
            ...Tokens_CSS_TEMPLATE.default,
            ...input,
        };
    }

    public toJSON(): Tokens_CSS_TEMPLATE.JsonReturn {

        return this.data;
    }

    public toScssVars(): {
        [ K in keyof Tokens_CSS_TEMPLATE.Data ]: AbstractTokens.ScssReturn;
    } {

        return {};
    }
}

/**
 * Utilities for the {@link Tokens_CSS_TEMPLATE} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_CSS_TEMPLATE {

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