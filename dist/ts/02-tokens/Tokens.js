/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { arrayUnique, mergeArgs, slugify } from '@maddimathon/utility-typescript';
import { JsonToScss } from '@maddimathon/utility-sass';
import { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGenerator } from '../01-utilities/objectGenerator.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Colour } from './Tokens_Colour.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
import { Tokens_CSS } from './Tokens_CSS.js';
import { Tokens_Icons } from './Tokens_Icons.js';
import { Tokens_Logos } from './Tokens_Logos.js';
import { Tokens_Spacing } from './Tokens_Spacing.js';
import { Tokens_Themes } from './Tokens_Themes.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
import { Tokens_Typography } from './Tokens_Typography.js';
import { Tokens_Photos } from './Tokens_Photos.js';
/**
 * Internal utilities available for documentation but not meant to be public.
 *
 * @since 0.1.0-beta.0.draft
 * @internal
 */
export class Internal {
}
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens extends AbstractTokens {
    name;
    colourOpts;
    input;
    config;
    get data() {
        return {
            name: this.name,
            icons: this.icons.data,
            logos: this.logos.data,
            photos: this.photos.data,
            spacing: this.spacing.data,
            typography: this.typography.data,
            colour: this.colour.data,
            themes: this.themes.data,
            css: this.css.data,
        };
    }
    colour;
    css;
    icons;
    logos;
    photos;
    spacing;
    themes;
    typography;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static async build(input, config = {}) {
        const extraColourLevels = config.extraColourLevels ?? [];
        const colourOpts = {
            names: arrayUnique([
                'base',
                ...Object.keys(input.colour ?? {}).filter(name => name !== 'black' && name !== 'white'),
            ]),
            allLevels: new Set([
                ...ColourUtilities.Levels.required,
                ...extraColourLevels,
            ]),
        };
        const brightnessModes = input.themes?.brightness?.length
            ? input.themes.brightness
            : ['light', 'dark'];
        const contrastModes = [
            'low',
            'average',
            'high',
            ...(input.themes?.contrast?.filter((c) => c !== 'low' && c !== 'average' && c !== 'high')
                ?? []),
        ];
        return Promise.all([
            Tokens_Colour.build(colourOpts.names, extraColourLevels, input.colour ?? {}),
            Tokens_CSS.build(input.css ?? {}),
            Tokens_Themes.build(brightnessModes, contrastModes, colourOpts, input.themes?.input ?? []),
            Tokens_Icons.buildAsync(config.iconFontName ?? (this.name + ' Icons'), input.icons),
            Tokens_Photos.build({
                photos: input.photos,
                thumbnails: input.thumbnails,
            }),
        ]).then(async ([colour, css, themes, icons, photos]) => {
            if (typeof config.buildIconFont === 'object') {
                await icons.toIconFont(config.buildIconFont);
            }
            const tokens = new Tokens(input.name, colourOpts, { colour, css, icons, photos, themes }, input, {
                ...config,
                extraColourLevels: undefined,
            });
            return tokens.colour.addContrastTests().then(() => tokens);
        });
    }
    /**
     *  * @since 0.1.0-beta.0.draft — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    constructor(name, colourOpts, { colour, css, icons, photos, themes }, input, config = {}) {
        super();
        this.name = name;
        this.colourOpts = colourOpts;
        this.input = input;
        this.config = config;
        this.colour = colour;
        this.css = css;
        this.icons = icons;
        this.logos = new Tokens_Logos(this.input.logos);
        this.photos = photos;
        this.spacing = new Tokens_Spacing(this.input.spacing ?? {});
        this.themes = themes;
        const typeInput = this.input.typography ?? {};
        if (!typeInput.fonts) {
            typeInput.fonts = {};
        }
        if (typeInput.fonts.icons === false) {
            typeInput.fonts.icons = undefined;
        }
        else {
            const unicodeRange = Object.values(this.icons.getCodepoints()).map(num => `U+${num.toString(16).toUpperCase()}`).join(', ');
            const iconFontFamily = {
                printFontFace: true,
                ...typeInput.fonts.icons,
                slug: 'icons',
                name: this.icons.fontName,
                appendSystemFontsToFallbacks: false,
                css: {
                    letterSpacing: 0.1,
                },
                unicodeRange: unicodeRange ? unicodeRange : undefined,
            };
            const iconFontOptions = {
                ...iconFontFamily,
                filename: 'icons',
                includeLocalSrc: false,
                pathStyle: 'normal',
            };
            typeInput.fonts.icons = {
                ...iconFontFamily,
                weights: mergeArgs({
                    '400': {
                        normal: Tokens.Typography.Font.familyGenerator.fileGenerator('icons', name, '100 900', 'normal', iconFontOptions),
                        italic: Tokens.Typography.Font.familyGenerator.fileGenerator('icons', name, '100 900', 'italic', iconFontOptions),
                    }
                }, typeInput.fonts.icons?.weights, true),
            };
        }
        this.typography = new Tokens_Typography(this.spacing, typeInput);
    }
    toJSON() {
        return {
            name: this.name,
            icons: this.icons.toJSON(),
            logos: this.logos.toJSON(),
            spacing: this.spacing.toJSON(),
            typography: this.typography.toJSON(),
            colour: this.colour.toJSON(),
            themes: this.themes.toJSON(),
            ...this.photos.toJSON(),
            css: this.css.toJSON(),
        };
    }
    toScssVars() {
        return {
            name: this.name,
            ...this.spacing.toScssVars(),
            ...this.typography.toScssVars(),
            ...this.css.toScssVars(),
            icons: this.icons.toScssVars(),
            logos: this.logos.toScssVars(),
            ...this.photos.toScssVars(),
            colour: this.colour.toScssVars(),
            themes: this.themes.toScssVars(),
        };
    }
    toScss() {
        const tokensString = JsonToScss.convert(this.toScssVars(), '', { convertUnitStringsToNumbers: true }) || '()';
        const varContent = this.config.tokensAsDefault
            ? [
                '@use "sass:map";',
                '',
                '$designSystem: () !default;',
                `$designSystem: map.deep-merge( ${tokensString}, $designSystem );`,
            ]
            : [
                `$designSystem: ${tokensString};`
            ];
        const scss = [
            '// this file is auto-generated by the design-system-utilities Tokens class',
            varContent.join('\n'),
        ];
        return scss.join('\n\n');
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha
 */
(function (Tokens) {
    /**
     * @since 0.1.0-alpha
     */
    async function sample(input = {}, config = {}) {
        return Tokens.build(mergeArgs({
            name: 'Design System Utilities (Sample Brand Kit)',
            colour: {
                base: Tokens.SampleColours.base,
                turquoise: Tokens.SampleColours.turquoise,
                pink: Tokens.SampleColours.pink,
                // orange: Tokens.SampleColours.orange,
                yellow: Tokens.SampleColours.yellow,
                // red: Tokens.SampleColours.red,
                // orange: Tokens.SampleColours.orange,
                // yellow: Tokens.SampleColours.yellow,
                // green: Tokens.SampleColours.green,
                // turquoise: Tokens.SampleColours.turquoise,
                // blue: Tokens.SampleColours.blue,
                // purple: Tokens.SampleColours.purple,
                // pink: Tokens.SampleColours.pink,
                // yardstick: Tokens.SampleColours.yardstick,
                // 'yardstick-accent': Tokens.SampleColours[ 'yardstick-accent' ],
            },
            icons: {},
            logos: {},
            photos: {},
            thumbnails: {},
            themes: {
                contrast: ['max'],
            },
            typography: {
                fonts: {
                    hyperlegible: Typography.Font.Family.hyperlegible,
                    dyslexic: Typography.Font.Family.dyslexic,
                    monospace: Typography.Font.Family.monospace,
                },
            },
        }, input, true), {
            tokensAsDefault: true,
            ...config,
            iconFontName: 'Design System Utilities Icons',
        });
    }
    Tokens.sample = sample;
    ;
    /**
     * @since 0.1.0-beta.0.draft
     */
    Tokens.isOptionalIcon = Tokens_Icons.isOptionalIcon;
    /**
     * @since 0.1.0-beta.0.draft
    */
    Tokens.isRequiredIcon = Tokens_Icons.isRequiredIcon;
    /**
     * @since 0.1.0-alpha
     */
    Tokens.SampleColours = {
        yardstick: Tokens_Colour_ShadeMap.Yardsticks.base,
        'yardstick-accent': Tokens_Colour_ShadeMap.Yardsticks.accent,
        white: Tokens_Colour_ShadeMap.Yardsticks.white,
        black: Tokens_Colour_ShadeMap.Yardsticks.black,
        base: Tokens_Colour_ShadeMap.Yardsticks.base,
        red: {
            '100': { h: 5, s: 100, l: 97, },
            '300': { h: 6, s: 100, l: 76, },
            '500': { h: 3, s: 64, l: 50, },
            '700': { h: 3, s: 85, l: 28, },
            '800': { h: 4, s: 95, l: 17, },
            '900': { h: 7, s: 100, l: 4, },
        },
        orange: {
            '100': { h: 35, s: 100, l: 96.5, },
            '300': { h: 29, s: 95, l: 65, },
            '500': { h: 22, s: 90, l: 43, },
            '700': { h: 13.5, s: 100, l: 25, },
            '800': { h: 12.5, s: 100, l: 15.5, },
            '900': { h: 10, s: 100, l: 3, },
        },
        yellow: {
            '100': { h: 49, s: 100, l: 94, },
            '300': { h: 36.5, s: 85, l: 63, },
            '500': { h: 35, s: 100, l: 37, },
            '700': { h: 29, s: 100, l: 21, },
            '800': { h: 25, s: 100, l: 14, },
            '900': { h: 19, s: 100, l: 3, },
        },
        green: {
            '100': { h: 112, s: 100, l: 96, },
            '300': { h: 115, s: 38, l: 60, },
            '500': { h: 125, s: 45, l: 35, },
            '700': { h: 119, s: 70, l: 16, },
            '800': { h: 114, s: 80, l: 10.5, },
            '900': { h: 112, s: 100, l: 2, },
        },
        turquoise: {
            '100': { h: 157, s: 100, l: 96, },
            '300': { h: 160, s: 40, l: 60, },
            '500': { h: 168, s: 90, l: 27.5, },
            '700': { h: 162, s: 100, l: 15, },
            '800': { h: 159, s: 100, l: 10.5, },
            '900': { h: 153, s: 100, l: 2, },
        },
        blue: {
            '100': { h: 245, s: 100, l: 97, },
            '500': { h: 230, s: 62, l: 60, },
            '700': { h: 223, s: 70, l: 32, },
            '800': { h: 226, s: 65, l: 19, },
            '900': { h: 244, s: 100, l: 4, },
        },
        purple: {
            '100': { h: 270, s: 100, l: 97, },
            '300': { h: 275, s: 77, l: 79, },
            '500': { h: 280, s: 60, l: 56, },
            '700': { h: 277.5, s: 75, l: 30, },
            '800': { h: 275.5, s: 78, l: 18.5, },
            '900': { h: 285, s: 100, l: 4.5, },
        },
        pink: {
            '100': { h: 325, s: 100, l: 97, },
            '300': { h: 323.5, s: 70, l: 77, },
            '500': { h: 320, s: 53, l: 51, },
            '700': { h: 321, s: 68, l: 26, },
            '800': { h: 322, s: 85, l: 16.5, },
            '900': { h: 322, s: 100, l: 5, },
        },
    };
    /**
     * @since 0.1.0-alpha
     */
    let Typography;
    (function (Typography) {
        /**
         * @since 0.1.0-alpha
         */
        let Font;
        (function (Font) {
            /**
             * @since 0.1.0-alpha
             */
            Font.allWeights = [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
            ];
            /**
             * @since 0.1.0-alpha
             */
            Font.SystemMonospace = Tokens_Typography.Font.SystemMonospace;
            /**
             * @since 0.1.0-alpha
             */
            Font.SystemUI = Tokens_Typography.Font.SystemUI;
            /**
             * Helps to generate all the weights for a font family.
             *
             * @since 0.1.0-alpha
             */
            function familyGenerator(slug, name, { includeLocalSrc, ...familyOpts } = {}, weightOpts = {}) {
                return {
                    slug,
                    name,
                    fallbacks: familyOpts.fallbacks ?? [],
                    ...familyOpts,
                    weights: objectGenerator(Font.allWeights, (weight) => objectGenerator(["normal", "italic"], (style) => familyGenerator.fileGenerator(slug, name, weight, style, {
                        ...familyOpts,
                        ...weightOpts?.[weight],
                    }))),
                };
            }
            Font.familyGenerator = familyGenerator;
            /**
             * Utilities for the {@link familyGenerator} function.
             *
             * @since 0.1.0-alpha
             */
            (function (familyGenerator) {
                /**
                 * @since 0.1.0-alpha
                 */
                function fileGenerator(subpath, name, weight, style, opts = {}) {
                    const _slug = slugify(name);
                    let _filename = opts.filename ?? `${_slug}-${opts.pathWeight ?? weight}`;
                    switch (opts.pathStyle ?? style) {
                        case 'italic':
                            _filename = _filename + '-italic';
                            break;
                    }
                    const paths = {};
                    if (opts.includeLocalSrc) {
                        let weightSuffix = '';
                        let styleSuffix = '';
                        switch (opts.pathWeight ?? weight) {
                            case '100':
                                weightSuffix = ' Thin';
                                break;
                            case '200':
                                weightSuffix = ' ExtraLight';
                                break;
                            case '300':
                                weightSuffix = ' Light';
                                break;
                            case '500':
                                weightSuffix = ' Medium';
                                break;
                            case '600':
                                weightSuffix = ' SemiBold';
                                break;
                            case '700':
                                weightSuffix = ' Bold';
                                break;
                            case '800':
                                weightSuffix = ' ExtraBold';
                                break;
                            case '900':
                                weightSuffix = ' Black';
                                break;
                        }
                        switch (opts.pathStyle ?? style) {
                            case 'italic':
                                styleSuffix = ' Italic';
                                break;
                        }
                        paths.local = [
                            name + weightSuffix + styleSuffix,
                            ((weightSuffix || styleSuffix)
                                ? `${name}-${weightSuffix}${styleSuffix}`.replace(/\s+/g, '')
                                : name.replace(/\s+/g, '')),
                        ];
                    }
                    return {
                        weight: weight,
                        style: style,
                        display: opts.display,
                        lineGapOverride: opts.lineGapOverride,
                        sizeAdjust: opts.sizeAdjust,
                        unicodeRange: opts.unicodeRange,
                        path: {
                            ...paths,
                            woff2: `${subpath}/woff2/${_filename}.woff2`,
                            woff: `${subpath}/woff/${_filename}.woff`,
                            ttf: `${subpath}/ttf/${_filename}.ttf`,
                        },
                    };
                }
                familyGenerator.fileGenerator = fileGenerator;
            })(familyGenerator = Font.familyGenerator || (Font.familyGenerator = {}));
            /**
             * @since 0.1.0-alpha
             */
            let Family;
            (function (Family) {
                Family.dyslexic = {
                    slug: 'dyslexic',
                    name: 'Open Dyslexic',
                    appendSystemFontsToFallbacks: true,
                    contentWidthScale: 1.2,
                    css: {
                        icon: {
                            inline: {
                                buffer: {
                                    start: 1.5,
                                },
                            },
                            size: {
                                $: 1.0625,
                                inline: 1.25,
                            },
                        },
                    },
                    fallbacks: [
                        'Verdana',
                    ],
                    lineHeightScale: 1.15,
                    sizeAdjust: '95%',
                    weights: objectGenerator(['400', '700'], (weight) => objectGenerator(["normal", "italic"], (style) => familyGenerator.fileGenerator('dyslexic', 'Open Dyslexic', weight == '400' ? '100 400' : '500 900', style, {
                        pathWeight: weight,
                    }))),
                };
                Family.hyperlegible = {
                    slug: 'hyperlegible',
                    name: 'Atkinson Hyperlegible',
                    appendSystemFontsToFallbacks: true,
                    contentWidthScale: 1.035,
                    fallbacks: [
                        'Verdana',
                    ],
                    // lineHeightScale: 1.035,
                    lineHeightScale: 1,
                    sizeAdjust: '106.5%',
                    weights: objectGenerator(['400', '700'], (weight) => objectGenerator(["normal", "italic"], (style) => familyGenerator.fileGenerator('hyperlegible', 'Atkinson Hyperlegible', weight === '400' ? '100 400' : '500 900', style, {
                        pathWeight: weight,
                    }))),
                };
                Family.monospace = {
                    slug: 'monospace',
                    name: 'IBM Plex Mono',
                    appendSystemFontsToFallbacks: 'monospace',
                    contentWidthScale: 1.125,
                    css: {
                        letterSpacing: -0.015,
                    },
                    fallbacks: [
                        'Courier New',
                    ],
                    sizeAdjust: '96.5%',
                    weights: objectGenerator(Font.allWeights.filter(w => w !== '800' && w !== '900'), (weight) => objectGenerator(["normal", "italic"], (style) => familyGenerator.fileGenerator('monospace', 'IBM Plex Mono', weight === '700' ? '700 900' : weight, style, {
                        pathWeight: weight,
                    }))),
                };
            })(Family = Font.Family || (Font.Family = {}));
        })(Font = Typography.Font || (Typography.Font = {}));
    })(Typography = Tokens.Typography || (Tokens.Typography = {}));
    /**
     * @since 0.1.0-alpha
     */
    let Themes;
    (function (Themes) {
        /**
         * @since 0.1.0-alpha
         */
        Themes.allHeadingLevels = Tokens_Themes_Set.SingleMode.allHeadingLevels;
        /**
         * @since 0.1.0-alpha
         */
        let SingleMode;
        (function (SingleMode) {
            /**
             * @since 0.1.0-alpha
             */
            SingleMode.colourOption = Tokens_Themes_Set.SingleMode.Build.colourOption;
            /**
             * @since 0.1.0-beta.0.draft
             */
            let Levels;
            (function (Levels) {
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                Levels.DEFAULT = Tokens_Themes_Set.SingleMode.Levels.DEFAULT;
                /**
                 * @since 0.1.0-beta.0.draft
                 */
                Levels.parse = Tokens_Themes_Set.SingleMode.Levels.parse;
            })(Levels = SingleMode.Levels || (SingleMode.Levels = {}));
        })(SingleMode = Themes.SingleMode || (Themes.SingleMode = {}));
    })(Themes = Tokens.Themes || (Tokens.Themes = {}));
})(Tokens || (Tokens = {}));
