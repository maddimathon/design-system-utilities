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

import { objectMap } from '../../01-utilities/objectMap.js';
import { roundToPixel } from '../../01-utilities/roundToPixel.js';

import { TokenLevels_Extended } from '../@utils.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Spacing extends AbstractTokens<
    typeof Tokens_Spacing.Schema,
    Tokens_Spacing.Parsed,
    Tokens_Spacing.Part,
    Tokens_Spacing.JSON,
    Tokens_Spacing.ScssVars
> {

    get schema() {
        return Tokens_Spacing.Schema;
    }

    /**
     * Passed to the $margins token in the utility-sass base template.
     * 
     * To get these into usable values, put the 
     * {@link Tokens.spacing.multiplier} to the power of the value and 
     * multiply it by your base value.
     * 
     * For example, to make rems in scss this looks like:
     * ```scss
     * @each $key, $size in tokens.$margin {
     *     $margin: map.set(
     *         $margin,
     *         $key,
     *         math.round-to-pixel(math.pow(tokens.$scale_multiplier, $size) * 1.25)
     *     );
     * }
     * ```
     */
    public readonly margin: Tokens_Spacing.Parsed[ 'margin' ];

    /**
     * Used for scaling various size sets relative to each other - e.g.,
     * margins, font sizes, line heights.
     */
    public readonly multiplier: Tokens_Spacing.Parsed[ 'multiplier' ];

    public constructor (
        input?: Tokens_Spacing.Part,
    ) {
        super( input ?? {} );

        this.margin = this.parseSchema(
            this.schema.shape.margin,
            input?.margin ?? {},
            {
                name: 'Tokens_Spacing.margin',
                location: 'src/ts/02-tokens/Tokens/Spacing.ts:71',
            },
        );

        this.multiplier = this.parseSchema(
            this.schema.shape.multiplier,
            input?.multiplier,
            {
                name: 'Tokens_Spacing.multiplier',
                location: 'src/ts/02-tokens/Tokens/Spacing.ts:80',
            },
        );
    }

    public toJSON() {

        const _converter = (
            _val: number,
            _opts?: {
                roundToPixel: boolean,
                roundToPixel_factor?: number,
                multiplier?: number,
                base?: number,
            },
        ) => {
            const opts = {
                base: 1,
                multiplier: this.multiplier,
                roundToPixel: true,
                ..._opts,
            } satisfies NonNullable<typeof _opts>;

            let _rem = Math.pow(
                opts.multiplier,
                _val
            ) * opts.base;

            if ( opts.roundToPixel ) {
                _rem = roundToPixel( _rem, opts.roundToPixel_factor );
            }

            return _rem;
        };

        const exp = this.valueOf();

        return {
            ...exp,

            margin: {

                rem: objectMap(
                    exp.margin,
                    ( { key, value } ) => key && _converter( value ?? 0 )
                ),

                pt: objectMap(
                    exp.margin,
                    ( { key, value } ) => key && _converter( value ?? 0, {
                        base: 11,
                        roundToPixel: true,
                        roundToPixel_factor: 2,
                    } )
                ),

                px: objectMap(
                    exp.margin,
                    ( { key, value } ) => key && _converter( value ?? 0, {
                        base: 16,
                        roundToPixel: true,
                        roundToPixel_factor: 1,
                    } )
                ),
            },
        };
    }

    public toScssVars() {

        const exp = this.valueOf();
        return {
            margin: exp.margin,
            spacing_multiplier: this.multiplier,
        };
    }

    public valueOf(): Tokens_Spacing.Parsed {

        return {
            multiplier: this.multiplier,
            margin: this.margin,
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Spacing {



    /* SCHEMA
     * ====================================================================== */

    export const Schema = z.object( {

        multiplier: z.number().default( 1.15625 ),

        margin: z.object( {
            '100': z.number().default( -9 ),
            '200': z.number().default( -6 ),
            '300': z.number().default( -3 ),
            '400': z.number().default( 0 ),
            '600': z.number().default( 4 ),
            '800': z.number().default( 8 ),
        } ).and( z.record( TokenLevels_Extended, z.number() ) ),
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.infer<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_Spacing.Schema} accepted as
     * input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part = Partial<z.input<typeof Schema>>;

    export type JSON = Omit<Parsed, "margin"> & {
        margin: {
            rem: z.infer<typeof Schema.shape.margin>;
            pt: z.infer<typeof Schema.shape.margin>;
            px: z.infer<typeof Schema.shape.margin>;
        };
    };

    export type ScssVars = Omit<Parsed, "multiplier"> & {
        spacing_multiplier: number;
    };
}