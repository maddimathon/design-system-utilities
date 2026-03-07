/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../../01-utilities/objectKeySort_Tokens.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Style extends AbstractTokens {
    /**
     * @since 0.1.0-beta.0.draft
     */
    static alertStyle(partial = {}) {
        return mergeArgs({
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
        }, partial, true);
    }
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static buttonStyle(partial) {
        const style = mergeArgs({
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
        }, partial?.$ ?? {}, true);
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
        };
    }
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static headingStyle(heading, partial) {
        heading = heading < 1 ? 11 : heading;
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
        switch (heading) {
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
                style['line-height'] = '300';
                break;
            case 5:
                style.font.weight = '600';
                style.font.style = 'italic';
                style['line-height'] = '300';
                break;
            case 6:
                style.font.weight = '500';
                style.font.style = 'italic';
                style['line-height'] = '300';
                break;
        }
        if (heading >= 7) {
            style.font.weight = '500';
            style.font.style = 'normal';
            style['letter-spacing'] = '0.0625em';
            style['line-height'] = '400';
            style['text-transform'] = 'uppercase';
        }
        if (heading >= 8) {
            style.font.style = 'italic';
        }
        if (heading >= 9) {
            style.margin.block.start = '500';
            style['line-height'] = '500';
        }
        return mergeArgs(style, partial, true);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static iconStyle(partial = {}) {
        return mergeArgs({
            color: 'ui',
            'inline-buffer': '0.25em',
            size: {
                $: '1.375em',
                large: '2em',
                pseudo: '1em',
            },
            'vertical-align': 'middle',
        }, partial, true);
    }
    /**
     * @since 0.1.0-alpha.13
     * @since 0.1.0-beta.0.draft — Added partial param.
     */
    static inputStyle(partial) {
        const style = mergeArgs({
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
            disabled,
            readonly,
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static widgetStyle(partial) {
        const margin = mergeArgs({
            flow: {
                $: '300',
                large: '500',
                small: '200',
            },
        }, partial?.margin ?? {}, true);
        return {
            border: mergeArgs({
                color: 'background',
                radius: '0',
                style: 'solid',
                width: '200',
            }, partial?.border ?? {}, true),
            'button-span': {
                gap: partial?.['button-span']?.gap ?? margin.flow.small,
            },
            'line-height': partial?.['line-height'] ?? '300',
            margin,
            padding: mergeArgs({
                block: '400',
                inline: '400',
            }, partial?.padding ?? {}, true),
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    static mergeData(partial) {
        const defaults = this.default;
        return {
            alert: Tokens_CSS_Style.alertStyle(partial.alert),
            button: Tokens_CSS_Style.buttonStyle(partial.button),
            heading: objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (hdg) => Tokens_CSS_Style.headingStyle(hdg, partial.heading?.[hdg])),
            icon: Tokens_CSS_Style.iconStyle(partial.icon),
            input: Tokens_CSS_Style.inputStyle(partial.input),
            margin: mergeArgs(defaults.margin, partial.margin, true),
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
            widget: Tokens_CSS_Style.widgetStyle(partial.widget),
        };
    }
    static get default() {
        return {
            alert: Tokens_CSS_Style.alertStyle(),
            button: Tokens_CSS_Style.buttonStyle(),
            heading: objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (hdg) => Tokens_CSS_Style.headingStyle(hdg)),
            icon: Tokens_CSS_Style.iconStyle(),
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
        };
    }
    data;
    constructor(input) {
        super();
        this.data = Tokens_CSS_Style.mergeData(input);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return objectKeySort_Tokens(this.data, true);
    }
}
