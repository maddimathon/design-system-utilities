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
import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_CSS_Border extends AbstractTokens<typeof Tokens_CSS_Border.Schema, Tokens_CSS_Border.Parsed, Tokens_CSS_Border.Part, Tokens_CSS_Border.JSON, Tokens_CSS_Border.ScssVars> {
    get schema(): z.ZodObject<{
        radius: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
        width: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
        stroke: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
    }, "strip", z.ZodTypeAny, {
        radius: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        width: {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        stroke: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
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
    /**
     * Border radii for CSS.
     *
     * Default keys are '100', '200', '400'. After merging, values are
     * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    readonly radius: Tokens_CSS_Border.Parsed['radius'];
    /**
     * Relative stroke widths for CSS. Meant to be used for underlines and
     * spacing. Written in css as em units.
     *
     * Default keys are '100', '200', '400', '600', '800', '900'. After
     * merging, values are rounded with {@link AbstractTokens.roundToPixel}
     * (factor = 32).
     */
    readonly stroke: Tokens_CSS_Border.Parsed['stroke'];
    /**
     * Border widths for CSS.
     *
     * Default keys are '100', '200', '300', '400'. After merging, values
     * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    readonly width: Tokens_CSS_Border.Parsed['width'];
    constructor(input?: Tokens_CSS_Border.Part);
    toJSON(): {
        radius: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        width: {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        stroke: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
    };
    toScssVars(): {
        radius: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        width: {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        stroke: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
    };
    valueOf(): Tokens_CSS_Border.Parsed;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_CSS_Border {
    const Schema: z.ZodObject<{
        radius: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
        width: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
        stroke: z.ZodEffects<z.ZodIntersection<z.ZodObject<{
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
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>, {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>>;
    }, "strip", z.ZodTypeAny, {
        radius: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        width: {
            '100': number | undefined;
            '200': number | undefined;
            '300': number | undefined;
            '400': number | undefined;
            500?: number | undefined;
            600?: number | undefined;
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
        stroke: {
            '100': number | undefined;
            '200': number | undefined;
            '400': number | undefined;
            '600': number | undefined;
            '800': number | undefined;
            '900': number | undefined;
            300?: number | undefined;
            500?: number | undefined;
            700?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
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
    type Parsed = z.infer<typeof Schema>;
    /**
     * The partialized version of the {@link Tokens_CSS_Border.Schema} accepted
     * as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part {
        radius?: Partial<z.infer<typeof Schema.shape.radius>>;
        stroke?: Partial<z.infer<typeof Schema.shape.stroke>>;
        width?: Partial<z.infer<typeof Schema.shape.width>>;
    }
    type JSON = Parsed;
    type ScssVars = Parsed;
}
//# sourceMappingURL=CSS_Border.d.ts.map