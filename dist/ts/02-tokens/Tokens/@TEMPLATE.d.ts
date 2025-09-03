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
export declare class Tokens_TEMPLATE extends AbstractTokens<typeof Tokens_TEMPLATE.Schema, Tokens_TEMPLATE.Export, Tokens_TEMPLATE.Part, Tokens_TEMPLATE.JSON, Tokens_TEMPLATE.ScssVars> {
    get schema(): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    constructor(input?: Tokens_TEMPLATE.Part);
    valueOf(): Tokens_TEMPLATE.Export;
    toJSON(): Tokens_TEMPLATE.JSON;
    toScssVars(): Tokens_TEMPLATE.ScssVars;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_TEMPLATE {
    const Schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    interface Export extends z.infer<typeof Schema> {
    }
    interface JSON extends Export {
    }
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part extends Partial<Export> {
    }
    interface ScssVars extends Export {
    }
}
//# sourceMappingURL=@TEMPLATE.d.ts.map