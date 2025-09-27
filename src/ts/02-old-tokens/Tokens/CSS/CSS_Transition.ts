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

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_CSS_Transition extends AbstractTokens<
    typeof Tokens_CSS_Transition.Schema,
    Tokens_CSS_Transition.Parsed,
    Tokens_CSS_Transition.Part,
    Tokens_CSS_Transition.JSON,
    Tokens_CSS_Transition.ScssVars
> {

    get schema() {
        return Tokens_CSS_Transition.Schema;
    }

    /**
     * Transition time values for CSS.
     * 
     * Default keys are 'fast', 'normal', 'slow'.
     */
    public readonly time: Tokens_CSS_Transition.Parsed[ 'time' ];

    public constructor (
        input?: Tokens_CSS_Transition.Part,
    ) {
        super( input ?? {} );

        this.time = this.parseSchema(
            this.schema.shape.time,
            input?.time ?? {},
            {
                name: 'Tokens_CSS_Transition',
                location: 'src/ts/02-tokens/Tokens/CSS/CSS_Transition.ts:49',
            },
        );
    }

    public toJSON() {
        return this.valueOf();
    }

    public toScssVars() {
        return this.valueOf();
    }

    public valueOf(): Tokens_CSS_Transition.Parsed {

        return {
            time: this.time,
        };
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Transition {



    /* SCHEMA
     * ====================================================================== */

    const transitionTime = z.string().regex( /^\d+m?s$/ );

    export const Schema = z.object( {

        time: z.object( {
            fast: transitionTime.default( '250ms' ),
            normal: transitionTime.default( '500ms' ),
            slow: transitionTime.default( '750ms' ),
        } ).and( z.record( z.string(), transitionTime ) ),
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.infer<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_CSS_Transition.Schema}
     * accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export interface Part {
        time?: Partial<z.infer<typeof Schema.shape.time>>,
    }

    export type JSON = Parsed;

    export type ScssVars = Parsed;
}