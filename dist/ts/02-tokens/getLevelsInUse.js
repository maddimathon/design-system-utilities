/**
 * @since 0.1.0-alpha.2
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
/**
 * Returns a set of the unique levels in use for the given theme tokens.
 *
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse(themes) {
    return new Set(themes._meta.levelsInUse);
}
