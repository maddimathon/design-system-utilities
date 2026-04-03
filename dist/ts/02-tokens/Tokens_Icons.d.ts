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
    static get defaultCodepoints(): {
        attachment: number;
        caution: number;
        check: number;
        clock: number;
        close: number;
        code: number;
        compass: number;
        dash: number;
        'double-check': number;
        down: number;
        download: number;
        draft: number;
        error: number;
        external: number;
        fail: number;
        forbidden: number;
        hidden: number;
        info: number;
        left: number;
        lightbulb: number;
        lightning: number;
        lock: number;
        'logo-facebook': number;
        'logo-instagram': number;
        'logo-linkedin': number;
        maximum: number;
        minimum: number;
        minus: number;
        no: number;
        note: number;
        paperclip: number;
        plus: number;
        private: number;
        question: number;
        refresh: number;
        right: number;
        search: number;
        settings: number;
        star: number;
        success: number;
        ui: number;
        'ui-check': number;
        'ui-minimum': number;
        unlock: number;
        up: number;
        warning: number;
        computer: number;
        alarm: number;
        biography: number;
        book: number;
        contact: number;
        discussion: number;
        group: number;
        link: number;
        location: number;
        person: number;
        pinned: number;
        quote: number;
        reading: number;
        alert: number;
    };
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
    type DefaultIconNames = "alarm" | "alert" | "attachment" | "biography" | "book" | "caution" | "check" | "clock" | "close" | "code" | "compass" | "compass" | "computer" | "contact" | "dash" | "discussion" | "double-check" | "down" | "download" | "draft" | "error" | "external" | "fail" | "forbidden" | "group" | "hidden" | "info" | "left" | "lightbulb" | "lightning" | "link" | "location" | "lock" | "logo-facebook" | "logo-instagram" | "logo-linkedin" | "maximum" | "minimum" | "minus" | "no" | "note" | "paperclip" | "person" | "pinned" | "plus" | "private" | "question" | "quote" | "reading" | "refresh" | "right" | "search" | "settings" | "star" | "success" | "ui-check" | "ui-minimum" | "ui" | "unlock" | "up" | "warning";
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
            aliasOf?: undefined | DefaultIconNames | T_ExtraIconNames | (DefaultIconNames | T_ExtraIconNames)[];
            codepoint?: undefined | number;
            isDefault?: undefined | true;
            replaceFontGlyph?: undefined | DefaultIconNames | T_ExtraIconNames;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ScssVars<T_IconName extends string, T_ExtraIconNames extends string> = Omit<SvgMaker.ScssVars<T_IconName, Meta<T_ExtraIconNames>>, 'meta'> & {
            fontGlyph?: undefined | string;
            replaceFontGlyph?: Meta<T_ExtraIconNames>['replaceFontGlyph'];
        };
    }
}
