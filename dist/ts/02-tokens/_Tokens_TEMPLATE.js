/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { mergeArgsAsync, } from '@maddimathon/utility-typescript';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-beta.0.draft
 */
export class Tokens_TEMPLATE extends AbstractTokens {
    data;
    static get default() {
        return {};
    }
    static async build(input) {
        return mergeArgsAsync(Tokens_TEMPLATE.default, input, true).then(data => new Tokens_TEMPLATE(data));
    }
    constructor(data) {
        super();
        this.data = data;
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return this.data;
    }
}
