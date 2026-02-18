/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Objects } from '@maddimathon/utility-typescript/types';
import { arrayUnique, slugify } from '@maddimathon/utility-typescript/functions';
import { JsonToScss } from '@maddimathon/utility-sass';

import type {
    TokenLevels,
    TokenTypes,
} from './@types.js';

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGenerator } from '../01-utilities/objectGenerator.js';

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
 * @since ___PKG_VERSION___
 * @internal
 */
export class Internal { }

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
> extends AbstractTokens<{
    data: Tokens_Internal.Data<T_Types>;
    json: Tokens_Internal.JsonReturn<T_Types>;
    scss: Tokens_Internal.ScssVars<T_Types>;
}> {

    public get data() {
        return {
            icons: this.icons.data,
            logos: this.logos.data,
            spacing: this.spacing.data,
            typography: this.typography.data,

            colour: this.colour.data,
            themes: this.themes.data,

            css: this.css.data,
        };
    }

    public readonly colour: Tokens_Colour<T_Types[ 'colour' ]>;
    public readonly css: Tokens_CSS;
    public readonly icons: Tokens_Icons<T_Types[ 'iconNames' ]>;
    public readonly logos: Tokens_Logos<T_Types[ 'logoNames' ]>;
    public readonly spacing: Tokens_Spacing;
    public readonly themes: Tokens_Themes<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
    public readonly typography: Tokens_Typography<string>;

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    >(
        input: Tokens_Internal.InputParam<T_Types>,
        config: Partial<Tokens.Config<NoInfer<T_Types[ 'colour' ][ 'extraLevels' ]>>> = {},
    ): Promise<Tokens<T_Types>> {

        const allClrNames = arrayUnique(
            [
                'base',
                ...Object.keys( input.colour ?? {} ).filter(
                    name => name !== 'black' && name !== 'white'
                ),
            ] satisfies TokenTypes.Colour.GenericNameArray<T_Types[ 'colour' ][ 'names' ]>
        ) as unknown as TokenTypes.Colour.GenericNameArray<T_Types[ 'colour' ][ 'names' ]>;

        const extraColourLevels = config.extraColourLevels ?? [];

        const brightnessModes = input.themes?.brightness?.length
            ? input.themes.brightness
            : [ 'light', 'dark' ] satisfies TokenTypes.Theme.Mode.Brightness<never[]> as T_Types[ 'theme' ][ 'brightness' ];

        const contrastModes = [
            'low',
            'average',
            'high',
            ...(
                input.themes?.contrast?.filter(
                    ( c: TokenTypes.Theme.Mode.ContrastOption ) => c !== 'low' && c !== 'average' && c !== 'high'
                )
                ?? []
            ) satisfies TokenTypes.Theme.GetContrastKeys<T_Types[ 'theme' ]>[],
        ] as TokenTypes.Theme.GetContrastKeys<T_Types[ 'theme' ]>[];

        return Promise.all( [

            Tokens_Colour.build<T_Types[ 'colour' ]>(
                allClrNames,
                extraColourLevels,
                input.colour ?? {},
            ),

            Tokens_Themes.build<T_Types[ 'colour' ], T_Types[ 'theme' ]>(
                allClrNames,
                extraColourLevels,
                brightnessModes,
                contrastModes,
                input.themes?.input ?? [],
            ),
        ] ).then(
            async ( [ colour, themes ] ) => {

                const tokens = new Tokens<T_Types>(
                    allClrNames,
                    extraColourLevels,
                    { colour, themes },
                    input,
                    {
                        ...config,
                        extraColourLevels: undefined,
                    },
                );

                return tokens.colour.addContrastTests().then( () => tokens );
            }
        );
    }

    protected constructor (
        protected readonly clrNames: TokenTypes.Colour.GenericNameArray<T_Types[ 'colour' ][ 'names' ]>,
        protected readonly extraColourLevels: readonly T_Types[ 'colour' ][ 'extraLevels' ][],
        { colour, themes }: {
            colour: Tokens_Colour<T_Types[ 'colour' ]>;
            themes: Tokens_Themes<NoInfer<T_Types[ 'colour' ]>, T_Types[ 'theme' ]>,
        },
        protected readonly input: Omit<Tokens_Internal.InputParam<T_Types>, "colour" | "themes">,
        protected readonly config: Tokens_Internal.Config = {},
    ) {
        super();;

        this.colour = colour;
        this.css = new Tokens_CSS( this.input.css ?? {} );
        this.icons = new Tokens_Icons<T_Types[ 'iconNames' ]>( this.input.icons ?? {} );

        this.logos = new Tokens_Logos<T_Types[ 'logoNames' ]>(
            // @ts-expect-error
            this.input.logos ?? {}
        );

        this.spacing = new Tokens_Spacing( this.input.spacing ?? {} );
        this.themes = themes;
        this.typography = new Tokens_Typography(
            this.spacing,
            this.input.typography ?? {},
        );
    }

    public toJSON(): Tokens_Internal.JsonReturn<T_Types> {

        return {
            icons: this.icons.toJSON(),
            logos: this.logos.toJSON(),
            spacing: this.spacing.toJSON(),
            typography: this.typography.toJSON(),

            colour: this.colour.toJSON(),
            themes: this.themes.toJSON(),

            css: this.css.toJSON(),
        };
    }

    public toScssVars(): Tokens_Internal.ScssVars<T_Types> {

        return {
            ...this.spacing.toScssVars(),
            ...this.typography.toScssVars(),
            ...this.css.toScssVars(),

            icons: this.icons.toScssVars(),
            logos: this.logos.toScssVars(),

            colour: this.colour.toScssVars(),
            themes: this.themes.toScssVars(),
        };
    }

    public override toScss(): string {

        const tokensString = JsonToScss.convert( this.toScssVars() ) || '()';

        const varContent: string[] = this.config.tokensAsDefault
            ? [
                '@use "sass:map";',
                '',
                '$designSystem: () !default;',
                `$designSystem: map.deep-merge( ${ tokensString }, $designSystem );`,
            ]
            : [
                `$designSystem: ${ tokensString };`
            ];

        const scss: string[] = [
            '// this file is auto-generated by the design-system-utilities Tokens class',
            varContent.join( '\n' ),
        ];

        return scss.join( '\n\n' );
    }
}

