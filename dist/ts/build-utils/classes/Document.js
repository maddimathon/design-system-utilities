/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.11
 * @license MIT
 */
import { DocumentStage, } from '@maddimathon/build-utilities';
import {} from '@maddimathon/utility-typescript/functions';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha
 */
export class Document extends DocumentStage {
    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    subStages = [
        'scss',
        'astro',
        'replace',
    ];
    astroPublicDir = 'docs/_public/assets';
    async scss() {
        // returns - we don't need to compile this
        if (this.isWatchedUpdate
            && this.params.building
            && this.params.watchedFilename?.match(/(^|\/)scss\/_astro\//)) {
            this.console.progress('skipping document css compile for astro-only update...', 1);
            return;
        }
        const outDir = this.getSrcDir(undefined, this.astroPublicDir.replace(/\/$/g, '') + '/css');
        const paths = await this.runCustomScssDirSubStage('', outDir, {
            postCSS: true,
            srcDir: 'src/docs/scss',
        });
        this.console.verbose('prettifying...', 2);
        await this.atry(this.fs.prettier, (this.params.verbose ? 2 : 1), [
            paths,
            'css',
        ]);
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
        if (!this.params.starting && !this.isWatchedUpdate) {
            this.console.verbose('compiling to ' + distDir + '...', 2);
            this.try(this.console.nc.cmd, this.params.verbose ? 3 : 2, ['astro build']);
        }
    }
}
//# sourceMappingURL=Document.js.map