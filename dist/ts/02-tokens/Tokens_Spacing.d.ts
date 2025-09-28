/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { TokenLevels, TokenLevels_Extended } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Spacing extends AbstractTokens<Tokens_Spacing.Data> {
    static get default(): Tokens_Spacing.Data;
    readonly data: Tokens_Spacing.Data;
    constructor(input: Tokens_Spacing.InputParam);
    toJSON(): Tokens_Spacing.JsonReturn;
    toScssVars(): {
        spacing_multiplier: number;
        margin: {
            100: number;
            200: number;
            300: number;
            400: number;
            500: number;
            600: number;
            800: number;
        } & {
            700?: number | undefined;
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
 * Utilities for the {@link Tokens_Spacing} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Spacing {
    type DefaultMarginLevels = "100" | "200" | "300" | "400" | "500" | "600" | "800";
    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {
        multiplier: number;
        margin: {
            [L in DefaultMarginLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultMarginLevels> | TokenLevels_Extended]?: number;
        };
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = {
        multiplier?: number;
        margin?: Partial<Data['margin']>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = {};
    export {};
}
//# sourceMappingURL=Tokens_Spacing.d.ts.map