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
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_Theme_Set extends AbstractTokens {
    get schema() {
        return Tokens_Theme_Set.Schema;
    }
    set;
    constructor(input) {
        super(input ?? {});
        this.set = this.parseSchema(this.schema, input ?? {}, {
            name: 'Tokens_Theme_Set',
            location: 'src/ts/02-tokens/Tokens/Theme/Theme_Set.ts:45',
        });
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return this.valueOf();
    }
    valueOf() {
        return this.set;
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Theme_Set) {
    /* FUNCTION
     * ====================================================================== */
    function make(levels, _slugs) {
        const slugs = {
            primary: 'purple',
            secondary: 'blue',
            active: 'red',
            disabled: 'base',
            ..._slugs,
        };
        const vals = {
            background: `base-${levels.bg}`,
            text: `base-${levels.text.base}`,
            textPrimary: `${slugs.primary}-${levels.text.accent}`,
            textSecondary: `${slugs.secondary}-${levels.text.accent}`,
            textActive: `${slugs.active}-${levels.text.accent}`,
        };
        return {
            background: vals.background,
            text: {
                '$': vals.text,
                'primary': vals.textPrimary,
                'secondary': vals.textSecondary,
                'active': vals.textActive,
                'disabled': `${slugs.disabled}-${levels.text.accent}`,
            },
            ui: {
                '$': `base-${levels.ui.base}`,
                'primary': `${slugs.primary}-${levels.ui.accent}`,
                'secondary': `${slugs.secondary}-${levels.ui.accent}`,
                'active': `${slugs.active}-${levels.ui.accent}`,
                'disabled': `${slugs.disabled}-${levels.ui.accent}`,
            },
            selection: {
                'bg': `${slugs.primary}-${levels.ui.accent}`,
                'text': `base-${levels.bg}`,
            },
            link: {
                '$': vals.textPrimary,
                'hover': vals.textSecondary,
                'active': vals.textActive,
                'visited': vals.textPrimary,
            },
            button: {
                bg: {
                    '$': vals.textPrimary,
                    'hover': vals.textSecondary,
                    'active': vals.textActive,
                },
                border: {
                    '$': vals.textPrimary,
                    'hover': vals.textSecondary,
                    'active': vals.textActive,
                },
                text: {
                    '$': `${slugs.primary}-${levels.bg}`,
                    'hover': `${slugs.secondary}-${levels.bg}`,
                    'active': `${slugs.active}-${levels.bg}`,
                },
            },
            field: {
                bg: {
                    '$': `base-${levels.bg}`,
                    'hover': `base-${levels.bg}`,
                    'active': `base-${levels.bg}`,
                },
                border: {
                    '$': `${slugs.primary}-${levels.ui.accent}`,
                    'hover': `${slugs.secondary}-${levels.ui.accent}`,
                    'active': `${slugs.active}-${levels.ui.accent}`,
                },
                text: {
                    '$': vals.text,
                    'hover': vals.text,
                    'active': vals.text,
                },
                placeholder: vals.text,
            },
            system: {
                accent: {
                    bg: vals.textPrimary,
                    text: vals.background,
                },
                mark: {
                    bg: vals.textPrimary,
                    text: vals.background,
                },
                selected: {
                    bg: vals.textSecondary,
                    text: vals.background,
                },
            },
        };
    }
    Tokens_Theme_Set.make = make;
    /* SCHEMA
     * ====================================================================== */
    Tokens_Theme_Set.Schema = z.object({
        background: z.string().default('Canvas'),
        text: z.object({
            '$': z.string().default('CanvasText'),
            'primary': z.string().default('CanvasText'),
            'secondary': z.string().default('CanvasText'),
            'active': z.string().default('ActiveText'),
            'disabled': z.string().default('GrayText'),
        }).default({}),
        ui: z.object({
            '$': z.string().default('CanvasText'),
            'primary': z.string().default('CanvasText'),
            'secondary': z.string().default('CanvasText'),
            'active': z.string().default('ActiveText'),
            'disabled': z.string().default('GrayText'),
        }).default({}),
        selection: z.object({
            'bg': z.string().default('Highlight'),
            'text': z.string().default('HighlightText'),
        }).default({}),
        link: z.object({
            '$': z.string().default('LinkText'),
            'hover': z.string().default('ActiveText'),
            'active': z.string().default('ActiveText'),
            'visited': z.string().default('VisitedText'),
        }).default({}),
        button: z.object({
            bg: z.object({
                '$': z.string().default('ButtonFace'),
                'hover': z.string().default('SelectedItem'),
                'active': z.string().default('ButtonFace'),
            }).default({}),
            border: z.object({
                '$': z.string().default('ButtonBorder'),
                'hover': z.string().default('SelectedItem'),
                'active': z.string().default('ButtonBorder'),
            }).default({}),
            text: z.object({
                '$': z.string().default('ButtonText'),
                'hover': z.string().default('SelectedItemText'),
                'active': z.string().default('ButtonText'),
            }).default({}),
        }).default({}),
        field: z.object({
            bg: z.object({
                '$': z.string().default('Field'),
                'hover': z.string().default('SelectedItem'),
                'active': z.string().default('Field'),
            }).default({}),
            border: z.object({
                '$': z.string().default('FieldText'),
                'hover': z.string().default('SelectedItem'),
                'active': z.string().default('FieldText'),
            }).default({}),
            text: z.object({
                '$': z.string().default('FieldText'),
                'hover': z.string().default('SelectedItemText'),
                'active': z.string().default('FieldText'),
            }).default({}),
            placeholder: z.string().default('FieldText'),
        }).default({}),
        system: z.object({
            accent: z.object({
                'bg': z.string().default('CanvasText'),
                'text': z.string().default('Canvas'),
            }).default({}),
            mark: z.object({
                'bg': z.string().default('CanvasText'),
                'text': z.string().default('Canvas'),
            }).default({}),
            selected: z.object({
                'bg': z.string().default('SelectedItem'),
                'text': z.string().default('SelectedItemText'),
            }).default({}),
        }).default({}),
    });
})(Tokens_Theme_Set || (Tokens_Theme_Set = {}));
//# sourceMappingURL=Theme_Set.js.map