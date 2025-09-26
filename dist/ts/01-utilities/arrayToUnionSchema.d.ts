/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as z from 'zod';
/**
 * Takes an array of values and translates them into an appropriate ZodType.
 *
 * @since ___PKG_VERSION___
 */
export declare function arrayToUnionSchema<T_Value extends null | z.Primitive>(arr: T_Value[] | readonly T_Value[]): z.ZodUndefined | z.ZodNull | z.ZodLiteral<T_Value> | z.ZodUnion<[z.ZodNull | z.ZodLiteral<T_Value>, z.ZodNull | z.ZodLiteral<T_Value>, ...(z.ZodNull | z.ZodLiteral<T_Value>)[]]>;
//# sourceMappingURL=arrayToUnionSchema.d.ts.map