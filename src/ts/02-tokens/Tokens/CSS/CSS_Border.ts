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

import {
    tokenLevels_extended,
} from '../../../old--00-schemata/@utils.js';

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';


/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_CSS_Border extends AbstractTokens<
    typeof Tokens_CSS_Border.Schema,
    Tokens_CSS_Border.Parsed,
    Tokens_CSS_Border.Part,
    Tokens_CSS_Border.JSON,
    Tokens_CSS_Border.ScssVars
> {

    get schema() {
        return Tokens_CSS_Border.Schema;
    }

    /**
     * Border radii for CSS.
     *
     * Default keys are '100', '200', '400'. After merging, values are
     * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    public readonly radius: Tokens_CSS_Border.Parsed[ 'radius' ];

    /**
     * Relative stroke widths for CSS. Meant to be used for underlines and
     * spacing. Written in css as em units.
     *
     * Default keys are '100', '200', '400', '600', '800', '900'. After
     * merging, values are rounded with {@link AbstractTokens.roundToPixel}
     * (factor = 32).
     */
    public readonly stroke: Tokens_CSS_Border.Parsed[ 'stroke' ];

    /**
     * Border widths for CSS.
     *
     * Default keys are '100', '200', '300', '400'. After merging, values
     * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
     */
    public readonly width: Tokens_CSS_Border.Parsed[ 'width' ];

    public constructor (
        input?: Tokens_CSS_Border.Part,
    ) {
        super( input ?? {} );

        this.radius = this.parseSchema(
            this.schema.shape.radius,
            input?.radius ?? {},
            {
                name: 'Tokens_CSS_Border.radius',
                location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:74',
            },
        );

        this.stroke = this.parseSchema(
            this.schema.shape.stroke,
            input?.stroke ?? {},
            {
                name: 'Tokens_CSS_Border.stroke',
                location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:86',
            },
        );

        this.width = this.parseSchema(
            this.schema.shape.width,
            input?.width ?? {},
            {
                name: 'Tokens_CSS_Border.width',
                location: 'src/ts/02-tokens/Tokens/CSS/CSS_Border.ts:98',
            },
        );
    }

    public toJSON() {
        return this.valueOf();
    }

    public toScssVars() {
        return this.valueOf();
    }

    public valueOf(): Tokens_CSS_Border.Parsed {

        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Border {



    /* SCHEMA
     * ====================================================================== */

    export const Schema = z.object( {

        radius: z.object( {
            '100': z.number().default( 0.25 ),
            '200': z.number().default( 0.375 ),
            '400': z.number().default( 0.625 ),
        } ).and(
            z.record( tokenLevels_extended, z.number() )
        ).transform(
            ( map ) => AbstractTokens.objectMap(
                map,
                ( _key, _value ) => _key && (
                    typeof _value === 'number'
                        ? AbstractTokens.roundToPixel( _value, 32 )
                        : _value
                )
            )
        ),

        width: z.object( {
            '100': z.number().default( 0.0625 ),
            '200': z.number().default( 0.125 ),
            '300': z.number().default( 0.1875 ),
            '400': z.number().default( 0.25 ),
        } ).and(
            z.record( tokenLevels_extended, z.number() )
        ).transform(
            ( map ) => AbstractTokens.objectMap(
                map,
                ( _key, _value ) => _key && (
                    typeof _value === 'number'
                        ? AbstractTokens.roundToPixel( _value, 32 )
                        : _value
                )
            )
        ),

        stroke: z.object( {
            '100': z.number().default( 0.5 / 16 ),
            '200': z.number().default( 1 / 16 ),
            '400': z.number().default( 2 / 16 ),
            '600': z.number().default( 3 / 16 ),
            '800': z.number().default( 4 / 16 ),
            '900': z.number().default( 6 / 16 ),
        } ).and(
            z.record( tokenLevels_extended, z.number() )
        ).transform(
            ( map ) => AbstractTokens.objectMap(
                map,
                ( _key, _value ) => _key && (
                    typeof _value === 'number'
                        ? AbstractTokens.roundToPixel( _value, 32 )
                        : _value
                )
            )
        ),
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.infer<typeof Schema>;

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
    };

    export type JSON = Parsed;

    export type ScssVars = Parsed;
}