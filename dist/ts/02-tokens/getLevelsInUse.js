/**
 * @since 0.1.0-alpha.2
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.2.draft
 * @license MIT
 */
/**
 * Returns a set of the unique levels in use for the given theme tokens.
 *
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse(themes) {
    const levelsInUse = new Set();
    Object.values(themes).forEach((theme) => theme.levelsInUse.forEach(level => levelsInUse.add(level)));
    return levelsInUse;
}
//# sourceMappingURL=getLevelsInUse.js.map