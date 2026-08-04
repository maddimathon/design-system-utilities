#!/usr/bin/env node
// @ts-check
'use strict';
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
    TestStage,
} from '@maddimathon/build-utilities';

import { setSassCompilerFns } from '../functions/setSassCompilerFns.js';

/**
 * Extension of the built-in one.
 */
export class Test extends TestStage {

    /**
     * @type {Stage.SubStage.Test[]}
     * 
     * @readonly
     * @override
     */
    subStages = [
        'scss',
        'js',
    ];

    /**
     * @override
     * @protected
     */
    async scss() {
        await setSassCompilerFns( this.compiler, {
            config: this.config,
            console: this.console,
            params: this.params,
        } );

        const compiled = await this.runCustomScssDirSubStage(
            'demos',
            'dist/css',
            {
                clearOutputDir: false,
                maxConcurrent: 30,
                postCSS: false,
                srcDir: 'src/scss',
            },
            1,
        );

        this.console.verbose( 'replacing in compiled file...', 3 );

        /** @type {( "current" | "package" )[]} */
        const replacementTypes = [ 'current', 'package' ];

        for ( const _key of replacementTypes ) {
            this.replaceInFiles(
                compiled,
                _key,
                this.params.verbose ? 3 : 2,
                [],
                true,
            );
        }

        this.console.verbose( 'prettifying compiled files...', 2 );
        const _prettified = await this.atry( this.fs.prettier, 3, [ compiled, 'css' ] );

        this.console.verbose(
            `prettified ${ _prettified.length } files`,
            3,
            { italic: true },
        );

        if ( this.params.packaging || this.params.releasing ) {
            this.console.verbose( 'tidying up compiled files...', 2 );
            this.try(
                this.fs.delete,
                ( this.params.verbose ? 3 : 2 ),
                [ [
                    'dist/scss/demos',
                ], ( this.params.verbose ? 3 : 2 ) ]
            );
        }
    }
}