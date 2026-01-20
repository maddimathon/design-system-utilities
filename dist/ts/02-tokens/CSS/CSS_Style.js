/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.8
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Style extends AbstractTokens {
    static buttonStyle() {
        const style = {
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
    static headingStyle(heading) {
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
        return style;
    }
    static get default() {
        return {
            button: Tokens_CSS_Style.buttonStyle(),
            heading: objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (hdg) => Tokens_CSS_Style.headingStyle(hdg)),
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
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_CSS_Style.default, input, true);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return this.data;
    }
}
//# sourceMappingURL=CSS_Style.js.map