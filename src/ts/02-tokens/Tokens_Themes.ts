/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';

import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';

import type {
    ThemeMode_ContrastOption,
} from './@types.d.ts';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    T_ThemeBrightnessMode extends string,
    T_ThemeContrastMode extends ThemeMode_ContrastOption,
    T_ThemeName extends string,

    T_Keyword_Universal extends string,
    T_Keyword_Text extends string,
    T_Keyword_Background extends string,
> extends AbstractTokens<Tokens_Themes.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_ThemeBrightnessMode,
    T_ThemeContrastMode,
    T_ThemeName,
    T_Keyword_Universal,
    T_Keyword_Text,
    T_Keyword_Background
>> {

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
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
            T_Keyword_Text,
            T_Keyword_Background
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
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
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
            T_Keyword_Text,
            T_Keyword_Background
        >,
    ): Promise<Tokens_Themes<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_Keyword_Universal,
        T_Keyword_Text,
        T_Keyword_Background
    >[ 'sets' ]> {

        type CompleteArray = [
            Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >,
            ...Tokens_Themes_Set.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                T_ThemeName,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
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
                    T_Keyword_Text,
                    T_Keyword_Background
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
                T_Keyword_Text,
                T_Keyword_Background
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
                T_Keyword_Text,
                T_Keyword_Background
            >
        );

        return sets;
    }


    public get data() {

        return objectMap(
            this.sets,
            ( [ key, value ] ) => value.data
        ) as Tokens_Themes.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
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
                T_Keyword_Text,
                T_Keyword_Background
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
        T_Keyword_Text,
        T_Keyword_Background
    > {

        return objectMap(
            this.sets,
            ( [ key, value ] ) => value.toJSON()
        ) as Tokens_Themes.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode,
            T_ThemeContrastMode,
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
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
            T_Keyword_Text,
            T_Keyword_Background
        >[ 'toScssVars' ]>;
    } {
        return objectMap(
            this.sets,
            ( [ key, value ] ) => value.toScssVars()
        );
    }
}

/**
 * Utilities for the {@link Tokens_Themes} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Themes {

    export type Default_ThemeName = 'default';

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > =
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >
        | Tokens_Themes_Set.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_ThemeBrightnessMode[],
            T_ThemeContrastMode[],
            T_ThemeName,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >[];

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends string,
        T_ThemeContrastMode extends ThemeMode_ContrastOption,
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > = {
            [ N in T_ThemeName ]: Tokens_Themes_Set.JsonReturn<
                T_ColourName,
                T_ExtraColourLevels,
                T_ThemeBrightnessMode[],
                T_ThemeContrastMode[],
                N,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >;
        };
}