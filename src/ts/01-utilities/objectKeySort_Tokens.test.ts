/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import type { Test } from '@maddimathon/utility-typescript/types';
import { describe, expect, test } from '@jest/globals';
import { objectKeySort_Tokens } from './objectKeySort_Tokens.js';

const test_simpleObj = {

    in: {
        'readonly': true,
        'one': '1',
        'quinary': true,
        'primary': true,
        'tertiary': true,
        'senary': true,
        'grey': false,
        'two': '2',
        'octonary': true,
        'alt': '33',
        'three': '3',
        326832: 'number key',
        'disabled': true,
        'alphabetical': true,
        'quaternary': true,
        'gray': false,
        'secondary': true,
        'septenary': true,
        'bright': true,
    },

    out: {
        'alt': '33',
        'bright': true,
        'primary': true,
        'secondary': true,
        'tertiary': true,
        'quaternary': true,
        'quinary': true,
        'senary': true,
        'septenary': true,
        'octonary': true,

        'gray': false,
        'grey': false,

        326832: 'number key',

        'disabled': true,
        'readonly': true,

        'alphabetical': true,
        'one': '1',
        'three': '3',
        'two': '2',
    },
};

const test_nestedObj = {

    in: {
        'readonly': true,
        'one': '1',
        'quinary': true,
        'primary': true,
        'tertiary': true,
        'senary': true,
        'two': '2',
        'octonary': true,
        'three': '3',
        'grey': false,
        326832: 'number key',
        'disabled': true,
        'gray': false,
        'quaternary': true,
        'secondary': true,
        'alt': '33',
        'septenary': true,
        'bright': true,

        'alphabetical': {
            4: 'one',
            0: 'two',
            81: 'three',
            'quinary': true,
            'primary': true,
            'tertiary': true,
            'senary': true,
        },
    },

    out: {
        'alt': '33',
        'bright': true,
        'primary': true,
        'secondary': true,
        'tertiary': true,
        'quaternary': true,
        'quinary': true,
        'senary': true,
        'septenary': true,
        'octonary': true,

        'gray': false,
        'grey': false,

        326832: 'number key',

        'disabled': true,
        'readonly': true,

        'alphabetical': {
            4: 'one',
            0: 'two',
            81: 'three',
            'quinary': true,
            'primary': true,
            'tertiary': true,
            'senary': true,
        },

        'one': '1',
        'three': '3',
        'two': '2',
    },

    outRecursive: {
        'alt': '33',
        'bright': true,
        'primary': true,
        'secondary': true,
        'tertiary': true,
        'quaternary': true,
        'quinary': true,
        'senary': true,
        'septenary': true,
        'octonary': true,

        'gray': false,
        'grey': false,

        326832: 'number key',

        'disabled': true,
        'readonly': true,

        'alphabetical': {
            0: 'two',
            'primary': true,
            'tertiary': true,
            4: 'one',
            'quinary': true,
            'senary': true,
            81: 'three',
        },

        'one': '1',
        'three': '3',
        'two': '2',
    },
};

describe( 'objectKeySort_Tokens', () => {

    test( 'simple obj', () => {
        expect( objectKeySort_Tokens( test_simpleObj.in ) ).toStrictEqual( test_simpleObj.out );
        expect( objectKeySort_Tokens( test_simpleObj.in, false ) ).toStrictEqual( test_simpleObj.out );
        expect( objectKeySort_Tokens( test_simpleObj.in, true ) ).toStrictEqual( test_simpleObj.out );
    } );

    test( 'nested obj - non recursive', () => {
        expect( objectKeySort_Tokens( test_nestedObj.in ) ).toStrictEqual( test_nestedObj.out );
        expect( objectKeySort_Tokens( test_nestedObj.in, false ) ).toStrictEqual( test_nestedObj.out );
    } );

    test( 'nested obj - recursive', () => {
        expect( objectKeySort_Tokens( test_nestedObj.in, true ) ).toStrictEqual( test_nestedObj.outRecursive );
    } );
} );