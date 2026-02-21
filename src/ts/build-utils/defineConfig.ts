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
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/build-utilities';

import { sassCompilerOpts } from '@maddimathon/utility-sass';

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';

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
>(
    config: Omit<Config, 'stages'> & {
        stages?: undefined | Omit<Config[ 'stages' ], 'build' | 'compile' | 'document'>;
    },
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

    const themeFlattenGetValues = sassFn_themeFlattenGetValues();

    const merged: Config = {
        ...config,

        compiler: {
            ...config.compiler ?? {},

            sass: ( args ) => {
                const sassArgs = typeof config.compiler?.sass === 'function'
                    ? config.compiler?.sass( args ) ?? {}
                    : config.compiler?.sass ?? {};

                if ( !sassArgs[ 'functions' ] ) {
                    sassArgs[ 'functions' ] = {};
                }

                sassArgs[ 'functions' ][ themeFlattenGetValues[ 0 ] ] = themeFlattenGetValues[ 1 ];

                return sassCompilerOpts( args, sassArgs );
            },
        },

        stages: {
            test: false,
            ...config.stages,

            build: classes.Build,
            compile: classes.Compile,
            document: classes.Document,
        },
    };

    return merged;
}