/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
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
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens {
    allNames;
    extraLevels;
    shadeName;
    thisLevel;
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
     * @since 0.1.0-alpha
     */
    async addContrastTest(colourGroupName, level, testClr) {
        if (typeof this.contrast.results[colourGroupName] === 'undefined') {
            this.contrast.results[colourGroupName] = {};
        }
        const contrastTest = new ColourContrastTest(this.shadeValue(), testClr);
        if (typeof this.contrast.min[colourGroupName] === 'undefined') {
            this.contrast.min[colourGroupName] = {
                ui: undefined,
                text: undefined,
            };
        }
        // SETTING MINIMUMS
        testNameLoop: for (const testName of ['ui', 'text']) {
            // continues
            if (!contrastTest.aa[testName] && !contrastTest.aaa[testName]) {
                continue testNameLoop;
            }
            if (typeof this.contrast.min[colourGroupName][testName] === 'undefined') {
                this.contrast.min[colourGroupName][testName] = {
                    aa: undefined,
                    aaa: undefined,
                };
            }
            standardsLoop: for (const standard of ['aa', 'aaa']) {
                // if it didn't pass, ignore this
                if (!contrastTest[standard][testName]) {
                    continue standardsLoop;
                }
                if (
                // if there's no minimum, then this is the new minimum
                typeof this.contrast.min[colourGroupName][testName]?.[standard] === 'undefined'
                    // this result is less than the existing minimum
                    || contrastTest.ratio < this.contrast.min[colourGroupName][testName]?.[standard].ratio) {
                    this.contrast.min[colourGroupName][testName][standard] = {
                        name: colourGroupName,
                        level,
                        ratio: contrastTest.ratio,
                    };
                }
            }
        }
        // SETTING MAXIMUM
        if (
        // if there's no maximum, then this is the new maximum
        typeof this.contrast.max[colourGroupName] === 'undefined'
            // this result is more than the existing maximum
            || contrastTest.ratio > this.contrast.max[colourGroupName].ratio) {
            this.contrast.max[colourGroupName] = {
                name: colourGroupName,
                level,
                ratio: contrastTest.ratio,
            };
        }
        this.contrast.results[colourGroupName][level] = {
            ...contrastTest.toJSON(),
        };
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
        const max = this.contrast.max;
        const min = objectMap(this.contrast.min, ([key, testGroup]) => ({
            ui: testGroup?.ui && {
                aa: testGroup.ui.aa,
                aaa: testGroup.ui.aaa,
            },
            text: testGroup?.text && {
                aa: testGroup.text.aa,
                aaa: testGroup.text.aaa,
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
        return ColourUtilities.toString.hsl(this.data.hsl);
    }
}
//# sourceMappingURL=ShadeMap_Shade.js.map