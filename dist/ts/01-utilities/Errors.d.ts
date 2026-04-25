/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractError } from '@maddimathon/build-utilities/internal';
/**
 * Utilities for errors thrown within this package.
 *
 * @since 0.1.0-alpha
 * @since 0.1.0-beta.0.draft — Moved to global namespace and renamed.
 */
export declare namespace LocalErrors {
    /**
     * @since 0.1.0-beta.0.draft
     */
    type Cause = AbstractError.Input | Error;
    /**
     * Object used to give context for where this error was triggered.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Changed to union of new types.
     */
    type Context = Context.Class | Context.Function;
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Context {
        /**
         * @since 0.1.0-beta.0.draft
         */
        interface Basic {
            line?: string;
        }
        /**
         * @since 0.1.0-beta.0.draft
         */
        export interface Function extends Partial<Basic> {
            function: string;
        }
        /**
         * @since 0.1.0-beta.0.draft
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
     * @since 0.1.0-beta.0.draft
     */
    abstract class Abst_Error<T_CauseType extends Cause = any> extends AbstractError {
        protected readonly opts?: undefined | {
            cause?: undefined | T_CauseType;
        };
        abstract readonly name: string;
        constructor(message: string, context: Context, opts?: undefined | {
            cause?: undefined | T_CauseType;
        });
    }
    /**
     * Used to throw errors while in the {@link ColourUtilities} namespace.
     *
     * @since 0.1.0-beta.0.draft
     */
    class ColourUtilitiesError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        readonly name: string;
    }
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to global namespace and renamed.
     */
    class TokenBuildError<T_CauseType extends Cause> extends Abst_Error<T_CauseType> {
        readonly name: string;
    }
}
