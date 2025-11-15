/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { ColourLevels_Extended, ColourNameGeneric } from './@types.d.ts';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> extends AbstractTokens<Tokens_Colour.Data<T_ColourName, T_ExtraLevels>> {
    protected readonly extraLevels: readonly T_ExtraLevels[];
    readonly data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;
    protected readonly allNames: readonly ColourNameGeneric<T_ColourName>[];
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], input: Tokens_Colour.InputParam<T_ColourName, T_ExtraLevels>);
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(): Promise<void>;
    toJSON(): Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): Tokens_Colour.Data<T_ColourName, T_ExtraLevels> extends infer T extends object ? { [K in keyof T]: T_Return; } : never;
}
/**
 * Utilities for the {@link Tokens_Colour} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Colour {
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {
        [N in ColourNameGeneric<T_ColourName>]: Tokens_Colour_ShadeMap<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {
        [N in ColourNameGeneric<T_ColourName>]?: Tokens_Colour_ShadeMap.InputParam<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourLevels_Extended> = {
        [N in ColourNameGeneric<T_ColourName>]: Tokens_Colour_ShadeMap.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
}
//# sourceMappingURL=Tokens_Colour.d.ts.map