/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
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
                '600': 4,
                '800': 8,
            },
        };
    }
    // public get data(): Tokens_Spacing.Data {
    //     return {};
    // }
    data;
    constructor(input) {
        super();
        this.data = {
            ...Tokens_Spacing.default,
            ...input,
            margin: {
                ...Tokens_Spacing.default.margin,
                ...input.margin,
            },
        };
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