#!/usr/bin/env node
// @ts-check
/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

/**
 * @import { Config, Stage } from '@maddimathon/build-utilities';
 */

import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';

const _defaults = {
    build: Build.prototype.ARGS_DEFAULT,
    document: Document.prototype.ARGS_DEFAULT,
};

/**
 * @type {Config}
 */
const config = {

    title: 'Design System Utilities',
    launchYear: '2025',

    compiler: {
        ts: {
            tidyGlobs: 'types/**/*.js',
        },
    },

    stages: {

        build: [
            Build,
            {
                minimize: false,

                /**
                 * @param {Stage} _stage
                 */
                prettify: ( _stage ) => {

                    return {
                        ..._defaults.build.prettify( _stage ),

                        html: undefined,
                        js: undefined,
                        ts: undefined,
                        yaml: undefined,
                    };
                },
            },
        ],

        compile: Compile,

        document: [
            Document,
            {

                entryPoints: [
                    'src/ts/index.ts',
                    'src/astro/index.docs.ts',
                    'src/schemata/index.ts',
                ],

                typeDoc: {

                    categorizeByGroup: false,
                    excludeExternals: true,

                    // json: Document.prototype.typeDoc_paths.json,
                    out: Document.prototype.typeDoc_paths.markdown,

                    plugin: [
                        'typedoc-plugin-markdown',
                        './dist/ts/typedoc/customMarkdownOutput.js',
                    ],

                    projectDocuments: [],

                    // router: 'member',

                    basePath: './',
                    tsconfig: 'tsconfig.json',

                    // @ts-expect-error - this is a typedoc-plugin-markdown prop
                    entryFileName: 'index',
                    hideBreadcrumbs: true,
                    hidePageHeader: true,
                    hidePageTitle: true,

                    // indexFormat: 'table',
                    // classPropertiesFormat: 'table',
                    // interfacePropertiesFormat: 'table',
                    // parametersFormat: 'table',
                    // typeAliasPropertiesFormat: 'table',
                    // enumMembersFormat: 'table',
                    // typeDeclarationFormat: 'table',
                    // propertyMembersFormat: 'table',

                    // tableColumnSettings: {
                    //     hideDefaults: true,
                    //     hideInherited: true,
                    //     hideModifiers: true,
                    //     hideOverrides: true,
                    //     hideSources: true,
                    //     hideValues: true,
                    //     leftAlignHeaders: true,
                    // },

                    sanitizeComments: true,
                    useCodeBlocks: true,
                    useHTMLEncodedBrackets: true,
                },
            }
        ],

        test: false,
    },
};

export default config;
