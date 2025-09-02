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
export declare class Tokens_TEMPLATE extends AbstractTokens<Tokens_TEMPLATE.Export, Schemata.PartialTokens> {
    constructor(input?: Schemata.PartialTokens);
    export(): Tokens_TEMPLATE.Export;
    toJSON(): Tokens_TEMPLATE.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_TEMPLATE {
    interface Export extends z.infer<typeof Schemata.Tokens.shape> {
    }
}
//# sourceMappingURL=@TEMPLATE.d.ts.map