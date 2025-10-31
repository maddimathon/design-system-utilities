/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2.draft
 * @license MIT
 */
import type { Stage } from '@maddimathon/build-utilities';
import { CompileStage } from '@maddimathon/build-utilities';
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
     * Runs through the basics of a typical Compile.tokens substage.
     *
     * @category Running
     */
    buildTokens<T_Tokens extends Tokens.Instance>(level: number, tokens: T_Tokens, _paths: {
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
    protected buildTokens_writeJson<T_Tokens extends Tokens.Instance>(tokens: T_Tokens, paths: false | string[], level: number): Promise<(string | false)[] | undefined>;
    protected buildTokens_writeScss<T_Tokens extends Tokens.Instance>(tokens: T_Tokens, paths: false | string[], level: number): Promise<string[] | undefined>;
    protected buildTokens_writeIcons<T_Tokens extends Tokens.Instance>(tokens: T_Tokens, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    protected buildTokens_writeLogos<T_Tokens extends Tokens.Instance>(tokens: T_Tokens, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    protected astro(): Promise<void>;
    protected scss(): Promise<void>;
    protected templates(): Promise<void>;
    protected tokens(): Promise<void>;
}
//# sourceMappingURL=Compile.d.ts.map