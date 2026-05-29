/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { sassCompilerOpts } from '@maddimathon/utility-sass';
import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';
/**
 * Defines on the sass compiler options part of the build-utilities config.
 *
 * @since 0.1.0-beta.0.draft
 */
export function defineSassCompilerOpts(stage, partial) {
    const partialSassArgs = typeof partial === 'function'
        ? partial(stage) ?? {}
        : partial ?? {};
    const themeFlattenGetValues = sassFn_themeFlattenGetValues();
    const functions = {
        [themeFlattenGetValues[0]]: themeFlattenGetValues[1],
    };
    return sassCompilerOpts(stage, {
        ...partialSassArgs ?? {},
        functions: {
            ...partialSassArgs['functions'] ?? {},
            ...functions,
        },
    });
}
