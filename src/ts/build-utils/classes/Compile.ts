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
    Stage,
} from '@maddimathon/build-utilities';

import {
    CompileStage,
} from '@maddimathon/build-utilities';

import type { Tokens } from '../../02-tokens/Tokens.js';

/**
 * Extension of the built-in one.
 * 
 * @since 0.1.0-alpha
 */
export class Compile extends CompileStage {

    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    override readonly subStages: Stage.SubStage.Compile[] = [
        'ts',
        'tokens' as Stage.SubStage.Compile,
        'astro' as Stage.SubStage.Compile,
        'scss',
        'templates' as Stage.SubStage.Compile,
        'files',
    ];


    /**
     * Runs through the basics of a typical Compile.tokens substage. 
     *
     * @category Running
     */
    public async buildTokens<
        T_Tokens extends Tokens.Instance,
    >(
        level: number,
        tokens: T_Tokens,
        _paths: {

            assets?: false | {

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
        },
    ) {
        this.console.progress( 'building token files...', 0 + level );

        this.console.verbose( 'parsing paths...', 1 + level );

        const tokensDistDir = this.getDistDir(
            undefined,
            _paths.tokensDistSubpath ?? 'tokens',
        );

        const paths_icons = _paths.assets === false
            ? _paths.assets
            : _paths.assets?.icons === false
                ? _paths.assets?.icons
                : (
                    Array.isArray( _paths.assets?.icons )
                        ? _paths.assets?.icons
                        : [ _paths.assets?.icons ?? 'assets/icons' ]
                ).map( path => this.fs.pathResolve( tokensDistDir, path ) );

        const paths_logos = _paths.assets === false
            ? _paths.assets
            : _paths.assets?.logos === false
                ? _paths.assets?.logos
                : (
                    Array.isArray( _paths.assets?.logos )
                        ? _paths.assets?.logos
                        : [ _paths.assets?.logos ?? 'assets/logos' ]
                ).map( path => this.fs.pathResolve( tokensDistDir, path ) );

        const paths: {
            slug: string;
            assets: {
                icons: false | string[];
                logos: false | string[];
            };
            json: false | string[];
            scss: false | string[];
        } = {

            slug: _paths.slug,

            assets: {
                icons: paths_icons,
                logos: paths_logos,
            },

            json: _paths.json === false
                ? _paths.json
                : (
                    Array.isArray( _paths.json )
                        ? _paths.json
                        : [ _paths.json ?? `${ _paths.slug }.json` ]
                ).map(
                    path => this.fs.pathResolve( tokensDistDir, path )
                ),

            scss: _paths.scss === false
                ? _paths.scss
                : Array.isArray( _paths.scss )
                    ? _paths.scss
                    : [ _paths.scss ?? 'src/scss/tokens/system/_tokens.scss' ],
        };

        await Promise.all( [
            this.buildTokens_writeJson( tokens, paths.json, level ),
            this.buildTokens_writeScss( tokens, paths.scss, level ),
            this.buildTokens_writeIcons( tokens, paths.assets.icons, level ),
            this.buildTokens_writeLogos( tokens, paths.assets.logos, level ),
        ] );
    }

    protected async buildTokens_writeJson<
        T_Tokens extends Tokens.Instance,
    >(
        tokens: T_Tokens,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        this.console.verbose( 'writing json tokens...', 1 + level );

        const tokenJson = JSON.stringify( tokens, null, 4 );

        return Promise.all( paths.map( async ( path ) => this.try(
            this.fs.write,
            ( this.params.verbose ? 2 : 1 ) + level,
            [ path, tokenJson, { force: true } ]
        ) ) );
    }

    protected async buildTokens_writeScss<
        T_Tokens extends Tokens.Instance,
    >(
        tokens: T_Tokens,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        this.console.verbose( 'writing scss tokens...', 1 + level );

        const tokenScss = tokens.toScss();

        return Promise.all(
            paths.map(
                async ( path ) => this.try(
                    this.fs.write,
                    ( this.params.verbose ? 2 : 1 ) + level,
                    [
                        path,
                        tokenScss,
                        { force: true }
                    ]
                )
            )
        ).then(
            async () => this.atry(
                this.fs.prettier,
                ( this.params.verbose ? 2 : 1 ) + level,
                [
                    paths,
                    'scss',
                ],
            )
        );
    }

    protected async buildTokens_writeIcons<
        T_Tokens extends Tokens.Instance,
    >(
        tokens: T_Tokens,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        this.console.verbose( 'writing icon files...', 1 + level );

        return Promise.all(
            paths.map(
                async ( path ) => Promise.all(
                    Object.values( tokens.icons.data ).map(
                        async ( icon ) => this.try(
                            this.fs.write,
                            ( this.params.verbose ? 2 : 1 ) + level,
                            [
                                this.fs.pathResolve( path, `${ icon.slug }.svg` ),
                                icon.svgFile,
                                { force: true },
                            ]
                        )
                    )
                )
            )
        );
    }

    protected async buildTokens_writeLogos<
        T_Tokens extends Tokens.Instance,
    >(
        tokens: T_Tokens,
        paths: false | string[],
        level: number,
    ) {
        // returns
        if ( !paths ) {
            return;
        }

        this.console.verbose( 'writing logo files...', 1 + level );

        return Promise.all(
            paths.map(
                async ( path ) => Promise.all(
                    Object.values( tokens.logos.data ).map(
                        async ( logo ) => this.try(
                            this.fs.write,
                            ( this.params.verbose ? 2 : 1 ) + level,
                            [
                                this.fs.pathResolve( path, `${ logo.slug }.svg` ),
                                logo.svgFile,
                                { force: true },
                            ]
                        )
                    )
                )
            )
        );
    }


    protected async astro() {
        await this.runCustomDirCopySubStage( 'astro' );
    }

    protected override async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }

    protected async templates() {

        await this.runCustomScssDirSubStage(
            'template',
            this.getDistDir( undefined, 'css' ),
            {
                postCSS: true,
                srcDir: 'src/scss'
            },
        );

        if ( this.params.packaging || this.params.releasing ) {

            this.console.verbose( 'tidying up compiled files...', 2 );
            this.try(
                this.fs.delete,
                ( this.params.verbose ? 3 : 2 ),
                [ [
                    'dist/css/template/@template.css',
                    'dist/css/template/@template.css.map'
                ], ( this.params.verbose ? 3 : 2 ) ]
            );
        }
    }

    protected async tokens() {
        this.console.log( '🚨 Compile.tokens substage is not implemented', 1 );
    }
}