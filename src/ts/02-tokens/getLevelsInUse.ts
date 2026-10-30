/**
 * @since 0.1.0-alpha.2
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { TokenTypes } from './@types.js';
import type { Tokens_Themes } from './Tokens_Themes.js';

/**
 * Returns a set of the unique levels in use for the given theme tokens.
 * 
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams,
>(
    themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>,
    brightness: 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes> = 'all',
): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>> {
    // returns
    if ( brightness !== 'all' ) {
        return new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>( themes._meta.levelsInUse[ brightness ] );
    }

    const all = new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>();

    themes._meta.brightness.forEach(
        _brightness => {
            themes._meta.levelsInUse[ _brightness ].forEach( lvl => all.add( lvl ) );
        }
    );

    return all;
}