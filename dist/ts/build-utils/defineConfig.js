/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import {} from '@maddimathon/build-utilities';
import { sassCompilerOpts } from '@maddimathon/utility-sass';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';
/**
 * Applies a better default build config for npm-build-utilities.
 *
 * @since 0.1.0-alpha
 */
export function defineConfig(config, _classes = {}) {
    const classes = {
        Build,
        Compile,
        Document,
        ..._classes,
    };
    const merged = {
        ...config,
        compiler: {
            ...config.compiler ?? {},
            sass: (args) => {
                const sassArgs = typeof config.compiler?.sass === 'function'
                    ? config.compiler?.sass(args) ?? {}
                    : config.compiler?.sass ?? {};
                if (!sassArgs['functions']) {
                    sassArgs['functions'] = {};
                }
                const themeFlattenGetValues = sassFn_themeFlattenGetValues(args);
                sassArgs['functions'][themeFlattenGetValues[0]] = themeFlattenGetValues[1];
                return sassCompilerOpts(args, sassArgs);
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
