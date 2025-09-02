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
export declare class Tokens_CSS_Border extends AbstractTokens<Tokens_CSS_Border.Export, Schemata.PartialTokens.CSS.Border> {
    readonly radius: Tokens_CSS_Border.Export['radius'];
    readonly stroke: Tokens_CSS_Border.Export['stroke'];
    readonly width: Tokens_CSS_Border.Export['width'];
    constructor(input?: Schemata.PartialTokens.CSS.Border);
    export(): Tokens_CSS_Border.Export;
    toJSON(): Tokens_CSS_Border.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Border {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.CSS.shape.border> {
    }
}
//# sourceMappingURL=CSS_Border.d.ts.map