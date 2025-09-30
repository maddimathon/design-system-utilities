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
    T_Keys extends number | string,
    T_Values extends any,
>(
    obj: RecursiveRecord<T_Keys, T_Values>,
    prefix?: string,
    suffix?: string,
): { [ key: string ]: T_Values; } {

    const validateKey_addPrefix = ( key: number | string ): string => [
        prefix,
        String( key ),
    ].filter( v => v ).join( '-' );

    const key_addSuffix = ( key: number | string ): string => {
        key = String( key );
        const _includeSuffix = suffix && suffix.length > 0;

        // returns
        if ( key.length < 1 ) {
            return _includeSuffix ? suffix : '';
        }

        return _includeSuffix ? `${ key }-${ suffix }` : key;
    };

    const flat: { [ key: string ]: T_Values; } = {};

    for ( const t_key of Object.keys( obj ) ) {
        const value = obj[ t_key as T_Keys ] as undefined | T_Values;
        const key = validateKey_addPrefix( t_key );

        // continues
        if ( typeof value === 'undefined' ) {
            continue;
        }

        // continues
        if ( typeof value !== 'object' || !value ) {
            flat[ key_addSuffix( key ) ] = value;
            continue;
        }

        const flatValue = objectFlatten(
            value as RecursiveRecord<T_Keys, T_Values>,
            String( key ),
            suffix,
        );

        for ( const t_flat_childKey of Object.keys( flatValue ) ) {
            const _flat_childKey = t_flat_childKey as keyof typeof flatValue;

            if ( typeof flatValue[ _flat_childKey ] !== 'undefined' ) {
                flat[ t_flat_childKey ] = flatValue[ _flat_childKey ];
            }
        }
    }

    return flat;
}