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
> extends AbstractTokens<Tokens.Data<
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
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly [ string, ...string[] ],
        T_ThemeContrastMode_Extra extends readonly ThemeMode_ContrastExtraOptions[],
        T_ThemeName extends string,
    >(
        clrNames: readonly T_ColourName[],
        extraColourLevels: readonly T_ExtraColourLevels[],
        input: Tokens.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName
        >,
        config: Partial<Tokens.Config> = {},
    ): Promise<Tokens<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
        T_ThemeName
    >> {

        const brightnessModes: T_ThemeBrightnessMode = input.themes?.brightness?.length
            ? input.themes.brightness
            : [ 'light', 'dark' ] as any as T_ThemeBrightnessMode;

        const contrastModes: ThemeMode_Contrast<T_ThemeContrastMode_Extra> = [
            "average",
            "high",
            ...(
                input.themes?.contrast?.filter( c => c !== 'average' && c !== 'high' )
                ?? ( [ 'low' ] as unknown )
            ) as T_ThemeContrastMode_Extra,
        ] as const;

        const themes = await Tokens_Themes.build<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[ number ],
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>[ number ],
            T_ThemeName
        >(
            clrNames,
            extraColourLevels,
            brightnessModes,
            [ ...contrastModes ],
            input.themes?.input ?? [],
        );

        const tokens = new Tokens<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            ThemeMode_Contrast<T_ThemeContrastMode_Extra>,
            T_ThemeName
        >(
            clrNames,
            extraColourLevels,
            themes,
            input,
            config,
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
        protected readonly input: Omit<Tokens.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName
        >, "themes">,
        protected readonly config: Partial<Tokens.Config> = {},
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

    public toJSON(): Tokens.JsonReturn<
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
    export interface Config {
        tokensAsDefault: boolean;
    };

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