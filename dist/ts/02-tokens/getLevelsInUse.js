/**
 * @since 0.1.0-alpha.2
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.4.draft
 * @license MIT
 */
/**
 * Returns a set of the unique levels in use for the given theme tokens.
 *
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse(themes, brightness = 'all') {
    // returns
    if (brightness !== 'all') {
        return new Set(themes._meta.levelsInUse[brightness]);
    }
    const all = new Set();
    themes._meta.brightness.forEach(_brightness => {
        themes._meta.levelsInUse[_brightness].forEach(lvl => all.add(lvl));
    });
    return all;
}
