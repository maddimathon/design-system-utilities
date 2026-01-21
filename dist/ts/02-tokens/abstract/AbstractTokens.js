/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import * as z from 'zod';
import { VariableInspector, } from '@maddimathon/utility-typescript/classes';
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
        '000',
        '050',
        '150',
        '250',
        '350',
        '450',
        '550',
        '650',
        '750',
        '850',
        '950',
    ];
    tokenLevels = AbstractTokens.tokenLevels;
    /**
     * Whether the error map has been set by {@link AbstractTokens.constructor}.
     *
     * @since 0.1.0-alpha
     */
    static #zodErrorMapSet = false;
    /**
     * A custom error handler to use with Zod schemas.
     *
     * @since 0.1.0-alpha
     */
    static customErrorMap(...params) {
        const [issue, ctx] = params;
        switch (issue.code) {
            case z.ZodIssueCode.invalid_type:
                return { message: `expected ${issue.expected}, but received ${issue.received}` + '\n' + VariableInspector.stringify({ received: ctx.data }) };
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
        return { message: ctx.defaultError + '\n' + VariableInspector.stringify({ received: ctx.data }) };
    }
    constructor() {
        if (!AbstractTokens.#zodErrorMapSet) {
            z.setErrorMap(AbstractTokens.customErrorMap);
        }
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
    /* # SCHEMAS
     * ====================================================================== */
    /**
     * A utility for parsing Zod schemas with appropriate error handling.
     *
     * @param schema        Schema to use when parsing the value.
     * @param value         The value to check against the schema.
     * @param context       A context object used for {@link AbstractTokens.Tokens_Error} if the parsing fails.
     * @param errorMessage  Optional. Message to use if the parsing fails.
     * @param params        Optional. Parameters passed to the Zod schema's `safeParse` method.
     *
     * @throws {AbstractTokens.Tokens_Error}  If the schema parsing fails.
     *
     * @since 0.1.0-alpha
     */
    parseSchema(schema, value, context, errorMessage = 'Error parsing Zod schema', params = {}) {
        const result = schema.safeParse(value, params);
        // throws
        if (!result.success) {
            throw new AbstractTokens.Tokens_Error(errorMessage, context, {
                cause: result.error,
                isZodError: true,
            });
        }
        return result.data;
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
            super(message, null, (opts.isZodError
                ? undefined
                : opts.cause));
            this.context = context;
            this.opts = opts;
            this.name = 'Tokens_Error' + (this.opts.isZodError ? ' (ZodError)' : '');
        }
        /**
         * Gets a detailed output message for error handlers.
         */
        getOutput() {
            const issues = this.opts.cause?.issues;
            if (!this.opts.isZodError
                || !issues.length
                || !(this.opts.cause instanceof z.ZodError)) {
                return super.getOutput();
            }
            const msgs = [];
            // msgs.push( [ [ VariableInspector.stringify( { formatted: this.opts.cause.format() } ) ] ] );
            for (const issue of issues) {
                let codeName = undefined;
                let message = [
                    ...issue.message.split('\n'),
                ];
                switch (issue.code) {
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
                if (issue.code == z.ZodIssueCode.invalid_union) {
                    msgs.push([
                        [
                            codeName + ' @ ' + this.context.location,
                            this.context.name + ' - ' + issue.path.join(' '),
                            ...message,
                        ].join('\n    '),
                    ], ...issue.unionErrors.map((_error, _i) => [_error.issues.map(_issue => _issue.message), { indent: '    ' }]));
                    continue;
                }
                msgs.push([
                    [
                        (codeName ?? 'Unknown Zod Issue') + ' @ ' + this.context.location,
                        this.context.name + ' - ' + issue.path.join(' '),
                        ...message,
                    ].join('\n    '),
                ]);
            }
            return msgs;
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
                issues: this.cause?.issues ?? undefined,
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
//# sourceMappingURL=AbstractTokens.js.map