/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
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
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Transition {
    type TransitionTime = `${number}ms` | `${number}s`;
    /**
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
     */
    export type InputParam = Partial<Omit<Data, 'time'>> & {
        time?: Partial<Data['time']>;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    export type JsonReturn = Data;
    export {};
}
//# sourceMappingURL=CSS_Transition.d.ts.map