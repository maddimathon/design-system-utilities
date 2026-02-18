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
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Style } from './CSS/CSS_Style.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS extends AbstractTokens<{
    data: Tokens_CSS.Data;
    json: Tokens_CSS.JsonReturn;
    scss: Tokens_CSS.ScssVars;
}> {
    static get default(): Omit<Tokens_CSS.Data, 'border' | 'style' | 'transition'>;
    get data(): Tokens_CSS.Data;
    protected readonly border: Tokens_CSS_Border;
    protected readonly style: Tokens_CSS_Style;
    protected readonly transition: Tokens_CSS_Transition;
    protected readonly zIndex: Tokens_CSS.Data['zIndex'];
    constructor(input: Tokens_CSS.InputParam);
    toJSON(): Tokens_CSS.JsonReturn;
    toScssVars(): Tokens_CSS.ScssVars;
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
    type Data = {
        border: Tokens_CSS_Border;
        style: Tokens_CSS_Style;
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
    type InputParam = Partial<Omit<Data, 'border' | 'style' | 'transition' | 'zIndex'>> & {
        border?: Tokens_CSS_Border.InputParam;
        style?: Tokens_CSS_Style.InputParam;
        transition?: Tokens_CSS_Transition.InputParam;
        zIndex?: Partial<Data['zIndex']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn = Omit<Data, 'border' | 'style' | 'transition'> & {
        border: Tokens_CSS_Border.JsonReturn;
        style: Tokens_CSS_Style.JsonReturn;
        transition: Tokens_CSS_Transition.JsonReturn;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars = {
        border: Tokens_CSS_Border.ScssVars;
        style: Tokens_CSS_Style.ScssVars;
        transition: Tokens_CSS_Transition.ScssVars;
        z_index: Data['zIndex'];
    };
}
//# sourceMappingURL=Tokens_CSS.d.ts.map