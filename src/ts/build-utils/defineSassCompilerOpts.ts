/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type * as sass from 'sass-embedded';

import type {
    Stage,
} from '@maddimathon/build-utilities';

import { sassCompilerOpts } from '@maddimathon/utility-sass';

import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';

/**
 * Defines on the sass compiler options part of the build-utilities config.
 * 
 * @since ___PKG_VERSION___
 */
export function defineSassCompilerOpts(
    stage: Stage,
    partial?: Partial<Stage.Compiler.Args.Sass> | Stage.Compiler.Args.Sass | ( ( stage: Stage ) => Partial<Stage.Compiler.Args.Sass> ),
) {
    const partialSassArgs = typeof partial === 'function'
        ? partial( stage ) ?? {}
        : partial ?? {};

    const themeFlattenGetValues = sassFn_themeFlattenGetValues();

    const functions = {
        [ themeFlattenGetValues[ 0 ] ]: themeFlattenGetValues[ 1 ],
    };

    return sassCompilerOpts( stage, {
        ...partialSassArgs ?? {},

        functions: {
            ...partialSassArgs[ 'functions' ] ?? {},
            ...functions,
        },
    } ) satisfies sass.Options<'async'> as sass.Options<'async'>;
}