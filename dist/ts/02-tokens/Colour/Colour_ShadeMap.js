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
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { LocalErrors } from '../../01-utilities/Errors.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_ShadeMap extends AbstractTokens {
    allNames;
    extraLevels;
    name;
    data;
    /**
     * Allows for async building.
     */
    static async build(allNames, extraLevels, name, input) {
        const errorMaker = (message, context, opts) => new LocalErrors.TokenBuildError(message, {
            class: 'Tokens_Colour_ShadeMap',
            method: 'build',
            ...context,
        }, opts);
        return Tokens_Colour_ShadeMap.completeMap(allNames, extraLevels, name, input, errorMaker).then(data => new Tokens_Colour_ShadeMap(allNames, extraLevels, name, data));
    }
    constructor(allNames, extraLevels, name, data) {
        super();
        this.allNames = allNames;
        this.extraLevels = extraLevels;
        this.name = name;
        this.data = data;
    }
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since 0.1.0-alpha
     */
    async addContrastTests(colourGroupName, testMap) {
        const promises = [];
        for (const t_thisLevel in this.data) {
            const thisLevel = t_thisLevel;
            for (const t_testLevel in testMap.data) {
                const testLevel = t_testLevel;
                promises.push(this.data[thisLevel].addContrastTest(colourGroupName, testLevel, testMap.data[testLevel].data));
            }
        }
        return Promise.all(promises);
    }
    toJSON() {
        return objectMap(this.data, ([key, value]) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ([key, value]) => value.toScssVars());
    }
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since 0.1.0-alpha
 */
