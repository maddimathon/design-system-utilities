/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    JsonToScss,
} from '@maddimathon/utility-sass';

import type { RecursiveRecord } from '../../01-utilities/@types.js';
import { LocalErrors } from '../../01-utilities/Errors.js';


/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 * @since ___PKG_VERSION___ — Converted type param to an object.
 */
export abstract class AbstractTokens<T_Params extends {
    data: any;
    json: AbstractTokens.JsonReturn;
    scss: AbstractTokens.ScssReturn;
}> {

    public constructor () {
        this.newError = this.newError.bind( this );
        this.toJSON = this.toJSON.bind( this );
        this.toScssVars = this.toScssVars.bind( this );
        this.toScss = this.toScss.bind( this );
        this.valueOf = this.valueOf.bind( this );
    }

    /**
     * The value of this token.
     * 
     * @since 0.1.0-alpha
     */
    public abstract get data(): T_Params[ 'data' ];

    /**
     * Returns a local error object.
     * 
     * @since ___PKG_VERSION___
     */
    public newError<T_CauseType extends LocalErrors.Cause>(
        message: string,
        context: Omit<LocalErrors.Context.Class, "class">,
        opts?: undefined | {
            cause?: T_CauseType;
        },
    ): LocalErrors.TokenBuildError<T_CauseType> {
        return new LocalErrors.TokenBuildError( message, {
            class: Object.getPrototypeOf( this ).constructor,
            ...context,
        }, opts );
    }

    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     * 
     * Uses {@link AbstractTokens.schemaJSON}.
     * 
     * @since 0.1.0-alpha
     */
    public abstract toJSON(): T_Params[ 'json' ];

    /**
     * Converts this token or group to the values used when converting to scss.
     * 
     * @since 0.1.0-alpha
     */
    public abstract toScssVars(): T_Params[ 'scss' ];

    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     * 
     * @since 0.1.0-alpha
     */
    public toScss(): string {
        return JsonToScss.convert( this.toScssVars() ) || '()';
    }

    /**
     * If the `tryer` function has no params, then they are optional.
     * 
     * If the handler won't exit, then 'FAILED' is possible.
     */
    protected try<
        T_Params extends never[],
        T_Return extends unknown,
    >(
        tryer: () => T_Return,
        opts: AbstractTokens.TryOpts,
        params: never[] | undefined,
    ): T_Return;

    /**
     * If the `tryer` function *has* params, then they are required.
     */
    protected try<
        T_Params extends unknown[],
        T_Return extends unknown,
    >(
        tryer: ( ...params: T_Params ) => T_Return,
        opts: AbstractTokens.TryOpts,
        params: NoInfer<T_Params>,
    ): T_Return;

    /**
     * Runs a function, with parameters as applicable, and catches (& handles)
     * anything thrown.
     * 
     * For the asynchronous method, see {@link AbstractStage.atry}.
     *
     * Overloaded for better function param typing.
     *
     * @category Errors
     *
     * @experimental
     */
    protected try<
        T_Params extends unknown[] | never[],
        T_Return extends unknown,
    >(
        tryer: ( () => T_Return ) | ( ( ...params: T_Params ) => T_Return ),
        opts: AbstractTokens.TryOpts,
        params?: NoInfer<T_Params> | undefined,
    ): T_Return {

        try {

            return tryer( ...( params ?? [] as T_Params ) );

        } catch ( error ) {

            // throws
            if ( error instanceof LocalErrors.Abst_Error ) {
                throw error;
            }

            throw this.newError(
                opts.message,
                {
                    class: Object.getPrototypeOf( this ).constructor,
                    method: tryer.name,
                    ...opts.context,
                },
                {
                    cause: error as LocalErrors.Cause,
                },
            );
        }
    }

    /**
     * The working value of this object.
     * 
     * @since 0.1.0-alpha
     */
    public valueOf(): T_Params[ 'data' ] {
        return this.data;
    }
}


/**
 * Utilities for the {@link AbstractTokens} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace AbstractTokens {

    type JsonReturnBasic =
        | undefined
        | null
        | boolean
        | number
        | string
        | { toJSON: () => any; }
        | JsonReturnBasic[];

    export type JsonReturn =
        | JsonReturnBasic
        | RecursiveRecord<number | string, JsonReturnBasic | JsonReturn[]>
        | JsonReturn[];

    export type ScssPrimitive =
        | undefined
        | null
        | boolean
        | number
        | string
        | ScssPrimitive[];

    export type ScssReturn =
        | ScssPrimitive
        | RecursiveRecord<number | string, ScssPrimitive | ScssReturn[]>
        | ScssReturn[];

    /**
     * Options for the {@link AbstractTokens.try} method.
     * 
     * @since ___PKG_VERSION___
     */
    export interface TryOpts {
        /**
         * Message for the error if it fails.
         */
        message: string;

        context?: Partial<LocalErrors.Context.Class>;
    }
}