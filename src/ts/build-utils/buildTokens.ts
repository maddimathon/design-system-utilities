/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { FontAssetType, type RunnerOptions } from 'fantasticon';

import {
    // objectMap,
    // slugify,
    // timestamp,
    // VariableInspector,
} from '@maddimathon/utility-typescript';

import {
    AbstractStage,
} from '@maddimathon/build-utilities';

import type { Tokens } from '../02-tokens/Tokens.js';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import type { RequiredPartially } from '@maddimathon/utility-typescript/types';

/**
 * Take a token object and write its relevant files and assets to their output directories.
 * 
 * @since ___PKG_VERSION___
 */
export async function buildTokens(
    stage: AbstractStage<any, any>,
    tokens: Tokens.Instance,
    level: number,
    paths: buildTokens.Paths,
    args: Partial<buildTokens.Args> = {},
) {
    stage.console.progress( 'building token files...', 0 + level );

    stage.console.verbose( 'parsing paths...', 1 + level );

    const tokensDistDir = stage.getDistDir(
        undefined,
        paths.tokensDistSubpath ?? 'tokens',
    );

    const paths_fonts = paths.assets === false
        ? paths.assets
        : paths.assets?.fonts === false
            ? paths.assets?.fonts
            : stage.fs.pathResolve(
                tokensDistDir,
                (
                    Array.isArray( paths.assets?.fonts )
                        ? paths.assets?.fonts[ 0 ]
                        : paths.assets?.fonts
                ) ?? 'assets/fonts'
            );

    const paths_icons = paths.assets === false
        ? paths.assets
        : paths.assets?.icons === false
            ? paths.assets?.icons
            : (
                Array.isArray( paths.assets?.icons )
                    ? paths.assets?.icons
                    : [ paths.assets?.icons ?? 'assets/icons' ]
            ).map( path => stage.fs.pathResolve( tokensDistDir, path ) );

    const paths_logos = paths.assets === false
        ? paths.assets
        : paths.assets?.logos === false
            ? paths.assets?.logos
            : (
                Array.isArray( paths.assets?.logos )
                    ? paths.assets?.logos
                    : [ paths.assets?.logos ?? 'assets/logos' ]
            ).map( path => stage.fs.pathResolve( tokensDistDir, path ) );

    const completePaths: {
        slug: string;
        assets: {
            fonts: false | string;
            icons: false | string[];
            logos: false | string[];
        };
        json: false | string[];
        scss: false | string[];
    } = {

        slug: paths.slug,

        assets: {
            fonts: paths_fonts,
            icons: paths_icons,
            logos: paths_logos,
        },

        json: paths.json === false
            ? paths.json
            : (
                Array.isArray( paths.json )
                    ? paths.json
                    : [ paths.json ?? `${ paths.slug }.json` ]
            ).map(
                path => stage.fs.pathResolve( tokensDistDir, path )
            ),

        scss: paths.scss === false
            ? paths.scss
            : Array.isArray( paths.scss )
                ? paths.scss
                : [ paths.scss ?? 'src/scss/tokens/system/_tokens.scss' ],
    };

    return Promise.all( [
        buildTokens.writeIcons( stage, tokens, completePaths.assets.icons, level ),
        buildTokens.writeLogos( stage, tokens, completePaths.assets.logos, level ),
    ] ).then(
        async () => {

            const iconFontArgs = await buildTokens.buildIconFontArgs(
                stage,
                level,
                completePaths,
                {
                    name: tokens.name,
                    ...args.iconFont,
                },
            );

            if ( iconFontArgs ) {
                await tokens.icons.toIconFont( iconFontArgs );
            }

            return Promise.all( [
                buildTokens.writeJson( stage, tokens, completePaths.json, level ),
                buildTokens.writeScss( stage, tokens, completePaths.scss, level ),
            ] );
        }
    );
}

/**
 * Utilities for the {@link buildTokens} function.
 * 
 * @since ___PKG_VERSION___
 */
export namespace buildTokens {

