/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0.draft
 * @license MIT
 */
/**
 * The object that defines a single SVG token.
 *
 * @since 0.1.0-alpha
 */
export declare class SvgMaker<T_Slug extends string = string> implements SvgMaker.Data<T_Slug> {
    protected readonly svgAttrs: string[];
    /**
     * An implementation of euclid's algorithm to find the greatest common
     * denominator of two numbers.
     *
     * @see {@link https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm} Used as reference.
     */
    static greatestCommonDenominator(a: number, b: number): number;
    static simplifyRatio(a: number, b: number): [number, number];
    readonly slug: T_Slug;
    readonly label: string;
    readonly ariaLabel: string;
    readonly height: number;
    readonly width: number;
    readonly aspectRatio: [number, number];
    readonly innerSVG: string;
    constructor(data: SvgMaker.Data<T_Slug>, svgAttrs?: string[]);
    /**
     * @deprecated 0.1.1-alpha.0.draft — Use this.svgInline instead.
     */
    svg(): string;
    svgAttrString(attrs?: string[]): string;
    svgCssEmbedded(): string;
    svgFile(): string;
    svgInlineHidden(): string;
    svgInlineLabelled(): string;
    toJSON(): SvgMaker.JsonReturn<T_Slug>;
    toScssVars(): SvgMaker.ScssVars<T_Slug>;
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
    interface Data<T_Slug extends string = string> {
        /**
         * The slugified name of this icon as displayed in code (e.g., props, css).
         */
        slug: T_Slug;
        /**
         * The human-readable name of this icon as displayed for users
         * (including via screen-readers).
         */
        label: string;
        /**
         * An override for the accessible name for this logo.
         */
        ariaLabel?: string;
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
    type JsonReturn<T_Slug extends string = string> = Required<Data<T_Slug>> & {
        /**
         * Aspect ratio for the SVG (simplified from the wodth & height).
         */
        aspectRatio: [number, number];
        /**
         * Just the base attribute string for this SVG.
         */
        svgAttrString: string;
        /**
         * Contents of the SVG formatted to be saved as a .svg file.
         */
        svgFile: string;
        /**
         * SVG for embedding in CSS.
         */
        svgCssEmbedded: string;
        /**
         * HTML-compliant SVG for an icon hidden from screen-readers.
         */
        svgInlineHidden: string;
        /**
         * HTML-compliant SVG for an icon labelled for screen-readers.
         */
        svgInlineLabelled: string;
    };
    /**
     * @since 0.1.1-alpha.0.draft
     */
    type ScssVars<T_Slug extends string = string> = Omit<JsonReturn<T_Slug>, "ariaLabel" | "aspectRatio" | "innerSVG" | "svgAttrString" | "svgFile" | "svgCssEmbedded" | "svgInlineHidden" | "svgInlineLabelled"> & {
        aspectRatio: string;
        embedded: string;
    };
}
//# sourceMappingURL=SvgMaker.d.ts.map