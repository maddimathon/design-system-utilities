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

import * as Schemata from '../../00-schemata/index.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import type { Tokens_Spacing } from './Spacing.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Typography extends AbstractTokens<
    typeof Schemata.Tokens.shape.typography,
    Tokens_Typography.Export,
    Schemata.PartialTokens.Typography,
    Tokens_Typography.JSON
> {

    get schema() {
        return Schemata.Tokens.shape.typography;
    }

    public readonly lineHeight: Tokens_Typography.Export[ 'lineHeight' ];
    public readonly size: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;

    public constructor (
        protected tokens_spacing: Tokens_Spacing,
        input?: Schemata.PartialTokens.Typography,
    ) {
        super( input ?? {} );

        const schemata = Schemata.Tokens.shape.typography.shape;

        this.lineHeight = schemata.lineHeight.parse( input?.lineHeight ?? {} );

        this.size = {
            title: schemata.size.shape.title.parse( input?.size?.title ),
            heading: schemata.size.shape.heading.parse( input?.size?.heading ?? {} ),
            smaller: schemata.size.shape.smaller.parse( input?.size?.smaller ?? {} ),
            normal: schemata.size.shape.normal.parse( input?.size?.normal ),
            bigger: schemata.size.shape.bigger.parse( input?.size?.bigger ?? {} ),
        };
    }

    public export(): Tokens_Typography.Export {

        return {
            lineHeight: this.lineHeight,
            size: this.size,
        };
    }

    public toScssVars() {
        return this.export();
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
            ...this.export(),

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
 */
export namespace Tokens_Typography {

    export interface Export extends z.infer<typeof Schemata.Tokens.shape.typography> {
    };

    export interface JSON extends Omit<z.infer<typeof Schemata.Tokens.shape.typography>, "size"> {

        size: {
            rem: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
            pt: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
            px: z.infer<typeof Schemata.Tokens.shape.typography.shape.size>;
        };
    };
}