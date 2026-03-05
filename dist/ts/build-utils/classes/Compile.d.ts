/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { PackageJson } from '@maddimathon/utility-typescript/types';
import type { CLI, Config, Stage } from '@maddimathon/build-utilities';
import type { SemVer } from '@maddimathon/build-utilities/internal';
import { AbstractStage, CompileStage } from '@maddimathon/build-utilities';
import type { Tokens } from '../../02-tokens/Tokens.js';
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
    buildTokens(level: number, tokens: Tokens.Instance, _paths: {
        assets?: false | {
            /**
             * Where to write the icon tokens, relative to `tokensDistSubpath`.
             *
             * @default 'assets/icons'
             */
            icons?: false | string | string[];
            /**
             * Where to write the logo tokens, relative to `tokensDistSubpath`.
             *
             * @default 'assets/logos'
             */
            logos?: false | string | string[];
        };
        /**
         * The subpath for the tokens output in the dist directory.
         *
         * @default 'tokens'
         */
        tokensDistSubpath?: string;
        /**
         * Where to write the json tokens, relative to `tokensDistSubpath`.
         *
         * @default `${slug}.json`
         */
        json?: false | string | string[];
        /**
         * Where to write the scss tokens, relative to project root.
         *
         * @default 'src/scss/tokens/system/_tokens.scss'
         */
        scss?: false | string | string[];
        /**
         * The project slug, used in token file names, without any ending
         * extensions.
         */
        slug: string;
    }): Promise<void>;
    protected buildTokens_writeJson(tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[] | undefined>;
    protected buildTokens_writeScss(tokens: Tokens.Instance, paths: false | string[], level: number): Promise<string[] | undefined>;
    protected buildTokens_writeIcons(tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    protected buildTokens_writeLogos(tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    protected astro(): Promise<void>;
    protected scss(): Promise<void>;
    protected templates(sassDebugCheckpoints?: boolean, args?: Partial<AbstractStage.runCustomScssDirSubStage.Opts>): Promise<void>;
    protected tokens(): Promise<void>;
}
