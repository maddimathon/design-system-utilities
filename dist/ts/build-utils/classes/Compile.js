/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { CompileStage, } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since ___PKG_VERSION___
 */
export class Compile extends CompileStage {
    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    subStages = [
        'ts',
        'tokens',
        'scss',
        'templates',
        'files',
    ];
    async templates() {
        await this.runCustomScssDirSubStage('scss/templates', this.getDistDir(undefined, 'css/templates'), { postCSS: true });
        if (this.params.packaging || this.params.releasing) {
            this.console.verbose('tidying up compiled files...', 2);
            this.try(this.fs.delete, (this.params.verbose ? 3 : 2), [[
                    'dist/css/templates/@template.css',
                    'dist/css/templates/@template.css.map'
                ], (this.params.verbose ? 3 : 2)]);
        }
    }
    async scss() {
        await this.runCustomDirCopySubStage('scss');
    }
}
//# sourceMappingURL=Compile.js.map