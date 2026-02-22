/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
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
    type Value = Value_Hex | Value_HSL | Value_RGB | Value_LCH;
    /**
     * All of the single colour values as an object.
     *
     * @since 0.1.0-alpha
     */
    type Value_All = {
        hex: Value_Hex;
        hsl: Value_HSL;
        rgb: Value_RGB;
        lch: Value_LCH;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    namespace CssColours {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        const arrays: {
            readonly keywords: readonly ["currentColor", "inherit", "transparent"];
            readonly slugs: readonly ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];
            readonly systemColors: readonly ["AccentColor", "AccentColorText", "ActiveText", "ButtonBorder", "ButtonFace", "ButtonText", "Canvas", "CanvasText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "LinkText", "Mark", "MarkText", "SelectedItem", "SelectedItemText", "VisitedText"];
        };
        /**
         * These are the keywords used to reference other colour values. For
         * slugs representing web-safe colours, see
         * {@link ColourUtilities.CssColours.slugs}.
         *
         * @since 0.1.1-alpha.1.draft
         */
        export type Keyword = typeof arrays.keywords[number];
        /**
         * These are the keywords used for defined web-safe colours.
         *
         * @since 0.1.1-alpha.1.draft
         */
        export type Slug = typeof arrays.slugs[number];
        /**
         * System colour keywords, e.g., to use for forced-colors modes.
         *
         * @since 0.1.1-alpha.1.draft
         */
        export type SystemColor = typeof arrays.systemColors[number];
        /**
         * {@inheritDoc ColourUtilities.CssColours.Keyword}
         *
         * @since 0.1.1-alpha.1.draft
         */
        export const keywords: Set<"currentColor" | "inherit" | "transparent">;
        /**
         * {@inheritDoc ColourUtilities.CssColours.Slug}
         *
         * @since 0.1.1-alpha.1.draft
         */
        export const slugs: Set<"aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen">;
        /**
         * {@inheritDoc ColourUtilities.CssColours.SystemColor}
         *
         * @since 0.1.1-alpha.1.draft
         */
        export const systemColors: Set<"AccentColor" | "AccentColorText" | "ActiveText" | "ButtonBorder" | "ButtonFace" | "ButtonText" | "Canvas" | "CanvasText" | "Field" | "FieldText" | "GrayText" | "Highlight" | "HighlightText" | "LinkText" | "Mark" | "MarkText" | "SelectedItem" | "SelectedItemText" | "VisitedText">;
        export {};
    }
    /**
     * Allowed input for the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha
     * @useDeclaredType
     */
    type SingleShade_Input = Value | Value_All;
    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha
     * @useDeclaredType
     */
    type SingleShade = Value_All;
    /**
     * Ensures a valid shade object.
     */
    function validateShade(input: SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<SingleShade>;
    /**
     * @since 0.1.0-alpha
     */
    function toHex(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn): Value_Hex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_HSL;
    /**
     * @since 0.1.0-alpha
     */
    function toLCH(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_LCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Value_RGB;
    /**
     * @since 0.1.0-alpha
     */
    function mixColours(_clrA: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, _clrB: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, saturationMultiplier?: number): Promise<Value_LCH>;
    namespace toString {
        function hex(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function hsl(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function lch(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function rgb(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
    }
    /**
     * @since 0.1.1-alpha.1.draft
     */
    namespace Async {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        function toHex(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn): Promise<Value_Hex>;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        function toHSL(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_HSL>;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        function toLCH(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_LCH>;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        function toRGB(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input, errMaker?: LocalErrors.ConstructorFn, round?: boolean): Promise<Value_RGB>;
    }
    /**
     * Generates a single pair of contrast test results used by the
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to ColourUtilities and renamed.
     * @internal
     */
    class ContrastTest {
        #private;
        readonly clrA: ColourUtilities.SingleShade;
        readonly clrB: ColourUtilities.SingleShade;
        static set standards(val: ContrastTest.Standards);
        static get standards(): ContrastTest.Standards;
        protected static cachePath: string;
        /**
         * Gets the contrast ratio for the given colours, checking the cache for
         * values first.
         */
        static test(clrA: ColourUtilities.SingleShade, clrB: ColourUtilities.SingleShade): number;
        readonly ratio: number;
        readonly aa: ContrastTest.SingleResult;
        readonly aaa: ContrastTest.SingleResult;
        constructor(clrA: ColourUtilities.SingleShade, clrB: ColourUtilities.SingleShade);
        toJSON(): ContrastTest.JSON;
        valueOf(): ContrastTest.Result;
    }
    /**
     * Utilities for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to ColourUtilities and renamed.
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
         * @since 0.1.1-alpha.1.draft — Renamed.
         */
        type Result = {
            ratio: number;
            aa: SingleResult;
            aaa: SingleResult;
        };
        /**
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.1.draft — Renamed.
         */
        type SingleResult = {
            ui: boolean;
            text: boolean;
        };
        /**
         * An object defining the minimum contrast ratios required for a pass.
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.1.draft — Renamed.
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
     * @since 0.1.1-alpha.0
     */
    namespace Levels {
        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        const converter: {
            readonly '100': "900";
            readonly '150': "850";
            readonly '200': "800";
            readonly '250': "750";
            readonly '300': "700";
            readonly '350': "650";
            readonly '400': "600";
            readonly '450': "550";
            readonly '500': "500";
            readonly '550': "450";
            readonly '600': "400";
            readonly '650': "350";
            readonly '700': "300";
            readonly '750': "250";
            readonly '800': "200";
            readonly '850': "150";
            readonly '900': "100";
            readonly black: "white";
            readonly white: "black";
        };
        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since 0.1.1-alpha.0
         */
        const optional: readonly ["350", "450", "550", "650"];
        /**
         * The shade level keys always included in maps for this system.
         *
         * @since 0.1.1-alpha.0
         */
        const required: readonly ["100", "150", "200", "250", "300", "400", "500", "600", "700", "750", "800", "850", "900"];
        /**
         * Shade levels that can be optionally included in maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Optional` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Optional = typeof optional[number];
        /**
         * Shade levels always included in maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Required` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Required = typeof required[number];
        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        function toDark<T_LightLevel extends "black" | "white" | Levels.Required | Levels.Optional>(lightLevel: T_LightLevel): typeof converter[T_LightLevel];
    }
}
