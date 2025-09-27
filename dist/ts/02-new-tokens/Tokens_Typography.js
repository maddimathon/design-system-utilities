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
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Typography extends AbstractTokens {
    static get default() {
        return {
            lineHeight: {
                '100': -2.75,
                '200': -2,
                '300': -1.25,
                '400': 0,
                '500': 1,
                '600': 2,
            },
            size: {
                title: 7,
                heading: {
                    1: 6,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: 0,
                },
                smaller: {
                    1: -0.5,
                    2: -1.25,
                    3: -2.0,
                    // 4: -2.5,
                    // 5: -3.0,
                },
                normal: 0,
                bigger: {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                },
            },
        };
    }
    // public get data(): Tokens_Typography.Data {
    //     return {};
    // }
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_Typography.default, input, true);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return {
            font: {
                size: this.data.size,
            },
            line_height: this.data.lineHeight,
        };
    }
}
//# sourceMappingURL=Tokens_Typography.js.map