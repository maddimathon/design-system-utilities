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
export var LocalErrors;
(function (LocalErrors) {
    /**
     * @since 0.1.0-beta.0.draft
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
     * @since 0.1.0-beta.0.draft
     */
    class Abst_Error extends AbstractError {
        opts;
        constructor(message, context, opts) {
            super(message, context, opts?.cause);
            this.opts = opts;
        }
    }
    LocalErrors.Abst_Error = Abst_Error;
    /**
     * Used to throw errors while in the {@link ColourUtilities} namespace.
     *
     * @since 0.1.0-beta.0.draft
     */
    class ColourUtilitiesError extends Abst_Error {
        name = 'ColourUtilitiesError';
    }
    LocalErrors.ColourUtilitiesError = ColourUtilitiesError;
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to global namespace and renamed.
     */
    class TokenBuildError extends Abst_Error {
        name = 'TokenBuildError';
    }
    LocalErrors.TokenBuildError = TokenBuildError;
})(LocalErrors || (LocalErrors = {}));
