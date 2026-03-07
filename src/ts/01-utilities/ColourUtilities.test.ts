/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Test } from '@maddimathon/utility-typescript/types';
import { describe, expect, test } from '@jest/globals';

import type { WholeTokenLevel } from '../02-tokens/@types.js';
import { ColourUtilities } from './ColourUtilities.js';


type Augmentor_WeirdlyRestrictiveLevels = typeof augmentor_weirdlyRestrictive_arr[ number ];

const augmentor_weirdlyRestrictive_arr = [
    '250',
    '650',
    '900',
] as const;

const augmentor_weirdlyRestrictive = new Set( augmentor_weirdlyRestrictive_arr );

const augmentor_anyLevels = new Set( [
    ...ColourUtilities.Levels.required,
    ...ColourUtilities.Levels.optional,
] );

const augmentor_defaultLevels = new Set( ColourUtilities.Levels.required );

const augmentor_wholeLevels = new Set( [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
] as const );

const augmentor_anyLevelsAllowed = [
    // [ input, offsetNum, output ],

    [ 'white', 50, '100' ],
    [ '100', 50, '150' ],
    [ '150', 50, '200' ],
    [ '200', 50, '250' ],
    [ '250', 50, '300' ],
    [ '300', 50, '350' ],
    [ '350', 50, '400' ],
    [ '400', 50, '450' ],
    [ '450', 50, '500' ],
    [ '500', 50, '550' ],
    [ '550', 50, '600' ],
    [ '600', 50, '650' ],
    [ '650', 50, '700' ],
    [ '700', 50, '750' ],
    [ '750', 50, '800' ],
    [ '800', 50, '850' ],
    [ '850', 50, '900' ],
    [ '900', 50, 'black' ],
    [ 'black', 50, 'black' ],

    [ 'white', -50, 'white' ],
    [ '100', -50, 'white' ],
    [ '150', -50, '100' ],
    [ '200', -50, '150' ],
    [ '250', -50, '200' ],
    [ '300', -50, '250' ],
    [ '350', -50, '300' ],
    [ '400', -50, '350' ],
    [ '450', -50, '400' ],
    [ '500', -50, '450' ],
    [ '550', -50, '500' ],
    [ '600', -50, '550' ],
    [ '650', -50, '600' ],
    [ '700', -50, '650' ],
    [ '750', -50, '700' ],
    [ '800', -50, '750' ],
    [ '850', -50, '800' ],
    [ '900', -50, '850' ],
    [ 'black', -50, '900' ],
] satisfies [
    'black' | 'white' | ColourUtilities.Levels.Any,
    number,
    'black' | 'white' | ColourUtilities.Levels.Any,
][];

const augmentor_defaultLevelsAllowed = [
    // [ input, offsetNum, output ],

    [ 'white', 50, '100' ],
    [ '100', 50, '150' ],
    [ '150', 50, '200' ],
    [ '200', 50, '250' ],
    [ '250', 50, '300' ],
    [ '300', 50, '400' ],
    [ '350', 50, '400' ],
    [ '400', 50, '500' ],
    [ '450', 50, '500' ],
    [ '500', 50, '600' ],
    [ '550', 50, '600' ],
    [ '600', 50, '700' ],
    [ '650', 50, '700' ],
    [ '700', 50, '750' ],
    [ '750', 50, '800' ],
    [ '800', 50, '850' ],
    [ '850', 50, '900' ],
    [ '900', 50, 'black' ],
    [ 'black', 50, 'black' ],

    [ 'white', -50, 'white' ],
    [ '100', -50, 'white' ],
    [ '150', -50, '100' ],
    [ '200', -50, '150' ],
    [ '250', -50, '200' ],
    [ '300', -50, '250' ],
    [ '350', -50, '300' ],
    [ '400', -50, '300' ],
    [ '450', -50, '400' ],
    [ '500', -50, '400' ],
    [ '550', -50, '500' ],
    [ '600', -50, '500' ],
    [ '650', -50, '600' ],
    [ '700', -50, '600' ],
    [ '750', -50, '700' ],
    [ '800', -50, '750' ],
    [ '850', -50, '800' ],
    [ '900', -50, '850' ],
    [ 'black', -50, '900' ],
] satisfies [
    'black' | 'white' | ColourUtilities.Levels.Any,
    number,
    'black' | 'white' | ColourUtilities.Levels.Required,
][];

const augmentor_weirdlyRestrictiveTests = [
    // [ input, offsetNum, output ],

    [ 'white', 50, 'white' ],
    [ '100', 50, '250' ],
    [ '150', 50, '250' ],
    [ '200', 50, '250' ],
    [ '250', 50, '250' ],
    [ '300', 50, '250' ],
    [ '350', 50, '250' ],
    [ '400', 50, '650' ],
    [ '450', 50, '650' ],
    [ '500', 50, '650' ],
    [ '550', 50, '650' ],
    [ '600', 50, '650' ],
    [ '650', 50, '650' ],
    [ '700', 50, '650' ],
    [ '750', 50, '900' ],
    [ '800', 50, '900' ],
    [ '850', 50, '900' ],
    [ '900', 50, 'black' ],
    [ 'black', 50, 'black' ],

    [ 'white', -50, 'white' ],
    [ '100', -50, 'white' ],
    [ '150', -50, 'white' ],
    [ '200', -50, 'white' ],
    [ '250', -50, '250' ],
    [ '300', -50, '250' ],
    [ '350', -50, '250' ],
    [ '400', -50, '250' ],
    [ '450', -50, '250' ],
    [ '500', -50, '250' ],
    [ '550', -50, '650' ],
    [ '600', -50, '650' ],
    [ '650', -50, '650' ],
    [ '700', -50, '650' ],
    [ '750', -50, '650' ],
    [ '800', -50, '650' ],
    [ '850', -50, '900' ],
    [ '900', -50, '900' ],
    [ 'black', -50, '900' ],
] satisfies [
    'black' | 'white' | ColourUtilities.Levels.Any,
    number,
    'black' | 'white' | Augmentor_WeirdlyRestrictiveLevels,
][];

