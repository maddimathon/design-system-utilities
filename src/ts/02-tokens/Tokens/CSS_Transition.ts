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
export class Tokens_CSS_Transition extends AbstractTokens<
    Tokens_CSS_Transition.Export,
    Schemata.PartialTokens.CSS.Transition
> {

    public readonly time: Tokens_CSS_Transition.Export[ 'time' ];

    public constructor (
        input?: Schemata.PartialTokens.CSS.Transition,
    ) {
        super( input ?? {} );

        this.time = Schemata.Tokens.shape.CSS.shape.transition.shape.time.parse( input?.time ?? {} );
    }

    public export(): Tokens_CSS_Transition.Export {

        return {
            time: this.time,
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
export namespace Tokens_CSS_Transition {

    export interface Export extends z.infer<typeof Schemata.Tokens.shape.CSS.shape.transition> { }
}