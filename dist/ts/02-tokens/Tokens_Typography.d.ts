/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects/partial';
import type { TokenLevels, TokenLevels_Extended } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import type { RecursiveRecord } from '../01-utilities/@types.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Typography extends AbstractTokens<Tokens_Typography.Data> {
    static get default(): Tokens_Typography.Data;
    readonly data: Tokens_Typography.Data;
    constructor(input: Tokens_Typography.InputParam);
    toJSON(): Tokens_Typography.JsonReturn;
    toScssVars(): {
        font: {
            size: {
                [key: string]: number | RecursiveRecord<string | number, number>;
                title: number;
                heading: {
                    1: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    7: number;
                    8: number;
                    [key: number]: number;
                };
                smaller: {
                    1: number;
                    2: number;
                    3: number;
                    [key: number]: number;
                };
                normal: number;
                bigger: {
                    1: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    [key: number]: number;
                };
            };
        };
        line_height: {
            100: number;
            200: number;
            300: number;
            400: number;
            500: number;
            600: number;
        } & {
            700?: number | undefined;
            800?: number | undefined;
            900?: number | undefined;
            "000"?: number | undefined;
            "050"?: number | undefined;
            150?: number | undefined;
            250?: number | undefined;
            350?: number | undefined;
            450?: number | undefined;
            550?: number | undefined;
            650?: number | undefined;
            750?: number | undefined;
            850?: number | undefined;
            950?: number | undefined;
        };
    };
}
/**
 * Utilities for the {@link Tokens_Typography} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Typography {
    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";
    /**
     * @since 0.1.0-alpha.draft
     */
    export type Data = {
        lineHeight: {
            [L in DefaultLineHeightLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultLineHeightLevels> | TokenLevels_Extended]?: number;
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
                8: number;
                [key: number]: number;
            };
            smaller: {
                1: number;
                2: number;
                3: number;
                [key: number]: number;
            };
            normal: number;
            bigger: {
                1: number;
                2: number;
                3: number;
                4: number;
                5: number;
                6: number;
                [key: number]: number;
            };
            [key: string]: number | RecursiveRecord<number | string, number>;
        };
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    export type InputParam = Partial<Omit<Data, 'lineHeight' | 'size'>> & {
        size?: RecursivePartial<Data['size']>;
        lineHeight?: Partial<Data['lineHeight']>;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    export type JsonReturn = Data;
    export {};
}
//# sourceMappingURL=Tokens_Typography.d.ts.map