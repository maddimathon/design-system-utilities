/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_TEMPLATE extends AbstractTokens {
    names;
    extraLevels;
    data;
    constructor(names, extraLevels, input) {
        super();
        this.names = names;
        this.extraLevels = extraLevels;
        this.data = objectGenerator(names, () => undefined);
    }
    toJSON() {
        return objectGenerator(this.names, () => 'undefined');
    }
    toScssVars() {
        return objectGenerator(this.names, () => 'undefined');
    }
}
