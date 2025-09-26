/**
 * @since ___PKG_VERSION___
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
 * @since ___PKG_VERSION___
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
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_TEMPLATE {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {};

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Data>;

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;

}