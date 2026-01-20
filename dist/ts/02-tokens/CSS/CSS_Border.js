/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.9
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
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
                '100': 0.0625,
                '200': 0.125,
                '300': 0.1875,
                '400': 0.25,
            },
            stroke: {
                '100': 0.5 / 16,
                '200': 1 / 16,
                '400': 2 / 16,
                '500': 2.5 / 16,
                '600': 3 / 16,
                '800': 4 / 16,
                '900': 6 / 16,
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
//# sourceMappingURL=CSS_Border.js.map