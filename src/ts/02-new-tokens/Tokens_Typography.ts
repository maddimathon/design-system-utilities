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

import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects/partial';
import type { TokenLevels, TokenLevels_Extended } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import type { RecursiveRecord } from '../01-utilities/@types.js';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Typography extends AbstractTokens<Tokens_Typography.Data> {

    public static get default(): Tokens_Typography.Data {
        return {

            lineHeight: {
                '100': -2.75,
                '200': -2,
                '300': -1.25,
                '400': 0,
                '500': 1,
                '600': 2,
            },

            size: {

                title: 7,

                heading: {
                    1: 6,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: 0,
                },

                smaller: {
                    1: -0.5,
                    2: -1.25,
                    3: -2.0,
                    // 4: -2.5,
                    // 5: -3.0,
                },

                normal: 0,

                bigger: {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                },
            },
        };
    }

    // public get data(): Tokens_Typography.Data {
    //     return {};
    // }
    public readonly data: Tokens_Typography.Data;

    public constructor (
        input: Tokens_Typography.InputParam,
    ) {
        super();

        this.data = mergeArgs( Tokens_Typography.default, input, true );
    }

    public toJSON(): Tokens_Typography.JsonReturn {

        return this.data;
    }

    public toScssVars() {

        return {
            font: {
                size: this.data.size,
            },

            line_height: this.data.lineHeight,
        };
    }
}

/**
 * Utilities for the {@link Tokens_Typography} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Typography {

    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {

        lineHeight: {
            [ L in DefaultLineHeightLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultLineHeightLevels> | TokenLevels_Extended ]?: number;
        };

        size: {
            title: number;

            heading: {
                1: number;
                2: number;
                3: number;
                4: number;
                5: number;
                6: number;
                7: number;
                [ key: number ]: number;
            };

            smaller: {
                1: number;
                2: number;
                3: number;
                // 4: number;
                // 5: number;
                [ key: number ]: number;
            };

            normal: number;

            bigger: {
                1: number;
                2: number;
                3: number;
                4: number;
                5: number;
                6: number;
                [ key: number ]: number;
            };

            [ key: string ]: number | RecursiveRecord<number | string, number>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Omit<Data, 'lineHeight' | 'size'>> & {
        size?: RecursivePartial<Data[ 'size' ]>;
        lineHeight?: Partial<Data[ 'lineHeight' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;

}