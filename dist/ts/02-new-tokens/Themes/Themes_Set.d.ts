/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { CssSystemColor, ThemeColourOption, ThemeMode_ContrastOption, TokenLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Themes_Set<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_ColourOptions extends string = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> extends AbstractTokens<Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ColourOptions>> {
    /** Name for this shade set. */
    protected readonly name: T_ThemeName;
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[number][];
    protected readonly contrastModes: readonly T_ThemeContrastMode[number][];
    protected readonly forcedColours: Tokens_Themes_Set_SingleMode<CssSystemColor>;
    protected readonly modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode<T_ColourOptions>;
        };
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_ColourOptions extends string = ThemeColourOption<T_ColourName, T_ExtraColourLevels>>(name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes_Set.InputParam<T_ColourName, T_ExtraColourLevels, readonly T_ThemeBrightnessMode[], readonly T_ThemeContrastMode[], T_ThemeName, T_ColourOptions>): Promise<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, readonly T_ThemeBrightnessMode[], readonly T_ThemeContrastMode[], T_ThemeName, T_ColourOptions>>;
    get data(): Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ColourOptions>;
    protected constructor(
    /** Name for this shade set. */
    name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[number][], contrastModes: readonly T_ThemeContrastMode[number][], forcedColours: Tokens_Themes_Set_SingleMode<CssSystemColor>, modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode<T_ColourOptions>;
        };
    });
    toJSON(): Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_ColourOptions>;
    toScssVars(): {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: ReturnType<Tokens_Themes_Set_SingleMode<T_ColourOptions>['toScssVars']>;
        };
    };
}
/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Themes_Set {
    /**
     * @since 0.1.0-alpha.draft
     */
    type Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_ColourOptions extends string> = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.Data<CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_ColourOptions extends string> = {
        name: T_ThemeName;
        forcedColours?: Tokens_Themes_Set_SingleMode.InputParam<CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]?: {
            [C in T_ThemeContrastMode[number]]?: Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_ColourOptions extends string> = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.JsonReturn<CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourOptions>;
        };
    };
}
//# sourceMappingURL=Themes_Set.d.ts.map