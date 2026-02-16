/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects';
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';

import type {
    RequiredHeadingLevels,
    TokenTypes,
} from '../@types.js';

import type { RecursiveRecord } from '../../01-utilities/@types.js';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';

import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set<T_Types extends TokenTypes.Theme.TypeParams> extends AbstractTokens<{
    data: Tokens_Themes_Set.Data<T_Types>;
    json: Tokens_Themes_Set.JsonReturn<T_Types>;
    scss: Tokens_Themes_Set.ScssVars<T_Types>;
}> {

    /**
     * Used instead of the constructor so that it can be async.
     */
    public static async build<T_Types extends TokenTypes.Theme.TypeParams>(
        name: T_ThemeName,
        clrNames: readonly T_Types[ 'colour' ][ 'name' ][],
        extraColourLevels: readonly T_ExtraColourLevels[],
        brightnessModes: readonly T_ThemeBrightnessMode[],
        contrastModes: readonly T_ThemeContrastMode[],

        input: Tokens_Themes_Set.InputParam<T_Types>,
    ) {

        const forcedColours: Promise<Tokens_Themes_Set.SingleMode<
            T_Types,
            TokenTypes.Css.SystemColor
        >> = Tokens_Themes_Set.SingleMode.build(
            'forcedColors',
            clrNames,
            {
                ...input.forcedColours ?? {},
                variations: input.variations,
            },
            input.forcedColours?.overrides
        );

        const modes: Promise<{
            [ B in T_Types[ 'brightness' ] ]: {
                [ C in T_Types[ 'contrast' ] ]:
                Tokens_Themes_Set.SingleMode<T_Types>;
            };
        }> = objectGeneratorAsync(
            brightnessModes,
            async ( brightness: T_Types[ 'brightness' ] ) =>
                objectGeneratorAsync(
                    contrastModes,
                    async ( contrast: T_Types[ 'contrast' ] ) =>
                        Tokens_Themes_Set.SingleMode.build<T_Types>(
                            contrast,
                            clrNames,
                            {
                                ...input[ brightness ]?.[ contrast ] ?? {},
                                variations: mergeArgs(
                                    input.variations ?? {},
                                    input[ brightness ]?.[ contrast ]?.variations ?? {},
                                    true
                                ),
                            },
                            input[ brightness ]?.[ contrast ]?.overrides ?? {},
                        ),
                )
        );

        return Promise.all( [
            forcedColours,
            modes,
        ] ).then( ( ( [
            forcedColours_resolved,
            modes_resolved,
        ] ) => new Tokens_Themes_Set<T_Types>(
            name,
            clrNames,
            extraColourLevels,
            brightnessModes,
            contrastModes,
            forcedColours_resolved,
            modes_resolved,
        ) ) );
    }

    public get data(): Tokens_Themes_Set.Data<T_Types> {
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
        protected readonly clrNames: readonly T_Types[ 'colour' ][ 'name' ][],
        protected readonly extraColourLevels: readonly T_ExtraColourLevels[],
        protected readonly brightnessModes: readonly T_ThemeBrightnessMode[ number ][],
        protected readonly contrastModes: readonly T_ThemeContrastMode[ number ][],

        protected readonly forcedColours: Tokens_Themes_Set.SingleMode<T_Types>,

        protected readonly modes: {
            [ B in T_ThemeBrightnessMode[ number ] ]: {
                [ C in T_ThemeContrastMode[ number ] ]:
                Tokens_Themes_Set.SingleMode<T_Types>;
            };
        },
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set.JsonReturn<T_Types> {

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

    public toScssVars(): Tokens_Themes_Set.ScssVars<T_Types> {

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
    export type Data<T_Types extends TokenTypes.Theme.TypeParams> = {
        name: T_Types[ 'name' ];
        forcedColours: Tokens_Themes_Set.SingleMode.Data<
            T_Types,
            TokenTypes.Css.SystemColor
        >;
    } & {
        [ B in T_Types[ 'brightness' ] ]?: {
            [ C in T_Types[ 'contrast' ] ]?: Tokens_Themes_Set.SingleMode.Data<T_Types>;
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_Types extends TokenTypes.Theme.TypeParams> = {
        name: T_Types[ 'name' ];
        variations?: Tokens_Themes_Set.SingleMode.InputParam<T_Types>[ 'variations' ];
        forcedColours?: Omit<
            Tokens_Themes_Set.SingleMode.InputParam<
                T_Types,
                TokenTypes.Css.SystemColor
            >,
            "levels" | "variations"
        > & {
            overrides?: Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_Types>,
        };
    } & {
        [ B in T_Types[ 'brightness' ] ]?: {
            [ C in T_Types[ 'contrast' ] ]?: Tokens_Themes_Set.SingleMode.InputParam<T_Types> & {
                overrides?: Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_Types>,
            };
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_Types extends TokenTypes.Theme.TypeParams> = {
        name: T_Types[ 'name' ];
        levelsInUse: ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[];
        forcedColours: Tokens_Themes_Set.SingleMode.JsonReturn<T_Types, TokenTypes.Css.SystemColor>;
    } & {
        [ B in T_Types[ 'brightness' ] ]: {
            [ C in T_Types[ 'contrast' ] ]: Tokens_Themes_Set.SingleMode.JsonReturn<T_Types>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_Types extends TokenTypes.Theme.TypeParams> = {
        'forced-colors': Tokens_Themes_Set.SingleMode.ScssVars<T_Types>;
    } & {
        [ B in T_Types[ 'brightness' ] ]: {
            [ C in T_Types[ 'contrast' ] ]: Tokens_Themes_Set.SingleMode.ScssVars<T_Types>;
        };
    };

    /**
     * Generates a complete token object for the design system.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    export class SingleMode<
        T_Types extends TokenTypes.Theme.TypeParams,
        __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
    > extends AbstractTokens<{
        data: SingleMode.Data<T_Types, __T_ColourOption>;
        json: SingleMode.JsonReturn<T_Types, __T_ColourOption>;
        scss: SingleMode.ScssVars<T_Types, __T_ColourOption>;
    }> {

        public static async build<T_Types extends TokenTypes.Theme.TypeParams>(
            preset: "forcedColors",
            clrNames: readonly T_Types[ 'colour' ][ 'name' ][],
            input: SingleMode.InputParam<T_Types>,

            overrides?: SingleMode.Data.RecursivePartial<NoInfer<T_Types>>,
        ): Promise<
            SingleMode<T_Types>
        >;

        public static async build<T_Types extends TokenTypes.Theme.TypeParams>(
            preset: "low" | "average" | "high" | "max",
            clrNames: readonly T_Types[ 'colour' ][ 'name' ][],
            input: SingleMode.InputParam<T_Types>,

            overrides?: SingleMode.Data.RecursivePartial<NoInfer<T_Types>>,
        ): Promise<
            SingleMode<T_Types>
        >;

        /**
         * An easy way to generate a complete token set from limited inputs.
         * 
         * @since 0.1.0-alpha
         */
        public static async build<T_Types extends TokenTypes.Theme.TypeParams>(
            preset: "low" | "average" | "high" | "max" | "forcedColors",
            clrNames: readonly T_Types[ 'colour' ][ 'name' ][],

            input: SingleMode.InputParam<T_Types>,

            overrides: SingleMode.Data.RecursivePartial<T_Types> = {},

        ): Promise<
            SingleMode<T_Types>
        > {
            const defaultLevels: SingleMode.Levels.Required<never> = preset !== 'forcedColors'
                ? SingleMode.Levels.DEFAULT[ preset ]
                : SingleMode.Levels.DEFAULT.max;

            const levels = SingleMode.Levels.parse<T_ExtraColourLevels>(
                defaultLevels,
                input.levels,
            );

            const variations = SingleMode.Build.completeVariations<T_Types>( clrNames, input.variations );

            const clrOpt = SingleMode.Build.colourOption;

            let description: null | string = input.description ?? null;

            let defaultOverrides: SingleMode.Data.RecursivePartial<NoInfer<T_Types>> = {};

            // returns if forced colours
            switch ( preset ) {

                case 'average':
                    description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';

                    defaultOverrides.selection = {
                        bg: clrOpt( variations.universal.primary, '300' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                        text: clrOpt( variations.base, '800' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    };
                    break;

                case 'low':
                    description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';

                    defaultOverrides.selection = {
                        bg: clrOpt( variations.universal.primary, '300' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                        text: clrOpt( variations.base, '800' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    };
                    break;

                case 'high':
                    description = description ?? 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                    break;

                case 'max':
                    description = description ?? 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';

                    defaultOverrides.background = {
                        $: 'white',
                        grey: 'white',

                        ...objectGenerator(
                            arrayUnique( [
                                ...Object.keys( variations.universal ) as T_Keyword_Universal[],
                                ...Object.keys( variations.background ) as T_Keyword_Background[],
                            ] ),
                            () => 'white'
                        ),
                    };
                    defaultOverrides.text = {
                        $: 'black',

                        ...objectGenerator(
                            arrayUnique( [
                                ...Object.keys( variations.universal ) as T_Keyword_Universal[],
                                ...Object.keys( variations.text ) as T_Keyword_Background[],
                            ] ),
                            () => 'black'
                        ),
                    };
                    defaultOverrides.ui = {
                        $: 'black',

                        ...objectGenerator(
                            arrayUnique( [
                                ...Object.keys( variations.universal ) as T_Keyword_Universal[],
                                ...Object.keys( variations.text ) as T_Keyword_Background[],
                            ] ),
                            () => 'black'
                        ),
                    };

                    defaultOverrides.selection = {
                        bg: clrOpt( variations.universal.primary, '850' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                        text: clrOpt( variations.base, '100' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    };
                    break;

                case 'forcedColors':
                    const _input: SingleMode.Build.Param_ForcedColors<T_Types> = {
                        ...input,

                        variations: SingleMode.Build.completeVariations<T_Types>( clrNames, input.variations ),
                    };

                    return new SingleMode(
                        'This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!',
                        [],
                        await SingleMode.Build.forcedColors( _input )
                    );
            }

            type AnyLevel = "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;

            const allLevelsInUse = (
                Object.values(
                    objectFlatten( levels as unknown as RecursiveRecord<string, AnyLevel> )
                ) as AnyLevel[]
            ).concat(
                Object.values(
                    objectFlatten( overrides as RecursiveRecord<string, TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>> )
                ).map( ( val ): AnyLevel | false => {

                    const match = String( val ).match( /\-(\d+)$/ );

                    // returns
                    if ( match && match[ 1 ] ) {
                        return match[ 1 ] as AnyLevel;
                    }

                    return false;
                } ).filter( v => v !== false )
            );

            const levelsInUse = arrayUnique( allLevelsInUse ).sort();

            return SingleMode.Build.data<T_Types>( {
                levels,
                variations,
            } ).then(
                ( defaultInputData ) => new SingleMode(
                    description,
                    levelsInUse,
                    mergeArgs(
                        defaultInputData,
                        mergeArgs(
                            defaultOverrides,
                            overrides,
                            true,
                        ) as RecursivePartial<SingleMode.Data<T_Types>>,
                        true,
                    ),
                )
            );
        }

        protected constructor (
            public readonly description: null | string,
            public readonly levelsInUse: ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[],
            public readonly data: SingleMode.Data<T_Types>,
        ) {
            super();
        }

        public toJSON(): SingleMode.JsonReturn<T_Types> {

            const levelsInUse = this.levelsInUse.map( ( light ) => ( {
                light,
                dark: ColourUtilities.Levels.toDark( light ),
            } ) );

            return {
                description: this.description ?? undefined,
                data: this.data,

                levelsInUse,
            };
        }

        public toScssVars() {

            type System = {

                accent: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                background: {
                    $: __T_ColourOption;
                };

                button: {

                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };

                input: {

                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };

                link: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    visited: __T_ColourOption;
                };

                mark: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                selected: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                selection: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                text: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
            };

            return {
                ...this.data,

                link: {
                    ...this.data.link,

                    outline: {
                        $: this.data.link.outline.hover,
                        visited: this.data.link.outline.hover,

                        ...this.data.link.outline,
                    },
                },

                system: {
                    ...this.data.system,

                    background: this.data.background,
                    button: this.data.button.primary,
                    input: this.data.input.$,
                    link: this.data.link.$,
                    selection: this.data.selection,

                    text: {
                        $: this.data.text.$,
                        active: this.data.text.active,
                        disabled: this.data.text.disabled,
                    },
                } satisfies System,
            } satisfies SingleMode.ScssVars<T_Types>;
        }
    }

    /**
     * Utilities for the {@link SingleMode} class.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    export namespace SingleMode {

        export const allHeadingLevels = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
        ] as const;

        /**
         * @since 0.1.0-alpha
         */
        export type Data<
            T_Types extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
        > = {
            background: {
                $: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_Types[ 'colour' ][ 'name' ]>[ 'background' ] ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Universal ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Background ]: __T_ColourOption;
            },

            text: {
                $: __T_ColourOption,
            } & {
                [ K in keyof RequiredVariations<T_Types[ 'colour' ][ 'name' ]>[ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_Types[ 'colour' ][ 'name' ]>[ 'text' ] ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Universal ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Text ]: __T_ColourOption;
            },

            ui: {
                $: __T_ColourOption,
            } & {
                [ K in keyof RequiredVariations<T_ColourName>[ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_ColourName>[ 'text' ] ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Universal ]: __T_ColourOption;
            } & {
                [ K in T_Keyword_Text ]: __T_ColourOption;
            },

            heading: {
                [ L in RequiredHeadingLevels ]: __T_ColourOption;
            };

            selection: {
                bg: __T_ColourOption,
                text: __T_ColourOption,
            },

            /**
             * @since 0.1.1-alpha.0 — Switched to a nested object instead of separate keys. 
             */
            link: {

                $: {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
                },

                /**
                 * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                 */
                decoration: {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
                },

                icon: {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
                },

                /**
                 * Used for the focus outline and similar elements.
                 * 
                 * @since 0.1.1-alpha.0
                 */
                outline: {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
                },
            },

            button: {
                [ K in 'primary' | 'secondary' | 'disabled' ]: Data.Button<
                    T_ColourName,
                    T_ExtraColourLevels,
                    __T_ColourOption
                >;
            } & {
                [ K in T_Keyword_Universal ]: Data.Button<
                    T_ColourName,
                    T_ExtraColourLevels,
                    __T_ColourOption
                >;
            },

            /**
             * @since 0.1.1-alpha.0 — Changed from field to input.
             * @since ___PKG_VERSION___ — Added placeholder colour.
             */
            input: {
                [ K in "$" | "disabled" | "readonly" ]: {

                    /** 
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption,
                        hover: __T_ColourOption,
                        active: __T_ColourOption,
                    },

                    bg: {
                        $: __T_ColourOption,
                        hover: __T_ColourOption,
                        active: __T_ColourOption,
                    },

                    border: {
                        $: __T_ColourOption,
                        hover: __T_ColourOption,
                        active: __T_ColourOption,
                    },

                    placeholder: __T_ColourOption,

                    text: {
                        $: __T_ColourOption,
                        hover: __T_ColourOption,
                        active: __T_ColourOption,
                    },
                };
            },

            system: {
                accent: {
                    bg: __T_ColourOption,
                    text: __T_ColourOption,
                },
                mark: {
                    bg: __T_ColourOption,
                    text: __T_ColourOption,
                },
                selected: {
                    bg: __T_ColourOption,
                    text: __T_ColourOption,
                },
            },
        };

        /**
         * Utilities and types for the complete tokens theme data for a single mode.
         * 
         * @since ___PKG_VERSION___
         */
        export namespace Data {

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to SingleMode.Data and renamed.
             */
            export type Button<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
            > = {

                bg: {
                    $: __T_ColourOption,
                    hover: __T_ColourOption,
                    active: __T_ColourOption,
                },

                border: {
                    $: __T_ColourOption,
                    hover: __T_ColourOption,
                    active: __T_ColourOption,
                },

                outline: {
                    $?: undefined | never,
                    hover: __T_ColourOption,
                    active: __T_ColourOption,
                },

                text: {
                    $: __T_ColourOption,
                    hover: __T_ColourOption,
                    active: __T_ColourOption,
                },

                ui: {
                    $: __T_ColourOption,
                    hover: __T_ColourOption,
                    active: __T_ColourOption,
                },
            };

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to SingleMode.Data and renamed.
             */
            export type RecursivePartial<
                T_Types extends TokenTypes.Theme.TypeParams,
                __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
            > = {
                background?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'background' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Universal ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Background ]?: undefined | __T_ColourOption;
                },

                text?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'text' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Universal ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Text ]?: undefined | __T_ColourOption;
                },

                ui?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in keyof RequiredVariations<T_ColourName>[ 'text' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Universal ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_Keyword_Text ]?: undefined | __T_ColourOption;
                },

                heading?: undefined | {
                    [ L in RequiredHeadingLevels ]?: undefined | __T_ColourOption;
                };

                selection?: undefined | {
                    bg: __T_ColourOption,
                    text: __T_ColourOption,
                },

                link?: {

                    $: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    /**
                     * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                     */
                    decoration?: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    icon?: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    outline?: undefined | {
                        [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },
                },

                button?: undefined | {
                    [ K in 'primary' | 'secondary' | 'disabled' ]?: undefined | Data.Button<
                        T_ColourName,
                        T_ExtraColourLevels,
                        __T_ColourOption
                    >;
                } & {
                    [ K in T_Keyword_Universal ]?: undefined | Data.Button<
                        T_ColourName,
                        T_ExtraColourLevels,
                        __T_ColourOption
                    >;
                },

                input?: undefined | {
                    [ K in "$" | "disabled" | "readonly" ]?: {

                        accent?: undefined | {
                            $?: undefined | __T_ColourOption,
                            hover?: undefined | __T_ColourOption,
                            active?: undefined | __T_ColourOption,
                        },

                        bg?: undefined | {
                            $?: undefined | __T_ColourOption,
                            hover?: undefined | __T_ColourOption,
                            active?: undefined | __T_ColourOption,
                        },

                        border?: undefined | {
                            $?: undefined | __T_ColourOption,
                            hover?: undefined | __T_ColourOption,
                            active?: undefined | __T_ColourOption,
                        },

                        text?: undefined | {
                            $?: undefined | __T_ColourOption,
                            hover?: undefined | __T_ColourOption,
                            active?: undefined | __T_ColourOption,
                        },
                    };
                },

                system?: undefined | {
                    accent?: undefined | {
                        bg?: undefined | __T_ColourOption,
                        text?: undefined | __T_ColourOption,
                    },
                    mark?: undefined | {
                        bg?: undefined | __T_ColourOption,
                        text?: undefined | __T_ColourOption,
                    },
                    selected?: undefined | {
                        bg?: undefined | __T_ColourOption,
                        text?: undefined | __T_ColourOption,
                    },
                },
            };
        }

        /** @internal @private */
        export interface RequiredVariations<
            T_ColourName extends string,
        > {
            base: T_ColourName;

            background: {
                grey: T_ColourName;
            },

            universal: {
                primary: T_ColourName;
                secondary: T_ColourName;
            };

            text: {
                active: T_ColourName;
                disabled: T_ColourName;
                grey: T_ColourName;
            };

            heading: {
                [ L in RequiredHeadingLevels ]: T_ColourName;
            };

            interactive: {
                active: T_ColourName;
                hover: T_ColourName;
                disabled: T_ColourName;
            };
        };

        /** @internal @private */
        export interface AllVariations<T_Types extends TokenTypes.Theme.TypeParams> {
            base: T_ColourName;

            background: RequiredVariations<T_ColourName>[ 'background' ] & {
                [ K in T_Keyword_Background ]: T_ColourName;
            };

            universal: RequiredVariations<T_ColourName>[ 'universal' ] & {
                [ K in T_Keyword_Universal ]: T_ColourName;
            };

            text: RequiredVariations<T_ColourName>[ 'text' ] & {
                [ K in T_Keyword_Text ]: T_ColourName;
            };

            heading: RequiredVariations<T_ColourName>[ 'heading' ] & {
                [ key: number ]: T_ColourName;
            };

            interactive: RequiredVariations<T_ColourName>[ 'interactive' ];
        };



        /* Levels
         * ====================================================================== */

        /**
         * Utilities and types for levels.
         * 
         * @since ___PKG_VERSION___
         */
        export namespace Levels {

            /**
             * @since ___PKG_VERSION___
             */
            export interface Input<
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
            > {
                background?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentGrey<T_ExtraColourLevels>>;
                text?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentMin<T_ExtraColourLevels>>;
                ui?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentMin<T_ExtraColourLevels>>;

                heading?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | {
                    [ L in RequiredHeadingLevels ]?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            }

            /**
             * @since ___PKG_VERSION___
             */
            export interface Parsed<
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
            > {
                background: Levels.Set.AccentGrey<T_ExtraColourLevels>;
                text: Levels.Set.AccentMin<T_ExtraColourLevels>;
                ui: Levels.Set.AccentMin<T_ExtraColourLevels>;

                heading: {
                    [ L in RequiredHeadingLevels ]: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            };

            /**
             * @since ___PKG_VERSION___ — Made public, moved to SingleMode.Levels and renamed.
             */
            export interface Required<
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
            > {
                background: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentGrey<T_ExtraColourLevels>;
                text: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentMin<T_ExtraColourLevels>;
                ui: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentMin<T_ExtraColourLevels>;

                heading: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | {
                    [ L in RequiredHeadingLevels ]: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            };

            /**
             * Common object shapes used to set multiple level types.
             * 
             * @since ___PKG_VERSION___
             */
            export namespace Set {

                /**
                 * @since ___PKG_VERSION___ — Made public, moved to SingleMode.Levels.Sets and renamed.
                 */
                export interface AccentMin<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
                > {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    min: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                }

                /**
                 * @since 0.1.1-alpha.0
                 * @since ___PKG_VERSION___ — Made public, moved to SingleMode.Levels.Sets and renamed.
                 */
                export interface AccentGrey<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
                > {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    grey: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                }
            }

            /**
             * @since 0.1.1-alpha.0
             * @since ___PKG_VERSION___ — Moved to SingleMode.Levels and renamed.
             */
            export namespace DEFAULT {

                export const average = {
                    background: {
                        $: '150',
                        accent: '200',
                        grey: '200',
                    },
                    text: {
                        $: '750',
                        accent: '700',
                        min: '600',
                    },
                    ui: {
                        $: '750',
                        accent: '700',
                        min: '600',
                    },
                    heading: {
                        1: '800',
                        2: '700',
                        3: '700',
                        4: '700',
                        5: '700',
                        6: '700',
                        7: '700',
                        8: '700',
                        9: '700',
                        10: '700',
                    },
                } as const satisfies SingleMode.Levels.Required<never>;

                export const high = {
                    background: {
                        $: '100',
                        accent: '150',
                        grey: '150',
                    },
                    text: {
                        $: '850',
                        accent: '750',
                        min: '700',
                    },
                    ui: {
                        $: '850',
                        accent: '750',
                        min: '700',
                    },
                    heading: {
                        1: '800',
                        2: '700',
                        3: '700',
                        4: '700',
                        5: '750',
                        6: '750',
                        7: '750',
                        8: '750',
                        9: '750',
                        10: '750',
                    },
                } as const satisfies SingleMode.Levels.Required<never>;

                export const low = {
                    background: {
                        $: '300',
                        accent: '250',
                        grey: '250',
                    },
                    text: {
                        $: '700',
                        accent: '700',
                        min: '600',
                    },
                    ui: {
                        $: '700',
                        accent: '700',
                        min: '600',
                    },
                    heading: {
                        1: '600',
                        2: '700',
                        3: '700',
                        4: '700',
                        5: '750',
                        6: '750',
                        7: '750',
                        8: '750',
                        9: '750',
                        10: '750',
                    },
                } as const satisfies SingleMode.Levels.Required<never>;

                export const max = {
                    background: 'white',
                    text: 'black',
                    ui: 'black',
                    heading: {
                        1: '850',
                        2: '850',
                        3: '850',
                        4: '850',
                        5: '850',
                        6: '850',
                        7: '850',
                        8: '850',
                        9: '850',
                        10: '850',
                    },
                } as const satisfies SingleMode.Levels.Required<never>;
            }

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to SingleMode.Levels and renamed. Added default param and made inputs optional.
             */
            export function parse<T_ExtraColourLevels extends ColourUtilities.Levels.Optional>(
                defaults: Levels.Required<T_ExtraColourLevels>,
                inputs: Levels.Input<T_ExtraColourLevels> = {},
            ): Levels.Parsed<T_ExtraColourLevels> {

                const nomalized_input = {

                    background: typeof inputs?.background === 'object'
                        ? inputs?.background
                        : {
                            $: inputs?.background,
                            accent: inputs?.background,
                            grey: inputs?.background,
                        },

                    heading: typeof inputs?.heading === 'object'
                        ? inputs?.heading
                        : inputs?.heading
                            ? objectGenerator(
                                SingleMode.allHeadingLevels,
                                () => inputs?.heading as ColourUtilities.Levels.Required | T_ExtraColourLevels
                            )
                            : {},

                    text: typeof inputs?.text === 'object'
                        ? inputs?.text
                        : {
                            $: inputs?.text,
                            accent: inputs?.text,
                            min: inputs?.text,
                        },

                    ui: typeof inputs?.ui === 'object'
                        ? inputs?.ui
                        : {
                            $: inputs?.ui,
                            accent: inputs?.ui,
                            min: inputs?.ui,
                        },
                } as const;

                const DEFAULTS = {

                    background: typeof defaults?.background === 'object'
                        ? defaults?.background
                        : {
                            $: defaults?.background,
                            accent: defaults?.background,
                            grey: defaults?.background,
                        },

                    heading: typeof defaults?.heading === 'object'
                        ? defaults?.heading
                        : objectGenerator(
                            SingleMode.allHeadingLevels,
                            () => defaults?.heading as ColourUtilities.Levels.Required | T_ExtraColourLevels
                        ),

                    text: typeof defaults?.text === 'object'
                        ? defaults?.text
                        : {
                            $: defaults?.text,
                            accent: defaults?.text,
                            min: defaults?.text,
                        },

                    ui: typeof defaults?.ui === 'object'
                        ? defaults?.ui
                        : {
                            $: defaults?.ui,
                            accent: defaults?.ui,
                            min: defaults?.ui,
                        },
                } as const;

                const background: Levels.Parsed<T_ExtraColourLevels>[ 'background' ] = {
                    $: nomalized_input.background?.$ ?? DEFAULTS.background.$,
                    accent: nomalized_input.background?.accent ?? nomalized_input.background?.$ ?? DEFAULTS.background.accent,
                    grey: nomalized_input.background?.grey ?? nomalized_input.background?.$ ?? DEFAULTS.background.grey,
                };

                const text: Levels.Parsed<T_ExtraColourLevels>[ 'text' ] = {
                    $: nomalized_input.text?.$ ?? DEFAULTS.text.$,
                    accent: nomalized_input.text?.accent ?? nomalized_input.text?.$ ?? DEFAULTS.text.accent,
                    min: nomalized_input.text?.min ?? nomalized_input.text?.$ ?? DEFAULTS.text.min,
                };

                const ui: Levels.Parsed<T_ExtraColourLevels>[ 'ui' ] = {
                    $: nomalized_input.ui?.$ ?? nomalized_input.text?.$ ?? DEFAULTS.ui.$,
                    accent: nomalized_input.ui?.accent ?? nomalized_input.text?.accent ?? nomalized_input.ui?.$ ?? DEFAULTS.ui.accent,
                    min: nomalized_input.ui?.min ?? nomalized_input.text?.min ?? nomalized_input.ui?.$ ?? DEFAULTS.ui.min,
                };

                const heading: Levels.Parsed<T_ExtraColourLevels>[ 'heading' ] = objectGenerator(
                    SingleMode.allHeadingLevels,
                    ( hdgNum ) => nomalized_input.heading?.[ hdgNum ] ?? text.accent ?? DEFAULTS.heading[ hdgNum ]
                );

                return {
                    background,
                    text,
                    ui,
                    heading,
                };
            }
        }



        /* Variations
         * ====================================================================== */



        /* All Together Now
         * ====================================================================== */

        /**
         * This is used by the build function, not by the constructor.
         * 
         * @since 0.1.0-alpha
         */
        export interface InputParam<
            T_Types extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
        > {

            description?: null | string;

            levels?: undefined | Levels.Input<T_Types[ 'colour' ][ 'extraLevels' ]>;

            variations?: undefined | {

                background?: Partial<
                    RequiredVariations<T_ColourName>[ 'background' ]
                > & {
                    [ K in T_Keyword_Background ]: T_ColourName;
                },

                universal?: Partial<
                    RequiredVariations<T_ColourName>[ 'universal' ]
                > & {
                    [ K in T_Keyword_Universal ]: T_ColourName;
                };

                text?: Partial<
                    RequiredVariations<T_ColourName>[ 'text' ]
                > & {
                    [ K in T_Keyword_Text ]: T_ColourName;
                };

                heading?: Partial<
                    RequiredVariations<T_ColourName>[ 'heading' ]
                > & {
                    [ key: number ]: T_ColourName;
                };

                interactive?: Partial<
                    RequiredVariations<T_ColourName>[ 'interactive' ]
                >;
            };
        };

        /**
         * @since 0.1.0-alpha
         */
        export type JsonReturn<
            T_Types extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
        > = {
            description?: undefined | string;
            data: Data<T_Types>;
            levelsInUse: {
                light: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
                dark: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
            }[];
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type ScssVars<
            T_Types extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]> = TokenTypes.Theme.ColourOption<T_Types[ 'colour' ]>,
        > = Data<T_Types> & {

            link: Data<T_Types>[ 'link' ] & {
                outline: Data<T_Types>[ 'link' ][ 'outline' ] & {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                };
            };

            system: {

                accent: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                background: {
                    $: __T_ColourOption;
                };

                button: {

                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };

                input: {

                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };

                link: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    visited: __T_ColourOption;
                };

                mark: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                selected: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                selection: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };

                text: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
            };
        };



        /* Set Builders
         * ====================================================================== */

        /**
         * Used by the {@link SingleMode.build} static function,
         * not meant to be exposed through the API.
         * 
         * @since 0.1.0-alpha
         * @internal
         */
        export namespace Build {

            /**
             * @since 0.1.0-alpha
             */
            export interface Param<T_Types extends TokenTypes.Theme.TypeParams> {
                levels: Levels.Parsed<T_Types[ 'colour' ][ 'extraLevels' ]>;
                variations: AllVariations<T_Types>;
            };

            /**
             * @since 0.1.0-alpha
             */
            export interface Param_ForcedColors<T_Types extends TokenTypes.Theme.TypeParams> {
                levels?: InputParam<T_Types>[ 'levels' ];
                variations: AllVariations<T_Types>;
            };

            export function colourOption<
                T_ColourName extends string,
                T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
            >(
                name: T_ColourName,
                level: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels,
            ): "black" | "white" | TokenTypes.Colour.TokenSlug<T_Types[ 'colour' ]> {
                // returns
                switch ( level ) {

                    case 'black':
                    case 'white':
                        return level;
                }

                return `${ name }-${ level }`;
            }

            export function completeVariations<T_Types extends TokenTypes.Theme.TypeParams>(
                clrNames: readonly T_ColourName[],
                input: InputParam<T_Types>[ 'variations' ],
            ): AllVariations<T_Types> {
                const clrNames_noBase = clrNames.filter( v => v !== 'base' );

                const base = 'base' as T_ColourName;
                const clr_1 = input?.universal?.primary ?? clrNames_noBase[ 0 ] ?? base;
                const clr_2 = input?.universal?.secondary ?? clrNames_noBase[ 1 ] ?? clr_1;
                const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[ 2 ] ?? clr_2;

                const def: RequiredVariations<T_ColourName> & { background: { primary?: T_ColourName; }; } = {
                    base: base,

                    background: {
                        grey: base,
                    },

                    universal: {
                        primary: clr_1,
                        secondary: clr_2,
                    },

                    text: {
                        active: clr_3,
                        disabled: base,
                        grey: base,
                    },

                    heading: objectGenerator(
                        SingleMode.allHeadingLevels,
                        ( hdgNum ) => hdgNum >= 9 ? base : hdgNum >= 7 ? clr_2 : clr_1
                    ),

                    interactive: {
                        hover: clr_2,
                        active: clr_3,
                        disabled: base,
                    },
                };

                if ( !input?.background ) {
                    def.background.primary = clr_1;
                }

                const vars: AllVariations<T_Types> = mergeArgs(
                    def,
                    input as RecursivePartial<RequiredVariations<T_ColourName>> & InputParam<T_Types>[ 'variations' ],
                    true
                );

                return vars;
            }

            /**
             * An easy way to generate a complete token set from limited inputs.
             * 
             * @since 0.1.0-alpha
             */
            export async function data<T_Types extends TokenTypes.Theme.TypeParams>(
                input: Param<T_Types>,
            ): Promise<Data<T_Types>> {

                type CompleteData = Data<T_Types>;

                const clrOpt = colourOption;

                const {
                    levels,
                    variations,
                } = input;

                const background: CompleteData[ 'background' ] = {
                    $: clrOpt( variations.base, levels.background.$ ),

                    ...objectMap( variations.background, ( [ key, clrName ] ) => clrOpt( clrName, levels.background.grey ) ),
                    ...objectMap( variations.universal, ( [ key, clrName ] ) => clrOpt( clrName, levels.background.accent ) ),

                    grey: clrOpt( variations.base, levels.background.grey ),
                };

                const text: CompleteData[ 'text' ] = {
                    $: clrOpt( variations.base, levels.text.$ ),

                    ...objectMap( variations.universal, ( [ key, clrName ] ) => clrOpt( clrName, levels.text.accent ) ),
                    ...objectMap( variations.text, ( [ key, clrName ] ) => clrOpt( clrName, levels.text.accent ) ),

                    disabled: clrOpt( variations.text.disabled, levels.text.min ),
                    grey: clrOpt( variations.text.disabled, levels.text.accent ),
                };

                const ui: CompleteData[ 'ui' ] = {
                    $: clrOpt( variations.base, levels.ui.$ ),

                    ...objectMap( variations.universal, ( [ key, clrName ] ) => clrOpt( clrName, levels.ui.accent ) ),
                    ...objectMap( variations.text, ( [ key, clrName ] ) => clrOpt( clrName, levels.ui.accent ) ),

                    disabled: clrOpt( variations.text.disabled, levels.ui.min ),
                    grey: clrOpt( variations.text.disabled, levels.ui.accent ),
                };

                const heading: CompleteData[ 'heading' ] = objectGenerator(
                    SingleMode.allHeadingLevels,
                    ( hdgNum ) => clrOpt( variations.heading[ hdgNum ] ?? variations.heading[ 10 ], levels.heading[ hdgNum ] )
                );

                const link: CompleteData[ 'link' ][ '$' ] = {
                    $: clrOpt( variations.universal.primary, levels.text.accent ),
                    visited: clrOpt( variations.universal.primary, levels.text.accent ),

                    ...objectMap( variations.interactive, ( [ key, clrName ] ) => clrOpt( clrName, levels.text.accent ) ),

                    disabled: clrOpt( variations.text.disabled, levels.text.min ),
                };

                const linkDecoration: CompleteData[ 'link' ][ 'decoration' ] = {
                    $: clrOpt( variations.universal.primary, levels.ui.accent ),
                    visited: clrOpt( variations.universal.primary, levels.ui.accent ),

                    hover: 'transparent',
                    active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    disabled: clrOpt( variations.text.disabled, levels.ui.min ),
                };

                const linkIcon: CompleteData[ 'link' ][ 'icon' ] = {
                    $: clrOpt( variations.base, levels.ui.accent ),
                    visited: clrOpt( variations.base, levels.ui.accent ),

                    hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                    active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    disabled: clrOpt( variations.text.disabled, levels.ui.min ),
                };

                const linkOutline: CompleteData[ 'link' ][ 'outline' ] = {
                    hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                    active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    disabled: clrOpt( variations.text.disabled, levels.ui.min ),
                };

                const singleButtonMaker = ( _primaryClr: T_ColourName ): CompleteData[ 'button' ][ 'primary' ] => {

                    const _secondaryClr = _primaryClr ==
                        variations.universal.primary
                        ? variations.universal.secondary
                        : _primaryClr === variations.universal.secondary
                            ? variations.text.active
                            : variations.universal.primary;

                    const _activeClr = _primaryClr ==
                        variations.text.active
                        ? variations.universal.secondary
                        : _secondaryClr == variations.text.active
                            ? variations.universal.primary
                            : variations.text.active;

                    return {

                        bg: {
                            $: clrOpt( _primaryClr, levels.text.accent ),
                            hover: clrOpt( _secondaryClr, levels.text.accent ),
                            active: clrOpt( _activeClr, levels.text.accent ),
                        },

                        border: {
                            $: clrOpt( _primaryClr, levels.text.accent ),
                            hover: clrOpt( _secondaryClr, levels.text.accent ),
                            active: clrOpt( _activeClr, levels.text.accent ),
                        },

                        outline: {
                            hover: clrOpt( _secondaryClr, levels.text.accent ),
                            active: clrOpt( _activeClr, levels.text.accent ),
                        },

                        text: {
                            $: clrOpt( variations.base, levels.background.$ ),
                            hover: clrOpt( variations.base, levels.background.$ ),
                            active: clrOpt( variations.base, levels.background.$ ),
                        },

                        ui: {
                            $: clrOpt( variations.base, levels.background.$ ),
                            hover: clrOpt( variations.base, levels.background.$ ),
                            active: clrOpt( variations.base, levels.background.$ ),
                        },
                    };
                };

                const button: CompleteData[ 'button' ] = {
                    ...objectMap(
                        variations.universal,
                        <K extends keyof CompleteData[ 'button' ]>(
                            [ key, clrName ]: [ K, T_ColourName ]
                        ) => singleButtonMaker( clrName ) as CompleteData[ 'button' ][ K ],
                    ),

                    disabled: {

                        bg: {
                            $: clrOpt( variations.base, levels.text.min ),
                            hover: clrOpt( variations.base, levels.text.min ),
                            active: clrOpt( variations.base, levels.text.min ),
                        },

                        border: {
                            $: clrOpt( variations.base, levels.text.min ),
                            hover: clrOpt( variations.base, levels.text.min ),
                            active: clrOpt( variations.base, levels.text.min ),
                        },

                        outline: {
                            hover: clrOpt( variations.base, levels.text.min ),
                            active: clrOpt( variations.base, levels.text.min ),
                        },

                        text: {
                            $: clrOpt( variations.base, levels.background.$ ),
                            hover: clrOpt( variations.base, levels.background.$ ),
                            active: clrOpt( variations.base, levels.background.$ ),
                        },

                        ui: {
                            $: clrOpt( variations.base, levels.background.$ ),
                            hover: clrOpt( variations.base, levels.background.$ ),
                            active: clrOpt( variations.base, levels.background.$ ),
                        },
                    },
                };

                const inputField = {

                    accent: {
                        $: clrOpt( variations.universal.primary, levels.ui.accent ),
                        hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                        active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    },

                    bg: {
                        $: clrOpt( variations.base, levels.background.$ ),
                        hover: clrOpt( variations.base, levels.background.$ ),
                        active: clrOpt( variations.base, levels.background.$ ),
                    },

                    border: {
                        $: clrOpt( variations.base, levels.ui.min ),
                        hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                        active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    },

                    placeholder: clrOpt( variations.base, levels.text.min ),

                    text: {
                        $: clrOpt( variations.base, levels.text.$ ),
                        hover: clrOpt( variations.base, levels.text.$ ),
                        active: clrOpt( variations.base, levels.text.$ ),
                    },
                } satisfies CompleteData[ 'input' ][ '$' ];

                const complete: CompleteData = {
                    background,

                    text,
                    ui,
                    heading,

                    selection: {
                        bg: clrOpt( variations.universal.primary, levels.text.accent ),
                        text: clrOpt( variations.base, levels.background.$ ),
                    },

                    link: {
                        $: link,
                        decoration: linkDecoration,
                        icon: linkIcon,
                        outline: linkOutline,
                    },

                    button,

                    input: {
                        $: inputField,
                        disabled: inputField,
                        readonly: inputField,
                    },

                    system: {
                        accent: {
                            bg: clrOpt( variations.universal.primary, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                        mark: {
                            bg: clrOpt( variations.text.active, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                        selected: {
                            bg: clrOpt( variations.interactive.hover, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                    },
                };

                return complete;
            }

            /**
             * An easy way to generate a complete token set from limited inputs.
             * 
             * @since 0.1.0-alpha
             */
            export async function forcedColors<T_Types extends TokenTypes.Theme.TypeParams>(
                input: Param_ForcedColors<T_Types>,
            ): Promise<Data<T_Types>> {
                type CompleteData = Data<T_Types>;

                const {
                    variations,
                } = input;

                const sysclr = {
                    background: 'Canvas',
                    text: 'CanvasText',
                } as const;

                const background: CompleteData[ 'background' ] = {
                    $: sysclr.background,
                    ...objectMap( variations.background, () => sysclr.background ),
                    ...objectMap( variations.universal, () => sysclr.background ),
                };

                const text: CompleteData[ 'text' ] = {
                    $: sysclr.text,

                    ...objectMap( variations.universal, () => sysclr.text ),
                    ...objectMap( variations.text, () => sysclr.text ),

                    active: 'ActiveText',
                    disabled: 'GrayText',
                    grey: 'GrayText',
                };

                const link: CompleteData[ 'link' ][ '$' ] = {
                    $: 'LinkText',
                    visited: 'VisitedText',
                    hover: 'ActiveText',
                    active: 'ActiveText',
                    disabled: 'GrayText',
                };

                const linkOutline: CompleteData[ 'link' ][ 'outline' ] = {
                    hover: 'ActiveText',
                    active: 'ActiveText',
                    disabled: 'GrayText',
                };

                const heading: CompleteData[ 'heading' ] = objectGenerator(
                    SingleMode.allHeadingLevels,
                    () => sysclr.text
                );

                const singleButton: CompleteData[ 'button' ][ 'primary' ] = {

                    bg: {
                        $: 'ButtonFace',
                        hover: 'SelectedItem',
                        active: 'ButtonFace',
                    },

                    border: {
                        $: [
                            'ButtonFace',
                            'ButtonBorder',
                        ],
                        active: [
                            'ButtonFace',
                            'ButtonBorder',
                        ],
                        hover: 'SelectedItem',
                    },

                    outline: {
                        active: [
                            'ButtonFace',
                            'ButtonBorder',
                        ],
                        hover: 'SelectedItem',
                    },

                    text: {
                        $: 'ButtonText',
                        hover: 'SelectedItemText',
                        active: 'ButtonText',
                    },

                    ui: {
                        $: 'ButtonText',
                        hover: 'SelectedItemText',
                        active: 'ButtonText',
                    },
                };

                const button: CompleteData[ 'button' ] = {
                    ...objectMap( variations.universal, () => singleButton ),
                    disabled: singleButton,
                };

                const inputField: CompleteData[ 'input' ][ '$' ] = {

                    accent: {
                        $: 'ActiveText',
                        hover: 'ActiveText',
                        active: 'ActiveText',
                    },

                    bg: {
                        $: 'Field',
                        hover: 'SelectedItem',
                        active: 'Field',
                    },

                    border: {
                        $: 'FieldText',
                        hover: 'SelectedItem',
                        active: 'FieldText',
                    },

                    placeholder: 'FieldText',

                    text: {
                        $: 'FieldText',
                        hover: 'SelectedItemText',
                        active: 'FieldText',
                    },
                };

                const complete: CompleteData = {
                    background,

                    text,
                    ui: text,
                    heading,

                    selection: {
                        bg: 'Highlight',
                        text: 'HighlightText',
                    },

                    link: {
                        $: link,
                        decoration: link,
                        icon: link,
                        outline: linkOutline,
                    },

                    button,

                    input: {
                        $: inputField,
                        disabled: inputField,
                        readonly: inputField,
                    },

                    system: {
                        accent: {
                            bg: [
                                'CanvasText',
                                'AccentColor',
                            ],
                            text: [
                                'Canvas',
                                'AccentColorText',
                            ],
                        },
                        mark: {
                            bg: [
                                'CanvasText',
                                'AccentColor',
                                'Mark',
                            ],
                            text: [
                                'Canvas',
                                'AccentColorText',
                                'MarkText',
                            ],
                        },
                        selected: {
                            bg: 'SelectedItem',
                            text: 'SelectedItemText',
                        },
                    },
                };

                return complete;
            }
        }
    }
}