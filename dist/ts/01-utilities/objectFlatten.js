/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
/**
 * Returns a single-level object record with kebab case keys based on nested
 * map keys.
 *
 * @param obj     Object to flatten.
 * @param prefix  Optional. String used to prefix the flattened keys.
 * @param suffix  Optional. String used to suffix the flattened keys.
 *
 * @since ___PKG_VERSION___
 */
export function objectFlatten(obj, prefix, suffix) {
    const validateKey_addPrefix = (key) => [
        prefix,
        String(key),
    ].filter(v => v).join('-');
    const key_addSuffix = (key) => {
        key = String(key);
        const _includeSuffix = suffix && suffix.length > 0;
        // returns
        if (key.length < 1) {
            return _includeSuffix ? suffix : '';
        }
        return _includeSuffix ? `${key}-${suffix}` : key;
    };
    const flat = {};
    for (const t_key of Object.keys(obj)) {
        const value = obj[t_key];
        const key = validateKey_addPrefix(t_key);
        // continues
        if (typeof value === 'undefined') {
            continue;
        }
        // continues
        if (typeof value !== 'object' || !value) {
            flat[key_addSuffix(key)] = value;
            continue;
        }
        const flatValue = objectFlatten(value, String(key), suffix);
        for (const t_flat_childKey of Object.keys(flatValue)) {
            const _flat_childKey = t_flat_childKey;
            if (typeof flatValue[_flat_childKey] !== 'undefined') {
                flat[t_flat_childKey] = flatValue[_flat_childKey];
            }
        }
    }
    return flat;
}
//# sourceMappingURL=objectFlatten.js.map