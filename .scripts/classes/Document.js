#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { Stage } from '@maddimathon/build-utilities';
 */

import {
    DocumentStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 */
export class Document extends DocumentStage {

    /**
     * Paths to typedoc outputs.
     * 
     * @readonly
     */
    get typeDoc_paths() {

        return {
            json: './src/docs/typedoc.json',
            markdown: './src/docs/content/api',
        };
    }

    /**
     * @type {Stage.SubStage.Document[]}
     * 
     * @override
     * @readonly
     */
    subStages = [
        'typeDoc',
        // @ts-expect-error
        'scss',
        // @ts-expect-error
        'astro',
        'replace',
    ];

    /**
     * @protected
     * @override
     */
    async typeDoc() {
        this.fs.delete( [
            this.typeDoc_paths.json,
            this.typeDoc_paths.markdown,
        ], 1 );

        await super.typeDoc();


        this.console.verbose( 'making replacements in markdown...', 2 );
        const replacePaths = [
            this.typeDoc_paths.json,
            this.typeDoc_paths.markdown + '/**/*',
        ];

        this.replaceInFiles( replacePaths, 'current', this.params.verbose ? 3 : 2 );
        this.replaceInFiles( replacePaths, 'package', this.params.verbose ? 3 : 2 );

        this.console.verbose( 'replacing markdown paths...', 2 );
        this.fs.replaceInFiles( replacePaths, [
            [ /(?<=\[[^\]]+\]\([^\)]+)\.md\)/gi, '.html)' ],
        ], this.params.verbose ? 3 : 2 );


        this.console.verbose( 'tidying up...', 2 );
        this.fs.delete( [
            this.typeDoc_paths.markdown + '/.nojekyll',
            this.typeDoc_paths.markdown + '/index.md',
        ], 1 );
    }

    /**
     * @protected
     */
    async scss() {
        await this.runCustomScssDirSubStage(
            'docs/scss',
            'src/docs/css',
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

        this.console.verbose( 'compiling to ' + distDir + '...', 2 );
        this.try(
            this.console.nc.cmd,
            this.params.verbose ? 3 : 2,
            [ 'astro build' ]
        );
    }
}