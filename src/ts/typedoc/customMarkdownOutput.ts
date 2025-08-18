/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

import * as UA from '@maddimathon/utility-astro';

// import type { Reflection } from 'typedoc';
import type {
    MarkdownApplication,
    // MarkdownThemeContext,
} from 'typedoc-plugin-markdown';

// import * as YAML from 'yaml';

import * as z from 'zod';


export const typeDocSchemata = {

    metadata: {
        page: UA.typedoc.Schemata.Default.Metadata.PAGE,
        reflection: UA.typedoc.Schemata.Default.Metadata.REFLECTION,
    },
};

export const flagKeys = UA.typedoc.Schemata.Default.Metadata.PAGE.required().shape.flags.keyof();


export namespace TypeDocSchemata {

    export type FlagKeys = z.infer<typeof flagKeys>;

    export namespace Metadata {

        export type Reflection = UA.typedoc.Schemata.Default.Metadata.Reflection;

        export type Page = UA.typedoc.Schemata.Default.Metadata.Page;
    }
}


const plugin = new UA.typedoc.plugins.MarkdownExport( {
    page: UA.typedoc.Schemata.Default.Metadata.PAGE,
    reflection: UA.typedoc.Schemata.Default.Metadata.REFLECTION,
} );


/**
 * This is the function run by typeDoc for this plugin.
 */
export function load( app: MarkdownApplication ) {
    // app.renderer.markdownHooks.on( 'page.begin', getMarkdownFrontmatterString );
    // @ts-expect-error - this works in the tests in utility-astro...
    app.renderer.markdownHooks.on( 'page.begin', plugin.getMarkdownFrontmatterString );
}