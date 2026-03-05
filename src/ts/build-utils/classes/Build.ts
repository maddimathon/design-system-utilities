/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    type Stage,
    BuildStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 * 
 * @since 0.1.0-alpha
 */
export class Build extends BuildStage {

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