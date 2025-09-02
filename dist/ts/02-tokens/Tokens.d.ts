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
import { Tokens_Spacing } from './Tokens/Spacing.js';
import { Tokens_Typography } from './Tokens/Typography.js';
import { Tokens_CSS_Border } from './Tokens/CSS_Border.js';
import { Tokens_CSS_Transition } from './Tokens/CSS_Transition.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens extends AbstractTokens<typeof Tokens.Schema, Tokens.Export, Tokens.Part, Tokens.JSON, Tokens.ScssVars> {
    get schema(): z.ZodObject<{
        spacing: z.ZodObject<{
            multiplier: z.ZodDefault<z.ZodNumber>;
            margin: z.ZodIntersection<z.ZodObject<{
                '100': z.ZodDefault<z.ZodNumber>;
                '200': z.ZodDefault<z.ZodNumber>;
                '300': z.ZodDefault<z.ZodNumber>;
                '400': z.ZodDefault<z.ZodNumber>;
                '600': z.ZodDefault<z.ZodNumber>;
                '800': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            }, {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            multiplier: number;
            margin: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        }, {
            margin: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            multiplier?: number | undefined;
        }>;
        typography: z.ZodObject<{
            lineHeight: z.ZodIntersection<z.ZodObject<{
                '100': z.ZodDefault<z.ZodNumber>;
                '200': z.ZodDefault<z.ZodNumber>;
                '300': z.ZodDefault<z.ZodNumber>;
                '400': z.ZodDefault<z.ZodNumber>;
                '500': z.ZodDefault<z.ZodNumber>;
                '600': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            }, {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
            size: z.ZodObject<{
                title: z.ZodDefault<z.ZodNumber>;
                heading: z.ZodIntersection<z.ZodObject<{
                    '1': z.ZodDefault<z.ZodNumber>;
                    '2': z.ZodDefault<z.ZodNumber>;
                    '3': z.ZodDefault<z.ZodNumber>;
                    '4': z.ZodDefault<z.ZodNumber>;
                    '5': z.ZodDefault<z.ZodNumber>;
                    '6': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
                smaller: z.ZodIntersection<z.ZodObject<{
                    '2': z.ZodDefault<z.ZodNumber>;
                    '1': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
                normal: z.ZodDefault<z.ZodNumber>;
                bigger: z.ZodIntersection<z.ZodObject<{
                    '1': z.ZodDefault<z.ZodNumber>;
                    '2': z.ZodDefault<z.ZodNumber>;
                    '3': z.ZodDefault<z.ZodNumber>;
                    '4': z.ZodDefault<z.ZodNumber>;
                    '5': z.ZodDefault<z.ZodNumber>;
                    '6': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            }, {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            lineHeight: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            };
        }, {
            lineHeight: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            };
        }>;
        CSS: z.ZodObject<{
            border: z.ZodObject<{
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
            /**
             * Z-index values for CSS.
             *
             * Default keys are 'nav', 'settings', 'skipLink'.
             */
            zIndex: z.ZodObject<{
                nav: z.ZodDefault<z.ZodNumber>;
                settings: z.ZodDefault<z.ZodNumber>;
                skipLink: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nav: number;
                settings: number;
                skipLink: number;
            }, {
                nav?: number | undefined;
                settings?: number | undefined;
                skipLink?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            border: {
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
                settings?: number | undefined;
                skipLink?: number | undefined;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        spacing: {
            multiplier: number;
            margin: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        };
        typography: {
            lineHeight: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            };
        };
        CSS: {
            border: {
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
                settings: number;
                skipLink: number;
            };
        };
    }, {
        spacing: {
            margin: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            multiplier?: number | undefined;
        };
        typography: {
            lineHeight: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            };
        };
        CSS: {
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
                settings?: number | undefined;
                skipLink?: number | undefined;
            };
        };
    }>;
    readonly spacing: Tokens_Spacing;
    readonly typography: Tokens_Typography;
    readonly CSS: {
        border: Tokens_CSS_Border;
        transition: Tokens_CSS_Transition;
        zIndex: z.infer<typeof Tokens.Schema.shape.CSS.shape.zIndex>;
    };
    readonly opts: Tokens.Opts;
    constructor(input?: Tokens.Part, opts?: Partial<Tokens.Opts>);
    export(): {
        spacing: Tokens_Spacing.Export;
        typography: Tokens_Typography.Export;
        CSS: {
            border: Tokens_CSS_Border.Export;
            transition: Tokens_CSS_Transition.Export;
            zIndex: {
                nav: number;
                settings: number;
                skipLink: number;
            };
        };
    };
    toJSON(): {
        spacing: {
            margin: {
                rem: {
                    '100': number;
                    '200': number;
                    '300': number;
                    '400': number;
                    '600': number;
                    '800': number;
                    500?: number | undefined;
                    700?: number | undefined;
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
                pt: {
                    '100': number;
                    '200': number;
                    '300': number;
                    '400': number;
                    '600': number;
                    '800': number;
                    500?: number | undefined;
                    700?: number | undefined;
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
                px: {
                    '100': number;
                    '200': number;
                    '300': number;
                    '400': number;
                    '600': number;
                    '800': number;
                    500?: number | undefined;
                    700?: number | undefined;
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
            };
            multiplier: number;
        };
        typography: Tokens_Typography.JSON;
        CSS: {
            border: Tokens_CSS_Border.Export;
            transition: Tokens_CSS_Transition.Export;
            zIndex: {
                nav: number;
                settings: number;
                skipLink: number;
            };
        };
    };
    toScssVars(): Tokens.ScssVars;
    toScss(): string;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens {
    const Schema: z.ZodObject<{
        spacing: z.ZodObject<{
            multiplier: z.ZodDefault<z.ZodNumber>;
            margin: z.ZodIntersection<z.ZodObject<{
                '100': z.ZodDefault<z.ZodNumber>;
                '200': z.ZodDefault<z.ZodNumber>;
                '300': z.ZodDefault<z.ZodNumber>;
                '400': z.ZodDefault<z.ZodNumber>;
                '600': z.ZodDefault<z.ZodNumber>;
                '800': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            }, {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            multiplier: number;
            margin: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        }, {
            margin: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            multiplier?: number | undefined;
        }>;
        typography: z.ZodObject<{
            lineHeight: z.ZodIntersection<z.ZodObject<{
                '100': z.ZodDefault<z.ZodNumber>;
                '200': z.ZodDefault<z.ZodNumber>;
                '300': z.ZodDefault<z.ZodNumber>;
                '400': z.ZodDefault<z.ZodNumber>;
                '500': z.ZodDefault<z.ZodNumber>;
                '600': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            }, {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
            size: z.ZodObject<{
                title: z.ZodDefault<z.ZodNumber>;
                heading: z.ZodIntersection<z.ZodObject<{
                    '1': z.ZodDefault<z.ZodNumber>;
                    '2': z.ZodDefault<z.ZodNumber>;
                    '3': z.ZodDefault<z.ZodNumber>;
                    '4': z.ZodDefault<z.ZodNumber>;
                    '5': z.ZodDefault<z.ZodNumber>;
                    '6': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
                smaller: z.ZodIntersection<z.ZodObject<{
                    '2': z.ZodDefault<z.ZodNumber>;
                    '1': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
                normal: z.ZodDefault<z.ZodNumber>;
                bigger: z.ZodIntersection<z.ZodObject<{
                    '1': z.ZodDefault<z.ZodNumber>;
                    '2': z.ZodDefault<z.ZodNumber>;
                    '3': z.ZodDefault<z.ZodNumber>;
                    '4': z.ZodDefault<z.ZodNumber>;
                    '5': z.ZodDefault<z.ZodNumber>;
                    '6': z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                }, {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            }, {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            lineHeight: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            };
        }, {
            lineHeight: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            };
        }>;
        CSS: z.ZodObject<{
            border: z.ZodObject<{
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
            /**
             * Z-index values for CSS.
             *
             * Default keys are 'nav', 'settings', 'skipLink'.
             */
            zIndex: z.ZodObject<{
                nav: z.ZodDefault<z.ZodNumber>;
                settings: z.ZodDefault<z.ZodNumber>;
                skipLink: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nav: number;
                settings: number;
                skipLink: number;
            }, {
                nav?: number | undefined;
                settings?: number | undefined;
                skipLink?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            border: {
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
                settings?: number | undefined;
                skipLink?: number | undefined;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        spacing: {
            multiplier: number;
            margin: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        };
        typography: {
            lineHeight: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '500': number;
                '600': number;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                title: number;
                heading: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
                smaller: {
                    '1': number;
                    '2': number;
                } & Record<number, number>;
                normal: number;
                bigger: {
                    '1': number;
                    '2': number;
                    '3': number;
                    '4': number;
                    '5': number;
                    '6': number;
                } & Record<number, number>;
            };
        };
        CSS: {
            border: {
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
                settings: number;
                skipLink: number;
            };
        };
    }, {
        spacing: {
            margin: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '600'?: number | undefined;
                '800'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            multiplier?: number | undefined;
        };
        typography: {
            lineHeight: {
                '100'?: number | undefined;
                '200'?: number | undefined;
                '300'?: number | undefined;
                '400'?: number | undefined;
                '500'?: number | undefined;
                '600'?: number | undefined;
            } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
            size: {
                heading: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                smaller: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                } & Record<number, number>;
                bigger: {
                    '1'?: number | undefined;
                    '2'?: number | undefined;
                    '3'?: number | undefined;
                    '4'?: number | undefined;
                    '5'?: number | undefined;
                    '6'?: number | undefined;
                } & Record<number, number>;
                title?: number | undefined;
                normal?: number | undefined;
            };
        };
        CSS: {
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
                settings?: number | undefined;
                skipLink?: number | undefined;
            };
        };
    }>;
    interface Export extends Omit<z.infer<typeof Schema>, "spacing" | "typography"> {
        spacing: Tokens_Spacing.Export;
        typography: Tokens_Typography.Export;
    }
    interface JSON extends Omit<z.infer<typeof Schema>, "spacing" | "typography"> {
        spacing: Tokens_Spacing.JSON;
        typography: Tokens_Typography.JSON;
    }
    /**
     * Options for the {@link Tokens} class.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Opts {
        tokensAsDefault: boolean;
    }
    /**
     * The partialized version of the {@link Tokens.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part {
        spacing?: Partial<Tokens_Spacing.Export>;
        typography?: Partial<Tokens_Typography.Export>;
        css?: {
            border?: Tokens_CSS_Border.Part;
            transition?: Tokens_CSS_Transition.Part;
            zIndex?: Partial<z.infer<typeof Schema.shape.CSS.shape.zIndex>>;
        };
    }
    type ScssVars = Omit<z.infer<typeof Schema>, "CSS" | "spacing" | "typography"> & Omit<z.infer<typeof Schema.shape.CSS>, "zIndex"> & Omit<z.infer<typeof Schema.shape.spacing>, "multiplier"> & {
        font: Omit<z.infer<typeof Schema.shape.typography>, "lineHeight">;
        line_height: z.infer<typeof Schema.shape.typography.shape.lineHeight>;
        spacing_multiplier: number;
        z_index: z.infer<typeof Schema.shape.CSS.shape.zIndex>;
    };
}
//# sourceMappingURL=Tokens.d.ts.map