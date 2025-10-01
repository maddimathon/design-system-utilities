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
import { mergeArgs } from '@maddimathon/utility-typescript/functions';

import type {
    ColourTokenSlug,
    CssSystemColor,
    ThemeColourOption,
    TokenLevels,
    TokenLevels_Extended,
} from '../@types.js';

import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Themes_Set_SingleMode<
    T_ColourName extends string,
    T_ExtraColourLevels extends TokenLevels_Extended,

    T_Keyword_Universal extends string,

    __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<
    T_ColourName,
    T_ExtraColourLevels,
    T_Keyword_Universal,
    __T_ColourOption
>> {

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string = never,
    >(
        preset: "forcedColors",
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >
    >;

    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string = never,
    >(
        preset: "average" | "high" | "low",
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal
        >
    >;

    /**
     * An easy way to generate a complete token set from limited inputs.
     * 
     * @since ___PKG_VERSION___
     */
    public static async build<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string = never,
    >(
        preset: "average" | "forcedColors" | "high" | "low",
        clrNames: readonly T_ColourName[],
        input: Tokens_Themes_Set_SingleMode.InputParam<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal
        >,
    ): Promise<
        Tokens_Themes_Set_SingleMode<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal
        >
    > {

        // returns if forced colours
        switch ( preset ) {

            case 'average':
                break;

            case 'high':
                break;

            case 'low':
                break;

            case 'forcedColors':
                const _input: Tokens_Themes_Set_SingleMode.Build.Param_ForcedColors<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                > = {
                    ...input,

                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations<
                        T_ColourName,
                        T_ExtraColourLevels,
                        T_Keyword_Universal
                    >( clrNames, input.variations ),
                };

                return new Tokens_Themes_Set_SingleMode(
                    await Tokens_Themes_Set_SingleMode.Build.forcedColors( _input )
                );
        }

        return new Tokens_Themes_Set_SingleMode(
            await Tokens_Themes_Set_SingleMode.Build.data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal
            >( {

                levels: Tokens_Themes_Set_SingleMode.Build.completeLevels<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >( input.levels ),

                variations: Tokens_Themes_Set_SingleMode.Build.completeVariations<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
                >( clrNames, input.variations ),
            } )
        );
    }

    protected constructor (
        public readonly data: Tokens_Themes_Set_SingleMode.Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            __T_ColourOption
        >,
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<
        T_ColourName,
        T_ExtraColourLevels,
        T_Keyword_Universal
    > {
        return this.data;
    }

    public toScssVars() {

        type Ret = Tokens_Themes_Set_SingleMode.JsonReturn<
            T_ColourName,
            T_ExtraColourLevels,

            T_Keyword_Universal,

            __T_ColourOption
        > & {
            system: {

                button: {

                    bg: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };

                input: {

                    bg: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    border: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };

                    text: {
                        '$': __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };
            };
        };

        return {
            ...this.data,

            system: {
                ...this.data.system,
                button: this.data.button.primary,
                input: this.data.field,
            }
        } satisfies Ret;
    }
}

/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Themes_Set_SingleMode {

    export interface Data_Button<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {

        bg: {
            '$': __T_ColourOption,
            'hover': __T_ColourOption,
            'active': __T_ColourOption,
        },

        border: {
            '$': __T_ColourOption,
            'hover': __T_ColourOption,
            'active': __T_ColourOption,
        },

        text: {
            '$': __T_ColourOption,
            'hover': __T_ColourOption,
            'active': __T_ColourOption,
        },
    }

    /**
     * @since ___PKG_VERSION___
     */
    export interface Data<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {
        background: __T_ColourOption,

        text: {
            '$': __T_ColourOption,
            'primary': __T_ColourOption,
            'secondary': __T_ColourOption,
            'active': __T_ColourOption,
            'disabled': __T_ColourOption,
        } & {
            [ K in T_Keyword_Universal ]: __T_ColourOption;
        },

        ui: {
            '$': __T_ColourOption,
            'primary': __T_ColourOption,
            'secondary': __T_ColourOption,
            'active': __T_ColourOption,
            'disabled': __T_ColourOption,
        } & {
            [ K in T_Keyword_Universal ]: __T_ColourOption;
        },

        selection: {
            'bg': __T_ColourOption,
            'text': __T_ColourOption,
        },

        link: {
            '$': __T_ColourOption,
            'hover': __T_ColourOption,
            'active': __T_ColourOption,
            'visited': __T_ColourOption,
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

            bg: {
                '$': __T_ColourOption,
                'hover': __T_ColourOption,
                'active': __T_ColourOption,
            },

            border: {
                '$': __T_ColourOption,
                'hover': __T_ColourOption,
                'active': __T_ColourOption,
            },

            text: {
                '$': __T_ColourOption,
                'hover': __T_ColourOption,
                'active': __T_ColourOption,
            },

            placeholder: __T_ColourOption,
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

    /** @internal @private */
    export interface RequiredVariations<
        T_ColourName extends string,
    > {
        base: T_ColourName;

        universal: {
            primary: T_ColourName;
            secondary: T_ColourName;
        };
    };

    /** @internal @private */
    export interface AllVariations<
        T_ColourName extends string,

        T_Keyword_Universal extends string,
    > {
        base: T_ColourName;

        universal: RequiredVariations<T_ColourName>[ 'universal' ] & {
            [ K in T_Keyword_Universal ]: T_ColourName;
        };
    };

    /** @internal @private */
    export interface RequiredLevels<
        T_ExtraColourLevels extends TokenLevels_Extended,
    > {
        background: TokenLevels | T_ExtraColourLevels;
        text: TokenLevels | T_ExtraColourLevels;
        ui: TokenLevels | T_ExtraColourLevels;
    };

    /**
     * This is used by the build function, not by the constructor.
     * 
     * @since ___PKG_VERSION___
     */
    export interface InputParam<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > {

        levels?: Partial<RequiredLevels<T_ExtraColourLevels>>;

        variations?: {

            universal?: Partial<
                RequiredVariations<T_ColourName>[ 'universal' ]
            > & {
                [ K in T_Keyword_Universal ]: T_ColourName;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraColourLevels extends TokenLevels_Extended,

        T_Keyword_Universal extends string,

        __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>,
    > = Data<
        T_ColourName,
        T_ExtraColourLevels,
        T_Keyword_Universal,
        __T_ColourOption
    >;




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
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string,
        > {
            levels: RequiredLevels<T_ExtraColourLevels>;
            variations: AllVariations<T_ColourName, T_Keyword_Universal>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export interface Param_ForcedColors<
            T_ColourName extends string,
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string,
        > {
            levels?: Partial<RequiredLevels<T_ExtraColourLevels>>;
            variations: AllVariations<T_ColourName, T_Keyword_Universal>;
        };

        function clrOpt<
            T_ColourName extends string,
            T_ExtraColourLevels extends TokenLevels_Extended,
        >(
            name: T_ColourName,
            level: TokenLevels | T_ExtraColourLevels,
        ): ColourTokenSlug<T_ColourName, T_ExtraColourLevels> {
            return `${ name }-${ level }`;
        }

        export function completeLevels<
            T_ColourName extends string,
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string,
        >(
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                string
            >[ 'levels' ],
        ): Param<
            T_ColourName,
            T_ExtraColourLevels,

            T_Keyword_Universal
        >[ 'levels' ] {

            const def: RequiredLevels<T_ExtraColourLevels> = {
                background: '100',
                text: '700',
                ui: '700',
            };

            return mergeArgs(
                def,
                input,
                false
            );
        }

        export function completeVariations<
            T_ColourName extends string,
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string,
        >(
            clrNames: readonly T_ColourName[],
            input: InputParam<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal
            >[ 'variations' ],
        ): AllVariations<T_ColourName, T_Keyword_Universal> {
            const clrNames_noBase = clrNames.filter( v => v !== 'base' );

            const base = 'base' as T_ColourName;
            const clr_1 = clrNames_noBase[ 0 ] ?? base;
            const clr_2 = clrNames_noBase[ 1 ] ?? clr_1;
            // const clr_3 = clrNames_noBase[ 2 ] ?? clr_2;

            const def: RequiredVariations<T_ColourName> = {
                base: base,
                universal: {
                    primary: clr_1,
                    secondary: clr_2,
                },
            };

            const vars: AllVariations<T_ColourName, T_Keyword_Universal> = mergeArgs(
                def,
                input as RecursivePartial<RequiredVariations<T_ColourName>> & InputParam<
                    T_ColourName,
                    T_ExtraColourLevels,
                    T_Keyword_Universal
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
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string = never,
        >(
            input: Param<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal
        >> {
            type ColourOptions = ThemeColourOption<T_ColourName, T_ExtraColourLevels>;

            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal
            >;

            const {
                levels,
                variations,
            } = input;

            const text: CompleteData[ 'text' ] = {
                '$': clrOpt( variations.base, levels.text ),

                ...objectMap( variations.universal, ( { value: clrName } ) => clrOpt( clrName, levels.text ) ),

                active: clrOpt( variations.universal.secondary, levels.text ),
                disabled: clrOpt( variations.base, levels.text ),
            };

            const ui: CompleteData[ 'ui' ] = {
                '$': clrOpt( variations.base, levels.ui ),

                ...objectMap( variations.universal, ( { value: clrName } ) => clrOpt( clrName, levels.ui ) ),

                active: clrOpt( variations.universal.secondary, levels.ui ),
                disabled: clrOpt( variations.base, levels.ui ),
            };

            const singleButtonMaker = ( _clrName: typeof variations[ keyof typeof variations ] ): CompleteData[ 'button' ][ 'primary' ] => ( {

                bg: {
                    '$': '"??"' as ColourOptions,
                    'hover': '"??"' as ColourOptions,
                    'active': '"??"' as ColourOptions,
                },

                border: {
                    '$': '"??"' as ColourOptions,
                    'hover': '"??"' as ColourOptions,
                    'active': '"??"' as ColourOptions,
                },

                text: {
                    '$': '"??"' as ColourOptions,
                    'hover': '"??"' as ColourOptions,
                    'active': '"??"' as ColourOptions,
                },
            } );

            const button: CompleteData[ 'button' ] = {
                ...objectMap( variations.universal, ( { value: clrName } ) => singleButtonMaker( clrName ) ),
                'disabled': singleButtonMaker( variations.base ),
            };

            const complete: CompleteData = {
                background: clrOpt( variations.base, levels.background ),

                text,
                ui,

                selection: {
                    'bg': '"??"' as ColourOptions,
                    'text': '"??"' as ColourOptions,
                },

                link: {
                    '$': '"??"' as ColourOptions,
                    'hover': '"??"' as ColourOptions,
                    'active': '"??"' as ColourOptions,
                    'visited': '"??"' as ColourOptions,
                },

                button,

                field: {

                    bg: {
                        '$': '"??"' as ColourOptions,
                        'hover': '"??"' as ColourOptions,
                        'active': '"??"' as ColourOptions,
                    },

                    border: {
                        '$': '"??"' as ColourOptions,
                        'hover': '"??"' as ColourOptions,
                        'active': '"??"' as ColourOptions,
                    },

                    text: {
                        '$': '"??"' as ColourOptions,
                        'hover': '"??"' as ColourOptions,
                        'active': '"??"' as ColourOptions,
                    },

                    placeholder: '"??"' as ColourOptions,
                },

                system: {
                    accent: {
                        bg: '"??"' as ColourOptions,
                        text: '"??"' as ColourOptions,
                    },
                    mark: {
                        bg: '"??"' as ColourOptions,
                        text: '"??"' as ColourOptions,
                    },
                    selected: {
                        bg: '"??"' as ColourOptions,
                        text: '"??"' as ColourOptions,
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
            T_ExtraColourLevels extends TokenLevels_Extended,

            T_Keyword_Universal extends string = never,
        >(
            input: Param_ForcedColors<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal
            >,
        ): Promise<Data<
            T_ColourName,
            T_ExtraColourLevels,
            T_Keyword_Universal,
            CssSystemColor
        >> {
            type CompleteData = Data<
                T_ColourName,
                T_ExtraColourLevels,
                T_Keyword_Universal,
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
                '$': sysclr.text,

                ...objectMap( variations.universal, () => sysclr.text ),

                active: 'ActiveText',
                disabled: 'GrayText',
            };

            const ui: CompleteData[ 'ui' ] = text;

            const singleButton: CompleteData[ 'button' ][ 'primary' ] = {

                bg: {
                    '$': 'ButtonFace',
                    'hover': 'SelectedItem',
                    'active': 'ButtonFace',
                },

                border: {
                    '$': 'ButtonBorder',
                    'hover': 'SelectedItem',
                    'active': 'ButtonBorder',
                },

                text: {
                    '$': 'ButtonText',
                    'hover': 'SelectedItemText',
                    'active': 'ButtonText',
                },
            };

            const button: CompleteData[ 'button' ] = {
                ...objectMap( variations.universal, () => singleButton ),
                disabled: singleButton,
            };

            const complete: CompleteData = {
                background: sysclr.text,

                text,
                ui,

                selection: {
                    bg: 'Highlight',
                    text: 'HighlightText',
                },

                link: {
                    '$': 'LinkText',
                    hover: 'ActiveText',
                    active: 'ActiveText',
                    visited: 'VisitedText',
                },

                button,

                field: {

                    bg: {
                        '$': 'Field',
                        'hover': 'SelectedItem',
                        'active': 'Field',
                    },

                    border: {
                        '$': 'FieldText',
                        'hover': 'SelectedItem',
                        'active': 'FieldText',
                    },

                    text: {
                        '$': 'FieldText',
                        'hover': 'SelectedItemText',
                        'active': 'FieldText',
                    },

                    placeholder: 'FieldText',
                },

                system: {
                    accent: {
                        bg: 'CanvasText',
                        text: 'Canvas',
                    },
                    mark: {
                        bg: 'CanvasText',
                        text: 'Canvas',
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