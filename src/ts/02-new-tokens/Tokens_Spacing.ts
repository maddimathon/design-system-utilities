/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import { mergeArgs } from '@maddimathon/utility-typescript/functions';

import type { TokenLevels, TokenLevels_Extended } from './@types.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Spacing extends AbstractTokens<Tokens_Spacing.Data> {

    public static get default(): Tokens_Spacing.Data {
        return {
            multiplier: 1.15625,

            margin: {
                '100': -9,
                '200': -6,
                '300': -3,
                '400': 0,
                '600': 4,
                '800': 8,
            },
        };
    }

    public readonly data: Tokens_Spacing.Data;

    public constructor (
        input: Tokens_Spacing.InputParam,
    ) {
        super();

        this.data = mergeArgs( Tokens_Spacing.default, input, true );
    }

    public toJSON(): Tokens_Spacing.JsonReturn {

        return {
            multiplier: this.data.multiplier,
            margin: this.data.margin,
        };
    }

    public toScssVars() {

        return {
            spacing_multiplier: this.data.multiplier,
            margin: this.data.margin,
        };
    }
}

/**
 * Utilities for the {@link Tokens_Spacing} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Spacing {

    type DefaultMarginLevels = "100" | "200" | "300" | "400" | "600" | "800";

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {

        multiplier: number;

        margin: {
            [ L in DefaultMarginLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultMarginLevels> | TokenLevels_Extended ]?: number;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = {
        multiplier?: number;
        margin?: Partial<Data[ 'margin' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = {};

}