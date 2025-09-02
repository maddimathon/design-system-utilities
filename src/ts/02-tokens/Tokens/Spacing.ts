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

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Spacing extends AbstractTokens<
    typeof Schemata.Tokens.shape.spacing,
    Tokens_Spacing.Export,
    Schemata.PartialTokens.Spacing,
    Tokens_Spacing.JSON
> {

    get schema() {
        return Schemata.Tokens.shape.spacing;
    }

    public readonly margin: Tokens_Spacing.Export[ 'margin' ];
    public readonly multiplier: Tokens_Spacing.Export[ 'multiplier' ];

    public constructor (
        input?: Schemata.PartialTokens.Spacing,
    ) {
        super( input ?? {} );

        this.margin = Schemata.Tokens.shape.spacing.shape.margin.parse( input?.margin ?? {} );

        this.multiplier = Schemata.Tokens.shape.spacing.shape.multiplier.parse( input?.multiplier );
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
        return this.export();
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Spacing {

    export interface Export extends z.infer<typeof Schemata.Tokens.shape.spacing> { };

    export interface JSON extends Omit<z.infer<typeof Schemata.Tokens.shape.spacing>, "margin"> {
        margin: {
            rem: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
            pt: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
            px: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
        };
    };
}