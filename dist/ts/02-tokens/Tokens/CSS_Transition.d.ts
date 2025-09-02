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
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_CSS_Transition extends AbstractTokens<typeof Tokens_CSS_Transition.Schema, Tokens_CSS_Transition.Export, Tokens_CSS_Transition.Part, Tokens_CSS_Transition.JSON, Tokens_CSS_Transition.ScssVars> {
    get schema(): z.ZodObject<{
        time: z.ZodIntersection<z.ZodObject<{
            fast: z.ZodDefault<z.ZodString>;
            normal: z.ZodDefault<z.ZodString>;
            slow: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            normal: string;
            fast: string;
            slow: string;
        }, {
            normal?: string | undefined;
            fast?: string | undefined;
            slow?: string | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        time: {
            normal: string;
            fast: string;
            slow: string;
        } & Record<string, string>;
    }, {
        time: {
            normal?: string | undefined;
            fast?: string | undefined;
            slow?: string | undefined;
        } & Record<string, string>;
    }>;
    /**
     * Transition time values for CSS.
     *
     * Default keys are 'fast', 'normal', 'slow'.
     */
    readonly time: Tokens_CSS_Transition.Export['time'];
    constructor(input?: Tokens_CSS_Transition.Part);
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
    const Schema: z.ZodObject<{
        time: z.ZodIntersection<z.ZodObject<{
            fast: z.ZodDefault<z.ZodString>;
            normal: z.ZodDefault<z.ZodString>;
            slow: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            normal: string;
            fast: string;
            slow: string;
        }, {
            normal?: string | undefined;
            fast?: string | undefined;
            slow?: string | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        time: {
            normal: string;
            fast: string;
            slow: string;
        } & Record<string, string>;
    }, {
        time: {
            normal?: string | undefined;
            fast?: string | undefined;
            slow?: string | undefined;
        } & Record<string, string>;
    }>;
    interface Export extends z.infer<typeof Schema> {
    }
    interface JSON extends z.infer<typeof Schema> {
    }
    /**
     * The partialized version of the {@link Tokens_CSS_Transition.Schema}
     * accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part {
        time?: Partial<z.infer<typeof Schema.shape.time>>;
    }
    interface ScssVars extends z.infer<typeof Schema> {
    }
}
//# sourceMappingURL=CSS_Transition.d.ts.map