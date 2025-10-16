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
}