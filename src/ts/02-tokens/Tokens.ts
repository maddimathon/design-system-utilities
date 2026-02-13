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
import { slugify } from '@maddimathon/utility-typescript/functions';
import { JsonToScss } from '@maddimathon/utility-sass';

import type {
    ThemeMode_Contrast,
    ThemeMode_ContrastAtLeastOne,
    ThemeMode_ContrastExtraOptions,
    TokenLevels,
} from './@types.js';
import type * as TokenTypes from './@types.js';

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';

import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import type { Tokens_Themes_Set } from './Themes/Themes_Set.js';

import { objectGenerator } from '../01-utilities/objectGenerator.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Icons } from './Tokens_Icons.js';
import { Tokens_Logos } from './Tokens_Logos.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Themes_Set_SingleMode } from './Themes/Themes_Set_SingleMode.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import type { Tokens_Colour_ShadeMap_Shade } from './Colour/ShadeMap/ShadeMap_Shade.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
    T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
    T_ThemeName extends string,
    T_ExtraIconNames extends string,
    T_LogoNames extends string,

    T_ThemeKeyword_Universal extends string,
    T_ThemeKeyword_Text extends string,
    T_ThemeKeyword_Background extends string,
> extends AbstractTokens<Tokens_Internal.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,
    T_ExtraIconNames,
    T_LogoNames,

    T_ThemeKeyword_Universal,
    T_ThemeKeyword_Text,
    T_ThemeKeyword_Background
