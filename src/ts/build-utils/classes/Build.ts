/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import type {
//     Stage,
// } from '@maddimathon/build-utilities';

import {
    BuildStage,
    type Stage,
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/utility-typescript/functions';

/**
 * Extension of the built-in one.
 * 
 * @since 0.1.0-alpha
 */
export class Build extends BuildStage {

    // /**
    //  * All sub-stages to run in this stage (in order).
    //  *
    //  * @category Running
    //  *
    //  * @source
    //  */
    // override readonly subStages: Stage.SubStage.Build[] = [
    //     'compile',
    //     'replace',
    //     'prettify',
    //     'minimize',
    //     'test',
    //     'document',
    // ];

    public override get ARGS_DEFAULT() {

        const _defaults = super.ARGS_DEFAULT;

        return {
            ..._defaults,
            minimize: false,

            prettify: ( _stage ) => {

                return {
                    ..._defaults.prettify( _stage ),
                    html: undefined,
                };
            },
        } satisfies Stage.Args.Build as unknown as BuildStage[ 'ARGS_DEFAULT' ];
    }
}