/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import NodePath from 'node:path';

import {
    escRegExp,
} from '@maddimathon/utility-typescript/functions';

import {
    trailingSlash,
} from '@maddimathon/utility-astro';

/**
 * Makes a filenames-based relative url for offline-friendly exports.
 * 
 * @param config_base    Value of `base` as imported from 'astro:config/client' in the build env.
 * @param config_build   Value of `build` as imported from 'astro:config/client' in the build env.
 * @param currentURL     Value of `Astro.url` in the build env.
 * @param targetSubpath  Path to used to construct the URL - relative to the site root (ignoring the base path).
 * 
 * @since 0.1.0-alpha
 */
export function makeRelativeURL(
    config_base: string,
    config_build: { format: "preserve" | "file" | "directory"; },
    currentURL: URL,
    targetSubpath: string,
): string {

    const pathPrefix = config_base.replace( /(^\.?\/|\/$)/gi, '' );

    const prefixRegex = new RegExp( `^\\.?\\/?${ escRegExp( pathPrefix ) }(?=\\/|$)`, 'gi' );

    const subpaths = {
        current: currentURL.pathname.replace( prefixRegex, '' ).replace( /\.html$/gi, '' ),
        target: targetSubpath.replace( /(^\.?\/?|(\/|\.html)$)/gi, '' ),
    };

    const fileMaker = ( _subpath: string ) => {

        _subpath = trailingSlash.remove(
            _subpath.replace( prefixRegex, '' ).replace( /^\.?\//gi, '' )
        );

        // returns
        if ( !_subpath ) {
            return 'index.html';
        }

        // returns
        switch ( config_build.format ) {

            case 'file':
                return _subpath + '.html';
        }

        return _subpath;
    };

    const validateReturn = ( _relative: string ) => {

        // returns
        if ( _relative.match( /^\.?\.?\//i ) === null ) {
            return './' + _relative;
        }

        return _relative;
    };

    // converts home-equivalent current 
    switch ( subpaths.current ) {

        case '':
        case '/':
        case '/index':
        case 'index':
            subpaths.current = '';
            break;
    }

    const filenames = {
        current: fileMaker( subpaths.current ),
        target: fileMaker( subpaths.target ),
    };

    const relativeMakers = {
        current: NodePath.relative( NodePath.resolve(), NodePath.resolve( filenames.current, '..' ) ),
        target: filenames.target,
    };

    const relative = validateReturn(
        NodePath.relative(
            relativeMakers.current,
            relativeMakers.target,
        ) || 'index.html'
    );

    return relative;
}