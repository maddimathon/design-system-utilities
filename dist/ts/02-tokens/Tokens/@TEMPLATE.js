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
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_TEMPLATE extends AbstractTokens {
    get schema() {
        return Tokens_TEMPLATE.Schema;
    }
    // public readonly time: Tokens_TEMPLATE.Export[ 'time' ];
    constructor(input) {
        super(input ?? {});
        // this.time = this.parseSchema(
        //     this.schema.shape.time,
        //     input?.time ?? {},
        //     {
        //         name: 'Tokens_TEMPLATE',
        //         location: 'src/ts/02-tokens/Tokens/Tokens_TEMPLATE.ts:49',
        //     },
        // );
    }
    valueOf() {
        return {};
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return this.valueOf();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_TEMPLATE) {
    Tokens_TEMPLATE.Schema = z.object({});
    ;
    ;
    ;
})(Tokens_TEMPLATE || (Tokens_TEMPLATE = {}));
//# sourceMappingURL=@TEMPLATE.js.map