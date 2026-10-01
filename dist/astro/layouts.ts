/**
 * @since 0.1.0-beta.0
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.3.draft
 * @license MIT
 */

import utilityAstro from '@maddimathon/utility-astro/layouts';

import Page from './layouts/Page.astro';
export type * from './layouts/Page.astro';

const layouts = {
    ...utilityAstro,
    Page,
} as const;

export default layouts;