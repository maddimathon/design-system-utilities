/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    Config,
    PackageStage,
    TestStage,
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/build-utilities';

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';

import { defineSassCompilerOpts } from './defineSassCompilerOpts.js';

export type { Config };

/**
 * Applies a better default build config for npm-build-utilities.
 * 
 * @since 0.1.0-alpha
 */
export function defineConfig<
    T_Build extends typeof Build,
    T_Compile extends typeof Compile,
    T_Document extends typeof Document,
    T_Package extends typeof PackageStage,
    T_Test extends typeof TestStage,
>(
    config: Omit<Config, 'stages'> & {
        stages?: undefined | Omit<Config[ 'stages' ], 'build' | 'compile' | 'document' | 'package' | 'test'>;
    },
    _classes: {
        Build?: T_Build,
        Compile?: T_Compile,
        Document?: T_Document,
        Package?: T_Package,
        Test?: T_Test,
    } = {},
): Config {

    const classes = {
        Build,
        Compile,
        Document,
        ..._classes,
    };

    const merged: Config = {
        ...config,

        compiler: {
            ...config.compiler ?? {},
            sass: ( args ) => defineSassCompilerOpts( args, config.compiler?.sass ),
        },

        stages: {
            ...config.stages,

            build: classes.Build,
            compile: classes.Compile,
            document: classes.Document,
            package: classes.Package,
            test: classes.Test ?? false,
        },
    };

    return merged;
}