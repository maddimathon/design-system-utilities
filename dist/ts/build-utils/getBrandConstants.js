/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { isObjectEmpty, slugify, toTitleCase, } from '@maddimathon/utility-typescript';
import { Tokens } from '../02-tokens/Tokens.js';
/**
 * Tools for build scripts to write files of brand kit values .
 *
 * @since 0.1.0-beta.0.draft
 */
export var getBrandConstants;
(function (getBrandConstants) {
    /**
     * Prepares values to write files of constants for the given set of SVGs.
     *
     * @since 0.1.0-beta.0.draft
     */
    async function getSvgConsts(_setName, svgSet, args = {}) {
        // returns
        if (!svgSet || isObjectEmpty(svgSet)) {
            return null;
        }
        const include = {
            base64: args.incl?.base64 ?? false,
            css: args.incl?.css ?? false,
            glyphs: args.incl?.glyphs ?? true,
            names: args.incl?.names ?? true,
            slugs: args.incl?.slugs ?? false,
            svg: args.incl?.svg ?? true,
        };
        const setName = _setName.replace(/s$/g, '');
        const entries = {
            all: Object.entries(svgSet).map(([key, value]) => [
                slugify(key).replace(/\-/gi, '_').toLowerCase(),
                value,
            ]),
        };
        entries.all.sort((a, b) => {
            if (a[0] > b[0]) {
                return 1;
            }
            if (a[0] < b[0]) {
                return -1;
            }
            return 0;
        });
        const cssGetter = (value) => value.svgCssEmbedded.replace(/\s*\n+\s*/g, ' ');
        if (include.base64) {
            const base64Fn = args.valueMappers?.base64;
            const keyFn = args.keyMappers?.base64 ?? ((key) => key);
            const mapper = typeof base64Fn === 'function'
                ? ([key, value]) => [keyFn(key), base64Fn(btoa(cssGetter(value)))]
                : ([key, value]) => [keyFn(key), btoa(cssGetter(value))];
            /**
             * The inline CSS values base64 encoded.
             */
            entries.base64 = entries.all.map(mapper);
        }
        if (include.css) {
            const cssFn = args.valueMappers?.css;
            const keyFn = args.keyMappers?.css ?? ((key) => key);
            const mapper = typeof cssFn === 'function'
                ? ([key, value]) => [
                    keyFn(key),
                    cssFn(cssGetter(value)),
                ]
                : ([key, value]) => [keyFn(key), cssGetter(value)];
            /**
             * Values for inline CSS use.
             */
            entries.css = entries.all.map(mapper);
        }
        if (_setName === 'icons' && include.glyphs) {
            const glyphsFn = args.valueMappers?.glyphs;
            const keyFn = args.keyMappers?.glyphs ?? ((key) => key);
            const mapper = typeof glyphsFn === 'function'
                ? ([key, value]) => [
                    keyFn(key),
                    glyphsFn(value.meta?.codepoint),
                ]
                : ([key, value]) => [keyFn(key), value.meta?.codepoint?.toString(16)];
            /**
             * Values for inline CSS use.
             */
            entries.glyphs = entries.all.map(mapper);
        }
        if (include.names) {
            const namesFn = args.valueMappers?.names;
            const keyFn = args.keyMappers?.names ?? ((key) => key);
            const mapper = typeof namesFn === 'function'
                ? ([key, value]) => [keyFn(key), namesFn(value.label)]
                : ([key, value]) => [keyFn(key), value.label];
            entries.names = [...entries.all].sort((a, b) => {
                const sort_a = a[1].label;
                const sort_b = b[1].label;
                if (sort_a > sort_b) {
                    return 1;
                }
                if (sort_a < sort_b) {
                    return -1;
                }
                return 0;
            }).map(mapper);
        }
        if (include.slugs) {
            const slugsFn = args.valueMappers?.slugs;
            const keyFn = args.keyMappers?.slugs ?? ((key) => key);
            const mapper = typeof slugsFn === 'function'
                ? ([key]) => [keyFn(key), slugsFn(key)]
                : ([key]) => [keyFn(key), key];
            entries.slugs = entries.all.map(mapper);
        }
        if (include.svg) {
            const svgFn = args.valueMappers?.svg;
            const keyFn = args.keyMappers?.svg ?? ((key) => key);
            const mapper = typeof svgFn === 'function'
                ? ([key, value]) => [
                    keyFn(key),
                    svgFn(value.svgInlineLabelled.replace(/\s*\n+\s*/g, ' ')),
                ]
                : ([key, value]) => [
                    keyFn(key),
                    value.svgInlineLabelled.replace(/\s*\n+\s*/g, ' '),
                ];
            /**
             * Labelled SVG code for inline html use.
             */
            entries.svg = entries.all.map(mapper);
        }
        return {
            setName,
            entries: entries,
        };
    }
    getBrandConstants.getSvgConsts = getSvgConsts;
    /**
     * Utilities for the {@link getSvgConstants} function.
     *
     * @since 0.1.0-beta.0.draft
     */
    (function (getSvgConsts) {
        /**
         * @since 0.1.0-beta.0.draft
         */
        getSvgConsts.returnOpts = [
            'base64',
            'css',
            'glyphs',
            'names',
            'slugs',
            'svg',
        ];
    })(getSvgConsts = getBrandConstants.getSvgConsts || (getBrandConstants.getSvgConsts = {}));
    /**
     * Prepares values to write files of token value constants.
     *
     * @since 0.1.0-beta.0.draft
     */
    async function getThemeConsts(tokens, args = {}) {
        const include = {
            keys: args.incl?.keys ?? true,
            keyNames: args.incl?.keyNames ?? true,
        };
        const themesMeta = '_meta' in tokens.themes ? tokens.themes._meta : tokens.themes.meta;
        const entries = {};
        const valueFn_fallback = (key) => Array.isArray(key) ? key.join(',') : key;
        if (include.keys) {
            const valueFn = args.valueMappers?.keys ?? valueFn_fallback;
            const keyFn = args.keyMappers?.keys ?? ((key) => key);
            const _entries = Object.entries(themesMeta.keys);
            entries.keys = _entries.map(([key, value]) => [keyFn(key), valueFn(value)]);
        }
        if (include.keyNames) {
            const valueFn = args.valueMappers?.keyNames ?? valueFn_fallback;
            const keyFn = args.keyMappers?.keyNames ?? ((key) => key);
            const _entries = Object.entries(themesMeta.keys);
            entries.keyNames = _entries.map(([key, value]) => [keyFn(key), valueFn(value)]);
        }
        return {
            entries: entries,
        };
    }
    getBrandConstants.getThemeConsts = getThemeConsts;
    /**
     * Utilities for the {@link getSvgConstants} function.
     *
     * @since 0.1.0-beta.0.draft
     */
    (function (getThemeConsts) {
        /**
         * @since 0.1.0-beta.0.draft
         */
        getThemeConsts.returnOpts = [
            'keys',
            'keyNames',
        ];
    })(getThemeConsts = getBrandConstants.getThemeConsts || (getBrandConstants.getThemeConsts = {}));
    /**
     * For use in Wordpress projects (uses _x for translation).
     *
     * @since 0.1.0-beta.0.draft
     */
    let Wordpress;
    (function (Wordpress) {
        /**
         * @since 0.1.0-beta.0.draft
         */
        function parseReturnOpt(setName, opt) {
            const commentName = setName.replace(/\Bs$/gi, '');
            let constName;
            let comment;
            switch (opt) {
                case 'base64':
                    comment = `All ${commentName} base64-encoded svgs indexed by slug.`;
                    break;
                case 'css':
                    comment = `All ${commentName} css-ready svg values indexed by slug.`;
                    break;
                case 'names':
                    comment = `All ${commentName} slugs and their labels.`;
                    break;
                case 'svg':
                    comment = `All ${commentName} svg values indexed by slug.`;
                    break;
                case 'keys':
                    comment = `Theme slugs included in all themes.`;
                    break;
                case 'keyNames':
                    comment = `Translated theme slug names included in all themes, indexed by slug.`;
                    constName = 'KEY_NAMES';
                    break;
            }
            return {
                constName: constName ?? opt.toUpperCase(),
                comment: comment ?? `Brand kit ${setName} tokens as ${opt}.`,
            };
        }
        /**
         * Export to a PHP string.
         *
         * @since 0.1.0-beta.0.draft
         */
        let PHP;
        (function (PHP) {
            function entriesToArray(entries, associativeArray = true, indent = '') {
                // returns
                if (!entries?.length) {
                    return '';
                }
                // returns
                if (!associativeArray) {
                    return `[${entries.map((arr) => `\n${indent}    ${arr[1]},`).join('')}${entries.length ? `\n${indent}` : ''}]`;
                }
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `[${entries.map(([key, value]) => `\n${indent}    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? `\n${indent}` : ''}]`;
            }
            PHP.entriesToArray = entriesToArray;
            function entriesToObject(entries, indent = '') {
                // returns
                if (!entries?.length) {
                    return '';
                }
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `(object) [${entries.map(([key, value]) => `\n${indent}    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? `\n${indent}` : ''}]`;
            }
            PHP.entriesToObject = entriesToObject;
            function outputConstant(varName, content, args) {
                // returns
                if (!content) {
                    return [];
                }
                return args.insideHook ? [
                    '// hooked for access to translation',
                    '\\add_action(',
                    '    \'init\',',
                    '    function () {',
                    '        // returns',
                    `        if ( \\defined( '${varName}' ) ) {`,
                    '            return;',
                    '        }',
                    '',
                    '        /**',
                    `         * ${args.comment}`,
                    '         *',
                    `         * @var ${args.type}`,
                    '         */',
                    `        \\define(`,
                    `            '${varName}',`,
                    `            ${content.split('\n').join('\n            ')},`,
                    '        );',
                    '    },',
                    '    0,',
                    ');',
                ] : [
                    '/**',
                    ` * ${args.comment}`,
                    ' *',
                    ` * @var ${args.type}`,
                    ' */',
                    `\\define(`,
                    `    '${varName}',`,
                    `    ${content.split('\n').join('\n    ')},`,
                    ');',
                ];
            }
            /**
             * Gets a string of valid PHP code for wordpress defining custom
             * constants to go with the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getCustom(
            /**
             * Values to print indexed by their constant name.
             */
            constants, phpNamespace) {
                phpNamespace = phpNamespace.length ? phpNamespace.replace(/\/$/gi, '') + '\\' : '';
                const ret = [];
                for (const [constName, value, args] of constants) {
                    const { comment = `Values for ${constName}.`, insideHook = false, objectAsAssociativeArray = true, objectAsObject = true, type, } = args;
                    let content;
                    const entries = Object.entries(value);
                    if (Array.isArray(value)) {
                        content = entriesToArray(entries, false);
                    }
                    else {
                        if (objectAsObject) {
                            content = entriesToObject(entries);
                        }
                        else {
                            content = entriesToArray(entries, objectAsAssociativeArray);
                        }
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    ret.push(...outputConstant(`${phpNamespace}${constName}`, content, {
                        comment,
                        insideHook,
                        type,
                    }), '');
                }
                return ret.join('\n');
            }
            PHP.getCustom = getCustom;
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getSvg(_setName, svgSet, textDomain, phpNamespace, args = {}) {
                const setName = _setName.replace(/s$/g, '');
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    ...args,
                    valueMappers: {
                        base64: (base64) => `'${base64.replace(/'/g, "\\'")}'`,
                        css: (css) => `'${css.replace(/'/g, "\\'")}'`,
                        glyphs: (glyph) => glyph ? `"\\u{${glyph.toString(16).replace(/'/g, "\\'")}}"` : 'null',
                        names: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        slugs: (slug) => `'${slug.replace(/'/g, "\\'")}'`,
                        svg: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const keys = entries.all.map(([key]) => key).sort();
                phpNamespace = phpNamespace.length ? phpNamespace.replace(/\/$/gi, '') + '\\' : '';
                const keyObjectShape = keys.map(key => `${key}: string`).join(', ');
                const setName_UC = setName.toUpperCase();
                const ret = [];
                for (const opt of getSvgConsts.returnOpts) {
                    let content;
                    let insideHook = false;
                    let type;
                    switch (opt) {
                        case 'glyphs':
                            content = entriesToObject(entries[opt]);
                            type = `object{ ${keys.map(key => `${key}: ?string`).join(', ')} }`;
                            break;
                        case 'names':
                            content = entriesToArray(entries[opt], true);
                            insideHook = true;
                            type = `array{ ${keyObjectShape} }`;
                            break;
                        case 'slugs':
                            content = entriesToArray(entries[opt], false);
                            type = `( ${keys.map(key => `"${key}"`).join(', ')} )[]`;
                            break;
                        default:
                            content = entriesToObject(entries[opt]);
                            type = `object{ ${keyObjectShape} }`;
                            break;
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    const { constName, comment, } = parseReturnOpt(_setName, opt);
                    ret.push(...outputConstant(`${phpNamespace}BRAND_${setName_UC}_${constName}`, content, {
                        comment,
                        insideHook,
                        type,
                    }), '');
                }
                return ret.join('\n');
            }
            PHP.getSvg = getSvg;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getTheme(tokens, textDomain, phpNamespace, args = {}) {
                const SVG_CONSTANTS = await getThemeConsts(tokens, {
                    ...args,
                    valueMappers: {
                        keys: (value) => entriesToArray(value.map((v, i) => [
                            i.toString(),
                            `'${v.replace(/'/g, "\\'")}'`,
                        ]), false).split('\n').join('\n    '),
                        keyNames: (value) => entriesToArray(value.map(v => [
                            v,
                            `_x( '${toTitleCase(v)}', 'colour variation name', '${textDomain}' )`,
                        ])).split('\n').join('\n    '),
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const themesMeta = '_meta' in tokens.themes ? tokens.themes._meta : tokens.themes.meta;
                const keyEntries = Object.entries(themesMeta.keys);
                phpNamespace = phpNamespace.length ? phpNamespace.replace(/\/$/gi, '') + '\\' : '';
                const ret = [];
                for (const opt of getThemeConsts.returnOpts) {
                    let content;
                    let insideHook = false;
                    let type;
                    switch (opt) {
                        case 'keys':
                            content = entriesToObject(entries[opt]);
                            type = `object{ ${keyEntries.map(([key]) => `${key}: string[]`).join(', ')} }`;
                            break;
                        case 'keyNames':
                            content = entriesToObject(entries[opt]);
                            insideHook = true;
                            type = `object{ ${keyEntries.map(([key, values]) => `${key}: array{ ${values.map(subKey => `${subKey}: string`).join(', ')} }`).join(', ')} }`;
                            break;
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    const { constName, comment, } = parseReturnOpt('theme', opt);
                    ret.push(...outputConstant(`${phpNamespace}BRAND_THEME_${constName}`, content, {
                        comment,
                        insideHook,
                        type,
                    }), '');
                }
                return ret.join('\n');
            }
            PHP.getTheme = getTheme;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getAll(tokens, textDomain, phpNamespace, args = {}) {
                const [icons, logos, theme,] = await Promise.all([
                    getSvg('icons', tokens.icons, textDomain, phpNamespace, args.icons),
                    getSvg('logos', tokens.logos, textDomain, phpNamespace, args.logos),
                    getTheme(tokens, textDomain, phpNamespace, args.theme),
                ]);
                return [
                    icons,
                    logos,
                    theme,
                ].filter(v => v).join('\n\n');
            }
            PHP.getAll = getAll;
        })(PHP = Wordpress.PHP || (Wordpress.PHP = {}));
        /**
         * Export to a TypeScript string.
         *
         * @since 0.1.0-beta.0.draft
         */
        let TS;
        (function (TS) {
            function entriesToArray(entries) {
                // returns
                if (!entries?.length) {
                    return '';
                }
                return '[' + entries.map((arr) => `\n    ${arr[1]},`).join('') + (entries.length ? '\n' : '') + ']';
            }
            TS.entriesToArray = entriesToArray;
            function entriesToObject(entries) {
                // returns
                if (!entries?.length) {
                    return '';
                }
                return '{' + entries.map(([key, value]) => `\n    ${key.includes('-') ? `'${key}'` : key}: ${value},`).join('') + (entries.length ? '\n' : '') + '}';
            }
            TS.entriesToObject = entriesToObject;
            function entriesToObject_type(entries) {
                // returns
                if (!entries?.length) {
                    return '';
                }
                return '{' + entries.map(([key, value]) => `\n    readonly ${key.includes('-') ? `'${key}'` : key}: ${value};`).join('') + (entries.length ? '\n' : '') + '}';
            }
            TS.entriesToObject_type = entriesToObject_type;
            function outputConstant(varName, content, args) {
                // returns
                if (!content) {
                    return [];
                }
                const varStr = args.type?.length
                    ? `export const ${varName}: ${args.type} = ${content};`
                    : `export const ${varName} = ${content} as const;`;
                return args.comment ? [
                    '/**',
                    ` * ${args.comment}`,
                    ' */',
                    varStr,
                ] : [
                    varStr,
                ];
            }
            TS.outputConstant = outputConstant;
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getSvg(_setName, svgSet, textDomain, args = {}) {
                const setName = _setName.replace(/s$/g, '');
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    ...args,
                    valueMappers: {
                        base64: (base64) => `'${base64.replace(/'/g, "\\'")}'`,
                        css: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                        glyphs: (glyph) => glyph ? `'\\${glyph.toString(16).replace(/'/g, "\\'")}'` : 'null',
                        names: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        slugs: (slug) => `'${slug.replace(/'/g, "\\'")}'`,
                        svg: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const typeString = entriesToObject_type(entries.all.map(([key]) => [key, 'string']));
                const setName_UC = setName.toUpperCase();
                const ret = [];
                for (const opt of getSvgConsts.returnOpts) {
                    let content;
                    let type = undefined;
                    switch (opt) {
                        case 'glyphs':
                        case 'names':
                            content = entriesToObject(entries[opt]);
                            break;
                        case 'slugs':
                            content = entriesToArray(entries[opt]);
                            break;
                        default:
                            content = entriesToObject(entries[opt]);
                            type = typeString;
                            break;
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    const { constName, comment, } = parseReturnOpt(_setName, opt);
                    ret.push(...outputConstant(`${setName_UC}_${constName}`, content, { comment, type }), '');
                }
                return ret.join('\n');
            }
            TS.getSvg = getSvg;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getTheme(tokens, textDomain, args = {}) {
                const SVG_CONSTANTS = await getThemeConsts(tokens, {
                    ...args,
                    valueMappers: {
                        keys: (value) => entriesToArray(value.map((v, i) => [
                            i.toString(),
                            `'${v.replace(/'/g, "\\'")}'`,
                        ])).split('\n').join('\n    '),
                        keyNames: (value) => entriesToObject(value.map((v, i) => [
                            v,
                            `_x( '${toTitleCase(v)}', 'colour variation name', '${textDomain}' )`,
                        ])).split('\n').join('\n    '),
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const typeString = entriesToObject_type(entries.keys.map(([key]) => [key, 'string[]']));
                const ret = [];
                for (const opt of getThemeConsts.returnOpts) {
                    let content;
                    let type = undefined;
                    switch (opt) {
                        case 'keys':
                        case 'keyNames':
                            content = entriesToObject(entries[opt]);
                            break;
                        default:
                            content = entriesToObject(entries[opt]);
                            type = typeString;
                            break;
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    const { constName, comment, } = parseReturnOpt('theme', opt);
                    ret.push(...outputConstant(`THEME_${constName}`, content, { comment, type }), '');
                }
                return ret.join('\n');
            }
            TS.getTheme = getTheme;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getAll(tokens, textDomain, args = {}) {
                const [icons, logos, theme,] = await Promise.all([
                    getSvg('icons', tokens.icons, textDomain, args.icons),
                    getSvg('logos', tokens.logos, textDomain, args.logos),
                    getTheme(tokens, textDomain, args.theme),
                ]);
                return [
                    icons,
                    logos,
                    theme,
                ].filter(v => v?.length).join('\n\n');
            }
            TS.getAll = getAll;
        })(TS = Wordpress.TS || (Wordpress.TS = {}));
    })(Wordpress = getBrandConstants.Wordpress || (getBrandConstants.Wordpress = {}));
})(getBrandConstants || (getBrandConstants = {}));
