/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { isObjectEmpty, slugify, } from '@maddimathon/utility-typescript';
/**
 * Tools for build scripts to write files of brand kit values .
 *
 * @since 0.1.0-beta.0.draft
 */
export var getBrandConstants;
(function (getBrandConstants) {
    /**
     * Gets a string of valid typescript for defining constants for the given set
     * of SVGs.
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
        const cssGetter = (value) => value.svgCssEmbedded.replace(/\s*\n+\s*/g, '');
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
                    svgFn(value.svgInlineLabelled.replace(/\s*\n+\s*/g, '')),
                ]
                : ([key, value]) => [
                    keyFn(key),
                    value.svgInlineLabelled.replace(/\s*\n+\s*/g, ''),
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
        getSvgConsts.returnOpts = [
            'base64',
            'css',
            'names',
            'slugs',
            'svg',
        ];
    })(getSvgConsts = getBrandConstants.getSvgConsts || (getBrandConstants.getSvgConsts = {}));
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
            }
            return {
                constName: constName ?? opt.toUpperCase(),
                comment: comment ?? `Brand kit ${setName} as ${opt}.`,
            };
        }
        /**
         * Export to a PHP string.
         *
         * @since 0.1.0-beta.0.draft
         */
        let PHP;
        (function (PHP) {
            function entriesToArray(entries, associativeArray = true) {
                // returns
                if (!entries?.length) {
                    return '';
                }
                // returns
                if (!associativeArray) {
                    return `[${entries.map((arr) => `\n    ${arr[1]},`).join('')}${entries.length ? '\n' : ''}]`;
                }
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `[${entries.map(([key, value]) => `\n    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? '\n' : ''}]`;
            }
            function entriesToObject(entries) {
                // returns
                if (!entries?.length) {
                    return '';
                }
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `(object) [${entries.map(([key, value]) => `\n    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? '\n' : ''}]`;
            }
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
                        names: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        slugs: (slug) => `'${slug.replace(/'/g, "\\'")}'`,
                        svg: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const typeString = entriesToObject_type(entries.names.map(([key]) => [key, 'string']));
                const setName_UC = setName.toUpperCase();
                const ret = [];
                for (const opt of getSvgConsts.returnOpts) {
                    let content;
                    let type = undefined;
                    switch (opt) {
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
        })(TS = Wordpress.TS || (Wordpress.TS = {}));
    })(Wordpress = getBrandConstants.Wordpress || (getBrandConstants.Wordpress = {}));
})(getBrandConstants || (getBrandConstants = {}));
