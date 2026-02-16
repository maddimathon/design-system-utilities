/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { internal as buildUtils_internal } from '@maddimathon/build-utilities';
import type { RecursiveRecord } from '../../01-utilities/@types.js';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 */
export declare abstract class AbstractTokens<T_DataType> {
    static readonly tokenLevels: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
    static readonly tokenLevels_extraOptions: readonly ["150", "250", "350", "450", "550", "650", "750", "850"];
    readonly tokenLevels: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
    constructor();
    /**
     * The value of this token.
     *
     * @since 0.1.0-alpha
     */
    abstract get data(): T_DataType;
    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     *
     * Uses {@link AbstractTokens.schemaJSON}.
     *
     * @since 0.1.0-alpha
     */
    abstract toJSON(): AbstractTokens.JsonReturn;
    /**
     * Converts this token or group to the values used when converting to scss.
     *
     * @since 0.1.0-alpha
     */
    abstract toScssVars(): AbstractTokens.ScssReturn;
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha
     */
    toScss(): string;
    /**
     * The working value of this object.
     *
     * @since 0.1.0-alpha
     */
    valueOf(): T_DataType;
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace AbstractTokens {
    type JsonReturn = undefined | null | number | string | RecursiveRecord<number | string, any>;
    type ScssPrimitive = undefined | null | number | object | string;
    type ScssReturn = ScssPrimitive | RecursiveRecord<number | string, ScssPrimitive>;
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     */
    class Tokens_Error<T_CauseType extends unknown | undefined = never> extends buildUtils_internal.AbstractError<never, Tokens_Error.Context> {
        readonly context: Tokens_Error.Context;
        protected readonly opts: {
            cause: T_CauseType;
        };
        readonly name: string;
        constructor(message: string, context: Tokens_Error.Context, opts: {
            cause: T_CauseType;
        });
        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        toJSON(): {
            name: string;
            message: string;
            context: Tokens_Error.Context;
            cause: unknown;
            stack: string | undefined;
            string: string;
        };
    }
    /**
     * Utilities for the {@link AbstractTokens.Tokens_Error} class.
     *
     * @since 0.1.0-alpha
     */
    namespace Tokens_Error {
        /**
         * Object used to give context for where this error was triggered.
         *
         * @since 0.1.0-alpha
         */
        interface Context {
            /**
             * Name for the schema, used in error messages.
             */
            name: string;
            /**
             * Location where schema is being tested.
             */
            location: string;
        }
    }
}
//# sourceMappingURL=AbstractTokens.d.ts.map