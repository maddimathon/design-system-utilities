/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.9
 * @license MIT
 */
import { CompileStage, } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha
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
        'astro',
        'scss',
        'templates',
        'files',
    ];
    /**
     * Runs through the basics of a typical Compile.tokens substage.
     *
     * @category Running
     */
    async buildTokens(level, tokens, _paths) {
        this.console.progress('building token files...', 0 + level);
        this.console.verbose('parsing paths...', 1 + level);
        const tokensDistDir = this.getDistDir(undefined, _paths.tokensDistSubpath ?? 'tokens');
        const paths = {
            slug: _paths.slug,
            assets: _paths.assets === false
                ? {
                    icons: false,
                    logos: false,
                }
                : {
                    icons: _paths.assets?.icons === false
                        ? _paths.assets?.icons
                        : (Array.isArray(_paths.assets?.icons)
                            ? _paths.assets?.icons
                            : [_paths.assets?.icons ?? 'assets/icons']).map(path => this.fs.pathResolve(tokensDistDir, path)),
                    logos: _paths.assets?.logos === false
                        ? _paths.assets?.logos
                        : (Array.isArray(_paths.assets?.logos)
                            ? _paths.assets?.logos
                            : [_paths.assets?.logos ?? 'assets/logos']).map(path => this.fs.pathResolve(tokensDistDir, path)),
                },
            json: _paths.json === false
                ? _paths.json
                : (Array.isArray(_paths.json)
                    ? _paths.json
                    : [_paths.json ?? `${_paths.slug}.json`]).map(path => this.fs.pathResolve(tokensDistDir, path)),
            scss: _paths.scss === false
                ? _paths.scss
                : Array.isArray(_paths.scss)
                    ? _paths.scss
                    : [_paths.scss ?? 'src/scss/tokens/system/_tokens.scss'],
        };
        await Promise.all([
            this.buildTokens_writeJson(tokens, paths.json, level),
            this.buildTokens_writeScss(tokens, paths.scss, level),
            this.buildTokens_writeIcons(tokens, paths.assets.icons, level),
        ]);
    }
    async buildTokens_writeJson(tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        this.console.verbose('writing json tokens...', 1 + level);
        const tokenJson = JSON.stringify(tokens, null, 4);
        return Promise.all(paths.map(async (path) => this.try(this.fs.write, (this.params.verbose ? 2 : 1) + level, [path, tokenJson, { force: true }])));
    }
    async buildTokens_writeScss(tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        this.console.verbose('writing scss tokens...', 1 + level);
        const tokenScss = tokens.toScss();
        return Promise.all(paths.map(async (path) => this.try(this.fs.write, (this.params.verbose ? 2 : 1) + level, [
            path,
            tokenScss,
            { force: true }
        ]))).then(async () => this.atry(this.fs.prettier, (this.params.verbose ? 2 : 1) + level, [
            paths,
            'scss',
        ]));
    }
    async buildTokens_writeIcons(tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        this.console.verbose('writing icon files...', 1 + level);
        return Promise.all(paths.map(async (path) => Promise.all(Object.values(tokens.icons.data).map(async (icon) => this.try(this.fs.write, (this.params.verbose ? 2 : 1) + level, [
            this.fs.pathResolve(path, `${icon.slug}.svg`),
            icon.svgFile,
            { force: true }
        ])))));
    }
    async buildTokens_writeLogos(tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        this.console.verbose('writing logo files...', 1 + level);
        return Promise.all(paths.map(async (path) => Promise.all(Object.values(tokens.logos.data).map(async (logo) => this.try(this.fs.write, (this.params.verbose ? 2 : 1) + level, [
            this.fs.pathResolve(path, `${logo.slug}.svg`),
            logo.svgFile,
            { force: true }
        ])))));
    }
    async astro() {
        await this.runCustomDirCopySubStage('astro');
    }
    async scss() {
        await this.runCustomDirCopySubStage('scss');
    }
    async templates() {
        await this.runCustomScssDirSubStage('template', this.getDistDir(undefined, 'css'), {
            postCSS: true,
            srcDir: 'src/scss'
        });
        if (this.params.packaging || this.params.releasing) {
            this.console.verbose('tidying up compiled files...', 2);
            this.try(this.fs.delete, (this.params.verbose ? 3 : 2), [[
                    'dist/css/template/@template.css',
                    'dist/css/template/@template.css.map'
                ], (this.params.verbose ? 3 : 2)]);
        }
    }
    async tokens() {
        this.console.log('🚨 Compile.tokens substage is not implemented', 1);
    }
}
//# sourceMappingURL=Compile.js.map