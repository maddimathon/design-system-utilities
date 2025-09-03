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
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_Theme extends AbstractTokens {
    get schema() {
        return Tokens_Theme.Schema;
    }
    average;
    low;
    high;
    forcedColors;
    constructor(input) {
        super(input ?? {});
        const parsed = this.parseSchema(this.schema, input ?? {}, {
            name: 'Tokens_Theme',
            location: 'src/ts/02-tokens/Tokens/Theme.ts:49',
        });
        this.average = parsed.average;
        this.low = parsed.low;
        this.high = parsed.high;
        this.forcedColors = parsed.forcedColors;
    }
    valueOf() {
        return {
            average: this.average,
            low: this.low,
            high: this.high,
            forcedColors: this.forcedColors,
        };
    }
    toJSON() {
        return {
            average: {
                light: this.average.light.toJSON(),
                dark: this.average.dark.toJSON(),
            },
            low: {
                light: this.average.light.toJSON(),
                dark: this.average.dark.toJSON(),
            },
            high: {
                light: this.average.light.toJSON(),
                dark: this.average.dark.toJSON(),
            },
            forcedColors: this.forcedColors.toJSON(),
        };
    }
    toScssVars() {
        return {
            average: {
                light: this.average.light.toScssVars(),
                dark: this.average.dark.toScssVars(),
            },
            low: {
                light: this.average.light.toScssVars(),
                dark: this.average.dark.toScssVars(),
            },
            high: {
                light: this.average.light.toScssVars(),
                dark: this.average.dark.toScssVars(),
            },
            'forced-colors': this.forcedColors.toScssVars(),
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Theme) {
    /* SCHEMA
     * ====================================================================== */
    const lightDarkThemeSet = z.object({
        light: Tokens_Theme_Set.Schema.default({}),
        dark: Tokens_Theme_Set.Schema.optional(),
    }).transform((part) => ({
        light: new Tokens_Theme_Set(part.light),
        dark: new Tokens_Theme_Set(mergeArgs(part.light, part.dark, true)),
    }));
    Tokens_Theme.Schema = z.object({
        average: lightDarkThemeSet.default({
            light: Tokens_Theme_Set.make({
                bg: '200',
                text: {
                    accent: '800',
                    base: '900',
                },
                ui: {
                    accent: '700',
                    base: '800',
                },
            })
        }),
        low: lightDarkThemeSet.default({
            light: Tokens_Theme_Set.make({
                bg: '200',
                text: {
                    accent: '800',
                    base: '900',
                },
                ui: {
                    accent: '700',
                    base: '800',
                },
            })
        }),
        high: lightDarkThemeSet.default({
            light: Tokens_Theme_Set.make({
                bg: '200',
                text: {
                    accent: '800',
                    base: '900',
                },
                ui: {
                    accent: '700',
                    base: '800',
                },
            })
        }),
        forcedColors: Tokens_Theme_Set.Schema.default({}),
    }).transform((part) => ({
        ...part,
        forcedColors: new Tokens_Theme_Set(part.forcedColors),
    }));
})(Tokens_Theme || (Tokens_Theme = {}));
//# sourceMappingURL=Theme.js.map