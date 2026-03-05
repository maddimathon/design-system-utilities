/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { CssColours } from '@maddimathon/utility-sass';
/**
 * Gets the shade name and level of the given colour token, if applicable.
 *
 * @since 0.1.1-alpha.1.draft
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
    if (!matches) {
        return undefined;
    }
    return {
        name: matches[1],
        level: matches[2],
    };
}
