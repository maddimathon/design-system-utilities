/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { VariableInspector } from '@maddimathon/utility-typescript/classes';
import { internal as internalUtils } from '@maddimathon/build-utilities';
import { JsonToScss } from '@maddimathon/utility-sass';
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export class AbstractTokens {
    input;
    static #zodErrorMapSet = false;
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
    constructor(input) {
        this.input = input;
        if (!AbstractTokens.#zodErrorMapSet) {
            z.setErrorMap(AbstractTokens.customErrorMap);
        }
    }
    /* # UTILITIES
     * ====================================================================== */
    parseSchema(schema, value, context, errorMessage = 'Error parsing Zod schema', params) {
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
    objectMap(obj, mapper) {
        // @ts-expect-error
        let mapped = {};
        for (const t_key in obj) {
            const key = t_key;
            mapped[key] = mapper(key, obj[key]);
        }
        return mapped;
    }
    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     */
    objectFlatten(obj, prefix, suffix) {
        const validateKey_addPrefix = (key) => {
            const _includeKeyName = key.length < 1;
            const _includePrefix = prefix && prefix.length > 0;
            // returns 
            if (!_includeKeyName) {
                return _includePrefix ? prefix : '';
            }
            return _includePrefix ? `${prefix}-${key}` : key;
        };
        const key_addSuffix = (key) => {
            const _includeSuffix = suffix && suffix.length > 0;
            // returns
            if (key.length < 1) {
                return _includeSuffix ? suffix : '';
            }
            return _includeSuffix ? `${key}-${suffix}` : key;
        };
        const flat = {};
        for (const t_key in obj) {
            const key = validateKey_addPrefix(t_key);
            const value = obj[t_key];
            // continues
            if (typeof value !== 'object' || !value) {
                flat[key_addSuffix(key)] = value;
                continue;
            }
            const flatValue = this.objectFlatten(value, key, suffix);
            for (const t_flat_childKey in flatValue) {
                const _flat_childKey = t_flat_childKey;
                if (typeof flatValue[_flat_childKey] !== 'undefined') {
                    flat[t_flat_childKey] = flatValue[_flat_childKey];
                }
            }
        }
        return flat;
    }
    roundToPixel(num, factor = 16) {
        return (Math.round(num * factor) / factor);
    }
    toScss() {
        return JsonToScss.convert(this.toScssVars()) || '()';
    }
}
/**
 * Utilities for the {@link AbstractTokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (AbstractTokens) {
    class Tokens_Error extends internalUtils.AbstractError {
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
    (function (Tokens_Error) {
        ;
    })(Tokens_Error = AbstractTokens.Tokens_Error || (AbstractTokens.Tokens_Error = {}));
})(AbstractTokens || (AbstractTokens = {}));
//# sourceMappingURL=AbstractTokens.js.map