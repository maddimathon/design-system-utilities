#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com/web)
 * 
 * @license MIT
 */

/**
 * @import { Stage } from '@maddimathon/build-utilities';
 */

import {
    DocumentStage,
} from '@maddimathon/build-utilities';

import { setSassCompilerFns } from '../functions/setSassCompilerFns.js';

/**
 * Extension of the built-in one.
 */
export class Document extends DocumentStage {

    // /**
    //  * Paths to typedoc outputs.
    //  * 
    //  * @readonly
    //  */
    // get typeDoc_paths() {

    //     return {
    //         json: './src/docs/typedoc.json',
    //         markdown: './src/docs/content/api',
    //     };
    // }

    /**
     * @type {Stage.SubStage.Document[]}
     * 
     * @override
     * @readonly
     */
    subStages = [
        // @ts-expect-error
        'assets',
        'typeDoc',
        // @ts-expect-error
        'scss',
        // @ts-expect-error
        'astro',
        'replace',
    ];

    /**
     * The source globs (relative to src) to copy to the this.astroPublicDir dir.
     * 
     * @type {string[]}
     * 
     * @protected
     * @readonly
     */
    assetSourceGlobs = [
        'assets/fonts',
        'assets/icons',
    ];

    /**
     * @type {string}
     * 
     * @protected
     * @readonly
     */
    astroPublicDir = 'docs/_public';

    /**
     * @protected
     */
    async assets() {
        // returns
        if ( !this.assetSourceGlobs.length ) {
            this.console.progress( 'no docs assets to copy, skipping...', 1 );
            return;
        }

        this.console.progress( 'copying docs assets...', 1 );
        this.try(
            this.fs.copy,
            this.params.verbose ? 3 : 2,
            [
                this.assetSourceGlobs,
                this.params.verbose ? 3 : 2,
                this.getSrcDir( undefined, this.astroPublicDir ),
                this.getSrcDir( undefined ),
                {
                    // verbose: true,
                    force: true,
                    rename: false,
                    recursive: true,
                },
            ],
        );
    }

    /**
     * @protected
     */
    async astro() {
        this.console.progress( 'building astro docs...', 1 );

        const distDir = this.getDistDir( 'docs' ).trim().replace( /\/$/g, '' );

        if ( this.fs.exists( distDir ) ) {
            this.console.verbose( 'deleting existing files...', 2 );
            this.fs.delete( distDir, this.params.verbose ? 3 : 2 );
        }

        this.console.verbose( 'checking astro types...', 2 );
        this.try(
            this.console.nc.cmd,
            this.params.verbose ? 3 : 2,
            [ 'astro check' ]
        );

        if ( !this.params.starting && !this.isWatchedUpdate ) {

            this.console.verbose( 'compiling to ' + distDir + '...', 2 );
            this.try(
                this.console.nc.cmd,
                this.params.verbose ? 3 : 2,
                [ 'astro build' ]
            );
        }
    }

    /**
     * @protected
     */
    async scss() {
        // returns - we don't need to compile this
        if (
            this.isWatchedUpdate
            && this.params.building
            && this.params.watchedFilename?.match( /(^|\/)scss\/_astro\// )
        ) {
            this.console.progress( 'skipping document css compile for astro-only update...', 1 );
            return;
        }

        await setSassCompilerFns( this.compiler, {
            config: this.config,
            console: this.console,
            params: this.params,
        } );

        const outDir = this.getSrcDir(
            undefined,
            this.astroPublicDir,
            'assets/css',
        );

        const paths = await this.runCustomScssDirSubStage(
            '',
            outDir,
            {
                clearOutputDir: this.isWatchedUpdate ? false : this.params.building ? "complete" : "targeted",
                postCSS: true,
                srcDir: 'src/docs/scss',
            },
        );

        this.console.verbose( 'prettifying...', 2 );
        await this.atry(
            this.fs.prettier,
            this.params.verbose ? 3 : 2,
            [
                paths,
                'css',
            ],
        );
    }
}