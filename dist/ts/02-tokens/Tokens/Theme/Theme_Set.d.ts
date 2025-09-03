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
import type { TokenLevels } from '../../../00-schemata/@utils.js';
import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Theme_Set extends AbstractTokens<typeof Tokens_Theme_Set.Schema, Tokens_Theme_Set.Parsed, Tokens_Theme_Set.Part, Tokens_Theme_Set.JSON, Tokens_Theme_Set.ScssVars> {
    get schema(): z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        }, {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        }>>;
        ui: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        }, {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        }>>;
        selection: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodString>;
            text: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            bg: string;
        }, {
            text?: string | undefined;
            bg?: string | undefined;
        }>>;
        link: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            hover: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            active: string;
            $: string;
            hover: string;
        }, {
            active?: string | undefined;
            $?: string | undefined;
            hover?: string | undefined;
        }>>;
        button: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
        }, {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        }>>;
        field: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            placeholder: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
            placeholder: string;
        }, {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        link: {
            active: string;
            $: string;
            hover: string;
        };
        background: string;
        text: {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        };
        ui: {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        };
        selection: {
            text: string;
            bg: string;
        };
        button: {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
        };
        field: {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
            placeholder: string;
        };
    }, {
        link?: {
            active?: string | undefined;
            $?: string | undefined;
            hover?: string | undefined;
        } | undefined;
        background?: string | undefined;
        text?: {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        } | undefined;
        ui?: {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        } | undefined;
        selection?: {
            text?: string | undefined;
            bg?: string | undefined;
        } | undefined;
        button?: {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        } | undefined;
        field?: {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    readonly set: Tokens_Theme_Set.Parsed;
    constructor(input?: Tokens_Theme_Set.Part);
    toJSON(): Tokens_Theme_Set.JSON;
    toScssVars(): Tokens_Theme_Set.ScssVars;
    valueOf(): Tokens_Theme_Set.Parsed;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Theme_Set {
    function make(levels: {
        bg: TokenLevels;
        text: {
            accent: TokenLevels;
            base: TokenLevels;
        };
        ui: {
            accent: TokenLevels;
            base: TokenLevels;
        };
    }, _slugs?: Partial<{}>): Parsed;
    const Schema: z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        }, {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        }>>;
        ui: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        }, {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        }>>;
        selection: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodString>;
            text: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            bg: string;
        }, {
            text?: string | undefined;
            bg?: string | undefined;
        }>>;
        link: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            hover: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            active: string;
            $: string;
            hover: string;
        }, {
            active?: string | undefined;
            $?: string | undefined;
            hover?: string | undefined;
        }>>;
        button: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
        }, {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        }>>;
        field: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                active: string;
                $: string;
                hover: string;
            }, {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            }>>;
            placeholder: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
            placeholder: string;
        }, {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        link: {
            active: string;
            $: string;
            hover: string;
        };
        background: string;
        text: {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        };
        ui: {
            primary: string;
            secondary: string;
            active: string;
            $: string;
        };
        selection: {
            text: string;
            bg: string;
        };
        button: {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
        };
        field: {
            text: {
                active: string;
                $: string;
                hover: string;
            };
            bg: {
                active: string;
                $: string;
                hover: string;
            };
            border: {
                active: string;
                $: string;
                hover: string;
            };
            placeholder: string;
        };
    }, {
        link?: {
            active?: string | undefined;
            $?: string | undefined;
            hover?: string | undefined;
        } | undefined;
        background?: string | undefined;
        text?: {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        } | undefined;
        ui?: {
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            $?: string | undefined;
        } | undefined;
        selection?: {
            text?: string | undefined;
            bg?: string | undefined;
        } | undefined;
        button?: {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        } | undefined;
        field?: {
            text?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                active?: string | undefined;
                $?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    type Parsed = z.output<typeof Schema>;
    /**
     * The partialized version of the {@link Tokens_Theme_Set.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = z.input<typeof Schema>;
    type JSON = Parsed;
    type ScssVars = Parsed;
}
//# sourceMappingURL=Theme_Set.d.ts.map