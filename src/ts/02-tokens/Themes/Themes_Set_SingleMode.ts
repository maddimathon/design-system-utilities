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

import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects/partial';
import type { CssSystemColor } from '../@types.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Themes_Set_SingleMode<
    T_ColourOptions extends string = CssSystemColor,
> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>> {

    /**
     * An easy way to generate a complete token set from limited inputs.
     * 
     * @param preset  Contrast preset to use to complete the object.
     * @param input   Optional overrides.
     */
    public static async build<
        T_ColourOptions extends CssSystemColor,
    >(
        preset: "forcedColors",
        input: Tokens_Themes_Set_SingleMode.InputParam<CssSystemColor>,
    ): Promise<Tokens_Themes_Set_SingleMode<CssSystemColor>>;

    public static async build<
        T_ColourOptions extends string,
    >(
        preset: Tokens_Themes_Set_SingleMode.Templates.Name,
        input: Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>,
    ): Promise<Tokens_Themes_Set_SingleMode<T_ColourOptions>>;

    public static async build<
        T_ColourOptions extends CssSystemColor | string,
    >(
        preset: Tokens_Themes_Set_SingleMode.Templates.Name,
        input: Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>,
    ): Promise<Tokens_Themes_Set_SingleMode<T_ColourOptions> | Tokens_Themes_Set_SingleMode<CssSystemColor>> {

        let complete;

        // returns for forcedColors
        switch ( preset ) {

            case 'forcedColors':
                complete = await Tokens_Themes_Set_SingleMode.Templates.forcedColors(
                    input as Tokens_Themes_Set_SingleMode.InputParam<CssSystemColor>
                );
                return new Tokens_Themes_Set_SingleMode( complete );

            default:
                complete = await Tokens_Themes_Set_SingleMode.Templates[ preset ](
                    input as Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>
                );
                break;
        }

        return new Tokens_Themes_Set_SingleMode( complete );
    }

    protected constructor (
        public readonly data: Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>,
    ) {
        super();
    }

    public toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourOptions> {
        return this.data;
    }

    public toScssVars() {
        return this.data;
    }
}

/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Themes_Set_SingleMode {

    /**
     * @since ___PKG_VERSION___
     */
    export interface Data<
        T_ColourOptions extends string,
    > {
        background: T_ColourOptions,

        text: {
            '$': T_ColourOptions,
            'primary': T_ColourOptions,
            'secondary': T_ColourOptions,
            'active': T_ColourOptions,
            'disabled': T_ColourOptions,
        },

        ui: {
            '$': T_ColourOptions,
            'primary': T_ColourOptions,
            'secondary': T_ColourOptions,
            'active': T_ColourOptions,
            'disabled': T_ColourOptions,
        },

        selection: {
            'bg': T_ColourOptions,
            'text': T_ColourOptions,
        },

        link: {
            '$': T_ColourOptions,
            'hover': T_ColourOptions,
            'active': T_ColourOptions,
            'visited': T_ColourOptions,
        },

        button: {

            bg: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },

            border: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },

            text: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },
        },

        field: {

            bg: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },

            border: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },

            text: {
                '$': T_ColourOptions,
                'hover': T_ColourOptions,
                'active': T_ColourOptions,
            },

            placeholder: T_ColourOptions,
        },

        system: {
            accent: {
                bg: T_ColourOptions,
                text: T_ColourOptions,
            },
            mark: {
                bg: T_ColourOptions,
                text: T_ColourOptions,
            },
            selected: {
                bg: T_ColourOptions,
                text: T_ColourOptions,
            },
        },
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_ColourOptions extends string,
    > = RecursivePartial<Data<T_ColourOptions>>;

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourOptions extends string,
    > = Data<T_ColourOptions>;




    /* Set Builders
     * ====================================================================== */


    export namespace Templates {

        export type Name = "average" | "forcedColors" | "high" | "low";

        /**
         * An easy way to generate a complete token set from limited inputs.
         * 
         * @since ___PKG_VERSION___
         */
        async function template<
            T_ColourOptions extends string = CssSystemColor,
        >(
            input: InputParam<T_ColourOptions>,
        ): Promise<Data<T_ColourOptions>> {

            const complete: Data<T_ColourOptions> = {
                background: '"??"' as T_ColourOptions,

                text: {
                    '$': '"??"' as T_ColourOptions,
                    'primary': '"??"' as T_ColourOptions,
                    'secondary': '"??"' as T_ColourOptions,
                    'active': '"??"' as T_ColourOptions,
                    'disabled': '"??"' as T_ColourOptions,
                },

                ui: {
                    '$': '"??"' as T_ColourOptions,
                    'primary': '"??"' as T_ColourOptions,
                    'secondary': '"??"' as T_ColourOptions,
                    'active': '"??"' as T_ColourOptions,
                    'disabled': '"??"' as T_ColourOptions,
                },

                selection: {
                    'bg': '"??"' as T_ColourOptions,
                    'text': '"??"' as T_ColourOptions,
                },

                link: {
                    '$': '"??"' as T_ColourOptions,
                    'hover': '"??"' as T_ColourOptions,
                    'active': '"??"' as T_ColourOptions,
                    'visited': '"??"' as T_ColourOptions,
                },

                button: {

                    bg: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },

                    border: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },

                    text: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },
                },

                field: {

                    bg: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },

                    border: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },

                    text: {
                        '$': '"??"' as T_ColourOptions,
                        'hover': '"??"' as T_ColourOptions,
                        'active': '"??"' as T_ColourOptions,
                    },

                    placeholder: '"??"' as T_ColourOptions,
                },

                system: {
                    accent: {
                        bg: '"??"' as T_ColourOptions,
                        text: '"??"' as T_ColourOptions,
                    },
                    mark: {
                        bg: '"??"' as T_ColourOptions,
                        text: '"??"' as T_ColourOptions,
                    },
                    selected: {
                        bg: '"??"' as T_ColourOptions,
                        text: '"??"' as T_ColourOptions,
                    },
                },
            };

            return complete;
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         * 
         * @since ___PKG_VERSION___
         */
        export async function average<
            T_ColourOptions extends string = CssSystemColor,
        >(
            input: InputParam<T_ColourOptions>,
        ): Promise<Data<T_ColourOptions>> {
            return template( input );
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         * 
         * @since ___PKG_VERSION___
         */
        export async function forcedColors(
            input: InputParam<CssSystemColor>,
        ): Promise<Data<CssSystemColor>> {
            return template( input );
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * For high contrast.
         * 
         * @since ___PKG_VERSION___
         */
        export async function high<
            T_ColourOptions extends string = CssSystemColor,
        >(
            input: InputParam<T_ColourOptions>,
        ): Promise<Data<T_ColourOptions>> {
            return template( input );
        }

        /**
         * An easy way to generate a complete token set from limited inputs.
         * For low contrast.
         * 
         * @since ___PKG_VERSION___
         */
        export async function low<
            T_ColourOptions extends string = CssSystemColor,
        >(
            input: InputParam<T_ColourOptions>,
        ): Promise<Data<T_ColourOptions>> {
            return template( input );
        }
    }

}