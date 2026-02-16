/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { ColourNameGeneric } from './@types.d.ts';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> extends AbstractTokens<{
    data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;
    json: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
    scss: Tokens_Colour.ScssVars<T_ColourName, T_ExtraLevels>;
}> {
    protected readonly allNames: readonly ColourNameGeneric<T_ColourName>[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    readonly data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>;
    /**
     * Allows for async building.
     */
    static build<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], input: Tokens_Colour.InputParam<T_ColourName, T_ExtraLevels>): Promise<Tokens_Colour<T_ColourName, T_ExtraLevels>>;
    protected constructor(allNames: readonly ColourNameGeneric<T_ColourName>[], extraLevels: readonly T_ExtraLevels[], data: Tokens_Colour.Data<T_ColourName, T_ExtraLevels>);
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(): Promise<void>;
    toJSON(): Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): Tokens_Colour.ScssVars<T_ColourName, T_ExtraLevels>;
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
    type Data<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        black: Tokens_Colour_ShadeMap.Shade<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
        white: Tokens_Colour_ShadeMap.Shade<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    } & {
        [N in ColourNameGeneric<T_ColourName>]: Tokens_Colour_ShadeMap<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        black?: Tokens_Colour_ShadeMap.Shade.InputParam;
        white?: Tokens_Colour_ShadeMap.Shade.InputParam;
    } & {
        [N in ColourNameGeneric<T_ColourName>]?: Tokens_Colour_ShadeMap.InputParam<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        black: Tokens_Colour_ShadeMap.Shade.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
        white: Tokens_Colour_ShadeMap.Shade.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    } & {
        [N in ColourNameGeneric<T_ColourName>]: Tokens_Colour_ShadeMap.JsonReturn<ColourNameGeneric<T_ColourName>, T_ExtraLevels>;
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        black: Tokens_Colour_ShadeMap.Shade.ScssVars;
        white: Tokens_Colour_ShadeMap.Shade.ScssVars;
    } & {
        [N in ColourNameGeneric<T_ColourName>]: Tokens_Colour_ShadeMap.ScssVars<T_ExtraLevels>;
    };
}
//# sourceMappingURL=Tokens_Colour.d.ts.map