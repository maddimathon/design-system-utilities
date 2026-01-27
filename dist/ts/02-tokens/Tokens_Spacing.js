/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0.draft
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Spacing extends AbstractTokens {
    static get default() {
        return {
            multiplier: 1.15625,
            margin: {
                '100': -9,
                '200': -6,
                '300': -3,
                '400': 0,
                '500': 2,
                '600': 4,
                '800': 8,
                '900': 12,
            },
        };
    }
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_Spacing.default, input, true);
    }
    toJSON() {
        return {
            multiplier: this.data.multiplier,
            margin: this.data.margin,
        };
    }
    toScssVars() {
        return {
            spacing_multiplier: this.data.multiplier,
            margin: this.data.margin,
        };
    }
}
