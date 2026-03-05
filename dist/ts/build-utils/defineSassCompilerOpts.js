/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { sassCompilerOpts } from '@maddimathon/utility-sass';
import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';
/**
 * Defines on the sass compiler options part of the build-utilities config.
 */
export function defineSassCompilerOpts(args, partial) {
    const partialSassArgs = typeof partial === 'function'
        ? partial(args) ?? {}
        : partial ?? {};
    const themeFlattenGetValues = sassFn_themeFlattenGetValues();
    const functions = {
        [themeFlattenGetValues[0]]: themeFlattenGetValues[1],
    };
    // @ts-ignore
    return sassCompilerOpts(args, {
        ...partialSassArgs ?? {},
        functions: {
            ...partialSassArgs['functions'] ?? {},
            ...functions,
        },
    });
}
