/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { mergeArgs } from '@maddimathon/utility-typescript';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Style } from './CSS/CSS_Style.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';

import type { TokenTypes } from './@types.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS<T_StyleParams extends TokenTypes.Style.TypeParams> extends AbstractTokens<{
    data: Tokens_CSS.Data<T_StyleParams>;
    json: Tokens_CSS.JsonReturn<T_StyleParams>;
    scss: Tokens_CSS.ScssVars<T_StyleParams>;
}> {

    /**
     * Builds tokens faster.
     * 
     * @since ___PKG_VERSION___
     */
    public static async build<T_StyleParams extends TokenTypes.Style.TypeParams>( input: Tokens_CSS.InputParam<T_StyleParams> ): Promise<Tokens_CSS<T_StyleParams>> {

        return Tokens_CSS_Style.build( input.style ?? {} ).then(
            style => new Tokens_CSS(
                new Tokens_CSS_Border( input.border ?? {} ),
                style,
                new Tokens_CSS_Transition( input.transition ?? {} ),
                mergeArgs( Tokens_CSS.default.zIndex, input.zIndex ),
            )
        );
    }

    public static get default(): Omit<Tokens_CSS.Data<{ iconSizes: never; }>, 'border' | 'style' | 'transition'> {

        return {
            zIndex: {
                nav: 9999,
                popup: 999999,
                settings: 1000,
                skipLink: 99999,
            },
        };
    }

    public get data(): Tokens_CSS.Data<T_StyleParams> {
        return {
            border: this.border,
            style: this.style,
            transition: this.transition,
            zIndex: this.zIndex,
        };
    }

    public constructor (
        protected readonly border: Tokens_CSS_Border,
        protected readonly style: Tokens_CSS_Style<T_StyleParams>,
        protected readonly transition: Tokens_CSS_Transition,
        protected readonly zIndex: Tokens_CSS.Data<T_StyleParams>[ 'zIndex' ],
    ) {
        super();
    }

    public toJSON(): Tokens_CSS.JsonReturn<T_StyleParams> {
        return {
            border: this.border.toJSON(),
            style: this.style.toJSON(),
            transition: this.transition.toJSON(),
            zIndex: this.data.zIndex,
        };
    }

    public toScssVars(): Tokens_CSS.ScssVars<T_StyleParams> {
        return {
            border: this.border.toScssVars(),
            style: this.style.toScssVars(),
            transition: this.transition.toScssVars(),
            z_index: this.data.zIndex,
        };
    }
}

/**
 * Utilities for the {@link Tokens_CSS} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_CSS {

    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_StyleParams extends TokenTypes.Style.TypeParams> = {
        border: Tokens_CSS_Border;
        style: Tokens_CSS_Style<T_StyleParams>;
        transition: Tokens_CSS_Transition;

        zIndex: {
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
            [ key: string ]: number;
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_StyleParams extends TokenTypes.Style.TypeParams> =
        Partial<Omit<Data<T_StyleParams>, 'border' | 'style' | 'transition' | 'zIndex'>>
        & {
            border?: Tokens_CSS_Border.InputParam;
            style?: Tokens_CSS_Style.InputParam<T_StyleParams>;
            transition?: Tokens_CSS_Transition.InputParam;
            zIndex?: Partial<Data<T_StyleParams>[ 'zIndex' ]>;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_StyleParams extends TokenTypes.Style.TypeParams> =
        Omit<Data<T_StyleParams>, 'border' | 'style' | 'transition'>
        & {
            border: Tokens_CSS_Border.JsonReturn;
            style: Tokens_CSS_Style.JsonReturn<T_StyleParams>;
            transition: Tokens_CSS_Transition.JsonReturn;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_StyleParams extends TokenTypes.Style.TypeParams> = {
        border: Tokens_CSS_Border.ScssVars;
        style: Tokens_CSS_Style.ScssVars<T_StyleParams>;
        transition: Tokens_CSS_Transition.ScssVars;
        z_index: Data<T_StyleParams>[ 'zIndex' ];
    };
}