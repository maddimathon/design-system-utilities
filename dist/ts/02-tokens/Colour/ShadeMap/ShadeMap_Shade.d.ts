/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.10
 * @license MIT
 */
import { ColourUtilities } from '../../../01-utilities/ColourUtilities.js';
import { ColourContrastTest } from '../../../01-utilities/ColourContrastTest.js';
import type { ColourLevels, ColourLevels_Extended } from '../../@types.js';
import { AbstractTokens } from '../../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour_ShadeMap_Shade<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> extends AbstractTokens<Tokens_Colour_ShadeMap_Shade.Data> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    protected readonly shadeName: T_ColourName;
    protected readonly thisLevel: ColourLevels | T_ExtraLevels;
    readonly data: Tokens_Colour_ShadeMap_Shade.Data;
    contrast: Tokens_Colour_ShadeMap_Shade.Contrast<T_ColourName, T_ExtraLevels>;
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], shadeName: T_ColourName, thisLevel: ColourLevels | T_ExtraLevels, input: Tokens_Colour_ShadeMap_Shade.InputParam);
    /**
     * Adds the given shade to this shade's contrast results.
     *
     * @since 0.1.0-alpha
     */
    addContrastTest(colourGroupName: T_ColourName, level: ColourLevels | T_ExtraLevels, testClr: ColourUtilities.SingleShade): Promise<void>;
    shadeValue(): ColourUtilities.SingleShade;
    toJSON(): Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): string;
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap_Shade} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Colour_ShadeMap_Shade {
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
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = ColourUtilities.Value_All & {
        contrast: Contrast<T_ColourName, T_ExtraLevels, number>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type ContrastResults<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {
        [N in T_ColourName]?: undefined | {
            [K in ColourLevels | T_ExtraLevels]?: ColourContrastTest.Parsed;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type Contrast<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended, T_RatioValue extends number | undefined = number> = {
        min: Contrast.Minimum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        max: Contrast.Maximum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        results: ContrastResults<T_ColourName, T_ExtraLevels>;
    };
    /**
     * @since 0.1.0-alpha
     */
    namespace Contrast {
        /**
         * @since 0.1.0-alpha
         */
        type SingleMinMax<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended, T_RatioValue extends number | undefined = number> = undefined | {
            name: 'base' | T_ColourName;
            level: ColourLevels | T_ExtraLevels;
            ratio: T_RatioValue;
        };
        /**
         * @since 0.1.0-alpha
         */
        type Maximum<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended, T_RatioValue extends number | undefined = number> = {
            [N in 'base' | T_ColourName]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
        };
        /**
         * @since 0.1.0-alpha
         */
        type Minimum<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended, T_RatioValue extends number | undefined = number> = {
            [N in 'base' | T_ColourName]?: undefined | {
                [K in keyof ColourContrastTest.TestResult_Single]?: undefined | {
                    [S in keyof ColourContrastTest.TestStandards]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
                };
            };
        };
    }
}
//# sourceMappingURL=ShadeMap_Shade.d.ts.map