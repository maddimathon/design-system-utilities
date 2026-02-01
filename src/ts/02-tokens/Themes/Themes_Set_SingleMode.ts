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
    ColourTokenSlug,
    CssSystemColor,
    RequiredHeadingLevels,
    ThemeColourOption,
} from '../@types.js';

import type { RecursiveRecord } from '../../01-utilities/@types.js';
import type { ColourUtilities } from '../../01-utilities/ColourUtilities.js';

import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set_SingleMode<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

    T_Keyword_Universal extends string,
    T_Keyword_Text extends string,
    T_Keyword_Background extends string,

    __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_Keyword_Universal,
    T_Keyword_Text,
    T_Keyword_Background,
    __T_ColourOption
>> {

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
        T_Keyword_Background extends string = never,
    >(
        preset: "forcedColors",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >,

        overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>,
            NoInfer<T_Keyword_Background>
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >
    >;

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
        T_Keyword_Background extends string = never,
    >(
        preset: "low" | "average" | "high" | "max",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >,

        overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>,
            NoInfer<T_Keyword_Background>
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >
    >;

    /**
     * An easy way to generate a complete token set from limited inputs.
     * 
     * @since 0.1.0-alpha
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
        T_Keyword_Background extends string = never,
    >(
        preset: "low" | "average" | "high" | "max" | "forcedColors",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],

        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >,

        overrides: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>,
            NoInfer<T_Keyword_Background>
        > = {},

    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >
    > {
        const defaultLevels: Tokens_Themes_Set_SingleMode.RequiredLevels<never> = preset !== 'forcedColors'
            ? Tokens_Themes_Set_SingleMode.Build.LEVELS_DEFAULT[ preset ]
            : Tokens_Themes_Set_SingleMode.Build.LEVELS_DEFAULT.high;

        const levels: Tokens_Themes_Set_SingleMode.Build.Param<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >[ 'levels' ] = Tokens_Themes_Set_SingleMode.Build.completeLevels<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >( mergeArgs(
            defaultLevels,
            input.levels as Partial<Tokens_Themes_Set_SingleMode.RequiredLevels<never>>,
            true
        ) );

        const variations = Tokens_Themes_Set_SingleMode.Build.completeVariations<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >( clrNames, input.variations );

        const clrOpt = Tokens_Themes_Set_SingleMode.Build.colourOption;

        let description: null | string = input.description ?? null;

        // returns if forced colours
        switch ( preset ) {

            case 'average':
                description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '300' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    text: clrOpt( variations.base, '800' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    ...overrides.selection,
                };
                break;

            case 'low':
                description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '300' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    text: clrOpt( variations.base, '800' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    ...overrides.selection,
                };
                break;

            case 'high':
                description = description ?? 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                break;

            case 'max':
                description = description ?? 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '850' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    text: clrOpt( variations.base, '100' as T_ExtraColourLevels | ColourUtilities.Levels.Required ),
                    ...overrides.selection,
                };
                break;

            case 'forcedColors':
                const _input: Tokens_Themes_Set_SingleMode.Build.Param_ForcedColors<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                > = {
                    ...input,

                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations<
                        T_ColourName,
                        T_ExtraColourLevels,
                        T_Keyword_Universal,
                        T_Keyword_Text,
                        T_Keyword_Background
                    >( clrNames, input.variations ),
                };

                return new Tokens_Themes_Set_SingleMode(
                    'This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!',
                    [],
                    await Tokens_Themes_Set_SingleMode.Build.forcedColors( _input )
                );
        }

        const levelsInUse = (
            Object.values(
                objectFlatten( levels as unknown as RecursiveRecord<string, ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional> )
            ) as ( ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[]
        ).concat(
            Object.values(
                objectFlatten( overrides as unknown as RecursiveRecord<string, ThemeColourOption<T_ColourName, T_ExtraColourLevels>> )
            ).map( ( val ): ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional | false => {

                const match = String( val ).match( /\-(\d+)$/ );

                // returns
                if ( match && match[ 1 ] ) {
                    return match[ 1 ] as ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
                }

                return false;
            } ).filter( v => v !== false )
        );

        return new Tokens_Themes_Set_SingleMode(
            description,
            arrayUnique( levelsInUse ).sort(),
            mergeArgs(
                await Tokens_Themes_Set_SingleMode.Build.data<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >( {
                    levels,
                    variations,
                } ),
                overrides as RecursivePartial<Tokens_Themes_Set_SingleMode.Data<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >>,
                true
            )
        );
    }

    protected constructor (
        public readonly description: null | string,
        public readonly levelsInUse: ( ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional )[],
        public readonly data: Tokens_Themes_Set_SingleMode.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            __T_ColourOption
        >,
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_Keyword_Universal,
        T_Keyword_Text,
        T_Keyword_Background,
        __T_ColourOption
    > {

        const levelsInUse = this.levelsInUse.map( ( level ) => {

            const dark = ( 1000 - Number( level ) ).toFixed( 0 );

            return {
                light: level,
                dark: dark.padStart( Math.max( 0, 3 - dark.length ), '0' ) as ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional,
            };
        } );

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
        };
    }
}

/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Themes_Set_SingleMode {

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

    export interface Data_Button<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {

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
    }

    /**
     * @since 0.1.0-alpha
     */
    export interface Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {
        background: {
            $: __T_ColourOption;
        } & {
            [ K in keyof RequiredVariations<T_ColourName>[ 'background' ] ]: __T_ColourOption;
        } & {
            [ K in T_Keyword_Universal ]: __T_ColourOption;
        } & {
            [ K in T_Keyword_Background ]: __T_ColourOption;
        },

        text: {
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
         * @since ___PKG_VERSION___ — Switched to a nested object instead of separate keys. 
         */
        link: {

            $: {
                $: __T_ColourOption,
                visited: __T_ColourOption,
            } & {
                [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
            },

            /**
             * @since ___PKG_VERSION___ — Renamed from link-ui to link-decoration.
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
             * @since ___PKG_VERSION___
             */
            outline: {
                [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
            },
        },

        button: {
            [ K in 'primary' | 'secondary' | 'disabled' ]: Data_Button<
                T_ColourName,
                T_ExtraColourLevels,
                __T_ColourOption
            >;
        } & {
            [ K in T_Keyword_Universal ]: Data_Button<
                T_ColourName,
                T_ExtraColourLevels,
                __T_ColourOption
            >;
        },

        /**
         * @since ___PKG_VERSION___ — Changed from field to input.
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
     * @since 0.1.0-alpha
     */
    export interface Data_RecursivePartial<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {
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
             * @since ___PKG_VERSION___ — Renamed from link-ui to link-decoration.
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
            [ K in 'primary' | 'secondary' | 'disabled' ]?: undefined | Data_Button<
                T_ColourName,
                T_ExtraColourLevels,
                __T_ColourOption
            >;
        } & {
            [ K in T_Keyword_Universal ]?: undefined | Data_Button<
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

    /** @internal @private */
    export interface RequiredVariations<
        T_ColourName extends string,
    > {
        base: T_ColourName;

        background: {
            alt: T_ColourName;
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
    export interface AllVariations<
        T_ColourName extends string,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,
    > {
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

    interface LevelsSet_AccentMin<
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    > {
        $: ColourUtilities.Levels.Required | T_ExtraColourLevels;
        accent: ColourUtilities.Levels.Required | T_ExtraColourLevels;
        min: ColourUtilities.Levels.Required | T_ExtraColourLevels;
    }

    /**
     * @since ___PKG_VERSION___
     */
    interface LevelsSet_AccentAlt<
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    > {
        $: ColourUtilities.Levels.Required | T_ExtraColourLevels;
        accent: ColourUtilities.Levels.Required | T_ExtraColourLevels;
        alt: ColourUtilities.Levels.Required | T_ExtraColourLevels;
    }

    /** @internal @private */
    export interface RequiredLevels<
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
    > {
        background: LevelsSet_AccentAlt<T_ExtraColourLevels>;

        text: LevelsSet_AccentMin<T_ExtraColourLevels>;
        ui: LevelsSet_AccentMin<T_ExtraColourLevels>;

        heading: {
            [ L in RequiredHeadingLevels ]: ColourUtilities.Levels.Required | T_ExtraColourLevels;
        };
    };

    /**
     * This is used by the build function, not by the constructor.
     * 
     * @since 0.1.0-alpha
     */
    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {

        description?: null | string;

        levels?: undefined | {
            background?: ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<LevelsSet_AccentAlt<T_ExtraColourLevels>>;
            text?: ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<LevelsSet_AccentMin<T_ExtraColourLevels>>;
            ui?: ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<LevelsSet_AccentMin<T_ExtraColourLevels>>;

            heading?: ColourUtilities.Levels.Required | T_ExtraColourLevels | {
                [ L in RequiredHeadingLevels ]?: ColourUtilities.Levels.Required | T_ExtraColourLevels;
            };
        };

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
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,
        T_Keyword_Background extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > = {
        description?: undefined | string;
        data: Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            __T_ColourOption
        >;
        levelsInUse: {
            light: ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
            dark: ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
        }[];
    };




    /* Set Builders
     * ====================================================================== */

    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
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
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
            T_Keyword_Background extends string,
        > {
            levels: RequiredLevels<T_ExtraColourLevels>;
            variations: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >;
        };

        /**
         * @since 0.1.0-alpha
         */
        export interface Param_ForcedColors<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
            T_Keyword_Background extends string,
        > {
            levels?: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >[ 'levels' ];

            variations: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >;
        };

        export function colourOption<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,
        >(
            name: T_ColourName,
            level: ColourUtilities.Levels.Required | T_ExtraColourLevels,
        ): ColourTokenSlug<T_ColourName, T_ExtraColourLevels> {
            return `${ name }-${ level }`;
        }

        export function completeLevels<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
            T_Keyword_Background extends string,
        >(
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >[ 'levels' ],
        ): Param<
            T_ColourName,
            T_ExtraColourLevels,

            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >[ 'levels' ] {

            const DEFAULT = LEVELS_DEFAULT.high;

            const nomalized_input = {

                background: typeof input?.background === 'object' ? input?.background : {
                    $: input?.background,
                    accent: input?.background,
                    alt: input?.background,
                },

                heading: typeof input?.heading === 'object'
                    ? input?.heading
                    : input?.heading
                        ? objectGenerator(
                            Tokens_Themes_Set_SingleMode.allHeadingLevels,
                            () => input?.heading as ColourUtilities.Levels.Required | T_ExtraColourLevels
                        )
                        : {},

                text: typeof input?.text === 'object' ? input?.text : {
                    $: input?.text,
                    accent: input?.text,
                    min: input?.text,
                },

                ui: typeof input?.ui === 'object' ? input?.ui : {
                    $: input?.ui,
                    accent: input?.ui,
                    min: input?.ui,
                },
            } as const;

            const background: RequiredLevels<T_ExtraColourLevels>[ 'background' ] = {
                $: nomalized_input.background?.$ ?? DEFAULT.background.$,
                accent: nomalized_input.background?.accent ?? DEFAULT.background.accent,
                alt: nomalized_input.background?.alt ?? DEFAULT.background.alt,
            };

            const text: RequiredLevels<T_ExtraColourLevels>[ 'text' ] = {
                $: nomalized_input.text?.$ ?? DEFAULT.text.$,
                accent: nomalized_input.text?.accent ?? DEFAULT.text.accent,
                min: nomalized_input.text?.min ?? DEFAULT.text.min,
            };

            const ui: RequiredLevels<T_ExtraColourLevels>[ 'ui' ] = {
                $: nomalized_input.ui?.$ ?? nomalized_input.text?.$ ?? DEFAULT.ui.$,
                accent: nomalized_input.ui?.accent ?? nomalized_input.text?.accent ?? DEFAULT.ui.accent,
                min: nomalized_input.ui?.min ?? nomalized_input.text?.min ?? DEFAULT.ui.min,
            };

            const heading: RequiredLevels<T_ExtraColourLevels>[ 'heading' ] = objectGenerator(
                Tokens_Themes_Set_SingleMode.allHeadingLevels,
                ( hdgNum ) => nomalized_input.heading?.[ hdgNum ] ?? DEFAULT.heading[ hdgNum ]
            );

            return {
                background,
                text,
                ui,
                heading,
            };
        }

        /**
         * @since ___PKG_VERSION___
         */
        export namespace LEVELS_DEFAULT {

            export const average = {
                background: {
                    $: '150',
                    alt: '250',
                    accent: '200',
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
            } as const satisfies Tokens_Themes_Set_SingleMode.RequiredLevels<never>;

            export const high = {
                background: {
                    $: '100',
                    alt: '200',
                    accent: '150',
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
            } as const satisfies Tokens_Themes_Set_SingleMode.RequiredLevels<never>;

            export const low = {
                background: {
                    $: '250',
                    alt: '200',
                    accent: '200',
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
            } as const satisfies Tokens_Themes_Set_SingleMode.RequiredLevels<never>;

            export const max = {
                background: {
                    $: '100',
                    alt: '100',
                    accent: '100',
                },
                text: {
                    $: '900',
                    accent: '850',
                    min: '850',
                },
                ui: {
                    $: '900',
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
            } as const satisfies Tokens_Themes_Set_SingleMode.RequiredLevels<never>;
        }

        export function completeVariations<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
            T_Keyword_Background extends string,
        >(
            clrNames: readonly T_ColourName[],
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >[ 'variations' ],
        ): AllVariations<
            T_ColourName,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        > {
            const clrNames_noBase = clrNames.filter( v => v !== 'base' );

            const base = 'base' as T_ColourName;
            const clr_1 = input?.universal?.primary ?? clrNames_noBase[ 0 ] ?? base;
            const clr_2 = input?.universal?.secondary ?? clrNames_noBase[ 1 ] ?? clr_1;
            const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[ 2 ] ?? clr_2;

            const def: RequiredVariations<T_ColourName> & { background: { primary?: T_ColourName; }; } = {
                base: base,

                background: {
                    alt: base,
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
                    Tokens_Themes_Set_SingleMode.allHeadingLevels,
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

            const vars: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            > = mergeArgs(
                def,
                input as RecursivePartial<RequiredVariations<T_ColourName>> & InputParam<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text,
                    T_Keyword_Background
                >[ 'variations' ],
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
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string = never,
            T_Keyword_Text extends string = never,
            T_Keyword_Background extends string = never,
        >(
            input: Param<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background
        >> {

            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >;

            const clrOpt = colourOption;

            const {
                levels,
                variations,
            } = input;

            const background: CompleteData[ 'background' ] = {
                $: clrOpt( variations.base, levels.background.$ ),

                ...objectMap( variations.background, ( [ key, clrName ] ) => clrOpt( clrName, levels.background.alt ) ),
                ...objectMap( variations.universal, ( [ key, clrName ] ) => clrOpt( clrName, levels.background.accent ) ),

                alt: clrOpt( variations.base, levels.background.alt ),
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
                Tokens_Themes_Set_SingleMode.allHeadingLevels,
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
        export async function forcedColors<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourUtilities.Levels.Optional,

            T_Keyword_Universal extends string = never,
            T_Keyword_Text extends string = never,
            T_Keyword_Background extends string = never,
        >(
            input: Param_ForcedColors<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            T_Keyword_Background,
            CssSystemColor
        >> {
            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                T_Keyword_Background,
                CssSystemColor
            >;

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
                Tokens_Themes_Set_SingleMode.allHeadingLevels,
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