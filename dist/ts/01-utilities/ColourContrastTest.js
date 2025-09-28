/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as WcagContrast from 'wcag-contrast';
import * as z from 'zod';
import { ColourUtilities } from './ColourUtilities.js';
/**
 * Generates a single pair of contrast test results used by the
 * {@link Tokens_Colour_ShadeMap_Shade} objects.
 *
 * @since ___PKG_VERSION___
 * @internal
 */
export class ColourContrastTest {
    clrA;
    clrB;
    static #standards;
    static set standards(val) {
        if (typeof this.#standards === 'undefined') {
            this.#standards = val;
        }
    }
    static get standards() {
        return this.#standards ?? {
            aa: {
                ui: 3,
                text: 4.5,
            },
            aaa: {
                ui: 4.5,
                text: 7,
            },
        };
    }
    static cachePath = '.scripts/.cache/contrast';
    /**
     * Gets the contrast ratio for the given colours, checking the cache for
     * values first.
     */
    static test(clrA, clrB) {
        const cache = ColourContrastTest.getCache(clrA, clrB);
        return cache === false ? ColourContrastTest.setCache(clrA, clrB, WcagContrast.rgb([clrA.rgb.r, clrA.rgb.g, clrA.rgb.b], [clrB.rgb.r, clrB.rgb.g, clrB.rgb.b])) : cache;
    }
    /**
     * Gets the name for a colour to be used with cache files.
     */
    static getCacheName(clr) {
        return [clr.rgb.r, clr.rgb.g, clr.rgb.b].join(' ');
    }
    /**
     * Get a contrast ratio from the cache, if it exists.
     */
    // TODO - implement
    static getCache(clrA, clrB) {
        clrA;
        clrB;
        return false;
    }
    /**
     * Add the given ratio to the contrast cache.
     *
     * @return  Returns the ratio for ease of use.
     */
    // TODO - implement
    static setCache(clrA, clrB, ratio) {
        clrA;
        clrB;
        return ratio;
    }
    ratio;
    aa;
    aaa;
    constructor(clrA, clrB) {
        this.clrA = clrA;
        this.clrB = clrB;
        this.ratio = ColourContrastTest.test(clrA, clrB);
        const standards = ColourContrastTest.standards;
        // @ts-expect-error
        const tmp_results = {};
        for (const t_standard in standards) {
            const standard = t_standard;
            if (typeof tmp_results[standard] === 'undefined') {
                // @ts-expect-error
                tmp_results[standard] = {};
            }
            for (const t_testName in standards[standard]) {
                const testName = t_testName;
                tmp_results[standard][testName] = this.ratio >= standards[standard][testName];
            }
        }
        this.aa = tmp_results.aa;
        this.aaa = tmp_results.aaa;
    }
    toJSON() {
        return {
            aa: this.aa,
            aaa: this.aaa,
        };
    }
    valueOf() {
        return {
            ratio: this.ratio,
            aa: this.aa,
            aaa: this.aaa,
        };
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since ___PKG_VERSION___
 * @internal
 */
(function (ColourContrastTest) {
    /* SCHEMA
     * ====================================================================== */
    const JSON_SingleResult = z.object({
        ui: z.boolean(),
        text: z.boolean(),
    });
    /**
     * Creates a JSON schema for this class.
     */
    ColourContrastTest.JSON = z.object({
        ratio: z.number(),
        aa: JSON_SingleResult,
        aaa: JSON_SingleResult,
    }).transform(obj => ({ aa: obj.aa, aaa: obj.aaa }));
})(ColourContrastTest || (ColourContrastTest = {}));
//# sourceMappingURL=ColourContrastTest.js.map