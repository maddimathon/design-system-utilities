/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    CssSystemColor,
    ThemeMode_ContrastOption,
} from '../@types.js';

import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';

import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    T_ThemeBrightnessMode extends readonly string[],
    T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
    T_ThemeName extends string,

    T_Keyword_Universal extends string = never,
    T_Keyword_Text extends string = never,
    T_Keyword_Background extends string = never,
> extends AbstractTokens<Tokens_Themes_Set.Data<
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

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
        T_Keyword_Background extends string = never,
    >(
        name: T_ThemeName,
        clrNames: readonly T_ColourName[],
        extraColourLevels: readonly T_ExtraColourLevels[],
        brightnessModes: readonly T_ThemeBrightnessMode[],
        contrastModes: readonly T_ThemeContrastMode[],

        input: Tokens_Themes_Set.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            readonly NoInfer<T_ThemeBrightnessMode>[],
            readonly NoInfer<T_ThemeContrastMode>[],
            T_ThemeName,

            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >,
    ) {

        const forcedColours: Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        > = await Tokens_Themes_Set_SingleMode.build(
            'forcedColors',
            undefined,
            clrNames,
            {
                ...input.forcedColours ?? {},
                variations: input.variations,
            },
            input.forcedColours?.overrides
        );

        const modes: Promise<{
            [ B in T_ThemeBrightnessMode ]: {
                [ C in T_ThemeContrastMode ]:
                Tokens_Themes_Set_SingleMode<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >;
            };
        }> = objectGeneratorAsync(
            brightnessModes,
            ( brightness: T_ThemeBrightnessMode ) =>
                objectGeneratorAsync(
                    contrastModes,
                    ( contrast: T_ThemeContrastMode ) =>
                        Tokens_Themes_Set_SingleMode.build<
                            T_ColourName,
                            T_ExtraColourLevels,
                            T_Keyword_Universal,
                            T_Keyword_Text,
                            T_Keyword_Background
                        >(
                            contrast,
                            brightness as string,
                            clrNames,
                            {
                                ...input[ brightness ]?.[ contrast ] ?? {},
                                variations: mergeArgs(
                                    input.variations ?? {},
                                    input[ brightness ]?.[ contrast ]?.variations ?? {},
                                    true
                                ),
                            },
                            input[ brightness ]?.[ contrast ]?.overrides ?? {}
                        ),
                )
        );

        return modes.then( ( modes_resolved => new Tokens_Themes_Set<
            T_ColourName,
            T_ExtraColourLevels,
            readonly T_ThemeBrightnessMode[],
            readonly T_ThemeContrastMode[],
            T_ThemeName,

            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >(
            name,
            clrNames,
            extraColourLevels,
            brightnessModes,
            contrastModes,
            forcedColours,
            modes_resolved,
        ) ) );
    }

    public get data(): Tokens_Themes_Set.Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_ThemeBrightnessMode,
        T_ThemeContrastMode,
        T_ThemeName,
        T_Keyword_Universal,
        T_Keyword_Text,
        T_Keyword_Background
    > {
        return {
            name: this.name ?? 'default',

            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.data
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
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >,

        protected readonly modes: {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]:
                Tokens_Themes_Set_SingleMode<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
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
        T_Keyword_Universal,
        T_Keyword_Text,
        T_Keyword_Background
    > {

        const allLevelsInUse = objectMap(
            this.modes,
            ( [ brightnessMode ] ) => Object.values(
                objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ): (
                        | "black"
                        | "white"
                        | ColourUtilities.Levels.Required
                        | ColourUtilities.Levels.Optional
                    )[] => value.levelsInUse
                )
            ).flat() as ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[]
        );

        const levelsInUse = arrayUnique( (
            Object.values( allLevelsInUse ) as ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[][]
        ).flat() );

        const levelsInUse_dark = levelsInUse.map( ( light ) => ColourUtilities.Levels.toDark( light ) );

        return {
            name: this.name ?? 'default',

            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.toJSON()
                )
            ),

            forcedColours: this.forcedColours.toJSON(),

            levelsInUse: arrayUnique( levelsInUse.concat( levelsInUse_dark ) ).sort(),
        };
    }

    public toScssVars(): {

        [ B in T_ThemeBrightnessMode[ number ] ]: {

            [ C in T_ThemeContrastMode[ number ] ]: ReturnType<
                Tokens_Themes_Set_SingleMode<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >[ 'toScssVars' ]
            >;
        };
    } {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.toScssVars()
                )
            ),
        };
    }
}

/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Themes_Set {

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set_SingleMode.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.Data<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >;
            };
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > = {
        name: T_ThemeName;
        variations?: Tokens_Themes_Set_SingleMode.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >[ 'variations' ];
        forcedColours?: Omit<
            Tokens_Themes_Set_SingleMode.InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background,
                CssSystemColor
            >,
            "levels" | "variations"
        > & {
            overrides?: Tokens_Themes_Set_SingleMode.Data.RecursivePartial<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background,
                CssSystemColor
            >,
        };
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]?: {
                [ C in T_ThemeContrastMode[ number ] ]?: Tokens_Themes_Set_SingleMode.InputParam<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                > & {
                    overrides?: Tokens_Themes_Set_SingleMode.Data.RecursivePartial<
                        T_ColourName,
                        T_ExtraColourLevels,
                        T_Keyword_Universal,
                        T_Keyword_Text,
                        T_Keyword_Background
                    >,
                };
            };
        };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        T_ThemeBrightnessMode extends readonly string[],
        T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[],
        T_ThemeName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > = {
        name: T_ThemeName;
        levelsInUse: ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[];
        forcedColours: Tokens_Themes_Set_SingleMode.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >;
    } & {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]: Tokens_Themes_Set_SingleMode.JsonReturn<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >;
            };
        };

}