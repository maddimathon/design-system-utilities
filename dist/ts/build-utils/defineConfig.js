/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { mergeArgs, } from '@maddimathon/utility-typescript/functions';
import {} from '@maddimathon/build-utilities';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
/**
 * Applies a better default build config for npm-build-utilities.
 *
 * @since 0.1.0-alpha.draft
 */
export function defineConfig(config, _classes = {}) {
    const classes = {
        Build,
        Compile,
        Document,
        ..._classes,
    };
    const _defaults = {
        build: classes.Build.prototype.ARGS_DEFAULT,
    };
    const merged = {
        ...config,
        stages: {
            build: [
                classes.Build,
                {
                    minimize: false,
                    prettify: (_stage) => {
                        return {
                            ..._defaults.build.prettify(_stage),
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
        compiler: mergeArgs({
            ts: {
                tidyGlobs: 'types/**/*.js',
            },
        }, config.compiler, true),
    };
    return merged;
}
//# sourceMappingURL=defineConfig.js.map