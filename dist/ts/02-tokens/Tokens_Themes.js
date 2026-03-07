/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { objectMap } from '@maddimathon/utility-typescript';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes extends AbstractTokens {
    brightnessModes;
    contrastModes;
    colours;
    sets;
    /**
     * Used instead of the constructor so that it can be async.
     *
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    static async build(brightnessModes, contrastModes, colours, input) {
        return Tokens_Themes.buildSets(brightnessModes, contrastModes, colours, input).then(sets => new Tokens_Themes(brightnessModes, contrastModes, colours, sets));
    }
    /**
     * Used to initialize multiple themes at once.
     *
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    static async buildSets(brightnessModes, contrastModes, colours, input) {
        const arr = Array.isArray(input)
            ? (input.length
                ? input
                : [
                    { name: 'default' },
                ])
            : [
                {
                    ...input,
                    name: 'default',
                },
            ];
        return Promise.all(arr.map((set) => Tokens_Themes_Set.build(set.name, brightnessModes, contrastModes, colours, set))).then((objs) => {
            const allThemeNames = objs.map(o => o.data.name);
            return objectGenerator(allThemeNames, (name) => objs[allThemeNames.indexOf(name)]);
        });
    }
    get data() {
        return objectMap(this.sets, ([key, value]) => value.data);
    }
    /**
     * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    constructor(brightnessModes, contrastModes, colours, sets) {
        super();
        this.brightnessModes = brightnessModes;
        this.contrastModes = contrastModes;
        this.colours = colours;
        this.sets = sets;
    }
    toJSON() {
        return objectMap(this.sets, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.sets, ([key, value]) => value.toScssVars());
    }
}
