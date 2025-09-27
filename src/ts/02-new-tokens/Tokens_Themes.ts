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
    ThemeColourOption,
    ThemeMode_ContrastOption,
    TokenLevels_Extended,
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
    T_ExtraColourLevels extends TokenLevels_Extended,
    T_ThemeBrightnessMode extends string,
    T_ThemeContrastMode extends ThemeMode_ContrastOption,
    T_ThemeName extends string
> extends AbstractTokens<Tokens_Themes.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName
>> {

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string
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
            T_ThemeName
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
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,
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
            T_ThemeName
        >,
    ): Promise<Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName
    >[ 'sets' ]> {

        type CompleteArray = [
            Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                ThemeColourOption<T_ColourName, T_ExtraColourLevels>
            >,
            ...Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                ThemeColourOption<T_ColourName, T_ExtraColourLevels>
            >[]
        ];

        const arr: CompleteArray =
            Array.isArray( input )
                ? (
                    input.length
                        ? input as CompleteArray
                        : [
                            { name: 'default' as T_ThemeName },
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
                    T_ThemeName
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
                T_ThemeName
            >;
        } = objectGenerator(
            allThemeNames,
            ( name ) => objs[ allThemeNames.indexOf( name ) ]
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
            T_ThemeName
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
                T_ThemeName
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
        T_ThemeName
    > {
        return this.data;
    }

    public toScssVars(): {
        [ K in T_ThemeName ]: ReturnType<Tokens_Themes_Set<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName
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

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                ThemeColourOption<T_ColourName, T_ExtraColourLevels>
            >;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string
    > =
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >[];

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.JsonReturn<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                ThemeColourOption<T_ColourName, T_ExtraColourLevels>
            >;
        };

}