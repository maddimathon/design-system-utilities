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
            css: args.incl?.css ?? false,
            names: args.incl?.names ?? true,
            slugs: args.incl?.slugs ?? false,
            svg: args.incl?.svg ?? true,
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
            'names',
            'slugs',
            'svg',
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
        tokens: Tokens.JsonReturn | Tokens.Instance,
        args: getThemeConsts.Args = {},
    ): Promise<null | {
        readonly entries: {
            readonly [ K in T_ReturnOptions ]: readonly [ string, string ][];
        };
    }> {

        const include = {
            keys: args.incl?.keys ?? true,
            keyNames: args.incl?.keyNames ?? true,
        } as const satisfies {
            [ K in getThemeConsts.ReturnOptions ]: boolean;
        };

        type EntriesReturn = {
            [ K in getThemeConsts.ReturnOptions ]?: [ string, string ][];
        };

        const themesMeta = '_meta' in tokens.themes ? tokens.themes._meta : tokens.themes.meta;

        const entries: EntriesReturn = {};

        const valueFn_fallback = ( key: string | string[] ) => Array.isArray( key ) ? key.join( ',' ) : key;

        if ( include.keys ) {

            const valueFn = args.valueMappers?.keys ?? valueFn_fallback;

            const keyFn = args.keyMappers?.keys ?? ( ( key: string ) => key );

            const _entries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

            entries.keys = _entries.map( ( [ key, value ] ) => [ keyFn( key ), valueFn( value ) ] );
        }

        if ( include.keyNames ) {

            const valueFn = args.valueMappers?.keyNames ?? valueFn_fallback;

            const keyFn = args.keyMappers?.keyNames ?? ( ( key: string ) => key );

            const _entries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

            entries.keyNames = _entries.map( ( [ key, value ] ) => [ keyFn( key ), valueFn( value ) ] );
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
                [ K in ReturnOptions ]?: ( item: string[] ) => string
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
            'keys',
            'keyNames',
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
                    comment = `All ${ commentName } base64-encoded svgs indexed by slug.`;
                    break;

                case 'css':
                    comment = `All ${ commentName } css-ready svg values indexed by slug.`;
                    break;

                case 'names':
                    comment = `All ${ commentName } slugs and their labels.`;
                    break;

                case 'svg':
                    comment = `All ${ commentName } svg values indexed by slug.`;
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
                comment: comment ?? `Brand kit ${ setName } tokens as ${ opt }.`,
            } as const;
        }

        /**
         * Export to a PHP string.
         * 
         * @since ___PKG_VERSION___
         */
        export namespace PHP {

            function entriesToArray(
                entries: [ string, string ][] | readonly [ string, string ][],
                associativeArray: boolean = true,
            ): string {
                // returns
                if ( !entries?.length ) {
                    return '';
                }

                // returns
                if ( !associativeArray ) {
                    return `[${ entries.map(
                        ( arr ) => `\n    ${ arr[ 1 ] },`
                    ).join( '' ) }${ entries.length ? '\n' : '' }]`;
                }

                const longestKeyLength = Math.max( ...entries.map( ( [ key ] ) => key.length ) );

                return `[${ entries.map(
                    ( [ key, value ] ) =>
                        `\n    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> ${ value },`
                ).join( '' ) }${ entries.length ? '\n' : '' }]`;
            }

            function entriesToObject( entries: [ string, string ][] | readonly [ string, string ][] ): string {
                // returns
                if ( !entries?.length ) {
                    return '';
                }

                const longestKeyLength = Math.max( ...entries.map( ( [ key ] ) => key.length ) );

                return `(object) [${ entries.map(
                    ( [ key, value ] ) =>
                        `\n    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> ${ value },`
                ).join( '' ) }${ entries.length ? '\n' : '' }]`;
            }

            function outputConstant(
                varName: string,
                content: string,
                args: {
                    comment: string,
                    type: string,
                    insideHook?: undefined | boolean,
                },
            ): string[] {
                // returns
                if ( !content ) {
                    return [];
                }

                return args.insideHook ? [
                    '// hooked for access to translation',
                    '\\add_action(',
                    '    \'init\',',
                    '    function () {',
                    '        // returns',
                    `        if ( \\defined( '${ varName }' ) ) {`,
                    '            return;',
                    '        }',
                    '',
                    '        /**',
                    `         * ${ args.comment }`,
                    '         *',
                    `         * @var ${ args.type }`,
                    '         */',
                    `        \\define(`,
                    `            '${ varName }',`,
                    `            ${ content.split( '\n' ).join( '\n            ' ) },`,
                    '        );',
                    '    },',
                    '    0,',
                    ');',
                ] : [
                    '/**',
                    ` * ${ args.comment }`,
                    ' *',
                    ` * @var ${ args.type }`,
                    ' */',
                    `\\define(`,
                    `    '${ varName }',`,
                    `    ${ content.split( '\n' ).join( '\n    ' ) },`,
                    ');',
                ];
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

                const SVG_CONSTANTS = await getSvgConsts(
                    _setName,
                    svgSet,
                    {
                        ...args,
                        valueMappers: {
                            base64: ( base64 ): string => `'${ base64.replace( /'/g, "\\'" ) }'`,
                            css: ( css ): string => `'${ css.replace( /'/g, "\\'" ) }'`,
                            names: ( label ): string => `_x( '${ label }', '${ setName } display name', '${ textDomain }' )`,
                            slugs: ( slug ): string => `'${ slug.replace( /'/g, "\\'" ) }'`,
                            svg: ( svg ): string => `'${ svg.replace( /'/g, "\\'" ) }'`,
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

                phpNamespace = phpNamespace.length ? phpNamespace.replace( /\/$/gi, '' ) + '\\' : '';

                const keyObjectShape = keys.map( key => `${ key }: string` ).join( ', ' );

                const setName_UC = setName.toUpperCase();

                const ret: string[] = [];

                for ( const opt of getSvgConsts.returnOpts ) {

                    let content: string;
                    let insideHook = false;
                    let type: string;

                    switch ( opt ) {

                        case 'names':
                            content = entriesToArray( entries[ opt ], true );
                            insideHook = true;
                            type = `array{ ${ keyObjectShape } }`;
                            break;

                        case 'slugs':
                            content = entriesToArray( entries[ opt ], false );
                            type = `( ${ keys.map( key => `"${ key }"` ).join( ', ' ) } )[]`;
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
                            `${ phpNamespace }BRAND_${ setName_UC }_${ constName }`,
                            content,
                            {
                                comment,
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
                tokens: Tokens.JsonReturn | Tokens.Instance,
                textDomain: string,
                phpNamespace: string,
                args: Omit<getThemeConsts.Args, 'valueMappers'> = {},
            ): Promise<null | string> {

                const SVG_CONSTANTS = await getThemeConsts(
                    tokens,
                    {
                        ...args,
                        valueMappers: {

                            keys: ( value ) => entriesToArray(
                                value.map( ( v, i ) => [
                                    i.toString(),
                                    `'${ v.replace( /'/g, "\\'" ) }'`,
                                ] ),
                                false,
                            ).split( '\n' ).join( '\n    ' ),

                            keyNames: ( value ) => entriesToObject( value.map( v => [
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

                const themesMeta = '_meta' in tokens.themes ? tokens.themes._meta : tokens.themes.meta;

                const keyEntries = Object.entries( themesMeta.keys ) as [ keyof typeof themesMeta.keys, typeof themesMeta.keys[ keyof typeof themesMeta.keys ] ][];

                phpNamespace = phpNamespace.length ? phpNamespace.replace( /\/$/gi, '' ) + '\\' : '';

                const ret: string[] = [];

                for ( const opt of getThemeConsts.returnOpts ) {

                    let content: string;
                    let insideHook = false;
                    let type: string;

                    switch ( opt ) {

                        case 'keys':
                            content = entriesToObject( entries[ opt ] );
                            type = `object{ ${ keyEntries.map( ( [ key ] ) => `${ key }: string[]` ).join( ', ' ) } }`;
                            break;

                        case 'keyNames':
                            content = entriesToObject( entries[ opt ] );
                            insideHook = true;
                            type = `object{ ${ keyEntries.map(
                                ( [ key, values ] ) => `${ key }: object{ ${ values.map( subKey => `${ subKey }: string` ).join( ', ' ) } }`
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
                            `${ phpNamespace }BRAND_THEME_${ constName }`,
                            content,
                            {
                                comment,
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
                tokens: Tokens.JsonReturn | Tokens.Instance,
                textDomain: string,
                phpNamespace: string,
                args: {
                    icons?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    logos?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    theme?: Omit<getThemeConsts.Args, 'valueMappers'>,
                } = {},
            ) {

                const [
                    icons,
                    logos,
                    theme,
                ] = await Promise.all( [
                    getSvg( 'icons', tokens.icons, textDomain, phpNamespace, args.icons ),
                    getSvg( 'logos', tokens.logos, textDomain, phpNamespace, args.logos ),
                    getTheme( tokens, textDomain, phpNamespace, args.theme ),
                ] );

                return [
                    icons,
                    logos,
                    theme,
                ].filter( v => v ).join( '\n\n' );
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
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
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

                const SVG_CONSTANTS = await getSvgConsts(
                    _setName,
                    svgSet,
                    {
                        ...args,
                        valueMappers: {
                            base64: ( base64 ): string => `'${ base64.replace( /'/g, "\\'" ) }'`,
                            css: ( svg ): string => `'${ svg.replace( /'/g, "\\'" ) }'`,
                            names: ( label ): string => `_x( '${ label }', '${ setName } display name', '${ textDomain }' )`,
                            slugs: ( slug ): string => `'${ slug.replace( /'/g, "\\'" ) }'`,
                            svg: ( svg ): string => `'${ svg.replace( /'/g, "\\'" ) }'`,
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
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             * 
             * @since ___PKG_VERSION___
             */
            export async function getTheme(
                tokens: Tokens.JsonReturn | Tokens.Instance,
                textDomain: string,
                args: Omit<getThemeConsts.Args<"react">, 'valueMappers'> = {},
            ): Promise<null | string> {

                const SVG_CONSTANTS = await getThemeConsts(
                    tokens,
                    {
                        ...args,
                        valueMappers: {

                            keys: ( value ) => entriesToArray( value.map( ( v, i ) => [
                                i.toString(),
                                `'${ v.replace( /'/g, "\\'" ) }'`,
                            ] ) ).split( '\n' ).join( '\n    ' ),

                            keyNames: ( value ) => entriesToObject( value.map( ( v, i ) => [
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

                const typeString = entriesToObject_type( entries.keys.map( ( [ key ] ) => [ key, 'string[]' ] ) );

                const ret: string[] = [];

                for ( const opt of getThemeConsts.returnOpts ) {

                    let content: string;
                    let type: undefined | string = undefined;

                    switch ( opt ) {

                        case 'keys':
                        case 'keyNames':
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
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since ___PKG_VERSION___
             */
            export async function getAll(
                tokens: Tokens.JsonReturn | Tokens.Instance,
                textDomain: string,
                args: {
                    icons?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    logos?: Omit<getSvgConsts.Args, 'valueMappers'>,
                    theme?: Omit<getThemeConsts.Args, 'valueMappers'>,
                } = {},
            ) {

                const [
                    icons,
                    logos,
                    theme,
                ] = await Promise.all( [
                    getSvg( 'icons', tokens.icons, textDomain, args.icons ),
                    getSvg( 'logos', tokens.logos, textDomain, args.logos ),
                    getTheme( tokens, textDomain, args.theme ),
                ] );

                return [
                    icons,
                    logos,
                    theme,
                ].filter( v => v?.length ).join( '\n\n' );
            }
        }
    }
}