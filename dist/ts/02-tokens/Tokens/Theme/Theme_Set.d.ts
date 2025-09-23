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
import type { TokenLevels } from '../../@utils.js';
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
            disabled: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        }, {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        }>>;
        ui: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
            disabled: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        }, {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
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
            visited: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            active: string;
            hover: string;
            visited: string;
        }, {
            $?: string | undefined;
            active?: string | undefined;
            hover?: string | undefined;
            visited?: string | undefined;
        }>>;
        button: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
        }, {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        }>>;
        field: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            placeholder: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
            placeholder: string;
        }, {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        }>>;
        system: z.ZodDefault<z.ZodObject<{
            accent: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
            mark: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
            selected: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            accent: {
                text: string;
                bg: string;
            };
            mark: {
                text: string;
                bg: string;
            };
            selected: {
                text: string;
                bg: string;
            };
        }, {
            accent?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            mark?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            selected?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        link: {
            $: string;
            active: string;
            hover: string;
            visited: string;
        };
        background: string;
        text: {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        };
        ui: {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        };
        selection: {
            text: string;
            bg: string;
        };
        button: {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
        };
        field: {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
            placeholder: string;
        };
        system: {
            accent: {
                text: string;
                bg: string;
            };
            mark: {
                text: string;
                bg: string;
            };
            selected: {
                text: string;
                bg: string;
            };
        };
    }, {
        link?: {
            $?: string | undefined;
            active?: string | undefined;
            hover?: string | undefined;
            visited?: string | undefined;
        } | undefined;
        background?: string | undefined;
        text?: {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        } | undefined;
        ui?: {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        } | undefined;
        selection?: {
            text?: string | undefined;
            bg?: string | undefined;
        } | undefined;
        button?: {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        } | undefined;
        field?: {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        } | undefined;
        system?: {
            accent?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            mark?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            selected?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
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
    }, _slugs?: Partial<{
        primary: string;
        secondary: string;
        active: string;
        disabled: string;
    }>): Parsed;
    const Schema: z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
            disabled: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        }, {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        }>>;
        ui: z.ZodDefault<z.ZodObject<{
            $: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
            secondary: z.ZodDefault<z.ZodString>;
            active: z.ZodDefault<z.ZodString>;
            disabled: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        }, {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
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
            visited: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $: string;
            active: string;
            hover: string;
            visited: string;
        }, {
            $?: string | undefined;
            active?: string | undefined;
            hover?: string | undefined;
            visited?: string | undefined;
        }>>;
        button: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
        }, {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        }>>;
        field: z.ZodDefault<z.ZodObject<{
            bg: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            border: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            text: z.ZodDefault<z.ZodObject<{
                $: z.ZodDefault<z.ZodString>;
                hover: z.ZodDefault<z.ZodString>;
                active: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                $: string;
                active: string;
                hover: string;
            }, {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            }>>;
            placeholder: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
            placeholder: string;
        }, {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        }>>;
        system: z.ZodDefault<z.ZodObject<{
            accent: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
            mark: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
            selected: z.ZodDefault<z.ZodObject<{
                bg: z.ZodDefault<z.ZodString>;
                text: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                bg: string;
            }, {
                text?: string | undefined;
                bg?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            accent: {
                text: string;
                bg: string;
            };
            mark: {
                text: string;
                bg: string;
            };
            selected: {
                text: string;
                bg: string;
            };
        }, {
            accent?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            mark?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            selected?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        link: {
            $: string;
            active: string;
            hover: string;
            visited: string;
        };
        background: string;
        text: {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        };
        ui: {
            $: string;
            primary: string;
            secondary: string;
            active: string;
            disabled: string;
        };
        selection: {
            text: string;
            bg: string;
        };
        button: {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
        };
        field: {
            text: {
                $: string;
                active: string;
                hover: string;
            };
            bg: {
                $: string;
                active: string;
                hover: string;
            };
            border: {
                $: string;
                active: string;
                hover: string;
            };
            placeholder: string;
        };
        system: {
            accent: {
                text: string;
                bg: string;
            };
            mark: {
                text: string;
                bg: string;
            };
            selected: {
                text: string;
                bg: string;
            };
        };
    }, {
        link?: {
            $?: string | undefined;
            active?: string | undefined;
            hover?: string | undefined;
            visited?: string | undefined;
        } | undefined;
        background?: string | undefined;
        text?: {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        } | undefined;
        ui?: {
            $?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            active?: string | undefined;
            disabled?: string | undefined;
        } | undefined;
        selection?: {
            text?: string | undefined;
            bg?: string | undefined;
        } | undefined;
        button?: {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
        } | undefined;
        field?: {
            text?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            bg?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            border?: {
                $?: string | undefined;
                active?: string | undefined;
                hover?: string | undefined;
            } | undefined;
            placeholder?: string | undefined;
        } | undefined;
        system?: {
            accent?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            mark?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
            selected?: {
                text?: string | undefined;
                bg?: string | undefined;
            } | undefined;
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