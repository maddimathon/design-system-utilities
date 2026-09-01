/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { RunnerOptions } from 'fantasticon';
import type { WholeTokenLevel, TokenTypes } from './@types.js';
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Icons } from './Tokens_Icons.js';
import { Tokens_Logos } from './Tokens_Logos.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import { Tokens_Photos } from './Tokens_Photos.js';
/**
 * Internal utilities available for documentation but not meant to be public.
 *
 * @since 0.1.0-beta.0.draft
 * @internal
 */
export declare class Internal {
}
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends AbstractTokens<{
    data: Tokens_Internal.Data<T_Params>;
    json: Tokens_Internal.JsonReturn<T_Params>;
    scss: Tokens_Internal.ScssVars<T_Params>;
}> {
    readonly name: string;
    protected readonly colourOpts: {
        names: TokenTypes.Colour.GenericNameArray<T_Params['colour']['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_Params['colour']['extraLevels']>;
    };
    protected readonly input: Omit<Tokens_Internal.InputParam<T_Params>, "colour" | "themes">;
    protected readonly config: Tokens_Internal.Config;
    get data(): Tokens_Internal.Data<T_Params>;
    readonly colour: Tokens_Colour<T_Params['colour']>;
    readonly css: Tokens_CSS<T_Params['style']>;
    readonly icons: Tokens_Icons<T_Params['iconNames']>;
    readonly logos: Tokens_Logos<T_Params['logoNames']>;
    readonly photos: Tokens_Photos<T_Params['photos']>;
    readonly spacing: Tokens_Spacing;
    readonly themes: Tokens_Themes<T_Params['colour'], T_Params['theme']>;
    readonly typography: Tokens_Typography<string>;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams>(input: Tokens_Internal.InputParam<T_Params>, config?: Partial<Tokens.Config<NoInfer<T_Params['colour']['extraLevels']>>>): Promise<Tokens<T_Params>>;
    /**
     *  * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected constructor(name: string, colourOpts: {
        names: TokenTypes.Colour.GenericNameArray<T_Params['colour']['names']>;
        allLevels: Set<ColourUtilities.Levels.Required | T_Params['colour']['extraLevels']>;
    }, { colour, css, icons, photos, themes }: {
        colour: Tokens_Colour<T_Params['colour']>;
        css: Tokens_CSS<T_Params['style']>;
        icons: Tokens_Icons<T_Params['iconNames']>;
        photos: Tokens_Photos<T_Params['photos']>;
        themes: Tokens_Themes<T_Params['colour'], T_Params['theme']>;
    }, input: Omit<Tokens_Internal.InputParam<T_Params>, "colour" | "themes">, config?: Tokens_Internal.Config);
    toJSON(): Tokens_Internal.JsonReturn<T_Params>;
    toScssVars(): Tokens_Internal.ScssVars<T_Params>;
    toScss(): string;
}
/**
 * Internal utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha
 * @internal
 * @private
 */
export declare namespace Tokens_Internal {
    interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }
    type Data<T_Params extends TokenTypes.TypeParams> = {
        name: string;
        colour: Tokens_Colour.Data<T_Params['colour']>;
        css: Tokens_CSS.Data<T_Params['style']>;
        icons: Tokens_Icons.Data<T_Params['iconNames']>;
        logos: Tokens_Logos.Data<T_Params['logoNames']>;
        photos: Tokens_Photos.Data<T_Params['photos']>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_Params['colour'], T_Params['theme']>;
        typography: Tokens_Typography.Data<string>;
    };
    interface InputParam<T_Params extends TokenTypes.TypeParams> extends Tokens_Photos.InputParam<T_Params['photos']> {
        name: string;
        colour: Tokens_Colour.InputParam<T_Params['colour']>;
        css?: undefined | Tokens_CSS.InputParam<T_Params['style']>;
        icons: Tokens_Icons.InputParam<T_Params['iconNames']>;
        logos: Tokens_Logos.InputParam<T_Params['logoNames']>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: readonly TokenTypes.Theme.GetBrightnessKeys<T_Params['theme']>[];
            contrast?: readonly TokenTypes.Theme.GetContrastKeys<T_Params['theme']>[];
            input?: Tokens_Themes.InputParam<T_Params['colour'], T_Params['theme']>;
        };
        typography?: undefined | Tokens_Typography.InputParam<string>;
    }
    type JsonReturn<T_Params extends TokenTypes.TypeParams> = {
        name: string;
        colour: Tokens_Colour.JsonReturn<T_Params['colour']>;
        css: Tokens_CSS.JsonReturn<T_Params['style']>;
        icons: Tokens_Icons.JsonReturn<T_Params['iconNames']>;
        logos: Tokens_Logos.JsonReturn<T_Params['logoNames']>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_Params['colour'], T_Params['theme']>;
        typography: Tokens_Typography.JsonReturn<string>;
    } & Tokens_Photos.JsonReturn<T_Params['photos']>;
    type ScssVars<T_Params extends TokenTypes.TypeParams> = Tokens_CSS.ScssVars<T_Params['style']> & Tokens_Spacing.ScssVars & Tokens_Photos.ScssVars<T_Params['photos']> & Tokens_Typography.ScssVars<string> & {
        name: string;
        colour: Tokens_Colour.ScssVars<T_Params['colour']>;
        icons: Tokens_Icons.ScssVars<T_Params['iconNames']>;
        logos: Tokens_Logos.ScssVars<T_Params['logoNames']>;
        themes: Tokens_Themes.ScssVars<T_Params['colour'], T_Params['theme']>;
        completeSystem: boolean;
    };
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens {
    /**
     * @since 0.1.0-alpha
     */
    export function sample(input?: Partial<Tokens_Internal.InputParam<TokenTypes.TypeParams>>, config?: Partial<Tokens.Config<TokenTypes.TypeParams['colour']['extraLevels']>>): Promise<Tokens<TokenTypes.TypeParams>>;
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha
     */
    export interface Config<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> {
        /**
         * Input path.
         */
        buildIconFont: false | RunnerOptions;
        extraColourLevels: readonly T_ExtraColourLevels[];
        iconFontName: string;
        /**
         * @since 0.1.0-beta.0.draft
         */
        scssTokenParserImportPath?: string;
        /**
         * @since 0.1.0-beta.0.draft
         */
        scssUtilitySassImportPath?: string;
        tokensAsDefault: boolean;
    }
    /**
     * @since 0.1.0-alpha
     */
    export type Data<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.Data<T_Params>;
    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.0-alpha
     */
    export type Instance<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens<T_Params>;
    /**
     * @since 0.1.0-alpha
     */
    export interface InputParam<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Internal.InputParam<T_Params> {
    }
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.JsonReturn<T_Params>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type ScssVars<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.ScssVars<T_Params>;
    export type DefaultIcon = Tokens_Icons.DefaultIcon;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type OptionalIcon = Tokens_Icons.OptionalIcon;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type RequiredIcon = Tokens_Icons.RequiredIcon;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export const isOptionalIcon: (name: string) => name is Tokens_Icons.OptionalIcon;
    /**
     * @since 0.1.0-beta.0.draft
    */
    export const isRequiredIcon: (name: string) => name is Tokens_Icons.RequiredIcon;
    type SampleColourName = "yardstick" | "yardstick-accent" | "base" | "blue" | "green" | "orange" | "pink" | "purple" | "red" | "turquoise" | "yellow";
    /**
     * @since 0.1.0-alpha
     */
    export const SampleColours: Readonly<{
        black: Tokens_Colour_ShadeMap.Shade.InputParam;
        white: Tokens_Colour_ShadeMap.Shade.InputParam;
    } & {
        [K in SampleColourName]: Tokens_Colour_ShadeMap.InputParam<{
            names: SampleColourName;
            extraLevels: never;
        }>;
    }>;
    /**
     * @since 0.1.0-alpha
     */
    export namespace Typography {
        /**
         * @since 0.1.0-alpha
         */
        type AllFonts<T_FontFamilySlug extends string = string> = {
            [F in Tokens_Typography.DefaultFontFamilies]?: undefined | Tokens_Typography.Font.Family<F>;
        } & {
            [K in T_FontFamilySlug]: Tokens_Typography.Font.Family<K>;
        };
        /**
         * @since 0.1.0-alpha
         */
        namespace Font {
            /**
             * @since 0.1.0-alpha
             */
            type AllLevels<T_FontFamilySlug extends string = string> = {
                [K in T_FontFamilySlug]: Omit<Tokens_Typography.Font.Family<K>, 'weights'> & {
                    weights: {
                        [K in WholeTokenLevel]: {
                            normal: Tokens_Typography.Font.File;
                            italic: Tokens_Typography.Font.File;
                        };
                    };
                };
            };
            /**
             * @since 0.1.0-alpha
             */
            type File = Tokens_Typography.Font.File;
            /**
             * @since 0.1.0-alpha
             */
            const allWeights: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
            /**
             * @since 0.1.0-alpha
             */
            const SystemMonospace: typeof Tokens_Typography.Font.SystemMonospace;
            /**
             * @since 0.1.0-alpha
             */
            const SystemUI: typeof Tokens_Typography.Font.SystemUI;
            /**
             * Helps to generate all the weights for a font family.
             *
             * @since 0.1.0-alpha
             */
            function familyGenerator<T_Slug extends string>(slug: T_Slug, name: string, { includeLocalSrc, ...familyOpts }?: Omit<Partial<Tokens_Typography.Font.Family<T_Slug>>, "path" | "style" | "weight"> & {
                includeLocalSrc?: boolean;
            }, weightOpts?: {
                [L in WholeTokenLevel]?: familyGenerator.FileOptions;
            }): Tokens_Typography.Font.Family<T_Slug> & {
                weights: Required<Tokens_Typography.Font.Family<T_Slug>['weights']>;
            };
            /**
             * Utilities for the {@link familyGenerator} function.
             *
             * @since 0.1.0-alpha
             */
            namespace familyGenerator {
                /**
                 * @since 0.1.0-alpha
                 */
                type FileOptions = Omit<Tokens_Typography.Font.File, "path" | "style" | "weight"> & {
                    /**
                     * @since 0.1.0-beta.0.draft
                     */
                    filename?: string;
                    /**
                     * Whether to include local sources in the files list.
                     *
                     * @default true
                     */
                    includeLocalSrc?: boolean;
                    pathWeight?: WholeTokenLevel | 'variable';
                    pathStyle?: "normal" | "italic";
                    /**
                     * File formats to include.
                     *
                     * @since 0.1.0-beta.0.draft
                     */
                    formats?: Partial<{
                        ttf?: boolean;
                        woff?: boolean;
                        woff2?: boolean;
                    }>;
                };
                /**
                 * @since 0.1.0-alpha
                 */
                function fileGenerator<T_Slug extends string>(subpath: T_Slug, name: string, weight: WholeTokenLevel | `${'000' | WholeTokenLevel} ${WholeTokenLevel | '1000'}`, style: "normal" | "italic", opts?: familyGenerator.FileOptions): Tokens_Typography.Font.File;
            }
            /**
             * Helps to generate all the weights for a font family.
             *
             * @since 0.1.0-beta.0.draft
             */
            function familyRenamer<T_Slug extends string>(slug: T_Slug, name: string, font: Tokens_Typography.Font.Family<string>): Tokens_Typography.Font.Family<T_Slug>;
            /**
             * @since 0.1.0-alpha
             */
            namespace Family {
                /**
                 * @since 0.1.0-alpha
                 */
                const dyslexic: Readonly<{
                    slug: 'dyslexic';
                    name: 'Open Dyslexic';
                    appendSystemFontsToFallbacks: true;
                    contentWidthScale: 1.2;
                    css: {
                        'letter-spacing': {
                            $: '-0.0875em';
                            italic: '0.0375em';
                            monospace: '-0.05em';
                        };
                        icon: {
                            inline: {
                                buffer: {
                                    start: 1.5;
                                };
                            };
                            size: {
                                $: 1.0625;
                                inline: 1.25;
                            };
                        };
                    };
                    fallbacks: [
                        'Verdana'
                    ];
                    fontOverrideOption: true;
                    lineHeightScale: 1.15;
                    sizeAdjust: '93%';
                    weights: Tokens_Typography.Font.Family<'dyslexic'>['weights'];
                }>;
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                const dyslexicMonospace: Readonly<Tokens_Typography.Font.Family<'dyslexic-monospace'>>;
                /**
                 * @since 0.1.0-alpha
                 */
                const hyperlegible: Readonly<Tokens_Typography.Font.Family<'hyperlegible'>>;
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                const hyperlegibleMonospace: Readonly<Tokens_Typography.Font.Family<'hyperlegible-monospace'>>;
                /**
                 * @since 0.1.0-alpha
                 */
                const monospace: Readonly<Tokens_Typography.Font.Family<'monospace'>>;
            }
        }
    }
    /**
     * @since 0.1.0-alpha
     */
    export namespace Colour {
        /**
         * @since 0.1.0-alpha
         */
        type AllColours<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> = Tokens_Colour.InputParam<T_ColourTypes>;
        /**
         * @since 0.1.0-alpha
         */
        type PartialMap<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> = Tokens_Colour_ShadeMap.InputParam<T_ColourTypes>;
        /**
         * @since 0.1.0-alpha.4
         */
        type CompleteMap<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> = Tokens_Colour_ShadeMap.Data<T_ColourTypes>;
    }
    /**
     * @since 0.1.0-alpha
     */
    export namespace Themes {
        /**
         * @since 0.1.0-alpha
         */
        const allHeadingLevels: typeof Tokens_Themes_Set.SingleMode.allHeadingLevels;
        /**
         * @since 0.1.0-alpha
         */
        interface AllVariations<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.AllVariations<T_Params['colour'], T_Params['theme']> {
        }
        /**
         * @since 0.1.0-beta.0.draft
         */
        type JsonReturn<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Themes.JsonReturn<T_Params['colour'], T_Params['theme']>;
        /**
         * @since 0.1.0-alpha
         */
        namespace Set {
            /**
             * @since 0.1.0-alpha
             */
            type InputParam<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Themes_Set.InputParam<T_Params['colour'], T_Params['theme']>;
        }
        /**
         * @since 0.1.0-alpha
         */
        namespace SingleMode {
            /**
             * @since 0.1.0-alpha
             */
            const colourOption: typeof Tokens_Themes_Set.SingleMode.Build.colourOption;
            /**
             * @since 0.1.0-beta.0.draft
             */
            namespace Levels {
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                interface Input<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> extends Tokens_Themes_Set.SingleMode.Levels.Input<T_ColourTypes> {
                }
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                interface Parsed<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> extends Tokens_Themes_Set.SingleMode.Levels.Parsed<T_ColourTypes> {
                }
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                interface Required<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> extends Tokens_Themes_Set.SingleMode.Levels.Required<T_ColourTypes> {
                }
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                const DEFAULT: typeof Tokens_Themes_Set.SingleMode.Levels.DEFAULT;
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                const parse: typeof Tokens_Themes_Set.SingleMode.Levels.parse;
            }
            /**
             * Common object shapes used to set multiple level types.
             *
             * @since 0.1.0-beta.0.draft
             */
            namespace Set {
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                interface AccentMin<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentMin<T_ColourTypes> {
                }
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                interface AccentGrey<T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams> extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentGrey<T_ColourTypes> {
                }
            }
            /**
             * @since 0.1.0-alpha
             */
            interface Data<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Params['colour']> = TokenTypes.Theme.ColourOption<T_Params['colour']>> extends Tokens_Themes_Set.SingleMode.Data<T_Params['colour'], T_Params['theme'], __T_ColourOption> {
            }
            /**
             * @since 0.1.0-beta.0.draft
             */
            namespace Data {
                /**
                 * @since 0.1.0-alpha
                 * @deprecated
                 */
                interface RecursivePartial<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Params['colour']> = TokenTypes.Theme.ColourOption<T_Params['colour']>> extends Tokens_Themes_Set.SingleMode.Data.Partial<T_Params['colour'], T_Params['theme'], __T_ColourOption> {
                }
            }
            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            interface InputParam<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.InputParam<T_Params['colour'], T_Params['theme']> {
            }
            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            interface JsonReturn<T_Params extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.JsonReturn<T_Params['colour'], T_Params['theme']> {
            }
        }
    }
    export {};
}
