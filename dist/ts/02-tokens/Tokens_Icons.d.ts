/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Icons<T_ExtraIconNames extends string> extends AbstractTokens<Tokens_Icons.Data<T_ExtraIconNames>> {
    static get default(): {
        [K in keyof Tokens_Icons.Data<never>]: Tokens_Icons.SvgIcon.Data;
    };
    readonly data: Tokens_Icons.Data<T_ExtraIconNames>;
    constructor(input: Tokens_Icons.InputParam<T_ExtraIconNames>);
    toJSON(): Tokens_Icons.JsonReturn<T_ExtraIconNames>;
    toScssVars(): {
        [K in keyof Tokens_Icons.Data<T_ExtraIconNames>]: {
            label: string;
            height: number;
            width: number;
            embedded: string;
        };
    };
}
/**
 * Utilities for the {@link Tokens_Icons} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Icons {
    /**
     * @since 0.1.0-alpha.draft
     */
    type DefaultIconNames = "check" | "clock" | "compass" | "dash" | "double-check" | "down" | "external" | "fail" | "forbidden" | "left" | "lightbulb" | "lightning" | "maximum" | "minimum" | "minus" | "no" | "plus" | "question" | "refresh" | "right" | "search" | "settings" | "star" | "ui" | "ui-check" | "ui-minimum" | "up" | "warning";
    /**
     * @since 0.1.0-alpha.draft
     */
    type Data<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: SvgIcon;
    } & {
        [I in T_ExtraIconNames]: SvgIcon;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type InputParam<T_ExtraIconNames extends string> = Partial<{
        [I in DefaultIconNames]?: undefined | SvgIcon | Partial<Tokens_Icons.SvgIcon.Data>;
    }> & {
        [I in T_ExtraIconNames]?: Tokens_Icons.SvgIcon.Data | SvgIcon;
    };
    /**
     * @since 0.1.0-alpha.draft
     */
    type JsonReturn<T_ExtraIconNames extends string> = {
        [I in DefaultIconNames]: SvgIcon.JsonReturn;
    } & {
        [I in T_ExtraIconNames]: SvgIcon.JsonReturn;
    };
    /**
     * The object that defines a single SVG token.
     *
     * @since 0.1.0-alpha.draft
     */
    class SvgIcon implements SvgIcon.Data {
        /**
         * An implementation of euclid's algorithm to find the greatest common
         * denominator of two numbers.
         *
         * @see {@link https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm} Used as reference.
         */
        static greatestCommonDenominator(a: number, b: number): number;
        static simplifyRatio(a: number, b: number): [number, number];
        static svgAttrString(label: string, width: number, height: number): string;
        static svg(svgAttrString: string, innerSVG: string): string;
        static svgFile(svg: string): string;
        readonly slug: string;
        readonly label: string;
        readonly height: number;
        readonly width: number;
        readonly aspectRatio: [number, number];
        readonly innerSVG: string;
        readonly svg: string;
        readonly svgFile: string;
        readonly svgAttrString: string;
        constructor(data: SvgIcon.Data);
        toJSON(): {
            slug: string;
            label: string;
            height: number;
            width: number;
            aspectRatio: [number, number];
            innerSVG: string;
            svgAttrString: string;
            svg: string;
        };
    }
    /**
     * Utilities for the {@link SvgIcon} class.
     *
     * @since 0.1.0-alpha.draft
     */
    namespace SvgIcon {
        /**
         * @since 0.1.0-alpha.draft
         */
        interface Data {
            /**
             * The slugified name of this icon as displayed in code (e.g., props, css).
             */
            slug: string;
            /**
             * The human-readable name of this icon as displayed for users
             * (including via screen-readers).
             */
            label: string;
            /**
             * Height of the SVG viewport.
             */
            height: number;
            /**
             * Width of the SVG viewport.
             */
            width: number;
            /**
             * The paths and shapes to be included inside a <svg> element.
             */
            innerSVG: string;
        }
        /**
         * @since 0.1.0-alpha.draft
         */
        type JsonReturn = ReturnType<SvgIcon['toJSON']>;
    }
}
//# sourceMappingURL=Tokens_Icons.d.ts.map