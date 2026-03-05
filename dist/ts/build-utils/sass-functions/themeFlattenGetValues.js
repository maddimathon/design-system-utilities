/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { mapToObjectAsync, objectFlatten, objectFlattenAsync, objectMapAsync, } from '@maddimathon/utility-typescript';
import { CssColours, jsValueToSass, sassAssertValueType, } from '@maddimathon/utility-sass';
import * as sass from "sass-embedded";
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { colourSlugToCSS } from '../../03-parsers/colourSlugToCSS.js';
/**
 * A function to include in {@link sass.Options} that flattens the scss theme
 * objects and sets their values to colour values.
 *
 * @since __PKG_VERSION___
 */
export function sassFn_themeFlattenGetValues() {
    return [
        'mmdsu-global-themeFlattenGetValues( $colours, $themes, $replaceVarClrWithValue, $includeHSL, $includeRGB )',
        async (args) => {
            const [colourTokens, themeTokens, replaceVarClrWithValue = false, includeHSL = true, includeRGB = false,] = await Promise.all([
                sassAssertValueType('map', args[0])?.then(map => (map instanceof Map ? mapToObjectAsync(map) : map)),
                sassAssertValueType('map', args[1])?.then(map => (map instanceof Map ? mapToObjectAsync(map) : map)),
                sassAssertValueType('bool', args[2]),
                sassAssertValueType('bool', args[3]),
                sassAssertValueType('bool', args[4]),
            ]);
            // console.vi.log( {
            //     // themeTokens: themeTokens && Object.keys( themeTokens ),
            //     // colourTokens: colourTokens && Object.keys( colourTokens ),
            //     replaceVarClrWithValue,
            //     includeHSL,
            //     includeRGB,
            // }, 1 );
            // return sass.sassNull;
            if (!themeTokens) {
                return sass.sassNull;
            }
            const varMaker = !replaceVarClrWithValue
                ? (slug, value) => slug?.length ? `var(--clr-${slug}${value ? `, ${value}` : ''})` : String(value ?? slug ?? '')
                : (slug, value) => String(value ?? slug ?? '');
            const slugTranslator = (brightness, val) => {
                const clrVal = colourSlugToCSS({ themes: themeTokens, colour: colourTokens }, brightness, val, !replaceVarClrWithValue);
                // if ( !replaceVarClrWithValue ) {
                //     console.vi.log( { clrVal }, 2 );
                // }
                // returns
                if (!includeHSL && !includeRGB) {
                    return clrVal;
                }
                const clr = {
                    $: clrVal,
                };
                // returns
                if (CssColours.isKeyword(clrVal)
                    || CssColours.isSystemColor(clrVal)) {
                    if (includeHSL) {
                        clr.hsl = clrVal;
                    }
                    if (includeRGB) {
                        clr.rgb = clrVal;
                    }
                    return clr;
                }
                if (includeHSL) {
                    const hslRegex = /(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i;
                    const hslMatches = clr.$.match(hslRegex);
                    if (hslMatches) {
                        clr.hsl = varMaker(`${val}-hsl`, `${hslMatches[2]}, ${hslMatches[3]}%, ${hslMatches[4]}%`);
                        clr.$ = clr.$.replace(hslRegex, '$1hsl( $2, $3%, $4% )$5');
                        // if ( !replaceVarClrWithValue ) {
                        //     console.vi.log( { hslMatches, clr }, 3 );
                        // }
                    }
                }
                if (includeRGB) {
                    const rgbRegex = /(^|,\s*)rgb\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*\)(\b|\s*\)|$)/i;
                    const rgbMatches = clr.$.match(rgbRegex);
                    if (rgbMatches) {
                        clr.rgb = varMaker(`${val}-rgb`, `${rgbMatches[2]}, ${rgbMatches[3]}, ${rgbMatches[4]}`);
                        clr.$ = clr.$.replace(rgbRegex, '$1rgb( $2, $3, $4 )$5');
                        // if ( !replaceVarClrWithValue ) {
                        //     console.vi.log( { rgbMatches, clr }, 3 );
                        // }
                    }
                }
                return clr;
            };
            const mapped = await objectMapAsync(themeTokens, async ([themeName, themeSetObj]) => {
                if (typeof themeSetObj !== 'object') {
                    return themeSetObj;
                }
                const brightness_all = Object.keys(themeSetObj).filter(key => key !== 'forced-colors');
                return Promise.all([
                    objectMapAsync(objectFlattenAsync(themeSetObj['forced-colors']), ([themeSlug, themeValue]) => {
                        // returns
                        if (!includeHSL && !includeRGB) {
                            return themeValue;
                        }
                        const clr = {
                            $: themeValue,
                        };
                        if (includeHSL) {
                            clr.hsl = themeValue;
                        }
                        if (includeRGB) {
                            clr.rgb = themeValue;
                        }
                        return clr;
                    }).then(themeSet => objectFlatten(themeSet)),
                    objectGeneratorAsync(brightness_all, (brightness) => objectMapAsync(themeSetObj[brightness], ([contrast, themeSet]) => contrast && objectMapAsync(objectFlatten(themeSet), ([themeSlug, themeValue]) => {
                        themeSlug;
                        // returns
                        if (Array.isArray(themeValue)) {
                            return themeValue.map(item => slugTranslator(brightness, item));
                        }
                        return slugTranslator(brightness, themeValue);
                    }).then(themeSet => objectFlatten(themeSet))))
                ]).then(([forcedColors, brightnessMaps,]) => ({
                    'forced-colors': forcedColors,
                    ...brightnessMaps,
                }));
            });
            return jsValueToSass(mapped);
        },
    ];
}
