/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { DocumentStage, } from '@maddimathon/build-utilities';
import {} from '@maddimathon/utility-typescript/functions';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha.draft
 */
export class Document extends DocumentStage {
    subStages = [
        'scss',
        'astro',
        'replace',
    ];
    async scss() {
        await this.runCustomScssDirSubStage('docs/scss', this.getDistDir('docs', 'css').replace(/\/$/g, ''));
    }
    async astro() {
        this.console.progress('building astro docs...', 1);
        const distDir = this.getDistDir('docs').trim().replace(/\/$/g, '');
        if (this.fs.exists(distDir)) {
            this.console.verbose('deleting existing files...', 2);
            this.fs.delete(distDir, this.params.verbose ? 3 : 2);
        }
        this.console.verbose('checking astro types...', 2);
        this.try(this.console.nc.cmd, this.params.verbose ? 3 : 2, ['astro check']);
        this.console.verbose('compiling to ' + distDir + '...', 2);
        this.try(this.console.nc.cmd, this.params.verbose ? 3 : 2, ['astro build']);
    }
}
//# sourceMappingURL=Document.js.map