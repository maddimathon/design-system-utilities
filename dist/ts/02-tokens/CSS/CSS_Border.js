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
export class Tokens_CSS_Border extends AbstractTokens {
    static get default() {
        return {
            radius: {
                '100': 0.25,
                '200': 0.375,
                '400': 0.625,
                '600': 1.25,
                '800': 2.5,
            },
            width: {
                '100': 1 / 16,
                '200': 2 / 16,
                '300': 3 / 16,
                '400': 4 / 16,
            },
            stroke: {
                '100': 1 / 16,
                '200': 2 / 16,
                '400': 3 / 16,
                '600': 4 / 16,
                '700': 5 / 16,
                '800': 6 / 16,
            },
        };
    }
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_CSS_Border.default, input, true);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return {
            radius: this.data.radius,
            stroke: this.data.stroke,
            width: this.data.width,
        };
    }
}
