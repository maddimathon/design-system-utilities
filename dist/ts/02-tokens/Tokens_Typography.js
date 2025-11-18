/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4.draft
 * @license MIT
 */
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';
import { objectMap } from '../01-utilities/objectMap.js';
import { roundToPixel } from '../01-utilities/roundToPixel.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
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
            fonts: {},
            size: {
                heading: {
                    1: 7,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: -0.5,
                    8: -1,
                    9: -1.5,
                    10: -2,
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
            sizeScale: 1.0625,
        };
    }
    // public get data(): Tokens_Typography.Data {
    //     return {};
    // }
    data;
    familyOverrides;
    constructor(spacing, input) {
        super();
        this.spacing = spacing;
        this.data = mergeArgs(Tokens_Typography.default, input, true);
        this.familyOverrides = Object.values(this.data.fonts).map((font) => {
            let isOverride = font.fontOverrideOption;
            if (typeof isOverride === 'undefined') {
                switch (font.slug) {
                    case 'dyslexic':
                    case 'hyperlegible':
                    case 'monospace':
                        isOverride = true;
                        break;
                }
            }
            return isOverride && ({
                label: font.slug === 'monospace' ? 'Monospace' : font.name,
                value: font.slug,
                labelClass: `font-family-override-${font.slug}`,
                contentWidthScale: font.contentWidthScale,
                lineHeightScale: font.lineHeightScale,
            });
        }).filter(v => typeof v !== 'undefined' && v !== false);
    }
    toJSON() {
        const sizeConverter = (num) => {
            const rem = roundToPixel(Math.pow(this.spacing.data.multiplier, num) * this.data.sizeScale, 32);
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
        const size = objectMap(this.data.size, ([key, value]) => {
            // returns
            if (typeof value === 'object') {
                return sizeMapper(value);
            }
            return sizeConverter(value);
        });
        return {
            ...this.data,
            size,
            familyOverrides: this.familyOverrides,
        };
    }
    toScssVars() {
        const familyMapper = (family, weight, { key: style, value: font }) => {
            let fallbacks = family.fallbacks ?? [];
            if (family.appendSystemFontsToFallbacks) {
                switch (family.appendSystemFontsToFallbacks) {
                    case 'monospace':
                        fallbacks.push(...Tokens_Typography.Font.SystemMonospace);
                        break;
                    default:
                        fallbacks.push(...Tokens_Typography.Font.SystemUI);
                        break;
                }
                fallbacks = arrayUnique(fallbacks);
            }
            const sources = objectMap(font.path, ([type, paths]) => typeof paths === 'undefined'
                ? []
                : (Array.isArray(paths) ? paths : [paths]).map((path) => ({
                    type: type == 'ttf' ? 'truetype' : type,
                    path,
                })));
            return {
                family: family.name,
                fallbacks,
                style: font.style,
                weight: font.weight,
                printFontFace: family.printFontFace ?? true,
                display: font.display ?? family.display,
                'line-gap-override': font.lineGapOverride ?? family.lineGapOverride,
                'size-adjust': font.sizeAdjust ?? family.sizeAdjust,
                'unicode-range': font.unicodeRange ?? family.unicodeRange,
                src: Object.values({
                    ...sources,
                    truetype: sources.ttf,
                    ttf: undefined,
                }).flat().filter(v => typeof v !== 'undefined'),
            };
        };
        return {
            font: {
                // UPGRADE - make empty size objects equal to null
                size: this.data.size,
                sizeScale: this.data.sizeScale,
                family: objectMap(this.data.fonts, ([__key, family]) => family && ({
                    variable: family.variable && objectMap(family.variable, ([key, value]) => familyMapper(family, 'variable', { key, value })),
                    weights: objectMap(family.weights, ([weight, fontSet]) => fontSet && objectMap(fontSet, ([key, value]) => familyMapper(family, weight, { key, value }))),
                })),
                familyOverrides: this.familyOverrides,
            },
            line_height: this.data.lineHeight,
        };
    }
}
/**
 * Utilities for the {@link Tokens_Typography} class.
 *
 * @since 0.1.0-alpha
 */
(function (Tokens_Typography) {
    /**
     * @since 0.1.0-alpha
     */
    let Font;
    (function (Font) {
        /**
         * @since 0.1.0-alpha
         */
        Font.SystemMonospace = [
            'Menlo',
            'Consolas',
            'Monaco',
            'Liberation Mono',
            'Lucida Console',
            'monospace',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ];
        /**
         * @since 0.1.0-alpha
         */
        Font.SystemUI = [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen-Sans',
            'Ubuntu',
            'Cantarell',
            'Helvetica Neue',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ];
        ;
        ;
    })(Font = Tokens_Typography.Font || (Tokens_Typography.Font = {}));
})(Tokens_Typography || (Tokens_Typography = {}));
//# sourceMappingURL=Tokens_Typography.js.map