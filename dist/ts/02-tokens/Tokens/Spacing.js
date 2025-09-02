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
export class Tokens_Spacing extends AbstractTokens {
    margin;
    multiplier;
    constructor(input) {
        super(input ?? {});
        this.margin = Schemata.Tokens.shape.spacing.shape.margin.parse(input?.margin ?? {});
        this.multiplier = Schemata.Tokens.shape.spacing.shape.multiplier.parse(input?.multiplier);
    }
    export() {
        return {
            multiplier: this.multiplier,
            margin: this.margin,
        };
    }
    toJSON() {
        return this.export();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_Spacing) {
    ;
})(Tokens_Spacing || (Tokens_Spacing = {}));
//# sourceMappingURL=Spacing.js.map