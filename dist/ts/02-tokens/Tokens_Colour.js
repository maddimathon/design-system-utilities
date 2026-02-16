/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { arrayUnique } from '@maddimathon/utility-typescript/functions';
// import { VariableInspector } from '@maddimathon/utility-typescript/classes';
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGeneratorAsync } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';
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
        const allValidatedNames = arrayUnique([
            'base',
            ...allNames,
        ]);
        return Promise.all([
            Tokens_Colour_ShadeMap.Shade.build(allValidatedNames, extraLevels, 'black', 'black', input.black ?? Tokens_Colour_ShadeMap.Yardsticks.black),
            Tokens_Colour_ShadeMap.Shade.build(allValidatedNames, extraLevels, 'white', 'white', input.white ?? Tokens_Colour_ShadeMap.Yardsticks.white),
            objectGeneratorAsync(allValidatedNames, (name) => Tokens_Colour_ShadeMap.build(allNames, extraLevels, name, input[name] ?? {})),
        ]).then(([black, white, colourMaps]) => new Tokens_Colour(allValidatedNames, extraLevels, {
            black,
            white,
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
        for (const t_colourName in this.data) {
            const colourName = t_colourName;
            const promises = [];
            for (const t_test_colourName in this.data) {
                const test_colourName = t_test_colourName;
                // continues
                if (test_colourName === 'black' || test_colourName === 'white') {
                    continue;
                }
                if (this.data[colourName] instanceof Tokens_Colour_ShadeMap.Shade) {
                    for (const t_testLevel in this.data[test_colourName].data) {
                        const testLevel = t_testLevel;
                        // VariableInspector.dump( { 'this.data[ test_colourName ]': this.data[ test_colourName ] }, { includeValue: false } );
                        promises.push(this.data[colourName].addContrastTest(test_colourName, testLevel, this.data[test_colourName].data[testLevel].data));
                    }
                }
                else {
                    promises.push(this.data[colourName].addContrastTests(test_colourName, this.data[test_colourName]));
                }
            }
            await Promise.all(promises);
        }
    }
    toJSON() {
        return objectMap(this.data, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ([key, value]) => value.toScssVars());
    }
}
