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
export class Tokens_Spacing extends AbstractTokens {
    get schema() {
        return Schemata.Tokens.shape.spacing;
    }
    margin;
    multiplier;
    constructor(input) {
        super(input ?? {});
        this.margin = Schemata.Tokens.shape.spacing.shape.margin.parse(input?.margin ?? {});
        this.multiplier = Schemata.Tokens.shape.spacing.shape.multiplier.parse(input?.multiplier);
    }
    export() {
        return {
            multiplier: this.multiplier,
            margin: this.margin,
        };
    }
    toJSON() {
        const _converter = (_val, _opts) => {
            const opts = {
                base: 1,
                multiplier: this.multiplier,
                roundToPixel: true,
                ..._opts,
            };
            let _rem = Math.pow(opts.multiplier, _val) * opts.base;
            if (opts.roundToPixel) {
                _rem = this.roundToPixel(_rem, opts.roundToPixel_factor);
            }
            return _rem;
        };
        const exp = this.export();
        return {
            ...exp,
            margin: {
                rem: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0)),
                pt: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0, {
                    base: 11,
                    roundToPixel: true,
                    roundToPixel_factor: 2,
                })),
                px: this.objectMap(exp.margin, (key, value) => key && _converter(value ?? 0, {
                    base: 16,
                    roundToPixel: true,
                    roundToPixel_factor: 1,
                })),
            },
        };
    }
    toScssVars() {
        return this.export();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_Spacing) {
    ;
    ;
})(Tokens_Spacing || (Tokens_Spacing = {}));
//# sourceMappingURL=Spacing.js.map