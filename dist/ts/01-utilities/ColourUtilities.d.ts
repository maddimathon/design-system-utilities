/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { LocalErrors } from './Errors.js';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha
 */
export declare namespace ColourUtilities {
    /**
     * A colour value in the Hex space.
     *
     * @since 0.1.0-alpha
     */
    type Value_Hex = string;
    /**
     * A colour value in the HSL space.
     *
     * @since 0.1.0-alpha
     */
    type Value_HSL = {
        h: number;
        s: number;
        l: number;
    };
    /**
     * A colour value in the RGB space.
     *
     * @since 0.1.0-alpha
     */
    type Value_RGB = {
        r: number;
        g: number;
        b: number;
    };
    /**
     * A colour value in the LCH space.
     *
     * @since 0.1.0-alpha
     */
    type Value_LCH = {
        l: number;
        c: number;
        h: number;
    };
    /**
     * Any of the single colour values.
     *
     * @since 0.1.0-alpha
     */
    type Value = Value_Hex | Value_HSL | Value_LCH | Value_RGB;
    /**
     * All of the single colour values as an object.
     *
     * @since 0.1.0-alpha
     */
    type Value_All = {
        hex: Value_Hex;
        hsl: Value_HSL;
        lch: Value_LCH;
        rgb: Value_RGB;
    };
    type Value_Generic<T_Space extends "hex" | "hsl" | "lch" | "rgb"> = T_Space extends "hex" ? string : never | T_Space extends "hsl" ? Value_HSL : never | T_Space extends "lch" ? Value_LCH : never | T_Space extends "rgb" ? Value_RGB : never;
    /**
     * Ensures a valid and complete shade object.
     */
    function validateShade(input: Value | Value_All, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_All>;
    /**
     * @since 0.1.0-alpha
     */
    function toHex(clr: Value | Value_All | {
        data: Value_All;
    }, errMaker?: LocalErrors.ConstructorFn): Value_Hex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr: Value | Value_All | {
        data: Value_All;
    }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_HSL;
    /**
     * @since 0.1.0-alpha
     */
    function toLCH(clr: Value | Value_All | {
        data: Value_All;
    }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_LCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr: Value | Value_All | {
        data: Value_All;
    }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_RGB;
    /**
     * @since 0.1.0-alpha
     */
    function mixColours(_clrA: Value | Value_All | {
        data: Value_All;
    }, _clrB: Value | Value_All | {
        data: Value_All;
    }, saturationMultiplier?: number): Promise<Value_LCH>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    function toList(clr: Exclude<Value, Value_Hex> | Value_All | {
        data: Value_All;
    }, separator: "comma" | "space", errContext: LocalErrors.Context, errMaker: LocalErrors.ConstructorFn, _defaultSpace?: Exclude<keyof Value_All, 'hex'>): string;
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace toList {
        function hsl(clr: Value_HSL | Value_All | {
            data: Value_All;
        }, separator?: "comma" | "space"): string;
        function lch(clr: Value_LCH | Value_All | {
            data: Value_All;
        }): string;
        function rgb(clr: Value_RGB | Value_All | {
            data: Value_All;
        }, separator?: "comma" | "space"): string;
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    function toString(clr: Value | Value_All | {
        data: Value_All;
    }, separator: "comma" | "space", errContext: LocalErrors.Context, errMaker: LocalErrors.ConstructorFn, _defaultSpace?: keyof Value_All): string;
    /**
     * @since 0.1.0-alpha
     */
    namespace toString {
        function hex(clr: Value_Hex | Value_All | {
            data: Value_All;
        }): string;
        function hsl(clr: Value_HSL | Value_All | {
            data: Value_All;
        }, separator?: "comma" | "space"): string;
        function lch(clr: Value_LCH | Value_All | {
            data: Value_All;
        }): string;
        function rgb(clr: Value_RGB | Value_All | {
            data: Value_All;
        }, separator?: "comma" | "space"): string;
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Async {
        /**
         * @since 0.1.0-beta.0.draft
         */
        function toHex(clr: Value | Value_All | {
            data: Value_All;
        }, errMaker?: LocalErrors.ConstructorFn): Promise<Value_Hex>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        function toHSL(clr: Value | Value_All | {
            data: Value_All;
        }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_HSL>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        function toLCH(clr: Value | Value_All | {
            data: Value_All;
        }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_LCH>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        function toRGB(clr: Value | Value_All | {
            data: Value_All;
        }, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_RGB>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        function toString(clr: Value | Value_All | {
            data: Value_All;
        }, separator: "comma" | "space", errContext: LocalErrors.Context, errMaker: LocalErrors.ConstructorFn, _defaultSpace?: keyof Value_All): Promise<string>;
    }
    /**
     * Generates a single pair of contrast test results used by the
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to ColourUtilities and renamed.
     * @internal
     */
    class ContrastTest {
        #private;
        readonly clrA: ColourUtilities.Value_All;
        readonly clrB: ColourUtilities.Value_All;
        static set standards(val: ContrastTest.Standards);
        static get standards(): ContrastTest.Standards;
        protected static cachePath: string;
        /**
         * Gets the contrast ratio for the given colours, checking the cache for
         * values first.
         */
        static test(clrA: ColourUtilities.Value_All, clrB: ColourUtilities.Value_All): number;
        readonly ratio: number;
        readonly aa: ContrastTest.SingleResult;
        readonly aaa: ContrastTest.SingleResult;
        constructor(clrA: ColourUtilities.Value_All, clrB: ColourUtilities.Value_All);
        toJSON(): ContrastTest.JSON;
        valueOf(): ContrastTest.Result;
    }
    /**
     * Utilities for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to ColourUtilities and renamed.
     * @internal
     */
    namespace ContrastTest {
        /**
         * @since 0.1.0-alpha
         */
        type JSON = Result;
        /**
         * The partialized version of the {@link ContrastTest.Schema} accepted as input.
         *
         * @since 0.1.0-alpha
         */
        type Part = Partial<Result>;
        /**
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Renamed.
         */
        type Result = {
            ratio: number;
            aa: SingleResult;
            aaa: SingleResult;
        };
        /**
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Renamed.
         */
        type SingleResult = {
            ui: boolean;
            text: boolean;
        };
        /**
         * An object defining the minimum contrast ratios required for a pass.
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Renamed.
         */
        type Standards = {
            [T in "aa" | "aaa"]: {
                [K in keyof SingleResult]: number;
            };
        };
    }
    /**
     * Utilities for dealing with shade level values.
     *
     * @since 0.1.0-beta.0.draft
     */
    namespace Levels {
        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        const converter: Readonly<{
            '100': '900';
            '150': '850';
            '200': '800';
            '250': '750';
            '300': '700';
            '350': '650';
            '400': '600';
            '450': '550';
            '500': '500';
            '550': '450';
            '600': '400';
            '650': '350';
            '700': '300';
            '750': '250';
            '800': '200';
            '850': '150';
            '900': '100';
            'black': 'white';
            'white': 'black';
        }>;
        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since 0.1.0-beta.0.draft
         */
        const optional: readonly ["350", "450", "550", "650"];
        /**
         * The shade level keys always included in maps for this system.
         *
         * @since 0.1.0-beta.0.draft
         */
        const required: readonly ["100", "150", "200", "250", "300", "400", "500", "600", "700", "750", "800", "850", "900"];
        /**
         * All possible shade levels possibly in shade maps for this system.
         *
         * @since 0.1.0-beta.0.draft
         */
        type Any = Optional | Required;
        /**
         * Shade levels that can be optionally included in shade maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Optional` type in `02-tokens/@types.d.ts`.
         * @since 0.1.0-beta.0.draft — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Optional = typeof optional[number];
        /**
         * Shade levels always included in shade maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Required` type in `02-tokens/@types.d.ts`.
         * @since 0.1.0-beta.0.draft — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Required = typeof required[number];
        /**
         * Augments a single level by the given amount, creating a new valid level.
         *
         * @since 0.1.0-beta.0.draft
         */
        function augmentor<T_AnyColourLevel extends Levels.Any>(allColourLevels: Set<T_AnyColourLevel>, level: "black" | "white" | NoInfer<T_AnyColourLevel>, levelOffset: number, minimum?: number, maximum?: number): "black" | "white" | NoInfer<T_AnyColourLevel>;
        /**
         * Gets the max level in the given array.
         *
         * @since 0.1.0-beta.0.draft
         */
        function max<T_Level extends Levels.Optional | Levels.Required>(arr: ("black" | "white" | T_Level)[]): "black" | "white" | T_Level;
        /**
         * Gets the max level in the given array.
         *
         * @since 0.1.0-beta.0.draft
         */
        function min<T_Level extends Levels.Optional | Levels.Required>(arr: ("black" | "white" | T_Level)[]): "black" | "white" | T_Level;
        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        function toDark<T_LightLevel extends "black" | "white" | Levels.Any>(lightLevel: T_LightLevel): typeof converter[T_LightLevel];
    }
}
