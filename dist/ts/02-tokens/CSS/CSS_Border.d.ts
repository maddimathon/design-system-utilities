/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { AnyTokenLevel } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_CSS_Border extends AbstractTokens<{
    data: Tokens_CSS_Border.Data;
    json: Tokens_CSS_Border.JsonReturn;
    scss: Tokens_CSS_Border.ScssVars;
}> {
    static get default(): Tokens_CSS_Border.Data;
    readonly data: Tokens_CSS_Border.Data;
    constructor(input: Tokens_CSS_Border.InputParam);
    toJSON(): Tokens_CSS_Border.JsonReturn;
    toScssVars(): Tokens_CSS_Border.ScssVars;
}
/**
 * Utilities for the {@link Tokens_CSS_Border} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_CSS_Border {
    type DefaultRadiusLevels = "100" | "200" | "400";
    type DefaultWidthLevels = "100" | "200" | "300" | "400";
    type DefaultStrokeLevels = "100" | "200" | "400" | "600" | "700" | "800";
    /**
     * @since 0.1.0-alpha
     */
    export type Data = {
        radius: {
            [L in DefaultRadiusLevels]: number;
        } & {
            [L in Exclude<AnyTokenLevel, DefaultRadiusLevels>]?: number;
        };
        width: {
            [L in DefaultWidthLevels]: number;
        } & {
            [L in Exclude<AnyTokenLevel, DefaultWidthLevels>]?: number;
        };
        stroke: {
            [L in DefaultStrokeLevels]: number;
        } & {
            [L in Exclude<AnyTokenLevel, DefaultStrokeLevels>]?: number;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = Partial<Omit<Data, 'radius' | 'width' | 'stroke'>> & {
        radius?: Partial<Data['radius']>;
        width?: Partial<Data['width']>;
        stroke?: Partial<Data['stroke']>;
    };
    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type ScssVars = Data;
    export {};
}
