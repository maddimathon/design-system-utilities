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
            css: args.incl?.css ?? args.incl?.svgHidden ?? args.incl?.svg ?? false,
            glyphs: (args.incl?.glyphs ?? true) && _setName === 'icons',
            names: args.incl?.names ?? true,
            slugs: args.incl?.slugs ?? false,
            svg: args.incl?.svg ?? true,
            svgHidden: args.incl?.svgHidden ?? args.incl?.svg ?? true,
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
        if (include.svgHidden) {
            const svgFn = args.valueMappers?.svgHidden;
            const keyFn = args.keyMappers?.svgHidden ?? ((key) => key);
            const mapper = typeof svgFn === 'function'
                ? ([key, value]) => [
                    keyFn(key),
                    svgFn(value.svgInlineHidden.replace(/\s*\n+\s*/g, ' ')),
                ]
                : ([key, value]) => [
                    keyFn(key),
                    value.svgInlineHidden.replace(/\s*\n+\s*/g, ' '),
                ];
            /**
             * SR-hidden SVG code for inline html use.
             */
            entries.svgHidden = entries.all.map(mapper);
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
            'svgHidden',
        ];
    })(getSvgConsts = getBrandConstants.getSvgConsts || (getBrandConstants.getSvgConsts = {}));
    /**
     * Prepares values to write files of token value constants.
     *
     * @since 0.1.0-beta.0.draft
     */
    async function getThemeConsts(tokens, args = {}) {
        const include = {
            themes: args.incl?.themes ?? true,
            themeNames: args.incl?.themeNames ?? true,
            tokenSlugs: args.incl?.tokenSlugs ?? true,
            tokenSlugNames: args.incl?.tokenSlugNames ?? true,
        };
        const themesMeta = tokens.themes._meta;
        const themeSlugs = Object.keys(tokens.themes).filter(key => key !== '_meta');
        const entries = {};
        const valueFn_fallback = (key) => Array.isArray(key) ? key.join(',') : key;
        if (include.themes) {
            const valueFn = args.valueMappers?.themes ?? valueFn_fallback;
            const keyFn = args.keyMappers?.themes ?? ((key) => key);
            entries.themes = themeSlugs.map((key) => [keyFn(key), valueFn(key)]);
        }
        if (include.themeNames) {
            const valueFn = args.valueMappers?.themeNames ?? valueFn_fallback;
            const keyFn = args.keyMappers?.themeNames ?? ((key) => key);
            entries.themeNames = themeSlugs.map((key) => [keyFn(key), valueFn(tokens.themes[key]?._name ?? key)]);
        }
        if (include.tokenSlugs) {
            const valueFn = args.valueMappers?.tokenSlugs ?? valueFn_fallback;
            const keyFn = args.keyMappers?.tokenSlugs ?? ((key) => key);
            const _entries = Object.entries(themesMeta.keys);
            entries.tokenSlugs = _entries.map(([key, value]) => [keyFn(key), valueFn(value)]);
        }
        if (include.tokenSlugNames) {
            const valueFn = args.valueMappers?.tokenSlugNames ?? valueFn_fallback;
            const keyFn = args.keyMappers?.tokenSlugNames ?? ((key) => key);
            const _entries = Object.entries(themesMeta.keys);
            entries.tokenSlugNames = _entries.map(([key, value]) => [keyFn(key), valueFn(value)]);
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
            'themes',
            'themeNames',
            'tokenSlugs',
            'tokenSlugNames',
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
                    comment = `All ${setName} as base64-encoded svgs, indexed by slug.`;
                    break;
                case 'css':
                    comment = `All ${setName} as css-ready svg values, indexed by slug.`;
                    break;
                case 'names':
                    comment = `All ${commentName} slugs and their labels.`;
                    break;
                case 'svg':
                    comment = `All ${setName} as svg values (visible to screen-readers), indexed by slug.`;
                    break;
                case 'svgHidden':
                    comment = `All ${setName} as svg values (hidden from screen-readers), indexed by slug.`;
                    constName = 'SVG_HIDDEN';
                    break;
                case 'themes':
                    comment = `Theme slugs.`;
                    constName = 'SLUGS';
                    break;
                case 'themeNames':
                    comment = `Translated theme slug names, indexed by slug.`;
                    constName = 'SLUG_NAMES';
                    break;
                case 'tokenSlugs':
                    comment = `Token theme slugs included in all themes.`;
                    constName = 'TOKEN_SLUGS';
                    break;
                case 'tokenSlugNames':
                    comment = `Translated token theme slug names included in all themes, indexed by slug.`;
                    constName = 'TOKEN_SLUG_NAMES';
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
            /**
             * Tries its best to recursively format a value.
             *
             * @since 0.1.0-beta.0.draft
             */
            function prepareConstant([key, value], { indent = '', keyFilter, valueFilter, } = {}) {
                let ret;
                // returns
                switch (typeof value) {
                    case 'boolean':
                        ret = [key, value ? 'true' : 'false'];
                        break;
                    case 'bigint':
                    case 'number':
                        ret = [key, value.toString()];
                        break;
                    case 'undefined':
                        ret = [key, 'null'];
                        break;
                    case 'object':
                        // returns
                        if (value === null) {
                            ret = [key, 'null'];
                            break;
                        }
                        ret = [
                            key,
                            entriesToArray(Object.entries(value).map(entry => prepareConstant(entry, {
                                indent: '    ' + indent,
                                keyFilter,
                                valueFilter,
                            })), !Array.isArray(value), indent),
                        ];
                        break;
                    default:
                        ret = [key, `'${String(value).replace(/'/, "\\'")}'`];
                        break;
                }
                if (keyFilter) {
                    ret[0] = keyFilter(ret[0]);
                }
                if (valueFilter) {
                    ret[1] = valueFilter(ret[1]);
                }
                return ret;
            }
            PHP.prepareConstant = prepareConstant;
            function entriesToArray(entries, associativeArray = true, indent = '') {
                // returns
                if (!entries?.length) {
                    return '[]';
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
                    return '(object) []';
                }
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `(object) [${entries.map(([key, value]) => `\n${indent}    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? `\n${indent}` : ''}]`;
            }
            PHP.entriesToObject = entriesToObject;
            function outputConstant(phpNamespace, varName, content, args) {
                // returns
                if (!content) {
                    return [];
                }
                phpNamespace = phpNamespace.length ? phpNamespace.replace(/[\/|\\]+$/gi, '') + '\\' : '';
                // returns
                if (!args.insideHook) {
                    return args.insideDefine !== false ? [
                        '/**',
                        ` * ${args.comment}`,
                        ' *',
                        ` * @var ${args.type}`,
                        ' */',
                        `\\define(`,
                        `    '${phpNamespace}${varName}',`,
                        `    ${content.split('\n').join('\n    ')},`,
                        ');',
                    ] : [
                        '/**',
                        ` * ${args.comment}`,
                        ' *',
                        ` * @var ${args.type}`,
                        ' */',
                        `const ${varName} = ${content};`,
                    ];
                }
                return [
                    '// hooked for access to translation',
                    `\\add_action(`,
                    `    \'init\',`,
                    `    function () {`,
                    '        // returns',
                    `        if ( \\defined( '${phpNamespace}${varName}' ) ) {`,
                    '            return;',
                    '        }',
                    '',
                    '        /**',
                    `         * ${args.comment}`,
                    '         *',
                    `         * @var ${args.type}`,
                    '         */',
                    `        \\define(`,
                    `            '${phpNamespace}${varName}',`,
                    `            ${content.split('\n').join('\n            ')},`,
                    '        );',
                    '    },',
                    `    0,`,
                    `);`,
                ];
            }
            /**
             * Gets a string of valid PHP code for wordpress defining custom
             * constants to go with the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getCustom(constants, phpNamespace) {
                const ret = [];
                for (const [constName, value, args] of constants) {
                    const { comment = `Values for ${constName}.`, insideHook = false, objectAsAssociativeArray = true, objectAsObject = true, type, 
                    // 
                    insideDefine = !objectAsObject, } = args;
                    let content;
                    if (typeof value === 'string') {
                        content = value;
                    }
                    else {
                        const entries = Object.entries(value);
                        if (Array.isArray(value)) {
                            content = entriesToArray(entries, false);
                        }
                        else if (objectAsObject) {
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
                    ret.push(...outputConstant(phpNamespace, constName, content, {
                        comment,
                        insideDefine,
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
                const _valueMappers = {
                    simpleStrings: (str) => `'${str.replace(/'/g, "\\'")}'`
                };
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    ...args,
                    valueMappers: {
                        base64: _valueMappers.simpleStrings,
                        css: _valueMappers.simpleStrings,
                        glyphs: (glyph) => glyph ? `"\\u{${glyph.toString(16).replace(/'/g, "\\'")}}"` : 'null',
                        names: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        slugs: _valueMappers.simpleStrings,
                        svg: _valueMappers.simpleStrings,
                        svgHidden: _valueMappers.simpleStrings,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const keys = entries.all.map(([key]) => key).sort();
                const keyObjectShape = keys.map(key => `${key}: string`).join(', ');
                const setName_UC = setName.toUpperCase();
                const ret = [];
                for (const opt of getSvgConsts.returnOpts) {
                    // continues
                    if (typeof entries[opt] === 'undefined') {
                        continue;
                    }
                    let content;
                    let insideDefine = true;
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
                            insideDefine = false;
                            type = `( ${keys.map(key => `"${key}"`).join('|')} )[]`;
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
                    ret.push(...outputConstant(phpNamespace, `BRAND_${setName_UC}_${constName}`, content, {
                        comment,
                        insideDefine,
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
                        themes: (value) => `'${value.replace(/'/g, "\\'")}'`,
                        themeNames: (value) => `_x( '${toTitleCase(value)}', 'colour theme name', '${textDomain}' )`,
                        tokenSlugs: (value) => entriesToArray(value.map((v, i) => [
                            i.toString(),
                            `'${v.replace(/'/g, "\\'")}'`,
                        ]), false).split('\n').join('\n    '),
                        tokenSlugNames: (value) => entriesToArray(value.map(v => [
                            v,
                            `_x( '${toTitleCase(v)}', 'colour variation name', '${textDomain}' )`,
                        ])).split('\n').join('\n    '),
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const themesMeta = tokens.themes._meta;
                const tokenKeyEntries = Object.entries(themesMeta.keys);
                const themeSlugs = Object.keys(tokens.themes).filter(key => key !== '_meta');
                const ret = [];
                for (const opt of getThemeConsts.returnOpts) {
                    let content;
                    let insideDefine = true;
                    let insideHook = false;
                    let type;
                    switch (opt) {
                        case 'themes':
                            content = entriesToArray(entries[opt], false);
                            insideDefine = false;
                            type = `( ${themeSlugs.map(key => `"${key}"`).join('|')} )[]`;
                            break;
                        case 'themeNames':
                            content = entriesToObject(entries[opt]);
                            insideHook = true;
                            type = `object{ ${themeSlugs.map(key => `${key}: string`).join(', ')} }`;
                            break;
                        case 'tokenSlugs':
                            content = entriesToObject(entries[opt]);
                            type = `object{ ${tokenKeyEntries.map(([key]) => `${key}: string[]`).join(', ')} }`;
                            break;
                        case 'tokenSlugNames':
                            content = entriesToObject(entries[opt]);
                            insideHook = true;
                            type = `object{ ${tokenKeyEntries.map(([key, values]) => `${key}: array{ ${values.map(subKey => `${subKey}: string`).join(', ')} }`).join(', ')} }`;
                            break;
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    const { constName, comment, } = parseReturnOpt('theme', opt);
                    ret.push(...outputConstant(phpNamespace, `BRAND_THEME_${constName}`, content, {
                        comment,
                        insideDefine,
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
                return Promise.all([
                    getSvg('icons', tokens.icons, textDomain, phpNamespace, args.icons),
                    getSvg('logos', tokens.logos, textDomain, phpNamespace, args.logos),
                    getTheme(tokens, textDomain, phpNamespace, args.theme),
                    getCustom(args.custom ?? [], phpNamespace),
                ]).then(([icons, logos, theme, custom,]) => [
                    icons,
                    logos,
                    theme,
                    custom,
                ].filter(v => v?.length).join('\n\n'));
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
             * Gets a string of valid TypeScript code for wordpress defining
             * custom constants to go with the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getCustom(
            /**
             * Values to print indexed by their constant name.
             */
            constants) {
                const ret = [];
                for (const [constName, value, args] of constants) {
                    const { comment = `Values for ${constName}.`, type, } = args ?? {};
                    let content;
                    if (typeof value === 'string') {
                        content = value;
                    }
                    else {
                        const entries = Object.entries(value);
                        if (Array.isArray(value)) {
                            content = entriesToArray(entries);
                        }
                        else {
                            content = entriesToObject(entries);
                        }
                    }
                    // continues
                    if (!content?.length) {
                        continue;
                    }
                    ret.push(...outputConstant(constName, content, {
                        comment,
                        type,
                    }), '');
                }
                return ret.join('\n');
            }
            TS.getCustom = getCustom;
            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the given set of SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getSvg(_setName, svgSet, textDomain, args = {}) {
                const setName = _setName.replace(/s$/g, '');
                const _valueMappers = {
                    simpleStrings: (str) => `'${str.replace(/'/g, "\\'")}'`
                };
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    ...args,
                    valueMappers: {
                        base64: _valueMappers.simpleStrings,
                        css: _valueMappers.simpleStrings,
                        glyphs: (glyph) => glyph ? `'\\${glyph.toString(16).replace(/'/g, "\\'")}'` : 'null',
                        names: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        slugs: _valueMappers.simpleStrings,
                        svg: _valueMappers.simpleStrings,
                        svgHidden: _valueMappers.simpleStrings,
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
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getTheme(tokens, textDomain, args = {}) {
                const SVG_CONSTANTS = await getThemeConsts(tokens, {
                    ...args,
                    valueMappers: {
                        themes: (value) => `'${value.replace(/'/g, "\\'")}'`,
                        themeNames: (value) => `_x( '${toTitleCase(value)}', 'colour theme name', '${textDomain}' )`,
                        tokenSlugs: (value) => entriesToArray(value.map((v, i) => [
                            i.toString(),
                            `'${v.replace(/'/g, "\\'")}'`,
                        ])).split('\n').join('\n    '),
                        tokenSlugNames: (value) => entriesToObject(value.map((v, i) => [
                            v,
                            `_x( '${toTitleCase(v)}', 'colour variation name', '${textDomain}' )`,
                        ])).split('\n').join('\n    '),
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const typeString = entriesToObject_type(entries.tokenSlugs.map(([key]) => [key, 'string[]']));
                const ret = [];
                for (const opt of getThemeConsts.returnOpts) {
                    let content;
                    let type = undefined;
                    switch (opt) {
                        case 'themes':
                            content = entriesToArray(entries[opt]);
                            break;
                        case 'themeNames':
                        case 'tokenSlugs':
                        case 'tokenSlugNames':
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
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getAll(tokens, textDomain, args = {}) {
                return Promise.all([
                    getSvg('icons', tokens.icons, textDomain, args.icons),
                    getSvg('logos', tokens.logos, textDomain, args.logos),
                    getTheme(tokens, textDomain, args.theme),
                    getCustom(args.custom ?? []),
                ]).then(([icons, logos, theme, custom,]) => [
                    icons,
                    logos,
                    theme,
                    custom,
                ].filter(v => v?.length).join('\n\n'));
            }
            TS.getAll = getAll;
        })(TS = Wordpress.TS || (Wordpress.TS = {}));
    })(Wordpress = getBrandConstants.Wordpress || (getBrandConstants.Wordpress = {}));
})(getBrandConstants || (getBrandConstants = {}));
