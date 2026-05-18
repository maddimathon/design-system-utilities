/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { TokenTypes } from './@types.d.ts';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> extends AbstractTokens<{
    data: Tokens_Themes.Data<T_ColourTypes, T_ThemeTypes>;
    json: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    scss: Tokens_Themes.ScssVars<T_ColourTypes, T_ThemeTypes>;
}> {
    protected readonly brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[];
    protected readonly contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[];
    protected readonly colours: {
        names: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']>;
    };
    protected readonly sets: {
        default: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
    } & {
        [N in T_ThemeTypes['name']]: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
    };
    /**
     * Used instead of the constructor so that it can be async.
     *
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    static build<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[], contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[], colours: {
        names: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']>;
    }, input: Tokens_Themes.InputParam<T_ColourTypes, T_ThemeTypes>): Promise<Tokens_Themes<T_ColourTypes, T_ThemeTypes>>;
    /**
     * Used to initialize multiple themes at once.
     *
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected static buildSets<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[], contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[], colours: {
        names: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']>;
    }, input: Tokens_Themes.InputParam<T_ColourTypes, T_ThemeTypes>): Promise<Tokens_Themes<T_ColourTypes, T_ThemeTypes>['sets']>;
    get data(): Tokens_Themes.Data<T_ColourTypes, T_ThemeTypes>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    readonly meta: Omit<Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>, 'brightness' | 'contrast'>;
    /**
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected constructor(brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[], contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[], colours: {
        names: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']>;
    }, sets: {
        default: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
    } & {
        [N in T_ThemeTypes['name']]: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
    });
    toJSON(): Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    toScssVars(): Tokens_Themes.ScssVars<T_ColourTypes, T_ThemeTypes>;
}
/**
 * Utilities for the {@link Tokens_Themes} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Themes {
    type Default_ThemeName = 'default';
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        default: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    } & {
        [N in T_ThemeTypes['name']]: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = never[] | Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes> | [
        Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes, 'default'>,
        ...Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>[]
    ];
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        /**
         * @since 0.1.0-beta.0.draft
         */
        _meta: Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>;
        default: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    } & {
        [N in T_ThemeTypes['name']]: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        /**
         * @since 0.1.0-beta.0.draft
         */
        _meta: Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>;
        default: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
    } & {
        [K in T_ThemeTypes['name']]: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
    };
}
