/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

import type {
    ArrayItem,
} from '@maddimathon/utility-typescript/types';

import type {
    MessageMaker,
} from '@maddimathon/utility-typescript/classes';

import {
    VariableInspector,
} from '@maddimathon/utility-typescript/classes';

import {
    internal as buildUtils_internal,
} from '@maddimathon/build-utilities';

import {
    JsonToScss,
} from '@maddimathon/utility-sass';

import type { RecursiveRecord } from '../../01-utilities/@types.js';


/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since ___PKG_VERSION___
 */
export abstract class AbstractTokens<T_DataType> {

    public static readonly tokenLevels = [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
    ] as const;

    public static readonly tokenLevels_extraOptions = [
        '000',
        '050',
        '150',
        '250',
        '350',
        '450',
        '550',
        '650',
        '750',
        '850',
        '950',
    ] as const;

    public readonly tokenLevels = AbstractTokens.tokenLevels;


    /**
     * Whether the error map has been set by {@link AbstractTokens.constructor}.
     * 
     * @since ___PKG_VERSION___
     */
    static #zodErrorMapSet: boolean = false;

    /**
     * A custom error handler to use with Zod schemas.
     * 
     * @since ___PKG_VERSION___
     */
    public static customErrorMap( ...params: Parameters<z.ZodErrorMap> ): ReturnType<z.ZodErrorMap> {

        const [ issue, ctx ] = params;

        switch ( issue.code ) {

            case z.ZodIssueCode.invalid_type:
                return { message: `expected ${ issue.expected }, but received ${ issue.received }` + '\n' + VariableInspector.stringify( { received: ctx.data } ) };

            case z.ZodIssueCode.custom:
            case z.ZodIssueCode.invalid_arguments:
            case z.ZodIssueCode.invalid_date:
            case z.ZodIssueCode.invalid_enum_value:
            case z.ZodIssueCode.invalid_return_type:
            case z.ZodIssueCode.invalid_string:
            case z.ZodIssueCode.invalid_union:
            case z.ZodIssueCode.not_multiple_of:
            case z.ZodIssueCode.too_big:
            case z.ZodIssueCode.too_small:
            case z.ZodIssueCode.unrecognized_keys:
                break;
        }

        return { message: ctx.defaultError + '\n' + VariableInspector.stringify( { received: ctx.data } ) };
    }


    constructor () {
        if ( !AbstractTokens.#zodErrorMapSet ) {
            z.setErrorMap( AbstractTokens.customErrorMap );
        }
    }

    /**
     * The zod schema for this group's JSON export.
     * 
     * @since ___PKG_VERSION___
     */
    public abstract get data(): T_DataType;

    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     * 
     * Uses {@link AbstractTokens.schemaJSON}.
     * 
     * @since ___PKG_VERSION___
     */
    public abstract toJSON(): AbstractTokens.JsonReturn;

    /**
     * Converts this token or group to the values used when converting to scss.
     * 
     * @since ___PKG_VERSION___
     */
    public abstract toScssVars(): AbstractTokens.ScssReturn;

    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     * 
     * @since ___PKG_VERSION___
     */
    public toScss(): string {
        const value = JsonToScss.convert( this.toScssVars() ) || '()';
        return '$vars: ' + value;
    }

    /**
     * The working value of this object.
     * 
     * @since ___PKG_VERSION___
     */
    public valueOf(): T_DataType {
        return this.data;
    }



    /* # SCHEMAS
     * ====================================================================== */

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
     * @since ___PKG_VERSION___
     */
    protected parseSchema<
        T_Schema extends z.ZodTypeAny,
        T_ValueToTest extends Parameters<T_Schema[ 'safeParse' ]>[ 0 ],
    >(
        schema: T_Schema,
        value: T_ValueToTest,

        context: AbstractTokens.Tokens_Error.Context,

        errorMessage: string = 'Error parsing Zod schema',
        params: Parameters<T_Schema[ 'safeParse' ]>[ 1 ] = {},
    ) {
        const result = schema.safeParse( value, params ) as z.SafeParseReturnType<typeof value, z.infer<T_Schema>>;

        // throws
        if ( !result.success ) {

            throw new AbstractTokens.Tokens_Error(
                errorMessage,
                context,
                {
                    cause: result.error,
                    isZodError: true,
                },
            );
        }

        return result.data satisfies z.infer<T_Schema>;
    }
}


