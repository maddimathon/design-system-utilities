/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    PackageJson,
} from '@maddimathon/utility-typescript/types';

import type {
    CLI,
    Config,
    Stage,
} from '@maddimathon/build-utilities';

import type {
    SemVer,
} from '@maddimathon/build-utilities/internal';

import {
    AbstractStage,
    CompileStage,
} from '@maddimathon/build-utilities';

import type { Tokens } from '../../02-tokens/Tokens.js';
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
    override readonly subStages: Stage.SubStage.Compile[] = [
        'ts',
        'tokens' as Stage.SubStage.Compile,
        'astro' as Stage.SubStage.Compile,
        'scss',
        'templates' as Stage.SubStage.Compile,
        'files',
    ];

    /**
     * @param config   Current project config.
     * @param params   Current CLI params.
     * @param args     Partial overrides for the default args.
     * @param pkg      Parsed contents of the project’s package.json file.
     * @param version  Version object for the project’s version.
     */
    constructor (
        config: Config.Class,
        params: CLI.Params,
        args: Partial<Stage.Args.Compile>,
        pkg?: PackageJson,
        version?: SemVer,
    ) {
        super( config, params, args, pkg, version );

        this.buildTokens = this.buildTokens.bind( this );
    }


    /**
     * Runs through the basics of a typical Compile.tokens substage. 
     *
     * @category Running
     */
    public async buildTokens(
        tokens: Tokens.Instance,
        level: number,
        paths: buildTokens.Paths,
        args: Partial<buildTokens.Args> = {},
    ): Promise<void> {
        await buildTokens( this, tokens, level, paths, args );
    }


    protected async astro(): Promise<void> {
        await this.runCustomDirCopySubStage( 'astro' );
    }

    protected override async scss(): Promise<void> {
        await this.runCustomDirCopySubStage( 'scss' );
    }

    protected async templates(
        sassDebugCheckpoints: boolean = false,
        args?: Partial<AbstractStage.runCustomScssDirSubStage.Opts>,
    ): Promise<void> {

        await this.runCustomScssDirSubStage(
            'template',
            this.getDistDir( undefined, 'css' ),
            {
                maxConcurrent: sassDebugCheckpoints && ( this.params.debug || this.params.verbose ) ? 1 : 5,
                postCSS: true,
                ...args,
                srcDir: 'src/scss'
            },
        );

        if ( this.params.packaging || this.params.releasing ) {

            this.console.verbose( 'tidying up compiled files...', 2 );
            this.try(
                this.fs.delete,
                ( this.params.verbose ? 3 : 2 ),
                [ [
                    'dist/css/template/@template.css',
                    'dist/css/template/@template.css.map'
                ], ( this.params.verbose ? 3 : 2 ) ]
            );
        }
    }

    protected async tokens(): Promise<void> {
        this.console.log( '🚨 Compile.tokens substage is not implemented', 1 );
    }
}