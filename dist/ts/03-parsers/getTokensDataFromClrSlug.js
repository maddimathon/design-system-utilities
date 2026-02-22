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
/**
 * Gets the shade name and level of the given colour token, if applicable.
 *
 * @since 0.1.1-alpha.1.draft
 */
export function getTokensDataFromClrSlug(brightness, clrSlug) {
    // returns
    if (clrSlug === 'transparent' || clrSlug === 'unset') {
        return undefined;
    }
    const matches = clrSlug?.match(/^([^\s]+)-(\d{3})$/i);
    // returns
    if (!matches) {
        return undefined;
    }
    const level = brightness == 'dark'
        ? ColourUtilities.Levels.toDark(matches[2])
        : matches[2];
    return {
        name: matches[1],
        level,
    };
}
