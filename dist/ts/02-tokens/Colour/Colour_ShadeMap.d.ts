/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { LocalErrors } from '../../01-utilities/Errors.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour_ShadeMap<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> extends AbstractTokens<{
    data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    json: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
    scss: Tokens_Colour_ShadeMap.ScssVars<T_ExtraLevels>;
}> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    protected readonly name: T_ColourName;
    readonly data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    /**
     * Allows for async building.
     */
    static build<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, input: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>): Promise<Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>>;
    protected constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>);
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(colourGroupName: T_ColourName, testMap: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>): Promise<void[]>;
    toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): Tokens_Colour_ShadeMap.ScssVars<T_ExtraLevels>;
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Colour_ShadeMap {
    type Data<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap.Shade<T_ColourName, T_ExtraLevels>;
    };
    type InputParam<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]?: Tokens_Colour_ShadeMap.Shade.InputParam;
    };
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap.Shade.ScssVars;
    };
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    class Shade<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> extends AbstractTokens<{
        data: Shade.Data;
        json: Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
        scss: Shade.ScssVars;
    }> {
        protected readonly allNames: readonly T_ColourName[];
        protected readonly extraLevels: readonly T_ExtraLevels[];
        protected readonly shadeName: "black" | "white" | T_ColourName;
        protected readonly thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraLevels;
        readonly data: Shade.Data;
        /**
         * Allows for async building.
         */
        static build<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], shadeName: "black" | "white" | T_ColourName, thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraLevels, input: Shade.InputParam): Promise<Shade<T_ColourName, T_ExtraLevels>>;
        contrast: Shade.Contrast<T_ColourName, T_ExtraLevels>;
        protected constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], shadeName: "black" | "white" | T_ColourName, thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraLevels, data: Shade.Data);
        /**
         * Adds the given shade to this shade's contrast results.
         *
         * @since 0.1.0-alpha
         */
        addContrastTest(colourGroupName: T_ColourName, level: ColourUtilities.Levels.Required | T_ExtraLevels, testClr: ColourUtilities.SingleShade): Promise<void>;
        shadeValue(): ColourUtilities.SingleShade;
        toJSON(): Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
        toScssVars(): Shade.ScssVars;
    }
    /**
     * Utilities for the {@link Shade} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    namespace Shade {
        /**
         * @since 0.1.0-alpha
         */
        type Data = ColourUtilities.SingleShade;
        /**
         * @since 0.1.0-alpha
         */
        type InputParam = ColourUtilities.SingleShade_Input;
        /**
         * @since 0.1.0-alpha
         */
        type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = ColourUtilities.Value_All & {
            contrast: Contrast<T_ColourName, T_ExtraLevels, number>;
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        type ScssVars = string;
        /**
         * @since 0.1.0-alpha
         */
        type ContrastResults<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
            [N in T_ColourName]?: undefined | {
                [K in ColourUtilities.Levels.Required | T_ExtraLevels]?: ColourUtilities.ContrastTest.Parsed;
            };
        };
        /**
         * @since 0.1.0-alpha
         */
        type Contrast<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional, T_RatioValue extends number | undefined = number> = {
            min: Contrast.Minimum<T_ColourName, T_ExtraLevels, T_RatioValue>;
            max: Contrast.Maximum<T_ColourName, T_ExtraLevels, T_RatioValue>;
            results: ContrastResults<"black" | "white" | T_ColourName, T_ExtraLevels>;
        };
        /**
         * @since 0.1.0-alpha
         */
        namespace Contrast {
            /**
             * @since 0.1.0-alpha
             */
            type SingleMinMax<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional, T_RatioValue extends number | undefined = number> = undefined | {
                name: 'base' | T_ColourName;
                level: ColourUtilities.Levels.Required | T_ExtraLevels;
                ratio: T_RatioValue;
            };
            /**
             * @since 0.1.0-alpha
             */
            type Maximum<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional, T_RatioValue extends number | undefined = number> = {
                [N in 'base' | T_ColourName]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
            };
            /**
             * @since 0.1.0-alpha
             */
            type Minimum<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional, T_RatioValue extends number | undefined = number> = {
                [N in 'base' | T_ColourName]?: undefined | {
                    [K in keyof ColourUtilities.ContrastTest.SingleResult]?: undefined | {
                        [S in keyof ColourUtilities.ContrastTest.Standards]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
                    };
                };
            };
        }
    }
    /**
     * Completes a shade map and converts the level values to
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     */
    function completeMap<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, part: InputParam<T_ColourName, T_ExtraLevels>, errMaker: LocalErrors.ConstructorFn | null, _treatShadeAsBase?: boolean): Promise<{
        [L in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap.Shade<T_ColourName, T_ExtraLevels>;
    }>;
    /**
     * Sample shade maps for contrast & level goals.
     */
    namespace Yardsticks {
        const black: {
            readonly l: 0;
            readonly c: 0;
            readonly h: 0;
        };
        const white: {
            readonly l: 100;
            readonly c: 0;
            readonly h: 0;
        };
        const base: {
            readonly '100': {
                readonly l: 97;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '300': {
                readonly l: 78;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '700': {
                readonly l: 22;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 3;
                readonly c: 0;
                readonly h: 0;
            };
        };
        const accent: {
            readonly '100': {
                readonly l: 97;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50.5;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 4;
                readonly c: 0;
                readonly h: 0;
            };
        };
    }
}
//# sourceMappingURL=Colour_ShadeMap.d.ts.map