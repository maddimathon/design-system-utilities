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
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens extends AbstractTokens<typeof Tokens.Schema, Tokens.Parsed, Tokens.Part, Tokens.JSON, Tokens.ScssVars> {
    get schema(): z.ZodObject<{
        colour: z.ZodEffects<z.ZodObject<{
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            base: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            primary: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            secondary: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            active: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
            } | undefined;
        }>, {
            base: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            primary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            secondary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            active: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
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
            } | undefined;
        }>;
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
        colour: {
            base: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            primary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            secondary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            active: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
        };
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
                settings: number;
                skipLink: number;
            };
        };
    }, {
        colour: {
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
            } | undefined;
        };
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
    readonly colour: Tokens_Colour;
    readonly spacing: Tokens_Spacing;
    readonly typography: Tokens_Typography;
    readonly CSS: {
        border: Tokens_CSS_Border;
        transition: Tokens_CSS_Transition;
        /**
         * Z-index values for CSS.
         *
         * Default keys are 'nav', 'settings', 'skipLink'.
         */
        zIndex: z.output<typeof Tokens.Schema.shape.CSS.shape.zIndex>;
    };
    readonly opts: Tokens.Opts;
    constructor(input?: Tokens.Part, opts?: Partial<Tokens.Opts>);
    valueOf(): Tokens.Parsed;
    toJSON(): Tokens.JSON;
    toScssVars(): Tokens.ScssVars;
    toScss(): string;
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
    const Schema: z.ZodObject<{
        colour: z.ZodEffects<z.ZodObject<{
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '200'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '300'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '400'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '500'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '600'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '700'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '800'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
                } | undefined;
                '900'?: {
                    hex: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
                    hsl: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
                    rgb: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
                    lch: z.TypeOf<typeof import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
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
            }>, {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            base: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            primary: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            secondary: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
            };
            active: {
                '100': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '200': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '300': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '400': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '500': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '600': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '700': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '800': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
                '900': import("./Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.js").Tokens_Colour_ShadeMap_Shade;
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
            } | undefined;
        }>, {
            base: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            primary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            secondary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            active: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
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
            } | undefined;
        }>;
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
        colour: {
            base: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            primary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            secondary: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
            active: import("./Tokens/Colour/Colour_ShadeMap.js").Tokens_Colour_ShadeMap;
        };
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
                settings: number;
                skipLink: number;
            };
        };
    }, {
        colour: {
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
            } | undefined;
        };
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
    type Parsed = {
        colour: Tokens_Colour.Parsed;
        spacing: Tokens_Spacing.Parsed;
        typography: Tokens_Typography.Parsed;
        CSS: {
            border: Tokens_CSS_Border.Parsed;
            transition: Tokens_CSS_Transition.Parsed;
            zIndex: z.output<typeof Schema>['CSS']['zIndex'];
        };
    };
    /**
     * The partialized version of the {@link Tokens.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part {
        colour?: Tokens_Colour.Part;
        spacing?: Tokens_Spacing.Part;
        typography?: Tokens_Typography.Part;
        css?: {
            border?: Tokens_CSS_Border.Part;
            transition?: Tokens_CSS_Transition.Part;
            zIndex?: Partial<Parsed['CSS']['zIndex']>;
        };
    }
    type JSON = {
        colour: Tokens_Colour.JSON;
        spacing: Tokens_Spacing.JSON;
        typography: Tokens_Typography.JSON;
        CSS: {
            border: Tokens_CSS_Border.JSON;
            transition: Tokens_CSS_Transition.JSON;
            zIndex: Parsed['CSS']['zIndex'];
        };
    };
    /**
     * @interface
     */
    type ScssVars = Omit<Parsed, "colour" | "CSS" | "spacing" | "typography"> & Tokens_Spacing.ScssVars & Tokens_Typography.ScssVars & {
        colour: Tokens_Colour.ScssVars;
        border: Tokens_CSS_Border.ScssVars;
        transition: Tokens_CSS_Transition.ScssVars;
        z_index: Parsed['CSS']['zIndex'];
    };
}
//# sourceMappingURL=Tokens.d.ts.map