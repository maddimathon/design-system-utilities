/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { RecursiveRecord } from '../../01-utilities/@types.js';
import { LocalErrors } from '../../01-utilities/Errors.js';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 * @since 0.1.1-alpha.1.draft — Converted type param to an object.
 */
export declare abstract class AbstractTokens<T_Params extends {
    data: any;
    json: AbstractTokens.JsonReturn;
    scss: AbstractTokens.ScssReturn;
}> {
    constructor();
    /**
     * The value of this token.
     *
     * @since 0.1.0-alpha
     */
    abstract get data(): T_Params['data'];
    /**
     * Returns a local error object.
     *
     * @since 0.1.1-alpha.1.draft
     */
    newError<T_CauseType extends LocalErrors.Cause>(message: string, context: Omit<LocalErrors.Context.Class, "class">, opts?: undefined | {
        cause?: T_CauseType;
    }): LocalErrors.TokenBuildError<T_CauseType>;
    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     *
     * Uses {@link AbstractTokens.schemaJSON}.
     *
     * @since 0.1.0-alpha
     */
    abstract toJSON(): T_Params['json'];
    /**
     * Converts this token or group to the values used when converting to scss.
     *
     * @since 0.1.0-alpha
     */
    abstract toScssVars(): T_Params['scss'];
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha
     */
    toScss(): string;
    /**
     * If the `tryer` function has no params, then they are optional.
     *
     * If the handler won't exit, then 'FAILED' is possible.
     */
    protected try<T_Params extends never[], T_Return extends unknown>(tryer: () => T_Return, opts: AbstractTokens.TryOpts, params: never[] | undefined): T_Return;
    /**
     * If the `tryer` function *has* params, then they are required.
     */
    protected try<T_Params extends unknown[], T_Return extends unknown>(tryer: (...params: T_Params) => T_Return, opts: AbstractTokens.TryOpts, params: NoInfer<T_Params>): T_Return;
    /**
     * The working value of this object.
     *
     * @since 0.1.0-alpha
     */
    valueOf(): T_Params['data'];
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace AbstractTokens {
    type JsonReturnBasic = undefined | null | boolean | number | string | {
        toJSON: () => any;
    } | JsonReturnBasic[];
    export type JsonReturn = JsonReturnBasic | RecursiveRecord<number | string, JsonReturnBasic | JsonReturn[]> | JsonReturn[];
    export type ScssPrimitive = undefined | null | boolean | number | string | ScssPrimitive[];
    export type ScssReturn = ScssPrimitive | RecursiveRecord<number | string, ScssPrimitive | ScssReturn[]> | ScssReturn[];
    /**
     * Options for the {@link AbstractTokens.try} method.
     *
     * @since 0.1.1-alpha.1.draft
     */
    export interface TryOpts {
        /**
         * Message for the error if it fails.
         */
        message: string;
        context?: Partial<LocalErrors.Context.Class>;
    }
    export {};
}
//# sourceMappingURL=AbstractTokens.d.ts.map