/**
 * Internal utilities for the {@link Tokens} class.
 * 
 * @since 0.1.0-alpha
 * @internal
 * @private
 */
export namespace Tokens_Internal {

    export interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }

    export type Data<T_Types extends TokenTypes.TypeParams> = {
        colour: Tokens_Colour.Data<T_Types[ 'colour' ]>;
        css: Tokens_CSS.Data;
        icons: Tokens_Icons.Data<T_Types[ 'iconNames' ]>;
        logos: Tokens_Logos.Data<T_Types[ 'logoNames' ]>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
        typography: Tokens_Typography.Data<string>;
    };

    export interface InputParam<T_Types extends TokenTypes.TypeParams> {
        colour?: undefined | Tokens_Colour.InputParam<T_Types[ 'colour' ]>;
        css?: undefined | Tokens_CSS.InputParam;
        icons?: undefined | Tokens_Icons.InputParam<T_Types[ 'iconNames' ]>;
        logos?: undefined | Tokens_Logos.InputParam<T_Types[ 'logoNames' ]>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: readonly TokenTypes.Theme.GetBrightnessKeys<T_Types[ 'theme' ]>[],
            contrast?: readonly TokenTypes.Theme.GetContrastKeys<T_Types[ 'theme' ]>[],

            input?: Tokens_Themes.InputParam<T_Types[ 'colour' ], T_Types[ 'theme' ]>,
        };
        typography?: undefined | Tokens_Typography.InputParam<string>;
    }

    export type JsonReturn<T_Types extends TokenTypes.TypeParams> = {
        colour: Tokens_Colour.JsonReturn<T_Types[ 'colour' ]>;
        css: Tokens_CSS.JsonReturn;
        icons: Tokens_Icons.JsonReturn<T_Types[ 'iconNames' ]>;
        logos: Tokens_Logos.JsonReturn<T_Types[ 'logoNames' ]>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
        typography: Tokens_Typography.JsonReturn<string>;
    };

    export type ScssVars<T_Types extends TokenTypes.TypeParams> =
        Tokens_CSS.ScssVars
        & Tokens_Spacing.ScssVars
        & Tokens_Typography.ScssVars<string>
        & {
            colour: Tokens_Colour.ScssVars<T_Types[ 'colour' ]>;
            icons: Tokens_Icons.ScssVars<T_Types[ 'iconNames' ]>;
            logos: Tokens_Logos.ScssVars<T_Types[ 'logoNames' ]>;
            themes: Tokens_Themes.ScssVars<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
        };
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens {

    /**
     * @since 0.1.0-alpha
     */
    export async function sample() {

        return Tokens.build(
            {
                colour: {
                    base: Tokens.SampleColours.base,
                    purple: Tokens.SampleColours.purple,
                    turquoise: Tokens.SampleColours.turquoise,
                    red: Tokens.SampleColours.red,
                    // yardstick: Tokens.SampleColours.yardstick,
                    // 'yardstick-accent': Tokens.SampleColours[ 'yardstick-accent' ],
                },
                themes: {
                    contrast: [ 'max' ],
                },
            },
            { tokensAsDefault: true, },
        );
    }

    /**
     * Configuration options for the {@link Tokens} class.
     * 
     * @since 0.1.0-alpha
     */
    export interface Config<
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
    > {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    > = Tokens_Internal.Data<T_Types>;

    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.0-alpha
     */
    export type Instance<
        T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    > = Tokens<T_Types>;

    /**
     * @since 0.1.0-alpha
     */
    export interface InputParam<
        T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    > extends Tokens_Internal.InputParam<T_Types> { }

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    > = Tokens_Internal.JsonReturn<T_Types>;

    export type DefaultIconNames = Tokens_Icons.DefaultIconNames;

    type SampleColourName =
        | "yardstick"
        | "yardstick-accent"
        | "base"
        | "blue"
        | "green"
        | "orange"
        | "pink"
        | "purple"
        | "red"
        | "turquoise"
        | "yellow";

    /**
     * @since 0.1.0-alpha
     */
    export const SampleColours = {

        yardstick: Tokens_Colour_ShadeMap.Yardsticks.base,
        'yardstick-accent': Tokens_Colour_ShadeMap.Yardsticks.accent,

        white: Tokens_Colour_ShadeMap.Yardsticks.white,
        black: Tokens_Colour_ShadeMap.Yardsticks.black,

        base: Tokens_Colour_ShadeMap.Yardsticks.base,

        red: {
            '100': { h: 5, s: 100, l: 98, },
            '300': { h: 4, s: 100, l: 79.5, },
            '500': { h: 3, s: 68, l: 53, },
            '900': { h: 7, s: 90, l: 4, },
        },

        orange: {
            '100': { h: 35, s: 100, l: 96.5, },
            '500': { h: 22, s: 75, l: 43, },
            '900': { h: 19, s: 100, l: 3, },
        },

        yellow: {
            '100': { h: 49, s: 100, l: 94, },
            '300': { h: 45, s: 70, l: 54, },
            '500': { h: 35, s: 100, l: 34, },
            '900': { h: 20, s: 100, l: 3, },
        },

        green: {
            '100': { h: 112, s: 53, l: 97, },
            '500': { h: 125, s: 50, l: 35.5, },
            '900': { h: 112, s: 81, l: 2, },
        },

        turquoise: {
            '100': { h: 157, s: 68, l: 96.5, },
            '300': { h: 160, s: 45, l: 60, },
            '500': { h: 168, s: 92, l: 27.5, },
            '700': { h: 162, s: 69, l: 16.5, },
            '900': { h: 153, s: 100, l: 2, },
        },

        blue: {
            '100': { h: 245, s: 100, l: 98.5, },
            '500': { h: 230, s: 63, l: 60, },
            '900': { h: 244, s: 41, l: 4, },
        },

        purple: {
            '100': { h: 270, s: 100, l: 98.5, },
            '500': { h: 280, s: 60, l: 56.5, },
            '900': { h: 285, s: 75, l: 4.5, },
        },

        pink: {
            '100': { h: 325, s: 100, l: 98, },
            '300': { h: 322, s: 100, l: 79.5, },
            '500': { h: 320, s: 58, l: 51, },
            '900': { h: 322, s: 85, l: 5, },
        },
    } as const satisfies {
        black: Tokens_Colour_ShadeMap.Shade.InputParam;
        white: Tokens_Colour_ShadeMap.Shade.InputParam;
    } & {
            [ K in SampleColourName ]: Tokens_Colour_ShadeMap.InputParam<{
                names: SampleColourName;
                extraLevels: never;
            }>
        };

    /**
     * @since 0.1.0-alpha
     */
    export namespace Typography {

        /**
         * @since 0.1.0-alpha
         */
        export type AllFonts<T_FontFamilySlug extends string = string> = {
            [ K in T_FontFamilySlug ]: Tokens_Typography.Font.Family<K>;
        };

        /**
         * @since 0.1.0-alpha
         */
        export namespace Font {

            /**
             * @since 0.1.0-alpha
             */
            export type AllLevels<T_FontFamilySlug extends string = string> = {
                [ K in T_FontFamilySlug ]: Omit<Tokens_Typography.Font.Family<K>, 'weights'> & {
                    weights: {
                        [ K in TokenLevels ]: {
                            normal: Tokens_Typography.Font.File;
                            italic: Tokens_Typography.Font.File;
                        };
                    };
                };
            };

            /**
             * @since 0.1.0-alpha
             */
            export type File = Tokens_Typography.Font.File;


            /**
             * @since 0.1.0-alpha
             */
            export const allWeights = [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
            ] as const;

            /**
             * @since 0.1.0-alpha
             */
            export const SystemMonospace = Tokens_Typography.Font.SystemMonospace;

            /**
             * @since 0.1.0-alpha
             */
            export const SystemUI = Tokens_Typography.Font.SystemUI;

            /**
             * Helps to generate all the weights for a font family.
             * 
             * @since 0.1.0-alpha
             */
            export function familyGenerator<T_Slug extends string>(
                slug: T_Slug,
                name: string,
                familyOpts: Omit<Partial<Tokens_Typography.Font.Family<T_Slug>>, "path" | "style" | "weight"> & {
                    includeLocalSrc?: boolean;
                } = {},
                weightOpts: {
                    [ L in TokenLevels ]?: familyGenerator.FileOptions;
                } = {},
            ): Tokens_Typography.Font.Family<T_Slug> & {
                weights: Required<Tokens_Typography.Font.Family<T_Slug>[ 'weights' ]>;
            } {

                return {
                    slug,
                    name,

                    fallbacks: familyOpts.fallbacks ?? [],

                    ...familyOpts,

                    weights: objectGenerator(
                        allWeights,
                        ( weight ) => objectGenerator(
                            [ "normal", "italic" ] as const,
                            ( style ) => familyGenerator.fileGenerator(
                                slug,
                                name,
                                weight,
                                style,
                                {
                                    ...familyOpts,
                                    ...weightOpts?.[ weight ],
                                },
                            ),
                        )
                    ),
                };
            }

            /**
             * Utilities for the {@link familyGenerator} function.
             * 
             * @since 0.1.0-alpha
             */
            export namespace familyGenerator {

                /**
                 * @since 0.1.0-alpha
                 */
                export type FileOptions = Omit<Tokens_Typography.Font.File, "path" | "style" | "weight"> & {

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
                export function fileGenerator<T_Slug extends string>(
                    subpath: T_Slug,
                    name: string,
                    weight: TokenLevels | `${ '000' | TokenLevels } ${ TokenLevels | '1000' }`,
                    style: "normal" | "italic",
                    opts: familyGenerator.FileOptions = {},
                ): Tokens_Typography.Font.File {

                    const _slug = slugify( name );

                    let _filename = `${ _slug }-${ opts.pathWeight ?? weight }`;

                    switch ( opts.pathStyle ?? style ) {
                        case 'italic':
                            _filename = _filename + '-italic';
                            break;
                    }

                    const paths: {
                        local?: undefined | string[];
                    } = {};

                    if ( opts.includeLocalSrc ) {

                        let weightSuffix = '';
                        let styleSuffix = '';

                        switch ( opts.pathWeight ?? weight ) {

                            case '100':
                                weightSuffix = ' Thin';
                                break;

                            case '200':
                                weightSuffix = ' ExtraLight';
                                break;

                            case '300':
                                weightSuffix = ' Light';
                                break;

                            case '500':
                                weightSuffix = ' Medium';
                                break;

                            case '600':
                                weightSuffix = ' SemiBold';
                                break;

                            case '700':
                                weightSuffix = ' Bold';
                                break;

                            case '800':
                                weightSuffix = ' ExtraBold';
                                break;

                            case '900':
                                weightSuffix = ' Black';
                                break;
                        }

                        switch ( opts.pathStyle ?? style ) {

                            case 'italic':
                                styleSuffix = ' Italic';
                                break;
                        }

                        paths.local = [

                            name + weightSuffix + styleSuffix,

                            (
                                ( weightSuffix || styleSuffix )
                                    ? `${ name }-${ weightSuffix }${ styleSuffix }`.replace( /\s+/g, '' )
                                    : name.replace( /\s+/g, '' )
                            ),
                        ];
                    }

                    return {

                        weight: weight,
                        style: style,

                        display: opts.display,
                        lineGapOverride: opts.lineGapOverride,
                        sizeAdjust: opts.sizeAdjust,
                        unicodeRange: opts.unicodeRange,

                        path: {
                            ...paths,

                            woff2: `${ subpath }/woff2/${ _filename }.woff2`,
                            woff: `${ subpath }/woff/${ _filename }.woff`,
                            ttf: `${ subpath }/ttf/${ _filename }.ttf`,
                        },
                    } satisfies Objects.Classify<Tokens_Typography.Font.File>;
                }
            }

            /**
             * @since 0.1.0-alpha
             */
            export namespace Family {

                export const dyslexic = {
                    slug: 'dyslexic',
                    name: 'Open Dyslexic',

                    appendSystemFontsToFallbacks: true,
                    contentWidthScale: 1.2,
                    fallbacks: [
                        'Verdana',
                    ],
                    lineHeightScale: 1.2,
                    sizeAdjust: '95%',

                    weights: objectGenerator(
                        [ '400', '700' ] as const,
                        ( weight ) => objectGenerator(
                            [ "normal", "italic" ] as const,
                            ( style ) => familyGenerator.fileGenerator(
                                'dyslexic',
                                'Open Dyslexic',
                                weight == '400' ? '100 400' : '500 900',
                                style,
                                {
                                    pathWeight: weight,
                                },
                            ),
                        )
                    ),
                } satisfies Tokens_Typography.Font.Family<'dyslexic'>;

                export const hyperlegible = {
                    slug: 'hyperlegible',
                    name: 'Atkinson Hyperlegible',

                    appendSystemFontsToFallbacks: true,
                    contentWidthScale: 1.035,
                    fallbacks: [
                        'Verdana',
                    ],
                    lineHeightScale: 1.035,
                    sizeAdjust: '106.5%',

                    weights: objectGenerator(
                        [ '400', '700' ] as const,
                        ( weight ) => objectGenerator(
                            [ "normal", "italic" ] as const,
                            ( style ) => familyGenerator.fileGenerator(
                                'hyperlegible',
                                'Atkinson Hyperlegible',
                                weight === '400' ? '100 400' : '500 900',
                                style,
                                {
                                    pathWeight: weight,
                                },
                            ),
                        )
                    ),
                } satisfies Tokens_Typography.Font.Family<'hyperlegible'>;

                export const monospace = {
                    slug: 'monospace',
                    name: 'IBM Plex Mono',

                    appendSystemFontsToFallbacks: 'monospace',
                    contentWidthScale: 1.125,
                    fallbacks: [
                        'Courier New',
                    ],
                    sizeAdjust: '96.5%',

                    weights: objectGenerator(
                        allWeights.filter( w => w !== '800' && w !== '900' ),
                        ( weight ) => objectGenerator(
                            [ "normal", "italic" ] as const,
                            ( style ) => familyGenerator.fileGenerator(
                                'monospace',
                                'IBM Plex Mono',
                                weight === '700' ? '700 900' : weight,
                                style,
                                {
                                    pathWeight: weight,
                                },
                            ),
                        )
                    ),
                } satisfies Tokens_Typography.Font.Family<'monospace'>;
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
        export type AllColours<
            T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
        > = Tokens_Colour.InputParam<T_ColourTypes>;

        /**
         * @since 0.1.0-alpha
         */
        export type PartialMap<
            T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
        > = Tokens_Colour_ShadeMap.InputParam<T_ColourTypes>;

        /**
         * @since 0.1.0-alpha.4
         */
        export type CompleteMap<
            T_ColourTypes extends TokenTypes.Colour.TypeParams = TokenTypes.Colour.TypeParams,
        > = Tokens_Colour_ShadeMap.Data<T_ColourTypes>;
    }

    /**
     * @since 0.1.0-alpha
     */
    export namespace Themes {

        /**
         * @since 0.1.0-alpha
         */
        export const allHeadingLevels = Tokens_Themes_Set.SingleMode.allHeadingLevels;

        /**
         * @since 0.1.0-alpha
         */
        export interface AllVariations<
            T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
        > extends Tokens_Themes_Set.SingleMode.AllVariations<T_Types[ 'colour' ], T_Types[ 'theme' ]> { }

        /**
         * @since ___PKG_VERSION___
         */
        export type JsonReturn<
            T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
        > = Tokens_Themes.JsonReturn<T_Types[ 'colour' ], T_Types[ 'theme' ]>;

        /**
         * @since 0.1.0-alpha
         */
        export namespace Set {

            /**
             * @since 0.1.0-alpha
             */
            export type InputParam<
                T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
            > = Tokens_Themes_Set.InputParam<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
        }


        /**
         * @since 0.1.0-alpha
         */
        export namespace SingleMode {

            export const colourOption = Tokens_Themes_Set.SingleMode.Build.colourOption;

            /**
             * @since ___PKG_VERSION___
             */
            export namespace Levels {

                /**
                 * @since ___PKG_VERSION___
                 */
                export interface Input<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
                > extends Tokens_Themes_Set.SingleMode.Levels.Input<T_ExtraColourLevels> { }

                /**
                 * @since ___PKG_VERSION___
                 */
                export interface Parsed<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
                > extends Tokens_Themes_Set.SingleMode.Levels.Parsed<T_ExtraColourLevels> { }

                /**
                 * @since ___PKG_VERSION___
                 */
                export interface Required<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
                > extends Tokens_Themes_Set.SingleMode.Levels.Required<T_ExtraColourLevels> { }

                /**
                 * @since 0.1.1-alpha.0
                 * @since ___PKG_VERSION___ — Moved to Tokens_Themes_Set.SingleMode.Levels and renamed.
                 */
                export const DEFAULT = Tokens_Themes_Set.SingleMode.Levels.DEFAULT;

                export const parse = Tokens_Themes_Set.SingleMode.Levels.parse;
            }

            /**
             * Common object shapes used to set multiple level types.
             * 
             * @since ___PKG_VERSION___
             */
            export namespace Set {

                /**
                 * @since ___PKG_VERSION___
                 */
                export interface AccentMin<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
                > extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentMin<T_ExtraColourLevels> { }

                /**
                 * @since ___PKG_VERSION___
                 */
                export interface AccentGrey<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional = ColourUtilities.Levels.Optional,
                > extends Tokens_Themes_Set.SingleMode.Levels.Set.AccentGrey<T_ExtraColourLevels> { }
            }

            /**
             * @since 0.1.0-alpha
             */
            export interface Data<
                T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
                __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
            > extends Tokens_Themes_Set.SingleMode.Data<
                T_Types[ 'colour' ],
                T_Types[ 'theme' ],
                __T_ColourOption
            > { }

            /**
             * @since ___PKG_VERSION___
             */
            export namespace Data {
                /**
                 * @since 0.1.0-alpha
                 * @deprecated
                 */
                export interface RecursivePartial<
                    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
                    __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
                > extends Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_Types[ 'colour' ], T_Types[ 'theme' ], __T_ColourOption> { }
            }

            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            export interface InputParam<
                T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
            > extends Tokens_Themes_Set.SingleMode.InputParam<T_Types[ 'colour' ], T_Types[ 'theme' ]> { }

            /**
             * @since 0.1.0-alpha
             * @deprecated
             */
            export interface JsonReturn<
                T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
            > extends Tokens_Themes_Set.SingleMode.JsonReturn<T_Types[ 'colour' ], T_Types[ 'theme' ]> { }
        }
    }
}