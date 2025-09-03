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
export declare class Tokens_TEMPLATE extends AbstractTokens<typeof Tokens_TEMPLATE.Schema, Tokens_TEMPLATE.Parsed, Tokens_TEMPLATE.Part, Tokens_TEMPLATE.JSON, Tokens_TEMPLATE.ScssVars> {
    get schema(): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    constructor(input?: Tokens_TEMPLATE.Part);
    valueOf(): Tokens_TEMPLATE.Parsed;
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
    type Parsed = z.infer<typeof Schema>;
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = Partial<Parsed>;
    type JSON = Parsed;
    type ScssVars = Parsed;
}
//# sourceMappingURL=@TEMPLATE.d.ts.map