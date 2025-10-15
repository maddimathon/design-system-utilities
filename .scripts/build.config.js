#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { Config, Stage } from '@maddimathon/build-utilities';
*/

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';

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

        ts: {
            tidyGlobs: 'types/**/*.js',
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
            },
        ],

        compile: Compile,

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
                },
            }
        ],

        test: false,
    },
};

export default config;
