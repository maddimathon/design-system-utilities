/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { JsonToScss } from '@maddimathon/utility-sass';
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export class AbstractTokens {
    input;
    constructor(input) {
        this.input = input;
    }
    toJSON() {
        return this.export();
    }
    toSCSS() {
        return JsonToScss.convert(this.export()) || '()';
    }
    valueOf() {
        return this.export();
    }
}
//# sourceMappingURL=AbstractTokens.js.map