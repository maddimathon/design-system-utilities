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
export declare class Tokens_Colour<T_ColourName extends string> extends AbstractTokens<Tokens_Colour.Schema<T_ColourName>, Tokens_Colour.Parsed<T_ColourName>, Tokens_Colour.Part<T_ColourName>, Tokens_Colour.JSON<T_ColourName>, Tokens_Colour.ScssVars<T_ColourName>> {
    readonly names: T_ColourName[];
    get schema(): Tokens_Colour.Schema<T_ColourName>;
    readonly maps: {
        [K in T_ColourName]: Tokens_Colour_ShadeMap;
    };
    constructor(names: T_ColourName[], input?: Tokens_Colour.Part<T_ColourName>);
    valueOf(): Tokens_Colour.Parsed<T_ColourName>;
    toJSON(): Tokens_Colour.JSON<T_ColourName>;
    toScssVars(): Tokens_Colour.ScssVars<T_ColourName>;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Colour {
    const Schema: <T_ColourName extends string>(names: T_ColourName[]) => z.ZodEffects<z.ZodObject<{ [K in T_ColourName]: z.ZodEffects<z.ZodDefault<z.ZodObject<{
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    }>>, {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    } | undefined>; }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{ [K in T_ColourName]: z.ZodEffects<z.ZodDefault<z.ZodObject<{
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    }>>, {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    } | undefined>; }>, any> extends infer T ? { [k in keyof T]: T[k]; } : never, z.baseObjectInputType<{ [K in T_ColourName]: z.ZodEffects<z.ZodDefault<z.ZodObject<{
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    }>>, {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    } | undefined>; }> extends infer T_1 ? { [k_1 in keyof T_1]: T_1[k_1]; } : never>, { [K_1 in T_ColourName]: Tokens_Colour_ShadeMap; }, z.baseObjectInputType<{ [K in T_ColourName]: z.ZodEffects<z.ZodDefault<z.ZodObject<{
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.ZodObject<{
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        }>]>, {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '200'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '300'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '400'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '500'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '600'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '700'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '800'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
        } | undefined;
        '900'?: {
            hex: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
            hsl: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
            rgb: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
            lch: z.TypeOf<typeof import("./Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    }>>, {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
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
            lch: {
                h: number;
                l: number;
                c: number;
            };
        } | undefined;
    } | undefined>; }> extends infer T_2 ? { [k_1 in keyof T_2]: T_2[k_1]; } : never>;
    type Schema<T_ColourName extends string> = z.ZodType<{
        [K in T_ColourName]: Tokens_Colour_ShadeMap;
    }, {}, {
        [K in T_ColourName]: typeof Tokens_Colour_ShadeMap.Schema['_input'];
    }>;
    type Parsed<T_ColourName extends string> = {
        [K in T_ColourName]: Tokens_Colour_ShadeMap.Parsed;
    };
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part<T_ColourName extends string> = {
        [K in T_ColourName]?: Tokens_Colour_ShadeMap.Part;
    };
    type JSON<T_ColourName extends string> = {
        [K in T_ColourName]?: Tokens_Colour_ShadeMap.JSON;
    };
    type ScssVars<T_ColourName extends string> = {
        [K in T_ColourName]?: Tokens_Colour_ShadeMap.ScssVars;
    };
}
//# sourceMappingURL=Colour.d.ts.map