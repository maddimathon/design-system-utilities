/**
 * @since 0.1.0-beta.0
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.4.draft
 * @license MIT
 */
import { mapToObjectAsync, objectFlatten, objectFlattenAsync, objectMapAsync, } from '@maddimathon/utility-typescript';
import { CssColours, jsValueToSass, sassAssertValueType, } from '@maddimathon/utility-sass';
import * as sass from "sass-embedded";
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { getColourCSS } from '../../03-parsers/getColourCSS.js';
/**
 * A function to include in {@link sass.Options} that flattens the scss theme
 * objects and sets their values to colour values.
 *
 * @since __PKG_VERSION___
 */
export function sassFn_themeFlattenGetValues() {
    return [
        'mmdsu-global-themeFlattenGetValues( $colours, $themes, $allowModernOpacitySyntax, $includeHSL, $includeRGB, $neverReplaceWithValue_regex, $neverReplaceWithValue_regex_flags, $presetOpacities, $presetOpacities_includeClrs, $replaceVarClrWithValue, $do_var_args )',
        async (args) => {
            const [colourTokens, themeTokens, allowModernOpacitySyntax = true, includeHSL = true, includeRGB = false, _neverReplaceWithValue_regex, neverReplaceWithValue_regex_flags = 'gi', presetOpacities = [], presetOpacities_includeClrs = false, replaceVarClrWithValue = false, do_var_args = new Map(),] = await Promise.all([
                sassAssertValueType('colours', 'map', args[0], true)?.then(map => (map instanceof Map ? mapToObjectAsync(map) : map)),
                sassAssertValueType('themes', 'map', args[1], true)?.then(map => (map instanceof Map ? mapToObjectAsync(map) : map)),
                sassAssertValueType('allowModernOpacitySyntax', 'bool', args[2], true),
                sassAssertValueType('includeHSL', 'bool', args[3], true),
                sassAssertValueType('includeRGB', 'bool', args[4], true),
                sassAssertValueType('neverReplaceWithValue_regex', 'string', args[5], true),
                sassAssertValueType('neverReplaceWithValue_regex_flags', 'string', args[6], true),
                sassAssertValueType('presetOpacities', 'list', args[7], true),
                sassAssertValueType('presetOpacities_includeClrs', 'bool', args[8], true),
                sassAssertValueType('replaceVarClrWithValue', 'bool', args[9], true),
                sassAssertValueType('do_var_args', 'map', args[10], true),
            ]);
            if (!themeTokens) {
                return sass.sassNull;
            }
            const neverReplaceWithValue_regex = _neverReplaceWithValue_regex
                ? new RegExp(_neverReplaceWithValue_regex, neverReplaceWithValue_regex_flags)
                : null;
            const _ifReplaceWithValue = neverReplaceWithValue_regex
                ? (_slug) => {
                    // returns
                    if (!_slug) {
                        return true;
                    }
                    // returns
                    if (_slug.match(neverReplaceWithValue_regex)) {
                        return false;
                    }
                    return !!replaceVarClrWithValue;
                    ;
                }
                : () => !!replaceVarClrWithValue;
            const _doVar_args = {
                customPropertyPrefix: do_var_args.get('customPropertyPrefix') ?? '',
                customPropertyPrefix_fallback: do_var_args.get('customPropertyPrefix_fallback') ?? '',
                exists_customPropertyPrefix: !!(do_var_args.get('exists_customPropertyPrefix') ?? false),
                exists_customPropertyPrefix_fallback: !!(do_var_args.get('exists_customPropertyPrefix_fallback') ?? false),
            };
            const doVar = (slug, value) => {
                const _args = (() => {
                    const allPrefixes = _doVar_args.exists_customPropertyPrefix
                        && _doVar_args.exists_customPropertyPrefix_fallback;
                    const fallbackOnly = !value || _ifReplaceWithValue(slug);
                    const neverFallbackPrefix = false;
                    const onlyFallbackPrefix = !allPrefixes && !neverFallbackPrefix;
                    const includeFallbackPrefix = !fallbackOnly && (!neverFallbackPrefix
                        || (onlyFallbackPrefix && _doVar_args.exists_customPropertyPrefix_fallback));
                    const _includePrefix_a = !onlyFallbackPrefix && (!fallbackOnly
                        || (_doVar_args.exists_customPropertyPrefix
                            && _doVar_args.exists_customPropertyPrefix_fallback));
                    const _includePrefix_b = !fallbackOnly
                        && includeFallbackPrefix
                        && !_doVar_args.exists_customPropertyPrefix_fallback;
                    return {
                        customPropertyPrefix: String(_doVar_args.customPropertyPrefix ?? ''),
                        customPropertyPrefix_fallback: String(_doVar_args.customPropertyPrefix_fallback ?? ''),
                        exists_customPropertyPrefix: _doVar_args.exists_customPropertyPrefix,
                        exists_customPropertyPrefix_fallback: _doVar_args.exists_customPropertyPrefix_fallback,
                        includePrefix: _includePrefix_a || _includePrefix_b,
                        includeFallbackPrefix,
                        onlyFallbackPrefix,
                    };
                })();
                let fallback = `${value}`;
                if (_args.includeFallbackPrefix && _args.exists_customPropertyPrefix_fallback) {
                    fallback = `var(--${_args.customPropertyPrefix_fallback}${slug}${fallback ? ', ' : ''}${fallback})`;
                }
                // returns - as a var
                if (!fallback || _args.includePrefix) {
                    return `var(--${_args.customPropertyPrefix}${slug}${fallback ? ', ' : ''}${fallback})`;
                }
                return fallback;
            };
            const varMaker = (slug, value) => (slug?.length
                ? doVar(`clr-${slug}`, value ?? '')
                : (value ?? slug ?? ''));
            const slugTranslator = async (brightness, val) => {
                const clrVal = getColourCSS({ themes: themeTokens, colour: colourTokens }, brightness, val, varMaker, {
                    modernOpacitySyntax: allowModernOpacitySyntax,
                }) || varMaker(val, '');
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
                    if (includeHSL || includeRGB) {
                        for (const opacity of presetOpacities) {
                            clr[`-${opacity}`] = clrVal;
                        }
                    }
                    return clr;
                }
                let clrValidate = null;
                const hslMatches = clrVal.match(/(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i);
                if (hslMatches) {
                    clrValidate = ColourUtilities.validateShade({
                        h: Number(hslMatches[2]),
                        s: Number(hslMatches[3]),
                        l: Number(hslMatches[4]),
                    });
                }
                else {
                    const rgbMatches = clrVal.match(/(^|,\s*)rgb\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*\)(\b|\s*\)|$)/i);
                    if (rgbMatches) {
                        clrValidate = ColourUtilities.validateShade({
                            r: Number(rgbMatches[2]),
                            g: Number(rgbMatches[3]),
                            b: Number(rgbMatches[4]),
                        });
                    }
                    else if (clrVal.match(/^#?[0-9|A-H]{3,6}$/i)) {
                        clrValidate = ColourUtilities.validateShade(clrVal);
                    }
                }
                const clrObj = await clrValidate;
                clr.$ = varMaker(val, clrObj ? ColourUtilities.toString.hsl(clrObj, 'comma') : '');
                const listSeparator = allowModernOpacitySyntax ? 'space' : 'comma';
                if (includeHSL) {
                    clr.hsl = varMaker(`${val}-hsl`, clrObj ? ColourUtilities.toList.hsl(clrObj, listSeparator) : '');
                }
                if (includeRGB) {
                    clr.rgb = varMaker(`${val}-rgb`, clrObj ? ColourUtilities.toList.rgb(clrObj, listSeparator) : '');
                }
                if (includeHSL || includeRGB) {
                    const opacitySeparator = allowModernOpacitySyntax ? ' / ' : ', ';
                    for (const opacity of presetOpacities) {
                        clr[`-${opacity}`] = varMaker(presetOpacities_includeClrs ? `${val}--${opacity}` : undefined, !clrObj
                            ? ''
                            : includeHSL
                                ? `hsla( ${ColourUtilities.toList.hsl(clrObj, listSeparator)}${opacitySeparator}${opacity}% )`
                                : `rgba( ${ColourUtilities.toList.rgb(clrObj, listSeparator)}${opacitySeparator}${opacity}% )`);
                    }
                }
                return clr;
            };
            return objectMapAsync(themeTokens, async ([themeName, themeSetObj]) => {
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
                        if (includeHSL || includeRGB) {
                            for (const opacity of presetOpacities) {
                                clr[`-${opacity}`] = themeValue;
                            }
                        }
                        return clr;
                    }).then(themeSet => objectFlatten(themeSet)),
                    objectGeneratorAsync(brightness_all, (brightness) => objectMapAsync(themeSetObj[brightness], ([contrast, themeSet]) => contrast && objectMapAsync(objectFlatten(themeSet), async ([themeSlug, themeValue]) => {
                        themeSlug;
                        // returns
                        if (Array.isArray(themeValue)) {
                            return Promise.all(themeValue.map(item => slugTranslator(brightness, item)));
                        }
                        return slugTranslator(brightness, themeValue);
                    }).then(themeSet => objectFlatten(themeSet))))
                ]).then(([forcedColors, brightnessMaps,]) => ({
                    'forced-colors': forcedColors,
                    ...brightnessMaps,
                }));
            }).then(mapped => jsValueToSass(mapped, {
                coloursAsStrings: true,
                quoteStrings: false,
            }));
        },
    ];
}
