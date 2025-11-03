/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2
 * @license MIT
 */
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Logos<T_LogoNames extends string> extends AbstractTokens<Tokens_Logos.Data<T_LogoNames>> {
    readonly data: Tokens_Logos.Data<T_LogoNames>;
    constructor(input: Tokens_Logos.InputParam<T_LogoNames>);
    toJSON(): Tokens_Logos.JsonReturn<T_LogoNames>;
    toScssVars(): {
        [K in keyof Tokens_Logos.Data<T_LogoNames>]: {
            label: string;
            height: number;
            width: number;
            embedded: string;
        };
    };
}
/**
 * Utilities for the {@link Tokens_Logos} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Logos {
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_LogoNames extends string> = {
        [I in T_LogoNames]: SvgMaker;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_LogoNames extends string> = {
        [I in T_LogoNames]: SvgMaker.Data | SvgMaker;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_LogoNames extends string> = {
        [I in T_LogoNames]: SvgMaker.JsonReturn;
    };
}
//# sourceMappingURL=Tokens_Logos.d.ts.map