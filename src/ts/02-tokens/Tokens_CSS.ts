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

import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Style } from './CSS/CSS_Style.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS extends AbstractTokens<Tokens_CSS.Data> {

    public static get default(): Omit<Tokens_CSS.Data, 'border' | 'style' | 'transition'> {

        return {
            zIndex: {
                nav: 1000,
                popup: 999999,
                settings: 9999,
                skipLink: 99999,
            },
        };
    }

    public get data(): Tokens_CSS.Data {
        return {
            border: this.border,
            style: this.style,
            transition: this.transition,
            zIndex: this.zIndex,
        };
    }

    protected readonly border: Tokens_CSS_Border;
    protected readonly style: Tokens_CSS_Style;
    protected readonly transition: Tokens_CSS_Transition;
    protected readonly zIndex: Tokens_CSS.Data[ 'zIndex' ];

    public constructor (
        input: Tokens_CSS.InputParam,
    ) {
        super();

        this.border = new Tokens_CSS_Border( input.border ?? {} );
        this.style = new Tokens_CSS_Style( input.style ?? {} );
        this.transition = new Tokens_CSS_Transition( input.transition ?? {} );

        this.zIndex = mergeArgs( Tokens_CSS.default.zIndex, input.zIndex );
    }

    public toJSON(): Tokens_CSS.JsonReturn {
        return this.data;
    }

    public toScssVars() {

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
    export type Data = {
        border: Tokens_CSS_Border;
        style: Tokens_CSS_Style;
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
    export type InputParam = Partial<Omit<Data, 'border' | 'style' | 'transition' | 'zIndex'>> & {
        border?: Tokens_CSS_Border.InputParam;
        style?: Tokens_CSS_Style.InputParam;
        transition?: Tokens_CSS_Transition.InputParam;
        zIndex?: Partial<Data[ 'zIndex' ]>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

}