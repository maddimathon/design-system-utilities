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
import { VariableInspector, } from '@maddimathon/utility-typescript/classes';
import { internal as buildUtils_internal, } from '@maddimathon/build-utilities';
import { JsonToScss, } from '@maddimathon/utility-sass';
/**
 * Base class for the classes used to manage tokens and token groups.
 *
 * @typeParam T_SchemaType  Type of the zod schema that defines and parses this token or group.
 * @typeParam T_ExportType  Optional. Type returned by {@link AbstractTokens.valueOf}.
 * @typeParam T_InputType   Optional. Type passed to the constructor and used to override defaults.
 * @typeParam T_JsonType    Optional. Type returned by {@link AbstractTokens.toJSON}.
 * @typeParam T_ScssType    Optional. Type returned by {@link AbstractTokens.toScssVars}.
 *
 * @since 0.1.0-alpha.draft
 */
export class AbstractTokens {
    input;
    /**
     * Whether the error map has been set by {@link AbstractTokens.constructor}.
     *
     * @since 0.1.0-alpha.draft
     */
    static #zodErrorMapSet = false;
    /**
     * A custom error handler to use with Zod schemas.
     *
     * @since 0.1.0-alpha.draft
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
    /**
     * Defines {@link AbstractTokens.input} and sets the Zod error map, if
     * applicable.
     *
     * @since 0.1.0-alpha.draft
     */
    constructor(input) {
        this.input = input;
        if (!AbstractTokens.#zodErrorMapSet) {
            z.setErrorMap(AbstractTokens.customErrorMap);
        }
    }
    /* # UTILITIES
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
     * @since 0.1.0-alpha.draft
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
    /**
     * Uses {@link AbstractTokens.toScssVars} to convert this token to a scss
     * string.
     *
     * @since 0.1.0-alpha.draft
     */
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
    /**
     * Used to throw errors while compiling the tokens.
     *
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
     */
    (function (Tokens_Error) {
        ;
    })(Tokens_Error = AbstractTokens.Tokens_Error || (AbstractTokens.Tokens_Error = {}));
    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     *
     * @param obj     Object to flatten.
     * @param prefix  Optional. String used to prefix the flattened keys.
     * @param suffix  Optional. String used to suffix the flattened keys.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectFlatten(obj, prefix, suffix) {
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
            const flatValue = AbstractTokens.objectFlatten(value, key, suffix);
            for (const t_flat_childKey in flatValue) {
                const _flat_childKey = t_flat_childKey;
                if (typeof flatValue[_flat_childKey] !== 'undefined') {
                    flat[t_flat_childKey] = flatValue[_flat_childKey];
                }
            }
        }
        return flat;
    }
    AbstractTokens.objectFlatten = objectFlatten;
    /**
     * Takes an array of keys and a callback function to easily construct a
     * typed object.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectGenerator(keys, mapper) {
        // @ts-expect-error
        let obj = {};
        for (const key of keys) {
            obj[key] = mapper(key);
        }
        return obj;
    }
    AbstractTokens.objectGenerator = objectGenerator;
    /**
     * A utility to map the values of an object using a callback function.
     *
     * @param obj     The object to map.
     * @param mapper  The callback function used to define new values.
     *
     * @since 0.1.0-alpha.draft
     */
    function objectMap(obj, mapper) {
        // @ts-expect-error
        let mapped = {};
        for (const t_key in obj) {
            const key = t_key;
            mapped[key] = mapper(key, obj[key]);
        }
        return mapped;
    }
    AbstractTokens.objectMap = objectMap;
    /**
     * A simple rounding function to use for rounding em and rem values for
     * nicer output.
     *
     * @param num     Number to round.
     * @param factor  Optional. Number used to round the number to an inverse multiple.
     *
     * @since 0.1.0-alpha.draft
     * @source
     */
    function roundToPixel(num, factor = 16) {
        return (Math.round(num * factor) / factor);
    }
    AbstractTokens.roundToPixel = roundToPixel;
})(AbstractTokens || (AbstractTokens = {}));
//# sourceMappingURL=AbstractTokens.js.map