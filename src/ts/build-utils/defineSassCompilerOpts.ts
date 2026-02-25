/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    CLI,
    Config,
    Stage,
} from '@maddimathon/build-utilities';

import type { Logger } from '@maddimathon/build-utilities/internal';

import { sassCompilerOpts } from '@maddimathon/utility-sass';

import { sassFn_themeFlattenGetValues } from './sass-functions/themeFlattenGetValues.js';

/**
 * Defines on the sass compiler options part of the build-utilities config.
 */
export function defineSassCompilerOpts(
    args: {
        config: Config.Class;
        console: Logger;
        params: CLI.Params;
    },
    partial?: Partial<Stage.Compiler.Args.Sass> | Stage.Compiler.Args.Sass | ( ( args: {
        config: Config.Class;
        console: Logger;
        params: CLI.Params;
    } ) => Partial<Stage.Compiler.Args.Sass> ),
) {
    const partialSassArgs = typeof partial === 'function'
        ? partial( args ) ?? {}
        : partial ?? {};

    const themeFlattenGetValues = sassFn_themeFlattenGetValues( args );

    const functions = {
        [ themeFlattenGetValues[ 0 ] ]: themeFlattenGetValues[ 1 ],
    };

    return sassCompilerOpts( args, {
        ...partialSassArgs ?? {},

        functions: {
            ...partialSassArgs[ 'functions' ] ?? {},
            ...functions,
        },
    } );
}