/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import NodePath from 'node:path';
import { escRegExp, } from '@maddimathon/utility-typescript/functions';
import { trailingSlash, } from '@maddimathon/utility-astro';
/**
 * Makes a file-based relative url for offline-friendly exports.
 *
 * @since 0.1.0-alpha.draft
 */
export function makeRelativeURL(config_base, config_build, currentURL, targetSubpath) {
    const pathPrefix = config_base.replace(/(^\.?\/|\/*$)/gi, '');
    const prefixRegex = new RegExp(`^\\.?\\/?(${escRegExp(pathPrefix)}(\\/|$))`, 'gi');
    const target = {
        current: currentURL.pathname.replace(prefixRegex, '').replace(/(^\/|(\/|\.html)$)/gi, ''),
        target: targetSubpath.replace(/(^\.?\/?|(\/|\.html)$)/gi, ''),
    };
    switch (target.current) {
        case '/':
        case '/index':
        case 'index':
            target.current = '';
            break;
    }
    const fileMaker = (_subpath) => {
        _subpath = trailingSlash.remove(_subpath.replace(prefixRegex, '').replace(/^\.?\//gi, ''));
        // returns
        if (!_subpath) {
            return 'index.html';
        }
        // returns
        switch (config_build.format) {
            case 'directory':
                return _subpath + '/index.html';
            case 'file':
                return _subpath + '.html';
        }
        return _subpath;
    };
    const file = {
        current: fileMaker(target.current),
        target: fileMaker(target.target),
    };
    const relativeMakers = {
        current: NodePath.relative(NodePath.resolve(), NodePath.resolve(file.current, '..')),
        target: file.target,
    };
    let relative = NodePath.relative(relativeMakers.current, relativeMakers.target) || 'index.html';
    if (relative.match(/^\.?\.?\//i) === null) {
        relative = './' + relative;
    }
    return relative;
}
//# sourceMappingURL=makeRelativeURL.js.map