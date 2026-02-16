/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { JsonToScss, } from '@maddimathon/utility-sass';
import { LocalErrors } from '../../01-utilities/Errors.js';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @since 0.1.0-alpha
 * @since 0.1.1-alpha.1.draft — Converted type param to an object.
 */
export class AbstractTokens {
    constructor() {
        this.newError = this.newError.bind(this);
        this.toJSON = this.toJSON.bind(this);
        this.toScssVars = this.toScssVars.bind(this);
        this.toScss = this.toScss.bind(this);
        this.valueOf = this.valueOf.bind(this);
    }
    /**
     * Returns a local error object.
     *
     * @since 0.1.1-alpha.1.draft
     */
    newError(message, context, opts) {
        return new LocalErrors.TokenBuildError(message, {
            class: Object.getPrototypeOf(this).constructor,
            ...context,
        }, opts);
    }
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha
     */
    toScss() {
        return JsonToScss.convert(this.toScssVars()) || '()';
    }
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
    try(tryer, opts, params) {
        try {
            return tryer(...(params ?? []));
        }
        catch (error) {
            // throws
            if (error instanceof LocalErrors.Abst_Error) {
                throw error;
            }
            throw this.newError(opts.message, {
                class: Object.getPrototypeOf(this).constructor,
                method: tryer.name,
                ...opts.context,
            }, {
                cause: error,
            });
        }
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
