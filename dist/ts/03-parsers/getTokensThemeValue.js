/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { objectFlatten } from '@maddimathon/utility-typescript';
/**
 * Gets the value of the given theme slug.
 *
 * @since 0.1.0-beta.0.draft
 */
export function getTokensThemeValue(themeValueSlug, themeName, brightness, contrast, tokens) {
    if (!tokens.themes[themeName]) {
        themeName = 'default';
    }
    // returns
    if (!tokens.themes[themeName][brightness]?.[contrast]) {
        return null;
    }
    const flattened = objectFlatten(tokens.themes[themeName][brightness][contrast].data);
    // returns
    if (!(themeValueSlug in flattened) || !flattened[themeValueSlug]) {
        return null;
    }
    return flattened[themeValueSlug];
}
