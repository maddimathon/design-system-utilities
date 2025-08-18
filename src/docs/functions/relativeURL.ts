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
    base as config_base,
    build as config_build,
} from 'astro:config/client';

import {
    makeRelativeURL,
} from '../../ts/01-functions/makeRelativeURL.js';

export function relativeURL(
    currentURL: URL,
    targetSubpath: string,
) {
    return makeRelativeURL(
        config_base,
        config_build,
        currentURL,
        targetSubpath,
    );
}