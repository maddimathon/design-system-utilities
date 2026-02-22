/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { TokenLevels, TokenTypes } from './@types.js';
import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
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
/**
 * Internal utilities available for documentation but not meant to be public.
 *
 * @since 0.1.1-alpha.1.draft
 * @internal
 */
export declare class Internal {
}
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends AbstractTokens<{
    data: Tokens_Internal.Data<T_Types>;
    json: Tokens_Internal.JsonReturn<T_Types>;
    scss: Tokens_Internal.ScssVars<T_Types>;
}> {
    protected readonly clrNames: TokenTypes.Colour.GenericNameArray<T_Types['colour']['names']>;
    protected readonly extraColourLevels: readonly T_Types['colour']['extraLevels'][];
    protected readonly input: Omit<Tokens_Internal.InputParam<T_Types>, "colour" | "themes">;
    protected readonly config: Tokens_Internal.Config;
    get data(): {
        icons: Tokens_Icons.Data<T_Types["iconNames"]>;
        logos: Tokens_Logos.Data<T_Types["logoNames"]>;
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data<string, number>;
        colour: Tokens_Colour.Data<T_Types["colour"]>;
        themes: Tokens_Themes.Data<T_Types["colour"], T_Types["theme"]>;
        css: Tokens_CSS.Data;
    };
    readonly colour: Tokens_Colour<T_Types['colour']>;
    readonly css: Tokens_CSS;
    readonly icons: Tokens_Icons<T_Types['iconNames']>;
    readonly logos: Tokens_Logos<T_Types['logoNames']>;
    readonly spacing: Tokens_Spacing;
    readonly themes: Tokens_Themes<T_Types['colour'], T_Types['theme']>;
    readonly typography: Tokens_Typography<string>;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams>(input: Tokens_Internal.InputParam<T_Types>, config?: Partial<Tokens.Config<NoInfer<T_Types['colour']['extraLevels']>>>): Promise<Tokens<T_Types>>;
    protected constructor(clrNames: TokenTypes.Colour.GenericNameArray<T_Types['colour']['names']>, extraColourLevels: readonly T_Types['colour']['extraLevels'][], { colour, themes }: {
        colour: Tokens_Colour<T_Types['colour']>;
        themes: Tokens_Themes<NoInfer<T_Types['colour']>, T_Types['theme']>;
    }, input: Omit<Tokens_Internal.InputParam<T_Types>, "colour" | "themes">, config?: Tokens_Internal.Config);
    toJSON(): Tokens_Internal.JsonReturn<T_Types>;
    toScssVars(): Tokens_Internal.ScssVars<T_Types>;
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
    type Data<T_Types extends TokenTypes.TypeParams> = {
        colour: Tokens_Colour.Data<T_Types['colour']>;
        css: Tokens_CSS.Data;
        icons: Tokens_Icons.Data<T_Types['iconNames']>;
        logos: Tokens_Logos.Data<T_Types['logoNames']>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_Types['colour'], T_Types['theme']>;
        typography: Tokens_Typography.Data<string>;
    };
    interface InputParam<T_Types extends TokenTypes.TypeParams> {
        colour?: undefined | Tokens_Colour.InputParam<T_Types['colour']>;
        css?: undefined | Tokens_CSS.InputParam;
        icons?: undefined | Tokens_Icons.InputParam<T_Types['iconNames']>;
        logos?: undefined | Tokens_Logos.InputParam<T_Types['logoNames']>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: readonly TokenTypes.Theme.GetBrightnessKeys<T_Types['theme']>[];
            contrast?: readonly TokenTypes.Theme.GetContrastKeys<T_Types['theme']>[];
            input?: Tokens_Themes.InputParam<T_Types['colour'], T_Types['theme']>;
        };
        typography?: undefined | Tokens_Typography.InputParam<string>;
    }
    type JsonReturn<T_Types extends TokenTypes.TypeParams> = {
        colour: Tokens_Colour.JsonReturn<T_Types['colour']>;
        css: Tokens_CSS.JsonReturn;
        icons: Tokens_Icons.JsonReturn<T_Types['iconNames']>;
        logos: Tokens_Logos.JsonReturn<T_Types['logoNames']>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_Types['colour'], T_Types['theme']>;
        typography: Tokens_Typography.JsonReturn<string>;
    };
    type ScssVars<T_Types extends TokenTypes.TypeParams> = Tokens_CSS.ScssVars & Tokens_Spacing.ScssVars & Tokens_Typography.ScssVars<string> & {
        colour: Tokens_Colour.ScssVars<T_Types['colour']>;
        icons: Tokens_Icons.ScssVars<T_Types['iconNames']>;
        logos: Tokens_Logos.ScssVars<T_Types['logoNames']>;
        themes: Tokens_Themes.ScssVars<T_Types['colour'], T_Types['theme']>;
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
    function sample(): Promise<Tokens<TokenTypes.TypeParams<TokenTypes.Colour.TypeParams<string, "350" | "450" | "550" | "650">, TokenTypes.Theme.TypeParams<string, readonly ["light", "dark", ...TokenTypes.Theme.Mode.BrightnessOption[]], readonly ["low", "average", "high", ...TokenTypes.Theme.Mode.ContrastOption[]], string, string, string>, string, string>>>;
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha
     */
    interface Config<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    }
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.Data<T_Types>;
    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.0-alpha
     */
    type Instance<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens<T_Types>;
    /**
     * @since 0.1.0-alpha
     */
    interface InputParam<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Internal.InputParam<T_Types> {
    }
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.JsonReturn<T_Types>;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Internal.ScssVars<T_Types>;
    type DefaultIconNames = Tokens_Icons.DefaultIconNames;
    /**
     * @since 0.1.0-alpha
     */
    const SampleColours: {
        readonly yardstick: {
            readonly '100': {
                readonly l: 97;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '300': {
                readonly l: 78;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '700': {
                readonly l: 22;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 3;
                readonly c: 0;
                readonly h: 0;
            };
        };
        readonly 'yardstick-accent': {
            readonly '100': {
                readonly l: 97;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50.5;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 4;
                readonly c: 0;
                readonly h: 0;
            };
        };
        readonly white: {
            readonly l: 100;
            readonly c: 0;
            readonly h: 0;
        };
        readonly black: {
            readonly l: 0;
            readonly c: 0;
            readonly h: 0;
        };
        readonly base: {
            readonly '100': {
                readonly l: 97;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '300': {
                readonly l: 78;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '500': {
                readonly l: 50;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '700': {
                readonly l: 22;
                readonly c: 0;
                readonly h: 0;
            };
            readonly '900': {
                readonly l: 3;
                readonly c: 0;
                readonly h: 0;
            };
        };
        readonly red: {
            readonly '100': {
                readonly h: 5;
                readonly s: 100;
                readonly l: 98;
            };
            readonly '300': {
                readonly h: 4;
                readonly s: 100;
                readonly l: 79.5;
            };
            readonly '500': {
                readonly h: 3;
                readonly s: 68;
                readonly l: 53;
            };
            readonly '900': {
                readonly h: 7;
                readonly s: 90;
                readonly l: 4;
            };
        };
        readonly orange: {
            readonly '100': {
                readonly h: 35;
                readonly s: 100;
                readonly l: 96.5;
            };
            readonly '500': {
                readonly h: 22;
                readonly s: 75;
                readonly l: 43;
            };
            readonly '900': {
                readonly h: 19;
                readonly s: 100;
                readonly l: 3;
            };
        };
        readonly yellow: {
            readonly '100': {
                readonly h: 49;
                readonly s: 100;
                readonly l: 94;
            };
            readonly '300': {
                readonly h: 45;
                readonly s: 70;
                readonly l: 54;
            };
            readonly '500': {
                readonly h: 35;
                readonly s: 100;
                readonly l: 34;
            };
            readonly '900': {
                readonly h: 20;
                readonly s: 100;
                readonly l: 3;
            };
        };
        readonly green: {
            readonly '100': {
                readonly h: 112;
                readonly s: 53;
                readonly l: 97;
            };
            readonly '500': {
                readonly h: 125;
                readonly s: 50;
                readonly l: 35.5;
            };
            readonly '900': {
                readonly h: 112;
                readonly s: 81;
                readonly l: 2;
            };
        };
        readonly turquoise: {
            readonly '100': {
                readonly h: 157;
                readonly s: 68;
                readonly l: 96.5;
            };
            readonly '300': {
                readonly h: 160;
                readonly s: 45;
                readonly l: 60;
            };
            readonly '500': {
                readonly h: 168;
                readonly s: 92;
                readonly l: 27.5;
            };
            readonly '700': {
                readonly h: 162;
                readonly s: 69;
                readonly l: 16.5;
            };
            readonly '900': {
                readonly h: 153;
                readonly s: 100;
                readonly l: 2;
            };
        };
        readonly blue: {
            readonly '100': {
                readonly h: 245;
                readonly s: 100;
                readonly l: 98.5;
            };
            readonly '500': {
                readonly h: 230;
                readonly s: 63;
                readonly l: 60;
            };
            readonly '900': {
                readonly h: 244;
                readonly s: 41;
                readonly l: 4;
            };
        };
        readonly purple: {
            readonly '100': {
                readonly h: 270;
                readonly s: 100;
                readonly l: 98.5;
            };
            readonly '500': {
                readonly h: 280;
                readonly s: 60;
                readonly l: 56.5;
            };
            readonly '900': {
                readonly h: 285;
                readonly s: 75;
                readonly l: 4.5;
            };
        };
        readonly pink: {
            readonly '100': {
                readonly h: 325;
                readonly s: 100;
                readonly l: 98;
            };
            readonly '300': {
                readonly h: 322;
                readonly s: 100;
                readonly l: 79.5;
            };
            readonly '500': {
                readonly h: 320;
                readonly s: 58;
                readonly l: 51;
            };
            readonly '900': {
                readonly h: 322;
                readonly s: 85;
                readonly l: 5;
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    namespace Typography {
        /**
         * @since 0.1.0-alpha
         */
        type AllFonts<T_FontFamilySlug extends string = string> = {
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
                        [K in TokenLevels]: {
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
            const SystemMonospace: string[];
            /**
             * @since 0.1.0-alpha
             */
            const SystemUI: string[];
            /**
             * Helps to generate all the weights for a font family.
             *
             * @since 0.1.0-alpha
             */
            function familyGenerator<T_Slug extends string>(slug: T_Slug, name: string, familyOpts?: Omit<Partial<Tokens_Typography.Font.Family<T_Slug>>, "path" | "style" | "weight"> & {
                includeLocalSrc?: boolean;
            }, weightOpts?: {
                [L in TokenLevels]?: familyGenerator.FileOptions;
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
                     * Whether to include local sources in the files list.
                     *
                     * @default true
                     */
                    includeLocalSrc?: boolean;
                    pathWeight?: TokenLevels | 'variable';
                    pathStyle?: "normal" | "italic";
                };
                /**
                 * @since 0.1.0-alpha
                 */
                function fileGenerator<T_Slug extends string>(subpath: T_Slug, name: string, weight: TokenLevels | `${'000' | TokenLevels} ${TokenLevels | '1000'}`, style: "normal" | "italic", opts?: familyGenerator.FileOptions): Tokens_Typography.Font.File;
            }
            /**
             * @since 0.1.0-alpha
             */
            namespace Family {
                const dyslexic: {
                    slug: "dyslexic";
                    name: string;
                    appendSystemFontsToFallbacks: true;
                    contentWidthScale: number;
                    fallbacks: string[];
                    lineHeightScale: number;
                    sizeAdjust: string;
                    weights: {
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
                const hyperlegible: {
                    slug: "hyperlegible";
                    name: string;
                    appendSystemFontsToFallbacks: true;
                    contentWidthScale: number;
                    fallbacks: string[];
                    lineHeightScale: number;
                    sizeAdjust: string;
                    weights: {
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
                const monospace: {
                    slug: "monospace";
                    name: string;
                    appendSystemFontsToFallbacks: "monospace";
                    contentWidthScale: number;
                    fallbacks: string[];
                    sizeAdjust: string;
                    weights: {
                        100: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        200: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        300: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        400: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        500: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        600: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                        700: {
                            italic: Tokens_Typography.Font.File;
                            normal: Tokens_Typography.Font.File;
                        };
                    };
                };
            }
        }
    }
    /**
     * @since 0.1.0-alpha
     */
    namespace Colour {
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
    namespace Themes {
        /**
         * @since 0.1.0-alpha
         */
        const allHeadingLevels: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        /**
         * @since 0.1.0-alpha
         */
        interface AllVariations<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.AllVariations<T_Types['colour'], T_Types['theme']> {
        }
        /**
         * @since 0.1.1-alpha.1.draft
         */
        type JsonReturn<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Themes.JsonReturn<T_Types['colour'], T_Types['theme']>;
        /**
         * @since 0.1.0-alpha
         */
        namespace Set {
            /**
             * @since 0.1.0-alpha
             */
            type InputParam<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> = Tokens_Themes_Set.InputParam<T_Types['colour'], T_Types['theme']>;
        }
        /**
         * @since 0.1.0-alpha
         */
        namespace SingleMode {
            const colourOption: typeof Tokens_Themes_Set.SingleMode.Build.colourOption;
            /**
             * @since 0.1.1-alpha.1.draft
             */
            namespace Levels {
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface Input<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> extends Tokens_Themes_Set.SingleMode.Levels.Input<T_ExtraColourLevels> {
                }
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface Parsed<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> extends Tokens_Themes_Set.SingleMode.Levels.Parsed<T_ExtraColourLevels> {
                }
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface Required<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> extends Tokens_Themes_Set.SingleMode.Levels.Required<T_ExtraColourLevels> {
                }
                /**
                 * @since 0.1.1-alpha.0
                 * @since 0.1.1-alpha.1.draft — Moved to Tokens_Themes_Set.SingleMode.Levels and renamed.
                 */
                const DEFAULT: typeof Tokens_Themes_Set.SingleMode.Levels.DEFAULT;
                const parse: typeof Tokens_Themes_Set.SingleMode.Levels.parse;
            }
            /**
             * Common object shapes used to set multiple level types.
             *
             * @since 0.1.1-alpha.1.draft
             */
            namespace Set {
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface AccentMin<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentMin<T_ExtraColourLevels> {
                }
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface AccentGrey<T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional> extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentGrey<T_ExtraColourLevels> {
                }
            }
            /**
             * @since 0.1.0-alpha
             */
            interface Data<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types['colour']> = TokenTypes.Theme.ColourOption<T_Types['colour']>> extends Tokens_Themes_Set.SingleMode.Data<T_Types['colour'], T_Types['theme'], __T_ColourOption> {
            }
            /**
             * @since 0.1.1-alpha.1.draft
             */
            namespace Data {
                /**
                 * @since 0.1.0-alpha
                 * @deprecated
                 */
                interface RecursivePartial<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types['colour']> = TokenTypes.Theme.ColourOption<T_Types['colour']>> extends Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_Types['colour'], T_Types['theme'], __T_ColourOption> {
                }
            }
            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            interface InputParam<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.InputParam<T_Types['colour'], T_Types['theme']> {
            }
            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            interface JsonReturn<T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams> extends Tokens_Themes_Set.SingleMode.JsonReturn<T_Types['colour'], T_Types['theme']> {
            }
        }
    }
}
