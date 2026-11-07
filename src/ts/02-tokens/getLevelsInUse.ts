/**
 * @since 0.1.0-alpha.2
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { TokenTypes } from './@types.js';
import type { Tokens_Themes } from './Tokens_Themes.js';

export function getLevelsInUse<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams,
>(
    themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>,
    brightness: null,
    opts?: Partial<{
        /**
         * @default true
         */
        convertDarkLevels?: boolean;
    }>,
): {
    all: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    light: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    dark: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
};

export function getLevelsInUse<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams,
>(
    themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>,
    brightness?: 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>,
    opts?: Partial<{
        /**
         * @default true
         */
        convertDarkLevels?: boolean;
    }>,
): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;

export function getLevelsInUse<
    T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams,
>(
    themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>,
    brightness?: null | 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>,
    opts?: Partial<{
        /**
         * @default true
         */
        convertDarkLevels?: boolean;
    }>,
): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>> | {
    all: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    light: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    dark: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
};

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
    brightness: null | 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes> = 'all',
    {
        convertDarkLevels = false,
    }: Partial<{
        /**
         * @default true
         */
        convertDarkLevels?: boolean;
    }> = {}
): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>> | {
    all: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    light: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    dark: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
} {
    // returns
    if ( brightness && brightness !== 'all' ) {
        // returns
        if ( convertDarkLevels && brightness === 'dark' ) {
            return new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>(
                themes._meta.levelsInUse[ brightness ].map( ColourUtilities.Levels.toDark ),
            );
        }

        return new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>( themes._meta.levelsInUse[ brightness ] );
    }

    const returnObj = {
        light: new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>(),
        dark: new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>(),
    };

    themes._meta.brightness.forEach(
        _brightness => {
            themes._meta.levelsInUse[ _brightness ].forEach(
                convertDarkLevels && _brightness === 'dark'
                    ? lvl => returnObj.dark.add( ColourUtilities.Levels.toDark( lvl ) )
                    : lvl => returnObj[ _brightness ].add( lvl )
            );
        }
    );

    const all = new Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>( [
        ...returnObj.light,
        ...returnObj.dark,
    ] );

    // returns
    if ( brightness === 'all' ) {
        return all;
    }

    return {
        all,
        ...returnObj,
    };
}