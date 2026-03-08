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
        const setName = _setName.replace(/s$/g, '');
        const entries = Object.entries(svgSet).map(([key, value]) => [
            slugify(key).replace(/\-/gi, '_').toLowerCase(),
            value,
        ]).sort((a, b) => {
            if (a[0] > b[0]) {
                return 1;
            }
            if (a[0] < b[0]) {
                return -1;
            }
            return 0;
        });
        const base64Fn = args.entryMappers?.base64;
        const cssFn = args.entryMappers?.css;
        const nameFn = args.entryMappers?.name;
        const svgFn = args.entryMappers?.svg;
        const mappers = {
            css: typeof cssFn === 'function'
                ? (([key, value]) => [
                    key,
                    cssFn(value.svgCssEmbedded.replace(/\s*\n+\s*/g, '')),
                ])
                : (([key, value]) => [
                    key,
                    value.svgCssEmbedded.replace(/\s*\n+\s*/g, ''),
                ]),
            name: typeof nameFn === 'function'
                ? (([key, value]) => [
                    key,
                    nameFn(value.label),
                ])
                : (([key, value]) => [key, value.label]),
            svg: typeof svgFn === 'function'
                ? (([key, value]) => [
                    key,
                    svgFn(value.svgInlineLabelled.replace(/\s*\n+\s*/g, '')),
                ])
                : (([key, value]) => [
                    key,
                    value.svgInlineLabelled.replace(/\s*\n+\s*/g, ''),
                ]),
        };
        /**
         * Labelled SVG code for inline html use.
         */
        const entries_svg = entries.map(mappers.svg);
        /**
         * Values for inline CSS use.
         */
        const entries_css = entries.map(mappers.css);
        const mapper_base64 = typeof base64Fn === 'function'
            ? ([key, svg]) => [key, base64Fn(btoa(svg))]
            : ([key, svg]) => [key, btoa(svg)];
        /**
         * The inline CSS values base64 encoded.
         */
        const entries_base64 = entries_css.map(mapper_base64);
        const entries_names = entries.sort((a, b) => {
            const sort_a = a[1].label;
            const sort_b = b[1].label;
            if (sort_a > sort_b) {
                return 1;
            }
            if (sort_a < sort_b) {
                return -1;
            }
            return 0;
        }).map(mappers.name);
        return {
            setName,
            entries: {
                all: entries,
                base64: entries_base64,
                css: entries_css,
                name: entries_names,
                svg: entries_svg,
            },
        };
    }
    getBrandConstants.getSvgConsts = getSvgConsts;
    /**
     * For use in Wordpress projects (uses _x for translation).
     *
     * @since 0.1.0-beta.0.draft
     */
    let Wordpress;
    (function (Wordpress) {
        /**
         * Export to a PHP string.
         *
         * @since 0.1.0-beta.0.draft
         */
        let PHP;
        (function (PHP) {
            function entriesToArray(entries) {
                const longestKeyLength = Math.max(...entries.map(([key]) => key.length));
                return `[${entries.map(([key, value]) => `\n    '${key}' ${' '.repeat(longestKeyLength - key.length)}=> ${value},`).join('')}${entries.length ? '\n' : ''}]`;
            }
            function outputConstant(varName, content, args) {
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
            async function getSvg(_setName, svgSet, textDomain, phpNamespace) {
                const setName = _setName.replace(/s$/g, '');
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    entryMappers: {
                        base64: (base64) => `'${base64.replace(/'/g, "\\'")}'`,
                        name: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        svg: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                const keys = entries.all.map(([key]) => key).sort();
                phpNamespace = phpNamespace.length ? phpNamespace.replace(/\/$/gi, '') + '\\' : '';
                const phpStrings = {
                    keyObjectShape: keys.map(key => `${key}: string`).join(', '),
                    names: entriesToArray(entries.name),
                    svg: '(object) ' + entriesToArray(entries.svg),
                    svgBase64: '(object) ' + entriesToArray(entries.base64),
                };
                const setName_UC = setName.toUpperCase();
                return [
                    ...outputConstant(`${phpNamespace}BRAND_${setName_UC}_NAMES`, phpStrings.names, {
                        comment: `All ${setName} slugs and their labels.`,
                        type: `array{ ${phpStrings.keyObjectShape} }`,
                        insideHook: true,
                    }),
                    '',
                    ...outputConstant(`${phpNamespace}BRAND_${setName_UC}_SVG`, phpStrings.svg, {
                        comment: `All ${setName} svg values indexed by slug.`,
                        type: `object{ ${phpStrings.keyObjectShape} }`,
                    }),
                    '',
                    ...outputConstant(`${phpNamespace}BRAND_${setName_UC}_SVG_BASE64`, phpStrings.svgBase64, {
                        comment: `All ${setName} base64-encoded svgs indexed by slug.`,
                        type: `object{ ${phpStrings.keyObjectShape} }`,
                    }),
                ].join('\n');
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
                return '{' + entries.map(([key, value]) => `\n    ${key.includes('-') ? `'${key}'` : key}: ${value},`).join('') + (entries.length ? '\n' : '') + '}';
            }
            function entriesToArray_type(entries) {
                return '{' + entries.map(([key, value]) => `\n    readonly ${key.includes('-') ? `'${key}'` : key}: ${value};`).join('') + (entries.length ? '\n' : '') + '}';
            }
            function outputConstant(varName, content, args) {
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
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            async function getSvg(_setName, svgSet, textDomain) {
                const setName = _setName.replace(/s$/g, '');
                const SVG_CONSTANTS = await getSvgConsts(_setName, svgSet, {
                    entryMappers: {
                        base64: (base64) => `'${base64.replace(/'/g, "\\'")}'`,
                        name: (label) => `_x( '${label}', '${setName} display name', '${textDomain}' )`,
                        svg: (svg) => `'${svg.replace(/'/g, "\\'")}'`,
                    },
                });
                if (!SVG_CONSTANTS) {
                    return null;
                }
                const { entries, } = SVG_CONSTANTS;
                // const keys = entries.all.map( ( [ key ] ) => key ).sort();
                const tsStrings = {
                    // type: keys.map( key => `${ key }: string;` ).join( ', ' ),
                    type: entriesToArray_type(entries.name.map(([key, value]) => [key, 'string'])),
                    names: entriesToArray(entries.name),
                    svg: entriesToArray(entries.svg),
                    svgBase64: entriesToArray(entries.base64),
                };
                const setName_UC = setName.toUpperCase();
                return [
                    ...outputConstant(`${setName_UC}_NAMES`, tsStrings.names, {
                        comment: `All ${setName} slugs and their labels.`,
                    }),
                    '',
                    ...outputConstant(`${setName_UC}_SVG`, tsStrings.svg, {
                        comment: `All ${setName} svg values indexed by slug.`,
                        type: tsStrings.type,
                    }),
                    '',
                    ...outputConstant(`${setName_UC}_SVG_BASE64`, tsStrings.svgBase64, {
                        comment: `All ${setName} base64-encoded svgs indexed by slug.`,
                        type: tsStrings.type,
                    }),
                ].join('\n');
            }
            TS.getSvg = getSvg;
        })(TS = Wordpress.TS || (Wordpress.TS = {}));
    })(Wordpress = getBrandConstants.Wordpress || (getBrandConstants.Wordpress = {}));
})(getBrandConstants || (getBrandConstants = {}));
