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
import type { TokenTypes } from './@types.js';
import type { Tokens_Themes } from './Tokens_Themes.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.js';

/**
 * Returns a set of the unique levels in use for the given theme tokens.
 * 
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams,
>( themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes> ): Set<"black" | "white" | ColourUtilities.Levels.Any> {

    const levelsInUse = new Set<"black" | "white" | ColourUtilities.Levels.Any>();

    const allThemeSets: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>[] = Object.values( themes );

    allThemeSets.forEach(
        ( theme ) => theme.levelsInUse.forEach(
            level => levelsInUse.add( level )
        )
    );

    return levelsInUse;
}