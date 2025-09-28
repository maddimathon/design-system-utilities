/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_CSS_Transition extends AbstractTokens {
    static get default() {
        return {
            time: {
                fast: '250ms',
                normal: '500ms',
                slow: '750ms',
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
            time: this.data.time,
        };
    }
}
//# sourceMappingURL=CSS_Transition.js.map