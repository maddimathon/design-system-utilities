/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { mergeArgs } from '@maddimathon/utility-typescript';
import type { AnyTokenLevel } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Border extends AbstractTokens<{
    data: Tokens_CSS_Border.Data;
    json: Tokens_CSS_Border.JsonReturn;
    scss: Tokens_CSS_Border.ScssVars;
}> {

    public static get default(): Tokens_CSS_Border.Data {
        return {

            radius: {
                '100': 0.25,
                '200': 0.375,
                '400': 0.625,
                '600': 1,
            },

            width: {
                '100': 1 / 16,
                '200': 2 / 16,
                '300': 3 / 16,
                '400': 4 / 16,
            },

            stroke: {
                '100': 1 / 16,
                '200': 2 / 16,
                '400': 3 / 16,
                '600': 4 / 16,
                '700': 5 / 16,
                '800': 6 / 16,
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

    public toScssVars(): Tokens_CSS_Border.ScssVars {
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
 * @since 0.1.0-alpha
 */
export namespace Tokens_CSS_Border {

    type DefaultRadiusLevels = "100" | "200" | "400";
    type DefaultWidthLevels = "100" | "200" | "300" | "400";
    type DefaultStrokeLevels = "100" | "200" | "400" | "600" | "700" | "800";

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {

        radius: {
            [ L in DefaultRadiusLevels ]: number;
        } & {
            [ L in Exclude<AnyTokenLevel, DefaultRadiusLevels> ]?: number;
        };

        width: {
            [ L in DefaultWidthLevels ]: number;
        } & {
            [ L in Exclude<AnyTokenLevel, DefaultWidthLevels> ]?: number;
        };

        stroke: {
            [ L in DefaultStrokeLevels ]: number;
        } & {
            [ L in Exclude<AnyTokenLevel, DefaultStrokeLevels> ]?: number;
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = Partial<Omit<Data, 'radius' | 'width' | 'stroke'>> & {
        radius?: Partial<Data[ 'radius' ]>;
        width?: Partial<Data[ 'width' ]>;
        stroke?: Partial<Data[ 'stroke' ]>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars = Data;
}