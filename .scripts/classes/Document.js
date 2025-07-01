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
    DocumentStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 */
export class Document extends DocumentStage {

    /**
     * @type {Stage.SubStage.Document[]}
     * 
     * @override
     * @readonly
     */
    subStages = [
        // @ts-expect-error
        'scss',
        // @ts-expect-error
        'astro',
        'replace',
    ];

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