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
export class Tokens_TEMPLATE extends AbstractTokens<
    Tokens_TEMPLATE.Export,
    Schemata.PartialTokens
> {

    // public readonly time: Tokens_CSS_Transition.Export[ 'time' ];

    public constructor (
        input?: Schemata.PartialTokens,
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
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_TEMPLATE {

    // @ts-expect-error
    export interface Export extends z.infer<typeof Schemata.Tokens.shape> { };
}