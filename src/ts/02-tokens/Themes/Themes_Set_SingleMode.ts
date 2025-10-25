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

import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects';
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';

import type {
    ColourLevels_Extended,
    ColourLevels,
    ColourTokenSlug,
    CssSystemColor,
    RequiredHeadingLevels,
    ThemeColourOption,
} from '../@types.js';

import type { RecursiveRecord } from '../../01-utilities/@types.js';

import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Themes_Set_SingleMode<
    T_ColourName extends string,
    T_ExtraColourLevels extends ColourLevels_Extended,

    T_Keyword_Universal extends string,
    T_Keyword_Text extends string,

    __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_Keyword_Universal,
    T_Keyword_Text,
    __T_ColourOption
>> {

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
    >(
        preset: "forcedColors",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            CssSystemColor
        >,

        overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            CssSystemColor
        >
    >;

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
    >(
        preset: "low" | "average" | "high" | "max",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >,

        overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            ThemeColourOption<T_ColourName, T_ExtraColourLevels>
        >
    >;

    /**
     * An easy way to generate a complete token set from limited inputs.
     * 
     * @since ___PKG_VERSION___
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string = never,
        T_Keyword_Text extends string = never,
    >(
        preset: "low" | "average" | "high" | "max" | "forcedColors",
        brightness: undefined | string,
        clrNames: readonly T_ColourName[],

        input: Tokens_Themes_Set_SingleMode.InputParam<
            NoInfer<T_ColourName>,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text
        >,

        overrides: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<
            NoInfer<T_ColourName>,
            NoInfer<T_ExtraColourLevels>,
            NoInfer<T_Keyword_Universal>,
            NoInfer<T_Keyword_Text>
        > = {},

    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text
        >
    > {
        let defaultLevels: Tokens_Themes_Set_SingleMode.RequiredLevels<never>;

        let levels: Tokens_Themes_Set_SingleMode.Build.Param<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text
        >[ 'levels' ];

        const variations = Tokens_Themes_Set_SingleMode.Build.completeVariations<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text
        >( clrNames, input.variations );

        const clrOpt = Tokens_Themes_Set_SingleMode.Build.colourOption;

        const isLightMode = brightness !== 'dark';

        let description: null | string = null;

        // returns if forced colours
        switch ( preset ) {

            case 'average':
                description = 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';

                defaultLevels = {
                    background: isLightMode ? '200' : '150',
                    text: {
                        $: isLightMode ? '800' : '750',
                        accent: isLightMode ? '700' : '650',
                        min: isLightMode ? '700' : '650',
                    },
                    ui: {
                        $: isLightMode ? '750' : '700',
                        accent: isLightMode ? '650' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    heading: objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        ( hdgNum ) => {

                            // returns on match
                            switch ( hdgNum ) {

                                case 1:
                                    return isLightMode ? '800' : '750';

                                case 2:
                                case 3:
                                    return isLightMode ? '750' : '700';
                            }

                            return isLightMode ? '700' : '650';
                        }
                    ),
                };

                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >( mergeArgs(
                    defaultLevels,
                    input.levels as Partial<Tokens_Themes_Set_SingleMode.RequiredLevels<never>>,
                    true
                ) );

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '400' as T_ExtraColourLevels | ColourLevels ),
                    text: clrOpt( variations.base, '850' as T_ExtraColourLevels | ColourLevels ),
                    ...overrides.selection,
                };
                break;

            case 'low':
                description = 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';

                defaultLevels = {
                    background: isLightMode ? '300' : '200',
                    text: {
                        $: isLightMode ? '750' : '650',
                        accent: isLightMode ? '700' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    ui: {
                        $: isLightMode ? '650' : '600',
                        accent: isLightMode ? '650' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    heading: objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        isLightMode ? (
                            ( hdgNum ) => hdgNum <= 1 ? '600' : hdgNum <= 3 ? '650' : '700'
                        ) : (
                            ( hdgNum ) => hdgNum <= 1 ? '700' : '600'
                        ),
                    ),
                };

                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >( mergeArgs(
                    defaultLevels,
                    input.levels as Partial<Tokens_Themes_Set_SingleMode.RequiredLevels<never>>,
                    true
                ) );

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '400' as T_ExtraColourLevels | ColourLevels ),
                    text: clrOpt( variations.base, '850' as T_ExtraColourLevels | ColourLevels ),
                    ...overrides.selection,
                };
                break;

            case 'high':
                description = 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';

                defaultLevels = {
                    background: '100',
                    text: {
                        $: '850',
                        accent: '750',
                        min: '700',
                    },
                    ui: {
                        $: '750',
                        accent: '700',
                        min: '700',
                    },
                    heading: objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        ( hdgNum ) => {

                            // returns on match
                            switch ( hdgNum ) {

                                case 1:
                                case 2:
                                case 3:
                                    return '750';
                            }

                            return '800';
                        }
                    ),
                };

                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >( mergeArgs(
                    defaultLevels,
                    input.levels as Partial<Tokens_Themes_Set_SingleMode.RequiredLevels<never>>,
                    true
                ) );
                break;

            case 'max':
                description = 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';

                defaultLevels = {
                    background: '100',
                    text: {
                        $: '900',
                        accent: '850',
                        min: '850',
                    },
                    ui: {
                        $: '850',
                        accent: '850',
                        min: '800',
                    },
                    heading: objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        () => '850'
                    ),
                };

                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >( mergeArgs(
                    defaultLevels,
                    input.levels as Partial<Tokens_Themes_Set_SingleMode.RequiredLevels<never>>,
                    true
                ) );

                overrides.selection = {
                    bg: clrOpt( variations.universal.primary, '850' as T_ExtraColourLevels | ColourLevels ),
                    text: clrOpt( variations.base, '100' as T_ExtraColourLevels | ColourLevels ),
                    ...overrides.selection,
                };
                break;

            case 'forcedColors':
                const _input: Tokens_Themes_Set_SingleMode.Build.Param_ForcedColors<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                > = {
                    ...input,

                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations<
                        T_ColourName,
                        T_ExtraColourLevels,
                        T_Keyword_Universal,
                        T_Keyword_Text
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
                objectFlatten( levels as unknown as RecursiveRecord<string, ColourLevels | ColourLevels_Extended> )
            ) as ( ColourLevels | ColourLevels_Extended )[]
        ).concat(
            Object.values(
                objectFlatten( overrides as unknown as RecursiveRecord<string, ThemeColourOption<T_ColourName, T_ExtraColourLevels>> )
            ).map( ( val ): ColourLevels | ColourLevels_Extended | false => {

                const match = String( val ).match( /\-(\d+)$/ );

                // returns
                if ( match && match[ 1 ] ) {
                    return match[ 1 ] as ColourLevels | ColourLevels_Extended;
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
                    T_Keyword_Text
                >>,
                true
            )
        );
    }

    protected constructor (
        public readonly description: null | string,
        public readonly levelsInUse: ( ColourLevels | ColourLevels_Extended )[],
        public readonly data: Tokens_Themes_Set_SingleMode.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
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
        __T_ColourOption
    > {

        const levelsInUse = this.levelsInUse.map( ( level ) => {

            const dark = ( 1000 - Number( level ) ).toFixed( 0 );

            return {
                light: level,
                dark: dark.padStart( Math.max( 0, 3 - dark.length ), '0' ) as ColourLevels | ColourLevels_Extended,
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

            background: __T_ColourOption;

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

            system: {
                ...this.data.system,

                background: this.data.background,
                button: this.data.button.primary,
                input: this.data.field,
                link: this.data.link,
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
 * @since ___PKG_VERSION___
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
        T_ExtraColourLevels extends ColourLevels_Extended,

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
     * @since ___PKG_VERSION___
     */
    export interface Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {
        background: __T_ColourOption,

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

        link: {
            $: __T_ColourOption,
            visited: __T_ColourOption,
        } & {
            [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
        },

        'link-icon': {
            $: __T_ColourOption,
            visited: __T_ColourOption,
        } & {
            [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
        },

        'link-ui': {
            $: __T_ColourOption,
            visited: __T_ColourOption,
        } & {
            [ K in keyof RequiredVariations<T_ColourName>[ 'interactive' ] ]: __T_ColourOption;
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

        field: {

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
     * @since ___PKG_VERSION___
     */
    export interface Data_RecursivePartial<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {
        background?: undefined | __T_ColourOption,

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

        link?: undefined | {
            $?: undefined | __T_ColourOption,
            hover?: undefined | __T_ColourOption,
            active?: undefined | __T_ColourOption,
            visited?: undefined | __T_ColourOption,
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

        field?: undefined | {

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
    > {
        base: T_ColourName;

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

    interface LevelsSet<
        T_ExtraColourLevels extends ColourLevels_Extended,
    > {
        $: ColourLevels | T_ExtraColourLevels;
        accent: ColourLevels | T_ExtraColourLevels;
        min: ColourLevels | T_ExtraColourLevels;
    }

    /** @internal @private */
    export interface RequiredLevels<
        T_ExtraColourLevels extends ColourLevels_Extended,
    > {
        background: ColourLevels | T_ExtraColourLevels;
        text: LevelsSet<T_ExtraColourLevels>;
        ui: LevelsSet<T_ExtraColourLevels>;

        heading: {
            [ L in RequiredHeadingLevels ]: ColourLevels | T_ExtraColourLevels;
        };
    };

    /**
     * This is used by the build function, not by the constructor.
     * 
     * @since ___PKG_VERSION___
     */
    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {

        levels?: undefined | {
            background?: ColourLevels | T_ExtraColourLevels;
            text?: ColourLevels | T_ExtraColourLevels | Partial<LevelsSet<T_ExtraColourLevels>>;
            ui?: ColourLevels | T_ExtraColourLevels | Partial<LevelsSet<T_ExtraColourLevels>>;

            heading?: ColourLevels | T_ExtraColourLevels | {
                [ L in RequiredHeadingLevels ]?: ColourLevels | T_ExtraColourLevels;
            };
        };

        variations?: undefined | {

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
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends ColourLevels_Extended,

        T_Keyword_Universal extends string,
        T_Keyword_Text extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > = {
        description?: undefined | string;
        data: Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            __T_ColourOption
        >;
        levelsInUse: {
            light: ColourLevels | ColourLevels_Extended;
            dark: ColourLevels | ColourLevels_Extended;
        }[];
    };




    /* Set Builders
     * ====================================================================== */

    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
     * not meant to be exposed through the API.
     * 
     * @since ___PKG_VERSION___
     * @internal
     */
    export namespace Build {

        /**
         * @since ___PKG_VERSION___
         */
        export interface Param<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
        > {
            levels: RequiredLevels<T_ExtraColourLevels>;
            variations: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export interface Param_ForcedColors<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
        > {
            levels?: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >[ 'levels' ];
            variations: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text
            >;
        };

        export function colourOption<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,
        >(
            name: T_ColourName,
            level: ColourLevels | T_ExtraColourLevels,
        ): ColourTokenSlug<T_ColourName, T_ExtraColourLevels> {
            return `${ name }-${ level }`;
        }

        export function completeLevels<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
        >(
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >[ 'levels' ],
        ): Param<
            T_ColourName,
            T_ExtraColourLevels,

            T_Keyword_Universal,
            T_Keyword_Text
        >[ 'levels' ] {

            const text: RequiredLevels<T_ExtraColourLevels>[ 'text' ] =
                typeof input?.text === 'object'
                    ? {
                        $: input.text?.$ ?? '800',
                        accent: input.text?.accent ?? '800',
                        min: input.text?.min ?? '800',
                    }
                    : {
                        $: input?.text ?? '800',
                        accent: input?.text ?? '800',
                        min: input?.text ?? '800',
                    };

            const ui: RequiredLevels<T_ExtraColourLevels>[ 'ui' ] =
                typeof input?.ui === 'object'
                    ? {
                        $: input.ui?.$ ?? '700',
                        accent: input.ui?.accent ?? '700',
                        min: input.ui?.min ?? '700',
                    }
                    : {
                        $: input?.ui ?? '700',
                        accent: input?.ui ?? '700',
                        min: input?.ui ?? '700',
                    };

            const heading: RequiredLevels<T_ExtraColourLevels>[ 'heading' ] =
                typeof input?.heading === 'object'
                    ? objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        ( hdgNum ) => ( input.heading?.[ hdgNum ] as ColourLevels | T_ExtraColourLevels ) ?? text.accent
                    )
                    : objectGenerator(
                        Tokens_Themes_Set_SingleMode.allHeadingLevels,
                        () => ( input?.heading as ColourLevels | T_ExtraColourLevels ) ?? text.accent
                    );

            return {
                background: input?.background ?? '100',
                text,
                ui,
                heading,
            };
        }

        export function completeVariations<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string,
            T_Keyword_Text extends string,
        >(
            clrNames: readonly T_ColourName[],
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >[ 'variations' ],
        ): AllVariations<
            T_ColourName,
            T_Keyword_Universal,
            T_Keyword_Text
        > {
            const clrNames_noBase = clrNames.filter( v => v !== 'base' );

            const base = 'base' as T_ColourName;
            const clr_1 = input?.universal?.primary ?? clrNames_noBase[ 0 ] ?? base;
            const clr_2 = input?.universal?.secondary ?? clrNames_noBase[ 1 ] ?? clr_1;
            const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[ 2 ] ?? clr_2;

            const def: RequiredVariations<T_ColourName> = {
                base: base,

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

            const vars: AllVariations<
                T_ColourName,
                T_Keyword_Universal,
                T_Keyword_Text
            > = mergeArgs(
                def,
                input as RecursivePartial<RequiredVariations<T_ColourName>> & InputParam<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal,
                    T_Keyword_Text
                >[ 'variations' ],
                true
            );

            return vars;
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * 
         * @since ___PKG_VERSION___
         */
        export async function data<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string = never,
            T_Keyword_Text extends string = never,
        >(
            input: Param<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text
        >> {

            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >;

            const clrOpt = colourOption;

            const {
                levels,
                variations,
            } = input;

            const text: CompleteData[ 'text' ] = {
                $: clrOpt( variations.base, levels.text.$ ),

                ...objectMap( variations.universal, ( { value: clrName } ) => clrOpt( clrName, levels.text.accent ) ),
                ...objectMap( variations.text, ( { value: clrName } ) => clrOpt( clrName, levels.text.accent ) ),

                disabled: clrOpt( variations.text.disabled, levels.text.min ),
                grey: clrOpt( variations.text.disabled, levels.text.min ),
            };

            const ui: CompleteData[ 'ui' ] = {
                $: clrOpt( variations.base, levels.ui.$ ),

                ...objectMap( variations.universal, ( { value: clrName } ) => clrOpt( clrName, levels.ui.accent ) ),
                ...objectMap( variations.text, ( { value: clrName } ) => clrOpt( clrName, levels.ui.accent ) ),

                disabled: clrOpt( variations.text.disabled, levels.ui.min ),
                grey: clrOpt( variations.text.disabled, levels.ui.min ),
            };

            const heading: CompleteData[ 'heading' ] = objectGenerator(
                Tokens_Themes_Set_SingleMode.allHeadingLevels,
                ( hdgNum ) => clrOpt( variations.heading[ hdgNum ] ?? variations.heading[ 10 ], levels.heading[ hdgNum ] )
            );

            const link: CompleteData[ 'link' ] = {
                $: clrOpt( variations.universal.primary, levels.text.accent ),
                visited: clrOpt( variations.universal.primary, levels.text.accent ),

                ...objectMap( variations.interactive, ( { value: clrName } ) => clrOpt( clrName, levels.text.accent ) ),

                disabled: clrOpt( variations.text.disabled, levels.text.min ),
            };

            const linkIcon: CompleteData[ 'link-icon' ] = {
                $: clrOpt( variations.base, levels.ui.min ),
                visited: clrOpt( variations.base, levels.ui.accent ),

                hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                active: clrOpt( variations.interactive.active, levels.ui.accent ),
                disabled: clrOpt( variations.text.disabled, levels.ui.min ),
            };

            const linkUI: CompleteData[ 'link-ui' ] = {
                $: clrOpt( variations.universal.primary, levels.ui.accent ),
                visited: clrOpt( variations.universal.primary, levels.ui.accent ),

                hover: 'transparent',
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

                    text: {
                        $: clrOpt( variations.base, levels.background ),
                        hover: clrOpt( variations.base, levels.background ),
                        active: clrOpt( variations.base, levels.background ),
                    },

                    ui: {
                        $: clrOpt( variations.base, levels.background ),
                        hover: clrOpt( variations.base, levels.background ),
                        active: clrOpt( variations.base, levels.background ),
                    },
                };
            };

            const button: CompleteData[ 'button' ] = {
                ...objectMap( variations.universal, ( { value: clrName } ) => singleButtonMaker( clrName ) ),

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

                    text: {
                        $: clrOpt( variations.base, levels.background ),
                        hover: clrOpt( variations.base, levels.background ),
                        active: clrOpt( variations.base, levels.background ),
                    },

                    ui: {
                        $: clrOpt( variations.base, levels.background ),
                        hover: clrOpt( variations.base, levels.background ),
                        active: clrOpt( variations.base, levels.background ),
                    },
                },
            };

            const complete: CompleteData = {
                background: clrOpt( variations.base, levels.background ),

                text,
                ui,
                heading,

                selection: {
                    bg: clrOpt( variations.universal.primary, levels.text.accent ),
                    text: clrOpt( variations.base, levels.background ),
                },

                link,
                'link-icon': linkIcon,
                'link-ui': linkUI,

                button,

                field: {

                    accent: {
                        $: clrOpt( variations.universal.primary, levels.ui.accent ),
                        hover: clrOpt( variations.interactive.hover, levels.ui.accent ),
                        active: clrOpt( variations.interactive.active, levels.ui.accent ),
                    },

                    bg: {
                        $: clrOpt( variations.base, levels.background ),
                        hover: clrOpt( variations.base, levels.background ),
                        active: clrOpt( variations.base, levels.background ),
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
                },

                system: {
                    accent: {
                        bg: clrOpt( variations.universal.primary, levels.text.accent ),
                        text: clrOpt( variations.base, levels.background ),
                    },
                    mark: {
                        bg: clrOpt( variations.text.active, levels.text.accent ),
                        text: clrOpt( variations.base, levels.background ),
                    },
                    selected: {
                        bg: clrOpt( variations.interactive.hover, levels.text.accent ),
                        text: clrOpt( variations.base, levels.background ),
                    },
                },
            };

            return complete;
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * 
         * @since ___PKG_VERSION___
         */
        export async function forcedColors<
            T_ColourName extends string,
            T_ExtraColourLevels extends ColourLevels_Extended,

            T_Keyword_Universal extends string = never,
            T_Keyword_Text extends string = never,
        >(
            input: Param_ForcedColors<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            T_Keyword_Text,
            CssSystemColor
        >> {
            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
                T_Keyword_Text,
                CssSystemColor
            >;

            const {
                variations,
            } = input;

            const sysclr = {
                background: 'Canvas',
                text: 'CanvasText',
            } as const;

            const text: CompleteData[ 'text' ] = {
                $: sysclr.text,

                ...objectMap( variations.universal, () => sysclr.text ),
                ...objectMap( variations.text, () => sysclr.text ),

                active: 'ActiveText',
                disabled: 'GrayText',
                grey: 'GrayText',
            };

            const link: CompleteData[ 'link' ] = {
                $: 'LinkText',
                visited: 'VisitedText',
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

            const complete: CompleteData = {
                background: sysclr.background,

                text,
                ui: text,
                heading,

                selection: {
                    bg: 'Highlight',
                    text: 'HighlightText',
                },

                link,
                'link-icon': link,
                'link-ui': link,

                button,

                field: {

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