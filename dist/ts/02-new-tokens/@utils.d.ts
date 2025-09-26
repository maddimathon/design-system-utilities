/**
 * Utilities for constructing the schema.
 *
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as z from 'zod';
export type ColourNameSchema<T_ColourName extends string> = z.ZodLiteral<T_ColourName> | z.ZodUnion<[
    z.ZodLiteral<T_ColourName>,
    z.ZodLiteral<T_ColourName>,
    ...z.ZodLiteral<T_ColourName>[]
]>;
export declare const TokenLevels: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
export type TokenLevels = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export declare const TokenLevels_Extended: z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"150">, z.ZodLiteral<"250">, z.ZodLiteral<"350">, z.ZodLiteral<"450">, z.ZodLiteral<"550">, z.ZodLiteral<"650">, z.ZodLiteral<"750">, z.ZodLiteral<"850">, z.ZodLiteral<"950">]>;
export type TokenLevels_Extended = "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950";
//# sourceMappingURL=@utils.d.ts.map