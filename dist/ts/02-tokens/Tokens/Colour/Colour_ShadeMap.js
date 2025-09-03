/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/Colour_ShadeMap_Shade.js';
/**
 * Generates a map of shades used as colour tokens for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_Colour_ShadeMap extends AbstractTokens {
    name;
    get schema() {
        return Tokens_Colour_ShadeMap.Schema;
    }
    map;
    constructor(name, input) {
        super(input ?? {});
        this.name = name;
        this.map = this.parseSchema(this.schema, input, {
            name: `Tokens_Colour_ShadeMap.${this.name}`,
            location: 'src/ts/02-tokens/Tokens/Colour/Colour_ShadeMap.ts:48',
        });
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        const levels = {
            '100': this.map["100"].toScssVars(),
            '200': this.map["200"].toScssVars(),
            '300': this.map["300"].toScssVars(),
            '400': this.map["400"].toScssVars(),
            '500': this.map["500"].toScssVars(),
            '600': this.map["600"].toScssVars(),
            '700': this.map["700"].toScssVars(),
            '800': this.map["800"].toScssVars(),
            '900': this.map["900"].toScssVars(),
        };
        return levels;
    }
    valueOf() {
        return this.map;
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Colour_ShadeMap) {
    function mixColours(_clrA, _clrB) {
        const clrA = Tokens_Colour_ShadeMap_Shade.toOKLCH(_clrA);
        const clrB = Tokens_Colour_ShadeMap_Shade.toOKLCH(_clrB);
        return Tokens_Colour_ShadeMap_Shade.toOKLCH({
            l: (clrA.l + clrB.l) / 2,
            c: (clrA.c + clrB.c) / 2,
            h: (clrA.h + clrB.h) / 2,
        });
    }
    Tokens_Colour_ShadeMap.mixColours = mixColours;
    function completeMap(part, cfx) {
        const inputKeys = Object.keys(part);
        const name = Array.isArray(cfx.path) ? cfx.path.join(' ') : cfx.path;
        const bases = {
            '100': { l: 98, c: 0, h: 85 },
            '500': { l: 53, c: 0.005, h: 55 },
            '900': { l: 10, c: 0.02, h: 38 },
        };
        let _l_100;
        let _l_900;
        /*
         * Making sure the minimum required levels are present.
         */
        if (!inputKeys.length) {
            // we should set the default basics and generate a grey map, then
            _l_100 = new Tokens_Colour_ShadeMap_Shade(`${name}-100`, bases['100']);
            part['500'] = new Tokens_Colour_ShadeMap_Shade(`${name}-500`, bases['500']);
            _l_900 = new Tokens_Colour_ShadeMap_Shade(`${name}-900`, bases['900']);
        }
        else if (!('100' in part) && !('900' in part) || !(part['100'] && part['900'])) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            // TODO - generate these from whatever existing keys
            _l_100 = new Tokens_Colour_ShadeMap_Shade(`${name}-100`, bases['100']);
            _l_900 = new Tokens_Colour_ShadeMap_Shade(`${name}-900`, bases['900']);
        }
        else {
            // now we can safely assume these exist
            _l_100 = new Tokens_Colour_ShadeMap_Shade(`${name}-100`, part['100']);
            _l_900 = new Tokens_Colour_ShadeMap_Shade(`${name}-900`, part['900']);
        }
        const l_100 = _l_100;
        const l_900 = _l_900;
        const l_500 = new Tokens_Colour_ShadeMap_Shade(`${name}-500`, ((!('500' in part) || !part['500'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_100, l_900)
            // otherwise we can safely assume this exists
            : part['500']));
        const l_300 = new Tokens_Colour_ShadeMap_Shade(`${name}-300`, ((!('300' in part) || !part['300'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_100, l_500)
            // otherwise we can safely assume this exists
            : part['300']));
        const l_700 = new Tokens_Colour_ShadeMap_Shade(`${name}-700`, ((!('700' in part) || !part['700'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_500, l_900)
            // otherwise we can safely assume this exists
            : part['700']));
        const l_200 = new Tokens_Colour_ShadeMap_Shade(`${name}-200`, ((!('200' in part) || !part['200'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_100, l_300)
            // otherwise we can safely assume this exists
            : part['200']));
        const l_400 = new Tokens_Colour_ShadeMap_Shade(`${name}-400`, ((!('400' in part) || !part['400'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_300, l_500)
            // otherwise we can safely assume this exists
            : part['400']));
        const l_600 = new Tokens_Colour_ShadeMap_Shade(`${name}-600`, ((!('600' in part) || !part['600'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_500, l_700)
            // otherwise we can safely assume this exists
            : part['600']));
        const l_800 = new Tokens_Colour_ShadeMap_Shade(`${name}-800`, ((!('800' in part) || !part['800'])
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours(l_700, l_900)
            // otherwise we can safely assume this exists
            : part['800']));
        return {
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
    }
    Tokens_Colour_ShadeMap.completeMap = completeMap;
    /* SCHEMA
     * ====================================================================== */
    Tokens_Colour_ShadeMap.Schema = z.object({
        '100': Tokens_Colour_ShadeMap_Shade.Schema,
        '200': Tokens_Colour_ShadeMap_Shade.Schema,
        '300': Tokens_Colour_ShadeMap_Shade.Schema,
        '400': Tokens_Colour_ShadeMap_Shade.Schema,
        '500': Tokens_Colour_ShadeMap_Shade.Schema,
        '600': Tokens_Colour_ShadeMap_Shade.Schema,
        '700': Tokens_Colour_ShadeMap_Shade.Schema,
        '800': Tokens_Colour_ShadeMap_Shade.Schema,
        '900': Tokens_Colour_ShadeMap_Shade.Schema,
    }).partial().transform((part, cfx) => completeMap(part, cfx));
})(Tokens_Colour_ShadeMap || (Tokens_Colour_ShadeMap = {}));
//# sourceMappingURL=Colour_ShadeMap.js.map