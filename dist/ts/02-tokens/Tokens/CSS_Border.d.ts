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
export declare class Tokens_CSS_Border extends AbstractTokens<typeof Schemata.Tokens.shape.CSS.shape.border, Tokens_CSS_Border.Export, Schemata.PartialTokens.CSS.Border> {
    get schema(): z.ZodObject<{
        radius: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '400': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        width: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '300': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        stroke: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
            '600': z.ZodDefault<z.ZodNumber>;
            '800': z.ZodDefault<z.ZodNumber>;
            '900': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '400': number;
            '600': number;
            '800': number;
            '900': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        radius: {
            '100': number;
            '200': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100': number;
            '200': number;
            '400': number;
            '600': number;
            '800': number;
            '900': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    }, {
        radius: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    }>;
    readonly radius: Tokens_CSS_Border.Export['radius'];
    readonly stroke: Tokens_CSS_Border.Export['stroke'];
    readonly width: Tokens_CSS_Border.Export['width'];
    constructor(input?: Schemata.PartialTokens.CSS.Border);
    export(): Tokens_CSS_Border.Export;
    toJSON(): Tokens_CSS_Border.Export;
    toScssVars(): Tokens_CSS_Border.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Border {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.CSS.shape.border> {
    }
}
//# sourceMappingURL=CSS_Border.d.ts.map