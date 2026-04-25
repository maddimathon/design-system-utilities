/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractStage, CompileStage, } from '@maddimathon/build-utilities';
import { buildTokens } from '../buildTokens.js';
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
     * @param config   Current project config.
     * @param params   Current CLI params.
     * @param args     Partial overrides for the default args.
     * @param pkg      Parsed contents of the project’s package.json file.
     * @param version  Version object for the project’s version.
     */
    constructor(config, params, args, pkg, version) {
        super(config, params, args, pkg, version);
        this.buildTokens = this.buildTokens.bind(this);
    }
    /**
     * Runs through the basics of a typical Compile.tokens substage.
     *
     * @category Running
     */
    async buildTokens(tokens, level, paths, args = {}) {
        await buildTokens(this, tokens, level, paths, args);
    }
    async astro() {
        await this.runCustomDirCopySubStage('astro');
    }
    async scss() {
        await this.runCustomDirCopySubStage('scss');
    }
    async templates(sassDebugCheckpoints = false, args) {
        await this.runCustomScssDirSubStage('template', this.getDistDir(undefined, 'css'), {
            maxConcurrent: sassDebugCheckpoints && (this.params.debug || this.params.verbose) ? 1 : 5,
            postCSS: true,
            ...args,
            srcDir: 'src/scss',
        });
    }
    async tokens() {
        this.console.log('🚨 Compile.tokens substage is not implemented', 1);
    }
}
