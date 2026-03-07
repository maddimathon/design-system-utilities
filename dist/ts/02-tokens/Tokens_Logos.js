/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { objectMap } from '@maddimathon/utility-typescript';
import { objectKeySort_Tokens } from '../01-utilities/objectKeySort_Tokens.js';
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Logos extends AbstractTokens {
    data;
    constructor(input) {
        super();
        const mapped = objectMap(input, ([key, value]) => (value instanceof SvgMaker
            ? value
            : value && new SvgMaker(value)));
        this.data = objectKeySort_Tokens(mapped, false);
    }
    toJSON() {
        // returns - no logos, so we return an empty object
        if (!Object.keys(this.data).length) {
            return {};
        }
        return objectMap(this.data, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ([key, value]) => value.toScssVars());
    }
}
