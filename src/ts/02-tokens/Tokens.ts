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
    TokenLevels_Extended,
} from './@types.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import type { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens<
    T_ColourName extends string,
    T_ExtraColourLevels extends TokenLevels_Extended,
    T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
    T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
    T_ThemeName extends string,
> extends AbstractTokens<Tokens_Internal.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName
>> {

    public get data() {
        return {
            spacing: this.spacing.data,
            typography: this.typography.data,
            css: this.css.data,
            colour: this.colour.data,
            themes: this.themes.data,
        };
    }

    public readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    public readonly css: Tokens_CSS;
    public readonly spacing: Tokens_Spacing;
    public readonly themes: Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode[ number ],
        T_ThemeContrastMode[ number ],
        T_ThemeName
    >;
    public readonly typography: Tokens_Typography;

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[] = Tokens_Internal.Default_ThemeExtraContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
    >(
        input: Tokens_Internal.InputParam<
            Tokens_Internal.Default_ColourName | T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName
        >,
        config: Partial<Tokens.Config<T_ExtraColourLevels>> = {},
    ): Promise<Tokens<
        Tokens_Internal.Default_ColourName | T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
        T_ThemeName
    >> {

        const allClrNames = [
            'base',
            ...Object.keys( input.colour ?? {} ) as T_ColourName[],
        ] as const;

        const extraColourLevels = config.extraColourLevels ?? [];

        const brightnessModes: T_ThemeBrightnessMode = input.themes?.brightness?.length
            ? input.themes.brightness
            : [ 'light', 'dark' ] satisfies Tokens_Internal.Default_ThemeBrightnessMode as unknown as T_ThemeBrightnessMode;

        const contrastModes: ThemeMode_Contrast<T_ThemeContrastMode_Extra> = [
            "average",
            "high",
            ...(
                input.themes?.contrast?.filter( c => c !== 'average' && c !== 'high' )
                ?? ( [ 'low' ] satisfies Tokens_Internal.Default_ThemeExtraContrastMode as unknown )
            ) as T_ThemeContrastMode_Extra,
        ] as const;

        const themes = await Tokens_Themes.build<
            Tokens_Internal.Default_ColourName | T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>[ number ],
            T_ThemeName
        >(
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
            T_ThemeName
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
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName
        >,
        protected readonly input: Omit<Tokens_Internal.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName
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
        this.spacing = new Tokens_Spacing( this.input.spacing ?? {} );
        this.themes = themes;
        this.typography = new Tokens_Typography( this.input.typography ?? {} );
    }

    public toJSON(): Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName
    > {

        return {
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

            colour: this.colour.toScssVars(),
            themes: this.themes.toScssVars(),
        };
    }

    public override toScss(): string {

        const _vars = this.toScssVars();

        const vars: { [ K in keyof typeof _vars ]: string; } = {

            spacing_multiplier: JsonToScss.convert( _vars.spacing_multiplier ) || Tokens_Spacing.default.multiplier.toString(),
            margin: JsonToScss.convert( _vars.margin ) || '()',

            font: JsonToScss.convert( _vars.font ) || '()',

            line_height: JsonToScss.convert( _vars.line_height ) || '()',

            border: JsonToScss.convert( _vars.border ) || '()',
            transition: JsonToScss.convert( _vars.transition ) || '()',
            z_index: JsonToScss.convert( _vars.z_index ) || '()',

            colour: JsonToScss.convert( _vars.colour ) || '()',
            themes: JsonToScss.convert( _vars.themes ) || '()',
        };

        const scss: string[] = [
            '// this file is auto-generated by the design-system-utilities Tokens class',
        ];

        const defaultString = this.config.tokensAsDefault ? ' !default' : '';

        for ( const t_key in vars ) {
            const _key = t_key as keyof typeof vars;

            scss.push( `$${ _key }: ${ vars[ _key ] }${ defaultString };` );
        }

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

    export type Default_ExtraColourLevels = never;

    export type Default_ThemeBrightnessMode = [ 'light', 'dark' ];

    export type Default_ThemeContrastMode = [ 'average', 'high', 'low' ];

    export type Default_ThemeExtraContrastMode = [ 'low' ];

    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
    > = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.Data;
        spacing: Tokens_Spacing.Data;
        themes: Tokens_Themes.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName
        >;
        typography: Tokens_Typography.Data;
    };

    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
    > {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        css?: undefined | Tokens_CSS.InputParam;
        spacing?: undefined | Tokens_Spacing.InputParam;
        themes?: {
            brightness?: T_ThemeBrightnessMode,
            contrast?: T_ThemeContrastMode,
            input?: Tokens_Themes.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[ number ],
                T_ThemeContrastMode[ number ],
                T_ThemeName
            >,
        };
        typography?: undefined | Tokens_Typography.InputParam;
    }

    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne,
        T_ThemeName extends string,
    > = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraColourLevels>;
        css: Tokens_CSS.JsonReturn;
        spacing: Tokens_Spacing.JsonReturn;
        themes: Tokens_Themes.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            T_ThemeContrastMode[ number ],
            T_ThemeName
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
     * Configuration options for the {@link Tokens} class.
     * 
     * @since ___PKG_VERSION___
     */
    export interface Config<
        T_ExtraColourLevels extends TokenLevels_Extended = TokenLevels_Extended,
    > {
        extraColourLevels: readonly T_ExtraColourLevels[];
        tokensAsDefault: boolean;
    };

    export type Data<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
    > = Tokens_Internal.Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName
    >;

    export interface InputParam<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
    > extends Tokens_Internal.InputParam<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName
    > { }

    export type JsonReturn<
        T_ColourName extends string = Tokens_Internal.Default_ColourName,
        T_ExtraColourLevels extends TokenLevels_Extended = Tokens_Internal.Default_ExtraColourLevels,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ] = Tokens_Internal.Default_ThemeBrightnessMode,
        T_ThemeContrastMode extends ThemeMode_ContrastAtLeastOne = Tokens_Internal.Default_ThemeContrastMode,
        T_ThemeName extends string = Tokens_Themes.Default_ThemeName,
    > = Tokens_Internal.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName
    >;

    type SampleColourName =
        | "blue"
        | "green"
        | "orange"
        | "pink"
        | "purple"
        | "red"
        | "turquoise"
        | "yellow";

    export const SampleColours = {

        base: {
            // '100': 'F9F9F9',
            // '500': '777777',
            // '900': '070707',
            '100': { l: 98, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '900': { l: 2, c: 0, h: 0, },
        },

        red: {
            // '100': 'fef1f1',
            // '500': 'c35152',
            // '900': '0a0002', 
            '100': { l: 98, c: 50, h: 25, },
            '500': { l: 50, c: 75, h: 38, },
            '900': { l: 2, c: 9.125, h: 40, },
        },

        orange: {
            // '100': 'fcf3ed',
            // '500': 'b75d2a',
            // '900': '0a0100',
            '100': { l: 98, c: 35, h: 40, },
            '500': { l: 50, c: 65, h: 55, },
            '900': { l: 2, c: 4.75, h: 45, },
        },

        yellow: {
            '100': 'fdf8ed',
            '500': 'cc9200',
            '900': '0a0400',
            // '100': { l: 98, c: 15, h: 80, },
            // '500': { l: 50, c: 70, h: 80, },
            // '900': { l: 2, c: 5, h: 80, },
        },

        green: {
            '100': 'cef6d2',
            '500': '258d2e',
            '900': '021705',
            // '100': { l: 98, c: 0, h: 0, },
            // '500': { l: 50, c: 0, h: 0, },
            // '900': { l:  2, c: 0, h: 0, },
        },

        turquoise: {
            '100': 'c8f4de',
            '500': '068c6e',
            '900': '001712',
            // '100': { l: 98, c: 0, h: 0, },
            // '500': { l: 50, c: 0, h: 0, },
            // '900': { l:  2, c: 0, h: 0, },
        },

        blue: {
            '100': 'd5e7f7',
            '500': '487ba8',
            '900': '051322',
            // '100': { l: 98, c: 0, h: 0, },
            // '500': { l: 50, c: 0, h: 0, },
            // '900': { l:  2, c: 0, h: 0, },
        },

        purple: {
            '100': 'eedaf9',
            '500': '975eb1',
            '900': '1b0824',
            // '100': { l: 98, c: 0, h: 0, },
            // '500': { l: 50, c: 0, h: 0, },
            // '900': { l:  2, c: 0, h: 0, },
        },

        pink: {
            '100': 'fbdbef',
            '500': 'ae5691',
            '900': '25071b',
            // '100': { l: 98, c: 0, h: 0, },
            // '500': { l: 50, c: 0, h: 0, },
            // '900': { l:  2, c: 0, h: 0, },
        },
    } as const satisfies {
        [ K in SampleColourName | Tokens_Internal.Default_ColourName ]: Tokens_Colour_ShadeMap.InputParam<SampleColourName, never>
    };
}