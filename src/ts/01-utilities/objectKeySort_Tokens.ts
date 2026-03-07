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

            case '$':
                return '00'.padStart( sortMaker_numLength, '0' ) + ' 00000';

            case 'alt':
            case 'bright':
                return '00'.padStart( sortMaker_numLength, '0' ) + ' ' + lcString;

            case 'primary':
                return '01'.padStart( sortMaker_numLength, '0' );

            case 'secondary':
                return '02'.padStart( sortMaker_numLength, '0' );

            case 'tertiary':
                return '03'.padStart( sortMaker_numLength, '0' );

            case 'quaternary':
                return '04'.padStart( sortMaker_numLength, '0' );

            case 'quinary':
                return '05'.padStart( sortMaker_numLength, '0' );

            case 'senary':
                return '06'.padStart( sortMaker_numLength, '0' );

            case 'septenary':
                return '07'.padStart( sortMaker_numLength, '0' );

            case 'octonary':
                return '08'.padStart( sortMaker_numLength, '0' );

            case 'gray':
            case 'grey':
                return '09'.padStart( sortMaker_numLength, '0' );

            case 'active':
            case 'focus':
            case 'hover':
            case 'visited':
                return 'A'.padStart( sortMaker_numLength, 'A' ) + '01 ' + lcString;

            case 'disabled':
            case 'readonly':
                return 'A'.padStart( sortMaker_numLength, 'A' ) + '02 ' + lcString;
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