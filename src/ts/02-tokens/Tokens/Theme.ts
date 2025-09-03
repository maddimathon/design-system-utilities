/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import { Tokens_Theme_Set } from './Theme/Theme_Set.js';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Theme extends AbstractTokens<
    typeof Tokens_Theme.Schema,
    Tokens_Theme.Parsed,
    Tokens_Theme.Part,
    Tokens_Theme.JSON,
    Tokens_Theme.ScssVars
> {

    get schema() {
        return Tokens_Theme.Schema;
    }

    public readonly average: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };

    public readonly low: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };

    public readonly high: {
        light: Tokens_Theme_Set;
        dark: Tokens_Theme_Set;
    };

    public readonly forcedColors: Tokens_Theme_Set;

    public constructor (
        input?: Tokens_Theme.Part,
    ) {
        super( input ?? {} );

        const parsed = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: 'Tokens_Theme',
                location: 'src/ts/02-tokens/Tokens/Theme.ts:49',
            },
        );

        this.average = parsed.average;
        this.low = parsed.low;
        this.high = parsed.high;
        this.forcedColors = parsed.forcedColors;
    }

    public valueOf(): Tokens_Theme.Parsed {

        return {
            average: this.average,
            low: this.low,
            high: this.high,
            forcedColors: this.forcedColors,
        };
    }

    public toJSON(): Tokens_Theme.JSON {

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

    public toScssVars(): Tokens_Theme.ScssVars {

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
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Theme {



    /* SCHEMA
     * ====================================================================== */

    const lightDarkThemeSet = z.object( {
        light: Tokens_Theme_Set.Schema.default( {} ),
        dark: Tokens_Theme_Set.Schema.optional(),
    } ).transform( ( part ) => ( {
        light: new Tokens_Theme_Set( part.light ),
        dark: new Tokens_Theme_Set( mergeArgs(
            part.light,
            part.dark,
            true,
        ) ),
    } ) );

    export const Schema = z.object( {

        average: lightDarkThemeSet.default( {
            light: Tokens_Theme_Set.make( {
                bg: '200',

                text: {
                    accent: '800',
                    base: '900',
                },

                ui: {
                    accent: '700',
                    base: '800',
                },
            } )
        } ),

        low: lightDarkThemeSet.default( {
            light: Tokens_Theme_Set.make( {
                bg: '200',

                text: {
                    accent: '800',
                    base: '900',
                },

                ui: {
                    accent: '700',
                    base: '800',
                },
            } )
        } ),

        high: lightDarkThemeSet.default( {
            light: Tokens_Theme_Set.make( {
                bg: '200',

                text: {
                    accent: '800',
                    base: '900',
                },

                ui: {
                    accent: '700',
                    base: '800',
                },
            } )
        } ),

        forcedColors: Tokens_Theme_Set.Schema.default( {} ),

    } ).transform( ( part ) => ( {
        ...part,
        forcedColors: new Tokens_Theme_Set( part.forcedColors ),
    } ) );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.output<typeof Schema>;

    type LightDarkThemeSet_Part = {
        light?: Tokens_Theme_Set.Part;
        dark?: Tokens_Theme_Set.Part;
    };

    /**
     * The partialized version of the {@link Tokens_Theme.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
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
}