/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { ColourLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Colour_TEMPLATE<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> extends AbstractTokens<Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels>> {
    protected readonly names: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    readonly data: Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels>;
    constructor(names: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], input: Tokens_Colour_TEMPLATE.InputParam<T_ColourName, T_ExtraLevels>);
    toJSON(): Tokens_Colour_TEMPLATE.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): {
        [K in keyof Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels>]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_Colour_TEMPLATE} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Colour_TEMPLATE {
    /**
     * @since ___PKG_VERSION___
     */
    type Data<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {};
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {};
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {};
}
//# sourceMappingURL=Colour_@TEMPLATE.d.ts.map