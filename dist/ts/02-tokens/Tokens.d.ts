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
import { Tokens_Spacing } from './Tokens/Spacing.js';
import { Tokens_Typography } from './Tokens/Typography.js';
import { Tokens_CSS_Border } from './Tokens/CSS_Border.js';
import { Tokens_CSS_Transition } from './Tokens/CSS_Transition.js';
export { AbstractTokens, Tokens_Spacing, Tokens_Typography, Tokens_CSS_Border, Tokens_CSS_Transition, };
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens extends AbstractTokens<Tokens.Export, Schemata.PartialTokens, Tokens.JSON> {
    readonly spacing: Tokens_Spacing;
    readonly typography: Tokens_Typography;
    readonly CSS: {
        border: Tokens_CSS_Border;
        transition: Tokens_CSS_Transition;
        zIndex: z.infer<typeof Schemata.Tokens.shape.CSS.shape.zIndex>;
    };
    readonly opts: Tokens.Opts;
    constructor(input?: Schemata.PartialTokens, opts?: Partial<Tokens.Opts>);
    export(): {
        spacing: Tokens_Spacing.Export;
        typography: Tokens_Typography.Export;
        CSS: {
            border: Tokens_CSS_Border.Export;
            transition: Tokens_CSS_Transition.Export;
            zIndex: {
                nav: number;
                settings: number;
                skipLink: number;
            };
        };
    };
    toJSON(): {
        spacing: Tokens_Spacing.Export;
        typography: Tokens_Typography.JSON;
        CSS: {
            border: Tokens_CSS_Border.Export;
            transition: Tokens_CSS_Transition.Export;
            zIndex: {
                nav: number;
                settings: number;
                skipLink: number;
            };
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
    type ScssVars = Omit<z.infer<typeof Schemata.Tokens>, "CSS" | "spacing" | "typography"> & Omit<z.infer<typeof Schemata.Tokens.shape.CSS>, "zIndex"> & Omit<z.infer<typeof Schemata.Tokens.shape.spacing>, "multiplier"> & {
        font: Omit<z.infer<typeof Schemata.Tokens.shape.typography>, "lineHeight">;
        line_height: z.infer<typeof Schemata.Tokens.shape.typography.shape.lineHeight>;
        spacing_multiplier: number;
        z_index: z.infer<typeof Schemata.Tokens.shape.CSS.shape.zIndex>;
    };
    interface Export extends Omit<z.infer<typeof Schemata.Tokens>, "typography"> {
        typography: Tokens_Typography.Export;
    }
    interface JSON extends Omit<z.infer<typeof Schemata.Tokens>, "typography"> {
        typography: Tokens_Typography.JSON;
    }
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