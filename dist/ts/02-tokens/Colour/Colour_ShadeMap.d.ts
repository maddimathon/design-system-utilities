/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { TokenLevels, TokenLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/ShadeMap_Shade.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Colour_ShadeMap<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> extends AbstractTokens<Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    protected readonly name: T_ColourName;
    readonly data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    readonly allLevels: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | T_ExtraLevels)[];
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, input: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>);
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since ___PKG_VERSION___
     */
    addContrastTests(colourGroupName: T_ColourName, testMap: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>): Promise<void[]>;
    toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): {
        [K in TokenLevels | T_ExtraLevels]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Colour_ShadeMap {
    type Data<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in TokenLevels | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
    };
    type InputParam<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in TokenLevels | T_ExtraLevels]?: Tokens_Colour_ShadeMap_Shade.InputParam;
    };
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in TokenLevels | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
    };
    function completeMap<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, part: InputParam<T_ColourName, T_ExtraLevels>): {
        [L in TokenLevels | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
    };
}
//# sourceMappingURL=Colour_ShadeMap.d.ts.map