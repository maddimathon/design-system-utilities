/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { ThemeColourOption, ThemeMode_ContrastOption, TokenLevels_Extended } from './@types.d.ts';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Themes<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string> extends AbstractTokens<Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[];
    protected readonly contrastModes: readonly T_ThemeContrastMode[];
    protected readonly sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName>;
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>>;
    /**
     * Used to initialize multiple themes at once.
     */
    protected static buildSets<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>['sets']>;
    get data(): Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName>;
    });
    toJSON(): Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName>;
    toScssVars(): {
        [K in T_ThemeName]: ReturnType<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName>['toScssVars']>;
    };
}
/**
 * Utilities for the {@link Tokens_Themes} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Themes {
    type Default_ThemeName = 'default';
    /**
     * @since ___PKG_VERSION___
     */
    type Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string> = Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, ThemeColourOption<T_ColourName, T_ExtraColourLevels>> | Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>[];
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>;
    };
}
//# sourceMappingURL=Tokens_Themes.d.ts.map