/**
 * Utilities for constructing the schema.
 *
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as z from 'zod';
export const TokenLevels = z.union([
    z.literal('100'),
    z.literal('200'),
    z.literal('300'),
    z.literal('400'),
    z.literal('500'),
    z.literal('600'),
    z.literal('700'),
    z.literal('800'),
    z.literal('900'),
]);
export const TokenLevels_Extended = z.union([
    z.literal('000'),
    z.literal('050'),
    z.literal('150'),
    z.literal('250'),
    z.literal('350'),
    z.literal('450'),
    z.literal('550'),
    z.literal('650'),
    z.literal('750'),
    z.literal('850'),
    z.literal('950'),
]);
//# sourceMappingURL=@utils.js.map