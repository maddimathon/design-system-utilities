/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectKeySort } from '@maddimathon/utility-typescript';

/**
 * Sorts a record according to its keys and returns a sorted copy.
 * 
 * @since ___PKG_VERSION___
 */
export function objectKeySort_Tokens<T_Obj extends Record<number | string, any>>(
    obj: T_Obj,
    recursive: boolean = false,
) {
    return objectKeySort<T_Obj>(
        obj,
        recursive,
        objectKeySort_Tokens.sortMaker,
    );
}

export namespace objectKeySort_Tokens {
    const sortMaker_numLength = 10;

    export function sortMaker( key: number | string ): string {
        const lcString = String( key ).toLowerCase();

        // returns on match
        switch ( lcString ) {

            case 'bright':
                return '0'.padStart( sortMaker_numLength, '0' );

            case 'primary':
                return '1'.padStart( sortMaker_numLength, '0' );

            case 'secondary':
                return '2'.padStart( sortMaker_numLength, '0' );

            case 'tertiary':
                return '3'.padStart( sortMaker_numLength, '0' );

            case 'quaternary':
                return '4'.padStart( sortMaker_numLength, '0' );

            case 'quinary':
                return '5'.padStart( sortMaker_numLength, '0' );

            case 'senary':
                return '6'.padStart( sortMaker_numLength, '0' );

            case 'septenary':
                return '7'.padStart( sortMaker_numLength, '0' );

            case 'octonary':
                return '8'.padStart( sortMaker_numLength, '0' );

            case 'alt':
            case 'disabled':
            case 'readonly':
                return 'A'.padStart( sortMaker_numLength, 'A' ) + ' ' + lcString;

            case 'gray':
            case 'grey':
                return 'Z'.padStart( sortMaker_numLength, 'Z' ) + ' ' + lcString;
        }

        const as_num = Number( key );

        // returns a padded string
        if ( !Number.isNaN( as_num ) && String( as_num ) === key ) {
            // returns
            if ( key.length > sortMaker_numLength ) {
                return key;
            }

            return key.padStart( sortMaker_numLength, '0' );
        }

        return lcString;
    }
}