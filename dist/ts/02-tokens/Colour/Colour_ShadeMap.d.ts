/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0.draft
 * @license MIT
 */
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/ShadeMap_Shade.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Colour_ShadeMap<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> extends AbstractTokens<Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>> {
    protected readonly allNames: readonly T_ColourName[];
    protected readonly extraLevels: readonly T_ExtraLevels[];
    protected readonly name: T_ColourName;
    readonly data: Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    constructor(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, input: Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>);
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since 0.1.0-alpha
     */
    addContrastTests(colourGroupName: T_ColourName, testMap: Tokens_Colour_ShadeMap<T_ColourName, T_ExtraLevels>): Promise<void[]>;
    toJSON(): Tokens_Colour_ShadeMap.JsonReturn<T_ColourName, T_ExtraLevels>;
    toScssVars(): {
        [K in ColourUtilities.Levels.Required | T_ExtraLevels]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Colour_ShadeMap {
    type Data<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
    };
    type InputParam<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]?: Tokens_Colour_ShadeMap_Shade.InputParam;
    };
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional> = {
        [N in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels>;
    };
    function completeMap<T_ColourName extends string, T_ExtraLevels extends ColourUtilities.Levels.Optional>(allNames: readonly T_ColourName[], extraLevels: readonly T_ExtraLevels[], name: T_ColourName, part: InputParam<T_ColourName, T_ExtraLevels>, _treatShadeAsBase?: boolean): {
        [L in ColourUtilities.Levels.Required | T_ExtraLevels]: Tokens_Colour_ShadeMap_Shade<T_ColourName, T_ExtraLevels>;
    };
    /**
     * Sample shade maps for contrast & level goals.
     */
    namespace Yardsticks {
        const base: {
            readonly '100': {
                readonly l: 100;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '300': {
                readonly l: 80;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '700': {
                readonly l: 18;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 0;
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