/**
 * Utilities for the {@link AbstractTokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace AbstractTokens {

    export type JsonReturn = undefined | null | number | string
        | RecursiveRecord<
            number | string,
            any
        >;

    export type ScssPrimitive = undefined | null | number | object | string;

    export type ScssReturn = ScssPrimitive | RecursiveRecord<number | string, ScssPrimitive>;



    /* ERRORS
     * ====================================================================== */

    /**
     * Used to throw errors while compiling the tokens.
     * 
     * @since ___PKG_VERSION___
     */
    export class Tokens_Error<
        T_CauseType extends unknown | undefined = never,
        T_IsZodError extends T_CauseType extends z.ZodError ? true : false = T_CauseType extends z.ZodError ? true : false,
    > extends buildUtils_internal.AbstractError<never, Tokens_Error.Context> {

        public override readonly name: string;

        public constructor (
            message: string,
            public override readonly context: Tokens_Error.Context,
            protected readonly opts: {
                cause: T_CauseType;
                isZodError: T_IsZodError;
            },
        ) {
            super(
                message,
                null,
                (
                    opts.isZodError
                        ? undefined
                        : opts.cause as buildUtils_internal.AbstractError.Input
                ),
            );

            this.name = 'Tokens_Error' + ( this.opts.isZodError ? ' (ZodError)' : '' );
        }

        /**
         * Gets a detailed output message for error handlers.
         */
        public override getOutput(): MessageMaker.BulkMsgs {

            const issues = ( this.opts.cause as z.ZodError )?.issues;

            if (
                !this.opts.isZodError
                || !issues.length
                || !( this.opts.cause instanceof z.ZodError )
            ) {
                return super.getOutput();
            }

            const msgs: MessageMaker.BulkMsgs = [];

            // msgs.push( [ [ VariableInspector.stringify( { formatted: this.opts.cause.format() } ) ] ] );

            for ( const issue of issues ) {

                let codeName: string | undefined = undefined;

                let message: string[] = [
                    ...issue.message.split( '\n' ),
                ];

                switch ( issue.code ) {

                    case z.ZodIssueCode.custom:
                        codeName = 'Custom (Refinements)';
                        break;

                    case z.ZodIssueCode.invalid_arguments:
                        codeName = 'Invalid Arguments';
                        break;

                    case z.ZodIssueCode.invalid_date:
                        codeName = 'Invalid Date';
                        break;

                    case z.ZodIssueCode.invalid_enum_value:
                        codeName = 'Invalid Enum Value';
                        break;

                    case z.ZodIssueCode.invalid_return_type:
                        codeName = 'Invalid Return Type';
                        break;

                    case z.ZodIssueCode.invalid_string:
                        codeName = 'Invalid String';
                        break;

                    case z.ZodIssueCode.invalid_type:
                        codeName = 'Invalid Type';
                        break;

                    case z.ZodIssueCode.invalid_union:
                        codeName = 'Invalid Union';
                        break;

                    case z.ZodIssueCode.not_multiple_of:
                        codeName = 'Not a Multiple of';
                        break;

                    case z.ZodIssueCode.too_big:
                        codeName = 'Too Big';
                        break;

                    case z.ZodIssueCode.too_small:
                        codeName = 'Too Small';
                        break;

                    case z.ZodIssueCode.unrecognized_keys:
                        codeName = 'Unrecognized Keys';
                        break;
                }

                if ( issue.code == z.ZodIssueCode.invalid_union ) {

                    msgs.push(
                        [
                            [
                                codeName + ' @ ' + this.context.location,
                                this.context.name + ' - ' + issue.path.join( ' ' ),
                                ...message,
                            ].join( '\n    ' ),
                        ],

                        ...issue.unionErrors.map(
                            ( _error, _i ): ArrayItem<MessageMaker.BulkMsgs> => [ _error.issues.map( _issue => _issue.message ), { indent: '    ' } ]
                        ),
                    );
                    continue;
                }

                msgs.push(
                    [
                        [
                            ( codeName ?? 'Unknown Zod Issue' ) + ' @ ' + this.context.location,
                            this.context.name + ' - ' + issue.path.join( ' ' ),
                            ...message,
                        ].join( '\n    ' ),
                    ],
                );
            }

            return msgs;
        }

        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        public override toJSON() {

            const json = {
                name: this.name,
                message: this.message,
                context: this.context,
                issues: ( this.cause as z.ZodError )?.issues ?? undefined,
                cause: this.cause,
                stack: this.stack,
                string: this.toString(),
            } satisfies buildUtils_internal.AbstractError.JSON<Tokens_Error.Context>;

            return json;
        }
    }

    /**
     * Utilities for the {@link AbstractTokens.Tokens_Error} class.
     * 
     * @since ___PKG_VERSION___
     */
    export namespace Tokens_Error {

        /**
         * Object used to give context for where this error was triggered.
         * 
         * @since ___PKG_VERSION___
         */
        export interface Context {

            /** 
             * Name for the schema, used in error messages.
             */
            name: string;

            /** 
             * Location where schema is being tested.
             */
            location: string;
        };
    }
}