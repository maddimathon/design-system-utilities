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
} from '@maddimathon/utility-typescript';

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
 * @since 0.1.0
 */
export function makeFileBasedURL(
    config_base: string,
    config_build: { format: "preserve" | "file" | "directory"; },
    currentURL: URL,
    targetSubpath: string,
    opts: Partial<{
        fileExtension: string;
        homeIsIndex: boolean;
        relative: boolean;
    }> = {},
): string {

    // returns
    if ( targetSubpath.match( /^#[^\/|#]+$/i ) ) {
        return targetSubpath;
    }

    const returnAsRelative = opts.relative ?? false;
    const targetIsRelative = !!targetSubpath.match( /^\.\.?\//i );

    // returns
    if ( targetIsRelative && returnAsRelative ) {
        return targetSubpath;
    }

    const pathPrefix = config_base.replace( /(^\/|\/+$)/gi, '' );

    const prefixRegex = new RegExp( `^\\.?\\/?${ escRegExp( pathPrefix ) }(?=\\/|$)`, 'gi' );

    const _currentSubpath = currentURL.pathname.replace( prefixRegex, '' ).replace( /\.html$/gi, '' );

    // corrects
    if ( targetIsRelative ) {

        let testCorrection = NodePath.relative(
            NodePath.resolve(),
            NodePath.resolve( _currentSubpath, '..', targetSubpath ),
        );

        if ( testCorrection.match( /^\.\.\//i ) && pathPrefix ) {
            testCorrection = NodePath.relative(
                NodePath.resolve(),
                NodePath.resolve( `${ pathPrefix }/`, testCorrection ),
            );
        }

        targetSubpath = testCorrection;
    }

    const fileExtension = opts.fileExtension?.replace( /^\.*/gi, '.' ) ?? '.html';
    const homeIsIndex = opts.homeIsIndex ?? true;

    const anchorMatches = targetSubpath.match( /#[^\/|#]+$/i );
    const anchorSuffix = anchorMatches && anchorMatches[ 0 ] ? anchorMatches[ 0 ] : '';

    targetSubpath = targetSubpath.replace( /(^\.?\/|\/*(#[^\/|#]+)?$)/gi, '' );

    const subpaths = {
        current: _currentSubpath,
        target: targetSubpath.replace( /(^\.?\/|(\/|\.html)$)/gi, '' ),
    };

    const _homeSubpath = homeIsIndex ? 'index' + fileExtension : '';

    const fileMaker = ( _subpath: string ) => {

        _subpath = trailingSlash.remove(
            _subpath.replace( prefixRegex, '' ).replace( /^\.?\//gi, '' )
        );

        // returns
        if ( !_subpath ) {
            return _homeSubpath;
        }

        // returns on match
        switch ( config_build.format ) {

            case 'file':
                const appendHtmlExtension = _subpath.match( /\.[a-z]+[a-z|0-9|\-]+$/gi ) === null;

                // returns
                if ( appendHtmlExtension ) {
                    return _subpath + fileExtension;
                }

                return _subpath;
        }

        return _subpath;
    };

    const validateReturn = returnAsRelative
        ? ( _relative: string ) => {

            // returns
            if ( _relative.match( /^\.?\.?\//i ) === null ) {
                return './' + _relative + anchorSuffix;
            }

            return _relative + anchorSuffix;
        }
        : ( _substring: string ) => (
            NodePath.resolve(
                pathPrefix ? `/${ pathPrefix }/` : '/',
                _substring,
            ).replace( /^\.?\.?\//gi, '/' ) + anchorSuffix
        ) || '/';

    // converts home-equivalent current 
    switch ( subpaths.current ) {

        case '':
        case '/':
        case '/index':
        case 'index':
            subpaths.current = '';
            break;
    }

    // returns - simple absolute path
    if ( !returnAsRelative ) {
        return validateReturn( fileMaker( subpaths.target ) || _homeSubpath );
    }

    const filenames = {
        current: fileMaker( subpaths.current ),
        target: fileMaker( subpaths.target ),
    };

    const relativeMakers = {
        current: NodePath.relative( NodePath.resolve(), NodePath.resolve( filenames.current, '..' ) ),
        target: filenames.target,
    };

    return validateReturn(
        NodePath.relative( relativeMakers.current, relativeMakers.target ) || _homeSubpath
    );
}

/**
 * Makes a filenames-based relative url for offline-friendly exports.
 * 
 * @param config_base    Value of `base` as imported from 'astro:config/client' in the build env.
 * @param config_build   Value of `build` as imported from 'astro:config/client' in the build env.
 * @param currentURL     Value of `Astro.url` in the build env.
 * @param targetSubpath  Path to used to construct the URL - relative to the site root (ignoring the base path).
 * 
 * @since 0.1.0-alpha
 * @since 0.1.0-alpha.4 — Added a check for existing file extensions before adding '.html'.
 */
export function makeRelativeURL(
    config_base: string,
    config_build: { format: "preserve" | "file" | "directory"; },
    currentURL: URL,
    targetSubpath: string,
    opts: Partial<{
        fileExtension: string;
        homeIsIndex: boolean;
    }> = {},
): string {

    // throws
    if ( targetSubpath.match( /^(\.\.?\/|#[^\/|#]+$)/g ) ) {
        return targetSubpath;
    }

    const fileExtension = opts.fileExtension?.replace( /^\.*/gi, '.' ) ?? '.html';
    const homeIsIndex = opts.homeIsIndex;

    const anchorMatches = targetSubpath.match( /#[^\/|#]+$/i );
    const anchorSuffix = anchorMatches && anchorMatches[ 0 ] ? anchorMatches[ 0 ] : '';

    const pathPrefix = config_base.replace( /(^\.?\/|\/*(#[^\/|#]+)?$)/gi, '' );

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
            return homeIsIndex ? 'index' + fileExtension : '';
        }

        // returns on match
        switch ( config_build.format ) {

            case 'file':
                const appendHtmlExtension = _subpath.match( /\.[a-z]+[a-z|0-9|\-]+$/gi ) === null;

                // returns
                if ( appendHtmlExtension ) {
                    return _subpath + fileExtension;
                }

                return _subpath;
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
        ) || ( homeIsIndex ? 'index' + fileExtension : '' )
    ) + anchorSuffix;

    return relative;
}