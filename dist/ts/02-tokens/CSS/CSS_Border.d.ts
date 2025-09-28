/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { TokenLevels, TokenLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_CSS_Border extends AbstractTokens<Tokens_CSS_Border.Data> {
    static get default(): Tokens_CSS_Border.Data;
    readonly data: Tokens_CSS_Border.Data;
    constructor(input: Tokens_CSS_Border.InputParam);
    toJSON(): Tokens_CSS_Border.JsonReturn;
    toScssVars(): {
        [K in keyof Tokens_CSS_Border.Data]: AbstractTokens.ScssReturn;
    };
}
/**
 * Utilities for the {@link Tokens_CSS_Border} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_CSS_Border {
    type DefaultRadiusLevels = "100" | "200" | "400";
    type DefaultWidthLevels = "100" | "200" | "300" | "400";
    type DefaultStrokeLevels = "100" | "200" | "400" | "600" | "800" | "900";
    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {
        radius: {
            [L in DefaultRadiusLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultRadiusLevels> | TokenLevels_Extended]?: number;
        };
        width: {
            [L in DefaultWidthLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultWidthLevels> | TokenLevels_Extended]?: number;
        };
        stroke: {
            [L in DefaultStrokeLevels]: number;
        } & {
            [L in Exclude<TokenLevels, DefaultStrokeLevels> | TokenLevels_Extended]?: number;
        };
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Omit<Data, 'radius' | 'width' | 'stroke'>> & {
        radius?: Partial<Data['radius']>;
        width?: Partial<Data['width']>;
        stroke?: Partial<Data['stroke']>;
    };
    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;
    export {};
}
//# sourceMappingURL=CSS_Border.d.ts.map