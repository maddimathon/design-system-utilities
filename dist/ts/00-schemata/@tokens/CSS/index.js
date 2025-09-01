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
/* # SCHEMA
 * ========================================================================== */
const transitionTime = z.string().regex(/^\d+m?s$/);
export const CSS = z.object({
    transition: z.object({
        time: z.object({
            fast: transitionTime.default('250ms'),
            normal: transitionTime.default('500ms'),
            slow: transitionTime.default('750ms'),
        }).and(z.record(z.string(), transitionTime)),
    }),
});
;
//# sourceMappingURL=index.js.map