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
    DocumentStage,
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/utility-typescript/functions';

/**
 * Extension of the built-in one.
 * 
 * @since ___PKG_VERSION___
 */
export class Document extends DocumentStage {

    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    override readonly subStages: Stage.SubStage.Document[] = [
        'scss' as Stage.SubStage.Document,
        'astro' as Stage.SubStage.Document,
        'replace',
    ];

    protected readonly astroPublicDir = 'docs/_public/assets';

    protected async scss() {
        // returns - we don't need to compile this
        if (
            this.isWatchedUpdate
            && this.params.building
            && this.params.watchedFilename?.match( /(^|\/)scss\/_astro\// )
        ) {
            this.console.progress( 'skipping document css compile for astro-only update...', 1 );
            return;
        }

        const outDir = this.getSrcDir(
            undefined,
            this.astroPublicDir.replace( /\/$/g, '' ) + '/css',
        );

        await this.runCustomScssDirSubStage( 'docs/scss', outDir, { postCSS: true } );

        await this.atry(
            this.fs.prettier,
            ( this.params.verbose ? 2 : 1 ),
            [
                outDir,
                'css',
            ],
        );
    }

    protected async astro() {
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
}