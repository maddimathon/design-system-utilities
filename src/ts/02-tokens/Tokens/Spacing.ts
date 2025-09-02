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
    Tokens_Spacing.Export,
    Schemata.PartialTokens.Spacing
> {

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
}