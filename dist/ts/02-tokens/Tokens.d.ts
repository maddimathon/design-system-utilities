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
import { AbstractTokens } from './abstracts/AbstractTokens.js';
import { Tokens_Colour } from './Tokens/Colour.js';
import { Tokens_Spacing } from './Tokens/Spacing.js';
import { Tokens_Typography } from './Tokens/Typography.js';
import { Tokens_CSS_Border } from './Tokens/CSS/CSS_Border.js';
import { Tokens_CSS_Transition } from './Tokens/CSS/CSS_Transition.js';
import { Tokens_Theme } from './Tokens/Theme.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens<T_ColourName extends string> extends AbstractTokens<undefined, Tokens.Parsed<T_ColourName>, Tokens.Part<T_ColourName>, Tokens.JSON<T_ColourName>, Tokens.ScssVars<T_ColourName>> {
    protected readonly clrNames: T_ColourName[];
    get schema(): undefined;
    readonly colour: Tokens_Colour<T_ColourName>;
    readonly spacing: Tokens_Spacing;
    readonly theme: Tokens_Theme;
    readonly typography: Tokens_Typography;
    readonly CSS: {
        border: Tokens_CSS_Border;
        transition: Tokens_CSS_Transition;
        /**
         * Z-index values for CSS.
         *
         * Default keys are 'nav', 'settings', 'skipLink'.
         */
        zIndex: z.output<Tokens.Schemata<T_ColourName>['CSS']>['zIndex'];
    };
    readonly opts: Tokens.Opts;
    constructor(clrNames: T_ColourName[], input?: Tokens.Part<T_ColourName>, opts?: Partial<Tokens.Opts>);
    toJSON(): Tokens.JSON<T_ColourName>;
    toScssVars(): Tokens.ScssVars<T_ColourName>;
    toScss(): string;
    valueOf(): Tokens.Parsed<T_ColourName>;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens {
    /**
     * Options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Opts {
        tokensAsDefault: boolean;
    }
    const Schema_CSS: z.ZodObject<{
        border: z.ZodObject<{
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
        transition: z.ZodObject<{
            time: z.ZodIntersection<z.ZodObject<{
                fast: z.ZodDefault<z.ZodString>;
                normal: z.ZodDefault<z.ZodString>;
                slow: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                normal: string;
                fast: string;
                slow: string;
            }, {
                normal?: string | undefined;
                fast?: string | undefined;
                slow?: string | undefined;
            }>, z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            time: {
                normal: string;
                fast: string;
                slow: string;
            } & Record<string, string>;
        }, {
            time: {
                normal?: string | undefined;
                fast?: string | undefined;
                slow?: string | undefined;
            } & Record<string, string>;
        }>;
        zIndex: z.ZodObject<{
            nav: z.ZodDefault<z.ZodNumber>;
            popup: z.ZodDefault<z.ZodNumber>;
            settings: z.ZodDefault<z.ZodNumber>;
            skipLink: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
        }, {
            nav?: number | undefined;
            popup?: number | undefined;
            settings?: number | undefined;
            skipLink?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        border: {
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
        transition: {
            time: {
                normal: string;
                fast: string;
                slow: string;
            } & Record<string, string>;
        };
        zIndex: {
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
        };
    }, {
        border: {
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
        };
        transition: {
            time: {
                normal?: string | undefined;
                fast?: string | undefined;
                slow?: string | undefined;
            } & Record<string, string>;
        };
        zIndex: {
            nav?: number | undefined;
            popup?: number | undefined;
            settings?: number | undefined;
            skipLink?: number | undefined;
        };
    }>;
    type Schemata<T_ColourName extends string> = {
        colour: Tokens_Colour.Schema<T_ColourName>;
        spacing: typeof Tokens_Spacing.Schema;
        theme: typeof Tokens_Theme.Schema;
        typography: typeof Tokens_Typography.Schema;
        CSS: (typeof Schema_CSS);
    };
    type Parsed<T_ColourName extends string> = {
        colour: Tokens_Colour.Parsed<T_ColourName>;
        spacing: Tokens_Spacing.Parsed;
        theme: Tokens_Theme.Parsed;
        typography: Tokens_Typography.Parsed;
        CSS: {
            border: Tokens_CSS_Border.Parsed;
            transition: Tokens_CSS_Transition.Parsed;
            zIndex: z.output<typeof Schema_CSS>['zIndex'];
        };
    };
    /**
     * The partialized version of the {@link Tokens.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     * @interface
     */
    type Part<T_ColourName extends string> = {
        colour?: Tokens_Colour.Part<T_ColourName>;
        spacing?: Tokens_Spacing.Part;
        theme?: Tokens_Theme.Part;
        typography?: Tokens_Typography.Part;
        css?: {
            border?: Tokens_CSS_Border.Part;
            transition?: Tokens_CSS_Transition.Part;
            zIndex?: Partial<Parsed<T_ColourName>['CSS']['zIndex']>;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     * @interface
     */
    type JSON<T_ColourName extends string> = {
        colour: Tokens_Colour.JSON<T_ColourName>;
        spacing: Tokens_Spacing.JSON;
        theme: Tokens_Theme.JSON;
        typography: Tokens_Typography.JSON;
        CSS: {
            border: Tokens_CSS_Border.JSON;
            transition: Tokens_CSS_Transition.JSON;
            zIndex: Parsed<T_ColourName>['CSS']['zIndex'];
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     * @interface
     */
    type ScssVars<T_ColourName extends string> = Omit<Parsed<T_ColourName>, "colour" | "CSS" | "spacing" | "theme" | "typography"> & Tokens_Spacing.ScssVars & Tokens_Typography.ScssVars & {
        border: Tokens_CSS_Border.ScssVars;
        colour: Tokens_Colour.ScssVars<T_ColourName>;
        theme: Tokens_Theme.ScssVars;
        transition: Tokens_CSS_Transition.ScssVars;
        z_index: Parsed<T_ColourName>['CSS']['zIndex'];
    };
}
//# sourceMappingURL=Tokens.d.ts.map