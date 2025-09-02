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
export class Tokens_CSS_Border extends AbstractTokens {
    get schema() {
        return Schemata.Tokens.shape.CSS.shape.border;
    }
    radius;
    stroke;
    width;
    constructor(input) {
        super(input ?? {});
        this.radius = this.objectMap(Schemata.Tokens.shape.CSS.shape.border.shape.radius.parse(input?.radius ?? {}), (key, value) => key && this.roundToPixel(value, 32));
        this.stroke = this.objectMap(Schemata.Tokens.shape.CSS.shape.border.shape.stroke.parse(input?.stroke ?? {}), (key, value) => key && this.roundToPixel(value, 32));
        this.width = this.objectMap(Schemata.Tokens.shape.CSS.shape.border.shape.width.parse(input?.width ?? {}), (key, value) => key && this.roundToPixel(value, 32));
    }
    export() {
        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }
    toJSON() {
        return this.export();
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
(function (Tokens_CSS_Border) {
    ;
})(Tokens_CSS_Border || (Tokens_CSS_Border = {}));
//# sourceMappingURL=CSS_Border.js.map