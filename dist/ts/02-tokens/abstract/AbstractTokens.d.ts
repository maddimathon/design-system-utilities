/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2
 * @license MIT
 */
import * as z from 'zod';
import type { MessageMaker } from '@maddimathon/utility-typescript/classes';
import { internal as buildUtils_internal } from '@maddimathon/build-utilities';
import type { RecursiveRecord } from '../../01-utilities/@types.js';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 */
export declare abstract class AbstractTokens<T_DataType> {
    #private;
    static readonly tokenLevels: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
    static readonly tokenLevels_extraOptions: readonly ["000", "050", "150", "250", "350", "450", "550", "650", "750", "850", "950"];
    readonly tokenLevels: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
    /**
     * A custom error handler to use with Zod schemas.
     *
     * @since 0.1.0-alpha
     */
    static customErrorMap(...params: Parameters<z.ZodErrorMap>): ReturnType<z.ZodErrorMap>;
    constructor();
    /**
     * The zod schema for this group's JSON export.
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
    /**
     * A utility for parsing Zod schemas with appropriate error handling.
     *
     * @param schema        Schema to use when parsing the value.
     * @param value         The value to check against the schema.
     * @param context       A context object used for {@link AbstractTokens.Tokens_Error} if the parsing fails.
     * @param errorMessage  Optional. Message to use if the parsing fails.
     * @param params        Optional. Parameters passed to the Zod schema's `safeParse` method.
     *
     * @throws {AbstractTokens.Tokens_Error}  If the schema parsing fails.
     *
     * @since 0.1.0-alpha
     */
    protected parseSchema<T_Schema extends z.ZodTypeAny, T_ValueToTest extends Parameters<T_Schema['safeParse']>[0]>(schema: T_Schema, value: T_ValueToTest, context: AbstractTokens.Tokens_Error.Context, errorMessage?: string, params?: Parameters<T_Schema['safeParse']>[1]): z.TypeOf<T_Schema>;
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
    class Tokens_Error<T_CauseType extends unknown | undefined = never, T_IsZodError extends T_CauseType extends z.ZodError ? true : false = T_CauseType extends z.ZodError ? true : false> extends buildUtils_internal.AbstractError<never, Tokens_Error.Context> {
        readonly context: Tokens_Error.Context;
        protected readonly opts: {
            cause: T_CauseType;
            isZodError: T_IsZodError;
        };
        readonly name: string;
        constructor(message: string, context: Tokens_Error.Context, opts: {
            cause: T_CauseType;
            isZodError: T_IsZodError;
        });
        /**
         * Gets a detailed output message for error handlers.
         */
        getOutput(): MessageMaker.BulkMsgs;
        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        toJSON(): {
            name: string;
            message: string;
            context: Tokens_Error.Context;
            issues: z.ZodIssue[];
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