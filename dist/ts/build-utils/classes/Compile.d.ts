/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { Stage } from '@maddimathon/build-utilities';
import { CompileStage } from '@maddimathon/build-utilities';
import type { Tokens } from '../../02-tokens/Tokens.js';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha.draft
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
        /**
         * The subpath for the tokens output in the dist directory.
         *
         * @default 'tokens'
         */
        distDir?: string;
        /**
         * Where to write the json tokens, relative to project root.
         *
         * @default `${distDir}/${slug}.json`
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
    protected astro(): Promise<void>;
    protected scss(): Promise<void>;
    protected templates(): Promise<void>;
    protected tokens(): Promise<void>;
}
//# sourceMappingURL=Compile.d.ts.map