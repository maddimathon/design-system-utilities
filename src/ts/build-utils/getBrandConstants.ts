/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ArrayItem } from '@maddimathon/utility-typescript/types';

import {
    isObjectEmpty,
    slugify,
    toTitleCase,
} from '@maddimathon/utility-typescript';

import type { SvgMaker } from '../01-utilities/SvgMaker.js';

import { Tokens } from '../02-tokens/Tokens.js';

/**
 * Tools for build scripts to write files of brand kit values .
 *
 * @since ___PKG_VERSION___
 */
export namespace getBrandConstants {

    /**
     * Prepares values to write files of constants for the given set of SVGs.
     *
     * @since ___PKG_VERSION___
     */
    export async function getSvgConsts<
        T_SetName extends getSvgConsts.SetName,
        T_ReturnOptions extends getSvgConsts.ReturnOptions,
    >(
        _setName: T_SetName,
        svgSet: Tokens.JsonReturn[ T_SetName ] | Tokens.Instance[ T_SetName ],
        args: getSvgConsts.Args = {},
    ): Promise<null | {
        readonly setName: T_SetName;
        readonly entries: {
            readonly all: readonly [ string, SvgMaker.JsonReturn<string> ][];
        } & {
            readonly [ K in T_ReturnOptions ]: readonly [ string, string ][];
        };
    }> {
        // returns
        if ( !svgSet || isObjectEmpty( svgSet ) ) {
            return null;
        }

        const include = {
            base64: args.incl?.base64 ?? false,
            css: args.incl?.css ?? args.incl?.svgHidden ?? args.incl?.svg ?? false,
            glyphs: ( args.incl?.glyphs ?? true ) && _setName === 'icons',
            names: args.incl?.names ?? true,
            slugs: args.incl?.slugs ?? false,
            svg: args.incl?.svg ?? true,
            svgHidden: args.incl?.svgHidden ?? args.incl?.svg ?? true,
        } as const satisfies {
            [ K in getSvgConsts.ReturnOptions ]: boolean;
        };

        const setName = _setName.replace( /s$/g, '' ) as T_SetName;

        type EntriesReturn = {
            all: [ string, SvgMaker.JsonReturn<string> ][];
        } & {
            [ K in getSvgConsts.ReturnOptions ]?: [ string, string ][];
        };

        const entries: EntriesReturn = {

            all: Object.entries( svgSet ).map(
                ( [ key, value ] ): [ string, SvgMaker.JsonReturn ] => [
                    slugify( key ).replace( /\-/gi, '_' ).toLowerCase(),
                    value,
                ]
            ) satisfies [ string, SvgMaker.JsonReturn<string> ][],
        } as EntriesReturn;

        entries.all.sort(
            ( a, b ) => {

                if ( a[ 0 ] > b[ 0 ] ) {
                    return 1;
                }

                if ( a[ 0 ] < b[ 0 ] ) {
                    return -1;
                }

                return 0;
            }
        );

        type MapperFn<A extends any[] = typeof entries.all> = ( _: ArrayItem<A> ) => [ string, string ];

        const cssGetter = ( value: ArrayItem<typeof entries.all>[ 1 ] ): string =>
            value.svgCssEmbedded.replace( /\s*\n+\s*/g, ' ' );

        if ( include.base64 ) {
            const base64Fn = args.valueMappers?.base64;

            const keyFn = args.keyMappers?.base64 ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof base64Fn === 'function'
                ? ( [ key, value ] ) => [ keyFn( key ), base64Fn( btoa( cssGetter( value ) ) ) ]
                : ( [ key, value ] ) => [ keyFn( key ), btoa( cssGetter( value ) ) ];

            /**
             * The inline CSS values base64 encoded.
             */
            entries.base64 = entries.all.map( mapper );
        }

        if ( include.css ) {
            const cssFn = args.valueMappers?.css;

            const keyFn = args.keyMappers?.css ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof cssFn === 'function'
                ? ( [ key, value ] ) => [
                    keyFn( key ),
                    cssFn( cssGetter( value ) ),
                ]
                : ( [ key, value ] ) => [ keyFn( key ), cssGetter( value ) ];

            /**
             * Values for inline CSS use.
             */
            entries.css = entries.all.map( mapper );
        }

        if ( _setName === 'icons' && include.glyphs ) {
            const glyphsFn = args.valueMappers?.glyphs;

            const keyFn = args.keyMappers?.glyphs ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof glyphsFn === 'function'
                ? ( [ key, value ] ) => [
                    keyFn( key ),
                    glyphsFn( value.meta?.codepoint ),
                ]
                : ( [ key, value ] ) => [ keyFn( key ), value.meta?.codepoint?.toString( 16 ) ];

            /**
             * Values for inline CSS use.
             */
            entries.glyphs = entries.all.map( mapper );
        }

        if ( include.names ) {
            const namesFn = args.valueMappers?.names;

            const keyFn = args.keyMappers?.names ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof namesFn === 'function'
                ? ( [ key, value ] ) => [ keyFn( key ), namesFn( value.label ) ]
                : ( [ key, value ] ) => [ keyFn( key ), value.label ];

            entries.names = [ ...entries.all ].sort(
                ( a, b ) => {
                    const sort_a = a[ 1 ].label;
                    const sort_b = b[ 1 ].label;

                    if ( sort_a > sort_b ) {
                        return 1;
                    }

                    if ( sort_a < sort_b ) {
                        return -1;
                    }

                    return 0;
                }
            ).map( mapper );
        }

        if ( include.slugs ) {
            const slugsFn = args.valueMappers?.slugs;

            const keyFn = args.keyMappers?.slugs ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof slugsFn === 'function'
                ? ( [ key ] ) => [ keyFn( key ), slugsFn( key ) ]
                : ( [ key ] ) => [ keyFn( key ), key ];

            entries.slugs = entries.all.map( mapper );
        }

        if ( include.svg ) {
            const svgFn = args.valueMappers?.svg;

            const keyFn = args.keyMappers?.svg ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof svgFn === 'function'
                ? ( [ key, value ] ) => [
                    keyFn( key ),
                    svgFn( value.svgInlineLabelled.replace( /\s*\n+\s*/g, ' ' ) ),
                ]
                : ( [ key, value ] ) => [
                    keyFn( key ),
                    value.svgInlineLabelled.replace( /\s*\n+\s*/g, ' ' ),
                ];

            /**
             * Labelled SVG code for inline html use.
             */
            entries.svg = entries.all.map( mapper );
        }

        if ( include.svgHidden ) {
            const svgFn = args.valueMappers?.svgHidden;

            const keyFn = args.keyMappers?.svgHidden ?? ( ( key: string ) => key );

            const mapper: MapperFn = typeof svgFn === 'function'
                ? ( [ key, value ] ) => [
                    keyFn( key ),
                    svgFn( value.svgInlineHidden.replace( /\s*\n+\s*/g, ' ' ) ),
                ]
                : ( [ key, value ] ) => [
                    keyFn( key ),
                    value.svgInlineHidden.replace( /\s*\n+\s*/g, ' ' ),
                ];

            /**
             * SR-hidden SVG code for inline html use.
             */
            entries.svgHidden = entries.all.map( mapper );
        }

        return {
            setName,
            entries: entries as {
                readonly all: readonly [ string, SvgMaker.JsonReturn<string> ][];
            } & {
                readonly [ K in T_ReturnOptions ]: readonly [ string, string ][];
            },
        };
    }

