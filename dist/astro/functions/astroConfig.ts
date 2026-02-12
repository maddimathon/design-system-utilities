/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0
 * @license MIT
 */

import type { AstroUserConfig } from 'astro';

import {
    mergeArgs,
} from '@maddimathon/utility-typescript/functions';

import {
    type Config as BuildConfig,

    internal as buildUtils,

    FileSystem,
    ProjectConfig,

    parseParamsCLI,
} from '@maddimathon/build-utilities';

/**
 * Constructs a default astro config object with the optional given overrides.
 * 
 * @param homepage              Public URL for this site, likely the package.json homepage.
 * @param partialProjectConfig  Project's build config file contents.
 * @param astroConfig           Config overrides.
 * 
 * @since 0.1.0-alpha
 */
export function astroConfig(
    homepage: URL,
    partialProjectConfig: BuildConfig,
    astroConfig?: Partial<AstroUserConfig>,
): AstroUserConfig {

    const projectConfig = new ProjectConfig( buildUtils.internalConfig( partialProjectConfig ) );

    const fs = new FileSystem(
        new buildUtils.Stage_Console(
            'black',
            projectConfig,
            parseParamsCLI( {} ),
        ) as buildUtils.Logger,
    );

    const outDir = projectConfig.getDistDir( fs, 'docs' )?.replace( /\/+$/gi, '' )
        ?? projectConfig.getDistDir( fs ).replace( /\/+$/gi, '' ) + '/docs';

    const srcDir = projectConfig.getSrcDir( fs, 'docs' )[ 0 ]?.replace( /\/+$/gi, '' )
        ?? projectConfig.getSrcDir( fs ).replace( /\/+$/gi, '' ) + '/docs';

    const astroDefaultConfig: AstroUserConfig = {

        base: homepage.pathname,

        build: {
            assets: 'assets/astro',
            client: 'assets/js',
            format: 'file',
            inlineStylesheets: 'always',
        },

        compressHTML: true,

        devToolbar: { enabled: false },

        markdown: {
            syntaxHighlight: 'prism',
        },

        outDir,

        publicDir: srcDir + '/public',

        scopedStyleStrategy: 'attribute',

        server: {
            port: 8080,
            host: true,

        },

        site: homepage.origin,

        srcDir,

        trailingSlash: 'always',

        vite: {
            build: {
                // to try and inline all scripts
                assetsInlineLimit: 9999999,
            },
        },
    };

    return mergeArgs( astroDefaultConfig, {
        ...astroConfig,

        // we need this for offline internal relative paths to work (mostly) reliably
        trailingSlash: import.meta.env.DEV ? 'ignore' : 'always',
        build: {
            ...astroConfig?.build,
            format: 'file',
        },
    }, true );
}