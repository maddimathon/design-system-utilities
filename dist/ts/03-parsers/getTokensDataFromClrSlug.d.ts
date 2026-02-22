/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';
import type { TokenTypes } from '../02-tokens/@types.js';
/**
 * Gets the shade name and level of the given colour token, if applicable.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare function getTokensDataFromClrSlug<T_Types extends TokenTypes.TypeParams>(brightness: "light" | "dark" | T_Types['theme']['brightness'], clrSlug: string): undefined | {
    name: T_Types['colour']['names'];
    level: ColourUtilities.Levels.Required | T_Types['colour']['extraLevels'];
};
