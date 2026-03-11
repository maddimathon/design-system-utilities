/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { DocumentStage, } from '@maddimathon/build-utilities';
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
        'assets',
        'scss',
        'astro',
        'replace',
    ];
    /**
     * The source globs (relative to src) to copy to the this.astroPublicDir dir.
     */
    assetSourceGlobs = [];
    astroPublicDir = 'docs/_public';
    async assets() {
        // returns
        if (!this.assetSourceGlobs.length) {
            this.console.progress('no docs assets to copy, skipping...', 1);
            return;
        }
        this.console.progress('copying docs assets...', 1);
        this.try(this.fs.copy, (this.params.verbose ? 3 : 2), [
            this.assetSourceGlobs,
            (this.params.verbose ? 3 : 2),
            this.getSrcDir(undefined),
            this.getSrcDir(undefined, this.astroPublicDir),
            {
                force: true,
                rename: false,
                recursive: true,
            },
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
    async scss(args) {
        // returns - we don't need to compile this
        if (this.isWatchedUpdate
            && this.params.building
            && this.params.watchedFilename?.match(/(^|\/)scss\/_astro\//)) {
            this.console.progress('skipping document css compile for astro-only update...', 1);
            return;
        }
        const outDir = this.getSrcDir(undefined, this.astroPublicDir.replace(/\/$/g, '') + '/assets/css');
        const paths = await this.runCustomScssDirSubStage('', outDir, {
            clearOutputDir: this.isWatchedUpdate ? false : this.params.building ? "complete" : "targeted",
            postCSS: true,
            ...args,
            srcDir: 'src/docs/scss',
        });
        this.console.verbose('prettifying...', 2);
        await this.atry(this.fs.prettier, (this.params.verbose ? 2 : 1), [
            paths,
            'css',
        ]);
    }
}
