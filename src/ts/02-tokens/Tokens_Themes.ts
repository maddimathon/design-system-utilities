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

import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';

import type {
    ThemeMode_ContrastOption,
    ColourLevels_Extended,
} from './@types.d.ts';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Themes<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourLevels_Extended,
    T_ThemeBrightnessMode extends string,
    T_ThemeContrastMode extends ThemeMode_ContrastOption,
    T_ThemeName extends string,

    T_Keyword_Universal extends string,
    T_Keyword_Text extends string,
> extends AbstractTokens<Tokens_Themes.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,
    T_Keyword_Universal,
    T_Keyword_Text
>> {

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
    >(
        clrNames: readonly T_ColourName[],
        extraColourLevels: readonly T_ExtraColourLevels[],
        brightnessModes: readonly T_ThemeBrightnessMode[],
        contrastModes: readonly T_ThemeContrastMode[],

        input: Tokens_Themes.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >,
    ) {
        return new Tokens_Themes(
            clrNames,
            extraColourLevels,
            brightnessModes,
            contrastModes,
            await Tokens_Themes.buildSets(
                clrNames,
                extraColourLevels,
                brightnessModes,
                contrastModes,
                input,
            ),
        );
    }

    /**
     * Used to initialize multiple themes at once.
     */
    protected static async buildSets<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
    >(
        clrNames: readonly T_ColourName[],
        extraColourLevels: readonly T_ExtraColourLevels[],
        brightnessModes: readonly T_ThemeBrightnessMode[],
        contrastModes: readonly T_ThemeContrastMode[],
        input: Tokens_Themes.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >,
    ): Promise<Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_Keyword_Universal,
        T_Keyword_Text
    >[ 'sets' ]> {

        type CompleteArray = [
            Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text
            >,
            ...Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text
            >[]
        ];

        const arr: CompleteArray =
            Array.isArray( input )
                ? (
                    input.length
                        ? input as CompleteArray
                        : [
                            { name: 'default' satisfies Tokens_Themes.Default_ThemeName as T_ThemeName },
                        ] as CompleteArray
                )
                : [ input ];

        const objs = await Promise.all(
            arr.map(
                ( set ) => Tokens_Themes_Set.build<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_ThemeBrightnessMode,
                    T_ThemeContrastMode,
                    T_ThemeName,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >(
                    set.name,
                    clrNames,
                    extraColourLevels,
                    [ ...brightnessModes ],
                    [ ...contrastModes ],
                    set,
                )
            )
        );

        const allThemeNames = objs.map( o => o.data.name );

        const sets: {
            [ N in T_ThemeName ]: Tokens_Themes_Set<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        } = objectGenerator(
            allThemeNames,
            ( name ) => objs[ allThemeNames.indexOf( name ) ] as Tokens_Themes_Set<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text
            >
        );

        return sets;
    }


    public get data() {

        return objectMap(
            this.sets,
            ( { value } ) => value.data
        ) as Tokens_Themes.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >;
    }

    protected constructor (
        protected readonly clrNames: readonly T_ColourName[],
        protected readonly extraColourLevels: readonly T_ExtraColourLevels[],
        protected readonly brightnessModes: readonly T_ThemeBrightnessMode[],
        protected readonly contrastModes: readonly T_ThemeContrastMode[],
        protected readonly sets: {
            [ N in T_ThemeName ]: Tokens_Themes_Set<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        },
    ) {
        super();
    }

    public toJSON(): Tokens_Themes.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_Keyword_Universal,
        T_Keyword_Text
    > {

        return objectMap(
            this.sets,
            ( { value } ) => value.toJSON()
        ) as Tokens_Themes.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >;
    }

    public toScssVars(): {
        [ K in T_ThemeName ]: ReturnType<Tokens_Themes_Set<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >[ 'toScssVars' ]>;
    } {
        return objectMap(
            this.sets,
            ( { value } ) => value.toScssVars()
        );
    }
}

/**
 * Utilities for the {@link Tokens_Themes} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Themes {

    export type Default_ThemeName = 'default';

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
    > =
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text
        >[];

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.JsonReturn<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        };

}