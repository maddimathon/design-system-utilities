/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    escRegExpReplace,
} from '@maddimathon/utility-typescript/functions';

import type {
    Stage,
} from '@maddimathon/build-utilities';

import {
    BuildStage,
} from '@maddimathon/build-utilities';

import {
} from '@maddimathon/utility-typescript/functions';

/**
 * Extension of the built-in one.
 * 
 * @since ___PKG_VERSION___
 */
export class Build extends BuildStage {

    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    override readonly subStages: Stage.SubStage.Build[] = [
        'compile',
        'replace',
        'prettify',
        'minimize',
        'test',
        'template' as Stage.SubStage.Build,
        'document',
    ];

    protected async template() {
        this.console.progress( 'updating and testing template...', 1 );

        // returns
        if ( !this.fs.exists( 'template' ) ) {
            this.console.progress( 'ⅹ no template directory found, exiting...', 2 );
            return;
        }


        this.console.verbose( 'updating version number...', 2 );

        const templatePackageJsonPath = 'template/package.json';

        // returns
        if ( !this.fs.exists( templatePackageJsonPath ) ) {
            this.console.progress( 'ⅹ no template package.json found, exiting...', 2 );
            return;
        }

        const templatePackageJsonContent = this.fs.readFile( templatePackageJsonPath );

        const replaced = templatePackageJsonContent
            .replace(
                /"version":\s*"[^"]*"/gi,
                escRegExpReplace( `"version": "${ this.version.toString( false ) }"` )
            );

        this.fs.write(
            templatePackageJsonPath,
            replaced,
            { force: true },
        );


        const templatePackageJson = JSON.parse( replaced );

        // returns
        if ( !templatePackageJson.scripts?.compile ) {
            this.console.progress( 'ⅹ no template compile script found, exiting...', 2 );
            return;
        }

        this.console.verbose( 'running template compile for demo...', 2 );
        this.try(
            this.console.nc.cmd,
            this.params.verbose ? 3 : 2,
            [ 'cd template && npm run compile' ]
        );
    }
}