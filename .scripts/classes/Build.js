#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { Stage } from '@maddimathon/build-utilities';
 */

import {
    escRegExpReplace,
    softWrapText,
} from '@maddimathon/utility-typescript/functions';

import {
    BuildStage,
} from '@maddimathon/build-utilities';

/**
 * Extension of the built-in one.
 */
export class Build extends BuildStage {

    /**
     * @type {Stage.SubStage.Build[]}
     * 
     * @override
     * @readonly
     */
    subStages = [
        'compile',
        'replace',
        // @ts-expect-error
        'readme',
        'prettify',
        'minimize',
        'test',
        'document',
    ];

    /**
     * @protected
     */
    async readme() {
        this.console.progress( 'building readme markdown...', 1 );

        const source = 'src/docs/md/README.content.md';

        await this.readme_replace( source );
        await this.readme_build( source );
    }

    /**
     * @param {string} source
     * 
     * @protected
     */
    async readme_build( source ) {
        this.console.verbose( 'writing readme files...', 2 );

        const completeContent = [
            '<!--README_HEADER-->',
            `# ${ this.config.title } @ ${ this.version.toString( this.isDraftVersion ) }`,
            '<!--/README_HEADER-->',
            '',
            this.try(
                this.fs.readFile,
                2,
                [ source ],
            ),
        ].join( '\n' );

        // write to main README
        this.try(
            this.fs.write,
            2,
            [
                'README.md',
                completeContent,
                { force: true, rename: false },
            ],
        );

        // write to typedoc README
        this.try(
            this.fs.write,
            2,
            [
                'README.typedoc.md',
                [
                    '---',
                    'title: About',
                    'children: ',
                    '  - ./CHANGELOG.md',
                    '  - ./LICENSE.md',
                    '---',
                    '',
                    completeContent,
                ].join( '\n' ),
                { force: true, rename: false },
            ],
        );
    }

    /**
     * @param {string} path
     * 
     * @protected
     */
    async readme_replace( path ) {
        this.console.verbose( 'replacing readme placeholders...', 2 );

        let readmeContent = this.fs.readFile( path );

        // READ DOCS
        readmeContent = readmeContent.replace(
            /(<!--README_DOCS_CTA-->).*?(<!--\/README_DOCS_CTA-->)/gs,
            '$1\n' + (
                this.pkg.homepage
                    ? escRegExpReplace( `<a href="${ this.pkg.homepage }" class="button">Read Documentation</a>` )
                    : ''
            ) + '\n$2'
        );

        // DESCRIPTION
        readmeContent = readmeContent.replace(
            /(<!--README_DESC-->).*?(<!--\/README_DESC-->)/gs,
            '$1\n' + (
                this.pkg.description
                    ? escRegExpReplace( softWrapText( this.pkg.description, 80 ) )
                    : ''
            ) + '\n$2'
        );

        /** Markdown links to read the changelog. */
        const changelogLinks = [];

        if ( this.pkg.repository ) {

            const _gitURL = this.pkg.repository;

            changelogLinks.push( `[the source](${ _gitURL.replace( /(\/+|\.git)$/gi, '' ) }/blob/main/CHANGELOG.md)` );
        }

        if ( this.pkg.homepage ) {
            changelogLinks.push( `[the docs site](${ this.pkg.homepage }/Changelog.html)` );
        }

        // CHANGELOG LINKS
        readmeContent = readmeContent.replace(
            /(<!--README_DOCS_CHANGELOG-->).*?(<!--\/README_DOCS_CHANGELOG-->)/gs,
            '$1\n' + (
                changelogLinks.length
                    ? escRegExpReplace( `Read it from ${ changelogLinks.join( ' \nor \n' ) }.` )
                    : ''
            ) + '\n$2'
        );

        if ( this.params.releasing ) {

            readmeContent = readmeContent.replace(
                /(<!--README_INSTALL-->).*?(<!--\/README_INSTALL-->)/gs,
                '$1\n' + escRegExpReplace( [
                    '```bash',
                    'npm i -D @maddimathon/design-system-utilities@' + this.pkg.version,
                    'npm i -D github:maddimathon/design-system-utilities#' + this.pkg.version,
                    '```',
                ].join( '\n' ) ) + '\n$2'
            );
        }

        this.fs.write( path, readmeContent, { force: true } );
    }
}