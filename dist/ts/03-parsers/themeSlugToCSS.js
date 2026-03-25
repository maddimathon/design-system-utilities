/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { getColourCSS } from './getColourCSS.js';
import { getThemeTokenColourSlug } from './getThemeTokenColourSlug.js';
const _themeVarMaker = (slug) => slug?.length ? `var(--theme-${slug})` : String(slug ?? '');
/**
 * Takes a theme slug and returns a css-friendly colour code of its value, if
 * possible.
 *
 * @since 0.1.0-beta.0.draft
 */
export function themeSlugToCSS(themeValueSlug, themeName, brightness, contrast, tokens, convertColourToVarFn = true) {
    const clrSlug = getThemeTokenColourSlug(themeValueSlug, themeName, brightness, contrast, tokens);
    // returns
    if (!clrSlug) {
        return _themeVarMaker(themeValueSlug);
    }
    return _themeVarMaker(getColourCSS(tokens, brightness, clrSlug, convertColourToVarFn));
}
