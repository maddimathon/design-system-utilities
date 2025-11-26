/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4.draft
 * @license MIT
 */
import { BuildStage, } from '@maddimathon/build-utilities';
import {} from '@maddimathon/utility-typescript/functions';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha
 */
export class Build extends BuildStage {
    get ARGS_DEFAULT() {
        const _defaults = super.ARGS_DEFAULT;
        return {
            ..._defaults,
            minimize: false,
            prettify: (_stage) => {
                return {
                    ..._defaults.prettify(_stage),
                    html: undefined,
                };
            },
        };
    }
}
//# sourceMappingURL=Build.js.map