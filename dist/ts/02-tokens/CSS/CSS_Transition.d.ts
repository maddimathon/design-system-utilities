/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_CSS_Transition extends AbstractTokens<Tokens_CSS_Transition.Data> {
    static get default(): Tokens_CSS_Transition.Data;
    readonly data: Tokens_CSS_Transition.Data;
    constructor(input: Tokens_CSS_Transition.InputParam);
    toJSON(): Tokens_CSS_Transition.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_CSS_Transition.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_CSS_Transition} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_CSS_Transition {
    type TransitionTime = `${number}ms` | `${number}s`;
    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {
        time: {
            fast: TransitionTime;
            normal: TransitionTime;
            slow: TransitionTime;
            [key: string]: TransitionTime;
        };
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Omit<Data, 'time'>> & {
        time?: Partial<Data['time']>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;
    export {};
}
//# sourceMappingURL=CSS_Transition.d.ts.map