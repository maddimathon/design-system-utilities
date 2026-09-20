/**
 * @since 0.1.0-beta.0
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0
 * @license MIT
 */
import { type RunnerOptions } from 'fantasticon';
import { AbstractStage } from '@maddimathon/build-utilities';
import type { Tokens } from '../02-tokens/Tokens.js';
import type { RequiredPartially } from '@maddimathon/utility-typescript/types';
/**
 * Take a token object and write its relevant files and assets to their output directories.
 *
 * @since 0.1.0-beta.0
 */
export declare function buildTokens(stage: AbstractStage<any, any>, tokens: Tokens.Instance, level: number, paths: buildTokens.Paths, args?: Partial<buildTokens.Args>): Promise<void>;
/**
 * Utilities for the {@link buildTokens} function.
 *
 * @since 0.1.0-beta.0
 */
export declare namespace buildTokens {
    /**
     * @since 0.1.0-beta.0
     */
    type Args = {
        iconFont: Partial<RunnerOptions>;
    };
    /**
     * @since 0.1.0-beta.0
     */
    type Paths = {
        assets?: false | {
            /**
             * Where to write the font token files, relative to `tokensDistSubpath`.
             *
             * @default 'assets/logos'
             */
            fonts?: false | string;
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
    };
    /**
     * @since 0.1.0-beta.0
     */
    function writeIcons(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<void>;
    /**
     * @since 0.1.0-beta.0
     */
    function buildIconFontArgs(stage: AbstractStage<any, any>, level: number, paths: buildTokens.Paths, args: RequiredPartially<Partial<RunnerOptions>, 'name'>): Promise<false | RunnerOptions>;
    /**
     * @since 0.1.0-beta.0
     */
    function writeJson(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[]>;
    /**
     * @since 0.1.0-beta.0
     */
    function writeLogos(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[][]>;
    /**
     * @since 0.1.0-beta.0
     */
    function writeScss(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[]>;
}
