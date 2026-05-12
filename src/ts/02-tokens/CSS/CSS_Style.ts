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
import { deleteUndefinedProps, mergeArgs } from '@maddimathon/utility-typescript';

import type {
    AnyTokenLevel,
    RequiredHeadingLevels,
    TokenTypes,
    WholeTokenLevel,
} from '../@types.js';

import { objectGenerator, objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
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
     * Builds style tokens faster.
     * 
     * @since ___PKG_VERSION___
     */
    public static async build( partial: Tokens_CSS_Style.InputParam = {} ): Promise<Tokens_CSS_Style> {

        return Tokens_CSS_Style.buildData( partial ).then(
            ( data ) => new Tokens_CSS_Style( data )
        );
    }

    /**
     * Builds style tokens data faster.
     * 
     * @since ___PKG_VERSION___
     */
    public static async buildData( partial: Tokens_CSS_Style.InputParam = {} ): Promise<Tokens_CSS_Style.Data> {
        const defaults = {
            'flow-margin': {
                $: '400',
                large: '600',
                small: '300',
                button: '300',
            },

            hr: {
                border: {
                    width: '200',
                },

                color: 'ui-primary',

                'flow-margin': {
                    self: 'margins-flow-firm',
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
        } satisfies Pick<Tokens_CSS_Style.Data, 'flow-margin' | 'hr' | 'selection'>;


        return Promise.all( [
            Tokens_CSS_Style.iconStyle( partial.icon ),

            objectGeneratorAsync(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                async ( hdg ) => Tokens_CSS_Style.headingStyle( hdg, partial.heading?.[ hdg ] )
            ).then( async ( hdgs ) => ( {
                ...hdgs,
                unstyled: await Tokens_CSS_Style.headingStyle( 'unstyled', partial.heading?.unstyled ),
            } ) ),

            Tokens_CSS_Style.widgetStyle( partial.widget ),
        ] ).then(
            async ( [ icon, heading, widget ] ) => {

                const [
                    alert,
                    button,
                    input,
                    subtitle,
                    toggle,
                ] = await Promise.all( [
                    Tokens_CSS_Style.alertStyle( icon, partial.alert ),
                    Tokens_CSS_Style.buttonStyle( icon, partial.button ),
                    Tokens_CSS_Style.inputStyle( partial.input ),
                    Tokens_CSS_Style.subtitleStyle( heading, partial.subtitle ),
                    Tokens_CSS_Style.toggleStyle( icon, widget, partial.toggle ),
                ] );

                return {
                    alert,
                    button,

                    'flow-margin': mergeArgs(
                        defaults[ 'flow-margin' ],
                        partial[ 'flow-margin' ],
                        true,
                    ),

                    heading,

                    hr: mergeArgs(
                        defaults.hr,
                        partial.hr,
                        true,
                    ),

                    icon,
                    input,

                    selection: mergeArgs(
                        defaults.selection,
                        partial.selection,
                        true,
                    ),

                    subtitle,
                    toggle,

                    widget,
                };
            }
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async alertStyle(
        iconStyles: Tokens_CSS_Style.IconStyles,
        partial: Tokens_CSS_Style.InputParam[ 'alert' ] = {},
    ): Promise<Tokens_CSS_Style.AlertStyles> {

        const headingMaker = ( num: number | 'unstyled' ): Tokens_CSS_Style.AlertStyles_Heading => {

            const style = {
                'background-color': 'background-primary',

                margin: {
                    block: {
                        start: 0.1875,
                        end: 0,
                    },
                },
            } satisfies Tokens_CSS_Style.AlertStyles_Heading;

            // returns
            if ( num === 'unstyled' ) {
                return {
                    'background-color': partial.heading?.[ num ]?.[ 'background-color' ] ?? style[ 'background-color' ],

                    margin: {
                        block: {
                            start: partial.heading?.[ num ]?.margin?.block.start ?? style.margin.block.start,
                            end: partial.heading?.[ num ]?.margin?.block.end ?? style.margin.block.end,
                        },
                    },
                } satisfies Tokens_CSS_Style.AlertStyles_Heading;
            }

            if ( num >= 1 ) {
                style.margin.block.start = 0;
            }

            if ( num >= 2 ) {
                style.margin.block.start = 0.03125;
            }

            if ( num >= 3 ) {
                style.margin.block.start = 0.0625;
            }

            if ( num >= 4 ) {
                style.margin.block.start = 0.09375;
            }

            // if ( num >= 5 ) {
            // }

            if ( num >= 6 ) {
                style.margin.block.start = 0.0625;
            }

            if ( num >= 7 ) {
                style.margin.block.start = 0.03125;
                style[ 'background-color' ] = 'background-secondary';
            }

            // if ( num >= 8 ) {
            // }

            if ( num >= 9 ) {
                style.margin.block.start = 0;
                style[ 'background-color' ] = 'background-grey';
            }

            if ( num >= 10 ) {
                style.margin.block.start = 0.03125;
            }

            return {
                'background-color': partial.heading?.[ num ]?.[ 'background-color' ] ?? style[ 'background-color' ],

                margin: {
                    block: {
                        start: partial.heading?.[ num ]?.margin?.block.start ?? style.margin.block.start,
                        end: partial.heading?.[ num ]?.margin?.block.end ?? style.margin.block.end,
                    },
                },
            } satisfies Tokens_CSS_Style.AlertStyles_Heading;
        };

        const heading = mergeArgs(
            objectGenerator(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'unstyled' ] as const,
                headingMaker,
            ) satisfies Tokens_CSS_Style.AlertStyles[ 'heading' ],
            deleteUndefinedProps( partial.heading ?? {} ),
            true,
        );

        return mergeArgs(
            {
                background: 'background-primary',

                border: {
                    color: 'ui-primary',
                    radius: 0,
                    style: 'solid',
                    width: '200',
                },

                color: 'text-primary',

                heading,

                headline: {
                    font: {
                        size: 'heading-7',
                        style: 'normal',
                        weight: '600',
                    },

                    'line-height': '200',

                    margin: {
                        block: {
                            start: 0.1875,
                        },
                    },
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
                    block: 0,
                    inline: '300',
                },

                'flow-margin': {
                    $: '300',
                    large: '400',
                    small: '200',
                    button: '200',
                    self: 'margins-flow-firm',
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
    public static async buttonStyle(
        iconStyles: Tokens_CSS_Style.IconStyles,
        partial?: Tokens_CSS_Style.InputParam[ 'button' ],
    ): Promise<{
        $: Tokens_CSS_Style.ButtonStyles;
        disabled: Tokens_CSS_Style.ButtonStyles_Disabled;
        inline: Tokens_CSS_Style.ButtonStyles_Inline;
    }> {

        const style = mergeArgs(
            {
                border: {
                    radius: 0,
                    style: 'solid',
                    width: '100',
                },

                display: 'block',

                'flow-margin': {
                    self: 'margins-flow-firm',
                },

                focus: {
                    offset: '400',
                },

                font: {
                    size: 'normal',
                    style: 'normal',
                    weight: '500',
                },

                // gap: {
                //     block: '300',
                //     inline: '200',
                // },

                icon: {
                    buffer: {
                        $: iconStyles.inline.buffer.$,
                        start: 2,
                        end: 0,
                    },

                    embedded: {
                        bottom: '0.0625em',
                    },

                    font: {
                        top: iconStyles.font.top,
                    },
                    pseudo: {
                        top: iconStyles.pseudo.top,
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

            disabled: mergeArgs(
                {
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
                } satisfies Tokens_CSS_Style.ButtonStyles_Disabled,
                partial?.disabled ?? {},
                true,
            ),

            inline: mergeArgs(
                {
                    border: {
                        radius: style.border.radius,
                        style: style.border.style,
                    },

                    focus: {
                        offset: style.focus.offset,
                    },

                    font: {
                        weight: style.font.weight,
                        size: 'smaller-1',
                        style: style.font.style,
                    },

                    // gap: {
                    //     block: style.gap.block,
                    //     inline: style.gap.inline,
                    // },

                    icon: {
                        buffer: {
                            $: style.icon.buffer.$,
                            start: style.icon.buffer.start,
                            end: style.icon.buffer.end,
                        },

                        embedded: style.icon.embedded,
                        font: style.icon.font,
                        pseudo: style.icon.pseudo,

                        size: {
                            font: style.icon.size.font,
                            pseudo: style.icon.size.pseudo,
                        },

                        'vertical-align': style.icon[ 'vertical-align' ],
                    },

                    'letter-spacing': style[ 'letter-spacing' ],
                    'line-height': style[ 'line-height' ],

                    padding: {
                        block: style.padding.block,
                        inline: style.padding.inline,
                    },

                    'text-transform': style[ 'text-transform' ],

                    width: style.width,

                    'vertical-align': 'baseline',

                } satisfies Tokens_CSS_Style.ButtonStyles_Inline,
                partial?.inline ?? {},
                true,
            ),

        } as const satisfies Tokens_CSS_Style.Data[ 'button' ];
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static async headingStyle<T_Key extends keyof Tokens_CSS_Style.Data[ 'heading' ]>(
        heading: T_Key,
        partial?: NonNullable<Tokens_CSS_Style.InputParam[ 'heading' ]>[ T_Key ],
    ): Promise<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>> {

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
                    end: '200',
                },
            },
        };

        // returns
        if ( heading === 'unstyled' ) {
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
        }

        if ( headingAsNum >= 1 ) {
            style.font.weight = '900';
            style[ 'line-height' ] = '200';
            style.margin.block.start = '800';
        }

        if ( headingAsNum >= 2 ) {
            style.font.weight = '800';
        }

        if ( headingAsNum >= 3 ) {
            style.font.weight = '700';
        }

        if ( headingAsNum >= 4 ) {
            style.font.style = 'italic';
            style.margin.block.start = '600';
        }

        if ( headingAsNum >= 5 ) {
            style.font.weight = '600';
            style.font.style = 'italic';
            style.margin.block.end = '400';
        }

        if ( headingAsNum >= 6 ) {
            style.font.weight = '500';
            style[ 'line-height' ] = '300';
        }

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
    public static async iconStyle( partial: Tokens_CSS_Style.InputParam[ 'icon' ] = {} ): Promise<Tokens_CSS_Style.IconStyles> {

        return mergeArgs( {

            color: 'ui',

            font: {
                top: '0.1875em',
            },

            inline: {
                buffer: {
                    $: '0.25em',
                    start: 1,
                    end: 0.125,
                },

                'line-height': 1,
            },

            pseudo: {
                top: '-0.0625em',
            },

            size: {
                $: '1.25em',
                large: '2em',
                font: '1em',
                pseudo: '1em',
            },

            'vertical-align': 'middle',

        }, partial, true );
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async inputStyle( partial?: Tokens_CSS_Style.InputParam[ 'input' ] ): Promise<Tokens_CSS_Style.Data[ 'input' ]> {

        const style = mergeArgs( {

            border: {
                radius: 0,
                style: 'solid',
                width: '100',
            },

            focus: {
                offset: '400',
            },

            icons: {

                'letter-spacing': 'normal',

                offset: {
                    block: {
                        start: '0.5em',
                        end: '0em',
                    },
                },
            },

            label: {

                font: {
                    style: 'normal',
                    weight: '500',
                },

                'line-height': '200',
            },

            'line-height': '300',

            // margin: {
            //     block: {
            //         start: '400',
            //         end: '400',
            //         gap: '200',
            //     },
            // },

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
        } satisfies Tokens_CSS_Style.InputStyles, partial?.$ ?? {}, true );

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
            file: {
                padding: {
                    ...style.padding,
                    ...partial?.file?.padding,
                },
            },
            disabled,
            readonly,
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async subtitleStyle(
        headingStyles: Tokens_CSS_Style.Data[ 'heading' ],
        partial: Tokens_CSS_Style.InputParam[ 'subtitle' ],
    ): Promise<Tokens_CSS_Style.SubtitleStyles> {

        const color = partial?.color ?? 'text-grey';
        const fontSize = partial?.font?.size ?? 'heading-6';

        const fontSize_headingNum_matches = fontSize.match( /^heading-(\d+)$/ ) as null | [ string, string ];

        let _headingNum: number | undefined;

        if ( fontSize_headingNum_matches && fontSize_headingNum_matches[ 1 ] ) {
            _headingNum = Number( fontSize_headingNum_matches[ 1 ] );
        } else {

            const color_headingNum_matches = fontSize.match( /^heading-(\d+)$/ ) as null | [ string, string ];

            if ( color_headingNum_matches && color_headingNum_matches[ 1 ] ) {
                _headingNum = Number( color_headingNum_matches[ 1 ] );
            }
        }

        const headingNum = _headingNum ?? 6;

        return {
            color,

            font: {
                size: fontSize,
                style: partial?.font?.style ?? headingStyles.unstyled.font.style,
                weight: partial?.font?.weight ?? headingStyles.unstyled.font.weight,
            },

            icon: {
                color: partial?.icon?.color ?? partial?.color?.replace( /^text-/gi, 'ui-' ) ?? 'ui-grey',
            },

            'letter-spacing': partial?.[ 'letter-spacing' ] ?? 'normal',
            'line-height': partial?.[ 'line-height' ] ?? headingStyles[ headingNum ]?.[ 'line-height' ] ?? headingStyles[ 6 ][ 'line-height' ],

            margin: {
                block: {
                    start: partial?.margin?.block?.start ?? '200',
                    end: partial?.margin?.block?.start ?? headingStyles[ headingNum ]?.margin.block.start ?? headingStyles[ 6 ].margin.block.end,
                },
            },

            'text-transform': partial?.[ 'text-transform' ] ?? 'none',
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async toggleStyle(
        iconStyles: Tokens_CSS_Style.IconStyles,
        widgetStyles: Tokens_CSS_Style.WidgetStyles,
        partial: Tokens_CSS_Style.InputParam[ 'toggle' ] = {},
    ): Promise<Tokens_CSS_Style.ToggleStyles> {

        const flowMargin = {
            $: widgetStyles[ 'flow-margin' ].$,
            large: widgetStyles[ 'flow-margin' ].large,
            small: widgetStyles[ 'flow-margin' ].small,

            ...partial?.[ 'flow-margin' ] ?? {},

            button: partial?.[ 'flow-margin' ]?.button ?? widgetStyles[ 'flow-margin' ].button,
            self: 'margins-flow-firm',
        } as const satisfies Tokens_CSS_Style.ToggleStyles[ 'flow-margin' ];

        const headingMaker = ( num: number | 'unstyled' ): Tokens_CSS_Style.ToggleStyles_ControlHeading => {

            const style = {
                margin: {
                    block: {
                        end: 0,
                    },
                },

                padding: {
                    block: {
                        end: '200',
                    },
                },
            } satisfies Tokens_CSS_Style.ToggleStyles_ControlHeading;

            // returns
            if ( num === 'unstyled' ) {
                return {
                    margin: {
                        block: {
                            end: partial.control?.$?.margin?.block?.end ?? style.margin.block.end,
                        },
                    },

                    padding: {
                        block: {
                            end: partial.control?.$?.padding?.block?.end ?? style.padding.block.end,
                        },
                    },
                } satisfies Tokens_CSS_Style.ToggleStyles_ControlHeading;
            }

            // if ( num >= 1 ) {
            // style.padding.block.end = 0;
            // }

            // if ( num >= 2 ) {
            // }

            // if ( num >= 3 ) {
            // }

            // if ( num >= 4 ) {
            // }

            // if ( num >= 5 ) {
            // }

            // if ( num >= 6 ) {
            // }

            // if ( num >= 7 ) {
            // }

            // if ( num >= 8 ) {
            // }

            // if ( num >= 9 ) {
            // }

            // if ( num >= 10 ) {
            // }

            return {
                margin: {
                    block: {
                        end: partial.control?.heading?.[ num ]?.margin?.block?.end ?? style.margin.block.end,
                    },
                },

                padding: {
                    block: {
                        end: partial.control?.heading?.[ num ]?.padding?.block?.end ?? style.padding.block.end,
                    },
                },
            } satisfies Tokens_CSS_Style.ToggleStyles_ControlHeading;
        };

        const defaultControl = headingMaker( 'unstyled' );

        const content = {

            background: partial.content?.background ?? widgetStyles.background,

            border: {

                radius: {
                    $: partial.content?.border?.radius?.$ ?? widgetStyles.border.radius,
                    top: partial.content?.border?.radius?.top ?? widgetStyles.border.radius,
                },

                style: {
                    $: partial.content?.border?.style?.$ ?? 'dotted',
                    top: partial.content?.border?.style?.top ?? 'solid',
                },

                width: partial.content?.border?.width ?? widgetStyles.border.width,
            },

            'line-height': partial.content?.[ 'line-height' ] ?? widgetStyles[ 'line-height' ],

            padding: {
                block: partial.content?.padding?.block ?? widgetStyles.padding.block,
                inline: partial.content?.padding?.inline ?? widgetStyles.padding.inline,
            },

        } as const satisfies Tokens_CSS_Style.ToggleStyles[ 'content' ];

        const control = {

            $: {
                margin: {
                    block: {
                        end: partial.control?.$?.margin?.block?.end ?? defaultControl.margin.block.end,
                    },
                },

                padding: {
                    block: {
                        end: partial.control?.$?.padding?.block?.end ?? defaultControl.padding.block.end,
                    },
                },
            },

            heading: mergeArgs(
                objectGenerator(
                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                    headingMaker,
                ) satisfies Tokens_CSS_Style.ToggleStyles[ 'control' ][ 'heading' ],
                deleteUndefinedProps( partial.control?.heading ?? {} ),
                true,
            ),
        } as const satisfies Tokens_CSS_Style.ToggleStyles[ 'control' ];

        return {
            content,
            control,

            'flow-margin': flowMargin,

            icon: {
                buffer: {
                    start: 0,
                    end: '0.25em',
                },

                size: iconStyles.size.pseudo,

                'vertical-align': 'middle',
            },

            nav: {
                content: {
                    background: partial.nav?.content?.background ?? partial.nav?.title?.background ?? 'background',

                    border: {
                        width: partial.nav?.content?.border?.width ?? content.border.width,
                    },
                },

                title: {
                    background: partial.nav?.title?.background ?? content.background,
                },
            },
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async widgetStyle( partial?: Tokens_CSS_Style.InputParam[ 'widget' ] ): Promise<Tokens_CSS_Style.WidgetStyles> {

        const flowMargin = {
            $: '300' satisfies AnyTokenLevel,
            large: '500' satisfies AnyTokenLevel,
            small: '200' satisfies AnyTokenLevel,

            ...partial?.[ 'flow-margin' ] ?? {},

            button: partial?.[ 'flow-margin' ]?.button ?? '200' satisfies AnyTokenLevel,
        } as const;

        return {

            background: 'background-grey',

            border: mergeArgs( {
                color: 'ui-grey',
                radius: 0,
                style: 'solid',
                width: '200',
            }, partial?.border ?? {}, true ),

            'line-height': partial?.[ 'line-height' ] ?? '300',

            'flow-margin': flowMargin,

            padding: mergeArgs( {
                block: '400',
                inline: '400',
            }, partial?.padding ?? {}, true ),
        };
    }

    public static get default(): Promise<Tokens_CSS_Style.Data> {

        return Tokens_CSS_Style.buildData();
    }

    protected constructor (
        public readonly data: Tokens_CSS_Style.Data,
    ) {
        super();
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

            radius: CSS.BorderRadius;
            style: string;
            width: CSS.BorderWidth;
        };

        /**
         * For the headline. This should be a theme slug.
         */
        color: string;

        gap: {
            block: 0 | AnyTokenLevel;
            inline: 0 | AnyTokenLevel;
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

            'line-height': CSS.LineHeight;

            /**
             * Value for the first item after an icon (to be in em). Gets
             * overruled if that item is a heading.
             */
            margin: {
                block: {
                    start: number;
                };
            };
        };

        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;

            size: Omit<IconStyles[ 'size' ], 'font' | 'pseudo'>;
        };

        'line-height': CSS.LineHeight;

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin & {
            self: 'margins-flow-firm' | 'margins-flow-firm-large' | 'margins-flow-firm-small';
        };

        padding: {
            block: AnyTokenLevel;
            inline: AnyTokenLevel;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type AlertStyles_Heading = {
        /**
         * This should be a theme slug.
         */
        'background-color': string;

        /**
         * Values for the inner heading after an icon (to be in em).
         */
        margin: {
            block: {
                start: number;
                end: number;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ButtonStyles = {

        border: {
            radius: CSS.BorderRadius;
            style: string;
            width: CSS.BorderWidth;
        };

        display: "block" | "flex";

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': {
            self: 'margins-flow-firm' | 'margins-flow-firm-large' | 'margins-flow-firm-small';
        };

        focus: {
            offset: AnyTokenLevel;
        };

        font: {
            /**
             * Should be a font-size token slug.
             */
            size: string;

            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };

        icon: Pick<IconStyles, 'font' | 'pseudo' | 'vertical-align'> & {
            buffer: IconStyles[ 'inline' ][ 'buffer' ];

            embedded: {
                bottom: CSS.Number.Em;
            };

            font: Pick<IconStyles[ 'font' ], 'top'>;
            pseudo: Pick<IconStyles[ 'pseudo' ], 'top'>;

            size: Omit<IconStyles[ 'size' ], '$' | 'large'>;
        };

        'letter-spacing': CSS.LetterSpacing;
        'line-height': CSS.LineHeight;

        margin: {
            block: {
                start: 0 | AnyTokenLevel;
                end: 0 | AnyTokenLevel;
            };
        };

        padding: {
            block: 0 | AnyTokenLevel;
            inline: 0 | AnyTokenLevel;
        };

        'text-transform': CSS.TextTransform;

        width: string;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ButtonStyles_Disabled = Omit<
        ButtonStyles,
        'border' | 'display' | 'flow-margin' | 'focus' | 'font' | 'gap' | 'icon' | 'line-height' | 'margin' | 'padding' | 'width'
    > & {
        border: Omit<ButtonStyles[ 'border' ], 'width'>;
        font: Omit<ButtonStyles[ 'font' ], 'size'>;
    };

    /**
     * Inline buttons are buttons meant to be inline with text (rather than in
     * its own line(s)).
     * 
     * @since ___PKG_VERSION___
     */
    export type ButtonStyles_Inline = Omit<ButtonStyles, 'border' | 'display' | 'flow-margin' | 'margin'> & {
        border: Omit<ButtonStyles[ 'border' ], 'width'>;
        'vertical-align': string;
    };

    /**
     * CSS allowed value types.
     * 
     * @since 0.1.0-alpha
     */
    export namespace CSS {

        /**
         * @since ___PKG_VERSION___
         */
        export type BorderRadius = 0 | AnyTokenLevel;

        /**
         * @since ___PKG_VERSION___
         */
        export type BorderWidth = 0 | AnyTokenLevel;

        /**
         * Global keywords available for most properties.
         * 
         * @since ___PKG_VERSION___
         */
        export type GlobalKeywords = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

        /**
         * @since ___PKG_VERSION___
         */
        export type LetterSpacing = 'normal' | number | Number.Em | Number.Percent | 'inherit';

        /**
         * @since ___PKG_VERSION___
         */
        export type LineHeight = 'normal' | number | Number.Em | Number.Percent | AnyTokenLevel | GlobalKeywords;

        /**
         * @since ___PKG_VERSION___
         */
        export namespace Number {

            /**
             * A number with em units.
             * 
             * @since ___PKG_VERSION___
             */
            export type Em = 0 | `${ number }em`;

            /**
             * A number with % units.
             * 
             * @since ___PKG_VERSION___
             */
            export type Percent = 0 | `${ number }%`;
        }

        /**
         * @since 0.1.0-alpha
         */
        export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "math-auto";
    }

    /**
     * The flow margins to be included in various other styles for the
     * set-flow-margins mixin.
     */
    export type FlowMargin = {
        $: AnyTokenLevel;
        large: AnyTokenLevel;
        small: AnyTokenLevel;

        /**
         * Gap for button spans.
         */
        button: AnyTokenLevel;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type HeadingStyles = {

        font: {
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };

        'letter-spacing': string;
        'line-height': CSS.LineHeight;
        'text-transform': CSS.TextTransform;

        margin: {
            block: {
                start: 0 | AnyTokenLevel;
                end: 0 | AnyTokenLevel;
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

        font: {
            top: CSS.Number.Em;
        };

        inline: {
            buffer: {
                $: CSS.Number.Em;
                start: number;
                end: number;
            },

            'line-height': 'normal' | Exclude<CSS.LineHeight, AnyTokenLevel>;
        };

        pseudo: {
            top: CSS.Number.Em;
        };

        size: {
            $: CSS.Number.Em;
            large: CSS.Number.Em;

            /**
             * For inline icons using the icon font.
             */
            font: CSS.Number.Em;

            /**
             * For inline icons in before/after pseudo classes.
             */
            pseudo: CSS.Number.Em;
        };

        'vertical-align': string;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputStyles = {

        border: {
            radius: CSS.BorderRadius;
            style: string;
            width: CSS.BorderWidth;
        };

        focus: {
            offset: AnyTokenLevel;
        };

        /**
         * Used for input fields with the icon font family utility class.
         */
        icons: {
            'letter-spacing': string;

            offset: {
                block: {
                    start: CSS.Number.Em;
                    end: CSS.Number.Em;
                };
            };
        };

        label: {
            font: {
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };

            'line-height': CSS.LineHeight;
        };

        'line-height': CSS.LineHeight;

        // margin: {
        //     block: {
        //         start: AnyTokenLevel;
        //         end: AnyTokenLevel;

        //         /**
        //          * This is the gap between a label and its input.
        //          */
        //         gap: AnyTokenLevel;
        //     };
        // };

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
        'border' | 'focus' | 'icons' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'
    > & {
        border: Omit<InputStyles[ 'border' ], 'width'>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type SubtitleStyles = Omit<HeadingStyles_Unstyled, 'font'> & {

        font: Omit<HeadingStyles_Unstyled[ 'font' ], 'family'>;

        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;
        };

        margin: HeadingStyles[ 'margin' ];
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ToggleStyles = {

        /**
         * For the toggle content.
         */
        content: {
            /**
             * This should be a theme slug.
             */
            background: string;

            border: {

                radius: {
                    $: CSS.BorderRadius;
                    top: CSS.BorderRadius;
                };

                style: {
                    $: "dotted" | "solid";
                    top: "dotted" | "solid";
                };

                width: CSS.BorderWidth;
            };

            'line-height': CSS.LineHeight;

            padding: {
                block: AnyTokenLevel;
                inline: AnyTokenLevel;
            };
        };

        /**
         * For the toggle control.
         */
        control: {
            $: {
                margin: {
                    block: {
                        end: 0 | AnyTokenLevel;
                    };
                };

                padding: {
                    block: {
                        end: 0 | CSS.Number.Em | AnyTokenLevel;
                    };
                };
            };

            heading: {
                [ H in RequiredHeadingLevels ]: ToggleStyles_ControlHeading;
            } & {
                [ key: number ]: ToggleStyles_ControlHeading;
            };
        };

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin & {
            self: 'margins-flow-firm' | 'margins-flow-firm-large' | 'margins-flow-firm-small';
        };

        icon: Pick<IconStyles, 'vertical-align'> & {
            buffer: {
                start: CSS.Number.Em;
                end: CSS.Number.Em;
            };

            size: IconStyles[ 'size' ][ '$' ];
        };

        /**
         * For the ToggleNavMenu astro component and
         * snippet-support-astro-toggle-nav-menu mixin.
         */
        nav: {

            /**
             * For the toggle content.
             */
            content: {
                /**
                 * This should be a theme slug.
                 */
                background: string;

                border: {
                    width: CSS.BorderWidth;
                };
            };

            title: {
                /**
                 * This should be a theme slug.
                 */
                background: string;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ToggleStyles_ControlHeading = {
        margin: {
            block: {
                end: 0 | AnyTokenLevel;
            };
        };

        padding: {
            block: {
                end: 0 | CSS.Number.Em | AnyTokenLevel;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type WidgetStyles = {
        /**
         * This should be a theme slug.
         */
        background: string;

        border: {
            /**
             * This should be a theme slug.
             */
            color: string;

            radius: CSS.BorderRadius;
            style: string;
            width: CSS.BorderWidth;
        };

        'line-height': CSS.LineHeight;

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin;

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
            inline: ButtonStyles_Inline;
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
        hr: {
            border: {
                width: CSS.BorderWidth;
            },

            /**
             * This should be a theme slug.
             */
            color: string;

            'flow-margin': {
                self: 'margins-flow-firm' | 'margins-flow-firm-small' | 'margins-flow-firm-large',
            },
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
            file: Pick<InputStyles, 'padding'>;
            disabled: InputStyles_Variation;
            readonly: InputStyles_Variation;
        };

        /**
         * Default values for the set-flow-margins mixin.
         * 
         * @since ___PKG_VERSION___
         */
        'flow-margin': FlowMargin;

        /**
         * Toggle block styles.
         * 
         * @since ___PKG_VERSION___
         */
        toggle: ToggleStyles;

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
        subtitle: SubtitleStyles;

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
            inline?: RecursivePartial<ButtonStyles_Inline>;
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
        hr?: RecursivePartial<Data[ 'hr' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        icon?: RecursivePartial<IconStyles>;

        input?: {
            $?: RecursivePartial<InputStyles>;
            file?: RecursivePartial<Pick<InputStyles, 'padding'>>;
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        'flow-margin'?: RecursivePartial<Data[ 'flow-margin' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        toggle?: RecursivePartial<ToggleStyles>;

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
        subtitle?: RecursivePartial<SubtitleStyles>;

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