/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { mergeArgs } from '@maddimathon/utility-typescript/functions';

import type { AnyTokenLevel } from './@types.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Spacing extends AbstractTokens<{
    data: Tokens_Spacing.Data;
    json: Tokens_Spacing.JsonReturn;
    scss: Tokens_Spacing.ScssVars;
}> {

    public static get default(): Tokens_Spacing.Data {
        return {
            multiplier: 1.15625,

            margin: {
                '100': -9,
                '200': -6,
                '300': -3,
                '400': 0,
                '500': 2,
                '600': 4,
                '800': 8,
                '900': 12,
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

    public toScssVars(): Tokens_Spacing.ScssVars {

        return {
            spacing_multiplier: this.data.multiplier,
            margin: this.data.margin,
        };
    }
}

/**
 * Utilities for the {@link Tokens_Spacing} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Spacing {

    type DefaultMarginLevels = "100" | "200" | "300" | "400" | "500" | "600" | "800" | "900";

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {

        multiplier: number;

        margin: {
            [ L in DefaultMarginLevels ]: number;
        } & {
            [ L in Exclude<AnyTokenLevel, DefaultMarginLevels> ]?: number;
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = {
        multiplier?: number;
        margin?: Partial<Data[ 'margin' ]>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

    /**
     * @since 0.1.0-alpha
     */
    export type ScssVars = Omit<Data, 'multiplier'> & {
        spacing_multiplier: number;
    };
}