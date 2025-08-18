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
    CompileStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 */
export class Compile extends CompileStage {

    /**
     * @type {Stage.SubStage.Compile[]}
     * 
     * @override
     * @readonly
     */
    subStages = [
        // @ts-expect-error
        'schemata',
        // @ts-expect-error
        'astro',
        'scss',
        'ts',
        'files',
    ];

    /**
     * @protected
     */
    async astro() {
        await this.runCustomDirCopySubStage( 'astro' );
    }

    /**
     * @protected
     */
    async schemata() {
        // this.console.progress( 'compiling schemata...', 1 );
        // await this.compiler.typescript( 'src/schemata/tsconfig.json', 2 );
    }

    /**
     * @protected
     * @override
     */
    async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }
}