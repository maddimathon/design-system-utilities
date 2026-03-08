/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { SvgMaker } from '../01-utilities/SvgMaker.js';
import type { Tokens } from '../02-tokens/Tokens.js';
/**
 * Tools for build scripts to write files of brand kit values .
 *
 * @since 0.1.0-beta.0.draft
 */
export declare namespace getBrandConstants {
    /**
     * Gets a string of valid typescript for defining constants for the given set
     * of SVGs.
     *
     * @since 0.1.0-beta.0.draft
     */
    function getSvgConsts<T_SetName extends getSvgConsts.SetName>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], args?: getSvgConsts.Args): Promise<null | {
        readonly setName: string;
        readonly entries: {
            readonly all: readonly [string, SvgMaker.JsonReturn<string>][];
            readonly base64: readonly [string, string][];
            readonly css: readonly [string, string][];
            readonly name: readonly [string, string][];
            readonly svg: readonly [string, string][];
        };
    }>;
    /**
     * Utilities for the {@link getSvgConstants} function.
     *
     * @since 0.1.0-beta.0.draft
     */
    namespace getSvgConsts {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Args = {
            /**
             * Optionally map entry value strings as they are built.
             *
             * @since 0.1.0-beta.0.draft
             */
            entryMappers?: {
                [K in "base64" | "css" | "name" | "svg"]?: (item: string) => string;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Return = {};
        /**
         * @since 0.1.0-beta.0.draft
         */
        type SetName = "icons" | "logos";
    }
    /**
     * For use in Wordpress projects (uses _x for translation).
     *
     * @since 0.1.0-beta.0.draft
     */
    namespace Wordpress {
        /**
         * Export to a PHP string.
         *
         * @since 0.1.0-beta.0.draft
         */
        namespace PHP {
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getSvg<T_SetName extends getSvgConsts.SetName>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], textDomain: string, phpNamespace: string): Promise<null | string>;
        }
        /**
         * Export to a TypeScript string.
         *
         * @since 0.1.0-beta.0.draft
         */
        namespace TS {
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getSvg<T_SetName extends getSvgConsts.SetName>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], textDomain: string): Promise<null | string>;
        }
    }
}
