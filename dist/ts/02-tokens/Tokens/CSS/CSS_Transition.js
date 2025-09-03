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
import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_CSS_Transition extends AbstractTokens {
    get schema() {
        return Tokens_CSS_Transition.Schema;
    }
    /**
     * Transition time values for CSS.
     *
     * Default keys are 'fast', 'normal', 'slow'.
     */
    time;
    constructor(input) {
        super(input ?? {});
        this.time = this.parseSchema(this.schema.shape.time, input?.time ?? {}, {
            name: 'Tokens_CSS_Transition',
            location: 'src/ts/02-tokens/Tokens/CSS/CSS_Transition.ts:49',
        });
    }
    valueOf() {
        return {
            time: this.time,
        };
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return this.valueOf();
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_CSS_Transition) {
    const transitionTime = z.string().regex(/^\d+m?s$/);
    Tokens_CSS_Transition.Schema = z.object({
        time: z.object({
            fast: transitionTime.default('250ms'),
            normal: transitionTime.default('500ms'),
            slow: transitionTime.default('750ms'),
        }).and(z.record(z.string(), transitionTime)),
    });
    ;
    ;
    ;
})(Tokens_CSS_Transition || (Tokens_CSS_Transition = {}));
//# sourceMappingURL=CSS_Transition.js.map