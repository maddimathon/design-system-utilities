/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */


/**
 * The object that defines a single SVG token.
 * 
 * @since 0.1.0-alpha
 */
export class SvgMaker<
    T_Slug extends string = string,
> implements SvgMaker.Data<T_Slug> {

    /**
     * An implementation of euclid's algorithm to find the greatest common 
     * denominator of two numbers.
     * 
     * @see {@link https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm} Used as reference.
     */
    public static greatestCommonDenominator(
        a: number,
        b: number,
    ): number {
        a = Math.abs( a );
        b = Math.abs( b );

        // returns = "if a = 0 then GCD( a, b ) = b, since the GCD( 0, b ) = b"
        if ( !a ) {
            return b;
        }

        // returns = "if b = 0 then GCD( a, b ) = a, since the GCD( a, 0 ) = a"
        if ( !b ) {
            return a;
        }

        const [
            smaller, // new B
            larger, // new A
        ] = ( a < b ) ? [ a, b ] : [ b, a ];

        // find the remainder of `larger` / `smaller`
        const remainder = larger % smaller;

        // find GCD( `smaller`, `remainder` ) using the Euclidean Algorithm since GCD( `larger`, `smaller` ) = GCD( `smaller`, `remainder` )
        return SvgMaker.greatestCommonDenominator( smaller, remainder );
    }

    public static simplifyRatio(
        a: number,
        b: number,
    ): [ number, number ] {

        const gcd = SvgMaker.greatestCommonDenominator( a, b );

        return [
            ( a / gcd ),
            ( b / gcd ),
        ];
    }

    public readonly slug: T_Slug;
    public readonly label: string;
    public readonly ariaLabel: string;

    public readonly height: number;
    public readonly width: number;
    public readonly aspectRatio: [ number, number ];

    public readonly innerSVG: string;

    public constructor (
        data: SvgMaker.Data<T_Slug>,
        protected readonly svgAttrs: string[] = []
    ) {
        this.slug = data.slug;
        this.label = data.label;
        this.ariaLabel = data.ariaLabel ?? this.label;
        this.height = data.height;
        this.width = data.width;
        this.innerSVG = data.innerSVG;

        this.aspectRatio = SvgMaker.simplifyRatio( this.width, this.height );
    }

    public svgAttrString( attrs: string[] = [] ) {
        return [
            `viewBox="0 0 ${ this.width } ${ this.height }"`,

            `width="100%"`,
            `height="100%"`,

            'version="1.1"',
            'xmlns="http://www.w3.org/2000/svg"',
            'xml:space="preserve"',

            ...this.svgAttrs,
            ...attrs,
        ].join( ' ' );
    }

    public svgCssEmbedded() {
        return `<svg ${ this.svgAttrString( [
            `title="${ this.ariaLabel } icon"`,
        ] ) }>${ this.innerSVG }</svg>`.replace( /\s*\n+\s*/g, '' );
    }

    public svgFile() {
        return [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',

            `<svg ${ this.svgAttrString( [
                `title="${ this.ariaLabel } icon"`,
            ] ) }>${ this.innerSVG }</svg>`,
        ].join( '\n' );
    }

    public svgInlineHidden() {
        return `<svg ${ this.svgAttrString( [
            `aria-hidden="true"`,
            `focusable="false"`,
            `title="${ this.ariaLabel } icon"`,
        ] ) }>${ this.innerSVG }</svg>`;
    }

    public svgInlineLabelled() {
        return `<svg ${ this.svgAttrString( [
            `aria-label="${ this.ariaLabel } icon"`,
            'focusable="false"',
            'role="img"',
        ] ) }><title>${ this.ariaLabel } icon</title>${ this.innerSVG }</svg>`;
    }

    public toJSON(): SvgMaker.JsonReturn<T_Slug> {

        return {
            slug: this.slug,
            label: this.label,
            ariaLabel: this.ariaLabel,

            height: this.height,
            width: this.width,
            aspectRatio: this.aspectRatio,

            innerSVG: this.innerSVG,

            svgFile: this.svgFile(),
            svgCssEmbedded: this.svgCssEmbedded(),
            svgInlineHidden: this.svgInlineHidden(),
            svgInlineLabelled: this.svgInlineLabelled(),
            svgAttrString: this.svgAttrString(),
        };
    }

    public toScssVars(): SvgMaker.ScssVars<T_Slug> {

        return {
            slug: this.slug,
            label: this.label,

            height: this.height,
            width: this.width,

            aspectRatio: this.aspectRatio[ 0 ] === this.aspectRatio[ 1 ]
                ? this.aspectRatio[ 0 ].toString()
                : this.aspectRatio.join( ' / ' ),

            embedded: `url( 'data:image/svg+xml;utf8,${ this.svgCssEmbedded() }' )`
        };
    }
}

/**
 * Utilities for the {@link SvgMaker} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace SvgMaker {

    /**
     * @since 0.1.0-alpha
     */
    export interface Data<
        T_Slug extends string = string,
    > {

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
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_Slug extends string = string,
    > = Required<Data<T_Slug>> & {
        /**
         * Aspect ratio for the SVG (simplified from the wodth & height).
         */
        aspectRatio: [ number, number ];

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
     * @since 0.1.1-alpha.0
     */
    export type ScssVars<
        T_Slug extends string = string,
    > = Omit<JsonReturn<T_Slug>, "ariaLabel" | "aspectRatio" | "innerSVG" | "svgAttrString" | "svgFile" | "svgCssEmbedded" | "svgInlineHidden" | "svgInlineLabelled"> & {
        aspectRatio: string;
        embedded: string;
    };
}