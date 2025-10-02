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

    T_Keyword_Universal extends string = never,
> extends AbstractTokens<Tokens_Themes_Set.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,

    T_Keyword_Universal
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

        T_Keyword_Universal extends string = never,
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

            T_Keyword_Universal
        >,
    ) {

        const forcedColours = await Tokens_Themes_Set_SingleMode.build(
            'forcedColors',
            clrNames,
            input.forcedColours ?? {},
        );

        const modes = await objectGeneratorAsync(
            brightnessModes,
            async ( brightness: T_ThemeBrightnessMode[ number ] ) =>
                objectGeneratorAsync(
                    contrastModes,
                    async ( contrast: T_ThemeContrastMode[ number ] ) =>
                        Tokens_Themes_Set_SingleMode.build<
                            T_ColourName,
                            T_ExtraColourLevels,
                            T_Keyword_Universal
                        >(
                            contrast,
                            clrNames,
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
        T_Keyword_Universal
    > {
        return {
            name: this.name,

            // ...this.modes,
            ...objectMap(
                this.modes,
                ( { key: brightnessMode } ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( { value } ) => value.data
                )
            ),

            forcedColours: this.forcedColours.data,
        };
    }


    protected constructor (
        /** Name for this shade set. */
        protected readonly name: T_ThemeName,
        protected readonly clrNames: readonly T_ColourName[],
        protected readonly extraColourLevels: readonly T_ExtraColourLevels[],
        protected readonly brightnessModes: readonly T_ThemeBrightnessMode[ number ][],
        protected readonly contrastModes: readonly T_ThemeContrastMode[ number ][],

        protected readonly forcedColours: Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >,

        protected readonly modes: {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]:
                Tokens_Themes_Set_SingleMode<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >;
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
        T_Keyword_Universal
    > {
        return this.data;
    }

    public toScssVars(): {

        [ B in T_ThemeBrightnessMode[ number ] ]: {

            [ C in T_ThemeContrastMode[ number ] ]: ReturnType<
                Tokens_Themes_Set_SingleMode<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >[ 'toScssVars' ]
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

        T_Keyword_Universal extends string,
    > = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.Data<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >;
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

        T_Keyword_Universal extends string,
    > = {
        name: T_ThemeName;
        forcedColours?: Omit<
            Tokens_Themes_Set_SingleMode.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                CssSystemColor
            >,
            "levels" | "variations"
        >;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]?: {
                [ C in T_ThemeContrastMode[ number ] ]?:
                Tokens_Themes_Set_SingleMode.InputParam<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >;
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

        T_Keyword_Universal extends string,
    > = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.JsonReturn<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >;
            };
        };

}