/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Tokens } from '../../ts/02-new-tokens/Tokens.js';

import tokensRaw from '../../../dist/default-tokens.json';

export const DefaultTokens = tokensRaw as unknown as Tokens.JsonReturn;