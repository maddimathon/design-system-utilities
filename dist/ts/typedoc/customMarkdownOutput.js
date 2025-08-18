/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 *
 * @license MIT
 */
import * as UA from '@maddimathon/utility-astro';
// import * as YAML from 'yaml';
import * as z from 'zod';
export const typeDocSchemata = new UA.typedoc.Schemata();
export const flagKeys = typeDocSchemata.metadata.page.required().shape.flags.keyof();
const plugin = new UA.typedoc.plugins.MarkdownExport(typeDocSchemata.metadata);
/**
 * This is the function run by typeDoc for this plugin.
 */
export function load(app) {
    // app.renderer.markdownHooks.on( 'page.begin', getMarkdownFrontmatterString );
    // @ts-expect-error - this works in the tests in utility-astro...
    app.renderer.markdownHooks.on('page.begin', plugin.getMarkdownFrontmatterString);
}
//# sourceMappingURL=customMarkdownOutput.js.map