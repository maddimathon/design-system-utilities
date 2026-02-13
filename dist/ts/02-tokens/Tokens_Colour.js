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
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import { Tokens_Colour_ShadeMap_Shade } from './Colour/ShadeMap/ShadeMap_Shade.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Colour extends AbstractTokens {
    extraLevels;
    data;
    allNames;
    constructor(allNames, extraLevels, input) {
        super();
        this.extraLevels = extraLevels;
        this.allNames = arrayUnique([
            'base',
            ...allNames,
        ]);
        this.data = {
            black: new Tokens_Colour_ShadeMap_Shade(this.allNames, this.extraLevels, 'black', 'black', input.black ?? Tokens_Colour_ShadeMap.Yardsticks.black),
            white: new Tokens_Colour_ShadeMap_Shade(this.allNames, this.extraLevels, 'white', 'white', input.white ?? Tokens_Colour_ShadeMap.Yardsticks.white),
            ...objectGenerator(this.allNames, (name) => new Tokens_Colour_ShadeMap(this.allNames, this.extraLevels, name, input[name] ?? {})),
        };
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
                if (this.data[colourName] instanceof Tokens_Colour_ShadeMap_Shade) {
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
