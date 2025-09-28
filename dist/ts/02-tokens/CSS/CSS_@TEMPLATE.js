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
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
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