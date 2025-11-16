/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.3
 * @license MIT
 */
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Icons<T_ExtraIconNames extends string> extends AbstractTokens<Tokens_Icons.Data<T_ExtraIconNames>> {
    static get default(): {
        [I in keyof Tokens_Icons.Data<never>]: SvgMaker.Data<I>;
    };
    readonly data: Tokens_Icons.Data<T_ExtraIconNames>;
    constructor(input: Tokens_Icons.InputParam<T_ExtraIconNames>);
    toJSON(): Tokens_Icons.JsonReturn<T_ExtraIconNames>;
    toScssVars(): {
        [K in Tokens_Icons.DefaultIconNames | T_ExtraIconNames]: {
            slug: Tokens_Icons.DefaultIconNames | T_ExtraIconNames;
            label: string;
            height: number;
            width: number;
            aspectRatio: string;
            embedded: string;
        };
    };
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
    type DefaultIconNames = "check" | "clock" | "compass" | "dash" | "double-check" | "down" | "external" | "fail" | "forbidden" | "left" | "lightbulb" | "lightning" | "maximum" | "minimum" | "minus" | "no" | "plus" | "question" | "refresh" | "right" | "search" | "settings" | "star" | "ui" | "ui-check" | "ui-minimum" | "up" | "warning";
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: SvgIcon<I>;
    } & {
        [I in T_ExtraIconNames]: SvgIcon<I>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ExtraIconNames extends string> = Partial<{
        [I in DefaultIconNames]?: undefined | SvgIcon<I> | Partial<SvgMaker.Data<I>>;
    }> & {
        [I in T_ExtraIconNames]?: SvgMaker.Data<I> | SvgIcon<I>;
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: SvgMaker.JsonReturn<T_ExtraIconNames>;
    } & {
        [I in T_ExtraIconNames]: SvgMaker.JsonReturn<T_ExtraIconNames>;
    };
    /**
     * The object that defines a single SVG token.
     *
     * @since 0.1.0-alpha
     */
    class SvgIcon<T_Slug extends string = string> extends SvgMaker<T_Slug> {
        constructor(data: SvgMaker.Data<T_Slug>);
    }
}
//# sourceMappingURL=Tokens_Icons.d.ts.map