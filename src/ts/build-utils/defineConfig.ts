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
export function defineConfig(
    config: Omit<Config, 'stages'> & {
        stages?: undefined | Omit<Config[ 'stages' ], 'build' | 'compile' | 'document' | 'package' | 'test'>;
    },
    _classes: {
        Build?: typeof Build,
        Compile?: typeof Compile,
        Document?: typeof Document,
        Package?: typeof PackageStage,
        Test?: typeof TestStage,
    } = {},
): Config {

    type Classes = {
        build: boolean | typeof Build,
        compile: boolean | typeof Compile,
        document: boolean | typeof Document,
        package: undefined | boolean | typeof PackageStage,
        test: undefined | boolean | typeof TestStage,
    };

    const classes = {
        build: _classes.Build ?? Build,
        compile: _classes.Compile ?? Compile,
        document: _classes.Document ?? Document,
        package: _classes.Package ?? true,
        test: _classes.Test ?? false,
    } satisfies Classes as Pick<NonNullable<Config[ 'stages' ]>, 'build' | 'compile' | 'document' | 'package' | 'test'>;

    const merged: Config = {
        ...config,

        compiler: {
            ...config.compiler ?? {},
            sass: ( args ) => defineSassCompilerOpts( args, config.compiler?.sass ),
        },

        stages: {
            ...config.stages,
            ...classes,
        },
    };

    return merged;
}