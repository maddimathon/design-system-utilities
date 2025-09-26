/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/ShadeMap_Shade.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export class Tokens_Colour_ShadeMap extends AbstractTokens {
    allNames;
    extraLevels;
    name;
    data;
    allLevels;
    constructor(allNames, extraLevels, name, input) {
        super();
        this.allNames = allNames;
        this.extraLevels = extraLevels;
        this.name = name;
        this.allLevels = [
            ...this.tokenLevels,
            ...this.extraLevels,
        ];
        this.data = Tokens_Colour_ShadeMap.completeMap(this.allNames, this.extraLevels, this.name, input);
    }
    /**
     * Adds the given shade map to this map's shades' contrast results.
     *
     * @since ___PKG_VERSION___
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
        return objectMap(this.data, ({ value }) => value.toJSON());
    }
    toScssVars() {
        return objectMap(this.data, ({ value }) => value.toScssVars());
    }
}
/**
 * Utilities for the {@link Tokens_Colour_ShadeMap} class.
 *
 * @since ___PKG_VERSION___
 */
(function (Tokens_Colour_ShadeMap) {
    /* FUNCTIIONS
     * ====================================================================== */
    // UPGRADE - make this work by only setting 500
    function completeMap(allNames, extraLevels, name, part) {
        const inputKeys = Object.keys(part);
        const bases = {
            '100': { l: 98, c: 0, h: 0 },
            '500': { l: 50, c: 0, h: 0 },
            '900': { l: 2, c: 0, h: 0 },
        };
        const shadeMaker = (_thisLevel, _input) => (_input instanceof Tokens_Colour_ShadeMap_Shade
            ? _input
            : new Tokens_Colour_ShadeMap_Shade(allNames, extraLevels, name, _thisLevel, _input));
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
            // TODO - generate these from whatever existing keys
            _l_100 = shadeMaker('100', bases['100']);
            _l_900 = shadeMaker('900', bases['900']);
        }
        else {
            // now we can safely assume these exist
            _l_100 = shadeMaker('100', part['100']);
            _l_900 = shadeMaker('900', part['900']);
        }
        const l_100 = _l_100;
        const l_900 = _l_900;
        const l_500 = _l_500 ?? shadeMaker('500', ((!('500' in part) || !part['500'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_100, l_900)
            // otherwise we can safely assume this exists
            : part['500']));
        const l_300 = shadeMaker('300', ((!('300' in part) || !part['300'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_100, l_500)
            // otherwise we can safely assume this exists
            : part['300']));
        const l_700 = shadeMaker('700', ((!('700' in part) || !part['700'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_500, l_900)
            // otherwise we can safely assume this exists
            : part['700']));
        const l_200 = shadeMaker('200', ((!('200' in part) || !part['200'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_100, l_300)
            // otherwise we can safely assume this exists
            : part['200']));
        const l_400 = shadeMaker('400', ((!('400' in part) || !part['400'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_300, l_500)
            // otherwise we can safely assume this exists
            : part['400']));
        const l_600 = shadeMaker('600', ((!('600' in part) || !part['600'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_500, l_700)
            // otherwise we can safely assume this exists
            : part['600']));
        const l_800 = shadeMaker('800', ((!('800' in part) || !part['800'])
            // we should merge it from what's available
            ? ColourUtilities.mixColours(l_700, l_900)
            // otherwise we can safely assume this exists
            : part['800']));
        const defaultLevels = {
            '100': l_100,
            '200': l_200,
            '300': l_300,
            '400': l_400,
            '500': l_500,
            '600': l_600,
            '700': l_700,
            '800': l_800,
            '900': l_900,
        };
        // @ts-expect-error
        const completeLevels = {};
        const levelsToInclude = [
            ...AbstractTokens.tokenLevels,
            ...extraLevels
        ].sort();
        levelLoop: for (const level of levelsToInclude) {
            // continues
            if (level in defaultLevels) {
                completeLevels[level] = defaultLevels[level];
                continue levelLoop;
            }
            let lowerLevel;
            let higherLevel;
            // continues for 000, 050, and 950
            switch (level) {
                case '000':
                    completeLevels[level] = shadeMaker(level, ColourUtilities.mixColours('FFFFFF', defaultLevels['100']));
                    continue levelLoop;
                case '950':
                    completeLevels[level] = shadeMaker(level, ColourUtilities.mixColours(defaultLevels['900'], '000000'));
                    continue levelLoop;
                case '050':
                    completeLevels[level] = shadeMaker(level, ColourUtilities.mixColours((('000' in completeLevels && completeLevels['000'])
                        ? completeLevels['000']
                        : ColourUtilities.mixColours('FFFFFF', defaultLevels['100'])), defaultLevels['100']));
                    continue levelLoop;
                case '150':
                    lowerLevel = '100';
                    higherLevel = '200';
                    break;
                case '250':
                    lowerLevel = '200';
                    higherLevel = '300';
                    break;
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
                case '750':
                    lowerLevel = '700';
                    higherLevel = '800';
                    break;
                case '850':
                    lowerLevel = '800';
                    higherLevel = '900';
                    break;
            }
            completeLevels[level] = shadeMaker(level, ColourUtilities.mixColours(defaultLevels[lowerLevel], defaultLevels[higherLevel]));
        }
        return completeLevels;
    }
    Tokens_Colour_ShadeMap.completeMap = completeMap;
})(Tokens_Colour_ShadeMap || (Tokens_Colour_ShadeMap = {}));
//# sourceMappingURL=Colour_ShadeMap.js.map