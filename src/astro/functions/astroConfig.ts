/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    AstroUserConfig,
    FontProvider,
    Locales,
    SessionDriverName,
} from 'astro';

import { } from 'astro/config';

import type { RecursivePartial } from '@maddimathon/utility-typescript/types';

import {
    mergeArgs,
} from '@maddimathon/utility-typescript';

import {
    astroConfig as astro_astroConfig,
} from '@maddimathon/utility-astro';

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
 * @param astroConfig           Optional config overrides.
 * @param envConfig             Optional environment variable config.
 * 
 * @since 0.1.0-alpha
 * @since ___PKG_VERSION___ — Started using the astroConfig() from utility-astro as well. Improved typing. Added optional envConfig param.
 */
export function astroConfig<
    T_Locales extends Locales = never,
    T_Driver extends SessionDriverName = never,
    T_FontProviders extends Array<FontProvider> = never
>(
    homepage: URL,
    partialProjectConfig: BuildConfig,
    astroConfig: RecursivePartial<AstroUserConfig<T_Locales, T_Driver, T_FontProviders>> = {},
    envConfig: RecursivePartial<astroConfig.EnvironmentConfig> = {},
): AstroUserConfig<T_Locales, T_Driver, T_FontProviders> {

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

    /**
     * Input config parsed with this package's default values.
     */
    const parsedInputConfig = mergeArgs(
        {
            base: homepage.pathname,

            build: {
                assets: 'assets/astro',
                client: 'assets/js',
            },

            compressHTML: true,

            devToolbar: { enabled: false },

            experimental: { contentIntellisense: true },

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
        } satisfies AstroUserConfig<T_Locales, T_Driver, T_FontProviders>,
        {
            ...astroConfig,

            build: {
                ...astroConfig?.build,

                // we add our own relative stylesheet links in Page, but astro
                // will use absolute URLs
                inlineStylesheets: 'always',
                format: 'file',
            },

            // we need this for offline internal relative paths to work (mostly) reliably
            trailingSlash: import.meta.env.DEV ? 'ignore' : 'always',

            vite: {
                ...astroConfig?.vite,

                build: {
                    ...astroConfig?.vite?.build,

                    // to try and inline all scripts
                    assetsInlineLimit: 9999999,
                },
            },

        } satisfies RecursivePartial<AstroUserConfig<T_Locales, T_Driver, T_FontProviders>>,
        true,
    ) as AstroUserConfig<T_Locales, T_Driver, T_FontProviders>;

    return astro_astroConfig( parsedInputConfig, envConfig );
}

/**
 * Utilities for the {@link astroConfig} function.
 * 
 * @since ___PKG_VERSION___
 */
export namespace astroConfig {

    /**
     * An easy input object for configuring environment variable default values.
     */
    export interface EnvironmentConfig extends RecursivePartial<astro_astroConfig.EnvironmentConfig> {
    };
}