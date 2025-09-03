/**
 * Individual token types and shapes.
 *
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
declare namespace Value {
    const alias: z.ZodObject<{
        $value: z.ZodString;
        $type: z.ZodNever | z.ZodLiteral<never>;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: string;
        $type: never;
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: string;
        $type: never;
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    const cubicBezier: z.ZodObject<{
        $value: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
        $type: z.ZodNever | z.ZodLiteral<"cubicBezier">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: [number, number, number, number];
        $type: "cubicBezier";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: [number, number, number, number];
        $type: "cubicBezier";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    const dimension: z.ZodObject<{
        $value: z.ZodObject<{
            value: z.ZodNumber;
            unit: z.ZodUnion<[z.ZodLiteral<"px">, z.ZodLiteral<"rem">]>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            unit: "px" | "rem";
        }, {
            value: number;
            unit: "px" | "rem";
        }>;
        $type: z.ZodNever | z.ZodLiteral<"dimension">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: {
            value: number;
            unit: "px" | "rem";
        };
        $type: "dimension";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: {
            value: number;
            unit: "px" | "rem";
        };
        $type: "dimension";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    const duration: z.ZodObject<{
        $value: z.ZodObject<{
            value: z.ZodNumber;
            unit: z.ZodUnion<[z.ZodLiteral<"ms">, z.ZodLiteral<"s">]>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            unit: "s" | "ms";
        }, {
            value: number;
            unit: "s" | "ms";
        }>;
        $type: z.ZodNever | z.ZodLiteral<"duration">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: {
            value: number;
            unit: "s" | "ms";
        };
        $type: "duration";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: {
            value: number;
            unit: "s" | "ms";
        };
        $type: "duration";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    const fontFamily: z.ZodObject<{
        $value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        $type: z.ZodNever | z.ZodLiteral<"fontFamily">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: string | string[];
        $type: "fontFamily";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: string | string[];
        $type: "fontFamily";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    /**
     * This is intentionally more restricted than the actual W3C spec.
     */
    const fontWeight: z.ZodObject<{
        $value: z.ZodUnion<[z.ZodLiteral<100>, z.ZodLiteral<200>, z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>, z.ZodLiteral<800>, z.ZodLiteral<900>]>;
        $type: z.ZodNever | z.ZodLiteral<"fontWeight">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
        $type: "fontWeight";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
        $type: "fontWeight";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
    const number: z.ZodObject<{
        $value: z.ZodNumber;
        $type: z.ZodNever | z.ZodLiteral<"number">;
        $deprecated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>;
        $description: z.ZodOptional<z.ZodString>;
        $extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        $value: number;
        $type: "number";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }, {
        $value: number;
        $type: "number";
        $deprecated?: string | boolean | undefined;
        $description?: string | undefined;
        $extensions?: Record<string, unknown> | undefined;
    }>;
}
declare namespace Value {
    type CompositeTokenType = "strokeStyle";
    type TokenType = "color" | "cubicBezier" | "dimension" | "duration" | "fontFamily" | "fontWeight" | "number" | CompositeTokenType;
    type Alias = z.infer<typeof alias>;
    type CubicBezier = z.infer<typeof cubicBezier>;
    type Dimension = z.infer<typeof dimension>;
    type Duration = z.infer<typeof duration>;
    type FontFamily = z.infer<typeof fontFamily>;
    type FontWeight = z.infer<typeof fontWeight>;
    type Number = z.infer<typeof number>;
    type Any = Alias | CubicBezier | Dimension | Duration | FontFamily | FontWeight | Number;
}
export default Value;
//# sourceMappingURL=value.d.ts.map