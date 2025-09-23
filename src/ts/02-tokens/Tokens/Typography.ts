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

import { tokenLevels_extended } from '../@utils.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import type { Tokens_Spacing } from './Spacing.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Typography extends AbstractTokens<
    typeof Tokens_Typography.Schema,
    Tokens_Typography.Parsed,
    Tokens_Typography.Part,
    Tokens_Typography.JSON,
    Tokens_Typography.ScssVars
> {

    get schema() {
        return Tokens_Typography.Schema;
    }

    /**
     * Line heights for the design system.
     *
     * Passed to utility-sass and used to compile a font size scale with
     * {@link Tokens_Spacing.multiplier}.
     */
    public readonly lineHeight: Tokens_Typography.Parsed[ 'lineHeight' ];

    /**
     * Font sizes for the design system.
     *
     * Passed to utility-sass and used to compile a font size scale with
     * {@link Tokens_Spacing.multiplier}.
     */
    public readonly size: Tokens_Typography.Parsed[ 'size' ];

    public constructor (
        protected tokens_spacing: Tokens_Spacing,
        input?: Tokens_Typography.Part,
    ) {
        super( input ?? {} );

        this.lineHeight = this.parseSchema(
            this.schema.shape.lineHeight,
            input?.lineHeight ?? {},
            {
                name: 'Tokens_Spacing.lineHeight',
                location: 'src/ts/02-tokens/Tokens/Spacing.ts:63',
            },
        );

        this.size = {

            title: this.parseSchema(
                this.schema.shape.size.shape.title,
                input?.size?.title,
                {
                    name: 'Tokens_Spacing.size.title',
                    location: 'src/ts/02-tokens/Tokens/Spacing.ts:74',
                },
            ),

            heading: this.parseSchema(
                this.schema.shape.size.shape.heading,
                input?.size?.heading ?? {},
                {
                    name: 'Tokens_Spacing.size.heading',
                    location: 'src/ts/02-tokens/Tokens/Spacing.ts:83',
                },
            ),

            smaller: this.parseSchema(
                this.schema.shape.size.shape.smaller,
                input?.size?.smaller ?? {},
                {
                    name: 'Tokens_Spacing.size.smaller',
                    location: 'src/ts/02-tokens/Tokens/Spacing.ts',
                },
            ),

            normal: this.parseSchema(
                this.schema.shape.size.shape.normal,
                input?.size?.normal,
                {
                    name: 'Tokens_Spacing.size.normal',
                    location: 'src/ts/02-tokens/Tokens/Spacing.ts:101',
                },
            ),

            bigger: this.parseSchema(
                this.schema.shape.size.shape.bigger,
                input?.size?.bigger ?? {},
                {
                    name: 'Tokens_Spacing.size.bigger',
                    location: 'src/ts/02-tokens/Tokens/Spacing.ts:110',
                },
            ),
        };
    }

    public valueOf(): Tokens_Typography.Parsed {

        return {
            lineHeight: this.lineHeight,
            size: this.size,
        };
    }

    public toScssVars() {

        return {
            font: {
                size: this.size,
            },

            line_height: this.lineHeight,
        };
    }

    public override toJSON(): Tokens_Typography.JSON {

        const size_mapper = (
            base: number,
            _opts?: {
                roundToPixel: boolean,
                roundToPixel_factor?: number,
                multiplier?: number,
            }
        ) => {
            const opts = {
                roundToPixel: true,
                multiplier: this.tokens_spacing.multiplier,
                ..._opts,
            } satisfies NonNullable<typeof _opts>;

            const _converter = ( _val: number ) => {
                let _rem = Math.pow(
                    opts.multiplier,
                    _val
                ) * base;

                if ( opts.roundToPixel ) {
                    _rem = this.roundToPixel( _rem, opts.roundToPixel_factor );
                }

                return _rem;
            };

            return {
                title: _converter( this.size.title ),

                heading: this.objectMap(
                    this.size.heading,
                    ( key, value ) => key && _converter( value )
                ),

                smaller: this.objectMap(
                    this.size.smaller,
                    ( key, value ) => key && _converter( value )
                ),

                normal: _converter( this.size.normal ),

                bigger: this.objectMap(
                    this.size.bigger,
                    ( key, value ) => key && _converter( value )
                ),
            };
        };

        return {
            ...this.valueOf(),

            size: {
                rem: size_mapper( 1, { roundToPixel: true } ),
                pt: size_mapper( 11, { roundToPixel: true, roundToPixel_factor: 2 } ),
                px: size_mapper( 16, { roundToPixel: true, roundToPixel_factor: 1 } ),
            },
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Typography {



    /* SCHEMA
     * ====================================================================== */

    export const Schema = z.object( {

        lineHeight: z.object( {
            '100': z.number().default( -2.75 ),
            '200': z.number().default( -2 ),
            '300': z.number().default( -1.25 ),
            '400': z.number().default( 0 ),
            '500': z.number().default( 1 ),
            '600': z.number().default( 2 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),

        size: z.object( {

            title: z.number().default( 7 ),

            heading: z.object( {
                '1': z.number().default( 6 ),
                '2': z.number().default( 5 ),
                '3': z.number().default( 4 ),
                '4': z.number().default( 3 ),
                '5': z.number().default( 2 ),
                '6': z.number().default( 1 ),
            } ).and( z.record( z.number(), z.number() ) ),

            smaller: z.object( {
                // '5': z.number().default(-3.0),
                // '4': z.number().default(-2.5),
                // '3': z.number().default(-2.0),
                '2': z.number().default( -1.25 ),
                '1': z.number().default( -0.5 ),
            } ).and( z.record( z.number(), z.number() ) ),

            normal: z.number().default( 0 ),

            bigger: z.object( {
                '1': z.number().default( 1 ),
                '2': z.number().default( 2 ),
                '3': z.number().default( 3 ),
                '4': z.number().default( 4 ),
                '5': z.number().default( 5 ),
                '6': z.number().default( 6 ),
                // '7': z.number().default( 7 ),
                // '8': z.number().default( 8 ),
                // '9': z.number().default( 9 ),
            } ).and( z.record( z.number(), z.number() ) ),
        } ),
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.infer<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_Typography.Schema} accepted
     * as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part = Partial<Parsed>;

    export type JSON = Omit<Parsed, "size"> & {
        size: {
            rem: Parsed[ 'size' ];
            pt: Parsed[ 'size' ];
            px: Parsed[ 'size' ];
        };
    };

    export type ScssVars = {
        font: Omit<Parsed, "lineHeight">;
        line_height: Parsed[ 'lineHeight' ];
    };
}