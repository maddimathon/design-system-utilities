/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    mergeArgs,
} from '@maddimathon/utility-typescript/functions';

import type {
    Config,
    Stage,
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/build-utilities';

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';

/**
 * Applies a better default build config for npm-build-utilities.
 * 
 * @since ___PKG_VERSION___
 */
export function defineConfig<
    T_Build extends typeof Build,
    T_Compile extends typeof Compile,
    T_Document extends typeof Document,
>(
    config: Config,
    _classes: {
        Build?: T_Build,
        Compile?: T_Compile,
        Document?: T_Document,
    } = {},
): Config {

    const classes = {
        Build,
        Compile,
        Document,
        ..._classes,
    };

    const _defaults = {
        build: classes.Build.prototype.ARGS_DEFAULT,
    };

    const merged: Config = {
        ...config,

        stages: {

            build: [
                classes.Build,
                {
                    minimize: false,

                    prettify: ( _stage: Stage ) => {

                        return {
                            ..._defaults.build.prettify( _stage ),
                            html: undefined,
                        };
                    },
                },
            ],

            compile: classes.Compile,

            document: classes.Document,

            test: false,

            ...config.stages,
        },

        compiler: mergeArgs(
            {
                ts: {
                    tidyGlobs: 'types/**/*.js',
                },
            } as Partial<Stage.Compiler.Args>,
            config.compiler,
            true
        ),
    };

    return merged;
}