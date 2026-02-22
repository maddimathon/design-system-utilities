/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { TokenTypes } from './@types.d.ts';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour<T_Types extends TokenTypes.Colour.TypeParams> extends AbstractTokens<{
    data: Tokens_Colour.Data<T_Types>;
    json: Tokens_Colour.JsonReturn<T_Types>;
    scss: Tokens_Colour.ScssVars<T_Types>;
}> {
    protected readonly allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>;
    protected readonly extraLevels: readonly T_Types['extraLevels'][];
    readonly data: Tokens_Colour.Data<T_Types>;
    /**
     * Allows for async building.
     */
    static build<T_Types extends TokenTypes.Colour.TypeParams>(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], input: Tokens_Colour.InputParam<T_Types>): Promise<Tokens_Colour<T_Types>>;
    protected constructor(allNames: TokenTypes.Colour.GenericNameArray<T_Types['names']>, extraLevels: readonly T_Types['extraLevels'][], data: Tokens_Colour.Data<T_Types>);
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(): Promise<void>;
    toJSON(): Tokens_Colour.JsonReturn<T_Types>;
    toScssVars(): Tokens_Colour.ScssVars<T_Types>;
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
    type Data<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade<T_Types>;
            white: Tokens_Colour_ShadeMap.Shade<T_Types>;
        };
    } & TokenTypes.Colour.NameRecord<T_Types, Tokens_Colour_ShadeMap<T_Types>>;
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_Types extends TokenTypes.Colour.TypeParams> = {
        black?: Tokens_Colour_ShadeMap.Shade.InputParam;
        white?: Tokens_Colour_ShadeMap.Shade.InputParam;
    } & TokenTypes.Colour.PartialNameRecord<T_Types, Tokens_Colour_ShadeMap.InputParam<T_Types>>;
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>;
            white: Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types>;
        };
    } & TokenTypes.Colour.NameRecord<T_Types, Tokens_Colour_ShadeMap.JsonReturn<T_Types>>;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_Types extends TokenTypes.Colour.TypeParams> = {
        $: {
            black: Tokens_Colour_ShadeMap.Shade.ScssVars;
            white: Tokens_Colour_ShadeMap.Shade.ScssVars;
        };
    } & TokenTypes.Colour.NameRecord<T_Types, Tokens_Colour_ShadeMap.ScssVars<T_Types>>;
}
