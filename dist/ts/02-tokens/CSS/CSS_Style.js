/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { deleteUndefinedProps, mergeArgs } from '@maddimathon/utility-typescript';
import { objectGenerator, objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../../01-utilities/objectKeySort_Tokens.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Style extends AbstractTokens {
    data;
    /**
     * Builds style tokens faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static async build(partial = {}) {
        return Tokens_CSS_Style.buildData(partial).then((data) => new Tokens_CSS_Style(data));
    }
    /**
     * Builds style tokens data faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static async buildData(partial = {}) {
        const defaults = {
            'flow-margin': {
                $: '400',
                large: '600',
                small: '300',
                button: '300',
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
        };
        return Tokens_CSS_Style.iconStyle(partial.icon).then(async (icon) => {
            const widget = await Tokens_CSS_Style.widgetStyle(partial.widget);
            const [alert, button, heading, input, toggle,] = await Promise.all([
                Tokens_CSS_Style.alertStyle(icon, partial.alert),
                Tokens_CSS_Style.buttonStyle(icon, partial.button),
                objectGeneratorAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], async (hdg) => Tokens_CSS_Style.headingStyle(hdg, partial.heading?.[hdg])).then(async (hdgs) => ({
                    ...hdgs,
                    unstyled: await Tokens_CSS_Style.headingStyle('unstyled', partial.heading?.unstyled),
                })),
                Tokens_CSS_Style.inputStyle(partial.input),
                Tokens_CSS_Style.toggleStyle(widget, partial.toggle),
            ]);
            return {
                alert,
                button,
                heading,
                icon,
                input,
                'flow-margin': mergeArgs(defaults['flow-margin'], partial['flow-margin'], true),
                toggle,
                selection: mergeArgs(defaults.selection, partial.selection, true),
                widget,
            };
        });
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static async alertStyle(iconStyles, partial = {}) {
        const headingMaker = (num) => {
            const style = {
                margin: {
                    block: {
                        start: 0.21875,
                        end: 0,
                    },
                },
            };
            // returns
            if (num === 'unstyled') {
                return {
                    margin: {
                        block: {
                            start: partial.heading?.[num]?.margin?.block.start ?? style.margin.block.start,
                            end: partial.heading?.[num]?.margin?.block.end ?? style.margin.block.end,
                        },
                    },
                };
            }
            if (num >= 1) {
                style.margin.block.start = 0;
            }
            if (num >= 2) {
                style.margin.block.start = 0.0625;
            }
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
            if (num >= 9) {
                style.margin.block.start = 0;
            }
            // if ( num >= 10 ) {
            // }
            return {
                margin: {
                    block: {
                        start: partial.heading?.[num]?.margin?.block.start ?? style.margin.block.start,
                        end: partial.heading?.[num]?.margin?.block.end ?? style.margin.block.end,
                    },
                },
            };
        };
        const heading = mergeArgs(objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'unstyled'], headingMaker), deleteUndefinedProps(partial.heading ?? {}), true);
        return mergeArgs({
            background: 'background',
            border: {
                color: 'ui-primary',
                radius: '0',
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
                        start: 0.0625,
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
                block: '0',
                inline: '200',
            },
            'flow-margin': {
                $: '300',
                large: '400',
                small: '200',
                button: '200',
                self: 'margins-flow-firm',
            },
            padding: {
                block: '200',
                inline: '200',
            },
        }, partial, true);
    }
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static async buttonStyle(iconStyles, partial) {
        const style = mergeArgs({
            border: {
                radius: '0',
                style: 'solid',
                width: '100',
            },
            display: 'block',
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
                    bottom: '0.0625em',
                },
                font: iconStyles.font,
                inline: iconStyles.inline,
                pseudo: iconStyles.pseudo,
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
        }, partial?.$, true);
        return {
            $: style,
            disabled: mergeArgs({
                border: {
                    radius: style.border.radius,
                    style: 'dashed',
                },
                font: {
                    weight: style.font.weight,
                    style: 'italic',
                },
                'letter-spacing': style['letter-spacing'],
                'text-transform': style['text-transform'],
            }, partial?.disabled ?? {}, true),
            inline: mergeArgs({
                border: {
                    radius: style.border.radius,
                    style: style.border.radius,
                },
                focus: {
                    offset: style.focus.offset,
                },
                font: {
                    weight: style.font.weight,
                    size: 'smaller-1',
                    style: style.font.style,
                },
                gap: {
                    block: style.gap.block,
                    inline: style.gap.inline,
                },
                icon: {
                    buffer: {
                        start: style.icon.buffer.start,
                        end: style.icon.buffer.end,
                    },
                    embedded: style.icon.embedded,
                    font: style.icon.font,
                    inline: style.icon.inline,
                    pseudo: style.icon.pseudo,
                    size: {
                        font: style.icon.size.font,
                        pseudo: style.icon.size.pseudo,
                    },
                    'vertical-align': style.icon['vertical-align'],
                },
                'letter-spacing': style['letter-spacing'],
                'line-height': style['line-height'],
                padding: {
                    block: style.padding.block,
                    inline: style.padding.inline,
                },
                'text-transform': style['text-transform'],
                width: style.width,
            }, partial?.inline ?? {}, true),
        };
    }
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static async headingStyle(heading, partial) {
        const headingAsNum = (typeof heading === 'number' && heading >= 1) ? heading : 11;
        const style = {
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
        switch (heading) {
            case 'unstyled':
                return mergeArgs({
                    color: 'text-primary',
                    font: {
                        ...style.font,
                        family: 'body',
                        size: 'normal',
                    },
                    'letter-spacing': style['letter-spacing'],
                    'line-height': style['line-height'],
                    'text-transform': style['text-transform'],
                }, partial, true);
            case 1:
                style.font.weight = '900';
                style['line-height'] = '200';
                style.margin.block.start = '800';
                break;
            case 2:
                style.font.weight = '800';
                style['line-height'] = '200';
                style.margin.block.start = '800';
                break;
            case 3:
                style.font.weight = '700';
                style['line-height'] = '200';
                style.margin.block.start = '800';
                break;
            case 4:
                style.font.weight = '700';
                style.font.style = 'italic';
                style['line-height'] = '200';
                break;
            case 5:
                style.font.weight = '600';
                style.font.style = 'italic';
                style['line-height'] = '200';
                break;
            case 6:
                style.font.weight = '500';
                style.font.style = 'italic';
                style['line-height'] = '300';
                break;
        }
        ;
        if (headingAsNum >= 7) {
            style.font.weight = '500';
            style.font.style = 'normal';
            style['letter-spacing'] = '0.0625em';
            style['line-height'] = '400';
            style['text-transform'] = 'uppercase';
        }
        if (headingAsNum >= 8) {
            style.font.style = 'italic';
        }
        if (headingAsNum >= 9) {
            style.margin.block.start = '500';
            style['line-height'] = '500';
        }
        return mergeArgs(style, partial, true);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static async iconStyle(partial = {}) {
        return mergeArgs({
            color: 'ui',
            font: {
                top: '0.15625em',
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
        }, partial, true);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static async inputStyle(partial) {
        const style = mergeArgs({
            border: {
                radius: '0',
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
        }, partial?.$ ?? {}, true);
        const disabled = {
            ...partial?.disabled,
            border: {
                radius: style.border.radius,
                style: 'dashed',
                ...partial?.disabled?.border,
            },
        };
        const readonly = {
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
     * @since 0.1.0-beta.0.draft
     */
    static async toggleStyle(widgetStyles, partial = {}) {
        const flowMargin = {
            $: widgetStyles['flow-margin'].$,
            large: widgetStyles['flow-margin'].large,
            small: widgetStyles['flow-margin'].small,
            ...partial?.['flow-margin'] ?? {},
            button: partial?.['flow-margin']?.button ?? widgetStyles['flow-margin'].button,
        };
        const headingMaker = (num) => {
            const style = {
                padding: {
                    block: {
                        end: '200',
                    },
                },
            };
            // returns
            if (num === 'unstyled') {
                return {
                    padding: {
                        block: {
                            end: partial.control?.$?.padding?.block?.end ?? style.padding.block.end,
                        },
                    },
                };
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
                padding: {
                    block: {
                        end: partial.control?.heading?.[num]?.padding?.block?.end ?? style.padding.block.end,
                    },
                },
            };
        };
        const defaultControl = headingMaker('unstyled');
        return {
            control: {
                $: {
                    padding: {
                        block: {
                            end: partial.control?.$?.padding?.block?.end ?? defaultControl.padding.block.end,
                        },
                    },
                },
                heading: mergeArgs(objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], headingMaker), deleteUndefinedProps(partial.control?.heading ?? {}), true),
            },
            'flow-margin': flowMargin,
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static async widgetStyle(partial) {
        const flowMargin = {
            $: '300',
            large: '500',
            small: '200',
            ...partial?.['flow-margin'] ?? {},
            button: partial?.['flow-margin']?.button ?? '200',
        };
        return {
            background: 'background-grey',
            border: mergeArgs({
                color: 'ui-grey',
                radius: '0',
                style: 'solid',
                width: '200',
            }, partial?.border ?? {}, true),
            'line-height': partial?.['line-height'] ?? '300',
            'flow-margin': flowMargin,
            padding: mergeArgs({
                block: '400',
                inline: '400',
            }, partial?.padding ?? {}, true),
        };
    }
    static get default() {
        return Tokens_CSS_Style.buildData();
    }
    constructor(data) {
        super();
        this.data = data;
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return objectKeySort_Tokens(this.data, true);
    }
}
