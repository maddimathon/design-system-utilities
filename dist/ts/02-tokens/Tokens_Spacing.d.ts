/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { AnyTokenLevel } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Spacing extends AbstractTokens<{
    data: Tokens_Spacing.Data;
    json: Tokens_Spacing.JsonReturn;
    scss: Tokens_Spacing.ScssVars;
}> {
    static get default(): Tokens_Spacing.Data;
    readonly data: Tokens_Spacing.Data;
    constructor(input: Tokens_Spacing.InputParam);
    toJSON(): Tokens_Spacing.JsonReturn;
    toScssVars(): Tokens_Spacing.ScssVars;
}
/**
 * Utilities for the {@link Tokens_Spacing} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Spacing {
    type DefaultMarginLevels = "100" | "200" | "300" | "400" | "500" | "600" | "800" | "900";
    /**
     * @since 0.1.0-alpha
     */
    export type Data = {
        multiplier: number;
        margin: {
            [L in DefaultMarginLevels]: number;
        } & {
            [L in Exclude<AnyTokenLevel, DefaultMarginLevels>]?: number;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = {
        multiplier?: number;
        margin?: Partial<Data['margin']>;
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
    export {};
}
