/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import type {
    CssSystemColor,
    ThemeColourOption,
    ThemeMode_ContrastOption,
    TokenLevels_Extended,
} from '../@types.js';

import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Themes_Set<
    T_ColourName extends string,
    T_ExtraColourLevels extends TokenLevels_Extended,
    T_ThemeBrightnessMode extends readonly string[],
    T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
    T_ThemeName extends string,
    T_ColourOptions extends string = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
> extends AbstractTokens<Tokens_Themes_Set.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,
    T_ColourOptions
>> {

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,
        T_ColourOptions extends string = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    >(
        name: T_ThemeName,
        clrNames: readonly T_ColourName[],
        extraColourLevels: readonly T_ExtraColourLevels[],
        brightnessModes: readonly T_ThemeBrightnessMode[],
        contrastModes: readonly T_ThemeContrastMode[],
        input: Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            readonly T_ThemeBrightnessMode[],
            readonly T_ThemeContrastMode[],
            T_ThemeName,
            T_ColourOptions
        >,
    ): Promise<Tokens_Themes_Set<
        T_ColourName,
        T_ExtraColourLevels,
        readonly T_ThemeBrightnessMode[],
        readonly T_ThemeContrastMode[],
        T_ThemeName,
        T_ColourOptions
    >> {

        const forcedColours: Tokens_Themes_Set_SingleMode<CssSystemColor> =
            await Tokens_Themes_Set_SingleMode.build<CssSystemColor>(
                'forcedColors',
                input.forcedColours ?? {},
            );

        const getDefaultTheme = ( str: string ): ThemeMode_ContrastOption => (
            ( [
                'average',
                // 'forcedColors',
                'high',
                'low',
            ] satisfies ThemeMode_ContrastOption[] ).includes( str as ThemeMode_ContrastOption )
                ? str as ThemeMode_ContrastOption
                : 'average'
        );

        const modes: {
            [ B in T_ThemeBrightnessMode ]: {
                [ C in T_ThemeContrastMode ]: Tokens_Themes_Set_SingleMode<T_ColourOptions>;
            };
        } = await objectGeneratorAsync(
            brightnessModes,
            async ( brightness: T_ThemeBrightnessMode[ number ] ) =>
                objectGeneratorAsync(
                    contrastModes,
                    async ( contrast: T_ThemeContrastMode[ number ] ) =>
                        Tokens_Themes_Set_SingleMode.build<T_ColourOptions>(
                            getDefaultTheme( contrast ),
                            input[ brightness ]?.[ contrast ] ?? {},
                        ),
                )
        );

        return new Tokens_Themes_Set(
            name,
            clrNames,
            extraColourLevels,
            brightnessModes,
            contrastModes,
            forcedColours,
            modes
        );
    }

    public get data(): Tokens_Themes_Set.Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ColourOptions
    > {
        return {
            name: this.name,
            forcedColours: this.forcedColours.data,

            // ...this.modes,
            ...objectMap(
                this.modes,
                ( { key: brightnessMode } ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( { value } ) => value.data
                )
            ),
        };
    }


    protected constructor (
        /** Name for this shade set. */
        protected readonly name: T_ThemeName,
        protected readonly clrNames: readonly T_ColourName[],
        protected readonly extraColourLevels: readonly T_ExtraColourLevels[],
        protected readonly brightnessModes: readonly T_ThemeBrightnessMode[ number ][],
        protected readonly contrastModes: readonly T_ThemeContrastMode[ number ][],

        protected readonly forcedColours: Tokens_Themes_Set_SingleMode<CssSystemColor>,

        protected readonly modes: {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode<T_ColourOptions>;
            };
        },
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_ColourOptions
    > {
        return this.data;
    }

    public toScssVars(): {

        [ B in T_ThemeBrightnessMode[ number ] ]: {

            [ C in T_ThemeContrastMode[ number ] ]: ReturnType<
                Tokens_Themes_Set_SingleMode<T_ColourOptions>[ 'toScssVars' ]
            >;
        };
    } {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(
                this.modes,
                ( { key: brightnessMode } ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( { value } ) => value.toScssVars()
                )
            ),
        };
    }
}

/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Themes_Set {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,
        T_ColourOptions extends string,
    > = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.Data<CssSystemColor>;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>;
            };
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,
        T_ColourOptions extends string,
    > = {
        name: T_ThemeName;
        forcedColours?: Tokens_Themes_Set_SingleMode.InputParam<CssSystemColor>;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]?: {
                [ C in T_ThemeContrastMode[ number ] ]?: Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>;
            };
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,
        T_ColourOptions extends string,
    > = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.JsonReturn<CssSystemColor>;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourOptions>;
            };
        };

}