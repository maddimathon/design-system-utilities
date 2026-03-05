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
import { mergeArgs } from '@maddimathon/utility-typescript';

import type {
    AnyTokenLevel,
    RequiredHeadingLevels,
    TokenTypes,
    WholeTokenLevel,
} from '../@types.js';

import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../../01-utilities/objectKeySort_Tokens.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Style extends AbstractTokens<{
    data: Tokens_CSS_Style.Data;
    json: Tokens_CSS_Style.JsonReturn;
    scss: Tokens_CSS_Style.ScssVars;
}> {

    /**
     * @since ___PKG_VERSION___
     */
    public static alertStyle( partial: Tokens_CSS_Style.InputParam[ 'alert' ] = {} ): Tokens_CSS_Style.AlertStyles {

        return mergeArgs( {
            background: 'background',

            border: {
                color: 'ui-primary',
                radius: '0',
                style: 'solid',
                width: '200',
            },

            color: 'text-primary',

            headline: {
                font: {
                    size: 'heading-7',
                    style: 'normal',
                    weight: '600',
                },
                'line-height': '200',
            },

            'line-height': '300',

            icon: {
                color: 'ui-primary',
                size: {
                    $: 1.25,
                    large: 2,
                },
            },

            gap: {
                block: '0',
                inline: '300',
            },

            margin: {
                flow: {
                    $: '300',
                    large: '500',
                    small: '200',
                },
            },

            padding: {
                block: '300',
                inline: '300',
            },
        }, partial, true );
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static buttonStyle( partial?: Tokens_CSS_Style.InputParam[ 'button' ] ): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    } {

        const style: Tokens_CSS_Style.ButtonStyles = mergeArgs( {

            border: {
                radius: '0',
                style: 'solid',
                width: '100',
            },

            focus: {
                offset: '400',
            },

            font: {
                size: 'normal',
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
        }, partial?.$ ?? {}, true );

        return {
            $: style,

            disabled: mergeArgs( {
                border: {
                    radius: style.border.radius,
                    style: 'dashed',
                },

                font: {
                    weight: style.font.weight,
                    style: 'italic',
                },

                'letter-spacing': style[ 'letter-spacing' ],
                'text-transform': style[ 'text-transform' ],
            }, partial?.disabled ?? {}, true ),
        } as const satisfies Tokens_CSS_Style.Data[ 'button' ];
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static headingStyle(
        heading: number,
        partial?: NonNullable<Tokens_CSS_Style.InputParam[ 'heading' ]>[ number ],
    ): Tokens_CSS_Style.HeadingStyles {

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

        return mergeArgs( style, partial, true );
    }

    /**
     * @since 0.1.1-alpha.0
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static inputStyle( partial?: Tokens_CSS_Style.InputParam[ 'input' ] ) {

        const style: Tokens_CSS_Style.InputStyles = mergeArgs( {

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
                opacity: {
                    low: '65%',
                    average: '75%',
                },
            },
        }, partial?.$ ?? {}, true );

        const disabled: Tokens_CSS_Style.InputStyles_Variation = {
            ...partial?.disabled,

            border: {
                radius: style.border.radius,
                style: 'dashed',

                ...partial?.disabled?.border,
            },
        };

        const readonly: Tokens_CSS_Style.InputStyles_Variation = {
            ...partial?.readonly,

            border: {
                radius: style.border.radius,
                style: style.border.style,

                ...partial?.readonly?.border,
            },
        };

        return {
            $: style,
            disabled,
            readonly,
        } as const satisfies Tokens_CSS_Style.Data[ 'input' ];
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static widgetStyle( partial?: Tokens_CSS_Style.InputParam[ 'widget' ] ): Tokens_CSS_Style.WidgetStyles {

        const margin = mergeArgs( {
            flow: {
                $: '300' satisfies AnyTokenLevel as AnyTokenLevel,
                large: '500' satisfies AnyTokenLevel as AnyTokenLevel,
                small: '200' satisfies AnyTokenLevel as AnyTokenLevel,
            },
        }, partial?.margin ?? {}, true );

        return {

            border: mergeArgs( {
                color: 'background',
                radius: '0',
                style: 'solid',
                width: '200',
            }, partial?.border ?? {}, true ),

            'button-span': {
                gap: partial?.[ 'button-span' ]?.gap ?? margin.flow.small,
            },

            'line-height': partial?.[ 'line-height' ] ?? '300',

            margin,

            padding: mergeArgs( {
                block: '400',
                inline: '400',
            }, partial?.padding ?? {}, true ),
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    protected static mergeData( partial: Tokens_CSS_Style.InputParam ) {
        const defaults = this.default;

        return {
            alert: Tokens_CSS_Style.alertStyle( partial.alert ),
            button: Tokens_CSS_Style.buttonStyle( partial.button ),

            heading: objectGenerator(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                ( hdg ) => Tokens_CSS_Style.headingStyle( hdg, partial.heading?.[ hdg ] )
            ),

            input: Tokens_CSS_Style.inputStyle( partial.input ),

            margin: mergeArgs(
                defaults.margin as Tokens_CSS_Style.Data[ 'margin' ],
                partial.margin,
                true,
            ),

            selection: {
                ...defaults.selection,
                ...partial.selection,

                background: {
                    ...defaults.selection.background,
                    ...partial.selection?.background,

                    opacity: {
                        ...defaults.selection.background.opacity,
                        ...partial.selection?.background?.opacity,
                    },
                },
            },

            widget: Tokens_CSS_Style.widgetStyle( partial.widget ),
        };
    }

    public static get default() {

        return {

            alert: Tokens_CSS_Style.alertStyle(),

            button: Tokens_CSS_Style.buttonStyle(),

            heading: objectGenerator(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                ( hdg ) => Tokens_CSS_Style.headingStyle( hdg )
            ),

            input: Tokens_CSS_Style.inputStyle(),

            margin: {
                flow: {
                    $: '400',
                    large: '600',
                    small: '300',
                },
            },

            selection: {
                background: {
                    opacity: {
                        low: '65%',
                        average: '75%',
                        high: '95%',
                    },
                },
            },

            widget: Tokens_CSS_Style.widgetStyle(),
        } satisfies Tokens_CSS_Style.Data;
    }

    public readonly data: Tokens_CSS_Style.Data;

    public constructor (
        input: Tokens_CSS_Style.InputParam,
    ) {
        super();
        this.data = Tokens_CSS_Style.mergeData( input );
    }

    public toJSON(): Tokens_CSS_Style.JsonReturn {
        return this.data;
    }

    public toScssVars(): Tokens_CSS_Style.ScssVars {
        return objectKeySort_Tokens( this.data, true );
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
    export type AlertStyles = {

        /**
         * This should be a theme slug.
         */
        background: string;

        border: {
            /**
             * This should be a theme slug.
             */
            color: string;

            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };

        /**
         * For the headline. This should be a theme slug.
         */
        color: string;

        gap: {
            block: "0" | AnyTokenLevel;
            inline: "0" | AnyTokenLevel;
        };

        headline: {
            font: {
                /**
                 * Should be a font-size token slug.
                 */
                size: string;
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };

            'line-height': AnyTokenLevel;
        };

        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;

            /**
             * In ems.
             */
            size: {
                $: number;
                large: number;
            };
        };

        'line-height': AnyTokenLevel;

        margin: {
            /**
             * Values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        };

        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };

    export type ButtonStyles = {

        border: {
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };

        focus: {
            offset: AnyTokenLevel;
        };

        font: {
            /**
             * Should be a font-size token slug.
             * 
             * @since ___PKG_VERSION___
             */
            size: string;
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };

        gap: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };

        'letter-spacing': string;
        'line-height': AnyTokenLevel;
        'text-transform': CSS.TextTransform;

        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;
            };
        };

        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };

        width: string;
    };

    export type ButtonStyles_Disabled = Omit<
        ButtonStyles,
        'border' | 'focus' | 'font' | 'gap' | 'line-height' | 'margin' | 'padding' | 'width'
    > & {
        border: Omit<ButtonStyles[ 'border' ], 'width'>;
        font: Omit<ButtonStyles[ 'font' ], 'size'>;
        'letter-spacing': string;
        'text-transform': CSS.TextTransform;
    };

    /**
     * CSS allowed value types.
     * 
     * @since 0.1.0-alpha
     */
    export namespace CSS {
        export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }

    export type HeadingStyles = {

        font: {
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };

        'letter-spacing': string;
        'line-height': AnyTokenLevel;
        'text-transform': CSS.TextTransform;

        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;
            };
        };
    };

    /**
     * @since 0.1.1-alpha.0
     */
    export type InputStyles = {

        border: {
            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };

        focus: {
            offset: AnyTokenLevel;
        };

        label: {
            font: {
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };

            'line-height': AnyTokenLevel;
        };

        'line-height': AnyTokenLevel;

        margin: {
            block: {
                start: AnyTokenLevel;
                end: AnyTokenLevel;

                /**
                 * This is the gap between a label and its input.
                 */
                gap: AnyTokenLevel;
            };
        };

        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };

        /**
         * @since ___PKG_VERSION___
         */
        placeholder: {

            font: {
                style: "normal" | "italic";
            };

            opacity: {
                /**
                 * Contrast modes.
                 */
                [ C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'high' | 'max'> ]?: string;
            };
        };
    };

    /**
     * @since 0.1.1-alpha.0
     * @since ___PKG_VERSION___ — Renamed from InputStyles_Disabled to InputStyles_Variation.
     */
    export type InputStyles_Variation = Omit<
        InputStyles,
        'border' | 'focus' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'
    > & {
        border: Omit<InputStyles[ 'border' ], 'width'>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type WidgetStyles = {

        border: {
            /**
             * This should be a theme slug.
             */
            color: string;

            radius: "0" | AnyTokenLevel;
            style: string;
            width: AnyTokenLevel;
        };

        /**
         * For interior button spans.
         */
        'button-span': {
            gap: AnyTokenLevel;
        };

        'line-height': AnyTokenLevel;

        margin: {
            /**
             * Values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        };

        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };

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
            disabled: InputStyles_Variation;
            readonly: InputStyles_Variation;
        };

        /**
         * @since ___PKG_VERSION___
         */
        margin: {
            /**
             * Default values for the set-flow-margins mixin.
             */
            flow: {
                $: AnyTokenLevel;
                large: AnyTokenLevel;
                small: AnyTokenLevel;
            };
        };

        /**
         * @since ___PKG_VERSION___ — Restructured object nesting.
         */
        selection: {
            background?: {
                opacity?: {
                    /**
                     * Contrast modes.
                     */
                    [ C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'> ]?: string;
                };
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        widget: WidgetStyles;
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
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        margin?: RecursivePartial<Data[ 'margin' ]>;

        /**
         * @since ___PKG_VERSION___ — Restructured object nesting.
         */
        selection?: {
            background?: {
                opacity?: {
                    /**
                     * Contrast modes.
                     */
                    [ C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'> ]?: string;
                };
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        widget?: RecursivePartial<WidgetStyles>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars = Data;
}