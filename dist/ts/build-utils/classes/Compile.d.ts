/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { PackageJson } from '@maddimathon/utility-typescript/types';
import type { CLI, Config, Stage } from '@maddimathon/build-utilities';
import type { SemVer } from '@maddimathon/build-utilities/internal';
import { AbstractStage, CompileStage } from '@maddimathon/build-utilities';
import type { Tokens } from '../../02-tokens/Tokens.js';
import { buildTokens } from '../buildTokens.js';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha
 */
export declare class Compile extends CompileStage {
    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    readonly subStages: Stage.SubStage.Compile[];
    /**
     * @param config   Current project config.
     * @param params   Current CLI params.
     * @param args     Partial overrides for the default args.
     * @param pkg      Parsed contents of the project’s package.json file.
     * @param version  Version object for the project’s version.
     */
    constructor(config: Config.Class, params: CLI.Params, args: Partial<Stage.Args.Compile>, pkg?: PackageJson, version?: SemVer);
    /**
     * Runs through the basics of a typical Compile.tokens substage.
     *
     * @category Running
     */
    buildTokens(tokens: Tokens.Instance, level: number, paths: buildTokens.Paths, args?: Partial<buildTokens.Args>): Promise<void>;
    protected astro(): Promise<void>;
    protected scss(): Promise<void>;
    protected templates(sassDebugCheckpoints?: boolean, args?: Partial<AbstractStage.runCustomScssDirSubStage.Opts>): Promise<void>;
    protected tokens(): Promise<void>;
}
