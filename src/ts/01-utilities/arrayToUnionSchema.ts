/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

/**
 * Takes an array of values and translates them into an appropriate ZodType.
 * 
 * @since ___PKG_VERSION___
 */
export function arrayToUnionSchema<
    T_Value extends null | z.Primitive,
>( arr: T_Value[] | readonly T_Value[] ) {

    // returns
    if ( !arr.length ) {
        return z.undefined();
    }

    const schemas = arr.map( ( value ) => {

        // return
        switch ( typeof value ) {

            case 'object':
                if ( value === null ) {
                    return z.null();
                }
                break;
        }

        return z.literal( value );
    } );

    // returns
    if ( schemas.length == 1 ) {
        return schemas[ 0 ];
    }

    type ArrayMoreThanOne = z.ZodNull | z.ZodLiteral<T_Value>;

    return z.union( schemas as [ ArrayMoreThanOne, ArrayMoreThanOne, ...ArrayMoreThanOne[] ] );
}