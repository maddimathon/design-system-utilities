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
    readonly data: Tokens_Icons.Data<T_ExtraIconNames>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static get defaultCodepoints(): {
        alarm: 0xf148;
        alert: 0xf154;
        attachment: 0xf101;
        biography: 0xf149;
        book: 0xf14a;
        caution: 0xf102;
        check: 0xf103;
        clock: 0xf104;
        close: 0xf105;
        code: 0xf106;
        compass: 0xf107;
        computer: 0xf147;
        contact: 0xf14b;
        dash: 0xf108;
        disabled: 0xf15d;
        discussion: 0xf14c;
        'double-check': 0xf109;
        down: 0xf110;
        download: 0xf111;
        draft: 0xf112;
        error: 0xf113;
        external: 0xf114;
        fail: 0xf115;
        forbidden: 0xf116;
        group: 0xf14d;
        hidden: 0xf117;
        info: 0xf118;
        left: 0xf119;
        lightbulb: 0xf120;
        lightning: 0xf121;
        link: 0xf14e;
        location: 0xf14f;
        lock: 0xf122;
        'logo-facebook': 0xf123;
        'logo-instagram': 0xf124;
        'logo-linkedin': 0xf125;
        'logo-circle-facebook': 0xf155;
        'logo-circle-instagram': 0xf156;
        'logo-circle-linkedin': 0xf157;
        maximum: 0xf126;
        minimum: 0xf127;
        minus: 0xf128;
        no: 0xf129;
        note: 0xf130;
        paperclip: 0xf131;
        person: 0xf150;
        pinned: 0xf151;
        plus: 0xf132;
        private: 0xf133;
        question: 0xf134;
        quote: 0xf152;
        reading: 0xf153;
        refresh: 0xf135;
        reset: 0xf15e;
        right: 0xf136;
        search: 0xf137;
        settings: 0xf138;
        singlecolumn: 0xf15b;
        star: 0xf139;
        stopwatch: 0xf159;
        submit: 0xf15f;
        success: 0xf140;
        timer: 0xf15a;
        toggle: 0xf158;
        twocolumns: 0xf15c;
        ui: 0xf141;
        'ui-check': 0xf142;
        'ui-minimum': 0xf143;
        unlock: 0xf144;
        up: 0xf145;
        warning: 0xf146;
    };
    static get default(): {
        [I in Tokens_Icons.DefaultIcon]: Tokens_Icons.Local_SvgMaker.Data<I, never>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    protected static getCodepointCounter<T_ExtraIconNames extends string>(input: Tokens_Icons.InputParam<T_ExtraIconNames> | Tokens_Icons.Data<T_ExtraIconNames>): {
        newCodepoint: () => number;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    private static build_entryMapper;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static build<T_ExtraIconNames extends string>(fontName: string, input: Tokens_Icons.InputParam<T_ExtraIconNames>): Tokens_Icons<T_ExtraIconNames>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    static buildAsync<T_ExtraIconNames extends string>(fontName: string, input: Tokens_Icons.InputParam<T_ExtraIconNames>): Promise<Tokens_Icons<T_ExtraIconNames>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    protected _font: undefined | Awaited<ReturnType<typeof this.toIconFont>>;
    /**
     * @since 0.1.0-beta.0.draft
     */
    get font(): undefined | Awaited<ReturnType<typeof this.toIconFont>>;
    /**
     * @since 0.1.0-beta.0.draft — Made protected. Added fontName param as first.
     *                            Replaced input param with data. See
     *                            {@link Tokens_Icons.build} and
     *                            {@link Tokens_Icons.buildAsync}.
     */
    protected constructor(fontName: string, data: Tokens_Icons.Data<T_ExtraIconNames>);
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
     * @since 0.1.0-beta.0.draft
     */
    const optionalIconNames: readonly ["alarm", "alert", "attachment", "biography", "book", "clock", "code", "compass", "compass", "computer", "contact", "dash", "discussion", "down", "draft", "error", "forbidden", "group", "hidden", "info", "left", "lightbulb", "lightning", "link", "location", "lock", "logo-circle-facebook", "logo-circle-instagram", "logo-circle-linkedin", "logo-facebook", "logo-instagram", "logo-linkedin", "minus", "no", "note", "paperclip", "person", "pinned", "plus", "private", "question", "quote", "reading", "refresh", "right", "singlecolumn", "star", "stopwatch", "success", "timer", "twocolumns", "unlock", "up", "warning"];
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type OptionalIcon = typeof optionalIconNames[number];
    /**
     * @since 0.1.0-beta.0.draft
     */
    export function isOptionalIcon(name: string): name is OptionalIcon;
    /**
     * @since 0.1.0-beta.0.draft
     */
    const requiredIconNames: readonly ["caution", "check", "close", "disabled", "double-check", "download", "external", "fail", "maximum", "minimum", "reset", "search", "settings", "star", "submit", "toggle", "ui-check", "ui-minimum", "ui"];
    /**
     * The types are required to enable core functionality. Any others can be
     * removed or replaced in your configuration by setting them to `undefined`.
     *
     * @since 0.1.0-beta.0.draft
     */
    export type RequiredIcon = typeof requiredIconNames[number];
    /**
     * @since 0.1.0-beta.0.draft
     */
    export function isRequiredIcon(name: string): name is RequiredIcon;
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft Renamed from DefaultIconNames to DefaultIcon.
     */
    export type DefaultIcon = RequiredIcon | OptionalIcon;
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type Codepoints<T_ExtraIconNames extends string> = {
        [I in DefaultIcon]: number;
    } & {
        [I in T_ExtraIconNames]: number;
    };
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Switched to T_IconTypes type param.
     */
    export type Data<T_ExtraIconNames extends string> = {
        [I in RequiredIcon]: Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    } & {
        [I in OptionalIcon]: undefined | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Removed undefined as an option and replaced with false for more explicit excludion of default icons. Switched to T_IconTypes type param.
     */
    export type InputParam<T_ExtraIconNames extends string> = Partial<{
        [I in RequiredIcon]?: Partial<Local_SvgMaker.Data<I, T_ExtraIconNames>> | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    }> & {
        [I in OptionalIcon]?: false | Partial<Local_SvgMaker.Data<I, T_ExtraIconNames>> | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.Data<I, T_ExtraIconNames> | Local_SvgMaker.Instance<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Switched to T_IconTypes type param.
     */
    export type JsonReturn<T_ExtraIconNames extends string> = {
        [I in RequiredIcon]: Local_SvgMaker.JsonReturn<I, T_ExtraIconNames>;
    } & {
        [I in OptionalIcon]?: Local_SvgMaker.JsonReturn<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.JsonReturn<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    export type ScssVars<T_ExtraIconNames extends string> = {
        [I in RequiredIcon]: Local_SvgMaker.ScssVars<I, T_ExtraIconNames>;
    } & {
        [I in OptionalIcon]: undefined | Local_SvgMaker.ScssVars<I, T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: Local_SvgMaker.ScssVars<I, T_ExtraIconNames>;
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    export namespace Local_SvgMaker {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Data<T_IconName extends string, T_ExtraIcons extends string> = SvgMaker.Data<T_IconName, Meta<T_ExtraIcons>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Instance<T_IconName extends string, T_ExtraIcons extends string> = SvgMaker<T_IconName, Meta<T_ExtraIcons>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type JsonReturn<T_IconName extends string, T_ExtraIcons extends string> = SvgMaker.JsonReturn<T_IconName, Meta<T_ExtraIcons>>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Meta<T_ExtraIcons extends string> = {
            aliasOf?: undefined | DefaultIcon | T_ExtraIcons | (DefaultIcon | T_ExtraIcons)[];
            codepoint?: undefined | number;
            isDefault?: undefined | true;
            replaceFontGlyph?: undefined | DefaultIcon | T_ExtraIcons;
        };
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ScssVars<T_IconName extends string, T_ExtraIcons extends string> = Omit<SvgMaker.ScssVars<T_IconName, Meta<T_ExtraIcons>>, 'meta'> & {
            fontGlyph?: undefined | string;
            replaceFontGlyph?: Meta<T_ExtraIcons>['replaceFontGlyph'];
        };
    }
    export {};
}
