/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.2.0
 * @license MIT
 */
import NodePath from 'node:path';
import { escRegExp, } from '@maddimathon/utility-typescript';
import { trailingSlash, } from '@maddimathon/utility-astro';
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
export function makeFileBasedURL(config_base, config_build, currentURL, targetSubpath, opts = {}) {
    // returns
    if (targetSubpath.match(/^#[^\/|#]+$/i)) {
        return targetSubpath;
    }
    const returnAsRelative = opts.relative ?? false;
    const targetIsRelative = !!targetSubpath.match(/^\.\.?\//i);
    // returns
    if (targetIsRelative && returnAsRelative) {
        return targetSubpath;
    }
    const pathPrefix = config_base.replace(/(^\/|\/+$)/gi, '');
    const prefixRegex = new RegExp(`^\\.?\\/?${escRegExp(pathPrefix)}(?=\\/|$)`, 'gi');
    const _currentSubpath = currentURL.pathname.replace(prefixRegex, '').replace(/\.html$/gi, '');
    // corrects
    if (targetIsRelative) {
        let testCorrection = NodePath.relative(NodePath.resolve(), NodePath.resolve(_currentSubpath, '..', targetSubpath));
        if (testCorrection.match(/^\.\.\//i) && pathPrefix) {
            testCorrection = NodePath.relative(NodePath.resolve(), NodePath.resolve(`${pathPrefix}/`, testCorrection));
        }
        targetSubpath = testCorrection;
    }
    const fileExtension = opts.fileExtension?.replace(/^\.*/gi, '.') ?? '.html';
    const homeIsIndex = opts.homeIsIndex ?? true;
    const anchorMatches = targetSubpath.match(/#[^\/|#]+$/i);
    const anchorSuffix = anchorMatches && anchorMatches[0] ? anchorMatches[0] : '';
    targetSubpath = targetSubpath.replace(/(^\.?\/|\/*(#[^\/|#]+)?$)/gi, '');
    const subpaths = {
        current: _currentSubpath,
        target: targetSubpath.replace(/(^\.?\/|(\/|\.html)$)/gi, ''),
    };
    const _homeSubpath = homeIsIndex ? 'index' + fileExtension : '';
    const fileMaker = (_subpath) => {
        _subpath = trailingSlash.remove(_subpath.replace(prefixRegex, '').replace(/^\.?\//gi, ''));
        // returns
        if (!_subpath) {
            return _homeSubpath;
        }
        // returns on match
        switch (config_build.format) {
            case 'file':
                const appendHtmlExtension = _subpath.match(/\.[a-z]+[a-z|0-9|\-]+$/gi) === null;
                // returns
                if (appendHtmlExtension) {
                    return _subpath + fileExtension;
                }
                return _subpath;
        }
        return _subpath;
    };
    const validateReturn = returnAsRelative
        ? (_relative) => {
            // returns
            if (_relative.match(/^\.?\.?\//i) === null) {
                return './' + _relative + anchorSuffix;
            }
            return _relative + anchorSuffix;
        }
        : (_substring) => (NodePath.resolve(pathPrefix ? `/${pathPrefix}/` : '/', _substring).replace(/^\.?\.?\//gi, '/') + anchorSuffix) || '/';
    // converts home-equivalent current 
    switch (subpaths.current) {
        case '':
        case '/':
        case '/index':
        case 'index':
            subpaths.current = '';
            break;
    }
    // returns - simple absolute path
    if (!returnAsRelative) {
        return validateReturn(fileMaker(subpaths.target) || _homeSubpath);
    }
    const filenames = {
        current: fileMaker(subpaths.current),
        target: fileMaker(subpaths.target),
    };
    const relativeMakers = {
        current: NodePath.relative(NodePath.resolve(), NodePath.resolve(filenames.current, '..')),
        target: filenames.target,
    };
    return validateReturn(NodePath.relative(relativeMakers.current, relativeMakers.target) || _homeSubpath);
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
 *
 * @deprecated 0.2.0 — Will be removed in 0.2.0. Please use {@link makeFileBasedURL} with `{ relative: true }` instead.
 */
export function makeRelativeURL(config_base, config_build, currentURL, targetSubpath, opts = {}) {
    return makeFileBasedURL(config_base, config_build, currentURL, targetSubpath, {
        ...opts,
        relative: true,
    });
}
