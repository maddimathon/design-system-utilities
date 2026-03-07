/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { objectKeySort } from '@maddimathon/utility-typescript';
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.0-beta.0.draft
 */
export function objectKeySort_Tokens(obj, recursive = false) {
    return objectKeySort(obj, recursive, objectKeySort_Tokens.sortMaker);
}
(function (objectKeySort_Tokens) {
    const sortMaker_numLength = 10;
    function sortMaker(key) {
        const lcString = String(key).toLowerCase();
        // returns on match
        switch (lcString) {
            case '$':
                return '00'.padStart(sortMaker_numLength, '0') + ' 00000';
            case 'alt':
            case 'bright':
                return '00'.padStart(sortMaker_numLength, '0') + ' ' + lcString;
            case 'primary':
                return '01'.padStart(sortMaker_numLength, '0');
            case 'secondary':
                return '02'.padStart(sortMaker_numLength, '0');
            case 'tertiary':
                return '03'.padStart(sortMaker_numLength, '0');
            case 'quaternary':
                return '04'.padStart(sortMaker_numLength, '0');
            case 'quinary':
                return '05'.padStart(sortMaker_numLength, '0');
            case 'senary':
                return '06'.padStart(sortMaker_numLength, '0');
            case 'septenary':
                return '07'.padStart(sortMaker_numLength, '0');
            case 'octonary':
                return '08'.padStart(sortMaker_numLength, '0');
            case 'gray':
            case 'grey':
                return '09'.padStart(sortMaker_numLength, '0');
            case 'active':
            case 'focus':
            case 'hover':
            case 'visited':
                return 'A'.padStart(sortMaker_numLength, 'A') + '01 ' + lcString;
            case 'disabled':
            case 'readonly':
                return 'A'.padStart(sortMaker_numLength, 'A') + '02 ' + lcString;
        }
        const as_num = Number(key);
        // returns a padded string
        if (!Number.isNaN(as_num) && String(as_num) === key) {
            // returns
            if (key.length > sortMaker_numLength) {
                return key;
            }
            return key.padStart(sortMaker_numLength, '0');
        }
        return lcString;
    }
    objectKeySort_Tokens.sortMaker = sortMaker;
})(objectKeySort_Tokens || (objectKeySort_Tokens = {}));
