/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { objectKeySort } from './objectKeySort.js';
/**
 * Sorts a record according to its keys and returns a sorted copy.
 *
 * @since 0.1.1-alpha.1.draft
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
            case 'bright':
                return '0'.padStart(sortMaker_numLength, '0');
            case 'primary':
                return '1'.padStart(sortMaker_numLength, '0');
            case 'secondary':
                return '2'.padStart(sortMaker_numLength, '0');
            case 'tertiary':
                return '3'.padStart(sortMaker_numLength, '0');
            case 'quaternary':
                return '4'.padStart(sortMaker_numLength, '0');
            case 'quinary':
                return '5'.padStart(sortMaker_numLength, '0');
            case 'senary':
                return '6'.padStart(sortMaker_numLength, '0');
            case 'septenary':
                return '7'.padStart(sortMaker_numLength, '0');
            case 'octonary':
                return '8'.padStart(sortMaker_numLength, '0');
            case 'alt':
            case 'disabled':
            case 'readonly':
                return 'A'.padStart(sortMaker_numLength, 'A') + ' ' + lcString;
            case 'gray':
            case 'grey':
                return 'Z'.padStart(sortMaker_numLength, 'Z') + ' ' + lcString;
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
