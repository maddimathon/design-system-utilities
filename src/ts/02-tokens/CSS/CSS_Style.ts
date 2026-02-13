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
import { mergeArgs } from '@maddimathon/utility-typescript/functions';

import type { RequiredHeadingLevels, ThemeMode_ContrastOption, TokenLevels } from '../@types.js';

import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Style extends AbstractTokens<Tokens_CSS_Style.Data> {

    /**
     * @since ___PKG_VERSION___
     */
    public static alertStyle(): Tokens_CSS_Style.AlertStyles {

        return {
            background: 'background',

            border: {
                color: 'ui-primary',
                radius: '0',
                style: 'solid',
                width: '200',
            },

            color: 'text-primary',

            'line-height': '300',

            icon: {
                color: 'ui-primary',
                size: 1.25,
            },

            gap: {
                block: '0',
                inline: '300',
            },

            margin: {
                default: '300',
            },

            padding: {
                block: '300',
                inline: '300',
            },
        };
    }

    public static buttonStyle(): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    } {

        const style: Tokens_CSS_Style.ButtonStyles = {

            border: {
                radius: '0',
                style: 'solid',
                width: '100',
            },

            focus: {
                offset: '400',
            },

            font: {
                style: 'normal',
                weight: '500',
            },

            gap: {
                block: '300',
                inline: '200',
            },

            'letter-spacing': 'normal',
            'line-height': '100',
            'text-transform': 'none',

            margin: {
                block: {
                    start: '400',
                    end: '400',
                },
            },

            padding: {
                block: '200',
                inline: '300',
            },

            width: 'fit-content',
        };

        return {
            $: style,
            disabled: {
                border: {
                    radius: style.border.radius,
                    style: 'dashed',
                },

                font: {
                    ...style.font,
                    style: 'italic',
                },
                'letter-spacing': style[ 'letter-spacing' ],
                'text-transform': style[ 'text-transform' ],
            },
        } as const satisfies Tokens_CSS_Style.Data[ 'button' ];
    }

    public static headingStyle( heading: number ): Tokens_CSS_Style.HeadingStyles {

        heading = heading < 1 ? 11 : heading;

        const style: Tokens_CSS_Style.HeadingStyles = {

            font: {
                style: 'normal',
                weight: '600',
            },

            'letter-spacing': 'normal',
            'line-height': '400',
            'text-transform': 'none',

            margin: {
                block: {
                    start: '600',
                    end: '400',
                },
            },
        };

        switch ( heading ) {

            case 1:
                style.font.weight = '900';
                style[ 'line-height' ] = '200';
                style.margin.block.start = '800';
                break;

            case 2:
                style.font.weight = '800';
                style[ 'line-height' ] = '200';
                style.margin.block.start = '800';
                break;

            case 3:
                style.font.weight = '700';
                style[ 'line-height' ] = '200';
                style.margin.block.start = '800';
                break;

            case 4:
                style.font.weight = '700';
                style.font.style = 'italic';
                style[ 'line-height' ] = '300';
                break;

            case 5:
                style.font.weight = '600';
                style.font.style = 'italic';
                style[ 'line-height' ] = '300';
                break;

            case 6:
                style.font.weight = '500';
                style.font.style = 'italic';
                style[ 'line-height' ] = '300';
                break;
        }

        if ( heading >= 7 ) {
            style.font.weight = '500';
            style.font.style = 'normal';

            style[ 'letter-spacing' ] = '0.0625em';
            style[ 'line-height' ] = '400';
            style[ 'text-transform' ] = 'uppercase';
        }

        if ( heading >= 8 ) {
            style.font.style = 'italic';
        }

        if ( heading >= 9 ) {
            style.margin.block.start = '500';
            style[ 'line-height' ] = '500';
        }

        return style;
    }

    /**
     * @since 0.1.1-alpha.0
     */
    public static inputStyle(): {
        $: Tokens_CSS_Style.InputStyles;
        disabled: Tokens_CSS_Style.InputStyles_Disabled;
    } {

        const style: Tokens_CSS_Style.InputStyles = {

            border: {
                radius: '0',
                style: 'solid',
                width: '100',
            },

            focus: {
                offset: '400',
            },

            label: {

                font: {
                    style: 'normal',
                    weight: '500',
                },

                'line-height': '200',
            },

            'line-height': '300',

            margin: {
                block: {
                    start: '400',
                    end: '400',
                    gap: '200',
                },
            },

            padding: {
                block: '200',
                inline: '300',
            },

            placeholder: {
                font: {
                    style: 'italic',
                },
            },
        };

        return {
            $: style,
            disabled: {
                border: {
                    radius: style.border.radius,
                    style: 'dashed',
                },
            },
        } as const satisfies Tokens_CSS_Style.Data[ 'input' ];
    }

    public static get default(): Tokens_CSS_Style.Data {

        return {

            alert: Tokens_CSS_Style.alertStyle(),

            button: Tokens_CSS_Style.buttonStyle(),

            heading: objectGenerator(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                ( hdg ) => Tokens_CSS_Style.headingStyle( hdg )
            ),

            input: Tokens_CSS_Style.inputStyle(),

            selection: {
                low: {
                    "background-opacity": '65%',
                },
                average: {
                    "background-opacity": '75%',
                },
                high: {
                    "background-opacity": '95%',
                },
            },
        };
    }

    public readonly data: Tokens_CSS_Style.Data;

    public constructor (
        input: Tokens_CSS_Style.InputParam,
    ) {
        super();

        this.data = mergeArgs(
            Tokens_CSS_Style.default,
            input,
            true,
        );
    }

    public toJSON(): Tokens_CSS_Style.JsonReturn {
        return this.data;
    }

    public toScssVars(): {
        [ K in keyof Tokens_CSS_Style.Data ]: AbstractTokens.ScssReturn;
    } {
        return this.data;
    }
}

