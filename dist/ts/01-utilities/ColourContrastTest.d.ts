/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { ColourUtilities } from './ColourUtilities.js';
/**
 * Generates a single pair of contrast test results used by the
 * {@link Tokens_Colour_ShadeMap_Shade} objects.
 *
 * @since 0.1.0-alpha
 * @internal
 */
export declare class ColourContrastTest {
    #private;
    readonly clrA: ColourUtilities.SingleShade;
    readonly clrB: ColourUtilities.SingleShade;
    static set standards(val: ColourContrastTest.TestStandards);
    static get standards(): ColourContrastTest.TestStandards;
    protected static cachePath: string;
    /**
     * Gets the contrast ratio for the given colours, checking the cache for
     * values first.
     */
    static test(clrA: ColourUtilities.SingleShade, clrB: ColourUtilities.SingleShade): number;
    /**
     * Gets the name for a colour to be used with cache files.
     */
    protected static getCacheName(clr: ColourUtilities.SingleShade): string;
    readonly ratio: number;
    readonly aa: ColourContrastTest.TestResult_Single;
    readonly aaa: ColourContrastTest.TestResult_Single;
    constructor(clrA: ColourUtilities.SingleShade, clrB: ColourUtilities.SingleShade);
    toJSON(): ColourContrastTest.JSON;
    valueOf(): ColourContrastTest.Parsed;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha
 * @internal
 */
export declare namespace ColourContrastTest {
    /**
     * An object defining the minimum contrast ratios required for a pass.
     *
     * @since 0.1.0-alpha
     */
    type TestStandards = {
        [T in "aa" | "aaa"]: {
            [K in keyof TestResult_Single]: number;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type TestResult_Single = {
        ui: boolean;
        text: boolean;
    };
    /**
     * @since 0.1.0-alpha
     */
    type TestResult = {
        ratio: number;
        aa: TestResult_Single;
        aaa: TestResult_Single;
    };
    /**
     * @since 0.1.0-alpha
     */
    type Parsed = TestResult;
    /**
     * The partialized version of the {@link ColourContrastTest.Schema} accepted as input.
     *
     * @since 0.1.0-alpha
     */
    type Part = Partial<Parsed>;
    /**
     * @since 0.1.0-alpha
     */
    type JSON = TestResult;
}
//# sourceMappingURL=ColourContrastTest.d.ts.map