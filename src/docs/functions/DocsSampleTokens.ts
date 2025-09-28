/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { Tokens } from '../../ts/02-tokens/Tokens.js';

export const DocsSampleTokens = ( await Tokens.build(
    {
        colour: {
            // 'hue-50': {
            //     500: { l: 50, c: 50, h: 350 },
            // },
            // 'hue-350': {
            //     500: { l: 50, c: 50, h: 50 },
            // },
            base: Tokens.SampleColours.base,
            red: Tokens.SampleColours.red,
            // orange: Tokens.SampleColours.orange,
            // yellow: Tokens.SampleColours.yellow,
            // green: Tokens.SampleColours.green, 
            turquoise: Tokens.SampleColours.turquoise,
            // blue: Tokens.SampleColours.blue,
            purple: Tokens.SampleColours.purple,
            // pink: Tokens.SampleColours.pink,
        },
    },
    {
        extraColourLevels: [ '150', '850' ],
        tokensAsDefault: true,
    },
) ).toJSON();