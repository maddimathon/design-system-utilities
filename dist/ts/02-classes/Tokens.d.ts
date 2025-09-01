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
import * as Schemata from '../00-schemata/index.js';
import { AbstractTokens } from './abstracts/AbstractTokens.js';
import { Tokens_CSS_Transition } from './Tokens/CSS_Transition.js';
export { AbstractTokens, Tokens_CSS_Transition, };
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens extends AbstractTokens<z.infer<typeof Schemata.Tokens>, Schemata.PartialTokens> {
    readonly CSS: {
        transition: Tokens_CSS_Transition;
    };
    readonly opts: Tokens.Opts;
    constructor(input?: Schemata.PartialTokens, opts?: Partial<Tokens.Opts>);
    export(): {
        CSS: {
            transition: Tokens_CSS_Transition.Export;
        };
    };
    toSCSS(): string;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens {
    type ScssVarsObj = Omit<z.infer<typeof Schemata.Tokens>, "CSS"> & z.infer<typeof Schemata.Tokens.shape.CSS>;
    /**
     * Options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Opts {
        tokensAsDefault: boolean;
    }
}
//# sourceMappingURL=Tokens.d.ts.map