/**
 * Utilities for the {@link Tokens_CSS_Style} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_CSS_Style {

    /**
     * @since ___PKG_VERSION___
     */
    export interface AlertStyles {

        /**
         * This should be a theme slug.
         */
        background: string;

        border: {
            /**
             * This should be a theme slug.
             */
            color: string;

            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };

        /**
         * For the headline. This should be a theme slug.
         */
        color: string;

        gap: {
            block: "0" | TokenLevels;
            inline: "0" | TokenLevels;
        };

        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;

            /**
             * In ems.
             */
            size: number;
        };

        'line-height': TokenLevels;

        margin: {
            default: TokenLevels;
        };

        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };
    }

    export interface ButtonStyles {

        border: {
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };

        focus: {
            offset: TokenLevels;
        };

        font: {
            style: "normal" | "italic";
            weight: TokenLevels;
        };

        gap: {
            block: TokenLevels;
            inline: TokenLevels;
        };

        'letter-spacing': string;
        'line-height': TokenLevels;
        'text-transform': CSS.TextTransform;

        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;
            };
        };

        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };

        width: string;
    }

    export interface ButtonStyles_Disabled extends Omit<
        ButtonStyles,
        'border' | 'focus' | 'gap' | 'line-height' | 'margin' | 'padding' | 'width'
    > {
        border: Omit<ButtonStyles[ 'border' ], 'width'>;

        'letter-spacing': string;
        'text-transform': CSS.TextTransform;
    }

    export interface HeadingStyles {

        font: {
            style: "normal" | "italic";
            weight: TokenLevels;
        };

        'letter-spacing': string;
        'line-height': TokenLevels;
        'text-transform': CSS.TextTransform;

        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;
            };
        };
    }

    /**
     * @since 0.1.1-alpha.0
     */
    export interface InputStyles {

        border: {
            radius: "0" | TokenLevels;
            style: string;
            width: TokenLevels;
        };

        focus: {
            offset: TokenLevels;
        };

        label: {
            font: {
                style: "normal" | "italic";
                weight: TokenLevels;
            };

            'line-height': TokenLevels;
        };

        'line-height': TokenLevels;

        margin: {
            block: {
                start: TokenLevels;
                end: TokenLevels;

                /**
                 * This is the gap between a label and its input.
                 */
                gap: TokenLevels;
            };
        };

        padding: {
            block: TokenLevels;
            inline: TokenLevels;
        };

        /**
         * @since ___PKG_VERSION___
         */
        placeholder: {
            font: {
                style: "normal" | "italic";
            };
        };
    }

    /**
     * @since 0.1.1-alpha.0
     */
    export interface InputStyles_Disabled extends Omit<
        InputStyles,
        'border' | 'focus' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'
    > {
        border: Omit<InputStyles[ 'border' ], 'width'>;
    }

    /**
     * CSS allowed value types.
     * 
     * @since 0.1.0-alpha
     */
    export namespace CSS {
        export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {

        /**
         * @since ___PKG_VERSION___
         */
        alert: AlertStyles;

        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
        };

        heading: {
            [ L in RequiredHeadingLevels ]: HeadingStyles;
        } & {
            [ key: number ]: HeadingStyles;
        };

        /**
         * @since 0.1.1-alpha.0
         */
        input: {
            $: InputStyles;
            disabled: InputStyles_Disabled;
        };

        selection: {
            [ C in Exclude<ThemeMode_ContrastOption, 'max'> ]: {
                'background-opacity': string;
            };
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = {

        /**
         * @since ___PKG_VERSION___
         */
        alert?: RecursivePartial<AlertStyles>;

        button?: {
            $?: RecursivePartial<ButtonStyles>;
            disabled?: RecursivePartial<ButtonStyles_Disabled>;
        };

        heading?: {
            [ L in RequiredHeadingLevels ]?: RecursivePartial<HeadingStyles>;
        } & {
            [ key: number ]: RecursivePartial<HeadingStyles>;
        };

        input?: {
            $?: RecursivePartial<InputStyles>;
            disabled?: RecursivePartial<InputStyles_Disabled>;
        };

        selection?: {
            [ C in Exclude<ThemeMode_ContrastOption, 'max'> ]?: {
                'background-opacity'?: string;
            };
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;
}