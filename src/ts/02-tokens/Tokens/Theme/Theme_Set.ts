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

import type { TokenLevels } from '../../../00-schemata/@utils.js';

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Theme_Set extends AbstractTokens<
    typeof Tokens_Theme_Set.Schema,
    Tokens_Theme_Set.Parsed,
    Tokens_Theme_Set.Part,
    Tokens_Theme_Set.JSON,
    Tokens_Theme_Set.ScssVars
> {

    get schema() {
        return Tokens_Theme_Set.Schema;
    }

    public readonly set: Tokens_Theme_Set.Parsed;

    public constructor (
        input?: Tokens_Theme_Set.Part,
    ) {
        super( input ?? {} );

        this.set = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: 'Tokens_Theme_Set',
                location: 'src/ts/02-tokens/Tokens/Theme/Theme_Set.ts:45',
            },
        );
    }

    public toJSON(): Tokens_Theme_Set.JSON {
        return this.valueOf();
    }

    public toScssVars(): Tokens_Theme_Set.ScssVars {
        return this.valueOf();
    }

    public valueOf(): Tokens_Theme_Set.Parsed {
        return this.set;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Theme_Set {



    /* FUNCTION
     * ====================================================================== */

    export function make(
        levels: {
            bg: TokenLevels,

            text: {
                accent: TokenLevels,
                base: TokenLevels,
            },

            ui: {
                accent: TokenLevels,
                base: TokenLevels,
            },
        },
        _slugs?: Partial<{}>,
    ): Parsed {

        const slugs = {
            primary: 'primary',
            secondary: 'secondary',
            active: 'active',
            ..._slugs,
        };

        return {
            background: `base-${ levels.bg }`,

            text: {
                '$': `base-${ levels.text.base }`,
                'primary': `${ slugs.primary }-${ levels.text.accent }`,
                'secondary': `${ slugs.secondary }-${ levels.text.accent }`,
                'active': `${ slugs.active }-${ levels.text.accent }`,
            },

            ui: {
                '$': `base-${ levels.ui.base }`,
                'primary': `${ slugs.primary }-${ levels.ui.accent }`,
                'secondary': `${ slugs.secondary }-${ levels.ui.accent }`,
                'active': `${ slugs.active }-${ levels.ui.accent }`,
            },

            selection: {
                'bg': `${ slugs.primary }-${ levels.ui.accent }`,
                'text': `base-${ levels.bg }`,
            },

            link: {
                '$': `${ slugs.primary }-${ levels.text.accent }`,
                'hover': `${ slugs.secondary }-${ levels.text.accent }`,
                'active': `${ slugs.active }-${ levels.text.accent }`,
            },

            button: {

                bg: {
                    '$': `${ slugs.primary }-${ levels.text.accent }`,
                    'hover': `${ slugs.secondary }-${ levels.text.accent }`,
                    'active': `${ slugs.active }-${ levels.text.accent }`,
                },

                border: {
                    '$': `${ slugs.primary }-${ levels.text.accent }`,
                    'hover': `${ slugs.secondary }-${ levels.text.accent }`,
                    'active': `${ slugs.active }-${ levels.text.accent }`,
                },

                text: {
                    '$': `${ slugs.primary }-${ levels.bg }`,
                    'hover': `${ slugs.secondary }-${ levels.bg }`,
                    'active': `${ slugs.active }-${ levels.bg }`,
                },
            },

            field: {

                bg: {
                    '$': `base-${ levels.bg }`,
                    'hover': `base-${ levels.bg }`,
                    'active': `base-${ levels.bg }`,
                },

                border: {
                    '$': `${ slugs.primary }-${ levels.ui.accent }`,
                    'hover': `${ slugs.secondary }-${ levels.ui.accent }`,
                    'active': `${ slugs.active }-${ levels.ui.accent }`,
                },

                text: {
                    '$': `base-${ levels.text.base }`,
                    'hover': `base-${ levels.text.base }`,
                    'active': `base-${ levels.text.base }`,
                },

                placeholder: `base-${ levels.text.base }`,
            },
        };
    }



    /* SCHEMA
     * ====================================================================== */

    export const Schema = z.object( {

        background: z.string().default( 'Canvas' ),

        text: z.object( {
            '$': z.string().default( 'CanvasText' ),
            'primary': z.string().default( 'CanvasText' ),
            'secondary': z.string().default( 'CanvasText' ),
            'active': z.string().default( 'CanvasText' ),
        } ).default( {} ),

        ui: z.object( {
            '$': z.string().default( 'CanvasText' ),
            'primary': z.string().default( 'CanvasText' ),
            'secondary': z.string().default( 'CanvasText' ),
            'active': z.string().default( 'CanvasText' ),
        } ).default( {} ),

        selection: z.object( {
            'bg': z.string().default( 'Highlight' ),
            'text': z.string().default( 'HighlightText' ),
        } ).default( {} ),

        link: z.object( {
            '$': z.string().default( 'LinkText' ),
            'hover': z.string().default( 'ActiveText' ),
            'active': z.string().default( 'ActiveText' ),
        } ).default( {} ),

        button: z.object( {

            bg: z.object( {
                '$': z.string().default( 'ButtonFace' ),
                'hover': z.string().default( 'SelectedItem' ),
                'active': z.string().default( 'ButtonFace' ),
            } ).default( {} ),

            border: z.object( {
                '$': z.string().default( 'ButtonBorder' ),
                'hover': z.string().default( 'SelectedItem' ),
                'active': z.string().default( 'ButtonBorder' ),
            } ).default( {} ),

            text: z.object( {
                '$': z.string().default( 'ButtonText' ),
                'hover': z.string().default( 'SelectedItemText' ),
                'active': z.string().default( 'ButtonText' ),
            } ).default( {} ),


        } ).default( {} ),

        field: z.object( {

            bg: z.object( {
                '$': z.string().default( 'Field' ),
                'hover': z.string().default( 'SelectedItem' ),
                'active': z.string().default( 'Field' ),
            } ).default( {} ),

            border: z.object( {
                '$': z.string().default( 'FieldText' ),
                'hover': z.string().default( 'SelectedItem' ),
                'active': z.string().default( 'FieldText' ),
            } ).default( {} ),

            text: z.object( {
                '$': z.string().default( 'FieldText' ),
                'hover': z.string().default( 'SelectedItemText' ),
                'active': z.string().default( 'FieldText' ),
            } ).default( {} ),

            placeholder: z.string().default( 'FieldText' ),

        } ).default( {} ),
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.output<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_Theme_Set.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part = z.input<typeof Schema>;

    export type JSON = Parsed;

    export type ScssVars = Parsed;
}