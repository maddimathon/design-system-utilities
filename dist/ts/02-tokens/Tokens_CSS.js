/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript';
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
    border;
    style;
    transition;
    zIndex;
    /**
     * Builds tokens faster.
     *
     * @since 0.1.0-beta.0.draft
     */
    static async build(input) {
        return Tokens_CSS_Style.build(input.style ?? {}).then(style => new Tokens_CSS(new Tokens_CSS_Border(input.border ?? {}), style, new Tokens_CSS_Transition(input.transition ?? {}), mergeArgs(Tokens_CSS.default.zIndex, input.zIndex)));
    }
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
    constructor(border, style, transition, zIndex) {
        super();
        this.border = border;
        this.style = style;
        this.transition = transition;
        this.zIndex = zIndex;
    }
    toJSON() {
        return {
            border: this.border.toJSON(),
            style: this.style.toJSON(),
            transition: this.transition.toJSON(),
            zIndex: this.data.zIndex,
        };
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
