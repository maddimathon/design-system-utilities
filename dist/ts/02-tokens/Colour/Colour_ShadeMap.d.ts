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
import type { TokenTypes } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour_ShadeMap<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
    data: Tokens_Colour_ShadeMap.Data<T_Types>;
    json: Tokens_Colour_ShadeMap.JsonReturn<T_Types>;
    scss: Tokens_Colour_ShadeMap.ScssVars<T_Types>;
}> {
    protected readonly allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>;
    protected readonly extraLevels: readonly T_Types['extraLevels'][];
    protected readonly name: TokenTypes.Colour.GenericName<T_Types['names']>;
    readonly data: Tokens_Colour_ShadeMap.Data<T_Types>;
    /**
     * Allows for async building.
     */
    static build<T_Types extends TokenTypes.Colour.TypeParams>(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], name: TokenTypes.Colour.GenericName<T_Types['names']>, input: Tokens_Colour_ShadeMap.InputParam<T_Types>): Promise<Tokens_Colour_ShadeMap<T_Types>>;
    protected constructor(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], name: TokenTypes.Colour.GenericName<T_Types['names']>, data: Tokens_Colour_ShadeMap.Data<T_Types>);
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(colourGroupName: TokenTypes.Colour.GenericName<T_Types['names']>, testMap: Tokens_Colour_ShadeMap<T_Types>): Promise<void[]>;
    toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_Types>;
    toScssVars(): Tokens_Colour_ShadeMap.ScssVars<T_Types>;
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Colour_ShadeMap {
    type Data<T_Types extends TokenTypes.Colour.TypeParams> = TokenTypes.Colour.LevelRecord<T_Types, Tokens_Colour_ShadeMap.Shade<T_Types>>;
    type InputParam<T_Types extends TokenTypes.Colour.TypeParams> = TokenTypes.Colour.PartialLevelRecord<T_Types, Tokens_Colour_ShadeMap.Shade.InputParam>;
    type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = TokenTypes.Colour.LevelRecord<T_Types, Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>>;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_Types extends TokenTypes.Colour.TypeParams> = TokenTypes.Colour.LevelRecord<T_Types, Tokens_Colour_ShadeMap.Shade.ScssVars>;
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    class Shade<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
        data: Shade.Data;
        json: Shade.JsonReturn<T_Types>;
        scss: Shade.ScssVars;
    }> {
        protected readonly allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>;
        protected readonly extraLevels: readonly T_Types['extraLevels'][];
        protected readonly shadeName: "black" | "white" | TokenTypes.Colour.GenericName<T_Types['names']>;
        protected readonly thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_Types['extraLevels'];
        readonly data: Shade.Data;
        readonly contrast: Shade.Contrast<T_Types>;
        /**
         * Allows for async building.
         */
        static build<T_Types extends TokenTypes.Colour.TypeParams>(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], shadeName: "black" | "white" | TokenTypes.Colour.GenericName<T_Types['names']>, thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_Types['extraLevels'], input: Shade.InputParam): Promise<Shade<T_Types>>;
        protected constructor(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], shadeName: "black" | "white" | TokenTypes.Colour.GenericName<T_Types['names']>, thisLevel: "black" | "white" | ColourUtilities.Levels.Required | T_Types['extraLevels'], data: Shade.Data, contrast: Shade.Contrast<T_Types>);
        /**
         * Adds the given shade to this shade's contrast results.
         *
         * @since 0.1.0-alpha
         */
        addContrastTest<T_TestColourName extends TokenTypes.Colour.GenericName<T_Types['names']>, T_TestColourLevel extends ColourUtilities.Levels.Required | T_Types['extraLevels']>(colourGroupName: T_TestColourName, level: T_TestColourLevel, testClr: ColourUtilities.SingleShade): Promise<void>;
        toJSON(): Shade.JsonReturn<T_Types>;
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
        type Contrast<T_Types extends TokenTypes.Colour.TypeParams> = {
            min: Contrast.Minimum<T_Types>;
            max: Contrast.Maximum<T_Types>;
            results: Contrast.Results<T_Types>;
        };
        /**
         * @since 0.1.0-alpha
         */
        namespace Contrast {
            /**
             * @since 0.1.0-alpha
             */
            type Maximum<T_Types extends TokenTypes.Colour.TypeParams> = {
                base: undefined | SingleMinMax<T_Types>;
            } & {
                [C in T_Types['names']]: undefined | SingleMinMax<T_Types>;
            };
            type Minimum_ShadeObj<T_Types extends TokenTypes.Colour.TypeParams> = {
                [K in keyof ColourUtilities.ContrastTest.SingleResult]: {
                    [S in keyof ColourUtilities.ContrastTest.Standards]: undefined | SingleMinMax<T_Types>;
                };
            };
            /**
             * @since 0.1.0-alpha
             */
            type Minimum<T_Types extends TokenTypes.Colour.TypeParams> = {
                base: Minimum_ShadeObj<T_Types>;
            } & {
                [C in T_Types['names']]: Minimum_ShadeObj<T_Types>;
            };
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to {@link Shade.Contrast} and renamed.
             */
            type Results<T_Types extends TokenTypes.Colour.TypeParams> = {
                base: Results.LevelsMap<T_Types>;
            } & {
                [C in T_Types['names']]: Results.LevelsMap<T_Types>;
            };
            /**
             * @since 0.1.1-alpha.1.draft
             */
            namespace Results {
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                type LevelsMap<T_Types extends TokenTypes.Colour.TypeParams> = {
                    [L in ColourUtilities.Levels.Required]: undefined | ColourUtilities.ContrastTest.Result;
                } & {
                    [L in T_Types['extraLevels']]: undefined | ColourUtilities.ContrastTest.Result;
                };
            }
            /**
             * @since 0.1.0-alpha
             */
            type SingleMinMax<T_Types extends TokenTypes.Colour.TypeParams> = {
                name: T_Types['names'];
                level: ColourUtilities.Levels.Required | T_Types['extraLevels'];
                ratio: number;
            };
        }
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
        type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = ColourUtilities.Value_All & {
            contrast: Contrast<T_Types>;
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        type ScssVars = string;
    }
    /**
     * Completes a shade map and converts the level values to
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     */
    function completeMap<T_Types extends TokenTypes.Colour.TypeParams>(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], name: TokenTypes.Colour.GenericName<T_Types['names']>, part: InputParam<T_Types>, errMaker: LocalErrors.ConstructorFn | null, _treatShadeAsBase?: boolean): Promise<TokenTypes.Colour.LevelRecord<T_Types, Tokens_Colour_ShadeMap.Shade<T_Types>>>;
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