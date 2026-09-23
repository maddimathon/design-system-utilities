/**
 * @since 0.1.0-beta.0
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.1
 * @license MIT
 */
import type * as sass from 'sass-embedded';
import type { Stage } from '@maddimathon/build-utilities';
/**
 * Defines on the sass compiler options part of the build-utilities config.
 *
 * @since 0.1.0-beta.0
 */
export declare function defineSassCompilerOpts(stage: Stage, partial?: Partial<Stage.Compiler.Args.Sass> | Stage.Compiler.Args.Sass | ((stage: Stage) => Partial<Stage.Compiler.Args.Sass>)): sass.Options<"async">;
