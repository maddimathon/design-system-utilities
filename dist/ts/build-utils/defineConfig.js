/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import {} from '@maddimathon/build-utilities';
import { sassCompilerOpts } from '@maddimathon/utility-sass';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
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
            sass: sassCompilerOpts(config.compiler?.sass),
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
//# sourceMappingURL=defineConfig.js.map