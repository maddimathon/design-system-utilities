/**
 * @since ___PKG_VERSION___
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
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/utility-typescript/functions';

/**
 * Extension of the built-in one.
 * 
 * @since ___PKG_VERSION___
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
}