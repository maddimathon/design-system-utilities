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
export declare class Tokens_CSS_Transition extends AbstractTokens<Tokens_CSS_Transition.Export, Schemata.PartialTokens.CSS.Transition> {
    readonly time: Tokens_CSS_Transition.Export['time'];
    constructor(input?: Schemata.PartialTokens.CSS.Transition);
    export(): Tokens_CSS_Transition.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Transition {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.CSS.shape.transition> {
    }
}
//# sourceMappingURL=CSS_Transition.d.ts.map