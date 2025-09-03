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

import { AbstractTokens } from '../abstracts/AbstractTokens.js';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_TEMPLATE extends AbstractTokens<
    typeof Tokens_TEMPLATE.Schema,
    Tokens_TEMPLATE.Parsed,
    Tokens_TEMPLATE.Part,
    Tokens_TEMPLATE.JSON,
    Tokens_TEMPLATE.ScssVars
> {

    get schema() {
        return Tokens_TEMPLATE.Schema;
    }

    public readonly parsed: Tokens_TEMPLATE.Parsed;

    public constructor (
        input?: Tokens_TEMPLATE.Part,
    ) {
        super( input ?? {} );

        this.parsed = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: 'Tokens_TEMPLATE',
                location: 'src/ts/02-tokens/Tokens_TEMPLATE.ts:49',
            },
        );
    }

    public toJSON(): Tokens_TEMPLATE.JSON {
        return this.valueOf();
    }

    public toScssVars(): Tokens_TEMPLATE.ScssVars {
        return this.valueOf();
    }

    public valueOf(): Tokens_TEMPLATE.Parsed {
        return this.parsed;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_TEMPLATE {



    /* SCHEMA
     * ====================================================================== */

    export const Schema = z.object( {
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.infer<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part = Partial<Parsed>;

    export type JSON = Parsed;

    export type ScssVars = Parsed;
}