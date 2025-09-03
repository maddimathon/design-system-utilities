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
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Colour extends AbstractTokens<typeof Tokens_Colour.Schema, Tokens_Colour.Parsed, Tokens_Colour.Part, Tokens_Colour.JSON, Tokens_Colour.ScssVars> {
    get schema(): z.ZodEffects<z.ZodObject<{
        base: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        primary: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        secondary: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        active: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        base: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        primary: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        secondary: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        active: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
    }, {
        base?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        primary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        secondary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        active?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
    }>, {
        base: Tokens_Colour_ShadeMap;
        primary: Tokens_Colour_ShadeMap;
        secondary: Tokens_Colour_ShadeMap;
        active: Tokens_Colour_ShadeMap;
    }, {
        base?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        primary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        secondary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        active?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
    }>;
    readonly base: Tokens_Colour_ShadeMap;
    readonly primary: Tokens_Colour_ShadeMap;
    readonly secondary: Tokens_Colour_ShadeMap;
    readonly active: Tokens_Colour_ShadeMap;
    constructor(input?: Tokens_Colour.Part);
    valueOf(): Tokens_Colour.Parsed;
    toJSON(): Tokens_Colour.JSON;
    toScssVars(): Tokens_Colour.ScssVars;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Colour {
    const Schema: z.ZodEffects<z.ZodObject<{
        base: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        primary: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        secondary: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
        active: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            '100': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '200': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '300': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '400': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '500': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '600': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '700': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '800': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
            '900': z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
                h: z.ZodNumber;
                s: z.ZodNumber;
                l: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                s: number;
                l: number;
            }, {
                h: number;
                s: number;
                l: number;
            }>, z.ZodObject<{
                r: z.ZodNumber;
                g: z.ZodNumber;
                b: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                r: number;
                g: number;
                b: number;
            }, {
                r: number;
                g: number;
                b: number;
            }>, z.ZodObject<{
                l: z.ZodNumber;
                c: z.ZodNumber;
                h: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                h: number;
                l: number;
                c: number;
            }, {
                h: number;
                l: number;
                c: number;
            }>, z.ZodObject<{
                hex: z.ZodString;
                hsl: z.ZodObject<{
                    h: z.ZodNumber;
                    s: z.ZodNumber;
                    l: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    s: number;
                    l: number;
                }, {
                    h: number;
                    s: number;
                    l: number;
                }>;
                rgb: z.ZodObject<{
                    r: z.ZodNumber;
                    g: z.ZodNumber;
                    b: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    r: number;
                    g: number;
                    b: number;
                }, {
                    r: number;
                    g: number;
                    b: number;
                }>;
                oklch: z.ZodObject<{
                    l: z.ZodNumber;
                    c: z.ZodNumber;
                    h: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    h: number;
                    l: number;
                    c: number;
                }, {
                    h: number;
                    l: number;
                    c: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }, {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>]>, {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            }, string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            '100'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '200'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '300'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '400'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '500'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '600'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '700'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '800'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
            '900'?: {
                hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                oklch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
            } | undefined;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>, {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        }, {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        base: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        primary: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        secondary: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
        active: {
            '100': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '200': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '300': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '400': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '500': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '600': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '700': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '800': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            '900': import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
        };
    }, {
        base?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        primary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        secondary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        active?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
    }>, {
        base: Tokens_Colour_ShadeMap;
        primary: Tokens_Colour_ShadeMap;
        secondary: Tokens_Colour_ShadeMap;
        active: Tokens_Colour_ShadeMap;
    }, {
        base?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        primary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        secondary?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
        active?: {
            '100'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '200'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '300'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '400'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '500'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '600'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '700'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '800'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
            '900'?: string | {
                h: number;
                s: number;
                l: number;
            } | {
                r: number;
                g: number;
                b: number;
            } | {
                h: number;
                l: number;
                c: number;
            } | {
                hex: string;
                hsl: {
                    h: number;
                    s: number;
                    l: number;
                };
                rgb: {
                    r: number;
                    g: number;
                    b: number;
                };
                oklch: {
                    h: number;
                    l: number;
                    c: number;
                };
            } | undefined;
        } | undefined;
    }>;
    type Parsed = {
        base: Tokens_Colour_ShadeMap.Parsed;
        primary: Tokens_Colour_ShadeMap.Parsed;
        secondary: Tokens_Colour_ShadeMap.Parsed;
        active: Tokens_Colour_ShadeMap.Parsed;
    };
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = {
        base?: Tokens_Colour_ShadeMap.Part;
        primary?: Tokens_Colour_ShadeMap.Part;
        secondary?: Tokens_Colour_ShadeMap.Part;
        active?: Tokens_Colour_ShadeMap.Part;
    };
    type JSON = {
        base: Tokens_Colour_ShadeMap.JSON;
        primary: Tokens_Colour_ShadeMap.JSON;
        secondary: Tokens_Colour_ShadeMap.JSON;
        active: Tokens_Colour_ShadeMap.JSON;
    };
    type ScssVars = {
        base: Tokens_Colour_ShadeMap.ScssVars;
        primary: Tokens_Colour_ShadeMap.ScssVars;
        secondary: Tokens_Colour_ShadeMap.ScssVars;
        active: Tokens_Colour_ShadeMap.ScssVars;
    };
}
//# sourceMappingURL=Colour.d.ts.map