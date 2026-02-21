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

import { mapToObjectRecursive } from './mapToObjectRecursive.js';

const simpleMap = {

    map: new Map<
        'one' | 'two' | 'three',
        number | string | boolean | ( number | string )[]
    >( [
        [ 'one', 1 ],
        [ 'two', [ 2, 2, 'hello' ] ],
        [ 'three', false ],
    ] ),

    obj: {
        one: 1,
        two: [ 2, 2, 'hello' ],
        three: false,
    },
};

const nestedMap = {

    map: new Map<
        string,
        number | string | boolean | ( number | string )[]
        | Map<
            string,
            number | string | boolean | null | ( number | string )[] | Map<string, number | string | boolean | null | ( number | string )[]>
        >
    >( [
        [ 'one', 1 ],
        [ 'two', [ 2, 2, 'hello' ] ],

        [ 'three', new Map<
            string,
            number | string | boolean | null | ( number | string )[] | Map<string, number | string | boolean | null | ( number | string )[]>
        >( [
            [ 'aaa', 'boo', ],
            [ 'bbb', null, ],

            [ 'ccc', new Map<string, number | string | boolean | null | ( number | string )[]>( [
                [ 'last', 'one' ],
                [ 'just', [ 'kidding', '...' ] ],
            ] ), ],
        ] ) ],
    ] ),

    obj: {
        one: 1,
        two: [ 2, 2, 'hello' ],

        three: {
            aaa: 'boo',
            bbb: null,
            ccc: {
                last: 'one',
                just: [ 'kidding', '...' ],
            },
        },
    },
};

const [
    simpleMap_Converted,
    nestedMap_Converted,
] = await Promise.all( [
    mapToObjectRecursive( simpleMap.map ),
    mapToObjectRecursive( nestedMap.map ),
] );

describe( 'mapToObjectRecursive()', () => {
    test( 'simple map', () => expect( simpleMap_Converted ).toEqual( simpleMap.obj ) );
    test( 'nested map', () => expect( nestedMap_Converted ).toEqual( nestedMap.obj ) );
} );
