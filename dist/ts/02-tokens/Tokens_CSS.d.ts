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
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Style } from './CSS/CSS_Style.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';
import type { TokenTypes } from './@types.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS<T_StyleParams extends TokenTypes.Style.TypeParams> extends AbstractTokens<{
    data: Tokens_CSS.Data<T_StyleParams>;
    json: Tokens_CSS.JsonReturn<T_StyleParams>;
    scss: Tokens_CSS.ScssVars<T_StyleParams>;
}> {
    protected readonly border: Tokens_CSS_Border;
    protected readonly style: Tokens_CSS_Style<T_StyleParams>;
    protected readonly transition: Tokens_CSS_Transition;
    protected readonly zIndex: Tokens_CSS.Data<T_StyleParams>['zIndex'];
    /**
     * Builds tokens faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static build<T_StyleParams extends TokenTypes.Style.TypeParams>(input: Tokens_CSS.InputParam<T_StyleParams>): Promise<Tokens_CSS<T_StyleParams>>;
    static get default(): Omit<Tokens_CSS.Data<{
        iconSizes: never;
    }>, 'border' | 'style' | 'transition'>;
    get data(): Tokens_CSS.Data<T_StyleParams>;
    constructor(border: Tokens_CSS_Border, style: Tokens_CSS_Style<T_StyleParams>, transition: Tokens_CSS_Transition, zIndex: Tokens_CSS.Data<T_StyleParams>['zIndex']);
    toJSON(): Tokens_CSS.JsonReturn<T_StyleParams>;
    toScssVars(): Tokens_CSS.ScssVars<T_StyleParams>;
}
/**
 * Utilities for the {@link Tokens_CSS} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS {
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_StyleParams extends TokenTypes.Style.TypeParams> = {
        border: Tokens_CSS_Border;
        style: Tokens_CSS_Style<T_StyleParams>;
        transition: Tokens_CSS_Transition;
        zIndex: {
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
            [key: string]: number;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_StyleParams extends TokenTypes.Style.TypeParams> = Partial<Omit<Data<T_StyleParams>, 'border' | 'style' | 'transition' | 'zIndex'>> & {
        border?: Tokens_CSS_Border.InputParam;
        style?: Tokens_CSS_Style.InputParam<T_StyleParams>;
        transition?: Tokens_CSS_Transition.InputParam;
        zIndex?: Partial<Data<T_StyleParams>['zIndex']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_StyleParams extends TokenTypes.Style.TypeParams> = Omit<Data<T_StyleParams>, 'border' | 'style' | 'transition'> & {
        border: Tokens_CSS_Border.JsonReturn;
        style: Tokens_CSS_Style.JsonReturn<T_StyleParams>;
        transition: Tokens_CSS_Transition.JsonReturn;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_StyleParams extends TokenTypes.Style.TypeParams> = {
        border: Tokens_CSS_Border.ScssVars;
        style: Tokens_CSS_Style.ScssVars<T_StyleParams>;
        transition: Tokens_CSS_Transition.ScssVars;
        z_index: Data<T_StyleParams>['zIndex'];
    };
}
