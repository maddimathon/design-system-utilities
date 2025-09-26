/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { TokenLevels_Extended } from './@utils.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Typography } from './Tokens_Typography.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended> extends AbstractTokens<Tokens.Data<T_ColourName, T_ExtraColourLevels>> {
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly input: Tokens.InputParam<T_ColourName, T_ExtraColourLevels>;
    protected readonly config: Partial<Tokens.Config>;
    get data(): {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data;
        css: Tokens_CSS.Data;
    };
    readonly colour: Tokens_Colour<T_ColourName, T_ExtraColourLevels>;
    readonly spacing: Tokens_Spacing;
    readonly typography: Tokens_Typography;
    readonly css: Tokens_CSS;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended>(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], input: Tokens.InputParam<T_ColourName, T_ExtraColourLevels>, config?: Partial<Tokens.Config>): Promise<Tokens<T_ColourName, T_ExtraColourLevels>>;
    protected constructor(clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], input: Tokens.InputParam<T_ColourName, T_ExtraColourLevels>, config?: Partial<Tokens.Config>);
    toJSON(): Tokens.JsonReturn<T_ColourName, T_ExtraColourLevels>;
    toScssVars(): {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels> extends infer T extends object ? { [K in keyof T]: T_Return; } : never;
        border: {
            radius: AbstractTokens.ScssReturn;
            width: AbstractTokens.ScssReturn;
            stroke: AbstractTokens.ScssReturn;
        };
        transition: {
            time: AbstractTokens.ScssReturn;
        };
        z_index: {
            [key: string]: number;
            nav: number;
            popup: number;
            settings: number;
            skipLink: number;
        };
        font: {
            size: {
                [key: string]: number | import("../index.js").RecursiveRecord<string | number, number>;
                title: number;
                heading: {
                    1: number;
                    2: number;
                    3: number;
                    4: number;
                    5: number;
                    6: number;
                    7: number;
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
        spacing_multiplier: number;
        margin: {
            100: number;
            200: number;
            300: number;
            400: number;
            600: number;
            800: number;
        } & {
            500?: number | undefined;
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
    toScss(): string;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens {
    /**
     * Configuration options for the {@link Tokens} class.
     *
     * @since ___PKG_VERSION___
     */
    interface Config {
        tokensAsDefault: boolean;
    }
    type Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended> = {
        colour: Tokens_Colour.Data<T_ColourName, T_ExtraColourLevels>;
        spacing: Tokens_Spacing.Data;
        typography: Tokens_Typography.Data;
        css: Tokens_CSS.Data;
    };
    interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended> {
        colour?: undefined | Tokens_Colour.InputParam<T_ColourName, T_ExtraColourLevels>;
        spacing?: undefined | Tokens_Spacing.InputParam;
        typography?: undefined | Tokens_Typography.InputParam;
        css?: undefined | Tokens_CSS.InputParam;
    }
    type JsonReturn<T_ColourName extends string, T_ExtraLevels extends TokenLevels_Extended> = {
        colour: Tokens_Colour.JsonReturn<T_ColourName, T_ExtraLevels>;
        spacing: Tokens_Spacing.JsonReturn;
        typography: Tokens_Typography.JsonReturn;
        css: Tokens_CSS.JsonReturn;
    };
}
//# sourceMappingURL=Tokens.d.ts.map