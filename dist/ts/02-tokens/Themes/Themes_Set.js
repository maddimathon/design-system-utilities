/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Themes_Set_SingleMode } from './Themes_Set_SingleMode.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
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
        const forcedColours = await Tokens_Themes_Set_SingleMode.build('forcedColors', clrNames, input.forcedColours ?? {});
        const modes = await objectGeneratorAsync(brightnessModes, async (brightness) => objectGeneratorAsync(contrastModes, async (contrast) => Tokens_Themes_Set_SingleMode.build(contrast, clrNames, input[brightness]?.[contrast] ?? {})));
        return new Tokens_Themes_Set(name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours, modes);
    }
    get data() {
        return {
            name: this.name,
            // ...this.modes,
            ...objectMap(this.modes, ({ key: brightnessMode }) => objectMap(this.modes[brightnessMode], ({ value }) => value.data)),
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
        return this.data;
    }
    toScssVars() {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(this.modes, ({ key: brightnessMode }) => objectMap(this.modes[brightnessMode], ({ value }) => value.toScssVars())),
        };
    }
}
//# sourceMappingURL=Themes_Set.js.map