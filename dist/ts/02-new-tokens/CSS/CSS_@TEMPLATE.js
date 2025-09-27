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
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_CSS_TEMPLATE extends AbstractTokens {
    static get default() {
        return {};
    }
    // public get data(): Tokens_CSS_TEMPLATE.Data {
    //     return {};
    // }
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