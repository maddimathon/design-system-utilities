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
        'scss',
        'css' as Stage.SubStage.Compile,
        'ts',
        'files',
    ];

    protected async css() {
        await this.runCustomScssDirSubStage( 'css' );
    }

    protected override async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }
}