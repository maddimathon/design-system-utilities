/**
 * @since ___PKG_VERSION___
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
 * @since ___PKG_VERSION___
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

            /**
             * The subpath for the tokens output in the dist directory.
             * 
             * @default 'tokens'
             */
            distDir?: string;

            /**
             * Where to write the json tokens, relative to project root.
             * 
             * @default `${distDir}/${slug}.json`
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
        this.console.progress( 'compiling tokens...', 0 + level );

        this.console.verbose( 'parsing paths...', 1 + level );

        const distDir = this.getDistDir(
            undefined,
            _paths.distDir ?? 'tokens',
        );

        const paths: {
            slug: string;
            json: false | string[];
            scss: false | string[];
        } = {

            slug: _paths.slug,

            json: _paths.json === false
                ? _paths.json
                : Array.isArray( _paths.json )
                    ? _paths.json
                    : [ _paths.json ?? this.fs.pathResolve( distDir, `${ _paths.slug }.json` ) ],

            scss: _paths.scss === false
                ? _paths.scss
                : Array.isArray( _paths.scss )
                    ? _paths.scss
                    : [ _paths.scss ?? 'src/scss/tokens/system/_tokens.scss' ],
        };

        if ( !this.isWatchedUpdate && ( this.fs.exists( distDir ) || paths.scss ) ) {
            this.console.verbose( 'deleting any existing files...', 1 + level );

            this.fs.delete(
                [ distDir ].flat(),
                ( this.params.verbose ? 2 : 1 ) + level,
            );

            if ( paths.scss ) {

                for ( const path of paths.scss ) {
                    this.fs.delete(
                        [ path ],
                        ( this.params.verbose ? 2 : 1 ) + level,
                    );
                }
            }
        }

        if ( paths.json ) {
            this.console.verbose( 'writing json tokens...', 1 + level );

            const tokenJson = JSON.stringify( tokens, null, 4 );

            for ( const path of paths.json ) {
                this.try(
                    this.fs.write,
                    ( this.params.verbose ? 2 : 1 ) + level,
                    [ path, tokenJson, { force: true } ]
                );
            }
        }

        if ( paths.scss ) {
            this.console.verbose( 'writing scss tokens...', 1 + level );

            const tokenScss = tokens.toScss();

            for ( const path of paths.scss ) {

                this.try(
                    this.fs.write,
                    ( this.params.verbose ? 2 : 1 ) + level,
                    [
                        path,
                        tokenScss,
                        { force: true }
                    ]
                );
            }

            await this.atry(
                this.fs.prettier,
                ( this.params.verbose ? 2 : 1 ) + level,
                [
                    paths.scss,
                    'scss',
                ],
            );
        }
    }


    protected async astro() {
        await this.runCustomDirCopySubStage( 'astro' );
    }

    protected override async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }

    protected async templates() {

        await this.runCustomScssDirSubStage(
            'scss/template',
            this.getDistDir( undefined, 'css/template' ),
            {
                postCSS: true,
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