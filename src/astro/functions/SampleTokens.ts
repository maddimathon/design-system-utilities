/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { Tokens } from '../../ts/02-tokens/Tokens.js';

export const SampleTokens = await Tokens.sample();

export const SampleTokens_Json = SampleTokens.toJSON() as Tokens.JsonReturn;