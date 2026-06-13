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
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { getDataFromClrSlug } from './getDataFromClrSlug.js';
/**
 * Takes a colour slug and returns a css-friendly colour code, if possible.
 * Optionally returns a css colour var with the colour code as fallback.
 *
 * @since 0.1.0-beta.0.draft
 */
export function getColourCSS(tokens, brightness, _clrSlug, convertToVarFn = true) {
    const clrSlug = Array.isArray(_clrSlug) ? _clrSlug[0] : _clrSlug;
    const varMaker = convertToVarFn
        ? (slug, value) => slug?.length ? `var(--clr-${slug}${value ? `, ${value}` : ''})` : String(value ?? slug ?? '')
        : (slug, value) => String(value ?? slug ?? '');
    // returns
    if (!clrSlug) {
        return varMaker(clrSlug, null);
    }
    // returns
    if (CssColours.isKeyword(clrSlug)
        || CssColours.isSystemColor(clrSlug)) {
        return clrSlug;
    }
    // returns
    if (!tokens.colour) {
        return varMaker(clrSlug, null);
    }
    const formatter = (val) => varMaker(clrSlug, typeof val === 'object'
        ? ColourUtilities.toString.hsl(val, 'comma')
        : val.replace(/(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i, '$1hsl( $2, $3%, $4% )$5'));
    // returns
    if (clrSlug === 'black' || clrSlug === 'white') {
        // returns
        if (brightness === 'dark') {
            return formatter(tokens.colour.$[ColourUtilities.Levels.toDark(clrSlug)]);
        }
        return formatter(tokens.colour.$[clrSlug]);
    }
    const data = getDataFromClrSlug(clrSlug);
    // returns
    if (!data) {
        return varMaker(clrSlug, null);
    }
    let clr;
    if (data.name === '$') {
        const { name, level } = data;
        clr = brightness === 'dark'
            ? tokens.colour[name]?.[ColourUtilities.Levels.toDark(level)]
            : tokens.colour[name]?.[level];
    }
    else {
        const { name, level } = data;
        clr = brightness === 'dark'
            ? tokens.colour[name]?.[ColourUtilities.Levels.toDark(level)]
            : tokens.colour[name]?.[level];
    }
    // returns
    if (!clr) {
        return varMaker(clrSlug, null);
    }
    return formatter(clr);
}
