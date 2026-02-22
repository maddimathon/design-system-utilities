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
import { getTokensDataFromClrSlug } from '../../ts/03-parsers/getTokensDataFromClrSlug.js';
/**
 * Takes a colour slug and returns a css-friendly colour code, if possible.
 *
 * @since 0.1.1-alpha.1.draft
 */
export function colourSlugToCSS(tokens, brightness, _clrSlug, convertToVarFn = true) {
    const clrSlug = Array.isArray(_clrSlug) ? _clrSlug[0] : _clrSlug;
    const varMaker = convertToVarFn
        ? (slug, value) => slug?.length ? `var(--clr-${slug}${value ? `, ${value}` : ''})` : String(value ?? slug ?? '')
        : (slug, value) => String(value ?? slug ?? '');
    // returns
    if (!clrSlug) {
        return varMaker(clrSlug, null);
    }
    // returns
    if (ColourUtilities.CssColours.keywords.has(clrSlug)
        || ColourUtilities.CssColours.systemColors.has(clrSlug)) {
        return clrSlug;
    }
    // returns
    if (!tokens.colour) {
        return varMaker(clrSlug, null);
    }
    const formatter = (val) => varMaker(clrSlug, typeof val === 'object'
        ? ColourUtilities.toString.hsl(val)
        : val.replace(/(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i, '$1hsl( $2, $3%, $4% )$5'));
    // returns
    if (clrSlug === 'black' || clrSlug === 'white') {
        // returns
        if (brightness === 'dark') {
            return formatter(tokens.colour.$[ColourUtilities.Levels.toDark(clrSlug)]);
        }
        return formatter(tokens.colour.$[clrSlug]);
    }
    const { name, level } = getTokensDataFromClrSlug(brightness, clrSlug) ?? {};
    // returns
    if (!name || !level) {
        return varMaker(clrSlug, null);
    }
    const clr = tokens.colour[name]?.[level];
    // returns
    if (!clr) {
        return varMaker(clrSlug, null);
    }
    return formatter(clr);
}
