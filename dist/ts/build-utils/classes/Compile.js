/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { CompileStage, } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha.draft
 */
export class Compile extends CompileStage {
    subStages = [
        'scss',
        'css',
        'ts',
        'files',
    ];
    async css() {
        await this.runCustomScssDirSubStage('css');
    }
    async scss() {
        await this.runCustomDirCopySubStage('scss');
    }
}
//# sourceMappingURL=Compile.js.map