/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { TokenLevels_Extended } from './@types.d.ts';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Colour<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> extends AbstractTokens<Tokens_Colour.Data<T_ColourName, T_ExtraLevels>> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    readonly data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], input: Tokens_Colour.InputParam<T_ColourName, T_ExtraLevels>);
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since ___PKG_VERSION___
     */
    addContrastTests(): Promise<void>;
    toJSON(): Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): Tokens_Colour.Data<T_ColourName, T_ExtraLevels> extends infer T extends object ? { [K in keyof T]: T_Return; } : never;
}
/**
 * Utilities for the {@link Tokens_Colour} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Colour {
    /**
     * @since ___PKG_VERSION___
     */
    type Data<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in T_ColourName]: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in T_ColourName]?: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        [N in T_ColourName]: Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
    };
}
//# sourceMappingURL=Tokens_Colour.d.ts.map