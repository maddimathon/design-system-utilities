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

    public static buttonStyle(): Tokens_CSS_Style.ButtonStyles {

        const style: Tokens_CSS_Style.ButtonStyles = {

            border: {
                radius: '0',
                style: 'solid',
                width: '200',
            },

            focus: {
                offset: '300',
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

        return style;
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

    public static get default(): Tokens_CSS_Style.Data {

        return {

            button: Tokens_CSS_Style.buttonStyle(),

            heading: objectGenerator(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                ( hdg ) => Tokens_CSS_Style.headingStyle( hdg )
            ),

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

        this.data = mergeArgs( Tokens_CSS_Style.default, input, true );
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

    export namespace CSS {
        export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
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

    export interface ButtonStyles_Partial extends RecursivePartial<ButtonStyles> { }

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

    export interface HeadingStyles_Partial extends Partial<HeadingStyles> { }

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {

        button: ButtonStyles;

        heading: {
            [ L in RequiredHeadingLevels ]: HeadingStyles;
        } & {
            [ key: number ]: HeadingStyles;
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

        button?: ButtonStyles_Partial;

        heading?: {
            [ L in RequiredHeadingLevels ]?: HeadingStyles_Partial;
        } & {
            [ key: number ]: HeadingStyles_Partial;
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