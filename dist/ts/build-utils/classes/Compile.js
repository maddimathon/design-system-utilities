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
        // this.console.progress( 'building token files...', 0 + level );
        // this.console.verbose( 'parsing paths...', 1 + level );
        // const tokensDistDir = this.getDistDir(
        //     undefined,
        //     paths.tokensDistSubpath ?? 'tokens',
        // );
        // const paths_icons = paths.assets === false
        //     ? paths.assets
        //     : paths.assets?.icons === false
        //         ? paths.assets?.icons
        //         : (
        //             Array.isArray( paths.assets?.icons )
        //                 ? paths.assets?.icons
        //                 : [ paths.assets?.icons ?? 'assets/icons' ]
        //         ).map( path => this.fs.pathResolve( tokensDistDir, path ) );
        // const paths_logos = (paths.assets && paths.assets?.logos === false)
        //         ? paths.assets?.logos
        //         : (
        //             Array.isArray( paths.assets?.logos )
        //                 ? paths.assets?.logos
        //                 : [ paths.assets?.logos ?? 'assets/logos' ]
        //         ).map( path => this.fs.pathResolve( tokensDistDir, path ) );
        // const paths: {
        //     slug: string;
        //     assets: {
        //         icons: false | string[];
        //         logos: false | string[];
        //     };
        //     json: false | string[];
        //     scss: false | string[];
        // } = {
        //     slug: _paths.slug,
        //     assets: {
        //         icons: paths_icons,
        //         logos: paths_logos,
        //     },
        //     json: _paths.json === false
        //         ? _paths.json
        //         : (
        //             Array.isArray( _paths.json )
        //                 ? _paths.json
        //                 : [ _paths.json ?? `${ _paths.slug }.json` ]
        //         ).map(
        //             path => this.fs.pathResolve( tokensDistDir, path )
        //         ),
        //     scss: _paths.scss === false
        //         ? _paths.scss
        //         : Array.isArray( _paths.scss )
        //             ? _paths.scss
        //             : [ _paths.scss ?? 'src/scss/tokens/system/_tokens.scss' ],
        // };
        // await Promise.all( [
        //     this.buildTokens_writeJson( tokens, paths.json, level ),
        //     this.buildTokens_writeScss( tokens, paths.scss, level ),
        //     this.buildTokens_writeIcons( tokens, paths.assets.icons, level ),
        //     this.buildTokens_writeLogos( tokens, paths.assets.logos, level ),
        // ] );
    }
    // protected async buildTokens_writeJson(
    //     tokens: Tokens.Instance,
    //     paths: false | string[],
    //     level: number,
    // ) {
    //     // returns
    //     if ( !paths ) {
    //         return;
    //     }
    //     this.console.verbose( 'writing json tokens...', 1 + level );
    //     const tokenJson = JSON.stringify( tokens, null, 4 );
    //     return Promise.all( paths.map( async ( path ) => this.try(
    //         this.fs.write,
    //         ( this.params.verbose ? 2 : 1 ) + level,
    //         [ path, tokenJson, { force: true } ]
    //     ) ) );
    // }
    // protected async buildTokens_writeScss(
    //     tokens: Tokens.Instance,
    //     paths: false | string[],
    //     level: number,
    // ) {
    //     // returns
    //     if ( !paths ) {
    //         return;
    //     }
    //     this.console.verbose( 'writing scss tokens...', 1 + level );
    //     const tokenScss = tokens.toScss();
    //     return Promise.all(
    //         paths.map(
    //             async ( path ) => this.try(
    //                 this.fs.write,
    //                 ( this.params.verbose ? 2 : 1 ) + level,
    //                 [
    //                     path,
    //                     tokenScss,
    //                     { force: true }
    //                 ]
    //             )
    //         )
    //     ).then(
    //         async () => this.atry(
    //             this.fs.prettier,
    //             ( this.params.verbose ? 2 : 1 ) + level,
    //             [
    //                 paths,
    //                 'scss',
    //             ],
    //         )
    //     );
    // }
    // protected async buildTokens_writeIcons(
    //     tokens: Tokens.Instance,
    //     paths: false | string[],
    //     level: number,
    // ) {
    //     // returns
    //     if ( !paths ) {
    //         return;
    //     }
    //     this.console.verbose( 'writing icon files...', 1 + level );
    //     return Promise.all(
    //         paths.map(
    //             async ( path ) => Promise.all(
    //                 Object.values( tokens.icons.data ).map(
    //                     async ( icon ) => this.try(
    //                         this.fs.write,
    //                         ( this.params.verbose ? 2 : 1 ) + level,
    //                         [
    //                             this.fs.pathResolve( path, `${ icon.slug }.svg` ),
    //                             icon.svgFile(),
    //                             { force: true },
    //                         ]
    //                     )
    //                 )
    //             )
    //         )
    //     );
    // }
    // protected async buildTokens_writeLogos(
    //     tokens: Tokens.Instance,
    //     paths: false | string[],
    //     level: number,
    // ) {
    //     // returns
    //     if ( !paths ) {
    //         return;
    //     }
    //     this.console.verbose( 'writing logo files...', 1 + level );
    //     return Promise.all(
    //         paths.map(
    //             async ( path ) => Promise.all(
    //                 Object.values( tokens.logos.data ).map(
    //                     async ( logo ) => this.try(
    //                         this.fs.write,
    //                         ( this.params.verbose ? 2 : 1 ) + level,
    //                         [
    //                             this.fs.pathResolve( path, `${ logo.slug }.svg` ),
    //                             logo.svgFile(),
    //                             { force: true },
    //                         ]
    //                     )
    //                 )
    //             )
    //         )
    //     );
    // }
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