    /**
     * Utilities for the {@link getSvgConstants} function.
     * 
     * @since ___PKG_VERSION___
     */
    export namespace getSvgConsts {

        /**
         * @since ___PKG_VERSION___
         */
        export type Args<T_ExtraReturnOptions extends string = never> = {

            /**
             * Optionally map entry key strings as they are built.
             * 
             * @since ___PKG_VERSION___
             */
            keyMappers?: {
                [ K in ReturnOptions ]?: ( item: string ) => string;
            };

            /**
             * Optionally map entry value strings as they are built.
             * 
             * @since ___PKG_VERSION___
             */
            valueMappers?: {
                [ K in ReturnOptions ]?: ( item: string ) => string;
            };

            /**
             * Which variables to include in the return.
             */
            incl?: {
                [ K in ReturnOptions | T_ExtraReturnOptions ]?: boolean;
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        export const returnOpts = [
            'base64',
            'css',
            'glyphs',
            'names',
            'slugs',
            'svg',
            'svgHidden',
        ] as const;

        /**
         * @since ___PKG_VERSION___
         */
        export type ReturnOptions = typeof returnOpts[ number ];

        /**
         * @since ___PKG_VERSION___
         */
        export type SetName = "icons" | "logos";
    }

    /**
     * Prepares values to write files of token value constants.
     *
     * @since ___PKG_VERSION___
     */
    export async function getThemeConsts<
        T_ReturnOptions extends getThemeConsts.ReturnOptions,
    >(
        tokens: Tokens.JsonReturn,
        args: getThemeConsts.Args = {},
    ): Promise<null | {
        readonly entries: {
            readonly [ K in T_ReturnOptions ]: readonly [ string, string ][];
        };
    }> {

        const include = {
            themes: args.incl?.themes ?? true,
            themeNames: args.incl?.themeNames ?? true,
            tokenSlugs: args.incl?.tokenSlugs ?? true,
            tokenSlugNames: args.incl?.tokenSlugNames ?? true,
        } as const satisfies {
            [ K in getThemeConsts.ReturnOptions ]: boolean;
        };

        type EntriesReturn = {
            [ K in getThemeConsts.ReturnOptions ]?: [ string, string ][];
        };

        const themesMeta = tokens.themes._meta;

        const themeSlugs = Object.keys( tokens.themes ).filter( key => key !== '_meta' );

        const entries: EntriesReturn = {};

        const valueFn_fallback = ( key: string | string[] ) => Array.isArray( key ) ? key.join( ',' ) : key;

        if ( include.themes ) {

            const valueFn = args.valueMappers?.themes ?? valueFn_fallback;

            const keyFn = args.keyMappers?.themes ?? ( ( key: string ) => key );

            entries.themes = themeSlugs.map( ( key ) => [ keyFn( key ), valueFn( key ) ] );
        }

        if ( include.themeNames ) {

            const valueFn = args.valueMappers?.themeNames ?? valueFn_fallback;

            const keyFn = args.keyMappers?.themeNames ?? ( ( key: string ) => key );

            entries.themeNames = themeSlugs.map( ( key ) => [ keyFn( key ), valueFn( tokens.themes[ key ]?._name ?? key ) ] );
        }

        if ( include.tokenSlugs ) {

            const valueFn = args.valueMappers?.tokenSlugs ?? valueFn_fallback;

            const keyFn = args.keyMappers?.tokenSlugs ?? ( ( key: string ) => key );

            const _entries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

            entries.tokenSlugs = _entries.map( ( [ key, value ] ) => [ keyFn( key ), valueFn( value ) ] );
        }

        if ( include.tokenSlugNames ) {

            const valueFn = args.valueMappers?.tokenSlugNames ?? valueFn_fallback;

            const keyFn = args.keyMappers?.tokenSlugNames ?? ( ( key: string ) => key );

            const _entries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

            entries.tokenSlugNames = _entries.map( ( [ key, value ] ) => [ keyFn( key ), valueFn( value ) ] );
        }

        return {
            entries: entries as {
                readonly [ K in T_ReturnOptions ]: readonly [ string, string ][];
            },
        };
    }

    /**
     * Utilities for the {@link getSvgConstants} function.
     * 
     * @since ___PKG_VERSION___
     */
    export namespace getThemeConsts {

        /**
         * @since ___PKG_VERSION___
         */
        export type Args<T_ExtraReturnOptions extends string = never> = {

            /**
             * Optionally map entry key strings as they are built.
             * 
             * @since ___PKG_VERSION___
             */
            keyMappers?: {
                [ K in ReturnOptions ]?: ( item: string ) => string;
            };

            /**
             * Optionally map entry value strings as they are built.
             * 
             * @since ___PKG_VERSION___
             */
            valueMappers?: {
                [ K in Extract<ReturnOptions, 'themes' | 'themeNames'> ]?: ( item: string ) => string
            } & {
                [ K in Exclude<ReturnOptions, 'themes' | 'themeNames'> ]?: ( item: string[] ) => string
            };

            /**
             * Which variables to include in the return.
             */
            incl?: {
                [ K in ReturnOptions | T_ExtraReturnOptions ]?: boolean;
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        export const returnOpts = [
            'themes',
            'themeNames',
            'tokenSlugs',
            'tokenSlugNames',
        ] as const;

        /**
         * @since ___PKG_VERSION___
         */
        export type ReturnOptions = typeof returnOpts[ number ];
    }

    /**
     * For use in Wordpress projects (uses _x for translation).
     * 
     * @since ___PKG_VERSION___
     */
    export namespace Wordpress {

        /**
         * @since ___PKG_VERSION___
         */
        function parseReturnOpt<T_SetName extends getSvgConsts.SetName | 'theme'>(
            setName: T_SetName,
            opt: getSvgConsts.ReturnOptions | getThemeConsts.ReturnOptions,
        ) {
            const commentName = setName.replace( /\Bs$/gi, '' );

            let constName: undefined | string;
            let comment: undefined | string;

            switch ( opt ) {

                case 'base64':
                    comment = `All ${ setName } as base64-encoded svgs, indexed by slug.`;
                    break;

                case 'css':
                    comment = `All ${ setName } as css-ready svg values, indexed by slug.`;
                    break;

                case 'names':
                    comment = `All ${ commentName } slugs and their labels.`;
                    break;

                case 'svg':
                    comment = `All ${ setName } as svg values (visible to screen-readers), indexed by slug.`;
                    break;

                case 'svgHidden':
                    comment = `All ${ setName } as svg values (hidden from screen-readers), indexed by slug.`;
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
                comment: comment ?? `Brand kit ${ setName } tokens as ${ opt }.`,
            } as const;
        }

        /**
         * Export to a PHP string.
         * 
         * @since ___PKG_VERSION___
         */
        export namespace PHP {

            /**
             * Tries its best to recursively format a value.
             * 
             * @since ___PKG_VERSION___
             */
            export function prepareConstant(
                [ key, value ]: [ string, unknown ],
                {
                    indent = '',
                    keyFilter,
                    valueFilter,
                }: {
                    indent?: string | undefined,
                    keyFilter?: ( ( str: string ) => string ) | undefined,
                    valueFilter?: ( ( str: string ) => string ) | undefined,
                } = {}
            ): [ string, string ] {

                let ret: [ string, string ];

                // returns
                switch ( typeof value ) {

                    case 'boolean':
                        ret = [ key, value ? 'true' : 'false' ];
                        break;

                    case 'bigint':
                    case 'number':
                        ret = [ key, value.toString() ];
                        break;

                    case 'undefined':
                        ret = [ key, 'null' ];
                        break;

                    case 'object':
                        // returns
                        if ( value === null ) {
                            ret = [ key, 'null' ];
                            break;
                        }

                        ret = [
                            key,
                            entriesToArray(
                                Object.entries( value ).map( entry => prepareConstant( entry, {
                                    indent: '    ' + indent,
                                    keyFilter,
                                    valueFilter,
                                } ) ),
                                !Array.isArray( value ),
                                indent,
                            ),
                        ];
                        break;

                    default:
                        ret = [ key, `'${ String( value ).replace( /'/, "\\'" ) }'` ];
                        break;
                }

                if ( keyFilter ) {
                    ret[ 0 ] = keyFilter( ret[ 0 ] );
                }

                if ( valueFilter ) {
                    ret[ 1 ] = valueFilter( ret[ 1 ] );
                }

                return ret;
            }

            export function entriesToArray(
                entries: [ string, string ][] | readonly [ string, string ][],
                associativeArray: boolean = true,
                indent: string = '',
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '[]';
                }

                // returns
                if ( !associativeArray ) {
                    return `[${ entries.map(
                        ( arr ) => `\n${ indent }    ${ arr[ 1 ] },`
                    ).join( '' ) }${ entries.length ? `\n${ indent }` : '' }]`;
                }

                const longestKeyLength = Math.max( ...entries.map( ( [ key ] ) => key.length ) );

                return `[${ entries.map(
                    ( [ key, value ] ) =>
                        `\n${ indent }    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> ${ value },`
                ).join( '' ) }${ entries.length ? `\n${ indent }` : '' }]`;
            }

            export function entriesToObject(
                entries: [ string, string ][] | readonly [ string, string ][],
                indent: string = '',
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '(object) []';
                }

                const longestKeyLength = Math.max( ...entries.map( ( [ key ] ) => key.length ) );

                return `(object) [${ entries.map(
                    ( [ key, value ] ) =>
                        `\n${ indent }    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> ${ value },`
                ).join( '' ) }${ entries.length ? `\n${ indent }` : '' }]`;
            }

            function outputConstant(
                phpNamespace: string,
                varName: string,
                content: string,
                args: {
                    comment: string,
                    type: string,
                    insideDefine?: undefined | boolean,
                    insideHook?: undefined | boolean,
                },
            ): string[] {
                // returns
                if ( !content ) {
                    return [];
                }

                phpNamespace = phpNamespace.length ? phpNamespace.replace( /[\/|\\]+$/gi, '' ) + '\\' : '';

                // returns
                if ( !args.insideHook ) {
                    return args.insideDefine !== false ? [
                        '/**',
                        ` * ${ args.comment }`,
                        ' *',
                        ` * @var ${ args.type }`,
                        ' */',
                        `\\define(`,
                        `    '${ phpNamespace }${ varName }',`,
                        `    ${ content.split( '\n' ).join( '\n    ' ) },`,
                        ');',
                    ] : [
                        '/**',
                        ` * ${ args.comment }`,
                        ' *',
                        ` * @var ${ args.type }`,
                        ' */',
                        `const ${ varName } = ${ content };`,
                    ];
                }

                return [
                    '// hooked for access to translation',
                    `\\add_action(`,
                    `    \'init\',`,
                    `    function () {`,
                    '        // returns',
                    `        if ( \\defined( '${ phpNamespace }${ varName }' ) ) {`,
                    '            return;',
                    '        }',
                    '',
                    '        /**',
                    `         * ${ args.comment }`,
                    '         *',
                    `         * @var ${ args.type }`,
                    '         */',
                    `        \\define(`,
                    `            '${ phpNamespace }${ varName }',`,
                    `            ${ content.split( '\n' ).join( '\n            ' ) },`,
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
             * @since ___PKG_VERSION___
             */
            export async function getCustom<
                T_ConstName extends string,
                T_Value extends getCustom.Value,
            >(
                constants: getCustom.Input<T_ConstName, T_Value>[],
                phpNamespace: string,
            ): Promise<null | string> {

                const ret: string[] = [];

                for ( const [ constName, value, args ] of constants ) {

                    const {
                        comment = `Values for ${ constName }.`,
                        insideHook = false,
                        objectAsAssociativeArray = true,
                        objectAsObject = true,
                        type,
                        // 
                        insideDefine = !objectAsObject,
                    } = args;

                    let content: string;

                    const entries = Object.entries( value );

                    if ( Array.isArray( value ) ) {
                        content = entriesToArray( entries, false );
                    } else if ( objectAsObject ) {
                        content = entriesToObject( entries );
                    } else {
                        content = entriesToArray( entries, objectAsAssociativeArray );
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    ret.push(
                        ...outputConstant(
                            phpNamespace,
                            constName,
                            content,
                            {
                                comment,
                                insideDefine,
                                insideHook,
                                type,
                            },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * @since ___PKG_VERSION___
             */
            export namespace getCustom {

                /**
                 * Accepted values for custom constants.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Value = string[] | Record<number | string, string>;

                /**
                 * @template T_ConstName Constant name.
                 * @template T_Value Constant value in JS.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Input<
                    T_ConstName extends string = string,
                    T_Value extends Value = Value,
                > = [ T_ConstName, T_Value, Args ];

                /**
                 * Configure how to output a custom constant’s definition.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Args = {
                    comment?: undefined | string;
                    insideDefine?: undefined | boolean;
                    insideHook?: undefined | boolean;
                    objectAsAssociativeArray?: undefined | boolean;
                    objectAsObject?: undefined | boolean;
                    type: string;
                };
            }

            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             * 
             * @since ___PKG_VERSION___
             */
            export async function getSvg<T_SetName extends getSvgConsts.SetName>(
                _setName: T_SetName,
                svgSet: Tokens.JsonReturn[ T_SetName ] | Tokens.Instance[ T_SetName ],
                textDomain: string,
                phpNamespace: string,
                args: Omit<getSvgConsts.Args, 'valueMappers'> = {},
            ): Promise<null | string> {

                const setName = _setName.replace( /s$/g, '' );

                const _valueMappers = {
                    simpleStrings: ( str: string ): string => `'${ str.replace( /'/g, "\\'" ) }'`
                };

                const SVG_CONSTANTS = await getSvgConsts(
                    _setName,
                    svgSet,
                    {
                        ...args,
                        valueMappers: {
                            base64: _valueMappers.simpleStrings,
                            css: _valueMappers.simpleStrings,
                            glyphs: ( glyph?: number | string ): string => glyph ? `"\\u{${ glyph.toString( 16 ).replace( /'/g, "\\'" ) }}"` : 'null',
                            names: ( label ): string => `_x( '${ label }', '${ setName } display name', '${ textDomain }' )`,
                            slugs: _valueMappers.simpleStrings,
                            svg: _valueMappers.simpleStrings,
                            svgHidden: _valueMappers.simpleStrings,
                        } satisfies Required<Required<getSvgConsts.Args>[ 'valueMappers' ]>,
                    },
                );

                if ( !SVG_CONSTANTS ) {
                    return null;
                }

                const {
                    entries,
                } = SVG_CONSTANTS;

                const keys = entries.all.map( ( [ key ] ) => key ).sort();

                const keyObjectShape = keys.map( key => `${ key }: string` ).join( ', ' );

                const setName_UC = setName.toUpperCase();

                const ret: string[] = [];

                for ( const opt of getSvgConsts.returnOpts ) {
                    // continues
                    if ( typeof entries[ opt ] === 'undefined' ) {
                        continue;
                    }

                    let content: string;
                    let insideDefine = true;
                    let insideHook = false;
                    let type: string;

                    switch ( opt ) {

                        case 'glyphs':
                            content = entriesToObject( entries[ opt ] );
                            type = `object{ ${ keys.map( key => `${ key }: ?string` ).join( ', ' ) } }`;
                            break;

                        case 'names':
                            content = entriesToArray( entries[ opt ], true );
                            insideHook = true;
                            type = `array{ ${ keyObjectShape } }`;
                            break;

                        case 'slugs':
                            content = entriesToArray( entries[ opt ], false );
                            insideDefine = false;
                            type = `( ${ keys.map( key => `"${ key }"` ).join( '|' ) } )[]`;
                            break;

                        default:
                            content = entriesToObject( entries[ opt ] );
                            type = `object{ ${ keyObjectShape } }`;
                            break;
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    const {
                        constName,
                        comment,
                    } = parseReturnOpt( _setName, opt );

                    ret.push(
                        ...outputConstant(
                            phpNamespace,
                            `BRAND_${ setName_UC }_${ constName }`,
                            content,
                            {
                                comment,
                                insideDefine,
                                insideHook,
                                type,
                            },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getTheme(
                tokens: Tokens.JsonReturn,
                textDomain: string,
                phpNamespace: string,
                args: Omit<getThemeConsts.Args, 'valueMappers'> = {},
            ): Promise<null | string> {

                const SVG_CONSTANTS = await getThemeConsts(
                    tokens,
                    {
                        ...args,
                        valueMappers: {

                            themes: ( value ) => `'${ value.replace( /'/g, "\\'" ) }'`,

                            themeNames: ( value ) => `_x( '${ toTitleCase( value ) }', 'colour theme name', '${ textDomain }' )`,

                            tokenSlugs: ( value ) => entriesToArray(
                                value.map( ( v, i ) => [
                                    i.toString(),
                                    `'${ v.replace( /'/g, "\\'" ) }'`,
                                ] ),
                                false,
                            ).split( '\n' ).join( '\n    ' ),

                            tokenSlugNames: ( value ) => entriesToArray( value.map( v => [
                                v,
                                `_x( '${ toTitleCase( v ) }', 'colour variation name', '${ textDomain }' )`,
                            ] ) ).split( '\n' ).join( '\n    ' ),
                        } satisfies Required<Required<getThemeConsts.Args>[ 'valueMappers' ]>,
                    },
                );

                if ( !SVG_CONSTANTS ) {
                    return null;
                }

                const {
                    entries,
                } = SVG_CONSTANTS;

                const themesMeta = tokens.themes._meta;

                const tokenKeyEntries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

                const themeSlugs = Object.keys( tokens.themes ).filter( key => key !== '_meta' );

                const ret: string[] = [];

                for ( const opt of getThemeConsts.returnOpts ) {

                    let content: string;
                    let insideDefine = true;
                    let insideHook = false;
                    let type: string;

                    switch ( opt ) {

                        case 'themes':
                            content = entriesToArray( entries[ opt ], false );
                            insideDefine = false;
                            type = `( ${ themeSlugs.map( key => `"${ key }"` ).join( '|' ) } )[]`;
                            break;

                        case 'themeNames':
                            content = entriesToObject( entries[ opt ] );
                            insideHook = true;
                            type = `object{ ${ themeSlugs.map( key => `${ key }: string` ).join( ', ' ) } }`;
                            break;

                        case 'tokenSlugs':
                            content = entriesToObject( entries[ opt ] );
                            type = `object{ ${ tokenKeyEntries.map( ( [ key ] ) => `${ key }: string[]` ).join( ', ' ) } }`;
                            break;

                        case 'tokenSlugNames':
                            content = entriesToObject( entries[ opt ] );
                            insideHook = true;
                            type = `object{ ${ tokenKeyEntries.map(
                                ( [ key, values ] ) => `${ key }: array{ ${ values.map( subKey => `${ subKey }: string` ).join( ', ' ) } }`
                            ).join( ', ' ) } }`;
                            break;
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    const {
                        constName,
                        comment,
                    } = parseReturnOpt( 'theme', opt );

                    ret.push(
                        ...outputConstant(
                            phpNamespace,
                            `BRAND_THEME_${ constName }`,
                            content,
                            {
                                comment,
                                insideDefine,
                                insideHook,
                                type,
                            },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getAll(
                tokens: Tokens.JsonReturn,
                textDomain: string,
                phpNamespace: string,
                args: {
                    custom?: getCustom.Input[],
                    icons?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    logos?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    theme?: Omit<getThemeConsts.Args, 'valueMappers'>,
                } = {},
            ): Promise<string> {

                return Promise.all( [
                    getSvg( 'icons', tokens.icons, textDomain, phpNamespace, args.icons ),
                    getSvg( 'logos', tokens.logos, textDomain, phpNamespace, args.logos ),
                    getTheme( tokens, textDomain, phpNamespace, args.theme ),
                    getCustom( args.custom ?? [], phpNamespace ),
                ] ).then(
                    ( [
                        icons,
                        logos,
                        theme,
                        custom,
                    ] ) => [
                        icons,
                        logos,
                        theme,
                        custom,
                    ].filter( v => v?.length ).join( '\n\n' )
                );
            }
        }

        /**
         * Export to a TypeScript string.
         * 
         * @since ___PKG_VERSION___
         */
        export namespace TS {

            export function entriesToArray(
                entries: [ string, string ][] | readonly [ string, string ][],
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '';
                }

                return '[' + entries.map(
                    ( arr ) => `\n    ${ arr[ 1 ] },`
                ).join( '' ) + ( entries.length ? '\n' : '' ) + ']';
            }

            export function entriesToObject(
                entries: [ string, string ][] | readonly [ string, string ][],
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '';
                }

                return '{' + entries.map(
                    ( [ key, value ] ) => `\n    ${ key.includes( '-' ) ? `'${ key }'` : key }: ${ value },`
                ).join( '' ) + ( entries.length ? '\n' : '' ) + '}';
            }

            export function entriesToObject_type(
                entries: [ string, string ][] | readonly [ string, string ][],
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '';
                }

                return '{' + entries.map(
                    ( [ key, value ] ) => `\n    readonly ${ key.includes( '-' ) ? `'${ key }'` : key }: ${ value };`
                ).join( '' ) + ( entries.length ? '\n' : '' ) + '}';
            }

            export function outputConstant(
                varName: string,
                content: string,
                args: {
                    comment?: string,
                    type?: undefined | string,
                },
            ): string[] {
                // returns
                if ( !content ) {
                    return [];
                }

                const varStr = args.type?.length
                    ? `export const ${ varName }: ${ args.type } = ${ content };`
                    : `export const ${ varName } = ${ content } as const;`;

                return args.comment ? [
                    '/**',
                    ` * ${ args.comment }`,
                    ' */',
                    varStr,
                ] : [
                    varStr,
                ];
            }

            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * custom constants to go with the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getCustom<
                T_ConstName extends string,
                T_Value extends getCustom.Value,
            >(
                /**
                 * Values to print indexed by their constant name.
                 */
                constants: getCustom.Input<T_ConstName, T_Value>[],
            ): Promise<null | string> {

                const ret: string[] = [];

                for ( const [ constName, value, args ] of constants ) {

                    const {
                        comment = `Values for ${ constName }.`,
                        type,
                    } = args ?? {};

                    let content: string;

                    const entries = Object.entries( value );

                    if ( Array.isArray( value ) ) {
                        content = entriesToArray( entries );
                    } else {
                        content = entriesToObject( entries );
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    ret.push(
                        ...outputConstant(
                            constName,
                            content,
                            {
                                comment,
                                type,
                            },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * @since ___PKG_VERSION___
             */
            export namespace getCustom {

                /**
                 * Accepted values for custom constants.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Value = string[] | Record<number | string, string>;

                /**
                 * @template T_ConstName Constant name.
                 * @template T_Value Constant value in JS.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Input<
                    T_ConstName extends string = string,
                    T_Value extends Value = Value,
                > = [ T_ConstName, T_Value ] | [ T_ConstName, T_Value, Args ];

                /**
                 * Configure how to output a custom constant’s definition.
                 * 
                 * @since ___PKG_VERSION___
                 */
                export type Args = {
                    comment?: string;
                    type?: undefined | string;
                };
            }

            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the given set of SVGs.
             * 
             * @since ___PKG_VERSION___
             */
            export async function getSvg<T_SetName extends getSvgConsts.SetName>(
                _setName: T_SetName,
                svgSet: Tokens.JsonReturn[ T_SetName ] | Tokens.Instance[ T_SetName ],
                textDomain: string,
                args: Omit<getSvgConsts.Args<"react">, 'valueMappers'> = {},
            ): Promise<null | string> {

                const setName = _setName.replace( /s$/g, '' );

                const _valueMappers = {
                    simpleStrings: ( str: string ): string => `'${ str.replace( /'/g, "\\'" ) }'`
                };

                const SVG_CONSTANTS = await getSvgConsts(
                    _setName,
                    svgSet,
                    {
                        ...args,
                        valueMappers: {
                            base64: _valueMappers.simpleStrings,
                            css: _valueMappers.simpleStrings,
                            glyphs: ( glyph: number | string ): string => glyph ? `'\\${ glyph.toString( 16 ).replace( /'/g, "\\'" ) }'` : 'null',
                            names: ( label ): string => `_x( '${ label }', '${ setName } display name', '${ textDomain }' )`,
                            slugs: _valueMappers.simpleStrings,
                            svg: _valueMappers.simpleStrings,
                            svgHidden: _valueMappers.simpleStrings,
                        } satisfies Required<Required<getSvgConsts.Args>[ 'valueMappers' ]>,
                    },
                );

                if ( !SVG_CONSTANTS ) {
                    return null;
                }

                const {
                    entries,
                } = SVG_CONSTANTS;

                const typeString = entriesToObject_type( entries.all.map( ( [ key ] ) => [ key, 'string' ] ) );

                const setName_UC = setName.toUpperCase();

                const ret: string[] = [];

                for ( const opt of getSvgConsts.returnOpts ) {

                    let content: string;
                    let type: undefined | string = undefined;

                    switch ( opt ) {

                        case 'glyphs':
                        case 'names':
                            content = entriesToObject( entries[ opt ] );
                            break;

                        case 'slugs':
                            content = entriesToArray( entries[ opt ] );
                            break;

                        default:
                            content = entriesToObject( entries[ opt ] );
                            type = typeString;
                            break;
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    const {
                        constName,
                        comment,
                    } = parseReturnOpt( _setName, opt );

                    ret.push(
                        ...outputConstant(
                            `${ setName_UC }_${ constName }`,
                            content,
                            { comment, type },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getTheme(
                tokens: Tokens.JsonReturn,
                textDomain: string,
                args: Omit<getThemeConsts.Args<"react">, 'valueMappers'> = {},
            ): Promise<null | string> {

                const SVG_CONSTANTS = await getThemeConsts(
                    tokens,
                    {
                        ...args,
                        valueMappers: {

                            themes: ( value ) => `'${ value.replace( /'/g, "\\'" ) }'`,

                            themeNames: ( value ) => `_x( '${ toTitleCase( value ) }', 'colour theme name', '${ textDomain }' )`,

                            tokenSlugs: ( value ) => entriesToArray( value.map( ( v, i ) => [
                                i.toString(),
                                `'${ v.replace( /'/g, "\\'" ) }'`,
                            ] ) ).split( '\n' ).join( '\n    ' ),

                            tokenSlugNames: ( value ) => entriesToObject( value.map( ( v, i ) => [
                                v,
                                `_x( '${ toTitleCase( v ) }', 'colour variation name', '${ textDomain }' )`,
                            ] ) ).split( '\n' ).join( '\n    ' ),
                        } satisfies Required<Required<getThemeConsts.Args>[ 'valueMappers' ]>,
                    },
                );

                if ( !SVG_CONSTANTS ) {
                    return null;
                }

                const {
                    entries,
                } = SVG_CONSTANTS;

                const typeString = entriesToObject_type( entries.tokenSlugs.map( ( [ key ] ) => [ key, 'string[]' ] ) );

                const ret: string[] = [];

                for ( const opt of getThemeConsts.returnOpts ) {

                    let content: string;
                    let type: undefined | string = undefined;

                    switch ( opt ) {

                        case 'themes':
                            content = entriesToArray( entries[ opt ] );
                            break;

                        case 'themeNames':
                        case 'tokenSlugs':
                        case 'tokenSlugNames':
                            content = entriesToObject( entries[ opt ] );
                            break;

                        default:
                            content = entriesToObject( entries[ opt ] );
                            type = typeString;
                            break;
                    }

                    // continues
                    if ( !content?.length ) {
                        continue;
                    }

                    const {
                        constName,
                        comment,
                    } = parseReturnOpt( 'theme', opt );

                    ret.push(
                        ...outputConstant(
                            `THEME_${ constName }`,
                            content,
                            { comment, type },
                        ),
                        '',
                    );
                }

                return ret.join( '\n' );
            }

            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getAll(
                tokens: Tokens.JsonReturn,
                textDomain: string,
                args: {
                    custom?: getCustom.Input[],
                    icons?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    logos?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    theme?: Omit<getThemeConsts.Args, 'valueMappers'>,
                } = {},
            ): Promise<string> {

                return Promise.all( [
                    getSvg( 'icons', tokens.icons, textDomain, args.icons ),
                    getSvg( 'logos', tokens.logos, textDomain, args.logos ),
                    getTheme( tokens, textDomain, args.theme ),
                    getCustom( args.custom ?? [] ),
                ] ).then(
                    ( [
                        icons,
                        logos,
                        theme,
                        custom,
                    ] ) => [
                        icons,
                        logos,
                        theme,
                        custom,
                    ].filter( v => v?.length ).join( '\n\n' )
                );
            }
        }
    }
}