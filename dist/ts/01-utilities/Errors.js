/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { VariableInspector, } from '@maddimathon/utility-typescript';
/**
 * Utilities for errors thrown within this package.
 *
 * @since 0.1.0-alpha
 * @since 0.1.1-alpha.1.draft — Moved to global namespace and renamed.
 */
export var LocalErrors;
(function (LocalErrors) {
    /**
     * @since 0.1.1-alpha.1.draft
     */
    let Context;
    (function (Context) {
        ;
    })(Context = LocalErrors.Context || (LocalErrors.Context = {}));
    /* # CLASSES
     * ====================================================================== */
    /**
     * For use within the package.
     *
     * @since 0.1.1-alpha.1.draft
     */
    class Abst_Error extends Error {
        context;
        opts;
        cause;
        constructor(message, context, opts) {
            super(message);
            this.context = context;
            this.opts = opts;
            this.cause = opts?.cause;
        }
        /**
         * Gets a detailed output message for error handlers.
         */
        getOutput() {
            const msgs = [];
            if (this.context) {
                msgs.push([VariableInspector.stringify({ context: this.context })]);
            }
            if (this.cause) {
                msgs.push([VariableInspector.stringify({ cause: this.cause })]);
            }
            return msgs;
        }
        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        toJSON() {
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
        toString() {
            // returns
            if (!this.stack) {
                // returns
                if (!this.name) {
                    return this.message;
                }
                // returns
                if (!this.message) {
                    return this.name;
                }
                return `${this.name}: ${this.message}`;
            }
            return this.stack;
        }
        /**
         * Overrides the default function to return an object representation of this
         * object.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf | Object.prototype.valueOf()}
         */
        valueOf() { return this.toJSON(); }
    }
    LocalErrors.Abst_Error = Abst_Error;
    /**
     * Used to throw errors while in the {@link ColourUtilities} namespace.
     *
     * @since 0.1.1-alpha.1.draft
     */
    class ColourUtilitiesError extends Abst_Error {
        name = 'ColourUtilitiesError';
    }
    LocalErrors.ColourUtilitiesError = ColourUtilitiesError;
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to global namespace and renamed.
     */
    class TokenBuildError extends Abst_Error {
        name = 'TokenBuildError';
    }
    LocalErrors.TokenBuildError = TokenBuildError;
})(LocalErrors || (LocalErrors = {}));
