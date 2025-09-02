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
        'ts',
        // @ts-expect-error
        'schemata',
        // @ts-expect-error
        'astro',
        'scss',
        // @ts-expect-error
        'templates',
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
        this.console.progress( 'compiling schemata...', 1 );

        const Tokens = ( await import( /* @vite-ignore */ this.fs.pathResolve( 'dist/ts/02-tokens/Tokens.js' ) ) ).Tokens;

        const defaultTokens = new Tokens( {}, { tokensAsDefault: true } );

        this.console.verbose( 'writing default json tokens...', 2 );
        this.try(
            this.fs.write,
            ( this.params.verbose ? 2 : 3 ),
            [
                this.getDistDir( undefined, 'default-tokens.json' ),
                JSON.stringify( defaultTokens, null, 4 ),
                { force: true }
            ]
        );

        this.console.verbose( 'writing default scss tokens...', 2 );

        const tokenScss = defaultTokens.toScss();

        this.try(
            this.fs.write,
            ( this.params.verbose ? 2 : 3 ),
            [
                this.getDistDir( undefined, 'default-tokens.scss' ),
                tokenScss,
                { force: true }
            ]
        );

        this.try(
            this.fs.write,
            ( this.params.verbose ? 2 : 3 ),
            [
                'src/scss/tokens/_default.scss',
                tokenScss,
                { force: true }
            ]
        );
    }

    /**
     * @protected
     * @override
     */
    async scss() {
        await this.runCustomDirCopySubStage( 'scss' );
    }

    /**
     * @protected
     * @override
     */
    async ts() {
        await super.ts();

        this.console.verbose( 'tidying up compiled files...', 2 );

        this.try(
            this.fs.delete,
            ( this.params.verbose ? 3 : 2 ),
            [ [
                'dist/ts/**/*.docs.js',
                'dist/ts/**/*.docs.js.map',

                'dist/ts/**/*.docs.ts',
                'dist/ts/**/*.docs.d.ts',
                'dist/ts/**/*.docs.d.ts.map',
            ], ( this.params.verbose ? 3 : 2 ) ]
        );
    }

    /**
     * @protected
     */
    async templates() {

        await this.runCustomScssDirSubStage(
            'scss/templates',
            this.getDistDir( undefined, 'css/templates' ),
            { postCSS: true },
        );

        if ( this.params.packaging || this.params.releasing ) {

            this.console.verbose( 'tidying up compiled files...', 2 );
            this.try(
                this.fs.delete,
                ( this.params.verbose ? 3 : 2 ),
                [ [
                    'dist/css/templates/@template.css',
                    'dist/css/templates/@template.css.map'
                ], ( this.params.verbose ? 3 : 2 ) ]
            );
        }
    }
}