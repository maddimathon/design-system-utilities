/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.6
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_TEMPLATE extends AbstractTokens {
    static get default() {
        return {};
    }
    data;
    constructor(input) {
        super();
        this.data = {
            ...Tokens_CSS_TEMPLATE.default,
            ...input,
        };
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return {};
    }
}
//# sourceMappingURL=CSS_@TEMPLATE.js.map