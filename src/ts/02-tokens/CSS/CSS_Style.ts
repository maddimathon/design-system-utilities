/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { PartialExcept, RecursivePartial } from '@maddimathon/utility-typescript/types';
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
export class Tokens_CSS_Style<T_Params extends TokenTypes.Style.TypeParams> extends AbstractTokens<{
    data: Tokens_CSS_Style.Data<T_Params>;
    json: Tokens_CSS_Style.JsonReturn<T_Params>;
    scss: Tokens_CSS_Style.ScssVars<T_Params>;
}> {

    /**
     * Builds style tokens faster.
     * 
     * @since ___PKG_VERSION___
     */
    public static async build<T_Params extends TokenTypes.Style.TypeParams>( partial: Tokens_CSS_Style.InputParam<T_Params> = {} ): Promise<Tokens_CSS_Style<T_Params>> {

        return Tokens_CSS_Style.buildData( partial ).then(
            ( data ) => new Tokens_CSS_Style( data )
        );
    }

    /**
     * Builds style tokens data faster.
     * 
     * @since ___PKG_VERSION___
     */
    public static async buildData<T_Params extends TokenTypes.Style.TypeParams>( partial: Tokens_CSS_Style.InputParam<T_Params> = {} ): Promise<Tokens_CSS_Style.Data<T_Params>> {
        const defaults = {
            'flow-margin': {
                $: '400',
                large: '600',
                small: '300',
                button: {
                    $: '300',
                    touch: '400',
                },
            },

            form: {
                $: {
                    'flow-margin': {
                        self: 'margins-flow-large',
                    },
                },
                search: {
                    'flow-margin': {
                        self: 'margins-flow-firm',
                    },
                },
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

            label: {
                'flow-margin': {
                    self: 'margins-flow',
                },
            },

            logo: {
                color: 'text-primary',

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

            table: {
                'flow-margin': {
                    self: 'margins-flow-firm-large',
                },
            },
        } satisfies Pick<Tokens_CSS_Style.Data<T_Params>, 'flow-margin' | 'form' | 'hr' | 'label' | 'logo' | 'selection' | 'table'>;


        return Promise.all( [
            Tokens_CSS_Style.iconStyle<T_Params>( partial.icon ),

            objectGeneratorAsync(
                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as const,
                async ( hdg ) => Tokens_CSS_Style.headingStyle<T_Params, typeof hdg>( hdg, partial.heading?.[ hdg ] )
            ).then( async ( hdgs ) => ( {
                ...hdgs,
                unstyled: await Tokens_CSS_Style.headingStyle<T_Params, 'unstyled'>( 'unstyled', partial.heading?.unstyled ),
            } ) ),

            Tokens_CSS_Style.widgetStyle<T_Params>( partial.widget ),
        ] ).then(
            async ( [ icon, heading, widget ] ) => {

                const [
                    alert,
                    button,
                    input,
                    subheading,
                    toggle,
                ] = await Promise.all( [
                    Tokens_CSS_Style.alertStyle<T_Params>( icon, partial.alert ),
                    Tokens_CSS_Style.buttonStyle<T_Params>( icon, partial.button ),
                    Tokens_CSS_Style.inputStyle<T_Params>( partial.input ),

                    objectGeneratorAsync(
                        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'unstyled' ] as const,
                        async ( hdg ) => Tokens_CSS_Style.subheadingStyle<T_Params, typeof hdg>( hdg, heading, partial.subheading?.[ hdg ] )
                    ),

                    Tokens_CSS_Style.toggleStyle<T_Params>( heading, icon, widget, partial.toggle ),
                ] );

                const flowMargin_button_default = partial?.[ 'flow-margin' ]?.small ?? '200' satisfies AnyTokenLevel;
                const flowMargin_button_touch = partial?.[ 'flow-margin' ]?.$ ?? '300' satisfies AnyTokenLevel;

                if ( typeof partial[ 'flow-margin' ] !== 'object' ) {
                    partial[ 'flow-margin' ] = {};
                }

                const partial_flowMargin_button = typeof partial?.[ 'flow-margin' ]?.button === 'object'
                    ? deleteUndefinedProps( {
                        $: partial?.[ 'flow-margin' ]?.button?.$ ?? flowMargin_button_default,
                        touch: partial?.[ 'flow-margin' ]?.button?.touch ?? flowMargin_button_touch,
                    } )
                    : {
                        $: partial?.[ 'flow-margin' ]?.button ?? flowMargin_button_default,
                        touch: flowMargin_button_touch,
                    };

                return {
                    alert,
                    button,
                    'flow-margin': mergeArgs(
                        defaults[ 'flow-margin' ],
                        {
                            ...partial?.[ 'flow-margin' ],
                            button: partial_flowMargin_button,
                        },
                        true,
                    ),
                    form: mergeArgs( defaults.form, partial.form, true ),
                    heading,
                    hr: mergeArgs( defaults.hr, partial.hr, true ),
                    icon,
                    input,
                    label: mergeArgs( defaults.label, partial.label, true ),
                    logo: mergeArgs( defaults.logo, partial.logo, true ),
                    selection: mergeArgs( defaults.selection, partial.selection, true ),
                    subheading,
                    table: mergeArgs( defaults.table, partial.table, true ),
                    toggle,
                    widget,
                } satisfies Tokens_CSS_Style.Data<T_Params>;
            }
        );
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async alertStyle<T_Params extends TokenTypes.Style.TypeParams>(
        iconStyles: Tokens_CSS_Style.IconStyles<never>,
        partial: Tokens_CSS_Style.InputParam<T_Params>[ 'alert' ] = {},
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

        const heading: Tokens_CSS_Style.AlertStyles[ 'heading' ] = mergeArgs(
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
                            end: 0,
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
            {
                ...partial,
                heading,
            },
            true,
        );
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static async buttonStyle<T_Params extends TokenTypes.Style.TypeParams>(
        iconStyles: Tokens_CSS_Style.IconStyles<never>,
        partial?: Tokens_CSS_Style.InputParam<T_Params>[ 'button' ],
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

        } as const satisfies Tokens_CSS_Style.Data<T_Params>[ 'button' ];
    }

    /**
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Added partial param.
     */
    public static async headingStyle<
        T_Params extends TokenTypes.Style.TypeParams,
        T_Key extends keyof Tokens_CSS_Style.Data<T_Params>[ 'heading' ],
    >(
        heading: T_Key,
        partial?: RecursivePartial<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>>,
    ): Promise<Tokens_CSS_Style.HeadingStyles_Generic<T_Key>> {

        const headingAsNum = ( typeof heading === 'number' && heading >= 1 ) ? heading : 11;

        const style: Tokens_CSS_Style.HeadingStyles = {

            font: {
                family: 'heading',
                style: 'normal',
                weight: '600',
            },

            'letter-spacing': 'normal',
            'line-height': '400',
            'text-transform': 'none',

            margin: {
                block: {
                    start: '600',
                },
            },

            padding: {
                block: {
                    start: 0,
                    end: 0,
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

                    'flow-margin': {
                        self: 'margins-flow-large',
                    },

                    'letter-spacing': style[ 'letter-spacing' ],
                    'line-height': style[ 'line-height' ],
                    'text-transform': style[ 'text-transform' ],

                    padding: style.padding,
                } satisfies Tokens_CSS_Style.HeadingStyles_Unstyled,
                partial,
                true,
            ) satisfies Tokens_CSS_Style.HeadingStyles_Unstyled as Tokens_CSS_Style.HeadingStyles_Generic<T_Key>;
        }

        if ( headingAsNum >= 1 ) {
            style.font.weight = '900';
            style[ 'line-height' ] = '100';
            style.margin.block.start = '800';
        }

        if ( headingAsNum >= 2 ) {
            style.font.weight = '800';
            style[ 'line-height' ] = '200';
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
    public static async subheadingStyle<
        T_Params extends TokenTypes.Style.TypeParams,
        T_Key extends keyof Tokens_CSS_Style.Data<T_Params>[ 'subheading' ],
    >(
        subheading: T_Key,
        headingStyles: Tokens_CSS_Style.Data<T_Params>[ 'heading' ],
        partial?: RecursivePartial<Tokens_CSS_Style.SubheadingStyles>,
    ): Promise<RecursivePartial<Tokens_CSS_Style.SubheadingStyles>> {

        const subheadingAsNum = ( typeof subheading === 'number' && subheading >= 1 ) ? subheading : 11;

        const style: RecursivePartial<Tokens_CSS_Style.SubheadingStyles> = {
            color: 'text-grey',

            font: {
                size: subheadingAsNum > 6 ? 'smaller-1' : 'normal',
                style: 'italic',
            },

            icon: {
                color: 'ui-grey',
            },

            'letter-spacing': 'normal',
            'text-transform': 'none',
        };

        if ( subheadingAsNum === 1 ) {

            style.font = {
                ...style.font,
                size: 'heading-6',
                weight: headingStyles.unstyled.font.weight,
            };

            style[ 'line-height' ] = headingStyles[ 6 ][ 'line-height' ];

            style.margin = {
                block: {
                    start: '200',
                },
            };

            style.padding = {
                block: {
                    start: 0,
                    end: headingStyles[ 6 ].padding.block.end,
                },
            };
        }

        return mergeArgs( style, partial, true ) satisfies RecursivePartial<Tokens_CSS_Style.SubheadingStyles>;
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async iconStyle<T_Params extends TokenTypes.Style.TypeParams>(
        partial?: Tokens_CSS_Style.InputParam<T_Params>[ 'icon' ],
    ): Promise<Tokens_CSS_Style.IconStyles<T_Params>> {

        return mergeArgs(
            {

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

            } satisfies Tokens_CSS_Style.IconStyles<T_Params & { iconSizes: never; }>,
            partial,
            true,
        ) as Tokens_CSS_Style.IconStyles<T_Params>;
    }

    /**
     * @since ___PKG_VERSION___
     */
    public static async inputStyle<T_Params extends TokenTypes.Style.TypeParams>( partial?: Tokens_CSS_Style.InputParam<T_Params>[ 'input' ] ): Promise<Tokens_CSS_Style.Data<T_Params>[ 'input' ]> {

        const style = mergeArgs( {

            border: {
                radius: 0,
                style: 'solid',
                width: '100',
            },

            'flow-margin': {
                self: 'margins-flow-firm',
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
    public static async toggleStyle<T_Params extends TokenTypes.Style.TypeParams>(
        headingStyles: Tokens_CSS_Style.Data<T_Params>[ 'heading' ],
        iconStyles: Tokens_CSS_Style.IconStyles<never>,
        widgetStyles: Tokens_CSS_Style.WidgetStyles,
        partial: Tokens_CSS_Style.InputParam<T_Params>[ 'toggle' ] = {},
    ): Promise<Tokens_CSS_Style.ToggleStyles> {

        type FlowMargin_Button = PartialExcept<Extract<Tokens_CSS_Style.WidgetStyles[ 'flow-margin' ][ 'button' ], object>, '$'>;

        const flowMargins_widget_button: FlowMargin_Button =
            typeof widgetStyles[ 'flow-margin' ].button === 'object'
                ? widgetStyles[ 'flow-margin' ].button
                : {
                    $: widgetStyles[ 'flow-margin' ].button
                };

        const button: FlowMargin_Button = typeof partial?.[ 'flow-margin' ]?.button === 'object'
            ? deleteUndefinedProps( {
                $: partial?.[ 'flow-margin' ]?.button?.$ ?? flowMargins_widget_button.$,
                touch: partial?.[ 'flow-margin' ]?.button?.touch ?? flowMargins_widget_button.touch,
            } )
            : {
                $: partial?.[ 'flow-margin' ]?.button ?? flowMargins_widget_button.$,
            };

        const flowMargin = {
            $: widgetStyles[ 'flow-margin' ].$,
            large: widgetStyles[ 'flow-margin' ].large,
            small: widgetStyles[ 'flow-margin' ].small,

            ...partial?.[ 'flow-margin' ] ?? {},

            button,
            self: 'margins-flow-firm',
        } as const satisfies Tokens_CSS_Style.ToggleStyles[ 'flow-margin' ];

        const headingMaker = (
            num: 'unstyled' | keyof Tokens_CSS_Style.ToggleStyles[ 'control' ][ 'heading' ]
        ): Tokens_CSS_Style.ToggleStyles_ControlHeading => {

            // returns
            if ( num === 'unstyled' ) {
                return {
                    margin: {
                        block: {
                            end: partial.control?.$?.margin?.block?.end ?? 0,
                        },
                    },

                    padding: {
                        block: {
                            start: partial.control?.$?.padding?.block?.start ?? headingStyles[ num ].padding.block.end,
                            end: partial.control?.$?.padding?.block?.end ?? headingStyles[ num ].padding.block.end,
                        },
                    },
                } satisfies Tokens_CSS_Style.ToggleStyles_ControlHeading;
            }

            return {
                margin: {
                    block: {
                        end: partial.control?.$?.margin?.block?.end ?? 0,
                    },
                },

                padding: {
                    block: {
                        start: partial.control?.$?.padding?.block?.start ?? headingStyles[ num ]?.padding.block.start ?? 0,
                        end: partial.control?.$?.padding?.block?.end ?? headingStyles[ num ]?.padding.block.end ?? 0,
                    },
                },
            } satisfies Tokens_CSS_Style.ToggleStyles_ControlHeading;
        };

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

            $: headingMaker( 'unstyled' ),

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
    public static async widgetStyle<T_Params extends TokenTypes.Style.TypeParams>(
        partial?: Tokens_CSS_Style.InputParam<T_Params>[ 'widget' ],
    ): Promise<Tokens_CSS_Style.WidgetStyles> {

        type FlowMargin_Button = PartialExcept<Extract<Tokens_CSS_Style.WidgetStyles[ 'flow-margin' ][ 'button' ], object>, '$'>;

        const flowMargin_button_default = '200' satisfies AnyTokenLevel;

        const button: FlowMargin_Button = typeof partial?.[ 'flow-margin' ]?.button === 'object'
            ? deleteUndefinedProps( {
                $: partial?.[ 'flow-margin' ]?.button?.$ ?? flowMargin_button_default,
                touch: partial?.[ 'flow-margin' ]?.button?.touch,
            } )
            : {
                $: partial?.[ 'flow-margin' ]?.button ?? flowMargin_button_default,
            };

        const flowMargin = {
            $: '300' satisfies AnyTokenLevel,
            large: '500' satisfies AnyTokenLevel,
            small: '200' satisfies AnyTokenLevel,

            ...partial?.[ 'flow-margin' ] ?? {},

            button,
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

    public static get default(): Promise<Tokens_CSS_Style.Data<{ iconSizes: never; }>> {
        return Tokens_CSS_Style.buildData();
    }

    protected constructor (
        public readonly data: Tokens_CSS_Style.Data<T_Params>,
    ) {
        super();
    }

    public toJSON(): Tokens_CSS_Style.JsonReturn<T_Params> {
        return this.data;
    }

    public toScssVars(): Tokens_CSS_Style.ScssVars<T_Params> {
        return objectKeySort_Tokens( {
            ...this.data,
            presetOpacities: [
                this.data.selection.background.opacity.low,
                this.data.selection.background.opacity.average,
                this.data.selection.background.opacity.high,
            ],
        }, true );
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

            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
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

            'line-height': TokenTypes.Css.LineHeight;

            /**
             * Value for the first item after an icon (to be in em). Gets
             * overruled if that item is a heading.
             */
            margin: {
                block: {
                    start: number;
                    end: number;
                };
            };
        };

        icon: {
            /**
             * This should be a theme slug.
             */
            color: string;

            size: Omit<IconStyles<never>[ 'size' ], 'font' | 'pseudo'>;
        };

        'line-height': TokenTypes.Css.LineHeight;

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin.WithSelfFirm;

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
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };

        display: "block" | "flex";

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': {
            self: FlowMargin.SelfFirm;
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

        icon: Omit<IconStyles_Spacing, 'size'> & {
            size: Omit<IconStyles_Spacing[ 'size' ], '$' | 'large'>;
        };

        'letter-spacing': TokenTypes.Css.LetterSpacing;
        'line-height': TokenTypes.Css.LineHeight;

        padding: {
            block: 0 | AnyTokenLevel;
            inline: 0 | AnyTokenLevel;
        };

        'text-transform': TokenTypes.Css.TextTransform;

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
        button: AnyTokenLevel | {
            $: AnyTokenLevel;
            /**
             * Explicitly set a size for the button span gap for touch-screens.
             */
            touch?: AnyTokenLevel;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export namespace FlowMargin {

        /**
         * @since ___PKG_VERSION___
         */
        export type Parsed = Omit<FlowMargin, 'button'> & {
            button: Extract<FlowMargin[ 'button' ], object>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type Self = 'margins-flow' | 'margins-flow-small' | 'margins-flow-large';

        /**
         * @since ___PKG_VERSION___
         */
        export type SelfFirm = 'margins-flow-firm' | 'margins-flow-firm-small' | 'margins-flow-firm-large';

        /**
         * @since ___PKG_VERSION___
         */
        export type WithSelf = FlowMargin & {
            self: Self;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type WithSelfFirm = FlowMargin & {
            self: SelfFirm;
        };
    }

    /**
     * @since ___PKG_VERSION___
     */
    export type HeadingStyles = {

        font: {
            /**
             * This should be a font family slug.
             */
            family: string;
            style: "normal" | "italic";
            weight: WholeTokenLevel;
        };

        icon?: undefined | RecursivePartial<Omit<IconStyles_Spacing, 'size' | 'vertical-align'>> & {
            /**
             * This should be a theme slug.
             */
            color?: undefined | string;
            size?: undefined | Partial<Omit<IconStyles_Spacing[ 'size' ], '$' | 'large'>>;
        };

        'letter-spacing': string;
        'line-height': TokenTypes.Css.LineHeight;
        'text-transform': TokenTypes.Css.TextTransform;

        margin: {
            block: {
                start: 0 | AnyTokenLevel;
            };
        };

        padding: {
            block: {
                start: 0 | TokenTypes.Css.Number.Em | AnyTokenLevel;
                end: 0 | TokenTypes.Css.Number.Em | AnyTokenLevel;
            };
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type HeadingStyles_Generic<T_Key extends keyof Tokens_CSS_Style.Data<TokenTypes.Style.TypeParams>[ 'heading' ]> =
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
             * This should be a font size slug.
             */
            size: string;
        };

        'flow-margin': {
            self: FlowMargin.Self;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type IconStyles_Spacing = {
        buffer: {
            $: TokenTypes.Css.Number.Em;
            start: number;
            end: number;
        };

        embedded: {
            bottom: TokenTypes.Css.Number.Em;
        };

        font: { top: TokenTypes.Css.Number.Em; };
        pseudo: { top: TokenTypes.Css.Number.Em; };

        size: IconStyles<never>[ 'size' ];

        'vertical-align': IconStyles<never>[ 'vertical-align' ];
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type IconStyles<T_Params extends TokenTypes.Style.TypeParams> = {
        /**
         * This should be a theme slug.
         */
        color: string;

        font: IconStyles_Spacing[ 'font' ];

        inline: {
            buffer: IconStyles_Spacing[ 'buffer' ],

            'line-height': 'normal' | Exclude<TokenTypes.Css.LineHeight, AnyTokenLevel>;
        };

        pseudo: IconStyles_Spacing[ 'pseudo' ];

        size: {
            $: TokenTypes.Css.Number.Em;
            large: TokenTypes.Css.Number.Em;

            /**
             * For inline icons using the icon font.
             */
            font: TokenTypes.Css.Number.Em;

            /**
             * For inline icons in before/after pseudo classes.
             */
            pseudo: TokenTypes.Css.Number.Em;
        } & {
            [ K in T_Params[ 'iconSizes' ] ]: TokenTypes.Css.Number.Em;
        };

        'vertical-align': string;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputStyles = {

        border: {
            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': {
            self: FlowMargin.SelfFirm;
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
                    start: TokenTypes.Css.Number.Em;
                    end: TokenTypes.Css.Number.Em;
                };
            };
        };

        label: {
            font: {
                style: "normal" | "italic";
                weight: WholeTokenLevel;
            };

            'line-height': TokenTypes.Css.LineHeight;
        };

        'line-height': TokenTypes.Css.LineHeight;

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
        'border' | 'flow-margin' | 'focus' | 'icons' | 'label' | 'line-height' | 'margin' | 'padding' | 'placeholder'
    > & {
        border: Omit<InputStyles[ 'border' ], 'width'>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type SubheadingStyles = Omit<HeadingStyles_Unstyled, 'font' | 'subheading'> & {
        /**
         * Should be a theme slug.
         */
        color: string;

        font: Omit<HeadingStyles_Unstyled[ 'font' ], 'family'>;

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
                    $: TokenTypes.Css.BorderRadius;
                    top: TokenTypes.Css.BorderRadius;
                };

                style: {
                    $: "dotted" | "solid";
                    top: "dotted" | "solid";
                };

                width: TokenTypes.Css.BorderWidth;
            };

            'line-height': TokenTypes.Css.LineHeight;

            padding: {
                block: AnyTokenLevel;
                inline: AnyTokenLevel;
            };
        };

        /**
         * For the toggle control.
         */
        control: {
            $: ToggleStyles_ControlHeading;

            heading: {
                [ H in RequiredHeadingLevels ]: ToggleStyles_ControlHeading;
            } & {
                [ key: number ]: ToggleStyles_ControlHeading;
            };
        };

        /**
         * Values for the set-flow-margins mixin.
         */
        'flow-margin': FlowMargin.WithSelfFirm;

        icon: Pick<IconStyles<never>, 'vertical-align'> & {
            buffer: {
                start: TokenTypes.Css.Number.Em;
                end: TokenTypes.Css.Number.Em;
            };

            size: IconStyles<never>[ 'size' ][ '$' ];
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
                    width: TokenTypes.Css.BorderWidth;
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
                end: HeadingStyles[ 'padding' ][ 'block' ][ 'end' ];
            };
        };

        padding: {
            block: HeadingStyles[ 'padding' ][ 'block' ];
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

            radius: TokenTypes.Css.BorderRadius;
            style: string;
            width: TokenTypes.Css.BorderWidth;
        };

        'line-height': TokenTypes.Css.LineHeight;

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
    export type Data<T_Params extends TokenTypes.Style.TypeParams> = {

        /**
         * @since ___PKG_VERSION___
         */
        alert: AlertStyles;

        button: {
            $: ButtonStyles;
            disabled: ButtonStyles_Disabled;
            inline: ButtonStyles_Inline;
        };

        /**
         * Default values for the set-flow-margins mixin.
         * 
         * @since ___PKG_VERSION___
         */
        'flow-margin': FlowMargin.Parsed;

        /**
         * @since ___PKG_VERSION___
         */
        form: {
            $: {
                'flow-margin': {
                    self: FlowMargin.Self,
                },
            },
            search: {
                'flow-margin': {
                    self: FlowMargin.SelfFirm,
                },
            },
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
                width: TokenTypes.Css.BorderWidth;
            },

            /**
             * This should be a theme slug.
             */
            color: string;

            'flow-margin': {
                self: FlowMargin.SelfFirm,
            },
        };

        /**
         * @since ___PKG_VERSION___
         */
        icon: IconStyles<T_Params>;

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
         * @since ___PKG_VERSION___
         */
        label: {
            'flow-margin': {
                self: FlowMargin.Self,
            },
        };

        /**
         * @since ___PKG_VERSION___
         */
        logo: {
            /**
             * This should be a theme slug.
             */
            color: string;

            'flow-margin': {
                self: FlowMargin.SelfFirm,
            },
        };

        /**
         * @since ___PKG_VERSION___ — Restructured object nesting.
         */
        selection: {
            background: {
                opacity: {
                    /**
                     * Contrast modes.
                     */
                    [ C in Exclude<TokenTypes.Theme.Mode.ContrastOption, 'max'> ]: TokenTypes.Css.Number.Percent;
                };
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        subheading: {
            [ L in RequiredHeadingLevels | 'unstyled' ]?: undefined | RecursivePartial<SubheadingStyles>;
        } & {
            [ key: number ]: RecursivePartial<SubheadingStyles>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        table: {
            'flow-margin': {
                self: FlowMargin.SelfFirm,
            },
        };

        /**
         * Toggle block styles.
         * 
         * @since ___PKG_VERSION___
         */
        toggle: ToggleStyles;

        /**
         * @since ___PKG_VERSION___
         */
        widget: WidgetStyles;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<T_Params extends TokenTypes.Style.TypeParams> = {

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

        /**
         * @since ___PKG_VERSION___
         */
        'flow-margin'?: RecursivePartial<Data<T_Params>[ 'flow-margin' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        form?: RecursivePartial<Data<T_Params>[ 'form' ]>;

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
        hr?: RecursivePartial<Data<T_Params>[ 'hr' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        icon?: RecursivePartial<Omit<IconStyles<T_Params>, 'size'>> & {
            size: Partial<IconStyles<T_Params>[ 'size' ]> & {
                [ K in T_Params[ 'iconSizes' ] ]: TokenTypes.Css.Number.Em;
            };
        };

        input?: {
            $?: RecursivePartial<InputStyles>;
            file?: RecursivePartial<Pick<InputStyles, 'padding'>>;
            disabled?: RecursivePartial<InputStyles_Variation>;
            readonly?: RecursivePartial<InputStyles_Variation>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        label?: RecursivePartial<Data<T_Params>[ 'label' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        logo?: RecursivePartial<Data<T_Params>[ 'logo' ]>;

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
        subheading?: {
            [ L in RequiredHeadingLevels | 'unstyled' ]?: undefined | RecursivePartial<SubheadingStyles>;
        } & {
            [ key: number ]: RecursivePartial<SubheadingStyles>;
        };

        /**
         * @since ___PKG_VERSION___
         */
        table?: RecursivePartial<Data<T_Params>[ 'table' ]>;

        /**
         * @since ___PKG_VERSION___
         */
        toggle?: RecursivePartial<ToggleStyles>;

        /**
         * @since ___PKG_VERSION___
         */
        widget?: RecursivePartial<WidgetStyles>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<T_Params extends TokenTypes.Style.TypeParams> = Data<T_Params>;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_Params extends TokenTypes.Style.TypeParams> = Data<T_Params> & {
        /**
         * Opacity levels to print as colour tokens.
         */
        presetOpacities: TokenTypes.Css.Number.Percent[];
    };
}