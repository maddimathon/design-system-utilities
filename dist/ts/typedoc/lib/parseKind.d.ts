/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { ReflectionKind } from 'typedoc';
import * as z from 'zod';
export declare function parseKind(_kind: ReflectionKind): parseKind.Return;
export declare namespace parseKind {
    const returnSchema: z.ZodUnion<[z.ZodLiteral<"Accessor">, z.ZodLiteral<"CallSignature">, z.ZodLiteral<"Class">, z.ZodLiteral<"Constructor">, z.ZodLiteral<"ConstructorSignature">, z.ZodLiteral<"Document">, z.ZodLiteral<"Enum">, z.ZodLiteral<"EnumMember">, z.ZodLiteral<"Function">, z.ZodLiteral<"GetSignature">, z.ZodLiteral<"IndexSignature">, z.ZodLiteral<"Interface">, z.ZodLiteral<"Method">, z.ZodLiteral<"Module">, z.ZodLiteral<"Namespace">, z.ZodLiteral<"Parameter">, z.ZodLiteral<"Project">, z.ZodLiteral<"Property">, z.ZodLiteral<"Reference">, z.ZodLiteral<"SetSignature">, z.ZodLiteral<"TypeAlias">, z.ZodLiteral<"TypeLiteral">, z.ZodLiteral<"TypeParameter">, z.ZodLiteral<"Variable">]>;
    type Return = z.infer<typeof returnSchema>;
}
//# sourceMappingURL=parseKind.d.ts.map