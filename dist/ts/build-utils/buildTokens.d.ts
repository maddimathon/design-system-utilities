/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractStage } from '@maddimathon/build-utilities';
import type { Tokens } from '../02-tokens/Tokens.js';
/**
 * Take a token object and write its relevant files and assets to their output directories.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function buildTokens(stage: AbstractStage<any, any>, tokens: Tokens.Instance, level: number, paths: buildTokens.Paths): Promise<[(string | false)[] | undefined, string[] | undefined, (string | false)[][] | undefined, (string | false)[][] | undefined]>;
/**
 * Utilities for the {@link buildTokens} function.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare namespace buildTokens {
    /**
     * @since 0.1.0-beta.0.draft
     */
    type Paths = {
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
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    function writeIcons(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    function writeJson(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[] | undefined>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    function writeLogos(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<(string | false)[][] | undefined>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    function writeScss(stage: AbstractStage<any, any>, tokens: Tokens.Instance, paths: false | string[], level: number): Promise<string[] | undefined>;
}
