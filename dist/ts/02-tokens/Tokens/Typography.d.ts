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
import type { Tokens_Spacing } from './Spacing.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Typography extends AbstractTokens<Tokens_Typography.Export, Schemata.PartialTokens.Typography, Tokens_Typography.JSON> {
    protected tokens_spacing: Tokens_Spacing;
    readonly lineHeight: Tokens_Typography.Export['lineHeight'];
    readonly size: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
    constructor(tokens_spacing: Tokens_Spacing, input?: Schemata.PartialTokens.Typography);
    export(): Tokens_Typography.Export;
    toJSON(): Tokens_Typography.JSON;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Typography {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.typography> {
    }
    interface JSON extends Omit<z.infer<typeof Schemata.Tokens.shape.typography>, "size"> {
        size: {
            rem: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
            pt: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
            px: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
        };
    }
}
//# sourceMappingURL=Typography.d.ts.map