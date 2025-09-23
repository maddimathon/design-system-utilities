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
/**
 * @since 0.1.0-alpha.draft
 */
export declare namespace Schemata {
    /**
     * Token definitions that fit the W3C proposed standard.
     *
     * @see {@link https://www.designtokens.org/tr/drafts/format | Proposed spec}
     *
     * @since 0.1.0-alpha.draft
     */
    namespace W3C {
        /**
         * @since 0.1.0-alpha.draft
         */
        type TokenOrGroupName = string;
        /** @hidden */
        const TokenOrGroupName: z.ZodString;
        /**
         * @since 0.1.0-alpha.draft
         * @useDeclaredType
         */
        type TokenType = z.infer<typeof TokenType>;
        /** @hidden */
        const TokenType: z.ZodUnion<[z.ZodLiteral<"color">, z.ZodLiteral<"dimension">]>;
        /**
         * @since 0.1.0-alpha.draft
         * @useDeclaredType
         */
        type GenericToken = z.infer<ReturnType<typeof GenericToken>>;
        /** @hidden */
        const GenericToken: <T_Type extends z.infer<typeof TokenType> = z.infer<typeof TokenType>, T_Value extends any = any>({ type, value }?: {
            type?: z.ZodType<T_Type>;
            value?: z.ZodType<T_Value>;
        }) => z.ZodObject<{
            $type: z.ZodType<T_Type, z.ZodTypeDef, T_Type> | z.ZodUndefined;
            $description: z.ZodOptional<z.ZodString>;
            $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
            $value: z.ZodString | z.ZodType<T_Value, z.ZodTypeDef, T_Value>;
            $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
            $type: z.ZodType<T_Type, z.ZodTypeDef, T_Type> | z.ZodUndefined;
            $description: z.ZodOptional<z.ZodString>;
            $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
            $value: z.ZodString | z.ZodType<T_Value, z.ZodTypeDef, T_Value>;
            $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }>, any> extends infer T ? { [k in keyof T]: T[k]; } : never, z.baseObjectInputType<{
            $type: z.ZodType<T_Type, z.ZodTypeDef, T_Type> | z.ZodUndefined;
            $description: z.ZodOptional<z.ZodString>;
            $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
            $value: z.ZodString | z.ZodType<T_Value, z.ZodTypeDef, T_Value>;
            $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }> extends infer T_1 ? { [k_1 in keyof T_1]: T_1[k_1]; } : never>;
        /**
         * @since 0.1.0-alpha.draft
         * @useDeclaredType
         */
        type Token = z.infer<typeof Token>;
        /** @hidden */
        const Token: z.ZodObject<{
            $type: z.ZodUndefined | z.ZodType<"dimension" | "color", z.ZodTypeDef, "dimension" | "color">;
            $description: z.ZodOptional<z.ZodString>;
            $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
            $value: z.ZodString | z.ZodType<any, z.ZodTypeDef, any>;
            $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            $value?: any;
            $type?: "dimension" | "color" | undefined;
            $deprecated?: string | boolean | undefined;
            $description?: string | undefined;
            $extensions?: Record<string, any> | undefined;
        }, {
            $value?: any;
            $type?: "dimension" | "color" | undefined;
            $deprecated?: string | boolean | undefined;
            $description?: string | undefined;
            $extensions?: Record<string, any> | undefined;
        }>;
        /**
         * @since 0.1.0-alpha.draft
         * @useDeclaredType
         */
        type TokenGroup = {
            '$type'?: Token['$type'];
            '$description'?: string;
        } & {
            [key: string]: Token | TokenGroup;
        };
        /** @hidden */
        const TokenGroup: z.ZodIntersection<z.ZodObject<{
            $description: z.ZodOptional<z.ZodString>;
            $type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"color">, z.ZodLiteral<"dimension">]>>;
        }, "strip", z.ZodTypeAny, {
            $type?: "dimension" | "color" | undefined;
            $description?: string | undefined;
        }, {
            $type?: "dimension" | "color" | undefined;
            $description?: string | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            $type: z.ZodUndefined | z.ZodType<"dimension" | "color", z.ZodTypeDef, "dimension" | "color">;
            $description: z.ZodOptional<z.ZodString>;
            $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
            $value: z.ZodString | z.ZodType<any, z.ZodTypeDef, any>;
            $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            $value?: any;
            $type?: "dimension" | "color" | undefined;
            $deprecated?: string | boolean | undefined;
            $description?: string | undefined;
            $extensions?: Record<string, any> | undefined;
        }, {
            $value?: any;
            $type?: "dimension" | "color" | undefined;
            $deprecated?: string | boolean | undefined;
            $description?: string | undefined;
            $extensions?: Record<string, any> | undefined;
        }>, z.ZodLazy<z.ZodType<TokenGroup, z.ZodTypeDef, TokenGroup>>]>>>;
    }
}
//# sourceMappingURL=index.d.ts.map