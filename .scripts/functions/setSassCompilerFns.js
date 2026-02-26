#!/usr/bin/env node
// @ts-check
'use strict';
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { CLI, Config, Stage } from '@maddimathon/build-utilities';
 * @import { Logger } from '@maddimathon/build-utilities/internal';
 */

/**
 * Adds scss functions to the compiler args.
 * 
 * @param {Stage.Compiler} compiler
 * @param {{ config: Config.Class; console: Logger; params: CLI.Params; }} params
 */
export async function setSassCompilerFns( compiler, params ) {
    // returns
    if ( !compiler.args.sass ) {
        return;
    }

    if ( !compiler.args.sass.functions ) {
        compiler.args.sass.functions = {};
    }

    /** @type { undefined | typeof import( 'src/ts/build-utils/sass-functions/themeFlattenGetValues.ts' ) } */
    // @ts-ignore
    const { sassFn_themeFlattenGetValues } = await import( '../../dist/ts/build-utils/sass-functions/themeFlattenGetValues.js' );

    const themeFlattenGetValues = sassFn_themeFlattenGetValues();

    compiler.args.sass.functions[ themeFlattenGetValues[ 0 ] ] = themeFlattenGetValues[ 1 ];
}