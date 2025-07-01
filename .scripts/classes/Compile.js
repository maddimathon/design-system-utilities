#!/usr/bin/env node
'use strict';
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { Stage } from "@maddimathon/build-utilities"
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
        'astro',
        // @ts-expect-error
        'schemas',
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
    async schemas() {
        await this.runCustomDirCopySubStage( 'schemas' );
    }

    /**
     * @protected
     * @override
     */
    async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }
}