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
export declare const CSS: z.ZodObject<{
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
/**
 * The partialized version of the {@link CSS} accepted as input.
 *
 * @since 0.1.0-alpha.draft
 * @interface
 */
export interface Partial_CSS {
    transition?: {
        time?: Partial<z.infer<typeof CSS.shape.transition>>;
    };
}
//# sourceMappingURL=index.d.ts.map