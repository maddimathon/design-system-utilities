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

import { tokenLevels_extended } from '../../00-schemata/@utils.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Spacing extends AbstractTokens<
    typeof Tokens_Spacing.Schema,
    Tokens_Spacing.Export,
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
    public readonly margin: Tokens_Spacing.Export[ 'margin' ];

    /**
     * Used for scaling various size sets relative to each other - e.g.,
     * margins, font sizes, line heights.
     */
    public readonly multiplier: Tokens_Spacing.Export[ 'multiplier' ];

    public constructor (
        input?: Tokens_Spacing.Part,
    ) {
        super( input ?? {} );

        this.margin = this.schema.shape.margin.parse( input?.margin ?? {} );

        this.multiplier = this.schema.shape.multiplier.parse( input?.multiplier );
    }

    public export(): Tokens_Spacing.Export {

        return {
            multiplier: this.multiplier,
            margin: this.margin,
        };
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
                _rem = this.roundToPixel( _rem, opts.roundToPixel_factor );
            }

            return _rem;
        };

        const exp = this.export();

        return {
            ...exp,

            margin: {

                rem: this.objectMap(
                    exp.margin,
                    ( key, value ) => key && _converter( value ?? 0 )
                ),

                pt: this.objectMap(
                    exp.margin,
                    ( key, value ) => key && _converter( value ?? 0, {
                        base: 11,
                        roundToPixel: true,
                        roundToPixel_factor: 2,
                    } )
                ),

                px: this.objectMap(
                    exp.margin,
                    ( key, value ) => key && _converter( value ?? 0, {
                        base: 16,
                        roundToPixel: true,
                        roundToPixel_factor: 1,
                    } )
                ),
            },
        };
    }

    public toScssVars() {

        const exp = this.export();
        return {
            margin: exp.margin,
            spacing_multiplier: this.multiplier,
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

    export const Schema = z.object( {

        multiplier: z.number().default( 1.15625 ),

        margin: z.object( {
            '100': z.number().default( -9 ),
            '200': z.number().default( -6 ),
            '300': z.number().default( -3 ),
            '400': z.number().default( 0 ),
            '600': z.number().default( 4 ),
            '800': z.number().default( 8 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),
    } );

    export interface Export extends z.infer<typeof Schema> { };

    export interface JSON extends Omit<z.infer<typeof Schema>, "margin"> {
        margin: {
            rem: z.infer<typeof Schema.shape.margin>;
            pt: z.infer<typeof Schema.shape.margin>;
            px: z.infer<typeof Schema.shape.margin>;
        };
    };

    /**
     * The partialized version of the {@link Tokens_Spacing.Schema} accepted as
     * input.
     *
     * @since ___PKG_VERSION___
     */
    export interface Part extends Partial<z.infer<typeof Schema>> { }

    export interface ScssVars extends Omit<z.infer<typeof Schema>, "multiplier"> {
        spacing_multiplier: number;
    };
}