>> {

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

    public readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    public readonly css: Tokens_CSS;
    public readonly icons: Tokens_Icons<T_ExtraIconNames>;
    public readonly logos: Tokens_Logos<T_LogoNames>;
    public readonly spacing: Tokens_Spacing;
    public readonly themes: Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode[ number ],
        T_ThemeContrastMode[ number ],
        T_ThemeName,
        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >;
    public readonly typography: Tokens_Typography;

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = never,
        T_LogoNames extends string = never,

        T_ThemeKeyword_Universal extends string = never,
        T_ThemeKeyword_Text extends string = never,
        T_ThemeKeyword_Background extends string = never,
    >(
        input: Tokens_Internal.InputParam<
            Tokens_Internal.Default_ColourName | T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName,
            T_ExtraIconNames,
            T_LogoNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
        >,
        config: Partial<Tokens.Config<NoInfer<T_ExtraColourLevels>>> = {},
    ): Promise<Tokens<
        Tokens_Internal.Default_ColourName | T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
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
            T_LogoNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
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
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
        >,
        protected readonly input: Omit<Tokens_Internal.InputParam<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_ExtraIconNames,
            T_LogoNames,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
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
        this.icons = new Tokens_Icons<T_ExtraIconNames>( this.input.icons ?? {} );

        this.logos = new Tokens_Logos<T_LogoNames>(
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

    public toJSON(): Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    > {

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

    public toScssVars() {

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

    export type Default_ColourName = 'base';

    export type Default_ExtraColourLevels = ColourUtilities.Levels.Optional;

    export type Default_ThemeBrightnessMode = [ 'light', 'dark' ];

    export type Default_ThemeContrastMode = [ 'low', 'average', 'high', 'max' ];

    export type Default_ThemeExtraContrastMode = [];

    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,
        T_LogoNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
        T_ThemeKeyword_Background extends string,
    > = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        icons: Tokens_Icons.Data<T_ExtraIconNames>;
        logos: Tokens_Logos.Data<T_LogoNames>;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName,
            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
        >;
        typography: Tokens_Typography.Data;
    };

    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,
        T_LogoNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
        T_ThemeKeyword_Background extends string,
    > {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        icons?: undefined | Tokens_Icons.InputParam<T_ExtraIconNames>;
        logos?: undefined | Tokens_Logos.InputParam<T_LogoNames>;
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
                T_ThemeKeyword_Text,
                T_ThemeKeyword_Background
            >,
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }

    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
        T_ExtraIconNames extends string,
        T_LogoNames extends string,

        T_ThemeKeyword_Universal extends string,
        T_ThemeKeyword_Text extends string,
        T_ThemeKeyword_Background extends string,
    > = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        icons: Tokens_Icons.JsonReturn<T_ExtraIconNames>;
        logos: Tokens_Logos.JsonReturn<T_LogoNames>;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
        >;
        typography: Tokens_Typography.JsonReturn;
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
            },
            { tokensAsDefault: true, },
        );
    }

    /**
     * The shape of ANY {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.1-alpha.0
     */
    export type AnyInstance<
        T_ColourName extends string = any,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = any,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = any,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = any,
        T_ThemeName extends string = any,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
        T_ThemeKeyword_Background extends string = string,
    > = Instance<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >;

    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.Required} instead.
     */
    export type ColourLevels = ColourUtilities.Levels.Required;

    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.Optional} instead.
     */
    export type ColourLevels_Extended = ColourUtilities.Levels.Optional;

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
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
        T_ThemeKeyword_Background extends string = string,
    > = Tokens_Internal.Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >;

    /**
     * The shape of a default {@link Tokens} class instance, without any
     * required generics.
     *
     * @since 0.1.0-alpha
     */
    export type Instance<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
        T_ThemeKeyword_Background extends string = string,
    > = Tokens<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >;

    /**
     * @since 0.1.0-alpha
     */
    export interface InputParam<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
        T_ThemeKeyword_Background extends string = string,
    > extends Tokens_Internal.InputParam<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    > { }

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
        T_ExtraIconNames extends string = string,
        T_LogoNames extends string = string,

        T_ThemeKeyword_Universal extends string = string,
        T_ThemeKeyword_Text extends string = string,
        T_ThemeKeyword_Background extends string = string,
    > = Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ExtraIconNames,
        T_LogoNames,

        T_ThemeKeyword_Universal,
        T_ThemeKeyword_Text,
        T_ThemeKeyword_Background
    >;

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
        black: Tokens_Colour_ShadeMap_Shade.InputParam;
        white: Tokens_Colour_ShadeMap_Shade.InputParam;
    } & {
            [ K in SampleColourName | Tokens_Internal.Default_ColourName ]: Tokens_Colour_ShadeMap.InputParam<SampleColourName, never>
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
            T_ColourName extends string = Tokens_Internal.Default_ColourName,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,
        > = Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;

        /**
         * @since 0.1.0-alpha
         */
        export type PartialMap<
            T_ColourName extends string,
            T_ExtraLevels extends ColourUtilities.Levels.Optional,
        > = Tokens_Colour_ShadeMap.InputParam<T_ColourName, T_ExtraLevels>;

        /**
         * @since 0.1.0-alpha.4
         */
        export type CompleteMap<
            T_ColourName extends string,
            T_ExtraLevels extends ColourUtilities.Levels.Optional,
        > = Tokens_Colour_ShadeMap.Data<T_ColourName, T_ExtraLevels>;
    }

    /**
     * @since 0.1.0-alpha
     */
    export namespace Themes {

        /**
         * @since 0.1.0-alpha
         */
        export const allHeadingLevels = Tokens_Themes_Set_SingleMode.allHeadingLevels;

        /**
         * @since 0.1.0-alpha
         */
        export interface AllVariations<
            T_ColourName extends string = Tokens_Internal.Default_ColourName,

            T_ThemeKeyword_Universal extends string = never,
            T_ThemeKeyword_Text extends string = never,
            T_ThemeKeyword_Background extends string = never,
        > extends Tokens_Themes_Set_SingleMode.AllVariations<
            T_ColourName,

            T_ThemeKeyword_Universal,
            T_ThemeKeyword_Text,
            T_ThemeKeyword_Background
        > { }

        /**
         * @since 0.1.1-alpha.0
         */
        export const LEVELS_DEFAULT = Tokens_Themes_Set_SingleMode.Build.LEVELS_DEFAULT;

        /**
         * @since 0.1.0-alpha
         */
        export interface RequiredLevels<
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        > extends Tokens_Themes_Set_SingleMode.RequiredLevels<T_ExtraColourLevels> { }

        /**
         * @since 0.1.0-alpha
         */
        export namespace Set {

            /**
             * @since 0.1.0-alpha
             */
            export type InputParam<
                T_ColourName extends string = Tokens_Internal.Default_ColourName,
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,

                T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
                T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
                T_ThemeName extends string = Tokens_Themes.Default_ThemeName,

                T_ThemeKeyword_Universal extends string = never,
                T_ThemeKeyword_Text extends string = never,
                T_ThemeKeyword_Background extends string = never,
            > = Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode,
                T_ThemeContrastMode,
                T_ThemeName,

                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text,
                T_ThemeKeyword_Background
            >;
        }


        /**
         * @since 0.1.0-alpha
         */
        export namespace SingleMode {

            export const colourOption = Tokens_Themes_Set_SingleMode.Build.colourOption;

            /**
             * @since 0.1.0-alpha
             */
            export interface Data_RecursivePartial<
                T_ColourName extends string = Tokens_Internal.Default_ColourName,
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,

                T_ThemeKeyword_Universal extends string = never,
                T_ThemeKeyword_Text extends string = never,
                T_ThemeKeyword_Background extends string = never,

                __T_ColourOption extends TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels> = TokenTypes.ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
            > extends Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text,
                T_ThemeKeyword_Background,
                __T_ColourOption
            > { }

            /**
             * @since 0.1.0-alpha
             */
            export interface InputParam<
                T_ColourName extends string = Tokens_Internal.Default_ColourName,
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,

                T_ThemeKeyword_Universal extends string = never,
                T_ThemeKeyword_Text extends string = never,
                T_ThemeKeyword_Background extends string = never,
            > extends Tokens_Themes_Set_SingleMode.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text,
                T_ThemeKeyword_Background
            > { }

            /**
             * @since 0.1.0-alpha
             */
            export interface JsonReturn<
                T_ColourName extends string = Tokens_Internal.Default_ColourName,
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional = Tokens_Internal.Default_ExtraColourLevels,

                T_ThemeKeyword_Universal extends string = never,
                T_ThemeKeyword_Text extends string = never,
                T_ThemeKeyword_Background extends string = never,
            > extends Tokens_Themes_Set_SingleMode.JsonReturn<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeKeyword_Universal,
                T_ThemeKeyword_Text,
                T_ThemeKeyword_Background
            > { }
        }
    }
}