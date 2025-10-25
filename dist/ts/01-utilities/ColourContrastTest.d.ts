/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { ColourUtilities } from './ColourUtilities.js';
/**
 * Generates a single pair of contrast test results used by the
 * {@link Tokens_Colour_ShadeMap_Shade} objects.
 *
 * @since 0.1.0-alpha.draft
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
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace ColourContrastTest {
    /**
     * An object defining the minimum contrast ratios required for a pass.
     *
     * @since 0.1.0-alpha.draft
     */
    type TestStandards = {
        [T in "aa" | "aaa"]: {
            [K in keyof TestResult_Single]: number;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type TestResult_Single = {
        ui: boolean;
        text: boolean;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type TestResult = {
        ratio: number;
        aa: TestResult_Single;
        aaa: TestResult_Single;
    };
    /**
     * Creates a JSON schema for this class.
     */
    const JSON: z.ZodEffects<z.ZodObject<{
        ratio: z.ZodNumber;
        aa: z.ZodObject<{
            ui: z.ZodBoolean;
            text: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            ui: boolean;
            text: boolean;
        }, {
            ui: boolean;
            text: boolean;
        }>;
        aaa: z.ZodObject<{
            ui: z.ZodBoolean;
            text: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            ui: boolean;
            text: boolean;
        }, {
            ui: boolean;
            text: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        aa: {
            ui: boolean;
            text: boolean;
        };
        aaa: {
            ui: boolean;
            text: boolean;
        };
        ratio: number;
    }, {
        aa: {
            ui: boolean;
            text: boolean;
        };
        aaa: {
            ui: boolean;
            text: boolean;
        };
        ratio: number;
    }>, {
        aa: {
            ui: boolean;
            text: boolean;
        };
        aaa: {
            ui: boolean;
            text: boolean;
        };
    }, {
        aa: {
            ui: boolean;
            text: boolean;
        };
        aaa: {
            ui: boolean;
            text: boolean;
        };
        ratio: number;
    }>;
    /**
     * @since 0.1.0-alpha.draft
     */
    type Parsed = TestResult;
    /**
     * The partialized version of the {@link ColourContrastTest.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = Partial<Parsed>;
    /**
     * @since 0.1.0-alpha.draft
     */
    type JSON = z.output<typeof JSON>;
}
//# sourceMappingURL=ColourContrastTest.d.ts.map