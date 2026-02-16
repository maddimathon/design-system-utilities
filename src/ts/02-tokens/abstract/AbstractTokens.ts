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
    internal as buildUtils_internal,
} from '@maddimathon/build-utilities';

import {
    JsonToScss,
} from '@maddimathon/utility-sass';

import type { RecursiveRecord } from '../../01-utilities/@types.js';


/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
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
        '150',
        '250',
        '350',
        '450',
        '550',
        '650',
        '750',
        '850',
    ] as const;

    public readonly tokenLevels = AbstractTokens.tokenLevels;


    constructor () {
    }

    /**
     * The value of this token.
     * 
     * @since 0.1.0-alpha
     */
    public abstract get data(): T_DataType;

    /**
     * Converts this token or group to a json-compatible object. NOT W3C tokens
     * -- this is meant to be more human-readable.
     * 
     * Uses {@link AbstractTokens.schemaJSON}.
     * 
     * @since 0.1.0-alpha
     */
    public abstract toJSON(): AbstractTokens.JsonReturn;

    /**
     * Converts this token or group to the values used when converting to scss.
     * 
     * @since 0.1.0-alpha
     */
    public abstract toScssVars(): AbstractTokens.ScssReturn;

    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     * 
     * @since 0.1.0-alpha
     */
    public toScss(): string {
        const value = JsonToScss.convert( this.toScssVars() ) || '()';
        return '$vars: ' + value;
    }

    /**
     * The working value of this object.
     * 
     * @since 0.1.0-alpha
     */
    public valueOf(): T_DataType {
        return this.data;
    }
}


/**
 * Utilities for the {@link AbstractTokens} class.
 * 
 * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
     */
    export class Tokens_Error<
        T_CauseType extends unknown | undefined = never,
    > extends buildUtils_internal.AbstractError<never, Tokens_Error.Context> {

        public override readonly name: string;

        public constructor (
            message: string,
            public override readonly context: Tokens_Error.Context,
            protected readonly opts: {
                cause: T_CauseType;
            },
        ) {
            super(
                message,
                null,
                opts,
            );

            this.name = 'Tokens_Error';
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
     * @since 0.1.0-alpha
     */
    export namespace Tokens_Error {

        /**
         * Object used to give context for where this error was triggered.
         * 
         * @since 0.1.0-alpha
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