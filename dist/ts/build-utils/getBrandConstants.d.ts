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
import { Tokens } from '../02-tokens/Tokens.js';
/**
 * Tools for build scripts to write files of brand kit values .
 *
 * @since 0.1.0-beta.0.draft
 */
export declare namespace getBrandConstants {
    /**
     * Prepares values to write files of constants for the given set of SVGs.
     *
     * @since 0.1.0-beta.0.draft
     */
    function getSvgConsts<T_SetName extends getSvgConsts.SetName, T_ReturnOptions extends getSvgConsts.ReturnOptions>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], args?: getSvgConsts.Args): Promise<null | {
        readonly setName: T_SetName;
        readonly entries: {
            readonly all: readonly [string, SvgMaker.JsonReturn<string>][];
        } & {
            readonly [K in T_ReturnOptions]: readonly [string, string][];
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
        type Args<T_ExtraReturnOptions extends string = never> = {
            /**
             * Optionally map entry key strings as they are built.
             *
             * @since 0.1.0-beta.0.draft
             */
            keyMappers?: {
                [K in ReturnOptions]?: (item: string) => string;
            };
            /**
             * Optionally map entry value strings as they are built.
             *
             * @since 0.1.0-beta.0.draft
             */
            valueMappers?: {
                [K in ReturnOptions]?: (item: string) => string;
            };
            /**
             * Which variables to include in the return.
             */
            incl?: {
                [K in ReturnOptions | T_ExtraReturnOptions]?: boolean;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        const returnOpts: readonly ["base64", "css", "glyphs", "names", "slugs", "svg"];
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ReturnOptions = typeof returnOpts[number];
        /**
         * @since 0.1.0-beta.0.draft
         */
        type SetName = "icons" | "logos";
    }
    /**
     * Prepares values to write files of token value constants.
     *
     * @since 0.1.0-beta.0.draft
     */
    function getThemeConsts<T_ReturnOptions extends getThemeConsts.ReturnOptions>(tokens: Tokens.JsonReturn, args?: getThemeConsts.Args): Promise<null | {
        readonly entries: {
            readonly [K in T_ReturnOptions]: readonly [string, string][];
        };
    }>;
    /**
     * Utilities for the {@link getSvgConstants} function.
     *
     * @since 0.1.0-beta.0.draft
     */
    namespace getThemeConsts {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Args<T_ExtraReturnOptions extends string = never> = {
            /**
             * Optionally map entry key strings as they are built.
             *
             * @since 0.1.0-beta.0.draft
             */
            keyMappers?: {
                [K in ReturnOptions]?: (item: string) => string;
            };
            /**
             * Optionally map entry value strings as they are built.
             *
             * @since 0.1.0-beta.0.draft
             */
            valueMappers?: {
                [K in Extract<ReturnOptions, 'themes' | 'themeNames'>]?: (item: string) => string;
            } & {
                [K in Exclude<ReturnOptions, 'themes' | 'themeNames'>]?: (item: string[]) => string;
            };
            /**
             * Which variables to include in the return.
             */
            incl?: {
                [K in ReturnOptions | T_ExtraReturnOptions]?: boolean;
            };
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        const returnOpts: readonly ["themes", "themeNames", "tokenSlugs", "tokenSlugNames"];
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ReturnOptions = typeof returnOpts[number];
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
             * Tries its best to recursively format a value.
             *
             * @since 0.1.0-beta.0.draft
             */
            function prepareConstant([key, value]: [string, unknown], { indent, keyFilter, valueFilter, }?: {
                indent?: string | undefined;
                keyFilter?: ((str: string) => string) | undefined;
                valueFilter?: ((str: string) => string) | undefined;
            }): [string, string];
            function entriesToArray(entries: [string, string][] | readonly [string, string][], associativeArray?: boolean, indent?: string): string;
            function entriesToObject(entries: [string, string][] | readonly [string, string][], indent?: string): string;
            /**
             * Gets a string of valid PHP code for wordpress defining custom
             * constants to go with the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getCustom<T_ConstName extends string, T_Value extends getCustom.Value>(constants: getCustom.Input<T_ConstName, T_Value>[], phpNamespace: string): Promise<null | string>;
            /**
             * @since 0.1.0-beta.0.draft
             */
            namespace getCustom {
                /**
                 * Accepted values for custom constants.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Value = string[] | Record<number | string, string>;
                /**
                 * @template T_ConstName Constant name.
                 * @template T_Value Constant value in JS.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Input<T_ConstName extends string = string, T_Value extends Value = Value> = [T_ConstName, T_Value, Args];
                /**
                 * Configure how to output a custom constant’s definition.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Args = {
                    comment?: undefined | string;
                    insideDefine?: undefined | boolean;
                    insideHook?: undefined | boolean;
                    objectAsAssociativeArray?: undefined | boolean;
                    objectAsObject?: undefined | boolean;
                    type: string;
                };
            }
            /**
             * Gets a string of valid PHP code for wordpress defining constants for the given set of
             * SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getSvg<T_SetName extends getSvgConsts.SetName>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], textDomain: string, phpNamespace: string, args?: Omit<getSvgConsts.Args, 'valueMappers'>): Promise<null | string>;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getTheme(tokens: Tokens.JsonReturn, textDomain: string, phpNamespace: string, args?: Omit<getThemeConsts.Args, 'valueMappers'>): Promise<null | string>;
            /**
             * Gets a string of valid PHP code for wordpress defining constants
             * for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getAll(tokens: Tokens.JsonReturn, textDomain: string, phpNamespace: string, args?: {
                custom?: getCustom.Input[];
                icons?: Omit<getSvgConsts.Args, 'valueMappers'>;
                logos?: Omit<getSvgConsts.Args, 'valueMappers'>;
                theme?: Omit<getThemeConsts.Args, 'valueMappers'>;
            }): Promise<string>;
        }
        /**
         * Export to a TypeScript string.
         *
         * @since 0.1.0-beta.0.draft
         */
        namespace TS {
            function entriesToArray(entries: [string, string][] | readonly [string, string][]): string;
            function entriesToObject(entries: [string, string][] | readonly [string, string][]): string;
            function entriesToObject_type(entries: [string, string][] | readonly [string, string][]): string;
            function outputConstant(varName: string, content: string, args: {
                comment?: string;
                type?: undefined | string;
            }): string[];
            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * custom constants to go with the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getCustom<T_ConstName extends string, T_Value extends getCustom.Value>(
            /**
             * Values to print indexed by their constant name.
             */
            constants: getCustom.Input<T_ConstName, T_Value>[]): Promise<null | string>;
            /**
             * @since 0.1.0-beta.0.draft
             */
            namespace getCustom {
                /**
                 * Accepted values for custom constants.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Value = string[] | Record<number | string, string>;
                /**
                 * @template T_ConstName Constant name.
                 * @template T_Value Constant value in JS.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Input<T_ConstName extends string = string, T_Value extends Value = Value> = [T_ConstName, T_Value] | [T_ConstName, T_Value, Args];
                /**
                 * Configure how to output a custom constant’s definition.
                 *
                 * @since 0.1.0-beta.0.draft
                 */
                type Args = {
                    comment?: string;
                    type?: undefined | string;
                };
            }
            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the given set of SVGs.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getSvg<T_SetName extends getSvgConsts.SetName>(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], textDomain: string, args?: Omit<getSvgConsts.Args<"react">, 'valueMappers'>): Promise<null | string>;
            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getTheme(tokens: Tokens.JsonReturn, textDomain: string, args?: Omit<getThemeConsts.Args<"react">, 'valueMappers'>): Promise<null | string>;
            /**
             * Gets a string of valid TypeScript code for wordpress defining
             * constants for the theme tokens.
             *
             * @since 0.1.0-beta.0.draft
             */
            function getAll(tokens: Tokens.JsonReturn, textDomain: string, args?: {
                custom?: getCustom.Input[];
                icons?: Omit<getSvgConsts.Args, 'valueMappers'>;
                logos?: Omit<getSvgConsts.Args, 'valueMappers'>;
                theme?: Omit<getThemeConsts.Args, 'valueMappers'>;
            }): Promise<string>;
        }
    }
}
