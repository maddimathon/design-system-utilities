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
        'tokens',
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
    async tokens() {
        this.console.progress( 'compiling default tokens...', 1 );

        const Tokens = ( await import( /* @vite-ignore */ '../../dist/ts/02-tokens/Tokens.js' ) ).Tokens;

        const defaultTokens = await Tokens.sample();

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

        const cssPaths = await this.runCustomScssDirSubStage(
            'scss/_astro',
            this.getSrcDir( undefined, 'astro/css' ),
            {
                postCSS: true,
            },
        );

        this.console.verbose( 'tidying up compiled files...', 2 );

        for ( const path of cssPaths.map( this.fs.pathRelative ) ) {

            this.try(
                this.fs.write,
                ( this.params.verbose ? 3 : 2 ),
                [
                    path.replace( /\/astro\/css\//gi, '/astro/scss/' ).replace( /\.css$/gi, '.scss' ),
                    this.fs.readFile( path ),
                    { force: true, rename: false }
                ]
            );
        }

        this.try(
            this.fs.delete,
            ( this.params.verbose ? 3 : 2 ),
            [ [
                'src/astro/css/**/*.css.map',
            ], ( this.params.verbose ? 3 : 2 ) ]
        );
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