/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import type { CssSystemColor, ThemeMode_ContrastOption, ColourLevels_Extended, ColourLevels } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes_Set<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never> extends AbstractTokens<Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text>> {
    /** Name for this shade set. */
    protected readonly name: T_ThemeName;
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[number][];
    protected readonly contrastModes: readonly T_ThemeContrastMode[number][];
    protected readonly forcedColours: Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>;
    protected readonly modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>;
        };
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never>(name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes_Set.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, readonly NoInfer<T_ThemeBrightnessMode>[], readonly NoInfer<T_ThemeContrastMode>[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text>): Promise<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, readonly T_ThemeBrightnessMode[], readonly T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text>>;
    get data(): Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text>;
    protected constructor(
    /** Name for this shade set. */
    name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[number][], contrastModes: readonly T_ThemeContrastMode[number][], forcedColours: Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>, modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>;
        };
    });
    toJSON(): Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text>;
    toScssVars(): {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: ReturnType<Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['toScssVars']>;
        };
    };
}
/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Themes_Set {
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string> = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string> = {
        name: T_ThemeName;
        variations?: Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['variations'];
        forcedColours?: Omit<Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>, "levels" | "variations"> & {
            overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>;
        };
    } & {
        [B in T_ThemeBrightnessMode[number]]?: {
            [C in T_ThemeContrastMode[number]]?: Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text> & {
                overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>;
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string> = {
        name: T_ThemeName;
        levelsInUse: (ColourLevels | ColourLevels_Extended)[];
        forcedColours: Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>;
        };
    };
}
//# sourceMappingURL=Themes_Set.d.ts.map