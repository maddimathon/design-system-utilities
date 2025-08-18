/**
 * Defines the schemata for Astro docs collection(s).
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { typeDocSchemata } from '../ts/typedoc/index.js';

const api = defineCollection( {
    loader: glob( { pattern: "**/*.md", base: "./src/docs/content/api" } ),
    schema: typeDocSchemata.metadata.page,
} );

export const collections = { api };