/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0
 * @license MIT
 */
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { ThemeMode_ContrastOption } from './@types.d.ts';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> extends AbstractTokens<Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[];
    protected readonly contrastModes: readonly T_ThemeContrastMode[];
    protected readonly sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>>;
    /**
     * Used to initialize multiple themes at once.
     */
    protected static buildSets<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>): Promise<Tokens_Themes<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>['sets']>;
    get data(): Tokens_Themes.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], sets: {
        [N in T_ThemeName]: Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    });
    toJSON(): Tokens_Themes.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    toScssVars(): {
        [K in T_ThemeName]: ReturnType<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>['toScssVars']>;
    };
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
    type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background> | Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>[];
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        [N in T_ThemeName]: Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode[], T_ThemeContrastMode[], N, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    };
}
//# sourceMappingURL=Tokens_Themes.d.ts.map