(function (Tokens_Colour_ShadeMap) {
    /* SHADE CLASS
     * ====================================================================== */
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to {@link Tokens_Colour_ShadeMap} and renamed.
     */
    class Shade extends AbstractTokens {
        allNames;
        extraLevels;
        shadeName;
        thisLevel;
        data;
        contrast;
        /**
         * Allows for async building.
         */
        static async build(allNames, extraLevels, shadeName, thisLevel, input) {
            const errorMaker = (message, context, opts) => new LocalErrors.TokenBuildError(message, {
                class: 'Shade',
                method: 'build',
                ...context,
            }, opts);
            return Promise.all([
                ColourUtilities.validateShade(input, errorMaker),
                objectGeneratorAsync(allNames, async () => ({
                    ui: {
                        aa: undefined,
                        aaa: undefined,
                    },
                    text: {
                        aa: undefined,
                        aaa: undefined,
                    },
                })),
                objectGeneratorAsync(allNames, async () => undefined),
                objectGeneratorAsync(allNames, async () => objectGeneratorAsync([...ColourUtilities.Levels.required, ...extraLevels], async () => undefined)),
            ]).then(([data, contrast_min, contrast_max, contrast_results,]) => new Shade(allNames, extraLevels, shadeName, thisLevel, data, {
                min: contrast_min,
                max: contrast_max,
                results: contrast_results,
            }));
        }
        constructor(allNames, extraLevels, shadeName, thisLevel, data, contrast) {
            super();
            this.allNames = allNames;
            this.extraLevels = extraLevels;
            this.shadeName = shadeName;
            this.thisLevel = thisLevel;
            this.data = data;
            this.contrast = contrast;
        }
        /**
         * Adds the given shade to this shade's contrast results.
         *
         * @since 0.1.0-alpha
         */
        async addContrastTest(colourGroupName, level, testClr) {
            // const thisContrastTestResults = this.contrast.results[ colourGroupName ][ level ];
            // let thisContrastTestMinimums = this.contrast.min[ colourGroupName ];
            // let thisContrastTestMaximums = this.contrast.max[ colourGroupName ];
            const contrastTest = new ColourUtilities.ContrastTest(this.data, testClr);
            // SETTING MINIMUMS
            testNameLoop: for (const testName of ['ui', 'text']) {
                // continues
                if (!contrastTest.aa[testName] && !contrastTest.aaa[testName]) {
                    continue testNameLoop;
                }
                standardsLoop: for (const standard of ['aa', 'aaa']) {
                    // if it didn't pass, ignore this
                    if (!contrastTest[standard][testName]) {
                        continue standardsLoop;
                    }
                    if (
                    // if there's no minimum, then this is the new minimum
                    typeof this.contrast.min[colourGroupName][testName][standard] === 'undefined'
                        // this result is less than the existing minimum
                        || contrastTest.ratio < this.contrast.min[colourGroupName][testName][standard].ratio) {
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
            this.contrast.results[colourGroupName][level] = contrastTest.toJSON();
        }
        toJSON() {
            return {
                ...this.data,
                contrast: {
                    max: this.contrast.max,
                    min: this.contrast.min,
                    results: this.contrast.results,
                },
            };
        }
        toScssVars() {
            return ColourUtilities.toString.hsl(this.data.hsl);
        }
    }
    Tokens_Colour_ShadeMap.Shade = Shade;
    ;
    /* FUNCTIONS
     * ====================================================================== */
    /**
     * Completes a shade map and converts the level values to
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     */
    // UPGRADE - make this work by only setting lch or hsl hue value
    async function completeMap(allNames, extraLevels, name, part, errMaker, _treatShadeAsBase) {
        const treatShadeAsBase = _treatShadeAsBase ?? (name.match(/^base(\-|\_|$)/i) !== null);
        const inputKeys = Object.keys(part);
        const bases = {
            '100': { l: 98, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '900': { l: 2, c: 0, h: 0, },
        };
        const shadeMaker = async (_thisLevel, _input) => {
            // to keep it within a reasonable spectrum (since I average lch values)
            const hsl = ColourUtilities.Async.toHSL(_input, errMaker ?? undefined, false);
            return hsl.then(validHSL => Tokens_Colour_ShadeMap.Shade.build(allNames, extraLevels, name, _thisLevel, validHSL));
        };
        let _l_100;
        let _l_500 = undefined;
        let _l_900;
        /*
         * Making sure the minimum required levels are present.
         */
        if (!inputKeys.length) {
            // we should set the default basics and generate a grey map, then
            _l_100 = shadeMaker('100', bases['100']);
            _l_500 = shadeMaker('500', bases['500']);
            _l_900 = shadeMaker('900', bases['900']);
        }
        else if (!('100' in part) && !('900' in part) || !(part['100'] && part['900'])) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            if (inputKeys.length > 0) {
                const _hue = Promise.all(Object.values(part).map(p => ColourUtilities.Async.toLCH(p))).then(arr => arr.reduce(((partialSum, a) => partialSum + a.h), 0) / Math.max(1, inputKeys.length));
                _l_100 = _hue.then((h) => shadeMaker('100', part['100'] ?? {
                    l: bases['100'].l,
                    c: 5,
                    h,
                }));
                _l_900 = _hue.then((h) => shadeMaker('900', part['900'] ?? {
                    l: bases['900'].l,
                    c: 4,
                    h,
                }));
            }
            else {
                _l_100 = shadeMaker('100', part['100'] ?? bases['100']);
                _l_900 = shadeMaker('900', part['900'] ?? bases['900']);
            }
        }
        else {
            // now we can safely assume these exist
            _l_100 = shadeMaker('100', part['100'] ?? bases['100']);
            _l_900 = shadeMaker('900', part['900'] ?? bases['900']);
        }
        const [l_100, l_900, l_500,] = await Promise.all([
            _l_100,
            _l_900,
            Promise.resolve(_l_500).then(async (__clr) => {
                // return
                if (__clr) {
                    return __clr;
                }
                // returns
                if ('500' in part && part['500']) {
                    return shadeMaker('500', part['500']);
                }
                return ColourUtilities.mixColours(await _l_100, await _l_900).then(mixed => shadeMaker('500', mixed));
            }),
        ]);
        const shadeFetcher = async (level, lowClr, highClr, saturationMultiplier) => {
            // returns
            if (level in part && part[level]) {
                return shadeMaker(level, part[level]);
            }
            return ColourUtilities.mixColours(lowClr, highClr, saturationMultiplier).then(clr => shadeMaker(level, clr));
        };
        const [l_300, l_700,] = await Promise.all([
            shadeFetcher('300', l_100, l_500, treatShadeAsBase ? 0 : 0.375),
            shadeFetcher('700', l_500, l_900, treatShadeAsBase ? 0 : 0.375),
        ]);
        const [l_200, l_400, l_600, l_800,] = await Promise.all([
            shadeFetcher('200', l_100, l_300),
            shadeFetcher('400', l_300, l_500),
            shadeFetcher('600', l_500, l_700),
            shadeFetcher('800', l_700, l_900),
        ]);
        const [l_150, l_250, l_750, l_850,] = await Promise.all([
            shadeFetcher('150', l_100, l_200),
            shadeFetcher('250', l_200, l_300),
            shadeFetcher('750', l_700, l_800),
            shadeFetcher('850', l_800, l_900),
        ]);
        const defaultLevels = {
            '100': l_100,
            '150': l_150,
            '200': l_200,
            '250': l_250,
            '300': l_300,
            '400': l_400,
            '500': l_500,
            '600': l_600,
            '700': l_700,
            '750': l_750,
            '800': l_800,
            '850': l_850,
            '900': l_900,
        };
        const completeLevels = [];
        const levelsToInclude = [
            ...Object.keys(defaultLevels),
            ...extraLevels
        ].sort();
        levelLoop: for (const level of levelsToInclude) {
            // continues
            if (level in defaultLevels) {
                completeLevels.push([
                    level,
                    defaultLevels[level],
                ]);
                continue levelLoop;
            }
            // continues
            if (part[level]) {
                completeLevels.push(shadeMaker(level, part[level]).then(shade => [level, shade]));
                continue levelLoop;
            }
            let lowerLevel;
            let higherLevel;
            // continues for 000, 050, and 950
            switch (level) {
                case '350':
                    lowerLevel = '300';
                    higherLevel = '400';
                    break;
                case '450':
                    lowerLevel = '400';
                    higherLevel = '500';
                    break;
                case '550':
                    lowerLevel = '500';
                    higherLevel = '600';
                    break;
                case '650':
                    lowerLevel = '600';
                    higherLevel = '700';
                    break;
            }
            completeLevels.push(ColourUtilities.mixColours(defaultLevels[lowerLevel], defaultLevels[higherLevel]).then(mixed => shadeMaker(level, mixed).then(shade => [level, shade])));
        }
        return Promise.all(completeLevels).then(entries => Object.fromEntries(entries));
    }
    Tokens_Colour_ShadeMap.completeMap = completeMap;
    /**
     * Sample shade maps for contrast & level goals.
     */
    let Yardsticks;
    (function (Yardsticks) {
        Yardsticks.black = { l: 0, c: 0, h: 0, };
        Yardsticks.white = { l: 100, c: 0, h: 0, };
        Yardsticks.base = {
            '100': { l: 97, c: 0, h: 0, },
            '300': { l: 78, c: 0, h: 0, },
            '500': { l: 50, c: 0, h: 0, },
            '700': { l: 22, c: 0, h: 0, },
            '900': { l: 3, c: 0, h: 0, },
        };
        Yardsticks.accent = {
            '100': { l: 97, c: 0, h: 0, },
            '500': { l: 50.5, c: 0, h: 0, },
            '900': { l: 4, c: 0, h: 0, },
        };
    })(Yardsticks = Tokens_Colour_ShadeMap.Yardsticks || (Tokens_Colour_ShadeMap.Yardsticks = {}));
})(Tokens_Colour_ShadeMap || (Tokens_Colour_ShadeMap = {}));
