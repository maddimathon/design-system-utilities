/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS_Transition extends AbstractTokens<{
    data: Tokens_CSS_Transition.Data;
    json: Tokens_CSS_Transition.JsonReturn;
    scss: Tokens_CSS_Transition.ScssVars;
}> {
    static get default(): Tokens_CSS_Transition.Data;
    readonly data: Tokens_CSS_Transition.Data;
    constructor(input: Tokens_CSS_Transition.InputParam);
    toJSON(): Tokens_CSS_Transition.JsonReturn;
    toScssVars(): Tokens_CSS_Transition.ScssVars;
}
/**
 * Utilities for the {@link Tokens_CSS_Transition} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS_Transition {
    type TransitionTime = `${number}ms` | `${number}s`;
    export type AllowedProperties = 'accent-color' | 'aspect-ratio' | 'background-color' | 'border-color' | 'border' | 'bottom' | 'box-shadow' | 'color' | 'font-weight' | 'font-weight' | 'font' | 'height' | 'left' | 'letter-spacing' | 'line-height' | 'margin' | 'max-height' | 'max-width' | 'min-height' | 'min-width' | 'opacity' | 'outline-color' | 'outline' | 'padding' | 'right' | 'rotate' | 'scale' | 'text-decoration-color' | 'text-indent' | 'text-shadow' | 'top' | 'transform-origin' | 'transform' | 'translate' | 'vertical-align' | 'visibility' | 'width' | 'word-spacing' | 'z-index';
    /**
     * @since 0.1.0-alpha
     */
    export type Data = {
        properties: {
            always: AllowedProperties[];
            motion: AllowedProperties[];
        };
        time: {
            fast: TransitionTime;
            normal: TransitionTime;
            slow: TransitionTime;
            'toggle-closing': TransitionTime;
            [key: string]: TransitionTime;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = Partial<Omit<Data, 'time'>> & {
        time?: Partial<Data['time']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type ScssVars = Data;
    export {};
}
