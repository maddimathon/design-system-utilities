/**
 * @since 0.1.0-alpha
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
    makeFileBasedURL,
    // makeRelativeURL,
} from '../../ts/01-utilities/makeRelativeURL.js';

export function relativeURL(
    currentURL: URL,
    targetSubpath: string,
) {
    return makeFileBasedURL(
        config_base,
        config_build,
        currentURL,
        targetSubpath,
        {
            relative: true,
        },
    );
}