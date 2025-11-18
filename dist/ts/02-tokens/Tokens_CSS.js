/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4.draft
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_CSS_Border } from './CSS/CSS_Border.js';
import { Tokens_CSS_Style } from './CSS/CSS_Style.js';
import { Tokens_CSS_Transition } from './CSS/CSS_Transition.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_CSS extends AbstractTokens {
    static get default() {
        return {
            zIndex: {
                nav: 1000,
                popup: 999999,
                settings: 9999,
                skipLink: 99999,
            },
        };
    }
    get data() {
        return {
            border: this.border,
            style: this.style,
            transition: this.transition,
            zIndex: this.zIndex,
        };
    }
    border;
    style;
    transition;
    zIndex;
    constructor(input) {
        super();
        this.border = new Tokens_CSS_Border(input.border ?? {});
        this.style = new Tokens_CSS_Style(input.style ?? {});
        this.transition = new Tokens_CSS_Transition(input.transition ?? {});
        this.zIndex = mergeArgs(Tokens_CSS.default.zIndex, input.zIndex);
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return {
            border: this.border.toScssVars(),
            style: this.style.toScssVars(),
            transition: this.transition.toScssVars(),
            z_index: this.data.zIndex,
        };
    }
}
//# sourceMappingURL=Tokens_CSS.js.map