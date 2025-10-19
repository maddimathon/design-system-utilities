/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { objectMap } from '../01-utilities/objectMap.js';
import { roundToPixel } from '../01-utilities/roundToPixel.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Typography extends AbstractTokens {
    spacing;
    static get default() {
        return {
            lineHeight: {
                '100': -2.75,
                '200': -2,
                '300': -1.25,
                '400': 0,
                '500': 1,
                '600': 2,
            },
            size: {
                heading: {
                    1: 7,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: -0.25,
                    8: -1,
                    9: -1.75,
                    10: -2.5,
                },
                normal: 0,
                smaller: {
                    1: -0.75,
                    2: -1.5,
                    3: -2.0,
                    // 4: -2.5,
                    // 5: -3.0,
                },
                bigger: {},
            },
        };
    }
    // public get data(): Tokens_Typography.Data {
    //     return {};
    // }
    data;
    constructor(spacing, input) {
        super();
        this.spacing = spacing;
        this.data = mergeArgs(Tokens_Typography.default, input, true);
    }
    toJSON() {
        const sizeConverter = (num) => {
            const rem = roundToPixel(Math.pow(this.spacing.data.multiplier, num), 32);
            return {
                px: roundToPixel(rem * 16, 2),
                pt: roundToPixel(rem * 11, 2),
                rem,
            };
        };
        const sizeMapper = (sizes) => {
            // @ts-expect-error - this will be filled
            const mapped = {};
            for (const sizeKey of Object.keys(sizes)) {
                const sizeValue = sizes[sizeKey];
                const sizeValue_type = typeof sizeValue;
                // continues
                if (sizeValue_type !== 'object') {
                    // continues
                    if (sizeValue_type === 'undefined') {
                        continue;
                    }
                    // @ts-expect-error - this will be filled
                    mapped[sizeKey] = sizeConverter(sizeValue);
                    continue;
                }
            }
            return mapped;
        };
        const size = objectMap(this.data.size, ({ key, value }) => {
            // returns
            if (typeof value === 'object') {
                return sizeMapper(value);
            }
            return sizeConverter(value);
        });
        return {
            ...this.data,
            size,
        };
    }
    toScssVars() {
        return {
            font: {
                // UPGRADE - make empty size objects equal to null
                size: this.data.size,
            },
            line_height: this.data.lineHeight,
        };
    }
}
//# sourceMappingURL=Tokens_Typography.js.map