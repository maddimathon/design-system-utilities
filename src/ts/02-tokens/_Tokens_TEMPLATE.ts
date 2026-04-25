/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    mergeArgsAsync,
} from '@maddimathon/utility-typescript';

import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_TEMPLATE<
    T_SimpleStringParam extends string,
> extends AbstractTokens<{
    data: Tokens_TEMPLATE.Data<T_SimpleStringParam>;
    json: Tokens_TEMPLATE.JsonReturn<T_SimpleStringParam>;
    scss: Tokens_TEMPLATE.ScssVars<T_SimpleStringParam>;
}> {

    public static get default(): {} {
        return {} as const satisfies Tokens_TEMPLATE.Data<never>;
    }

    public static async build<T_SimpleStringParam extends string>(
        input: Tokens_TEMPLATE.InputParam<T_SimpleStringParam>,
    ): Promise<Tokens_TEMPLATE<T_SimpleStringParam>> {

        return mergeArgsAsync( Tokens_TEMPLATE.default, input, true ).then(
            data => new Tokens_TEMPLATE( data )
        );
    }

    protected constructor (
        public readonly data: Tokens_TEMPLATE.Data<T_SimpleStringParam>,
    ) {
        super();
    }

    public toJSON(): Tokens_TEMPLATE.JsonReturn<T_SimpleStringParam> {
        return this.data satisfies Tokens_TEMPLATE.JsonReturn<T_SimpleStringParam>;
    }

    public toScssVars(): Tokens_TEMPLATE.ScssVars<T_SimpleStringParam> {
        return this.data satisfies Tokens_TEMPLATE.ScssVars<T_SimpleStringParam>;
    }
}

/**
 * Utilities for the {@link Tokens_TEMPLATE} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_TEMPLATE {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<T_SimpleStringParam extends string> = {
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<T_SimpleStringParam extends string> = Partial<Data<T_SimpleStringParam>>;

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<T_SimpleStringParam extends string> = Data<T_SimpleStringParam>;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_SimpleStringParam extends string> = Data<T_SimpleStringParam>;
}