    /**
     * @since ___PKG_VERSION___
     */
    export type Args = {
        iconFont: Partial<RunnerOptions>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type Paths = {

        assets?: false | {

            /**
             * Where to write the font token files, relative to `tokensDistSubpath`.
             * 
             * @default 'assets/logos'
             */
            fonts?: false | string;

            /**
             * Where to write the icon tokens, relative to `tokensDistSubpath`.
             * 
             * @default 'assets/icons'
             */
            icons?: false | string | string[];

            /**
             * Where to write the logo tokens, relative to `tokensDistSubpath`.
             * 
             * @default 'assets/logos'
             */
            logos?: false | string | string[];
        };

        /**
         * The subpath for the tokens output in the dist directory.
         * 
         * @default 'tokens'
         */
        tokensDistSubpath?: string;

        /**
         * Where to write the json tokens, relative to `tokensDistSubpath`.
         * 
         * @default `${slug}.json`
         */
        json?: false | string | string[];

        /**
         * Where to write the scss tokens, relative to project root.
         * 
         * @default 'src/scss/tokens/system/_tokens.scss'
         */
        scss?: false | string | string[];

        /**
         * The project slug, used in token file names, without any ending
         * extensions.
         */
        slug: string;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export async function writeIcons(
        stage: AbstractStage<any, any>,
        tokens: Tokens.Instance,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        stage.console.verbose( 'writing icon files...', 1 + level );

        return Promise.all(
            paths.map(
                async ( path ) => Promise.all(
                    Object.values( tokens.icons.data ).map(
                        async ( icon ) => stage.try(
                            stage.fs.write,
                            ( stage.params.verbose ? 2 : 1 ) + level,
                            [
                                stage.fs.pathResolve( path, `${ icon.slug }.svg` ),
                                icon.svgFile(),
                                { force: true },
                            ]
                        )
                    )
                )
            )
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export async function buildIconFontArgs(
        stage: AbstractStage<any, any>,
        level: number,
        paths: buildTokens.Paths,
        args: RequiredPartially<Partial<RunnerOptions>, 'name'>,
    ): Promise<false | RunnerOptions> {
        // returns
        if (
            !paths?.assets
            || !paths.assets.fonts
            || !paths.assets.icons
            || !paths.assets.icons[ 0 ]
        ) {
            return false;
        }

        stage.console.verbose( 'building icon font...', 1 + level );

        const fullArgs = {
            inputDir: paths.assets.icons[ 0 ],
            outputDir: paths.assets.fonts,

            fontTypes: [
                FontAssetType.TTF,
                FontAssetType.WOFF,
                FontAssetType.WOFF2,
            ],

            ...args,
        } satisfies RunnerOptions;

        fullArgs.pathOptions = {
            ...fullArgs.pathOptions,

            // ...objectGenerator(
            //     assetTypes,
            // ),

            ...objectGenerator(
                fullArgs.fontTypes,
                ( fontType ) => {
                    const dirPath = stage.fs.pathResolve( fullArgs.outputDir, 'icons', fontType );

                    const filePath = stage.fs.pathResolve( dirPath, `icons.${ fontType }` );

                    stage.fs.mkdir( dirPath );

                    return filePath;
                }
                // ( fontType ) => NodePath.resolve( args.outputDir, `icon-font.${ fontType }` )
            ),
        };

        stage.fs.mkdir( fullArgs.outputDir );

        return fullArgs;
    }

    /**
     * @since ___PKG_VERSION___
     */
    export async function writeJson(
        stage: AbstractStage<any, any>,
        tokens: Tokens.Instance,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        stage.console.verbose( 'writing json tokens...', 1 + level );

        const tokenJson = JSON.stringify( tokens, null, 4 );

        return Promise.all(
            paths.map(
                async ( path ) => stage.try(
                    stage.fs.write,
                    ( stage.params.verbose ? 2 : 1 ) + level,
                    [ path, tokenJson, { force: true } ]
                )
            )
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export async function writeLogos(
        stage: AbstractStage<any, any>,
        tokens: Tokens.Instance,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        stage.console.verbose( 'writing logo files...', 1 + level );

        return Promise.all(
            paths.map(
                async ( path ) => Promise.all(
                    Object.values( tokens.logos.data ).map(
                        async ( logo ) => stage.try(
                            stage.fs.write,
                            ( stage.params.verbose ? 2 : 1 ) + level,
                            [
                                stage.fs.pathResolve( path, `${ logo.slug }.svg` ),
                                logo.svgFile(),
                                { force: true },
                            ]
                        )
                    )
                )
            )
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export async function writeScss(
        stage: AbstractStage<any, any>,
        tokens: Tokens.Instance,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        stage.console.verbose( 'writing scss tokens...', 1 + level );

        const tokenScss = tokens.toScss();

        return Promise.all(
            paths.map(
                async ( path ) => stage.try(
                    stage.fs.write,
                    ( stage.params.verbose ? 2 : 1 ) + level,
                    [
                        path,
                        tokenScss,
                        { force: true }
                    ]
                )
            )
        ).then(
            async () => stage.atry(
                stage.fs.prettier,
                ( stage.params.verbose ? 2 : 1 ) + level,
                [
                    paths,
                    'scss',
                ],
            )
        );
    }
}