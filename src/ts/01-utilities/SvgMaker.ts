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
export class SvgMaker implements SvgMaker.Data {

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

    public static svgAttrString(
        width: number,
        height: number,

        attrs: string[] = []
    ) {

        return [
            `viewBox="0 0 ${ width } ${ height }"`,

            `width="100%"`,
            `height="100%"`,

            'version="1.1"',
            'xmlns="http://www.w3.org/2000/svg"',
            'xml:space="preserve"',

            ...attrs,
        ].join( ' ' );
    }

    public static svg( svgAttrString: string, innerSVG: string ) {
        return `<svg ${ svgAttrString }>${ innerSVG }</svg>`;
    }

    public static svgFile( svg: string ) {
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">${ svg }`;
    }

    public readonly slug: string;
    public readonly label: string;

    public readonly height: number;
    public readonly width: number;
    public readonly aspectRatio: [ number, number ];

    public readonly innerSVG: string;
    public readonly svg: string;
    public readonly svgFile: string;
    public readonly svgAttrString: string;

    public constructor (
        data: SvgMaker.Data,
        svgAttrs: string[] = []
    ) {
        this.slug = data.slug;
        this.label = data.label;
        this.height = data.height;
        this.width = data.width;
        this.innerSVG = data.innerSVG;

        this.aspectRatio = SvgMaker.simplifyRatio( this.width, this.height );
        this.svgAttrString = SvgMaker.svgAttrString( this.width, this.height, svgAttrs );
        this.svg = SvgMaker.svg( this.svgAttrString, this.innerSVG );
        this.svgFile = SvgMaker.svgFile( this.svg );
    }

    public toJSON() {

        return {
            slug: this.slug,
            label: this.label,

            height: this.height,
            width: this.width,
            aspectRatio: this.aspectRatio,

            innerSVG: this.innerSVG,

            svgAttrString: this.svgAttrString,
            svg: this.svg,
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
    export interface Data {

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
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = ReturnType<SvgMaker[ 'toJSON' ]>;
}