/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import * as Schemata from '../../00-schemata/index.js';
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Typography extends AbstractTokens {
    tokens_spacing;
    get schema() {
        return Schemata.Tokens.shape.typography;
    }
    lineHeight;
    size;
    constructor(tokens_spacing, input) {
        super(input ?? {});
        this.tokens_spacing = tokens_spacing;
        const schemata = Schemata.Tokens.shape.typography.shape;
        this.lineHeight = schemata.lineHeight.parse(input?.lineHeight ?? {});
        this.size = {
            title: schemata.size.shape.title.parse(input?.size?.title),
            heading: schemata.size.shape.heading.parse(input?.size?.heading ?? {}),
            smaller: schemata.size.shape.smaller.parse(input?.size?.smaller ?? {}),
            normal: schemata.size.shape.normal.parse(input?.size?.normal),
            bigger: schemata.size.shape.bigger.parse(input?.size?.bigger ?? {}),
        };
    }
    export() {
        return {
            lineHeight: this.lineHeight,
            size: this.size,
        };
    }
    toScssVars() {
        return this.export();
    }
    toJSON() {
        const size_mapper = (base, _opts) => {
            const opts = {
                roundToPixel: true,
                multiplier: this.tokens_spacing.multiplier,
                ..._opts,
            };
            const _converter = (_val) => {
                let _rem = Math.pow(opts.multiplier, _val) * base;
                if (opts.roundToPixel) {
                    _rem = this.roundToPixel(_rem, opts.roundToPixel_factor);
                }
                return _rem;
            };
            return {
                title: _converter(this.size.title),
                heading: this.objectMap(this.size.heading, (key, value) => key && _converter(value)),
                smaller: this.objectMap(this.size.smaller, (key, value) => key && _converter(value)),
                normal: _converter(this.size.normal),
                bigger: this.objectMap(this.size.bigger, (key, value) => key && _converter(value)),
            };
        };
        return {
            ...this.export(),
            size: {
                rem: size_mapper(1, { roundToPixel: true }),
                pt: size_mapper(11, { roundToPixel: true, roundToPixel_factor: 2 }),
                px: size_mapper(16, { roundToPixel: true, roundToPixel_factor: 1 }),
            },
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_Typography) {
    ;
    ;
})(Tokens_Typography || (Tokens_Typography = {}));
//# sourceMappingURL=Typography.js.map