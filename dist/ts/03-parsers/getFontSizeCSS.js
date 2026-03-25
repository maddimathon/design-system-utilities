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
import { objectFlatten } from '@maddimathon/utility-typescript';
/**
 * Takes a font size slug and returns a css-friendly variable with fallback value.
 *
 * @since 0.1.0-beta.0.draft
 */
export function getFontSizeCSS(tokens, fontSize) {
    const varMaker = (slug, value) => slug?.length
        ? `var(--fs-${slug}${value ? `, ${value}` : ''})`
        : String(value ?? slug ?? '');
    // returns
    if (!fontSize) {
        return varMaker(fontSize, null);
    }
    // returns
    if (CssColours.isKeyword(fontSize)
        || CssColours.isSystemColor(fontSize)) {
        return fontSize;
    }
    // returns
    if (!tokens.typography.size) {
        return varMaker(fontSize, null);
    }
    const flatSizes = objectFlatten(tokens.typography.size);
    // returns
    if (!(fontSize in flatSizes)) {
        return varMaker(fontSize, null);
    }
    // returns
    if (!flatSizes[fontSize]) {
        return varMaker(fontSize, null);
    }
    return varMaker(fontSize, `${flatSizes[fontSize].rem}rem`);
}