const augmentor_wholeLevelsOnlyTests = [
    // [ input, offsetNum, output ],

    // [ 'white', offsetNum, output ],
    // [ '100', offsetNum, output ],
    // [ '150', offsetNum, output ],
    // [ '200', offsetNum, output ],
    // [ '250', offsetNum, output ],
    // [ '300', offsetNum, output ],
    // [ '350', offsetNum, output ],
    // [ '400', offsetNum, output ],
    // [ '450', offsetNum, output ],
    // [ '500', offsetNum, output ],
    // [ '550', offsetNum, output ],
    // [ '600', offsetNum, output ],
    // [ '650', offsetNum, output ],
    // [ '700', offsetNum, output ],
    // [ '750', offsetNum, output ],
    // [ '800', offsetNum, output ],
    // [ '850', offsetNum, output ],
    // [ '900', offsetNum, output ],
    // [ 'black', offsetNum, output ],

    [ 'white', 50, '100' ],
    [ '100', 50, '200' ],
    [ '150', 50, '200' ],
    [ '200', 50, '300' ],
    [ '250', 50, '300' ],
    [ '300', 50, '400' ],
    [ '350', 50, '400' ],
    [ '400', 50, '500' ],
    [ '450', 50, '500' ],
    [ '500', 50, '600' ],
    [ '550', 50, '600' ],
    [ '600', 50, '700' ],
    [ '650', 50, '700' ],
    [ '700', 50, '800' ],
    [ '750', 50, '800' ],
    [ '800', 50, '900' ],
    [ '850', 50, '900' ],
    [ '900', 50, 'black' ],
    [ 'black', 50, 'black' ],

    [ 'white', -50, 'white' ],
    [ '100', -50, 'white' ],
    [ '150', -50, '100' ],
    [ '200', -50, '100' ],
    [ '250', -50, '200' ],
    [ '300', -50, '200' ],
    [ '350', -50, '300' ],
    [ '400', -50, '300' ],
    [ '450', -50, '400' ],
    [ '500', -50, '400' ],
    [ '550', -50, '500' ],
    [ '600', -50, '500' ],
    [ '650', -50, '600' ],
    [ '700', -50, '600' ],
    [ '750', -50, '700' ],
    [ '800', -50, '700' ],
    [ '850', -50, '800' ],
    [ '900', -50, '800' ],
    [ 'black', -50, '900' ],
] satisfies [
    'black' | 'white' | ColourUtilities.Levels.Any,
    number,
    'black' | 'white' | WholeTokenLevel,
][];

describe( 'ColourUtilities.Levels.augmentor', () => {

    augmentor_wholeLevelsOnlyTests.forEach(
        ( [ input, offset, output ] ) => {
            test( `test 1 - whole levels only - input: ${ input } - offset: ${ offset }`, () => {

                const result = ColourUtilities.Levels.augmentor(
                    augmentor_wholeLevels,
                    input as 'black' | 'white' | WholeTokenLevel,
                    offset,
                );

                type Types = [
                    Test.Expect<Test.Exactly<typeof result, 'black' | 'white' | WholeTokenLevel>>,
                ];

                expect( result ).toBe( output );

                true as Types[ 0 ];
            } );
        }
    );

    augmentor_defaultLevelsAllowed.forEach(
        ( [ input, offset, output ] ) => {
            test( `test 2 - default levels - input: ${ input } - offset: ${ offset }`, () => {

                const result = ColourUtilities.Levels.augmentor(
                    augmentor_defaultLevels,
                    input as 'black' | 'white' | ColourUtilities.Levels.Required,
                    offset,
                );

                type Types = [
                    Test.Expect<Test.Exactly<typeof result, 'black' | 'white' | ColourUtilities.Levels.Required>>,
                ];

                expect( result ).toBe( output );

                true as Types[ 0 ];
            } );
        }
    );

    augmentor_anyLevelsAllowed.forEach(
        ( [ input, offset, output ] ) => {
            test( `test 3 - any levels - input: ${ input } - offset: ${ offset }`, () => {

                const result = ColourUtilities.Levels.augmentor(
                    augmentor_anyLevels,
                    input as 'black' | 'white' | ColourUtilities.Levels.Any,
                    offset,
                );

                type Types = [
                    Test.Expect<Test.Exactly<typeof result, 'black' | 'white' | ColourUtilities.Levels.Any>>,
                ];

                expect( result ).toBe( output );

                true as Types[ 0 ];
            } );
        }
    );

    augmentor_weirdlyRestrictiveTests.forEach(
        ( [ input, offset, output ] ) => {
            test( `test 4 - weirdly restrictive levels - input: ${ input } - offset: ${ offset }`, () => {

                const result = ColourUtilities.Levels.augmentor(
                    augmentor_weirdlyRestrictive,
                    input as 'black' | 'white' | Augmentor_WeirdlyRestrictiveLevels,
                    offset,
                );

                type Types = [
                    Test.Expect<Test.Exactly<typeof result, 'black' | 'white' | Augmentor_WeirdlyRestrictiveLevels>>,
                ];

                expect( result ).toBe( output );

                true as Types[ 0 ];
            } );
        }
    );
} );