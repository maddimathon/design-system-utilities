/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0
 * @license MIT
 */
/**
 * The object that defines a single SVG token.
 *
 * @since 0.1.0-alpha
 */
export class SvgMaker {
    svgAttrs;
    /**
     * An implementation of euclid's algorithm to find the greatest common
     * denominator of two numbers.
     *
     * @see {@link https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm} Used as reference.
     */
    static greatestCommonDenominator(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        // returns = "if a = 0 then GCD( a, b ) = b, since the GCD( 0, b ) = b"
        if (!a) {
            return b;
        }
        // returns = "if b = 0 then GCD( a, b ) = a, since the GCD( a, 0 ) = a"
        if (!b) {
            return a;
        }
        const [smaller, // new B
        larger, // new A
        ] = (a < b) ? [a, b] : [b, a];
        // find the remainder of `larger` / `smaller`
        const remainder = larger % smaller;
        // find GCD( `smaller`, `remainder` ) using the Euclidean Algorithm since GCD( `larger`, `smaller` ) = GCD( `smaller`, `remainder` )
        return SvgMaker.greatestCommonDenominator(smaller, remainder);
    }
    static simplifyRatio(a, b) {
        const gcd = SvgMaker.greatestCommonDenominator(a, b);
        return [
            (a / gcd),
            (b / gcd),
        ];
    }
    slug;
    label;
    ariaLabel;
    height;
    width;
    aspectRatio;
    innerSVG;
    constructor(data, svgAttrs = []) {
        this.svgAttrs = svgAttrs;
        this.slug = data.slug;
        this.label = data.label;
        this.ariaLabel = data.ariaLabel ?? this.label;
        this.height = data.height;
        this.width = data.width;
        this.innerSVG = data.innerSVG;
        this.aspectRatio = SvgMaker.simplifyRatio(this.width, this.height);
    }
    /**
     * @deprecated 0.1.1-alpha.0 — Use this.svgInline instead.
     */
    svg() {
        return this.svgInlineHidden();
    }
    svgAttrString(attrs = []) {
        return [
            `viewBox="0 0 ${this.width} ${this.height}"`,
            `width="100%"`,
            `height="100%"`,
            'version="1.1"',
            'xmlns="http://www.w3.org/2000/svg"',
            'xml:space="preserve"',
            ...this.svgAttrs,
            ...attrs,
        ].join(' ');
    }
    svgCssEmbedded() {
        return `<svg ${this.svgAttrString([
            `title="${this.ariaLabel} icon"`,
        ])}>${this.innerSVG}</svg>`.replace(/\s*\n+\s*/g, '');
    }
    svgFile() {
        return [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
            `<svg ${this.svgAttrString([
                `title="${this.ariaLabel} icon"`,
            ])}>${this.innerSVG}</svg>`,
        ].join('\n');
    }
    svgInlineHidden() {
        return `<svg ${this.svgAttrString([
            `aria-hidden="true"`,
            `focusable="false"`,
            `title="${this.ariaLabel} icon"`,
        ])}>${this.innerSVG}</svg>`;
    }
    svgInlineLabelled() {
        return `<svg ${this.svgAttrString([
            `aria-label="${this.ariaLabel} icon"`,
            'focusable="false"',
            'role="img"',
        ])}><title>${this.ariaLabel} icon</title>${this.innerSVG}</svg>`;
    }
    toJSON() {
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
    toScssVars() {
        return {
            slug: this.slug,
            label: this.label,
            height: this.height,
            width: this.width,
            aspectRatio: this.aspectRatio[0] === this.aspectRatio[1]
                ? this.aspectRatio[0].toString()
                : this.aspectRatio.join(' / '),
            embedded: `url( 'data:image/svg+xml;utf8,${this.svgCssEmbedded()}' )`
        };
    }
}
/**
 * Utilities for the {@link SvgMaker} class.
 *
 * @since 0.1.0-alpha
 */
(function (SvgMaker) {
    ;
})(SvgMaker || (SvgMaker = {}));
