/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as WcagContrast from 'wcag-contrast';

import { ColourUtilities } from './ColourUtilities.js';

/**
 * Generates a single pair of contrast test results used by the
 * {@link Tokens_Colour_ShadeMap_Shade} objects.
 *
 * @since 0.1.0-alpha
 * @internal
 */
export class ColourContrastTest {

    static #standards: ColourContrastTest.TestStandards;

    public static set standards( val: ColourContrastTest.TestStandards ) {
        if ( typeof this.#standards === 'undefined' ) {
            this.#standards = val;
        }
    }

    public static get standards(): ColourContrastTest.TestStandards {

        return this.#standards ?? {
            aa: {
                ui: 3,
                text: 4.5,
            },
            aaa: {
                ui: 4.5,
                text: 7,
            },
        };
    }

    protected static cachePath: string = '.scripts/.cache/contrast';

    /**
     * Gets the contrast ratio for the given colours, checking the cache for
     * values first.
     */
    public static test(
        clrA: ColourUtilities.SingleShade,
        clrB: ColourUtilities.SingleShade,
    ): number {

        return WcagContrast.rgb(
            [ clrA.rgb.r, clrA.rgb.g, clrA.rgb.b ],
            [ clrB.rgb.r, clrB.rgb.g, clrB.rgb.b ],
        );
    }

    /**
     * Gets the name for a colour to be used with cache files.
     */
    protected static getCacheName(
        clr: ColourUtilities.SingleShade,
    ): string {
        return [ clr.rgb.r, clr.rgb.g, clr.rgb.b ].join( ' ' );
    }

    public readonly ratio: number;
    public readonly aa: ColourContrastTest.TestResult_Single;
    public readonly aaa: ColourContrastTest.TestResult_Single;

    public constructor (
        public readonly clrA: ColourUtilities.SingleShade,
        public readonly clrB: ColourUtilities.SingleShade,
    ) {
        this.ratio = ColourContrastTest.test( clrA, clrB );

        const standards = ColourContrastTest.standards;

        // @ts-expect-error - this will be filled
        const tmp_results: Omit<ColourContrastTest.TestResult, 'ratio'> = {};

        for ( const t_standard in standards ) {
            const standard = t_standard as keyof typeof standards;

            if ( typeof tmp_results[ standard ] === 'undefined' ) {
                // @ts-expect-error - this will be filled
                tmp_results[ standard ] = {};
            }

            for ( const t_testName in standards[ standard ] ) {
                const testName = t_testName as keyof typeof standards[ typeof standard ];

                tmp_results[ standard ][ testName ] = this.ratio >= standards[ standard ][ testName ];
            }
        }

        this.aa = tmp_results.aa;
        this.aaa = tmp_results.aaa;
    }

    public toJSON(): ColourContrastTest.JSON {
        return this.valueOf();
    }

    public valueOf(): ColourContrastTest.Parsed {
        return {
            ratio: this.ratio,
            aa: this.aa,
            aaa: this.aaa,
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since 0.1.0-alpha
 * @internal
 */
export namespace ColourContrastTest {

    /**
     * An object defining the minimum contrast ratios required for a pass.
     * 
     * @since 0.1.0-alpha
     */
    export type TestStandards = {
        [ T in "aa" | "aaa" ]: {
            [ K in keyof TestResult_Single ]: number;
        }
    };

    /**
     * @since 0.1.0-alpha
     */
    export type TestResult_Single = {
        ui: boolean;
        text: boolean;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type TestResult = {
        ratio: number;
        aa: TestResult_Single;
        aaa: TestResult_Single;
    };



    /* TYPES
     * ====================================================================== */

    /**
     * @since 0.1.0-alpha
     */
    export type Parsed = TestResult;

    /**
     * The partialized version of the {@link ColourContrastTest.Schema} accepted as input.
     *
     * @since 0.1.0-alpha
     */
    export type Part = Partial<Parsed>;

    /**
     * @since 0.1.0-alpha
     */
    export type JSON = TestResult;
}