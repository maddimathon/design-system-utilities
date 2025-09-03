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
import type { TokenLevels } from 'src/ts/00-schemata/@utils.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/Colour_ShadeMap_Shade.js';
/**
 * Generates a map of shades used as colour tokens for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Colour_ShadeMap extends AbstractTokens<typeof Tokens_Colour_ShadeMap.Schema, Tokens_Colour_ShadeMap.Export, Tokens_Colour_ShadeMap.Part, Tokens_Colour_ShadeMap.JSON, Tokens_Colour_ShadeMap.ScssVars> {
    readonly name: string;
    get schema(): z.ZodEffects<z.ZodObject<{
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
        '100': Tokens_Colour_ShadeMap_Shade;
        '200': Tokens_Colour_ShadeMap_Shade;
        '300': Tokens_Colour_ShadeMap_Shade;
        '400': Tokens_Colour_ShadeMap_Shade;
        '500': Tokens_Colour_ShadeMap_Shade;
        '600': Tokens_Colour_ShadeMap_Shade;
        '700': Tokens_Colour_ShadeMap_Shade;
        '800': Tokens_Colour_ShadeMap_Shade;
        '900': Tokens_Colour_ShadeMap_Shade;
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
    }>;
    readonly map: z.output<typeof Tokens_Colour_ShadeMap.Schema>;
    constructor(name: string, input?: Tokens_Colour_ShadeMap.Part);
    valueOf(): Tokens_Colour_ShadeMap.Export;
    toJSON(): Tokens_Colour_ShadeMap.JSON;
    toScssVars(): Tokens_Colour_ShadeMap.ScssVars;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Colour_ShadeMap {
    function mixColours(name: string, clrA: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>, clrB: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>): Tokens_Colour_ShadeMap_Shade;
    function completeMap(part: {
        [K in TokenLevels]?: z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema> | undefined;
    }, cfx: Partial<{
        path: string | (number | string)[];
    }>): {
        [K in keyof typeof part]-?: Tokens_Colour_ShadeMap_Shade;
    };
    const Schema: z.ZodEffects<z.ZodObject<{
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            oklch: z.TypeOf<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
        '100': Tokens_Colour_ShadeMap_Shade;
        '200': Tokens_Colour_ShadeMap_Shade;
        '300': Tokens_Colour_ShadeMap_Shade;
        '400': Tokens_Colour_ShadeMap_Shade;
        '500': Tokens_Colour_ShadeMap_Shade;
        '600': Tokens_Colour_ShadeMap_Shade;
        '700': Tokens_Colour_ShadeMap_Shade;
        '800': Tokens_Colour_ShadeMap_Shade;
        '900': Tokens_Colour_ShadeMap_Shade;
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
    }>;
    type Export = {
        [K in keyof z.output<typeof Schema>]-?: Tokens_Colour_ShadeMap_Shade.Export;
    };
    type JSON = {
        [K in keyof z.output<typeof Schema>]-?: Tokens_Colour_ShadeMap_Shade.JSON;
    };
    /**
     * The partialized version of the {@link Tokens_Colour_ShadeMap.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     * @interface
     */
    type Part = {
        [K in keyof z.input<typeof Schema>]?: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>;
    };
    /**
     * @interface
     */
    type ScssVars = {
        [K in keyof z.output<typeof Schema>]-?: Tokens_Colour_ShadeMap_Shade.ScssVars;
    };
}
//# sourceMappingURL=Colour_ShadeMap.d.ts.map