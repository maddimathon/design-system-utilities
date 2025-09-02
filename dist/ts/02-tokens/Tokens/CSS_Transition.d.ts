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
export declare class Tokens_CSS_Transition extends AbstractTokens<typeof Schemata.Tokens.shape.CSS.shape.transition, Tokens_CSS_Transition.Export, Schemata.PartialTokens.CSS.Transition> {
    get schema(): z.ZodObject<{
        time: z.ZodIntersection<z.ZodObject<{
            fast: z.ZodDefault<z.ZodString>;
            normal: z.ZodDefault<z.ZodString>;
            slow: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            fast: string;
            normal: string;
            slow: string;
        }, {
            fast?: string | undefined;
            normal?: string | undefined;
            slow?: string | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        time: {
            fast: string;
            normal: string;
            slow: string;
        } & Record<string, string>;
    }, {
        time: {
            fast?: string | undefined;
            normal?: string | undefined;
            slow?: string | undefined;
        } & Record<string, string>;
    }>;
    readonly time: Tokens_CSS_Transition.Export['time'];
    constructor(input?: Schemata.PartialTokens.CSS.Transition);
    export(): Tokens_CSS_Transition.Export;
    toJSON(): Tokens_CSS_Transition.Export;
    toScssVars(): Tokens_CSS_Transition.Export;
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