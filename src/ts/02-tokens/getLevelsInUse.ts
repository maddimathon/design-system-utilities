/**
 * @since 0.1.0-alpha.2
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { ThemeMode_ContrastOption } from './@types.js';
import type { Tokens_Themes } from './Tokens_Themes.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.js';

/**
 * Returns a set of the unique levels in use for the given theme tokens.
 * 
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    T_ThemeBrightnessMode extends string,
    T_ThemeContrastMode extends ThemeMode_ContrastOption,
    T_ThemeName extends string,

    T_ThemeKeyword_Universal extends string,
    T_ThemeKeyword_Text extends string,
    T_ThemeKeyword_Background extends string,
>( themes: Tokens_Themes.JsonReturn<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,

    T_ThemeKeyword_Universal,
    T_ThemeKeyword_Text,
    T_ThemeKeyword_Background
> ): Set<"black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional> {

    const levelsInUse = new Set<"black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional>();

    const allThemeSets: Tokens_Themes_Set.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode[],
        T_ThemeContrastMode[],
        T_ThemeName,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >[] = Object.values( themes );

    allThemeSets.forEach(
        ( theme ) => theme.levelsInUse.forEach(
            level => levelsInUse.add( level )
        )
    );

    return levelsInUse;
}