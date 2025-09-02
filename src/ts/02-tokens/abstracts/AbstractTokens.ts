/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { JsonToScss } from '@maddimathon/utility-sass';

type RecursiveRecord<
    T_Keys extends number | string | symbol = number | string | symbol,
    T_Values extends any = any
> = {
        [ K in T_Keys ]: T_Values | RecursiveRecord<T_Keys, T_Values>;
    };

/**
 * Base class for the classes used to construct tokens.
 * 
 * @since ___PKG_VERSION___
 */
export abstract class AbstractTokens<
    T_ExportType extends object,
    T_InputType extends object,
    T_JsonType extends object = T_ExportType,
> {

    constructor (
        protected readonly input: T_InputType,
    ) { }



    /* # UTILITIES
     * ====================================================================== */

    protected objectMap<
        T_Object extends object,
        T_Return extends unknown,
    >(
        obj: T_Object,
        mapper: ( key: keyof T_Object, value: T_Object[ keyof T_Object ] ) => T_Return,
    ): { [ K in keyof T_Object ]: T_Return } {

        // @ts-expect-error
        let mapped: { [ K in keyof T_Object ]: T_Return } = {};

        for ( const t_key in obj ) {
            const key = t_key as keyof T_Object;

            mapped[ key ] = mapper( key, obj[ key ] );
        }

        return mapped;
    }

    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     */
    protected objectFlatten<
        T_Keys extends string,
        T_Values extends any,
    >(
        obj: RecursiveRecord<T_Keys, T_Values>,
        prefix: string,
        suffix: string,
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

            const flatValue = this.objectFlatten( value as RecursiveRecord<T_Keys, T_Values>, key, suffix );

            for ( const t_flat_childKey in flatValue ) {
                const _flat_childKey = t_flat_childKey as keyof typeof flatValue;

                if ( typeof flatValue[ _flat_childKey ] !== 'undefined' ) {
                    flat[ t_flat_childKey ] = flatValue[ _flat_childKey ];
                }
            }
        }

        return flat;
    }

    protected roundToPixel( num: number, factor: number = 16 ): number {
        return ( Math.round( num * factor ) / factor );
    }



    /* # EXPORTS
     * ====================================================================== */

    public abstract export(): T_ExportType;

    public abstract toJSON(): T_JsonType;

    public toSCSS(): string {
        return JsonToScss.convert( this.export() ) || '()';
    }

    public valueOf(): T_ExportType {
        return this.export();
    }
}