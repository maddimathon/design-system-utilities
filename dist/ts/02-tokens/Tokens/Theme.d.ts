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
import { Tokens_Theme_Set } from './Theme/Theme_Set.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Theme extends AbstractTokens<typeof Tokens_Theme.Schema, Tokens_Theme.Parsed, Tokens_Theme.Part, Tokens_Theme.JSON, Tokens_Theme.ScssVars> {
    get schema(): z.ZodEffects<z.ZodObject<{
        average: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        low: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        high: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        forcedColors: z.ZodDefault<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        average: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        low: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        high: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        forcedColors: {
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
        };
    }, {
        average?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        low?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        high?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        forcedColors?: {
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
        } | undefined;
    }>, {
        forcedColors: Tokens_Theme_Set;
        average: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        low: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        high: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
    }, {
        average?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        low?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        high?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        forcedColors?: {
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
        } | undefined;
    }>;
    readonly average: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };
    readonly low: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };
    readonly high: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };
    readonly forcedColors: Tokens_Theme_Set;
    constructor(input?: Tokens_Theme.Part);
    valueOf(): Tokens_Theme.Parsed;
    toJSON(): Tokens_Theme.JSON;
    toScssVars(): Tokens_Theme.ScssVars;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Theme {
    export const Schema: z.ZodEffects<z.ZodObject<{
        average: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        low: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        high: z.ZodDefault<z.ZodEffects<z.ZodObject<{
            light: z.ZodDefault<z.ZodObject<{
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
            }>>;
            dark: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            light: {
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
            };
            dark?: {
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
            } | undefined;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>, {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        }, {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        }>>;
        forcedColors: z.ZodDefault<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        average: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        low: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        high: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        forcedColors: {
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
        };
    }, {
        average?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        low?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        high?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        forcedColors?: {
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
        } | undefined;
    }>, {
        forcedColors: Tokens_Theme_Set;
        average: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        low: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
        high: {
            light: Tokens_Theme_Set;
            dark: Tokens_Theme_Set;
        };
    }, {
        average?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        low?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        high?: {
            light?: {
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
            } | undefined;
            dark?: {
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
            } | undefined;
        } | undefined;
        forcedColors?: {
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
        } | undefined;
    }>;
    export type Parsed = z.output<typeof Schema>;
    type LightDarkThemeSet_Part = {
        light?: Tokens_Theme_Set.Part;
        dark?: Tokens_Theme_Set.Part;
    };
    /**
     * The partialized version of the {@link Tokens_Theme.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    export type Part = {
        average?: LightDarkThemeSet_Part;
        low?: LightDarkThemeSet_Part;
        high?: LightDarkThemeSet_Part;
        forcedColors?: Tokens_Theme_Set.Part;
    };
    type LightDarkThemeSet_JSON = {
        light: Tokens_Theme_Set.JSON;
        dark: Tokens_Theme_Set.JSON;
    };
    export type JSON = {
        average: LightDarkThemeSet_JSON;
        low: LightDarkThemeSet_JSON;
        high: LightDarkThemeSet_JSON;
        forcedColors: Tokens_Theme_Set.JSON;
    };
    type LightDarkThemeSet_ScssVars = {
        light: Tokens_Theme_Set.ScssVars;
        dark: Tokens_Theme_Set.ScssVars;
    };
    export type ScssVars = {
        average: LightDarkThemeSet_ScssVars;
        low: LightDarkThemeSet_ScssVars;
        high: LightDarkThemeSet_ScssVars;
        'forced-colors': Tokens_Theme_Set.ScssVars;
    };
    export {};
}
//# sourceMappingURL=Theme.d.ts.map