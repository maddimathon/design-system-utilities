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
    CompileStage,
} from '@maddimathon/build-utilities';

import { setSassCompilerFns } from '../functions/setSassCompilerFns.js';

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
        'tsconfig',
        'ts',
        // @ts-expect-error
        'tokens',
        // @ts-expect-error
        'templates',
        'scss',
        // @ts-expect-error
        'astro',
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
     * @override
     */
    async scss() {
        await this.runCustomDirCopySubStage( 'scss' );

        await setSassCompilerFns( this.compiler, {
            config: this.config,
            console: this.console,
            params: this.params,
        } );

        const cssPaths = await this.runCustomScssDirSubStage(
            '',
            'src/astro/css',
            {
                maxConcurrent: 15,
                postCSS: true,
                srcDir: 'src/scss/_astro',
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
     */
    async templates() {
        await setSassCompilerFns( this.compiler, {
            config: this.config,
            console: this.console,
            params: this.params,
        } );

        await this.runCustomScssDirSubStage(
            'template',
            'dist/css',
            {
                maxConcurrent: 15,
                postCSS: true,
                srcDir: 'src/scss',
            },
        );
    }

    /**
     * @protected
     */
    async tokens() {
        this.console.progress( 'compiling default tokens...', 1 );

        const { Tokens } = await import( /* @vite-ignore */ '../../dist/ts/02-tokens/Tokens.js' );

        const { buildTokens } = await import( /* @vite-ignore */ '../../dist/ts/build-utils/buildTokens.js' );

        /**
         * @satisfies {Parameters<typeof buildTokens.buildIconFontArgs>[2]}
         */
        const tokenBuildPaths = {
            tokensDistSubpath: '../',

            slug: 'design-system-utilities',

            assets: {
                fonts: this.getSrcDir( undefined, 'assets/fonts' ),
                icons: this.getSrcDir( undefined, 'assets/icons' ),
                logos: this.getSrcDir( undefined, 'assets/logos' ),
            },

            json: [
                this.getDistDir( undefined, 'default-tokens.json' ),
            ],

            scss: [
                this.getDistDir( undefined, 'default-tokens.scss' ),
                'src/scss/tokens/system/_00-default.scss',
            ],
        };

        const iconFontArgs = await buildTokens.buildIconFontArgs(
            this,
            this.params.verbose ? 1 : 2,
            tokenBuildPaths,
            {
                name: 'Design System Utilities Icons',

                inputDir: tokenBuildPaths.assets.icons,
                outputDir: tokenBuildPaths.assets.fonts,
            },
        );

        const defaultTokens = await this.atry(
            Tokens.sample,
            this.params.verbose ? 1 : 2,
            [
                {},
                {
                    buildIconFont: iconFontArgs,
                    scssTokenParserImportPath: '00-parser',
                },
            ],
        );

        await buildTokens( this, defaultTokens, 2, tokenBuildPaths );
    }

    /**
     * @protected
     * @override
     */
    async ts() {
        await super.ts();

        this.console.verbose( 'copying definitions...', 2 );
        this.try(
            this.fs.copy,
            ( this.params.verbose ? 3 : 2 ),
            [
                '**/*.d.ts',
                ( this.params.verbose ? 3 : 2 ),
                this.getDistDir( undefined, 'ts' ),
                this.getSrcDir( undefined, 'ts' ),
                {
                    force: true,
                    rename: false,
                    recursive: true,
                },
            ],
        );

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

                'dist/ts/01-utilities/@types.js',
                'dist/ts/02-tokens/@types.js',
            ], ( this.params.verbose ? 3 : 2 ) ]
        );
    }

    /**
     * @protected
     */
    async tsconfig() {
        this.console.progress( 'writing tsconfig files...', 1 );

        await this.atry( this.writeTsConfig, 2, [
            'tsconfig.json',
            2,
            {
                extends: './tsconfig.astro.json',

                include: [
                    './.astro/types.d.ts',
                    './src/**/*',
                ],
                exclude: [
                    './.scripts/**/*',
                    './src/docs/_public/**/*',
                ],

                compilerOptions: {
                    allowUmdGlobalAccess: false,
                    allowUnusedLabels: true,
                    allowSyntheticDefaultImports: true,
                    esModuleInterop: true,
                    exactOptionalPropertyTypes: false,
                    lib: [ "ESNext" ],
                    noUnusedParameters: false,
                    skipLibCheck: false,
                    verbatimModuleSyntax: true,
                },
            },
        ] );

        await this.atry( this.writeTsConfig, 2, [
            'src/ts/tsconfig.json',
            2,
            {
                extends: '../../tsconfig.base.json',

                include: [
                    '../../src/ts/**/*',
                    './src/ts/**/*',
                ],
                exclude: [],

                compilerOptions: {
                    declaration: true,
                    declarationMap: false,
                    noUnusedParameters: false,
                    outDir: '../../dist/ts/',
                },
            },
        ] );
    }
}