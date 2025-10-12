/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
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
//# sourceMappingURL=Tokens_Spacing.js.map