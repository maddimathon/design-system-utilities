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
export class Tokens_CSS_Transition extends AbstractTokens {
    time;
    constructor(input) {
        super(input ?? {});
        this.time = Schemata.Tokens.shape.CSS.shape.transition.shape.time.parse(input?.time ?? {});
    }
    export() {
        return {
            time: this.time,
        };
    }
    toJSON() {
        return this.export();
    }
}
//# sourceMappingURL=CSS_Transition.js.map