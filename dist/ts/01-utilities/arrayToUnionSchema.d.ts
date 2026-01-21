/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import * as z from 'zod';
/**
 * Takes an array of values and translates them into an appropriate ZodType.
 *
 * @since 0.1.0-alpha
 */
export declare function arrayToUnionSchema<T_Value extends null | z.Primitive>(arr: T_Value[] | readonly T_Value[]): z.ZodUndefined | z.ZodNull | z.ZodLiteral<T_Value> | z.ZodUnion<[z.ZodNull | z.ZodLiteral<T_Value>, z.ZodNull | z.ZodLiteral<T_Value>, ...(z.ZodNull | z.ZodLiteral<T_Value>)[]]> | undefined;
//# sourceMappingURL=arrayToUnionSchema.d.ts.map