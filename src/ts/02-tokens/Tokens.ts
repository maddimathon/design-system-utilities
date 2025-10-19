/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import type {
    ThemeMode_Contrast,
    ThemeMode_ContrastAtLeastOne,
    ThemeMode_ContrastExtraOptions,
    ColourLevels_Extended,
    TokenLevels,
} from './@types.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Icons } from './Tokens_Icons.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import type { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import { Tokens_Themes_Set_SingleMode } from './Themes/Themes_Set_SingleMode.js';
import type * as TokenTypes from './@types.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourLevels_Extended,
    T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
    T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
    T_ThemeName extends string,
    T_ExtraIconNames extends string,

    T_ThemeKeyword_Universal extends string,
    T_ThemeKeyword_Text extends string,
> extends AbstractTokens<Tokens_Internal.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,
    T_ExtraIconNames,

    T_ThemeKeyword_Universal,
    T_ThemeKeyword_Text
>> {

    public get data() {
        return {
            icons: this.icons.data,
            spacing: this.spacing.data,
            typography: this.typography.data,

            colour: this.colour.data,
            themes: this.themes.data,

            css: this.css.data,
        };
    }

    public readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    public readonly css: Tokens_CSS;
    public readonly icons: Tokens_Icons<T_ExtraIconNames>;
    public readonly spacing: Tokens_Spacing;
    public readonly themes: Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode[ number ],
        T_ThemeContrastMode[ number ],
        T_ThemeName,
        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    >;
    public readonly typography: Tokens_Typography;

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = never,

        T_ThemeKeyword_Universal extends string = never,
        T_ThemeKeyword_Text extends string = never,
    >(
        input: Tokens_Internal.InputParam<
            Tokens_Internal.Default_ColourName | T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName,
            T_ExtraIconNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >,
        config: Partial<Tokens.Config<NoInfer<T_ExtraColourLevels>>> = {},
    ): Promise<Tokens<
        Tokens_Internal.Default_ColourName | T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    >> {

        const allClrNames = [
            'base' as const,
            ...Object.keys( input.colour ?? {} ) as T_ColourName[],
        ];

        const extraColourLevels = config.extraColourLevels ?? [];

        const brightnessModes = input.themes?.brightness?.length
            ? input.themes.brightness
            : [ 'light', 'dark' ] satisfies Tokens_Internal.Default_ThemeBrightnessMode as unknown as T_ThemeBrightnessMode;

        const contrastModes = [
            'low',
            'average',
            'high',
            'max',
            ...(
                input.themes?.contrast?.filter( c => c !== 'low' && c !== 'average' && c !== 'high' && c !== 'max' )
                ?? []
            ) as unknown as T_ThemeContrastMode_Extra,
        ] as const;

        const themes = await Tokens_Themes.build(
            allClrNames,
            extraColourLevels,
            brightnessModes,
            [ ...contrastModes ],
            input.themes?.input ?? [],
        );

        const tokens = new Tokens<
            Tokens_Internal.Default_ColourName | T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName,
            T_ExtraIconNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >(
            allClrNames,
            extraColourLevels,
            themes,
            input,
            {
                ...config,
                extraColourLevels: undefined,
            },
        );

        await tokens.colour.addContrastTests();

        return tokens;
    }

    protected constructor (
        protected readonly clrNames: readonly T_ColourName[],
        protected readonly extraColourLevels: readonly T_ExtraColourLevels[],
        themes: Tokens_Themes<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName,
            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >,
        protected readonly input: Omit<Tokens_Internal.InputParam<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_ExtraIconNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >, "themes">,
        protected readonly config: Tokens_Internal.Config = {},
    ) {
        super();

        this.colour = new Tokens_Colour(
            this.clrNames,
            this.extraColourLevels,
            this.input.colour ?? {},
        );
        this.css = new Tokens_CSS( this.input.css ?? {} );
        this.icons = new Tokens_Icons( this.input.icons ?? {} );
        this.spacing = new Tokens_Spacing( this.input.spacing ?? {} );
        this.themes = themes;
        this.typography = new Tokens_Typography(
            this.spacing,
            this.input.typography ?? {},
        );
    }

    public toJSON(): Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    > {

        return {
            icons: this.icons.toJSON(),
            spacing: this.spacing.toJSON(),
            typography: this.typography.toJSON(),

            colour: this.colour.toJSON(),
            themes: this.themes.toJSON(),

            css: this.css.toJSON(),
        };
    }

    public toScssVars() {

        return {
            ...this.spacing.toScssVars(),
            ...this.typography.toScssVars(),
            ...this.css.toScssVars(),

            icons: this.icons.toScssVars(),

            colour: this.colour.toScssVars(),
            themes: this.themes.toScssVars(),
        };
    }

    public override toScss(): string {

        // const _vars = this.toScssVars();

        // const vars: { [ K in keyof typeof _vars ]: string; } = {

        //     spacing_multiplier: JsonToScss.convert( _vars.spacing_multiplier ) || Tokens_Spacing.default.multiplier.toString(),
        //     margin: JsonToScss.convert( _vars.margin ) || '()',

        //     font: JsonToScss.convert( _vars.font ) || '()',

        //     line_height: JsonToScss.convert( _vars.line_height ) || '()',

        //     border: JsonToScss.convert( _vars.border ) || '()',
        //     transition: JsonToScss.convert( _vars.transition ) || '()',
        //     z_index: JsonToScss.convert( _vars.z_index ) || '()',

        //     colour: JsonToScss.convert( _vars.colour ) || '()',
        //     themes: JsonToScss.convert( _vars.themes ) || '()',
        // };

        const tokensString = JsonToScss.convert( this.toScssVars() ) || '()';

        const varString = [
            '$designSystem: ',
            tokensString,
            ( this.config.tokensAsDefault ? ' !default' : '' ),
            ';',
        ].join( '' );

        const scss: string[] = [
            '// this file is auto-generated by the design-system-utilities Tokens class',
            varString,
        ];

        // const defaultString = this.config.tokensAsDefault ? ' !default' : '';

        // for ( const t_key in vars ) {
        //     const _key = t_key as keyof typeof vars;

        //     scss.push( `$${ _key }: ${ vars[ _key ] }${ defaultString };` );
        // }

        return scss.join( '\n\n' );
    }
}

/**
 * Internal utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 * @private
 */
export namespace Tokens_Internal {

    export interface Config extends Partial<Omit<Tokens.Config, "extraColourLevels">> {
        extraColourLevels?: undefined | never;
    }

    export type Default_ColourName = 'base';

    export type Default_ExtraColourLevels = ColourLevels_Extended;

    export type Default_ThemeBrightnessMode = [ 'light', 'dark', ...string[] ];

    export type Default_ThemeContrastMode = [ 'low', 'average', 'high', 'max' ];

    export type Default_ThemeExtraContrastMode = [];

    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
    > = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        icons: Tokens_Icons.Data<T_ExtraIconNames>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName,
            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >;
        typography: Tokens_Typography.Data;
    };

    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
    > {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        icons?: undefined | Tokens_Icons.InputParam<T_ExtraIconNames>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: T_ThemeBrightnessMode,
            contrast?: T_ThemeContrastMode,

            input?: Tokens_Themes.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[ number ],
                T_ThemeContrastMode[ number ],
                T_ThemeName,

                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text
            >,
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }

    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
    > = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        icons: Tokens_Icons.JsonReturn<T_ExtraIconNames>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName,
            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        >;
        typography: Tokens_Typography.JsonReturn;
    };
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens {

    /**
     * @since ___PKG_VERSION___
     */
    export async function sample() {

        return Tokens.build(
            {
                colour: {
                    // 'hue-50': {
                    //     500: { l: 50, c: 50, h: 50 },
                    // },
                    base: Tokens.SampleColours.base,
                    purple: Tokens.SampleColours.purple,
                    turquoise: Tokens.SampleColours.turquoise,
                    red: Tokens.SampleColours.red,
                    // orange: Tokens.SampleColours.orange,
                    // yellow: Tokens.SampleColours.yellow,
                    // green: Tokens.SampleColours.green,
                    // turquoise: Tokens.SampleColours.turquoise,
                    // blue: Tokens.SampleColours.blue,
                    // purple: Tokens.SampleColours.purple,
                    // pink: Tokens.SampleColours.pink,
                },
            },
            { tokensAsDefault: true, },
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export type ColourLevels = TokenTypes.ColourLevels;

    /**
     * @since ___PKG_VERSION___
     */
    export type ColourLevels_Extended = TokenTypes.ColourLevels_Extended;

    /**
     * Configuration options for the {@link Tokens} class.
     * 
     * @since ___PKG_VERSION___
     */
    export interface Config<
        T_ExtraColourLevels extends ColourLevels_Extended = ColourLevels_Extended,
    > {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
    > = Tokens_Internal.Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    >;

    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since ___PKG_VERSION___
     */
    export type Instance<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
    > = Tokens<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    >;

    /**
     * @since ___PKG_VERSION___
     */
    export interface InputParam<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
    > extends Tokens_Internal.InputParam<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    > { }

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
    > = Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text
    >;

    type SampleColourName =
        | "yardstick"
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
     * @since ___PKG_VERSION___
     */
    export const SampleColours = {

        yardstick: {
            '100': { l: 98, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '900': { l: 2, c: 0, h: 0, },
        },

        base: {
            // '100': 'F9F9F9',
            // '500': '777777',
            // '900': '070707',
            '100': { l: 98, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '900': { l: 2, c: 0, h: 0, },
        },

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
        [ K in SampleColourName | Tokens_Internal.Default_ColourName ]: Tokens_Colour_ShadeMap.InputParam<SampleColourName, never>
    };

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Typography {

        export type AllFonts<T_FontFamilySlug extends string = string> = {
            [ K in T_FontFamilySlug ]: Tokens_Typography.Font.Family<K>;
        };

        export namespace Font {

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

            export type File = Tokens_Typography.Font.File;


            /**
             * @since ___PKG_VERSION___
             */
            export const SystemUI = [
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen-Sans',
                'Ubuntu',
                'Cantarell',
                'Helvetica Neue',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
            ];
        }
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Colour {

        /**
         * @since ___PKG_VERSION___
         */
        export type AllColours<
            T_ColourName extends string = Tokens_Internal.Default_ColourName,
            T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        > = Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;

        /**
         * @since ___PKG_VERSION___
         */
        export type PartialMap<
            T_ColourName extends string,
            T_ExtraLevels extends ColourLevels_Extended,
        > = Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>;
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Themes {

        /**
         * @since ___PKG_VERSION___
         */
        export const allHeadingLevels = Tokens_Themes_Set_SingleMode.allHeadingLevels;

        /**
         * @since ___PKG_VERSION___
         */
        export interface AllVariations<
            T_ColourName extends string = Tokens_Internal.Default_ColourName,

            T_ThemeKeyword_Universal extends string = never,
            T_ThemeKeyword_Text extends string = never,
        > extends Tokens_Themes_Set_SingleMode.AllVariations<
            T_ColourName,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text
        > { }

        /**
         * @since ___PKG_VERSION___
         */
        export interface RequiredLevels<
            T_ExtraColourLevels extends ColourLevels_Extended,
        > extends Tokens_Themes_Set_SingleMode.RequiredLevels<T_ExtraColourLevels> { }


        /**
         * @since ___PKG_VERSION___
         */
        export namespace SingleMode {

            /**
             * @since ___PKG_VERSION___
             */
            export interface InputParam<
                T_ColourName extends string,
                T_ExtraColourLevels extends ColourLevels_Extended,

                T_ThemeKeyword_Universal extends string,
                T_ThemeKeyword_Text extends string,
            > extends Tokens_Themes_Set_SingleMode.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text
            > { }

            /**
             * @since ___PKG_VERSION___
             */
            export interface JsonReturn<
                T_ColourName extends string = Tokens_Internal.Default_ColourName,
                T_ExtraColourLevels extends ColourLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,

                T_ThemeKeyword_Universal extends string = never,
                T_ThemeKeyword_Text extends string = never,
            > extends Tokens_Themes_Set_SingleMode.JsonReturn<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text
            > { }
        }
    }
}