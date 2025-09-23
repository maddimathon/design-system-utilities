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

import { VariableInspector, type MessageMaker } from '@maddimathon/utility-typescript/classes';

import { internal as internalUtils } from '@maddimathon/build-utilities';
import { JsonToScss } from '@maddimathon/utility-sass';
import type { ArrayItem } from '@maddimathon/utility-typescript/types';

type RecursiveRecord<
    T_Keys extends number | string | symbol = number | string | symbol,
    T_Values extends any = any
> = {
        [ K in T_Keys ]: T_Values | RecursiveRecord<T_Keys, T_Values>;
    };

/**
 * Base class for the classes used to construct tokens.
 * 
 * @since ___PKG_VERSION___
 */
export abstract class AbstractTokens<
    T_SystemSchema extends z.ZodTypeAny | undefined,
    T_ExportType extends object = T_SystemSchema extends undefined ? undefined : z.infer<T_SystemSchema & {}>,
    T_InputType extends number | object | string = T_SystemSchema extends undefined ? {} : Partial<z.infer<T_SystemSchema & {}>>,
    T_JsonType extends number | object | string = T_ExportType,
    T_ScssType extends number | object | string = T_ExportType,
> {

    static #zodErrorMapSet: boolean = false;

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

    public abstract get schema(): T_SystemSchema;

    constructor (
        protected readonly input: T_InputType,
    ) {

        if ( !AbstractTokens.#zodErrorMapSet ) {
            z.setErrorMap( AbstractTokens.customErrorMap );
        }
    }



    /* # UTILITIES
     * ====================================================================== */

    protected parseSchema<
        T_Schema extends z.ZodTypeAny,
        T_ValueToTest extends Parameters<T_Schema[ 'safeParse' ]>[ 0 ],
    >(
        schema: T_Schema,
        value: T_ValueToTest,

        context: ConstructorParameters<typeof AbstractTokens.Tokens_Error>[ 1 ],

        errorMessage: string = 'Error parsing Zod schema',

        params?: Parameters<T_Schema[ 'safeParse' ]>[ 1 ],
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

    protected objectMap<
        T_Object extends object,
        T_Return extends unknown,
    >(
        obj: T_Object,
        mapper: ( key: keyof T_Object, value: T_Object[ keyof T_Object ] ) => T_Return,
    ): { [ K in keyof T_Object ]: T_Return } {
        return AbstractTokens.objectMap( obj, mapper );
    }

    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     */
    protected objectFlatten<
        T_Keys extends string,
        T_Values extends any,
    >(
        obj: RecursiveRecord<T_Keys, T_Values>,
        prefix: string,
        suffix: string,
    ) {

        const validateKey_addPrefix = ( key: string ) => {
            const _includeKeyName = key.length < 1;
            const _includePrefix = prefix && prefix.length > 0;

            // returns 
            if ( !_includeKeyName ) {
                return _includePrefix ? prefix : '';
            }

            return _includePrefix ? `${ prefix }-${ key }` : key;
        };

        const key_addSuffix = ( key: string ) => {

            const _includeSuffix = suffix && suffix.length > 0;

            // returns
            if ( key.length < 1 ) {
                return _includeSuffix ? suffix : '';
            }

            return _includeSuffix ? `${ key }-${ suffix }` : key;
        };

        const flat: { [ key: string ]: T_Values; } = {};

        for ( const t_key in obj ) {
            const key = validateKey_addPrefix( t_key );
            const value = obj[ t_key as T_Keys ];

            // continues
            if ( typeof value !== 'object' || !value ) {
                flat[ key_addSuffix( key ) ] = value as T_Values;
                continue;
            }

            const flatValue = this.objectFlatten( value as RecursiveRecord<T_Keys, T_Values>, key, suffix );

            for ( const t_flat_childKey in flatValue ) {
                const _flat_childKey = t_flat_childKey as keyof typeof flatValue;

                if ( typeof flatValue[ _flat_childKey ] !== 'undefined' ) {
                    flat[ t_flat_childKey ] = flatValue[ _flat_childKey ];
                }
            }
        }

        return flat;
    }

    protected roundToPixel( num: number, factor: number = 16 ): number {
        return AbstractTokens.roundToPixel( num, factor );
    }



    /* # EXPORTS
     * ====================================================================== */

    public abstract toJSON(): T_JsonType;

    public abstract toScssVars(): T_ScssType;

    public toScss(): string {
        return JsonToScss.convert( this.toScssVars() ) || '()';
    }

    public abstract valueOf(): T_ExportType;
}

/**
 * Utilities for the {@link AbstractTokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace AbstractTokens {

    export class Tokens_Error<
        T_CauseType extends unknown | undefined = never,
        T_IsZodError extends T_CauseType extends z.ZodError ? true : false = T_CauseType extends z.ZodError ? true : false,
    > extends internalUtils.AbstractError<never, Tokens_Error.Context> {

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
                        : opts.cause as internalUtils.AbstractError.Input
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
            } satisfies internalUtils.AbstractError.JSON<Tokens_Error.Context>;

            return json;
        }
    }

    export namespace Tokens_Error {

        export interface Context {

            /** Name for the schema, used in error messages. */
            name: string;

            /** Location where schema is being tested. */
            location: string;
        };
    }

    export function objectGenerator<
        T_Keys extends number | string,
        T_Return extends unknown,
    >(
        keys: T_Keys[],
        mapper: ( key: T_Keys ) => T_Return,
    ): { [ K in T_Keys ]: T_Return; } {

        // @ts-expect-error
        let obj: { [ K in T_Keys ]: T_Return } = {};

        for ( const key of keys ) {
            obj[ key ] = mapper( key );
        }

        return obj;
    }

    export function objectMap<
        T_Object extends object,
        T_Return extends unknown,
    >(
        obj: T_Object,
        mapper: ( key: keyof T_Object, value: T_Object[ keyof T_Object ] ) => T_Return,
    ): { [ K in keyof T_Object ]: T_Return; } {

        // @ts-expect-error
        let mapped: { [ K in keyof T_Object ]: T_Return } = {};

        for ( const t_key in obj ) {
            const key = t_key as keyof T_Object;

            mapped[ key ] = mapper( key, obj[ key ] );
        }

        return mapped;
    }

    export function roundToPixel( num: number, factor: number = 16 ): number {
        return ( Math.round( num * factor ) / factor );
    }
}