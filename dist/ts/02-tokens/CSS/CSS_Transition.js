/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Transition extends AbstractTokens {
    static get default() {
        const always = [
            'background-color',
            'border-color',
            // 'box-shadow',
            'color',
            'font-weight',
            'opacity',
            'outline-color',
            'text-decoration-color',
            // 'text-shadow',
            'visibility',
        ];
        return {
            properties: {
                always,
                motion: [
                    ...always,
                    'aspect-ratio',
                    // 'border',
                    'bottom',
                    // 'font',
                    'font-weight',
                    'height',
                    'left',
                    // 'letter-spacing',
                    // 'line-height',
                    'margin',
                    // 'max-height',
                    // 'max-width',
                    // 'min-height',
                    // 'min-width',
                    // 'outline',
                    'padding',
                    'right',
                    // 'rotate',
                    // 'scale',
                    // 'text-indent',
                    'top',
                    'transform',
                    // 'transform-origin',
                    // 'translate',
                    // 'vertical-align',
                    'width',
                    // 'word-spacing',
                    // 'z-index',
                ],
            },
            time: {
                fast: '250ms',
                normal: '500ms',
                slow: '750ms',
                'toggle-closing': '1200ms',
            },
        };
    }
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_CSS_Transition.default, input, true);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return {
            properties: this.data.properties,
            time: this.data.time,
        };
    }
}
//# sourceMappingURL=CSS_Transition.js.map