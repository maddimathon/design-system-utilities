/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.1
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes extends AbstractTokens {
    clrNames;
    extraColourLevels;
    brightnessModes;
    contrastModes;
    sets;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static async build(clrNames, extraColourLevels, brightnessModes, contrastModes, input) {
        return new Tokens_Themes(clrNames, extraColourLevels, brightnessModes, contrastModes, await Tokens_Themes.buildSets(clrNames, extraColourLevels, brightnessModes, contrastModes, input));
    }
    /**
     * Used to initialize multiple themes at once.
     */
    static async buildSets(clrNames, extraColourLevels, brightnessModes, contrastModes, input) {
        const arr = Array.isArray(input)
            ? (input.length
                ? input
                : [
                    { name: 'default' },
                ])
            : [input];
        const objs = await Promise.all(arr.map((set) => Tokens_Themes_Set.build(set.name, clrNames, extraColourLevels, [...brightnessModes], [...contrastModes], set)));
        const allThemeNames = objs.map(o => o.data.name);
        const sets = objectGenerator(allThemeNames, (name) => objs[allThemeNames.indexOf(name)]);
        return sets;
    }
    get data() {
        return objectMap(this.sets, ({ value }) => value.data);
    }
    constructor(clrNames, extraColourLevels, brightnessModes, contrastModes, sets) {
        super();
        this.clrNames = clrNames;
        this.extraColourLevels = extraColourLevels;
        this.brightnessModes = brightnessModes;
        this.contrastModes = contrastModes;
        this.sets = sets;
    }
    toJSON() {
        return objectMap(this.sets, ({ value }) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.sets, ({ value }) => value.toScssVars());
    }
}
//# sourceMappingURL=Tokens_Themes.js.map