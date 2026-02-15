/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
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
        const modes = objectGeneratorAsync(brightnessModes, (brightness) => objectGeneratorAsync(contrastModes, (contrast) => Tokens_Themes_Set_SingleMode.build(contrast, brightness, clrNames, {
            ...input[brightness]?.[contrast] ?? {},
            variations: mergeArgs(input.variations ?? {}, input[brightness]?.[contrast]?.variations ?? {}, true),
        }, input[brightness]?.[contrast]?.overrides ?? {})));
        return modes.then((modes_resolved => new Tokens_Themes_Set(name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours, modes_resolved)));
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
        const allLevelsInUse = objectMap(this.modes, ([brightnessMode]) => Object.values(objectMap(this.modes[brightnessMode], ([__key, value]) => value.levelsInUse)).flat());
        const levelsInUse = arrayUnique(Object.values(allLevelsInUse).flat());
        const levelsInUse_dark = levelsInUse.map((light) => ColourUtilities.Levels.toDark(light));
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
