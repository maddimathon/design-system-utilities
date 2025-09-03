/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { type MessageMaker } from '@maddimathon/utility-typescript/classes';
import { internal as internalUtils } from '@maddimathon/build-utilities';
type RecursiveRecord<T_Keys extends number | string | symbol = number | string | symbol, T_Values extends any = any> = {
    [K in T_Keys]: T_Values | RecursiveRecord<T_Keys, T_Values>;
};
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export declare abstract class AbstractTokens<T_SystemSchema extends z.ZodTypeAny, T_ExportType extends object = z.infer<T_SystemSchema>, T_InputType extends object = Partial<z.infer<T_SystemSchema>>, T_JsonType extends object = T_ExportType, T_ScssType extends number | object | string = T_ExportType> {
    #private;
    protected readonly input: T_InputType;
    static customErrorMap(...params: Parameters<z.ZodErrorMap>): ReturnType<z.ZodErrorMap>;
    abstract get schema(): T_SystemSchema;
    constructor(input: T_InputType);
    protected parseSchema<T_Schema extends z.ZodTypeAny, T_ValueToTest extends Parameters<T_Schema['safeParse']>[0]>(schema: T_Schema, value: T_ValueToTest, context: ConstructorParameters<typeof AbstractTokens.Tokens_Error>[1], errorMessage?: string, params?: Parameters<T_Schema['safeParse']>[1]): z.TypeOf<T_Schema>;
    protected objectMap<T_Object extends object, T_Return extends unknown>(obj: T_Object, mapper: (key: keyof T_Object, value: T_Object[keyof T_Object]) => T_Return): {
        [K in keyof T_Object]: T_Return;
    };
    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     */
    protected objectFlatten<T_Keys extends string, T_Values extends any>(obj: RecursiveRecord<T_Keys, T_Values>, prefix: string, suffix: string): {
        [key: string]: T_Values;
    };
    protected roundToPixel(num: number, factor?: number): number;
    abstract toJSON(): T_JsonType;
    abstract toScssVars(): T_ScssType;
    toScss(): string;
    abstract valueOf(): T_ExportType;
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace AbstractTokens {
    class Tokens_Error<T_CauseType extends unknown | undefined = never, T_IsZodError extends T_CauseType extends z.ZodError ? true : false = T_CauseType extends z.ZodError ? true : false> extends internalUtils.AbstractError<never, Tokens_Error.Context> {
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
    namespace Tokens_Error {
        interface Context {
            /** Name for the schema, used in error messages. */
            name: string;
            /** Location where schema is being tested. */
            location: string;
        }
    }
}
export {};
//# sourceMappingURL=AbstractTokens.d.ts.map