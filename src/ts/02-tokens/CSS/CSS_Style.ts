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
    public static alertStyle(
        iconStyles: Tokens_CSS_Style.IconStyles,
        partial: Tokens_CSS_Style.InputParam[ 'alert' ] = {},
    ): Tokens_CSS_Style.AlertStyles {

        const headingMaker = ( num: number | 'unstyled' ): Tokens_CSS_Style.AlertStyles_Heading => {

            const style = {
                margin: {
                    block: {
                        start: -0.0625,
                    },
                },
            } satisfies Tokens_CSS_Style.AlertStyles_Heading;

            // returns
            if ( num === 'unstyled' ) {
                return style;
            }

            // switch ( num ) {

            //     case 1:
            //         style.margin.block.start = -0.0625;
            //         break;

            //     case 2:
            //         style.margin.block.start = -0.0625;
            //         break;

            //     case 3:
            //         style.margin.block.start = -0.0625;
            //         break;
            // }


            if ( num >= 4 ) {
                style.margin.block.start = -0.09375;
            }

            // if ( num >= 5 ) {
            // }

            // if ( num >= 6 ) {
            // }

            if ( num >= 7 ) {
                style.margin.block.start = -0.125;
            }

            // if ( num >= 8 ) {
            // }

            // if ( num >= 9 ) {
            // }

            // if ( num >= 10 ) {
            // }

            return {
                margin: {
                    block: {
                        start: partial.heading?.[ num ]?.margin?.block.start ?? style.margin.block.start,
                    },
                },
            } satisfies Tokens_CSS_Style.AlertStyles_Heading;
        };

        return mergeArgs(
            {
                background: 'background',

                border: {
                    color: 'ui-primary',
                    radius: '0',
                    style: 'solid',
                    width: '200',
                },

                color: 'text-primary',

                heading: objectGenerator(
                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'unstyled' ] as const,
                    headingMaker,
                ),

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
                        $: iconStyles.size.$,
                        large: iconStyles.size.large,
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
            } satisfies Tokens_CSS_Style.AlertStyles,
            partial,
            true,
        );
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static buttonStyle(
        iconStyles: Tokens_CSS_Style.IconStyles,
        partial?: Tokens_CSS_Style.InputParam[ 'button' ],
    ): {
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
    } {

        const style = mergeArgs(
            {

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

                icon: {
                    buffer: {
                        start: 2.5,
                        end: -0.5,
                    },

                    embedded: {
                        bottom: '0.125em',
                    },

                    size: {
                        font: iconStyles.size.font,
                        pseudo: iconStyles.size.pseudo,
                    },

                    'vertical-align': 'middle',
                },

                'letter-spacing': 'normal',
                'line-height': '100',

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

                'text-transform': 'none',

                width: 'fit-content',

            } satisfies Tokens_CSS_Style.ButtonStyles,
            partial?.$,
            true,
        );

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
    public static headingStyle<T_Key extends keyof Tokens_CSS_Style.Data[ 'heading' ]>(
        heading: T_Key,
        partial?: NonNullable<Tokens_CSS_Style.InputParam[ 'heading' ]>[ T_Key ],
    ): Tokens_CSS_Style.HeadingStyles_Generic<T_Key> {

        const headingAsNum = ( typeof heading === 'number' && heading >= 1 ) ? heading : 11;

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

        // returns for 'unstyled'
        switch ( heading ) {

            case 'unstyled':
                return mergeArgs(
                    {
                        color: 'text-primary',

                        font: {
                            ...style.font,
                            family: 'body',
                            size: 'normal',
                        },

                        'letter-spacing': style[ 'letter-spacing' ],
                        'line-height': style[ 'line-height' ],
                        'text-transform': style[ 'text-transform' ],

                    } satisfies Tokens_CSS_Style.HeadingStyles_Unstyled,
                    partial,
                    true,
                ) satisfies Tokens_CSS_Style.HeadingStyles_Unstyled as Tokens_CSS_Style.HeadingStyles_Generic<T_Key>;

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
        };

        if ( headingAsNum >= 7 ) {
            style.font.weight = '500';
            style.font.style = 'normal';

            style[ 'letter-spacing' ] = '0.0625em';
            style[ 'line-height' ] = '400';
            style[ 'text-transform' ] = 'uppercase';
        }

        if ( headingAsNum >= 8 ) {
            style.font.style = 'italic';
        }

        if ( headingAsNum >= 9 ) {
            style.margin.block.start = '500';
            style[ 'line-height' ] = '500';
        }

        return mergeArgs( style, partial, true ) satisfies Tokens_CSS_Style.HeadingStyles as Tokens_CSS_Style.HeadingStyles_Generic<T_Key>;
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static iconStyle( partial: Tokens_CSS_Style.InputParam[ 'icon' ] = {} ): Tokens_CSS_Style.IconStyles {

        return mergeArgs( {

            color: 'ui',

            inline: {
                buffer: {
                    $: '0.25em',
                    start: 1,
                    end: 0.125,
                },

                'margin-block-start': '0.25em',
            },

            size: {
                $: '1.25em',
                large: '2em',
                font: '0.9375em',
                pseudo: '0.9375em',
            },

            'vertical-align': 'middle',

        }, partial, true );
    }

    /**
     * @since ___PKG_VERSION___
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

        const icon = Tokens_CSS_Style.iconStyle( partial.icon );

        return {
            alert: Tokens_CSS_Style.alertStyle( icon, partial.alert ),
            button: Tokens_CSS_Style.buttonStyle( icon, partial.button ),

            heading: {
                ...objectGenerator(
                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                    ( hdg ) => Tokens_CSS_Style.headingStyle( hdg, partial.heading?.[ hdg ] )
                ),
                unstyled: Tokens_CSS_Style.headingStyle( 'unstyled', partial.heading?.unstyled ),
            },

            icon,

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

        const icon = Tokens_CSS_Style.iconStyle();

        return {

            alert: Tokens_CSS_Style.alertStyle( icon ),

            button: Tokens_CSS_Style.buttonStyle( icon ),

            heading: {
                ...objectGenerator(
                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                    ( hdg ) => Tokens_CSS_Style.headingStyle( hdg )
                ),
                unstyled: Tokens_CSS_Style.headingStyle( 'unstyled' ),
            },

            icon,

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
                        average: '85%',
                        high: '95%',
                    },
                },
            },

            widget: Tokens_CSS_Style.widgetStyle(),
        } as const satisfies Tokens_CSS_Style.Data;
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

        heading: {
            [ H in RequiredHeadingLevels | 'unstyled' ]: AlertStyles_Heading;
        } & {
            [ key: number ]: AlertStyles_Heading;
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
             * With units.
             */
            size: Omit<IconStyles[ 'size' ], 'font' | 'pseudo'>;
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

    export type AlertStyles_Heading = {

        /**
         * Values for the inner heading after an icon.
         */
        margin: {
            block: {
                start: number;
            };
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

        icon: {
            buffer: {
                start: number;
                end: number;
            };

            embedded: {
                /**
                 * With units.
                 */
                bottom: string;
            };

            /**
             * With units.
             */
            size: Omit<IconStyles[ 'size' ], '$' | 'large'>;

            'vertical-align': IconStyles[ 'vertical-align' ];
        };

        'letter-spacing': string;
        'line-height': AnyTokenLevel;

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

        'text-transform': CSS.TextTransform;

        width: string;
    };

    export type ButtonStyles_Disabled = Omit<
        ButtonStyles,
        'border' | 'focus' | 'font' | 'gap' | 'icon' | 'line-height' | 'margin' | 'padding' | 'width'
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
                start: "0" | AnyTokenLevel;
                end: "0" | AnyTokenLevel;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type HeadingStyles_Generic<T_Key extends keyof Tokens_CSS_Style.Data[ 'heading' ]> =
        "unstyled" extends T_Key
        ? HeadingStyles_Unstyled
        : HeadingStyles;

    /**
     * @since ___PKG_VERSION___
     */
    export type HeadingStyles_Unstyled = Omit<HeadingStyles, 'margin'> & {
        /**
         * This should be a theme slug.
         */
        color: string;

        font: HeadingStyles[ 'font' ] & {
            /**
             * This should be a font family slug.
             */
            family: string;

            /**
             * This should be a font size slug.
             */
            size: string;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type IconStyles = {
        /**
         * This should be a theme slug.
         */
        color: string;

        inline: {
            buffer: {
                $: string;
                start: number;
                end: number;
            },

            'margin-block-start': string;
        };

        size: {
            $: string;
            large: string;

            /**
             * For inline icons using the icon font.
             */
            font: string;

            /**
             * For inline icons in before/after pseudo classes.
             */
            pseudo: string;
        };

        'vertical-align': string;
    };

    /**
     * @since ___PKG_VERSION___
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
     * @since ___PKG_VERSION___
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
            unstyled: HeadingStyles_Unstyled;
        } & {
            [ L in RequiredHeadingLevels ]: HeadingStyles;
        } & {
            [ key: number ]: HeadingStyles;
        };

        /**
         * @since ___PKG_VERSION___
         */
        icon: IconStyles;

        /**
         * @since ___PKG_VERSION___
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
        alert?: Omit<RecursivePartial<AlertStyles>, 'heading'> & {
            heading?: undefined | {
                [ H in RequiredHeadingLevels | 'unstyled' ]?: undefined | Partial<AlertStyles_Heading>;
            } & {
                [ key: number ]: undefined | Partial<AlertStyles_Heading>;
            };
        };

        button?: {
            $?: RecursivePartial<ButtonStyles>;
            disabled?: RecursivePartial<ButtonStyles_Disabled>;
        };

        heading?: {
            unstyled?: RecursivePartial<HeadingStyles_Unstyled>;
        } & {
            [ L in RequiredHeadingLevels ]?: RecursivePartial<HeadingStyles>;
        } & {
            [ key: number ]: RecursivePartial<HeadingStyles>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        icon?: RecursivePartial<IconStyles>;

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