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
 * @internal
 */
export declare class Tokens_TEMPLATE extends AbstractTokens<typeof Tokens_TEMPLATE.Schema, Tokens_TEMPLATE.Export, Tokens_TEMPLATE.Part, Tokens_TEMPLATE.JSON> {
    get schema(): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    constructor(input?: Tokens_TEMPLATE.Part);
    export(): Tokens_TEMPLATE.Export;
    toJSON(): Tokens_TEMPLATE.Export;
    toScssVars(): Tokens_TEMPLATE.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_TEMPLATE {
    const Schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    interface Export extends z.infer<typeof Schemata.Tokens.shape> {
    }
    interface JSON extends z.infer<typeof Schemata.Tokens.shape> {
    }
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part extends Partial<Export> {
    }
}
//# sourceMappingURL=@TEMPLATE.d.ts.map