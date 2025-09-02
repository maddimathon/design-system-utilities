/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import * as Schemata from '../../00-schemata/index.js';
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_TEMPLATE extends AbstractTokens {
    get schema() {
        return Schemata.Tokens;
    }
    // public readonly time: Tokens_CSS_Transition.Export[ 'time' ];
    constructor(input) {
        super(input ?? {});
        // this.time = Schemata.Tokens.parse( input ?? {} );
    }
    export() {
        return {};
    }
    toJSON() {
        return this.export();
    }
    toScssVars() {
        return this.export();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_TEMPLATE) {
    ;
})(Tokens_TEMPLATE || (Tokens_TEMPLATE = {}));
//# sourceMappingURL=@TEMPLATE.js.map