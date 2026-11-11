/**
 * @since 0.1.0-alpha.2
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.2.0
 * @license MIT
 */
import type { TokenTypes } from './@types.js';
import type { Tokens_Themes } from './Tokens_Themes.js';
export declare function getLevelsInUse<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams>(themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>, brightness: null, opts?: Partial<{
    /**
     * @default true
     */
    convertDarkLevels?: boolean;
}>): {
    all: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    light: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    dark: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
};
export declare function getLevelsInUse<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams>(themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>, brightness?: 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>, opts?: Partial<{
    /**
     * @default true
     */
    convertDarkLevels?: boolean;
}>): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
export declare function getLevelsInUse<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams = TokenTypes.Theme.TypeParams>(themes: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>, brightness?: null | 'all' | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>, opts?: Partial<{
    /**
     * @default true
     */
    convertDarkLevels?: boolean;
}>): Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>> | {
    all: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    light: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
    dark: Set<TokenTypes.Colour.AnyLevel<T_ColourTypes>>;
};
