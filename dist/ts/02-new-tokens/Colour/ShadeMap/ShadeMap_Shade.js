/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';
import { ColourUtilities } from '../../../01-utilities/ColourUtilities.js';
import { ColourContrastTest } from '../../../01-utilities/ColourContrastTest.js';
import { objectMap } from '../../../01-utilities/objectMap.js';
import { AbstractTokens } from '../../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens {
    allNames;
    extraLevels;
    shadeName;
    thisLevel;
    // public get schemaJSON() {
    //     return Tokens_Colour_ShadeMap_Shade.Schema.JSON( this.allNames, this.extraLevels );
    // }
    data;
    contrast = {
        min: {},
        max: {},
        results: {},
    };
    constructor(allNames, extraLevels, shadeName, thisLevel, input) {
        super();
        this.allNames = allNames;
        this.extraLevels = extraLevels;
        this.shadeName = shadeName;
        this.thisLevel = thisLevel;
        this.data = ColourUtilities.SingleShade.parse(input);
    }
    /**
     * Adds the given shade to this shade's contrast results.
     *
     * @since 0.1.0-alpha.draft
     */
    async addContrastTest(colourGroupName, level, testClr) {
        if (typeof this.contrast.results[colourGroupName] === 'undefined') {
            this.contrast.results[colourGroupName] = {};
        }
        const test = new ColourContrastTest(this.shadeValue(), testClr);
        if (typeof this.contrast.min[colourGroupName] === 'undefined') {
            this.contrast.min[colourGroupName] = {
                ui: undefined,
                text: undefined,
            };
        }
        // SETTING MINIMUMS
        for (const testName of ['ui', 'text']) {
            // continues
            if (!test.aa[testName]) {
                continue;
            }
            if (
            // if there's no minimum, then this is the new minimum
            typeof this.contrast.min[colourGroupName][testName] === 'undefined'
                // this result is less than the existing minimum
                || test.ratio < this.contrast.min[colourGroupName][testName].ratio) {
                this.contrast.min[colourGroupName][testName] = {
                    name: colourGroupName,
                    level,
                    ratio: test.ratio,
                };
            }
        }
        // SETTING MAXIMUM
        if (
        // if there's no maximum, then this is the new maximum
        typeof this.contrast.max[colourGroupName] === 'undefined'
            // this result is more than the existing maximum
            || test.ratio > this.contrast.max[colourGroupName].ratio) {
            this.contrast.max[colourGroupName] = {
                name: colourGroupName,
                level,
                ratio: test.ratio,
            };
        }
        this.contrast.results[colourGroupName][level] = test;
    }
    shadeValue() {
        return {
            hex: this.data.hex,
            hsl: this.data.hsl,
            rgb: this.data.rgb,
            lch: this.data.lch,
        };
    }
    toJSON() {
        const max = objectMap(this.contrast.max, ({ value }) => value && { ...value, ratio: undefined });
        const min = objectMap(this.contrast.min, ({ value: testGroup }) => ({
            ui: testGroup?.ui && {
                ...testGroup.ui,
                ratio: undefined,
            },
            text: testGroup?.text && {
                ...testGroup.text,
                ratio: undefined,
            },
        }));
        return {
            ...this.shadeValue(),
            contrast: {
                max,
                min,
                results: this.contrast.results,
            },
        };
    }
    toScssVars() {
        return `lch( ${this.data.lch.l} ${this.data.lch.c} ${this.data.lch.h} )`;
    }
}
//# sourceMappingURL=ShadeMap_Shade.js.map