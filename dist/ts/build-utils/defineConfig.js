/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4
 * @license MIT
 */
import {} from '@maddimathon/build-utilities';
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