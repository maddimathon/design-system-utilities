/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.1-alpha.1.draft
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
