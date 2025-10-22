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
import type { TokenLevels, TokenLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_CSS_Border extends AbstractTokens<Tokens_CSS_Border.Data> {

    public static get default(): Tokens_CSS_Border.Data {
        return {

            radius: {
                '100': 0.25,
                '200': 0.375,
                '400': 0.625,
            },

            width: {
                '100': 0.0625,
                '200': 0.125,
                '300': 0.1875,
                '400': 0.25,
            },

            stroke: {
                '100': 0.5 / 16,
                '200': 1 / 16,
                '400': 2 / 16,
                '500': 2.5 / 16,
                '600': 3 / 16,
                '800': 4 / 16,
                '900': 6 / 16,
            },
        };
    }

    public readonly data: Tokens_CSS_Border.Data;

    public constructor (
        input: Tokens_CSS_Border.InputParam,
    ) {
        super();

        this.data = mergeArgs( Tokens_CSS_Border.default, input, true );
    }

    public toJSON(): Tokens_CSS_Border.JsonReturn {

        return this.data;
    }

    public toScssVars(): {
        [ K in keyof Tokens_CSS_Border.Data ]: AbstractTokens.ScssReturn;
    } {
        return {
            radius: this.data.radius,
            stroke: this.data.stroke,
            width: this.data.width,
        };
    }
}

/**
 * Utilities for the {@link Tokens_CSS_Border} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Border {

    type DefaultRadiusLevels = "100" | "200" | "400";
    type DefaultWidthLevels = "100" | "200" | "300" | "400";
    type DefaultStrokeLevels = "100" | "200" | "400" | "500" | "600" | "800" | "900";

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {

        radius: {
            [ L in DefaultRadiusLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultRadiusLevels> | TokenLevels_Extended ]?: number;
        };

        width: {
            [ L in DefaultWidthLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultWidthLevels> | TokenLevels_Extended ]?: number;
        };

        stroke: {
            [ L in DefaultStrokeLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultStrokeLevels> | TokenLevels_Extended ]?: number;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Omit<Data, 'radius' | 'width' | 'stroke'>> & {
        radius?: Partial<Data[ 'radius' ]>;
        width?: Partial<Data[ 'width' ]>;
        stroke?: Partial<Data[ 'stroke' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;

}