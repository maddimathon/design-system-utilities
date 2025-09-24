/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { MessageMaker } from '@maddimathon/utility-typescript/classes';
import * as z from 'zod';
import { internal as buildUtils_internal } from '@maddimathon/build-utilities';
import type { RecursiveRecord } from '../../01-utilities/@types.js';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @typeParam T_SchemaType  Type of the zod schema that defines and parses this token or group.
 * @typeParam T_ExportType  Optional. Type returned by {@link AbstractTokens.valueOf}.
 * @typeParam T_InputType   Optional. Type passed to the constructor and used to override defaults.
 * @typeParam T_JsonType    Optional. Type returned by {@link AbstractTokens.toJSON}.
 * @typeParam T_ScssType    Optional. Type returned by {@link AbstractTokens.toScssVars}.
 *
 * @since 0.1.0-alpha.draft
 */
export declare abstract class AbstractTokens<T_SchemaType extends z.ZodTypeAny | undefined, T_ExportType extends object = T_SchemaType extends undefined ? undefined : z.infer<T_SchemaType & {}>, T_InputType extends number | object | string = T_ExportType extends undefined ? {} : Partial<T_ExportType>, T_JsonType extends number | object | string = T_ExportType, T_ScssType extends number | object | string = T_ExportType> {
    #private;
    protected readonly input: T_InputType;
    /**
     * A custom error handler to use with Zod schemas.
     *
     * @since 0.1.0-alpha.draft
     */
    static customErrorMap(...params: Parameters<z.ZodErrorMap>): ReturnType<z.ZodErrorMap>;
    /**
     * The zod schema for this group, if applicable.
     *
     * @since 0.1.0-alpha.draft
     */
    abstract get schema(): T_SchemaType;
    /**
     * Defines {@link AbstractTokens.input} and sets the Zod error map, if
     * applicable.
     *
     * @since 0.1.0-alpha.draft
     */
    constructor(input: T_InputType);
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
     * @since 0.1.0-alpha.draft
     */
    protected parseSchema<T_Schema extends z.ZodTypeAny, T_ValueToTest extends Parameters<T_Schema['safeParse']>[0]>(schema: T_Schema, value: T_ValueToTest, context: AbstractTokens.Tokens_Error.Context, errorMessage?: string, params?: Parameters<T_Schema['safeParse']>[1]): z.TypeOf<T_Schema>;
    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     *
     * @since 0.1.0-alpha.draft
     */
    abstract toJSON(): T_JsonType;
    /**
     * Converts this token or group to the values used when converting to scss.
     *
     * @since 0.1.0-alpha.draft
     */
    abstract toScssVars(): T_ScssType;
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha.draft
     */
    toScss(): string;
    /**
     * The working value of this object.
     *
     * @since 0.1.0-alpha.draft
     */
    abstract valueOf(): T_ExportType;
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace AbstractTokens {
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
     */
    namespace Tokens_Error {
        /**
         * Object used to give context for where this error was triggered.
         *
         * @since 0.1.0-alpha.draft
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
    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     *
     * @param obj     Object to flatten.
     * @param prefix  Optional. String used to prefix the flattened keys.
     * @param suffix  Optional. String used to suffix the flattened keys.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectFlatten<T_Keys extends string, T_Values extends any, T_Prefix extends string | never, T_Suffix extends string | never>(obj: RecursiveRecord<T_Keys, T_Values>, prefix?: T_Prefix, suffix?: T_Suffix): {
        [key: string]: T_Values;
    };
    /**
     * Takes an array of keys and a callback function to easily construct a
     * typed object.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectGenerator<T_Keys extends number | string, T_Return extends unknown>(keys: T_Keys[], mapper: (key: T_Keys) => T_Return): {
        [K in T_Keys]: T_Return;
    };
    /**
     * A utility to map the values of an object using a callback function.
     *
     * @param obj     The object to map.
     * @param mapper  The callback function used to define new values.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectMap<T_Object extends object, T_Return extends unknown>(obj: T_Object, mapper: (key: keyof T_Object, value: T_Object[keyof T_Object]) => T_Return): {
        [K in keyof T_Object]: T_Return;
    };
    /**
     * A simple rounding function to use for rounding em and rem values for
     * nicer output.
     *
     * @param num     Number to round.
     * @param factor  Optional. Number used to round the number to an inverse multiple.
     *
     * @since 0.1.0-alpha.draft
     * @source
     */
    function roundToPixel(num: number, factor?: number): number;
}
//# sourceMappingURL=AbstractTokens.d.ts.map