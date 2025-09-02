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
export declare class Tokens_Spacing extends AbstractTokens<Tokens_Spacing.Export, Schemata.PartialTokens.Spacing> {
    readonly margin: Tokens_Spacing.Export['margin'];
    readonly multiplier: Tokens_Spacing.Export['multiplier'];
    constructor(input?: Schemata.PartialTokens.Spacing);
    export(): Tokens_Spacing.Export;
    toJSON(): Tokens_Spacing.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Spacing {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.spacing> {
    }
}
//# sourceMappingURL=Spacing.d.ts.map