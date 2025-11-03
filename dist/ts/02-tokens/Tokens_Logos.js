/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { objectMap } from '../01-utilities/objectMap.js';
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Logos extends AbstractTokens {
    data;
    constructor(input) {
        super();
        this.data = objectMap(input, ({ value }) => (value instanceof SvgMaker
            ? value
            : value && new SvgMaker(value)));
    }
    toJSON() {
        return objectMap(this.data, ({ value }) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ({ value }) => ({
            label: value.label,
            height: value.height,
            width: value.width,
            aspectRatio: value.aspectRatio[0] === value.aspectRatio[1]
                ? value.aspectRatio[0]
                : value.aspectRatio.join(' / '),
            embedded: `url( 'data:image/svg+xml;utf8,${value.svg}' )`
        }));
    }
}
//# sourceMappingURL=Tokens_Logos.js.map