/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { objectMap } from '../01-utilities/objectMap.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export class Tokens_Colour extends AbstractTokens {
    allNames;
    extraLevels;
    data;
    constructor(allNames, extraLevels, input) {
        super();
        this.allNames = allNames;
        this.extraLevels = extraLevels;
        this.data = objectGenerator(this.allNames, (name) => new Tokens_Colour_ShadeMap(this.allNames, this.extraLevels, name, input[name] ?? {}));
    }
    /**
     * Adds contrast tests to all the colour maps.
     *
     * @since ___PKG_VERSION___
     */
    async addContrastTests() {
        for (const t_colourName in this.data) {
            const colourName = t_colourName;
            for (const t_test_colourName in this.data) {
                const test_colourName = t_test_colourName;
                await this.data[colourName].addContrastTests(test_colourName, this.data[test_colourName]);
            }
        }
    }
    toJSON() {
        return objectMap(this.data, ({ value }) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ({ value }) => value.toScssVars());
    }
}
//# sourceMappingURL=Tokens_Colour.js.map