/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { RecursiveRecord } from './@types.js';

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
export function objectFlatten<
    T_Keys extends string,
    T_Values extends any,
    T_Prefix extends string | never,
    T_Suffix extends string | never,
>(
    obj: RecursiveRecord<T_Keys, T_Values>,
    prefix?: T_Prefix,
    suffix?: T_Suffix,
) {

    const validateKey_addPrefix = ( key: string ) => {
        const _includeKeyName = key.length < 1;
        const _includePrefix = prefix && prefix.length > 0;

        // returns 
        if ( !_includeKeyName ) {
            return _includePrefix ? prefix : '';
        }

        return _includePrefix ? `${ prefix }-${ key }` : key;
    };

    const key_addSuffix = ( key: string ) => {

        const _includeSuffix = suffix && suffix.length > 0;

        // returns
        if ( key.length < 1 ) {
            return _includeSuffix ? suffix : '';
        }

        return _includeSuffix ? `${ key }-${ suffix }` : key;
    };

    const flat: { [ key: string ]: T_Values; } = {};

    for ( const t_key in obj ) {
        const key = validateKey_addPrefix( t_key );
        const value = obj[ t_key as T_Keys ];

        // continues
        if ( typeof value !== 'object' || !value ) {
            flat[ key_addSuffix( key ) ] = value as T_Values;
            continue;
        }

        const flatValue = objectFlatten(
            value as RecursiveRecord<T_Keys, T_Values>,
            key,
            suffix,
        );

        for ( const t_flat_childKey in flatValue ) {
            const _flat_childKey = t_flat_childKey as keyof typeof flatValue;

            if ( typeof flatValue[ _flat_childKey ] !== 'undefined' ) {
                flat[ t_flat_childKey ] = flatValue[ _flat_childKey ];
            }
        }
    }

    return flat;
}