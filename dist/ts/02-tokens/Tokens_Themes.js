/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
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
        return Tokens_Themes.buildSets(clrNames, extraColourLevels, brightnessModes, contrastModes, input).then(sets => new Tokens_Themes(clrNames, extraColourLevels, brightnessModes, contrastModes, sets));
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
        return Promise.all(arr.map((set) => Tokens_Themes_Set.build(set.name, clrNames, extraColourLevels, [...brightnessModes], [...contrastModes], set))).then((objs) => {
            const allThemeNames = objs.map(o => o.data.name);
            return objectGenerator(allThemeNames, (name) => objs[allThemeNames.indexOf(name)]);
        });
    }
    get data() {
        return objectMap(this.sets, ([key, value]) => value.data);
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
        return objectMap(this.sets, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.sets, ([key, value]) => value.toScssVars());
    }
}
