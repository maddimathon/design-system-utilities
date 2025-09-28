/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { ColourUtilities } from '../../../01-utilities/ColourUtilities.js';
import { ColourContrastTest } from '../../../01-utilities/ColourContrastTest.js';
import type { TokenLevels, TokenLevels_Extended } from '../../@types.js';
import { AbstractTokens } from '../../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Colour_ShadeMap_Shade<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> extends AbstractTokens<Tokens_Colour_ShadeMap_Shade.Data> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    protected readonly shadeName: T_ColourName;
    protected readonly thisLevel: TokenLevels | T_ExtraLevels;
    readonly data: Tokens_Colour_ShadeMap_Shade.Data;
    contrast: Tokens_Colour_ShadeMap_Shade.Contrast<T_ColourName, T_ExtraLevels>;
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], shadeName: T_ColourName, thisLevel: TokenLevels | T_ExtraLevels, input: Tokens_Colour_ShadeMap_Shade.InputParam);
    /**
     * Adds the given shade to this shade's contrast results.
     *
     * @since ___PKG_VERSION___
     */
    addContrastTest(colourGroupName: T_ColourName, level: TokenLevels | T_ExtraLevels, testClr: ColourUtilities.SingleShade): Promise<void>;
    shadeValue(): ColourUtilities.SingleShade;
    toJSON(): Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): string;
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap_Shade} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Colour_ShadeMap_Shade {
    /**
     * @since ___PKG_VERSION___
     */
    type Data = ColourUtilities.SingleShade;
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam = ColourUtilities.SingleShade_Input;
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = ColourUtilities.Value_All & {
        contrast: Contrast<T_ColourName, T_ExtraLevels, number>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    type ContrastResults<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended, T_RatioValue extends number | undefined = number> = {
        [N in T_ColourName]?: undefined | {
            [K in TokenLevels | T_ExtraLevels]?: ColourContrastTest.Parsed;
        };
    };
    /**
     * @since ___PKG_VERSION___
     */
    type Contrast<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended, T_RatioValue extends number | undefined = number> = {
        min: Contrast.Minimum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        max: Contrast.Maximum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        results: ContrastResults<T_ColourName, T_ExtraLevels>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    namespace Contrast {
        /**
         * @since ___PKG_VERSION___
         */
        type SingleMinMax<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended, T_RatioValue extends number | undefined = number> = undefined | {
            name: T_ColourName;
            level: TokenLevels | T_ExtraLevels;
            ratio: T_RatioValue;
        };
        /**
         * @since ___PKG_VERSION___
         */
        type Maximum<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended, T_RatioValue extends number | undefined = number> = {
            [N in T_ColourName]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
        };
        /**
         * @since ___PKG_VERSION___
         */
        type Minimum<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended, T_RatioValue extends number | undefined = number> = {
            [N in T_ColourName]?: undefined | {
                [K in keyof ColourContrastTest.TestResult_Single]?: undefined | {
                    [S in keyof ColourContrastTest.TestStandards]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
                };
            };
        };
    }
}
//# sourceMappingURL=ShadeMap_Shade.d.ts.map