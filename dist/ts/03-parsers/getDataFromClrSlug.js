/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { CssColours } from '@maddimathon/utility-sass';
/**
 * Gets the shade name and level of the given colour token, if applicable.
 *
 * @since 0.1.0-beta.0.draft
 */
export function getDataFromClrSlug(clrSlug) {
    // returns
    if (CssColours.isKeyword(clrSlug)
        || CssColours.isSystemColor(clrSlug)) {
        return undefined;
    }
    // returns
    if (clrSlug === 'black' || clrSlug === 'white') {
        return {
            name: '$',
            level: clrSlug,
        };
    }
    const matches = clrSlug?.match(/^([^\s]+)-(\d{3})$/i);
    // returns
    if (!matches || !matches[1] || !matches[2]) {
        return undefined;
    }
    return {
        name: matches[1],
        level: matches[2],
    };
}
