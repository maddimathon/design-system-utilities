/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import { objectGenerator } from '../../01-utilities/objectGenerator.js';

import type { ColourLevels_Extended } from '../@types.js';

import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_TEMPLATE<
    T_ColourName extends string,
    T_ExtraLevels extends ColourLevels_Extended,
> extends AbstractTokens<Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels>> {

    public readonly data: Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels>;

    public constructor (
        protected readonly names: readonly T_ColourName[],
        protected readonly extraLevels: readonly T_ExtraLevels[],
        input: Tokens_Colour_TEMPLATE.InputParam<T_ColourName, T_ExtraLevels>,
    ) {
        super();

        this.data = objectGenerator(
            names,
            () => undefined,
        );
    }

    public toJSON(): Tokens_Colour_TEMPLATE.JsonReturn<T_ColourName, T_ExtraLevels> {

        return objectGenerator(
            this.names,
            () => 'undefined'
        );
    }

    public toScssVars(): {
        [ K in keyof Tokens_Colour_TEMPLATE.Data<T_ColourName, T_ExtraLevels> ]: AbstractTokens.ScssReturn;
    } {

        return objectGenerator(
            this.names,
            () => 'undefined'
        );
    }
}

/**
 * Utilities for the {@link Tokens_Colour_TEMPLATE} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Colour_TEMPLATE {

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
    > = {
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
    > = {
        };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
    > = {};
}