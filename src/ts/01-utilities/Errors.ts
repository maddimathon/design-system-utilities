/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    internal as buildUtils_internal,
} from '@maddimathon/build-utilities';

import {
    type MessageMaker,
    VariableInspector,
} from '@maddimathon/utility-typescript';

/**
 * Utilities for errors thrown within this package.
 * 
 * @since 0.1.0-alpha
 * @since ___PKG_VERSION___ — Moved to global namespace and renamed.
 */
export namespace LocalErrors {

    /**
     * @since ___PKG_VERSION___
     */
    export type Cause = buildUtils_internal.AbstractError.Input | Error;

    /**
     * Object used to give context for where this error was triggered.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Changed to union of new types.
     */
    export type Context = Context.Class | Context.Function;

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Context {

        /**
         * @since ___PKG_VERSION___
         */
        interface Basic {
            line?: string;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export interface Function extends Partial<Basic> {
            function: string;
        }

        /**
         * @since ___PKG_VERSION___
         */
        export interface Class extends Partial<Basic> {
            class: string;
            method: string;
        }
    }

    /**
     * Shape of the function for building errors.
     */
    export type ConstructorFn =
        | ( (
            message: string,
            context: Context,
            opts?: undefined | {
                cause?: LocalErrors.Cause;
            },
        ) => Abst_Error<any> )
        | ( (
            message: string,
            context: Context | Partial<Context>,
            opts?: undefined | {
                cause?: LocalErrors.Cause;
            },
        ) => Abst_Error<any> )
        | ( (
            message: string,
            context?: undefined | Partial<Context>,
            opts?: undefined | {
                cause?: LocalErrors.Cause;
            },
        ) => Abst_Error<any> );



    /* # CLASSES
     * ====================================================================== */

    /**
     * For use within the package.
     * 
     * @since ___PKG_VERSION___
     */
    export abstract class Abst_Error<
        T_CauseType extends Cause = any,
    > extends Error {

        public abstract override readonly name: string;

        public override readonly cause?: unknown;

        public constructor (
            message: string,
            public readonly context: Context,
            protected readonly opts?: undefined | {
                cause?: T_CauseType;
            },
        ) {
            super( message );

            this.cause = opts?.cause;
        }

        /**
         * Gets a detailed output message for error handlers.
         */
        public getOutput(): MessageMaker.BulkMsgs {

            const msgs: MessageMaker.BulkMsgs = [];

            if ( this.context ) {
                msgs.push( [ VariableInspector.stringify( { context: this.context } ) ] );
            }

            if ( this.cause ) {
                msgs.push( [ VariableInspector.stringify( { cause: this.cause } ) ] );
            }

            return msgs;
        }

        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        public toJSON(): {
            name: string;
            message: string;
            context: Context;
            cause: unknown;
            stack: string | undefined;
            string: string;
        } {

            return {
                name: this.name,
                message: this.message,
                context: this.context,
                cause: this.cause,
                stack: this.stack,
                string: this.toString(),
            };
        }

        /**
         * Overrides the default function to return a string representation of this
         * object.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString | Object.prototype.toString()}
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString | Error.prototype.toString()}
         */
        public override toString(): string {

            // returns
            if ( !this.stack ) {

                // returns
                if ( !this.name ) { return this.message; }

                // returns
                if ( !this.message ) { return this.name; }

                return `${ this.name }: ${ this.message }`;
            }

            return this.stack;
        }

        /**
         * Overrides the default function to return an object representation of this
         * object.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf | Object.prototype.valueOf()}
         */
        public override valueOf(): ReturnType<typeof this.toJSON> {
            return this.toJSON();
        }
    }

    /**
     * Used to throw errors while in the {@link ColourUtilities} namespace.
     * 
     * @since ___PKG_VERSION___
     */
    export class ColourUtilitiesError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        public override readonly name: string = 'ColourUtilitiesError';
    }

    /**
     * Used to throw errors while compiling the tokens.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to global namespace and renamed.
     */
    export class TokenBuildError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        public override readonly name: string = 'TokenBuildError';
    }
}