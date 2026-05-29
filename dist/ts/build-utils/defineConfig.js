/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import {} from '@maddimathon/build-utilities';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
import { defineSassCompilerOpts } from './defineSassCompilerOpts.js';
/**
 * Applies a better default build config for npm-build-utilities.
 *
 * @since 0.1.0-alpha
 */
export function defineConfig(config, _classes = {}) {
    const classes = {
        build: _classes.Build ?? Build,
        compile: _classes.Compile ?? Compile,
        document: _classes.Document ?? Document,
        package: _classes.Package ?? true,
        test: _classes.Test ?? false,
    };
    const merged = {
        ...config,
        compiler: {
            ...config.compiler ?? {},
            sass: (stage) => defineSassCompilerOpts(stage, config.compiler?.sass),
        },
        stages: {
            ...config.stages,
            ...classes,
        },
    };
    return merged;
}
