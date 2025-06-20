#!/usr/bin/env node
'use strict';
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

import {
    CompileStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 */
export class Compile extends CompileStage {

    /**
     * @protected
     * @override
     */
    async scss() {
        this.console.progress( 'copying scss to dist...', 1 );

        const distDir = this.getDistDir().trim().replace( /\/$/g, '' );

        const srcDir = this.getSrcDir().trim().replace( /\/$/g, '' );

        this.fs.copy(
            'scss',
            2,
            distDir,
            srcDir,
            {
                force: true,
                rename: true,
                recursive: true,
            },
        );
    }
}