/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_CSS_Styles extends AbstractTokens {
    static headingStyle(heading) {
        const styles = {
            font: {
                style: 'normal',
                weight: '600',
            },
            'letter-spacing': 'normal',
            'line-height': '400',
            'text-transform': 'none',
            margin: {
                block: {
                    start: '600',
                    end: '400',
                },
            },
        };
        return styles;
    }
    static get default() {
        return {
            heading: objectGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (hdg) => Tokens_CSS_Styles.headingStyle(hdg)),
        };
    }
    // public get data(): Tokens_CSS_Styles.Data {
    //     return {};
    // }
    data;
    constructor(input) {
        super();
        this.data = mergeArgs(Tokens_CSS_Styles.default, input, true);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return this.data;
    }
}
//# sourceMappingURL=CSS_Styles.js.map