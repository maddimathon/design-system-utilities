/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_CSS extends AbstractTokens<Tokens_CSS.Data> {
    static get default(): Omit<Tokens_CSS.Data, 'border' | 'transition'>;
    get data(): Tokens_CSS.Data;
    protected readonly border: Tokens_CSS_Border;
    protected readonly transition: Tokens_CSS_Transition;
    protected readonly zIndex: Tokens_CSS.Data['zIndex'];
    constructor(input: Tokens_CSS.InputParam);
    toJSON(): Tokens_CSS.JsonReturn;
    toScssVars(): {
        border: {
            radius: AbstractTokens.ScssReturn;
            width: AbstractTokens.ScssReturn;
            stroke: AbstractTokens.ScssReturn;
        };
        transition: {
            time: AbstractTokens.ScssReturn;
        };
        z_index: {
            [key: string]: number;
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
        };
    };
}
/**
 * Utilities for the {@link Tokens_CSS} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_CSS {
    /**
     * @since ___PKG_VERSION___
     */
    type Data = {
        border: Tokens_CSS_Border;
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
     * @since ___PKG_VERSION___
     */
    type InputParam = Partial<Omit<Data, 'border' | 'transition' | 'zIndex'>> & {
        border?: Tokens_CSS_Border.InputParam;
        transition?: Tokens_CSS_Transition.InputParam;
        zIndex?: Partial<Data['zIndex']>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn = Data;
}
//# sourceMappingURL=Tokens_CSS.d.ts.map