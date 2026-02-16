/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { internal as buildUtils_internal, } from '@maddimathon/build-utilities';
import { JsonToScss, } from '@maddimathon/utility-sass';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 */
export class AbstractTokens {
    static tokenLevels = [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
    ];
    static tokenLevels_extraOptions = [
        '150',
        '250',
        '350',
        '450',
        '550',
        '650',
        '750',
        '850',
    ];
    tokenLevels = AbstractTokens.tokenLevels;
    constructor() {
    }
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha
     */
    toScss() {
        const value = JsonToScss.convert(this.toScssVars()) || '()';
        return '$vars: ' + value;
    }
    /**
     * The working value of this object.
     *
     * @since 0.1.0-alpha
     */
    valueOf() {
        return this.data;
    }
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha
 */
(function (AbstractTokens) {
    /* ERRORS
     * ====================================================================== */
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha
     */
    class Tokens_Error extends buildUtils_internal.AbstractError {
        context;
        opts;
        name;
        constructor(message, context, opts) {
            super(message, null, opts);
            this.context = context;
            this.opts = opts;
            this.name = 'Tokens_Error';
        }
        /**
         * The object shape used when converting to JSON.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description | JSON.stringify}
         */
        toJSON() {
            const json = {
                name: this.name,
                message: this.message,
                context: this.context,
                cause: this.cause,
                stack: this.stack,
                string: this.toString(),
            };
            return json;
        }
    }
    AbstractTokens.Tokens_Error = Tokens_Error;
    /**
     * Utilities for the {@link AbstractTokens.Tokens_Error} class.
     *
     * @since 0.1.0-alpha
     */
    (function (Tokens_Error) {
        ;
    })(Tokens_Error = AbstractTokens.Tokens_Error || (AbstractTokens.Tokens_Error = {}));
})(AbstractTokens || (AbstractTokens = {}));
