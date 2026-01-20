/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.9
 * @license MIT
 */
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
        this.data = objectMap(input, ([key, value]) => (value instanceof SvgMaker
            ? value
            : value && new SvgMaker(value)));
    }
    toJSON() {
        // returns - no logos, so we return undefined instead of an empty object
        if (!Object.keys(this.data).length) {
            return undefined;
        }
        return objectMap(this.data, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ([key, value]) => ({
            label: value.label,
            height: value.height,
            width: value.width,
            aspectRatio: value.aspectRatio[0] === value.aspectRatio[1]
                ? value.aspectRatio[0].toString()
                : value.aspectRatio.join(' / '),
        }));
    }
}
//# sourceMappingURL=Tokens_Logos.js.map