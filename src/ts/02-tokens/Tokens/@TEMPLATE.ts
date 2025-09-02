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
 * @internal
 */
export class Tokens_TEMPLATE extends AbstractTokens<
    typeof Tokens_TEMPLATE.Schema,
    Tokens_TEMPLATE.Export,
    Tokens_TEMPLATE.Part,
    Tokens_TEMPLATE.JSON
> {

    get schema() {
        return Tokens_TEMPLATE.Schema;
    }

    // public readonly time: Tokens_CSS_Transition.Export[ 'time' ];

    public constructor (
        input?: Tokens_TEMPLATE.Part,
    ) {
        super( input ?? {} );

        // this.time = Schemata.Tokens.parse( input ?? {} );
    }

    public export(): Tokens_TEMPLATE.Export {

        return {
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
 * @internal
 */
export namespace Tokens_TEMPLATE {

    export const Schema = z.object( {
    } );

    // @ts-expect-error
    export interface Export extends z.infer<typeof Schemata.Tokens.shape> { };

    // @ts-expect-error
    export interface JSON extends z.infer<typeof Schemata.Tokens.shape> { };

    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export interface Part extends Partial<Export> { }
}