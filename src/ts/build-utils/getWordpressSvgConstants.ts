/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    slugify,
} from '@maddimathon/utility-typescript';

import type { SvgMaker } from '../01-utilities/SvgMaker.js';

import type { Tokens } from '../02-tokens/Tokens.js';

/**
 * Gets a string of valid PHP code for wordpress defining constants for the given set of
 * SVGs.
 * 
 * @since ___PKG_VERSION___
 */
export async function getWordpressSvgConstants<T_SetName extends "icons" | "logos">(
    _setName: T_SetName,
    svgSet: Tokens.JsonReturn[ T_SetName ] | Tokens.Instance[ T_SetName ],
    phpNamespace: string,
    textDomain: string,
) {
    // returns
    if ( !svgSet ) {
        return;
    }

    phpNamespace = phpNamespace.length ? phpNamespace.replace( /\/$/gi, '' ) + '\\' : '';

    const setName = _setName.replace( /s$/g, '' );

    const entries = Object.entries( svgSet ).map(
        ( [ key, value ] ): [ string, SvgMaker.JsonReturn ] => [
            slugify( key ).replace( /\-/gi, '_' ).toLowerCase(),
            value,
        ]
    );

    entries.sort( ( a, b ) => {

        if ( a[ 0 ] > b[ 0 ] ) {
            return 1;
        }

        if ( a[ 0 ] < b[ 0 ] ) {
            return -1;
        }

        return 0;
    } );

    const entries_labelled = entries.map(
        ( [ key, value ] ): [ string, string ] => [
            key,
            value.svgInlineLabelled.replace( /\s*\n+\s*/g, '' ),
        ]
    );

    const entries_css = entries.map(
        ( [ key, value ] ): [ string, string ] => [
            key,
            value.svgCssEmbedded.replace( /\s*\n+\s*/g, '' ),
        ]
    );

    const keys = entries.map( ( [ key ] ) => key );

    keys.sort();

    const longestKeyLength = Math.max( ...keys.map( ( key ) => key.length ) );

    const name_entries = entries.map(
        ( [ key, value ] ): [ string, string ] => [ key, value.label ]
    );

    name_entries.sort( ( a, b ) => {

        if ( a[ 1 ] > b[ 1 ] ) {
            return 1;
        }

        if ( a[ 1 ] < b[ 1 ] ) {
            return -1;
        }

        return 0;
    } );

    const phpStrings = {

        keyObjectShape: keys.map( key => `${ key }: string` ).join( ', ' ),

        names: `[${ name_entries.map(
            ( [ key, value ] ) =>
                `\n    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> _x( '${ value }', '${ setName } display name', '${ textDomain }' ),`
        ).join( '' ) }${ keys.length ? '\n' : '' }]`,

        svg: `(object) [${ entries_labelled.map(
            ( [ key, svg ] ) =>
                `\n    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> '${ svg.replace( /'/g, "\\'" ) }',`
        ).join( '' ) }${ entries_labelled.length ? '\n' : '' }]`,

        svgBase64: `(object) [${ entries_css.map(
            ( [ key, svg ] ) =>
                `\n    '${ key }' ${ ' '.repeat( longestKeyLength - key.length ) }=> '${ btoa( svg ).replace( /'/g, "\\'" ) }',`
        ).join( '' ) }${ entries_css.length ? '\n' : '' }]`,
    };

    const setName_UC = setName.toUpperCase();

    return [
        '// hooked for access to translation',
        '\\add_action(',
        '    \'init\',',
        '    function () {',
        '        // returns',
        `        if ( \\defined( '${ phpNamespace }BRAND_${ setName_UC }_NAMES' ) ) {`,
        '            return;',
        '        }',
        '',
        '        /**',
        `         * All ${ setName } slugs and their labels`,
        '         *',
        `         * @var array{ ${ phpStrings.keyObjectShape } }`,
        '         */',
        `        \\define(`,
        `            '${ phpNamespace }BRAND_${ setName_UC }_NAMES',`,
        `            ${ phpStrings.names.split( '\n' ).join( '\n            ' ) },`,
        '        );',
        '    },',
        '    0,',
        ');',

        '',
        '/**',
        ` * All ${ setName } svg values indexed by slug.`,
        ' *',
        ` * @var object{ ${ phpStrings.keyObjectShape } }`,
        ' */',
        `\\define(`,
        `    '${ phpNamespace }BRAND_${ setName_UC }_SVG',`,
        `    ${ phpStrings.svg.split( '\n' ).join( '\n    ' ) },`,
        ');',

        '',
        '/**',
        ` * All ${ setName } base64-encoded svgs indexed by slug.`,
        ' *',
        ` * @var object{ ${ phpStrings.keyObjectShape } }`,
        ' */',
        `\\define(`,
        `    '${ phpNamespace }BRAND_${ setName_UC }_SVG_BASE64',`,
        `    ${ phpStrings.svgBase64.split( '\n' ).join( '\n    ' ) },`,
        ');',

    ].join( '\n' );
}