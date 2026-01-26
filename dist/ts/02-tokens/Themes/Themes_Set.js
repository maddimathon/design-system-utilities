/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.0.draft
 * @license MIT
 */
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set extends AbstractTokens {
    name;
    clrNames;
    extraColourLevels;
    brightnessModes;
    contrastModes;
    forcedColours;
    modes;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static async build(name, clrNames, extraColourLevels, brightnessModes, contrastModes, input) {
        const forcedColours = await Tokens_Themes_Set_SingleMode.build('forcedColors', undefined, clrNames, {
            ...input.forcedColours ?? {},
            variations: input.variations,
        }, input.forcedColours?.overrides);
        const modes = await objectGeneratorAsync(brightnessModes, async (brightness) => objectGeneratorAsync(contrastModes, async (contrast) => Tokens_Themes_Set_SingleMode.build(contrast, brightness, clrNames, {
            ...input[brightness]?.[contrast] ?? {},
            variations: mergeArgs(input.variations ?? {}, input[brightness]?.[contrast]?.variations ?? {}, true),
        }, input[brightness]?.[contrast]?.overrides ?? {})));
        return new Tokens_Themes_Set(name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours, modes);
    }
    get data() {
        return {
            name: this.name ?? 'default',
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.data)),
            forcedColours: this.forcedColours.data,
        };
    }
    constructor(
    /** Name for this shade set. */
    name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours, modes) {
        super();
        this.name = name;
        this.clrNames = clrNames;
        this.extraColourLevels = extraColourLevels;
        this.brightnessModes = brightnessModes;
        this.contrastModes = contrastModes;
        this.forcedColours = forcedColours;
        this.modes = modes;
    }
    toJSON() {
        const levelsInUse = arrayUnique(Object.values(objectMap(this.modes, ([brightnessMode]) => Object.values(objectMap(this.modes[brightnessMode], ([__key, value]) => value.levelsInUse)).flat())).flat());
        const levelsInUse_dark = levelsInUse.map((level) => {
            const dark = (1000 - Number(level)).toFixed(0);
            return dark.padStart(Math.max(0, 3 - dark.length), '0');
        });
        return {
            name: this.name ?? 'default',
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.toJSON())),
            forcedColours: this.forcedColours.toJSON(),
            levelsInUse: arrayUnique(levelsInUse.concat(levelsInUse_dark)).sort(),
        };
    }
    toScssVars() {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.toScssVars())),
        };
    }
}
//# sourceMappingURL=Themes_Set.js.map