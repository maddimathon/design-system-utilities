#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com/web)
 * 
 * @license MIT
 */

/**
 * @import { Config, Stage } from '@maddimathon/build-utilities';
 */

import { sassCompilerOpts } from '@maddimathon/utility-sass';

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
import { Test } from './classes/Test.js';

const _defaults = {
    build: Build.prototype.ARGS_DEFAULT,
    document: Document.prototype.ARGS_DEFAULT,
};

/**
 * @type {Config}
 */
const config = {

    title: 'Design System Utilities',
    launchYear: '2025',

    compiler: {

        postCSS: {
            presetEnv: {
                features: {
                    "content-alt-text": false,
                },
            },
        },

        sass: ( stage ) => sassCompilerOpts(
            stage,
            {
                benchmarkCompileTime: true,
                // pathToSassLoggingRoot: 'node_modules/@maddimathon/build-utilities/node_modules',
                sourceMap: false,
            },
        ),

        ts: {
            tidyGlobs: [
                '**/tsconfig.tsbuildinfo',
                'types/**/*.js',
                'dist/scss/demos',
                'dist/ts/02-tokens/_Tokens_TEMPLATE.d.ts',
                'dist/ts/02-tokens/_Tokens_TEMPLATE.js',
            ],
        },
    },

    stages: {

        build: [
            Build,
            {
                minimize: false,

                /**
                 * @param {Stage} _stage
                 */
                prettify: ( _stage ) => {

                    return {
                        ..._defaults.build.prettify( _stage ),

                        html: undefined,
                        js: undefined,
                        ts: undefined,
                        yaml: undefined,
                    };
                },

                replace: ( _stage ) => {

                    const __def = _defaults.build.replace( _stage );

                    return {
                        ...__def,

                        ignore: [
                            ...( __def.ignore ?? [] ),
                            '**/_Tokens_TEMPLATE.ts',
                        ],
                    };
                },
            },
        ],

        compile: [
            Compile,
            {
                files: {
                    src: [
                        'assets',
                    ],
                },
            },
        ],

        document: [
            Document,
            {
                entryPoints: [
                    'src/ts/index.ts',
                    'src/ts/internal.docs.ts',
                ],

                typeDoc: {
                    out: 'src/docs/_public/typedoc',

                    projectDocuments: [
                        'README.typedoc.md',
                    ],

                    // navigation: {
                    //     includeGroups: true,
                    // },
                },
            },
        ],

        test: Test,
    },
};

export default config;
