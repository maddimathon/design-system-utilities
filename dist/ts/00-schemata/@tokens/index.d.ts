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
import * as Tokens_CSS from './CSS/index.js';
/**
 * Complete schema for the design system tokens built using this package.
 *
 * @since 0.1.0-alpha.draft
 */
export declare const Tokens: z.ZodObject<{
    CSS: z.ZodObject<{
        transition: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        transition: {
            time: {
                fast: string;
                normal: string;
                slow: string;
            } & Record<string, string>;
        };
    }, {
        transition: {
            time: {
                fast?: string | undefined;
                normal?: string | undefined;
                slow?: string | undefined;
            } & Record<string, string>;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    CSS: {
        transition: {
            time: {
                fast: string;
                normal: string;
                slow: string;
            } & Record<string, string>;
        };
    };
}, {
    CSS: {
        transition: {
            time: {
                fast?: string | undefined;
                normal?: string | undefined;
                slow?: string | undefined;
            } & Record<string, string>;
        };
    };
}>;
/**
 * The partialized version of the {@link Tokens} accepted as input.
 *
 * @since 0.1.0-alpha.draft
 * @interface
 */
export interface PartialTokens {
    css?: Tokens_CSS.Partial_CSS;
}
/**
 * Utilities for the {@link PartialTokens} interface.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace PartialTokens {
    interface CSS extends Tokens_CSS.Partial_CSS {
    }
    namespace CSS {
        interface Transition extends NonNullable<Tokens_CSS.Partial_CSS['transition']> {
        }
    }
}
//# sourceMappingURL=index.d.ts.map