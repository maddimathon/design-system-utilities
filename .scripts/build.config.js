#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * @import { Config, Stage } from "@maddimathon/build-utilities"
 */

import {
    BuildStage,
} from '@maddimathon/build-utilities';

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';

const _defaults = {
    build: BuildStage.prototype.ARGS_DEFAULT,
};

/**
 * @type {Config}
 */
const config = {

    title: 'Design System Utilities',
    launchYear: '2025',

    compiler: {
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

        document: {

            entryPoints: [
                'src/ts/index.ts',
            ],

            typeDoc: {

                categorizeByGroup: false,

                projectDocuments: [
                    'README.md',
                    // 'CHANGELOG.md',
                    // 'LICENSE.md',
                    'src/docs/*.md',
                ],
            },
        },

        test: false,
    },
};

export default config;
