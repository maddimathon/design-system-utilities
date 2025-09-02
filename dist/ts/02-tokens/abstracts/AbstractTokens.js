/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { JsonToScss } from '@maddimathon/utility-sass';
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export class AbstractTokens {
    input;
    constructor(input) {
        this.input = input;
    }
    /* # UTILITIES
     * ====================================================================== */
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
    toSCSS() {
        return JsonToScss.convert(this.export()) || '()';
    }
    valueOf() {
        return this.export();
    }
}
//# sourceMappingURL=AbstractTokens.js.map