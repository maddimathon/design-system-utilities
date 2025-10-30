/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.1
 * @license MIT
 */
/**
 * The object that defines a single SVG token.
 *
 * @since 0.1.0-alpha
 */
export declare class SvgMaker implements SvgMaker.Data {
    /**
     * An implementation of euclid's algorithm to find the greatest common
     * denominator of two numbers.
     *
     * @see {@link https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm} Used as reference.
     */
    static greatestCommonDenominator(a: number, b: number): number;
    static simplifyRatio(a: number, b: number): [number, number];
    static svgAttrString(width: number, height: number, attrs?: string[]): string;
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
    constructor(data: SvgMaker.Data, svgAttrs?: string[]);
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
 * Utilities for the {@link SvgMaker} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace SvgMaker {
    /**
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
     */
    type JsonReturn = ReturnType<SvgMaker['toJSON']>;
}
//# sourceMappingURL=SvgMaker.d.ts.map