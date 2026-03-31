/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { RunnerOptions } from 'fantasticon';
import { FontAssetType, OtherAssetType } from 'fantasticon';
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Icons<T_ExtraIconNames extends string> extends AbstractTokens<{
    data: Tokens_Icons.Data<T_ExtraIconNames>;
    json: Tokens_Icons.JsonReturn<T_ExtraIconNames>;
    scss: Tokens_Icons.ScssVars<T_ExtraIconNames>;
}> {
    #private;
    readonly fontName: string;
    static get default(): {
        [I in Tokens_Icons.DefaultIconNames]: Tokens_Icons.Local_SvgMaker.Data<I, never>;
    };
    readonly data: Tokens_Icons.Data<T_ExtraIconNames>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    protected _font: undefined | Awaited<ReturnType<typeof this.toIconFont>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    get font(): {
        options: RunnerOptions;
        writeResults: {
            content: string | Buffer;
            writePath: string;
        }[];
        assetsIn: {
            [key: string]: {
                id: string;
                absolutePath: string;
                relativePath: string;
            };
        };
        assetsOut: { [key in FontAssetType | OtherAssetType]?: string | Buffer; };
        codepoints: {
            [key: string]: number;
        };
    } | undefined;
    constructor(fontName: string, input: Tokens_Icons.InputParam<T_ExtraIconNames>);
    /**
     * @since 0.1.0-beta.0.draft
     */
    getCodepoints(): Tokens_Icons.Codepoints<T_ExtraIconNames>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    toIconFont({ formatOptionsDefault, ...args }: Omit<RunnerOptions, 'name'> & {
        formatOptionsDefault?: NonNullable<RunnerOptions['formatOptions']>[keyof NonNullable<RunnerOptions['formatOptions']>];
    }): Promise<{
        options: RunnerOptions;
        writeResults: {
            content: string | Buffer;
            writePath: string;
        }[];
        assetsIn: {
            [key: string]: {
                id: string;
                absolutePath: string;
                relativePath: string;
            };
        };
        assetsOut: {
            [key in FontAssetType | OtherAssetType]?: string | Buffer;
        };
        codepoints: {
            [key: string]: number;
        };
    }>;
    toJSON(): Tokens_Icons.JsonReturn<T_ExtraIconNames>;
    toScssVars(): Tokens_Icons.ScssVars<T_ExtraIconNames>;
}
/**
 * Utilities for the {@link Tokens_Icons} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Icons {
    /**
     * @since 0.1.0-alpha
     */
    type DefaultIconNames = "attachment" | "caution" | "check" | "clock" | "close" | "code" | "compass" | "computer" | "dash" | "draft" | "double-check" | "down" | "download" | "error" | "external" | "fail" | "forbidden" | "hidden" | "info" | "left" | "lightbulb" | "lightning" | "lock" | "logo-facebook" | "logo-instagram" | "logo-linkedin" | "maximum" | "minimum" | "minus" | "no" | "note" | "paperclip" | "plus" | "private" | "question" | "refresh" | "right" | "search" | "settings" | "star" | "success" | "unlock" | "ui" | "ui-check" | "ui-minimum" | "up" | "warning";
    /**
     * @since 0.1.0-beta.0.draft
     */
    type Codepoints<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: number;
    } & {
        [I in T_ExtraIconNames]?: undefined | number;
    };
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ExtraIconNames extends string> = Partial<{
        [I in DefaultIconNames]?: undefined | Partial<Local_SvgMaker.Data<I, T_ExtraIconNames>> | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    }> & {
        [I in T_ExtraIconNames]: Local_SvgMaker.Data<I, T_ExtraIconNames> | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: Local_SvgMaker.JsonReturn<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.JsonReturn<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: Local_SvgMaker.ScssVars<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.ScssVars<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Local_SvgMaker {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Data<T_IconName extends string, T_ExtraIconNames extends string> = SvgMaker.Data<T_IconName, Meta<T_ExtraIconNames>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Instance<T_IconName extends string, T_ExtraIconNames extends string> = SvgMaker<T_IconName, Meta<T_ExtraIconNames>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type JsonReturn<T_IconName extends string, T_ExtraIconNames extends string> = SvgMaker.JsonReturn<T_IconName, Meta<T_ExtraIconNames>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Meta<T_ExtraIconNames extends string> = {
            aliasOf?: undefined | DefaultIconNames | T_ExtraIconNames;
            codepoint?: undefined | number;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ScssVars<T_IconName extends string, T_ExtraIconNames extends string> = Omit<SvgMaker.ScssVars<T_IconName, Meta<T_ExtraIconNames>>, 'meta'> & {
            fontGlyph?: undefined | string;
        };
    }
}
