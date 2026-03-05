/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type * as sass from 'sass-embedded';
import type { CLI, Config, Stage } from '@maddimathon/build-utilities';
import type { Logger } from '@maddimathon/build-utilities/internal';
/**
 * Defines on the sass compiler options part of the build-utilities config.
 */
export declare function defineSassCompilerOpts(args: {
    config: Config.Class;
    console: Logger;
    params: CLI.Params;
}, partial?: Partial<Stage.Compiler.Args.Sass> | Stage.Compiler.Args.Sass | ((args: {
    config: Config.Class;
    console: Logger;
    params: CLI.Params;
}) => Partial<Stage.Compiler.Args.Sass>)): sass.Options<"async">;
