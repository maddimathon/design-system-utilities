/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { ThemeMode_ContrastOption, TokenLevels_Extended } from './@types.d.ts';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Themes<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string> extends AbstractTokens<Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[];
    protected readonly contrastModes: readonly T_ThemeContrastMode[];
    protected readonly sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal>;
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>>;
    /**
     * Used to initialize multiple themes at once.
     */
    protected static buildSets<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>['sets']>;
    get data(): Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal>;
    });
    toJSON(): Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal>;
    toScssVars(): {
        [K in T_ThemeName]: ReturnType<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal>['toScssVars']>;
    };
}
/**
 * Utilities for the {@link Tokens_Themes} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Themes {
    type Default_ThemeName = 'default';
    /**
     * @since 0.1.0-alpha.draft
     */
    type Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, T_Keyword_Universal>;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string> = Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal> | Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal>[];
    /**
     * @since 0.1.0-alpha.draft
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, T_Keyword_Universal>;
    };
}
//# sourceMappingURL=Tokens_Themes.d.ts.map