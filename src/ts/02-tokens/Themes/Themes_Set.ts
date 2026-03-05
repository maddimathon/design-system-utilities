/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { RecursivePartial } from '@maddimathon/utility-typescript/types';

import {
    arrayUnique,
    mergeArgs,
    objectFlatten,
    objectMap,
} from '@maddimathon/utility-typescript';

import type {
    RequiredHeadingLevels,
    TokenTypes,
} from '../@types.js';

import type { RecursiveRecord } from '../../01-utilities/@types.js';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';

import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../../01-utilities/objectKeySort_Tokens.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams,
> extends AbstractTokens<{
    data: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    json: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    scss: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
}> {

    /**
     * Used instead of the constructor so that it can be async.
     * 
     * @since ___PKG_VERSION___ — Changed second & third param to colours object (as fourth param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    public static async build<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    >(
        name: T_ThemeTypes[ 'name' ],
        brightnessModes: T_ThemeTypes[ 'brightness' ],
        contrastModes: T_ThemeTypes[ 'contrast' ],

        colours: {
            names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
            allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
        },

        input: Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>,
    ) {
        const allBrightnessModes = [
            'light',
            'dark',
            ...brightnessModes,
        ] as const satisfies TokenTypes.Theme.Mode.Brightness<T_ThemeTypes[ 'brightness' ]>;

        const allContrastModes = [
            'low',
            'average',
            'high',
            ...contrastModes,
        ] as const satisfies TokenTypes.Theme.Mode.Contrast<T_ThemeTypes[ 'contrast' ]>;

        const forcedColours: Promise<Tokens_Themes_Set.SingleMode<
            T_ColourTypes,
            T_ThemeTypes,
            TokenTypes.Css.SystemColor
        >> = Tokens_Themes_Set.SingleMode.build<T_ColourTypes, T_ThemeTypes>(
            name,
            null,
            'forcedColors',
            colours,
            {
                ...input.forcedColours ?? {},
                variations: input.variations,
            },
            input.forcedColours?.overrides
        );

        const modes: Promise<TokenTypes.Theme.Mode.NestedObject<
            T_ThemeTypes,
            Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes>
        >> = objectGeneratorAsync(
            allBrightnessModes,
            async ( brightness ) =>
                objectGeneratorAsync(
                    allContrastModes,
                    async ( contrast ) =>
                        Tokens_Themes_Set.SingleMode.build<T_ColourTypes, T_ThemeTypes>(
                            name,
                            brightness,
                            contrast,
                            colours,
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
        ] ) => new Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>(
            name,
            brightnessModes,
            contrastModes,
            colours,
            forcedColours_resolved,
            modes_resolved,
        ) ) );
    }

    public get data(): Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes> {
        return {
            name: this.name ?? 'default',

            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.data
                ) as TokenTypes.Theme.Mode.ContrastRecord<
                    T_ThemeTypes,
                    Tokens_Themes_Set.SingleMode.Data<T_ColourTypes, T_ThemeTypes>
                >
            ),

            forcedColours: this.forcedColours.data,
        };
    }

    /**
     * @since ___PKG_VERSION___ — Changed second & third param to colours object (as fourth param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected constructor (
        /** Name for this shade set. */
        protected readonly name: T_ThemeTypes[ 'name' ],
        protected readonly brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[],
        protected readonly contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[],

        protected readonly colours: {
            names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
            allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
        },

        protected readonly forcedColours: Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>,

        protected readonly modes: TokenTypes.Theme.Mode.NestedObject<
            T_ThemeTypes,
            Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes>
        >,
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes> {

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

            forcedColours: this.forcedColours.toJSON(),

            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.toJSON()
                ) as TokenTypes.Theme.Mode.ContrastRecord<
                    T_ThemeTypes,
                    Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes>
                >
            ),

            levelsInUse: arrayUnique( levelsInUse.concat( levelsInUse_dark ) ).sort(),
        };
    }

    public toScssVars(): Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes> {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(
                this.modes,
                ( [ brightnessMode ] ) => objectMap(
                    this.modes[ brightnessMode ],
                    ( [ __key, value ] ) => value.toScssVars()
                ) as TokenTypes.Theme.Mode.ContrastRecord<
                    T_ThemeTypes,
                    Tokens_Themes_Set.SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes>
                >
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
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        name: T_ThemeTypes[ 'name' ];
        forcedColours: Tokens_Themes_Set.SingleMode.Data<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
    } & TokenTypes.Theme.Mode.NestedObject<
        T_ThemeTypes,
        Tokens_Themes_Set.SingleMode.Data<T_ColourTypes, T_ThemeTypes>
    >;

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        __T_ThisThemeName extends T_ThemeTypes[ 'name' ] = T_ThemeTypes[ 'name' ],
    > = {
        name: __T_ThisThemeName;
        variations?: Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes>[ 'variations' ];
        forcedColours?: Omit<
            Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>,
            "levels" | "variations"
        > & {
            overrides?: Tokens_Themes_Set.SingleMode.Data.Partial<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>,
        };
    } & TokenTypes.Theme.Mode.PartialNestedObject<
        T_ThemeTypes,
        Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes>
    >;

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        name: T_ThemeTypes[ 'name' ];
        levelsInUse: ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[];
        forcedColours: Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
    } & TokenTypes.Theme.Mode.NestedObject<
        T_ThemeTypes,
        Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes>
    >;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        'forced-colors': Tokens_Themes_Set.SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes>;
    } & TokenTypes.Theme.Mode.NestedObject<
        T_ThemeTypes,
        Tokens_Themes_Set.SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes>
    >;

    /**
     * Generates a complete token object for the design system.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    export class SingleMode<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
    > extends AbstractTokens<{
        data: SingleMode.Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        json: SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        scss: SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
    }> {

        public static async build<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        >(
            themeName: "default" | T_ThemeTypes[ 'name' ],
            brightness: null,
            constrast: "forcedColors",

            colours: {
                names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
                allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
            },

            input: SingleMode.InputParam<
                NoInfer<T_ColourTypes>,
                T_ThemeTypes,
                TokenTypes.Css.SystemColor
            >,
            overrides?: SingleMode.Data.Partial<
                NoInfer<T_ColourTypes>,
                NoInfer<T_ThemeTypes>,
                TokenTypes.Css.SystemColor
            >,
        ): Promise<SingleMode<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>>;

        public static async build<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        >(
            themeName: "default" | T_ThemeTypes[ 'name' ],
            brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>,
            constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>,

            colours: {
                names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
                allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
            },

            input: SingleMode.InputParam<
                NoInfer<T_ColourTypes>,
                T_ThemeTypes
            >,
            overrides?: SingleMode.Data.Partial<
                NoInfer<T_ColourTypes>,
                NoInfer<T_ThemeTypes>
            >,
        ): Promise<SingleMode<T_ColourTypes, T_ThemeTypes>>;

        /**
         * An easy way to generate a complete token set from limited inputs.
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Changed fourth param to colours object with both names and all levels set.
         */
        public static async build<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        >(
            themeName: "default" | T_ThemeTypes[ 'name' ],
            brightness: null | TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>,
            constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes> | "forcedColors",

            colours: {
                names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
                allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
            },

            input: SingleMode.InputParam<
                NoInfer<T_ColourTypes>,
                T_ThemeTypes
            >,
            inputOverrides: SingleMode.Data.Partial<
                NoInfer<T_ColourTypes>,
                NoInfer<T_ThemeTypes>
            > = {},
        ): Promise<SingleMode<T_ColourTypes, T_ThemeTypes>> {
            const defaultLevels: SingleMode.Levels.Required<never> = constrast !== 'forcedColors'
                ? SingleMode.Levels.DEFAULT[ constrast ]
                : SingleMode.Levels.DEFAULT.max;

            const levels = SingleMode.Levels.parse<T_ColourTypes[ 'extraLevels' ]>(
                defaultLevels,
                input.levels,
            );

            const variations = SingleMode.Build.completeVariations<T_ColourTypes, T_ThemeTypes>( colours.names, input.variations );

            const clrOpt = SingleMode.Build.colourOption;

            let description: null | string = input.description ?? null;

            let defaultOverrides: SingleMode.Data.Partial<T_ColourTypes, T_ThemeTypes> = {};

            const levels_background_vals = Object.values( levels.background );

            const level_background_max = levels_background_vals.includes( 'black' )
                ? 'black'
                : String(
                    Math.max( ...levels_background_vals.map( Number ).filter(
                        num => !Number.isNaN( num )
                    ) )
                ) as ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ];

            // returns if forced colours
            switch ( constrast ) {

                case 'average':
                    description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';

                    if ( !inputOverrides.selection ) {

                        defaultOverrides.selection = {
                            background: clrOpt(
                                variations.interactive.hover,
                                ColourUtilities.Levels.augmentor(
                                    colours.allLevels,
                                    level_background_max,
                                    150,
                                ),
                            ),
                            text: clrOpt( variations.base, '800' ),
                        };
                    }
                    break;

                case 'low':
                    description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';

                    if ( !inputOverrides.selection ) {

                        defaultOverrides.selection = {
                            background: clrOpt(
                                variations.interactive.hover,
                                ColourUtilities.Levels.augmentor(
                                    colours.allLevels,
                                    level_background_max,
                                    100,
                                ),
                            ),
                            text: clrOpt( variations.base, '800' ),
                        };
                    }
                    break;

                case 'high':
                    description = description ?? 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                    break;

                case 'max':
                    description = description ?? 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';
                    break;

                case 'forcedColors':
                    return SingleMode.Build.forcedColors<T_ColourTypes, T_ThemeTypes>(
                        {
                            ...input,
                            variations,
                        },
                        inputOverrides as Tokens_Themes_Set.SingleMode.Data.Partial<
                            T_ColourTypes,
                            T_ThemeTypes,
                            TokenTypes.Css.SystemColor
                        >,
                    ).then(
                        ( completedData ) => new SingleMode<
                            T_ColourTypes,
                            T_ThemeTypes,
                            TokenTypes.Css.SystemColor
                        >(
                            themeName,
                            brightness,
                            constrast,
                            'This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!',
                            [],
                            completedData,
                        )
                    );
            }

            type AnyLevel = "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;

            const allLevelsInUse = (
                Object.values(
                    objectFlatten( levels as unknown as RecursiveRecord<string, AnyLevel> )
                ) as AnyLevel[]
            ).concat(
                Object.values(
                    objectFlatten( inputOverrides as RecursiveRecord<string, TokenTypes.Theme.ColourOption<T_ColourTypes>> )
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

            return SingleMode.Build.data<T_ColourTypes, T_ThemeTypes>(
                { levels, variations },
                mergeArgs( defaultOverrides, inputOverrides, true ),
            ).then(
                ( completedData ) => new SingleMode<T_ColourTypes, T_ThemeTypes>(
                    themeName,
                    brightness,
                    constrast,

                    description,
                    levelsInUse,

                    completedData,
                )
            );
        }

        protected constructor (
            public readonly name: "default" | T_ThemeTypes[ 'name' ],
            public readonly brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>,
            public readonly constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>,
            public readonly description: null | string,
            public readonly levelsInUse: ( "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[],
            public readonly data: SingleMode.Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption>,
        ) {
            super();
        }

        public toJSON(): SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, __T_ColourOption> {

            const levelsInUse = this.levelsInUse.map( ( light ) => ( {
                light,
                dark: ColourUtilities.Levels.toDark( light ),
            } ) );

            return {
                name: this.name,
                brightness: this.brightness,
                constrast: this.constrast,
                description: this.description ?? undefined,

                data: objectKeySort_Tokens(
                    {
                        ...this.data,

                        button: objectMap(
                            this.data.button,
                            ( [ key, value ] ) => ( {
                                ...value,
                                outline: {
                                    $: value.outline.hover,
                                    ...value.outline,
                                },
                            } )
                        ),

                        link: {
                            ...this.data.link,

                            outline: {
                                $: this.data.link.outline.hover,
                                visited: this.data.link.outline.hover,

                                ...this.data.link.outline,
                            },
                        },
                    },
                    true,
                ),

                levelsInUse,
            };
        }

        public toScssVars(): SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption> {

            return {
                ...this.toJSON().data,

                system: objectKeySort_Tokens(
                    {
                        ...this.data.system,

                        background: this.data.background,

                        button: {
                            bg: this.data.button.primary.background,
                            border: this.data.button.primary.border,
                            text: this.data.button.primary.text,
                        },

                        input: {
                            bg: {
                                $: this.data.input.$.background,
                                hover: this.data.input.$.background,
                                active: this.data.input.$.background,
                            },

                            border: {
                                $: this.data.input.$.border.$,
                                hover: this.data.input.$.border.hover,
                                active: this.data.input.$.border.active,
                            },

                            text: {
                                $: this.data.input.$.text,
                                hover: this.data.input.$.text,
                                active: this.data.input.$.text,
                            },
                        },

                        link: {
                            $: this.data.link.$.$,
                            active: this.data.link.$.active,
                            hover: this.data.link.$.hover,
                            visited: this.data.link.$.visited,
                        },

                        selection: {
                            bg: this.data.selection.background,
                            text: this.data.selection.text,
                        },

                        text: {
                            $: this.data.text.$,
                            active: this.data.text.active,
                            disabled: this.data.text.disabled,
                        },
                    } satisfies SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption>[ 'system' ]
                ),
            } satisfies SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        }
    }

    /**
     * Utilities for the {@link SingleMode} class.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    export namespace SingleMode {

        type InteractiveStyles<T_StyleValue> = {
            [ S in "$" | "hover" | "active" ]: T_StyleValue;
        };

        type InteractiveStylesWithFocus<T_StyleValue> = {
            [ S in "$" | "hover" | "focus" | "active" ]: T_StyleValue;
        };

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
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
        > = {
            background: {
                $: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'background' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'background' ] ]: __T_ColourOption;
            },

            text: {
                $: __T_ColourOption,
            } & {
                [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]: __T_ColourOption;
            },

            ui: {
                $: __T_ColourOption,
            } & {
                [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: __T_ColourOption;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]: __T_ColourOption;
            },

            heading: {
                [ L in RequiredHeadingLevels ]: __T_ColourOption;
            };

            selection: {
                background: __T_ColourOption,
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
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]: __T_ColourOption;
                },

                /**
                 * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                 */
                decoration: {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]: __T_ColourOption;
                },

                icon: {
                    $: __T_ColourOption,
                    visited: __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]: __T_ColourOption;
                },

                /**
                 * Used for the focus outline and similar elements.
                 * 
                 * @since 0.1.1-alpha.0
                 */
                outline: {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]: __T_ColourOption;
                },
            },

            button: {
                [ K in 'primary' | 'secondary' | 'disabled' ]: Data.Button<
                    T_ColourTypes,
                    __T_ColourOption
                >;
            } & {
                [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: Data.Button<
                    T_ColourTypes,
                    __T_ColourOption
                >;
            },

            input: {
                [ K in "$" | "disabled" | "readonly" ]: Data.Input<T_ColourTypes, __T_ColourOption>;
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
                background: InteractiveStyles<__T_ColourOption>,
                border: InteractiveStyles<__T_ColourOption>,
                outline: Omit<InteractiveStyles<__T_ColourOption>, '$'>,
                text: InteractiveStyles<__T_ColourOption>,
                ui: InteractiveStyles<__T_ColourOption>,
            };

            /**
             * @since ___PKG_VERSION___
             */
            export type Input<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
            > = {
                accent: InteractiveStylesWithFocus<__T_ColourOption>;
                background: __T_ColourOption;
                border: InteractiveStylesWithFocus<__T_ColourOption>;
                placeholder: __T_ColourOption;
                text: __T_ColourOption;
            };

            /**
             * @since 0.1.0-alpha
             * @since ___PKG_VERSION___ — Moved to SingleMode.Data and renamed.
             */
            export type Partial<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
                __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
            > = {
                background?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'background' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'background' ] ]?: undefined | __T_ColourOption;
                },

                text?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]?: undefined | __T_ColourOption;
                },

                ui?: undefined | {
                    $?: undefined | __T_ColourOption,
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]?: undefined | __T_ColourOption;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]?: undefined | __T_ColourOption;
                },

                heading?: undefined | {
                    [ L in RequiredHeadingLevels ]?: undefined | __T_ColourOption;
                };

                selection?: undefined | {
                    background: __T_ColourOption,
                    text: __T_ColourOption,
                },

                link?: {

                    $: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    /**
                     * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                     */
                    decoration?: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    icon?: undefined | {
                        $?: undefined | __T_ColourOption,
                        visited?: undefined | __T_ColourOption,
                    } & {
                        [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },

                    outline?: undefined | {
                        [ K in keyof RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ] ]?: undefined | __T_ColourOption;
                    },
                },

                button?: undefined | {
                    [ K in 'primary' | 'secondary' | 'disabled' ]?: undefined | Data.Button<T_ColourTypes, __T_ColourOption>;
                } & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]?: undefined | Data.Button<T_ColourTypes, __T_ColourOption>;
                },

                input?: undefined | {
                    [ K in "$" | "disabled" | "readonly" ]?: undefined | Data.Input<T_ColourTypes, __T_ColourOption>;
                },

                system?: undefined | {
                    accent?: undefined | {
                        bg: __T_ColourOption,
                        text: __T_ColourOption,
                    },
                    mark?: undefined | {
                        bg: __T_ColourOption,
                        text: __T_ColourOption,
                    },
                    selected?: undefined | {
                        bg: __T_ColourOption,
                        text: __T_ColourOption,
                    },
                },
            };
        }

        /** @internal @private */
        export interface RequiredVariations<
            T_ColourName extends string,
        > {
            base: TokenTypes.Colour.GenericName<T_ColourName>;

            background: {
                $: TokenTypes.Colour.GenericName<T_ColourName>;
                bright: TokenTypes.Colour.GenericName<T_ColourName>;
                grey: TokenTypes.Colour.GenericName<T_ColourName>;
            },

            universal: {
                primary: TokenTypes.Colour.GenericName<T_ColourName>;
                secondary: TokenTypes.Colour.GenericName<T_ColourName>;
            };

            text: {
                active: TokenTypes.Colour.GenericName<T_ColourName>;
                disabled: TokenTypes.Colour.GenericName<T_ColourName>;
                grey: TokenTypes.Colour.GenericName<T_ColourName>;
            };

            heading: {
                [ L in RequiredHeadingLevels ]: TokenTypes.Colour.GenericName<T_ColourName>;
            };

            interactive: {
                active: TokenTypes.Colour.GenericName<T_ColourName>;
                hover: TokenTypes.Colour.GenericName<T_ColourName>;
                disabled: TokenTypes.Colour.GenericName<T_ColourName>;
            };
        };

        /** @internal @private */
        export interface AllVariations<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
        > {
            base: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;

            background: RequiredVariations<T_ColourTypes[ 'names' ]>[ 'background' ] & {
                [ K in T_ThemeTypes[ 'variations' ][ 'background' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
            };

            universal: RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ] & {
                [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
            };

            text: RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ] & {
                [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
            };

            heading: RequiredVariations<T_ColourTypes[ 'names' ]>[ 'heading' ] & {
                [ key: number ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
            };

            interactive: RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ];
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
                background?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentBrightGrey<T_ExtraColourLevels>>;
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
                background: Levels.Set.AccentBrightGrey<T_ExtraColourLevels>;
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
                background: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentBrightGrey<T_ExtraColourLevels>;
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
                 * @since ___PKG_VERSION___
                 */
                export interface AccentBrightGrey<
                    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
                > {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    bright: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    grey: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
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
            }

            /**
             * @since 0.1.1-alpha.0
             * @since ___PKG_VERSION___ — Moved to SingleMode.Levels and renamed.
             */
            export namespace DEFAULT {

                export const average = {
                    background: {
                        $: '150',
                        bright: '100',
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
                        bright: 'white',
                        accent: '150',
                        grey: '150',
                    },
                    text: {
                        $: '800',
                        accent: '750',
                        min: '700',
                    },
                    ui: {
                        $: '800',
                        accent: '750',
                        min: '700',
                    },
                    heading: {
                        1: '800',
                        2: '750',
                        3: '750',
                        4: '750',
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
                        $: '250',
                        bright: '200',
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
                        1: '700',
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

                    text: {
                        $: 'black',
                        accent: '850',
                        min: '850',
                    },
                    ui: {
                        $: 'black',
                        accent: '850',
                        min: '850',
                    },

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
                            bright: defaults?.background,
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
                    bright: nomalized_input.background?.bright ?? nomalized_input.background?.$ ?? DEFAULTS.background.bright,
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
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
        > {

            description?: null | string;

            levels?: undefined | Levels.Input<T_ColourTypes[ 'extraLevels' ]>;

            variations?: undefined | {

                background?: Partial<
                    RequiredVariations<T_ColourTypes[ 'names' ]>[ 'background' ]
                > & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'background' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                },

                universal?: Partial<
                    RequiredVariations<T_ColourTypes[ 'names' ]>[ 'universal' ]
                > & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'universal' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                };

                text?: Partial<
                    RequiredVariations<T_ColourTypes[ 'names' ]>[ 'text' ]
                > & {
                    [ K in T_ThemeTypes[ 'variations' ][ 'text' ] ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                };

                heading?: Partial<
                    RequiredVariations<T_ColourTypes[ 'names' ]>[ 'heading' ]
                > & {
                    [ key: number ]: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                };

                interactive?: Partial<
                    RequiredVariations<T_ColourTypes[ 'names' ]>[ 'interactive' ]
                >;
            };
        };

        /**
         * @since 0.1.0-alpha
         */
        export type JsonReturn<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
        > = {
            name: "default" | T_ThemeTypes[ 'name' ];
            brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>;
            constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>;
            description?: undefined | string;

            data: Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption> & {

                button: {
                    [ K in keyof Data<T_ColourTypes, T_ThemeTypes>[ 'button' ] ]: Data.Button<
                        T_ColourTypes,
                        __T_ColourOption
                    > & {
                        outline: InteractiveStyles<__T_ColourOption>;
                    };
                };

                link: Data<T_ColourTypes, T_ThemeTypes>[ 'link' ] & {
                    outline: Data<T_ColourTypes, T_ThemeTypes>[ 'link' ][ 'outline' ] & {
                        $: __T_ColourOption,
                        visited: __T_ColourOption,
                    };
                };
            };

            levelsInUse: {
                light: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
                dark: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
            }[];
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type ScssVars<
            T_ColourTypes extends TokenTypes.Colour.TypeParams,
            T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>,
        > = Data<T_ColourTypes, T_ThemeTypes> & {

            button: {
                [ K in keyof Data<T_ColourTypes, T_ThemeTypes>[ 'button' ] ]: Data.Button<
                    T_ColourTypes,
                    __T_ColourOption
                > & {
                    outline: InteractiveStyles<__T_ColourOption>;
                };
            };

            link: Data<T_ColourTypes, T_ThemeTypes>[ 'link' ] & {
                outline: Data<T_ColourTypes, T_ThemeTypes>[ 'link' ][ 'outline' ] & {
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
            export interface Param<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            > {
                levels: Levels.Parsed<T_ColourTypes[ 'extraLevels' ]>;
                variations: AllVariations<T_ColourTypes, T_ThemeTypes>;
            };

            /**
             * @since 0.1.0-alpha
             */
            export interface Param_ForcedColors<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            > {
                levels?: InputParam<T_ColourTypes, T_ThemeTypes>[ 'levels' ];
                variations: AllVariations<T_ColourTypes, T_ThemeTypes>;
            };

            export function colourOption<T_ColourTypes extends TokenTypes.Colour.TypeParams>(
                name: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>,
                level: "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ],
            ): "black" | "white" | TokenTypes.Colour.TokenSlug<T_ColourTypes[ 'names' ], T_ColourTypes[ 'extraLevels' ]> {
                // returns
                switch ( level ) {

                    case 'black':
                    case 'white':
                        return level;
                }

                return `${ name }-${ level }`;
            }

            export function completeVariations<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            >(
                clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>,
                input: InputParam<T_ColourTypes, T_ThemeTypes>[ 'variations' ],
            ): AllVariations<T_ColourTypes, T_ThemeTypes> {
                const clrNames_noBase = clrNames.filter( v => v !== 'base' );

                const base = 'base';
                const clr_1 = input?.universal?.primary ?? clrNames_noBase[ 0 ] ?? base;
                const clr_2 = input?.universal?.secondary ?? clrNames_noBase[ 1 ] ?? clr_1;
                const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[ 2 ] ?? clr_2;

                const def: RequiredVariations<T_ColourTypes[ 'names' ]> & {
                    background: {
                        primary?: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                    };
                } = {
                    base: base,

                    background: {
                        $: base,
                        bright: base,
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

                const vars: AllVariations<T_ColourTypes, T_ThemeTypes> = mergeArgs(
                    def,
                    input as RecursivePartial<RequiredVariations<T_ColourTypes[ 'names' ]>> & InputParam<T_ColourTypes, T_ThemeTypes>[ 'variations' ],
                    true
                );

                return vars;
            }

            /**
             * An easy way to generate a complete token set from limited inputs.
             * 
             * @since 0.1.0-alpha
             */
            export async function data<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            >(
                inputParam: Param<T_ColourTypes, T_ThemeTypes>,
                overrides: Data.Partial<
                    NoInfer<T_ColourTypes>,
                    NoInfer<T_ThemeTypes>
                > = {},
            ): Promise<Data<T_ColourTypes, T_ThemeTypes>> {
                type CompleteData = Data<T_ColourTypes, T_ThemeTypes>;

                const clrOpt = colourOption;

                const {
                    levels,
                    variations,
                } = inputParam;

                const dataCompleter = <
                    T_VariationKey extends "background" | "text",
                    T_LevelsKey extends "background" | "text" | "ui" = T_VariationKey,
                >(
                    _variation: T_VariationKey,
                    _levels: T_LevelsKey | null = null,
                    _opts: ( "includeUniversal" )[] = [],
                ): CompleteData[ T_VariationKey ] => {

                    const _overrides = overrides[ _variation ] ?? {};

                    const _variationKey = _variation in variations
                        ? _variation as keyof typeof variations & T_VariationKey
                        : 'universal';

                    const _variationsObj = _opts.includes( 'includeUniversal' )
                        ? {
                            ...variations.universal,
                            ...variations[ _variationKey ],
                        }
                        : variations[ _variationKey ];

                    const _levelsKey = _levels && _levels in levels ? _levels : _variation;

                    return objectMap(
                        {
                            $: variations.base,
                            ..._variationsObj,
                        } as typeof _variationsObj,
                        ( [ key, clrName ] ): TokenTypes.Theme.ColourOption<T_ColourTypes> => {
                            // returns
                            if ( _overrides[ key as keyof typeof _overrides ] ) {
                                return _overrides[ key as keyof typeof _overrides ];
                            }

                            let _lvl: undefined | "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ] =
                                levels[ _levelsKey ][ key as "$" ];

                            if ( !_lvl && key === 'disabled' ) {
                                _lvl = ( levels[ _levelsKey ] as Levels.Set.AccentMin<T_ColourTypes[ 'extraLevels' ]> ).min;
                            }

                            return clrOpt( clrName, _lvl ?? levels[ _levelsKey ].accent );
                        },
                    ) as CompleteData[ T_VariationKey ];
                };

                const background = dataCompleter( 'background', null, [ 'includeUniversal' ] );

                const text: CompleteData[ 'text' ] = dataCompleter( 'text', null, [ 'includeUniversal' ] );

                const ui: CompleteData[ 'ui' ] = dataCompleter( 'text', 'ui', [ 'includeUniversal' ] );

                const heading: CompleteData[ 'heading' ] = objectGenerator(
                    SingleMode.allHeadingLevels,
                    ( hdgNum ) => overrides.heading?.[ hdgNum ] ?? clrOpt(
                        variations.heading[ hdgNum ] ?? variations.heading[ 10 ],
                        levels.heading[ hdgNum ],
                    )
                );

                const linkCompleter = <
                    T_SubKey extends "$" | "decoration" | "icon",
                    T_LevelsKey extends "text" | "ui",
                >(
                    _subKey: T_SubKey,
                    _levelsKey: T_LevelsKey,
                ) => {

                    const _overrides = overrides.link?.[ _subKey ];

                    const _fallbackObj = _levelsKey === 'ui' ? ui : text;

                    const _defaultClr = _overrides?.$ ?? (
                        _subKey === 'icon'
                            ? _fallbackObj.grey
                            : _fallbackObj.primary
                    );

                    return {
                        $: _defaultClr,
                        visited: _overrides?.visited ?? _defaultClr,

                        ...objectMap(
                            variations.interactive,
                            ( [ _key, _clrName ] ) => {
                                // returns
                                if ( _overrides?.[ _key ] ) {
                                    return _overrides[ _key ];
                                }

                                // returns on match
                                switch ( _key ) {

                                    case 'disabled':
                                        return clrOpt( _clrName, levels[ _levelsKey ].min );

                                    case 'hover':
                                        // returns
                                        if ( _subKey === 'decoration' ) {
                                            return 'transparent';
                                        }
                                        break;
                                }

                                return clrOpt( _clrName, levels[ _levelsKey ].accent );
                            },
                        ),
                    } satisfies CompleteData[ 'link' ][ T_SubKey ];
                };

                const linkOutline: CompleteData[ 'link' ][ 'outline' ] = objectMap(
                    variations.interactive,
                    ( [ key, clrName ] ) =>
                        overrides.link?.outline?.[ key ]
                            ?? key === 'disabled'
                            ? clrOpt( clrName, levels.ui.min )
                            : clrOpt( clrName, levels.ui.accent )
                );

                const singleButtonMaker = (
                    _key: keyof CompleteData[ 'button' ],
                    _primaryClr: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>,
                ): CompleteData[ 'button' ][ 'primary' ] => {
                    let _hoverClr: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                    let _activeClr: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;

                    let _hoverClr_outline: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;
                    let _activeClr_outline: TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]>;

                    if ( _key === 'disabled' ) {
                        _hoverClr = _primaryClr;
                        _activeClr = _primaryClr;

                        _hoverClr_outline = variations.interactive.hover;
                        _activeClr_outline = variations.interactive.active;
                    } else {

                        _hoverClr = _primaryClr === variations.interactive.hover
                            ? variations.interactive.active
                            : variations.interactive.hover;

                        _activeClr = _hoverClr === variations.interactive.active
                            ? variations.universal.primary
                            : variations.interactive.active;

                        _hoverClr_outline = _hoverClr;
                        _activeClr_outline = _activeClr;
                    }

                    const textOrBg_clr = clrOpt( variations.base, levels.background.$ );

                    const textOrBg = {
                        $: textOrBg_clr,
                        hover: textOrBg_clr,
                        active: textOrBg_clr,
                    };

                    return {
                        background: {
                            $: clrOpt( _primaryClr, levels.text.accent ),
                            hover: clrOpt( _hoverClr, levels.text.accent ),
                            active: clrOpt( _activeClr, levels.text.accent ),
                        },

                        border: {
                            $: clrOpt( _primaryClr, levels.text.accent ),
                            hover: clrOpt( _hoverClr, levels.text.accent ),
                            active: clrOpt( _activeClr, levels.text.accent ),
                        },

                        outline: {
                            hover: clrOpt( _hoverClr_outline, levels.text.accent ),
                            active: clrOpt( _activeClr_outline, levels.text.accent ),
                        },

                        text: textOrBg,
                        ui: textOrBg,
                    };
                };

                const button: CompleteData[ 'button' ] = objectMap(
                    {
                        ...variations.universal,
                        disabled: variations.interactive.disabled,
                    },
                    <K extends keyof CompleteData[ 'button' ]>(
                        [ key, clrName ]: [ K, TokenTypes.Colour.GenericName<T_ColourTypes[ 'names' ]> ]
                    ) => overrides.button?.[ key ] ?? (
                        singleButtonMaker( key, clrName ) as CompleteData[ 'button' ][ K ]
                    ),
                );

                const singleInputMaker = (
                    _variation: "primary" | "readonly",
                ): CompleteData[ 'input' ][ '$' ] => {

                    const _active_ui = clrOpt( variations.interactive.active, levels.ui.accent );
                    const _hover_ui = clrOpt( variations.interactive.hover, levels.ui.accent );

                    const _accent: CompleteData[ 'input' ][ '$' ][ 'accent' ] = {
                        $: ui[ _variation as Exclude<typeof _variation, 'readonly'> ] ?? ui.primary,
                        focus: _hover_ui,
                        hover: _hover_ui,
                        active: _active_ui,
                    };

                    const _border: CompleteData[ 'input' ][ '$' ][ 'border' ] = { ..._accent };

                    if ( _variation === 'readonly' ) {
                        _border.$ = ui.grey;
                        _border.hover = ui.grey;
                    }

                    return {
                        accent: _accent,
                        background: _variation === 'readonly' ? background.grey : background.bright,
                        border: _border,
                        placeholder: text.disabled,
                        text: text.$,
                    };
                };

                const inputField: CompleteData[ 'input' ] = {
                    $: overrides.input?.$ ?? singleInputMaker( 'primary' ),

                    disabled: overrides.input?.disabled ?? {

                        accent: {
                            $: ui.disabled,
                            focus: ui.disabled,
                            hover: ui.disabled,
                            active: ui.disabled,
                        },

                        background: background.grey,

                        border: {
                            $: ui.disabled,
                            focus: ui.disabled,
                            hover: ui.disabled,
                            active: ui.disabled,
                        },

                        placeholder: text.disabled,
                        text: text.disabled,
                    },

                    readonly: overrides.input?.readonly ?? singleInputMaker( 'readonly' ),
                };

                return {
                    background,
                    button,
                    heading,

                    input: inputField,

                    link: {
                        $: linkCompleter( '$', 'text' ),
                        decoration: linkCompleter( 'decoration', 'ui' ),
                        icon: linkCompleter( 'icon', 'ui' ),
                        outline: linkOutline,
                    },

                    selection: overrides.selection ?? {
                        background: clrOpt( variations.interactive.hover, levels.text.accent ),
                        text: clrOpt( variations.base, levels.background.$ ),
                    },

                    text,
                    ui,

                    system: {
                        accent: overrides.system?.accent ?? {
                            bg: clrOpt( variations.universal.primary, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                        mark: overrides.system?.mark ?? {
                            bg: clrOpt( variations.text.active, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                        selected: overrides.system?.selected ?? {
                            bg: clrOpt( variations.interactive.hover, levels.text.accent ),
                            text: clrOpt( variations.base, levels.background.$ ),
                        },
                    },
                };
            }

            /**
             * An easy way to generate a complete token set from limited inputs.
             * 
             * @since 0.1.0-alpha
             */
            export async function forcedColors<
                T_ColourTypes extends TokenTypes.Colour.TypeParams,
                T_ThemeTypes extends TokenTypes.Theme.TypeParams,
            >(
                input: Param_ForcedColors<T_ColourTypes, T_ThemeTypes>,
                overrides: Data.Partial<
                    NoInfer<T_ColourTypes>,
                    NoInfer<T_ThemeTypes>,
                    TokenTypes.Css.SystemColor
                >,
            ): Promise<Data<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>> {
                type CompleteData = Data<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;

                const {
                    variations,
                } = input;

                const sysclr = {
                    background: overrides.background?.$ ?? 'Canvas',
                    text: {
                        $: overrides.text?.$ ?? 'CanvasText',
                        active: overrides.text?.active ?? 'ActiveText',
                        disabled: overrides.text?.disabled ?? 'GrayText',
                        grey: overrides.text?.grey ?? 'GrayText',
                    } as {
                        $: TokenTypes.Css.SystemColor,
                        active: TokenTypes.Css.SystemColor,
                        disabled: TokenTypes.Css.SystemColor,
                        grey: TokenTypes.Css.SystemColor,
                        [ key: string ]: TokenTypes.Css.SystemColor,
                    },
                } as const;

                const background: CompleteData[ 'background' ] = {
                    ...objectMap( variations.background, ( [ key ] ) => overrides.background?.[ key ] ?? sysclr.background ),
                    ...objectMap( variations.universal, ( [ key ] ) => overrides.background?.[ key ] ?? sysclr.background ),
                };

                const text: CompleteData[ 'text' ] = {
                    $: sysclr.text.$,

                    ...objectMap( variations.universal, ( [ key ] ) => overrides.text?.[ key ] ?? sysclr.text[ key ] ?? sysclr.text.$ ),
                    ...objectMap( variations.text, ( [ key ] ) => overrides.text?.[ key ] ?? sysclr.text[ key ] ?? sysclr.text.$ ),
                };

                const ui: CompleteData[ 'ui' ] = mergeArgs( text, overrides.ui as Partial<CompleteData[ 'ui' ]> );

                const link: CompleteData[ 'link' ][ '$' ] = {
                    $: overrides.link?.$?.$ ?? 'LinkText',
                    visited: overrides.link?.$?.visited ?? 'VisitedText',

                    hover: overrides.link?.$?.hover ?? sysclr.text.active,
                    active: overrides.link?.$?.active ?? sysclr.text.active,
                    disabled: overrides.link?.$?.disabled ?? text.disabled,
                };

                const linkOutline: CompleteData[ 'link' ][ 'outline' ] = {
                    hover: overrides.link?.outline?.hover ?? link.hover,
                    active: overrides.link?.outline?.active ?? link.active,
                    disabled: overrides.link?.outline?.disabled ?? link.disabled,
                };

                const linkDecoration = mergeArgs( link, overrides.link?.decoration );
                const linkIcon = mergeArgs( link, overrides.link?.icon );

                const heading: CompleteData[ 'heading' ] = objectGenerator(
                    SingleMode.allHeadingLevels,
                    ( num ) => overrides.heading?.[ num ] ?? text.primary,
                );

                const singleButton: CompleteData[ 'button' ][ 'primary' ] = {

                    background: {
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
                    ...objectMap( variations.universal, ( [ key ] ) => overrides.button?.[ key ] ?? singleButton ),
                    disabled: overrides.button?.disabled ?? singleButton,
                };

                const inputField: CompleteData[ 'input' ][ keyof CompleteData[ 'input' ] ] = {
                    accent: {
                        $: 'CanvasText',
                        focus: 'CanvasText',
                        hover: 'CanvasText',
                        active: 'ActiveText',
                    },
                    background: 'Field',
                    border: {
                        $: 'CanvasText',
                        focus: 'CanvasText',
                        hover: 'CanvasText',
                        active: 'ActiveText',
                    },
                    placeholder: 'FieldText',
                    text: 'FieldText',
                };

                return {
                    background,

                    button,
                    heading,

                    input: {
                        $: overrides.input?.$ ?? inputField,
                        disabled: overrides.input?.disabled ?? inputField,
                        readonly: overrides.input?.readonly ?? inputField,
                    },

                    link: {
                        $: link,
                        decoration: linkDecoration,
                        icon: linkIcon,
                        outline: linkOutline,
                    },

                    selection: overrides.selection ?? {
                        background: 'Highlight',
                        text: 'HighlightText',
                    },

                    text,
                    ui,

                    system: mergeArgs<
                        CompleteData[ 'system' ],
                        RecursivePartial<CompleteData[ 'system' ]>
                    >( {
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
                    }, overrides.system, true ),
                };
            }
        }
    }
}