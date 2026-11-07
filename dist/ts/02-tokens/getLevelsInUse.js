/**
 * @since 0.1.0-alpha.2
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0
 * @license MIT
 */
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
/**
 * Returns a set of the unique levels in use for the given theme tokens.
 *
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse(themes, brightness = 'all', { convertDarkLevels = false, } = {}) {
    // returns
    if (brightness && brightness !== 'all') {
        // returns
        if (convertDarkLevels && brightness === 'dark') {
            return new Set(themes._meta.levelsInUse[brightness].map(ColourUtilities.Levels.toDark));
        }
        return new Set(themes._meta.levelsInUse[brightness]);
    }
    const returnObj = {
        light: new Set(),
        dark: new Set(),
    };
    themes._meta.brightness.forEach(_brightness => {
        themes._meta.levelsInUse[_brightness].forEach(convertDarkLevels && _brightness === 'dark'
            ? lvl => returnObj.dark.add(ColourUtilities.Levels.toDark(lvl))
            : lvl => returnObj[_brightness].add(lvl));
    });
    const all = new Set([
        ...returnObj.light,
        ...returnObj.dark,
    ]);
    // returns
    if (brightness === 'all') {
        return all;
    }
    return {
        all,
        ...returnObj,
    };
}
