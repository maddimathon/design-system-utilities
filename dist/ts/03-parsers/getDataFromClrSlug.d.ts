/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { TokenTypes } from '../02-tokens/@types.js';
/**
 * Gets the shade name and level of the given colour token, if applicable.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function getDataFromClrSlug<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams>(clrSlug: string): undefined | getDataFromClrSlug.Result<T_Types>;
export declare namespace getDataFromClrSlug {
    type Result<T_Types extends TokenTypes.TypeParams> = {
        name: TokenTypes.Colour.GenericName<T_Types['colour']['names']>;
        level: ColourUtilities.Levels.Required | T_Types['colour']['extraLevels'];
    } | {
        name: '$';
        level: "black" | "white";
    };
}
