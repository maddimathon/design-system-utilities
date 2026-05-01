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
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Transition extends AbstractTokens {
    static get default() {
        const always = [
            'accent-color',
            'background-color',
            'border-color',
            'color',
            'font-weight',
            'opacity',
            // 'outline-color',
            'text-decoration-color',
            'text-shadow',
            'visibility',
        ];
        return {
            properties: {
                always,
                motion: [
                    ...always,
                    'aspect-ratio',
                    // 'border',
                    'border-color',
                    'border-radius',
                    'border-width',
                    'bottom',
                    // 'box-shadow',
                    // 'font',
                    'font-weight',
                    'gap',
                    'height',
                    'left',
                    // 'letter-spacing',
                    // 'line-height',
                    'margin',
                    'max-height',
                    'max-width',
                    'min-height',
                    'min-width',
                    // 'outline',
                    'outline-color',
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
                timing: {
                    $: 'fast',
                    'accent-color': 'fast',
                    'background-color': 'fast',
                    'border-color': 'fast',
                    border: 'fast',
                    color: 'fast',
                    'font-weight': 'fast',
                    font: 'fast',
                    'letter-spacing': 'fast',
                    opacity: 'fast',
                    'outline-color': 'fast',
                    outline: 'fast',
                    'text-decoration-color': 'fast',
                    'text-indent': 'fast',
                    'text-shadow': 'fast',
                    'vertical-align': 'fast',
                    visibility: 'fast',
                    width: 'fast',
                    'word-spacing': 'fast',
                    'z-index': 'fast',
                    'aspect-ratio': 'normal',
                    'border-radius': 'normal',
                    'border-width': 'normal',
                    'box-shadow': 'normal',
                    bottom: 'normal',
                    'flex-basis': 'normal',
                    gap: 'normal',
                    height: 'normal',
                    left: 'normal',
                    'line-height': 'normal',
                    margin: 'normal',
                    'max-height': 'normal',
                    'max-width': 'normal',
                    'min-height': 'normal',
                    'min-width': 'normal',
                    'transform-origin': 'normal',
                    transform: 'normal',
                    translate: 'normal',
                    top: 'normal',
                    padding: 'normal',
                    right: 'normal',
                    rotate: 'normal',
                    scale: 'normal',
                },
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
