/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { internal as buildUtils_internal } from '@maddimathon/build-utilities';
import { type MessageMaker } from '@maddimathon/utility-typescript/classes';
/**
 * Utilities for errors thrown within this package.
 *
 * @since 0.1.0-alpha
 * @since 0.1.1-alpha.1.draft — Moved to global namespace and renamed.
 */
export declare namespace LocalErrors {
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type Cause = buildUtils_internal.AbstractError.Input | Error;
    /**
     * Object used to give context for where this error was triggered.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Changed to union of new types.
     */
    type Context = Context.Class | Context.Function;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    namespace Context {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        interface Basic {
            line?: string;
        }
        /**
         * @since 0.1.1-alpha.1.draft
         */
        export interface Function extends Partial<Basic> {
            function: string;
        }
        /**
         * @since 0.1.1-alpha.1.draft
         */
        export interface Class extends Partial<Basic> {
            class: string;
            method: string;
        }
        export {};
    }
    /**
     * Shape of the function for building errors.
     */
    type ConstructorFn = ((message: string, context: Context, opts?: undefined | {
        cause?: LocalErrors.Cause;
    }) => Abst_Error<any>) | ((message: string, context: Context | Partial<Context>, opts?: undefined | {
        cause?: LocalErrors.Cause;
    }) => Abst_Error<any>) | ((message: string, context?: undefined | Partial<Context>, opts?: undefined | {
        cause?: LocalErrors.Cause;
    }) => Abst_Error<any>);
    /**
     * For use within the package.
     *
     * @since 0.1.1-alpha.1.draft
     */
    abstract class Abst_Error<T_CauseType extends Cause = any> extends Error {
        readonly context: Context;
        protected readonly opts?: undefined | {
            cause?: T_CauseType;
        };
        abstract readonly name: string;
        readonly cause?: unknown;
        constructor(message: string, context: Context, opts?: undefined | {
            cause?: T_CauseType;
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
            context: Context;
            cause: unknown;
            stack: string | undefined;
            string: string;
        };
        /**
         * Overrides the default function to return a string representation of this
         * object.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString | Object.prototype.toString()}
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString | Error.prototype.toString()}
         */
        toString(): string;
        /**
         * Overrides the default function to return an object representation of this
         * object.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf | Object.prototype.valueOf()}
         */
        valueOf(): {
            name: string;
            message: string;
            context: Context;
            cause: unknown;
            stack: string | undefined;
            string: string;
        };
    }
    /**
     * Used to throw errors while in the {@link ColourUtilities} namespace.
     *
     * @since 0.1.1-alpha.1.draft
     */
    class ColourUtilitiesError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        readonly name: string;
    }
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to global namespace and renamed.
     */
    class TokenBuildError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        readonly name: string;
    }
}
//# sourceMappingURL=Errors.d.ts.map