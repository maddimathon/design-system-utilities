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
 */
export class Tokens_CSS_Border extends AbstractTokens<
    typeof Tokens_CSS_Border.Schema,
    Tokens_CSS_Border.Export,
    Tokens_CSS_Border.Part
> {

    get schema() {
        return Tokens_CSS_Border.Schema;
    }

    public readonly radius: Tokens_CSS_Border.Export[ 'radius' ];
    public readonly stroke: Tokens_CSS_Border.Export[ 'stroke' ];
    public readonly width: Tokens_CSS_Border.Export[ 'width' ];

    public constructor (
        input?: Tokens_CSS_Border.Part,
    ) {
        super( input ?? {} );

        this.radius = this.objectMap(
            this.schema.shape.radius.parse( input?.radius ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );

        this.stroke = this.objectMap(
            this.schema.shape.stroke.parse( input?.stroke ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );

        this.width = this.objectMap(
            this.schema.shape.width.parse( input?.width ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );
    }

    public export(): Tokens_CSS_Border.Export {

        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }

    public toJSON() {
        return this.export();
    }

    public toScssVars() {
        return this.export();
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Border {

    export const Schema = z.object( {

        /**
         * Border radii for CSS.
         *
         * Default keys are '100', '200', '400'. After merging, values are
         * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        radius: z.object( {
            '100': z.number().default( 0.25 ),
            '200': z.number().default( 0.375 ),
            '400': z.number().default( 0.625 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),

        /**
         * Border widths for CSS.
         *
         * Default keys are '100', '200', '300', '400'. After merging, values
         * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        width: z.object( {
            '100': z.number().default( 0.0625 ),
            '200': z.number().default( 0.125 ),
            '300': z.number().default( 0.1875 ),
            '400': z.number().default( 0.25 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),

        /**
         * Relative stroke widths for CSS. Meant to be used for underlines and
         * spacing. Written in css as em units.
         *
         * Default keys are '100', '200', '400', '600', '800', '900'. After
         * merging, values are rounded with {@link AbstractTokens.roundToPixel}
         * (factor = 32).
         */
        stroke: z.object( {
            '100': z.number().default( 0.5 / 16 ),
            '200': z.number().default( 1 / 16 ),
            '400': z.number().default( 2 / 16 ),
            '600': z.number().default( 3 / 16 ),
            '800': z.number().default( 4 / 16 ),
            '900': z.number().default( 6 / 16 ),
        } ).and( z.record( tokenLevels_extended, z.number() ) ),
    } );

    export interface Export extends z.infer<typeof Schema> { };

    /**
     * The partialized version of the {@link Tokens_CSS_Border.Schema} accepted
     * as input.
     *
     * @since ___PKG_VERSION___
     */
    export interface Part {
        radius?: Partial<z.infer<typeof Schema.shape.radius>>;
        stroke?: Partial<z.infer<typeof Schema.shape.stroke>>;
        width?: Partial<z.infer<typeof Schema.shape.width>>;
    }
}