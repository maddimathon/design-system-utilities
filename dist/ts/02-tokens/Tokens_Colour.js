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
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGeneratorAsync } from '../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../01-utilities/objectKeySort_Tokens.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Colour extends AbstractTokens {
    allNames;
    extraLevels;
    data;
    /**
     * Allows for async building.
     */
    static async build(allNames, extraLevels, input) {
        return Promise.all([
            Tokens_Colour_ShadeMap.Shade.build(allNames, extraLevels, 'black', 'black', input.black ?? Tokens_Colour_ShadeMap.Yardsticks.black),
            Tokens_Colour_ShadeMap.Shade.build(allNames, extraLevels, 'white', 'white', input.white ?? Tokens_Colour_ShadeMap.Yardsticks.white),
            objectGeneratorAsync(allNames, (name) => Tokens_Colour_ShadeMap.build(allNames, extraLevels, name, input[name] ?? {})),
        ]).then(([black, white, colourMaps]) => new Tokens_Colour(allNames, extraLevels, {
            $: { black, white },
            ...colourMaps,
        }));
    }
    constructor(allNames, extraLevels, data) {
        super();
        this.allNames = allNames;
        this.extraLevels = extraLevels;
        this.data = data;
    }
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since 0.1.0-alpha
     */
    async addContrastTests() {
        const promises = [];
        for (const colourName of ['black', 'white']) {
            for (const t_test_colourName in this.data) {
                const test_colourName = t_test_colourName;
                // continues
                if (test_colourName === '$'
                    || test_colourName === 'black'
                    || test_colourName === 'white') {
                    continue;
                }
                for (const t_testLevel in this.data[test_colourName].data) {
                    const testLevel = t_testLevel;
                    promises.push(this.data.$[colourName].addContrastTest(test_colourName, testLevel, this.data[test_colourName].data[testLevel].data));
                }
            }
        }
        for (const t_colourName in this.data) {
            // continues
            if (t_colourName === '$'
                || t_colourName === 'black'
                || t_colourName === 'white') {
                continue;
            }
            const colourName = t_colourName;
            for (const t_test_colourName in this.data) {
                // continues
                if (t_test_colourName === '$'
                    || t_test_colourName === 'black'
                    || t_test_colourName === 'white') {
                    continue;
                }
                const test_colourName = t_test_colourName;
                promises.push(this.data[colourName].addContrastTests(test_colourName, this.data[test_colourName]));
            }
        }
        await Promise.all(promises);
    }
    toJSON() {
        return objectMap(this.data, (entry) => entry[0] === '$'
            ? objectMap(entry[1], ([_key, _val]) => _val.toJSON())
            : entry[1].toJSON());
    }
    toScssVars() {
        return objectKeySort_Tokens(objectMap(this.data, ([key, value]) => key === '$'
            ? objectMap(value, ([_key, _val]) => _val.toScssVars())
            : value.toScssVars()));
    }
}
