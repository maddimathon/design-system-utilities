/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';
import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Themes_Set_SingleMode extends AbstractTokens {
    description;
    levelsInUse;
    data;
    /**
     * An easy way to generate a complete token set from limited inputs.
     *
     * @since 0.1.0-alpha.draft
     */
    static async build(preset, brightness, clrNames, input, overrides = {}) {
        let defaultLevels;
        let levels;
        const variations = Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations);
        const clrOpt = Tokens_Themes_Set_SingleMode.Build.colourOption;
        const isLightMode = brightness !== 'dark';
        let description = null;
        // returns if forced colours
        switch (preset) {
            case 'average':
                description = 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';
                defaultLevels = {
                    background: isLightMode ? '200' : '150',
                    text: {
                        $: isLightMode ? '800' : '750',
                        accent: isLightMode ? '700' : '650',
                        min: isLightMode ? '700' : '650',
                    },
                    ui: {
                        $: isLightMode ? '750' : '700',
                        accent: isLightMode ? '650' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    heading: objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => {
                        // returns on match
                        switch (hdgNum) {
                            case 1:
                                return isLightMode ? '800' : '750';
                            case 2:
                            case 3:
                                return isLightMode ? '750' : '700';
                        }
                        return isLightMode ? '700' : '650';
                    }),
                };
                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels(mergeArgs(defaultLevels, input.levels, true));
                overrides.selection = {
                    bg: clrOpt(variations.universal.primary, '400'),
                    text: clrOpt(variations.base, '900'),
                    ...overrides.selection,
                };
                break;
            case 'low':
                description = 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';
                defaultLevels = {
                    background: isLightMode ? '300' : '200',
                    text: {
                        $: isLightMode ? '750' : '650',
                        accent: isLightMode ? '700' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    ui: {
                        $: isLightMode ? '650' : '600',
                        accent: isLightMode ? '650' : '600',
                        min: isLightMode ? '650' : '600',
                    },
                    heading: objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, isLightMode ? ((hdgNum) => hdgNum <= 1 ? '600' : hdgNum <= 3 ? '650' : '700') : ((hdgNum) => hdgNum <= 1 ? '700' : '600')),
                };
                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels(mergeArgs(defaultLevels, input.levels, true));
                overrides.selection = {
                    bg: clrOpt(variations.universal.primary, '400'),
                    text: clrOpt(variations.base, '850'),
                    ...overrides.selection,
                };
                break;
            case 'high':
                description = 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                defaultLevels = {
                    background: '100',
                    text: {
                        $: '850',
                        accent: '750',
                        min: '700',
                    },
                    ui: {
                        $: '750',
                        accent: '700',
                        min: '700',
                    },
                    heading: objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => {
                        // returns on match
                        switch (hdgNum) {
                            case 1:
                            case 2:
                            case 3:
                                return '750';
                        }
                        return '800';
                    }),
                };
                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels(mergeArgs(defaultLevels, input.levels, true));
                break;
            case 'max':
                description = 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';
                defaultLevels = {
                    background: '100',
                    text: {
                        $: '900',
                        accent: '850',
                        min: '850',
                    },
                    ui: {
                        $: '850',
                        accent: '850',
                        min: '800',
                    },
                    heading: objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, () => '850'),
                };
                levels = Tokens_Themes_Set_SingleMode.Build.completeLevels(mergeArgs(defaultLevels, input.levels, true));
                overrides.selection = {
                    bg: clrOpt(variations.universal.primary, '850'),
                    text: clrOpt(variations.base, '100'),
                    ...overrides.selection,
                };
                break;
            case 'forcedColors':
                const _input = {
                    ...input,
                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations),
                };
                return new Tokens_Themes_Set_SingleMode('This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!', [], await Tokens_Themes_Set_SingleMode.Build.forcedColors(_input));
        }
        const levelsInUse = Object.values(objectFlatten(levels)).concat(Object.values(objectFlatten(overrides)).map((val) => {
            const match = String(val).match(/\-(\d+)$/);
            // returns
            if (match && match[1]) {
                return match[1];
            }
            return false;
        }).filter(v => v !== false));
        return new Tokens_Themes_Set_SingleMode(description, arrayUnique(levelsInUse).sort(), mergeArgs(await Tokens_Themes_Set_SingleMode.Build.data({
            levels,
            variations,
        }), overrides, true));
    }
    constructor(description, levelsInUse, data) {
        super();
        this.description = description;
        this.levelsInUse = levelsInUse;
        this.data = data;
    }
    toJSON() {
        const levelsInUse = this.levelsInUse.map((level) => {
            const dark = (1000 - Number(level)).toFixed(0);
            return {
                light: level,
                dark: dark.padStart(Math.max(0, 3 - dark.length), '0'),
            };
        });
        return {
            description: this.description ?? undefined,
            data: this.data,
            levelsInUse,
        };
    }
    toScssVars() {
        return {
            ...this.data,
            system: {
                ...this.data.system,
                background: this.data.background,
                button: this.data.button.primary,
                input: this.data.field,
                link: this.data.link,
                selection: this.data.selection,
                text: {
                    $: this.data.text.$,
                    active: this.data.text.active,
                    disabled: this.data.text.disabled,
                },
            },
        };
    }
}
/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_Themes_Set_SingleMode) {
    Tokens_Themes_Set_SingleMode.allHeadingLevels = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ];
    ;
    ;
    ;
    ;
    ;
    ;
    /* Set Builders
     * ====================================================================== */
    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
     * not meant to be exposed through the API.
     *
     * @since 0.1.0-alpha.draft
     * @internal
     */
    let Build;
    (function (Build) {
        ;
        ;
        function colourOption(name, level) {
            return `${name}-${level}`;
        }
        Build.colourOption = colourOption;
        function completeLevels(input) {
            const text = typeof input?.text === 'object'
                ? {
                    $: input.text?.$ ?? '800',
                    accent: input.text?.accent ?? '800',
                    min: input.text?.min ?? '800',
                }
                : {
                    $: input?.text ?? '800',
                    accent: input?.text ?? '800',
                    min: input?.text ?? '800',
                };
            const ui = typeof input?.ui === 'object'
                ? {
                    $: input.ui?.$ ?? '700',
                    accent: input.ui?.accent ?? '700',
                    min: input.ui?.min ?? '700',
                }
                : {
                    $: input?.ui ?? '700',
                    accent: input?.ui ?? '700',
                    min: input?.ui ?? '700',
                };
            const heading = typeof input?.heading === 'object'
                ? objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => input.heading?.[hdgNum] ?? text.accent)
                : objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, () => input?.heading ?? text.accent);
            return {
                background: input?.background ?? '100',
                text,
                ui,
                heading,
            };
        }
        Build.completeLevels = completeLevels;
        function completeVariations(clrNames, input) {
            const clrNames_noBase = clrNames.filter(v => v !== 'base');
            const base = 'base';
            const clr_1 = input?.universal?.primary ?? clrNames_noBase[0] ?? base;
            const clr_2 = input?.universal?.secondary ?? clrNames_noBase[1] ?? clr_1;
            const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[2] ?? clr_2;
            const def = {
                base: base,
                universal: {
                    primary: clr_1,
                    secondary: clr_2,
                },
                text: {
                    active: clr_3,
                    disabled: base,
                    grey: base,
                },
                heading: objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => hdgNum >= 9 ? base : hdgNum >= 7 ? clr_2 : clr_1),
                interactive: {
                    hover: clr_2,
                    active: clr_3,
                    disabled: base,
                },
            };
            const vars = mergeArgs(def, input, true);
            return vars;
        }
        Build.completeVariations = completeVariations;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha.draft
         */
        async function data(input) {
            const clrOpt = colourOption;
            const { levels, variations, } = input;
            const text = {
                $: clrOpt(variations.base, levels.text.$),
                ...objectMap(variations.universal, ({ value: clrName }) => clrOpt(clrName, levels.text.accent)),
                ...objectMap(variations.text, ({ value: clrName }) => clrOpt(clrName, levels.text.accent)),
                disabled: clrOpt(variations.text.disabled, levels.text.min),
                grey: clrOpt(variations.text.disabled, levels.text.min),
            };
            const ui = {
                $: clrOpt(variations.base, levels.ui.$),
                ...objectMap(variations.universal, ({ value: clrName }) => clrOpt(clrName, levels.ui.accent)),
                ...objectMap(variations.text, ({ value: clrName }) => clrOpt(clrName, levels.ui.accent)),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
                grey: clrOpt(variations.text.disabled, levels.ui.min),
            };
            const heading = objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => clrOpt(variations.heading[hdgNum] ?? variations.heading[10], levels.heading[hdgNum]));
            const link = {
                $: clrOpt(variations.universal.primary, levels.text.accent),
                visited: clrOpt(variations.universal.primary, levels.text.accent),
                ...objectMap(variations.interactive, ({ value: clrName }) => clrOpt(clrName, levels.text.accent)),
                disabled: clrOpt(variations.text.disabled, levels.text.min),
            };
            const linkIcon = {
                $: clrOpt(variations.base, levels.ui.min),
                visited: clrOpt(variations.base, levels.ui.accent),
                hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                active: clrOpt(variations.interactive.active, levels.ui.accent),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
            };
            const linkUI = {
                $: clrOpt(variations.universal.primary, levels.ui.accent),
                visited: clrOpt(variations.universal.primary, levels.ui.accent),
                hover: 'transparent',
                active: clrOpt(variations.interactive.active, levels.ui.accent),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
            };
            const singleButtonMaker = (_primaryClr) => {
                const _secondaryClr = _primaryClr ==
                    variations.universal.primary
                    ? variations.universal.secondary
                    : _primaryClr === variations.universal.secondary
                        ? variations.text.active
                        : variations.universal.primary;
                const _activeClr = _primaryClr ==
                    variations.text.active
                    ? variations.universal.secondary
                    : _secondaryClr == variations.text.active
                        ? variations.universal.primary
                        : variations.text.active;
                return {
                    bg: {
                        $: clrOpt(_primaryClr, levels.text.accent),
                        hover: clrOpt(_secondaryClr, levels.text.accent),
                        active: clrOpt(_activeClr, levels.text.accent),
                    },
                    border: {
                        $: clrOpt(_primaryClr, levels.text.accent),
                        hover: clrOpt(_secondaryClr, levels.text.accent),
                        active: clrOpt(_activeClr, levels.text.accent),
                    },
                    text: {
                        $: clrOpt(variations.base, levels.background),
                        hover: clrOpt(variations.base, levels.background),
                        active: clrOpt(variations.base, levels.background),
                    },
                    ui: {
                        $: clrOpt(variations.base, levels.background),
                        hover: clrOpt(variations.base, levels.background),
                        active: clrOpt(variations.base, levels.background),
                    },
                };
            };
            const button = {
                ...objectMap(variations.universal, ({ value: clrName }) => singleButtonMaker(clrName)),
                disabled: {
                    bg: {
                        $: clrOpt(variations.base, levels.text.min),
                        hover: clrOpt(variations.base, levels.text.min),
                        active: clrOpt(variations.base, levels.text.min),
                    },
                    border: {
                        $: clrOpt(variations.base, levels.text.min),
                        hover: clrOpt(variations.base, levels.text.min),
                        active: clrOpt(variations.base, levels.text.min),
                    },
                    text: {
                        $: clrOpt(variations.base, levels.background),
                        hover: clrOpt(variations.base, levels.background),
                        active: clrOpt(variations.base, levels.background),
                    },
                    ui: {
                        $: clrOpt(variations.base, levels.background),
                        hover: clrOpt(variations.base, levels.background),
                        active: clrOpt(variations.base, levels.background),
                    },
                },
            };
            const complete = {
                background: clrOpt(variations.base, levels.background),
                text,
                ui,
                heading,
                selection: {
                    bg: clrOpt(variations.universal.primary, levels.text.accent),
                    text: clrOpt(variations.base, levels.background),
                },
                link,
                'link-icon': linkIcon,
                'link-ui': linkUI,
                button,
                field: {
                    accent: {
                        $: clrOpt(variations.universal.primary, levels.ui.accent),
                        hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                        active: clrOpt(variations.interactive.active, levels.ui.accent),
                    },
                    bg: {
                        $: clrOpt(variations.base, levels.background),
                        hover: clrOpt(variations.base, levels.background),
                        active: clrOpt(variations.base, levels.background),
                    },
                    border: {
                        $: clrOpt(variations.base, levels.ui.min),
                        hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                        active: clrOpt(variations.interactive.active, levels.ui.accent),
                    },
                    text: {
                        $: clrOpt(variations.base, levels.text.$),
                        hover: clrOpt(variations.base, levels.text.$),
                        active: clrOpt(variations.base, levels.text.$),
                    },
                },
                system: {
                    accent: {
                        bg: clrOpt(variations.universal.primary, levels.text.accent),
                        text: clrOpt(variations.base, levels.background),
                    },
                    mark: {
                        bg: clrOpt(variations.text.active, levels.text.accent),
                        text: clrOpt(variations.base, levels.background),
                    },
                    selected: {
                        bg: clrOpt(variations.interactive.hover, levels.text.accent),
                        text: clrOpt(variations.base, levels.background),
                    },
                },
            };
            return complete;
        }
        Build.data = data;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha.draft
         */
        async function forcedColors(input) {
            const { variations, } = input;
            const sysclr = {
                background: 'Canvas',
                text: 'CanvasText',
            };
            const text = {
                $: sysclr.text,
                ...objectMap(variations.universal, () => sysclr.text),
                ...objectMap(variations.text, () => sysclr.text),
                active: 'ActiveText',
                disabled: 'GrayText',
                grey: 'GrayText',
            };
            const link = {
                $: 'LinkText',
                visited: 'VisitedText',
                hover: 'ActiveText',
                active: 'ActiveText',
                disabled: 'GrayText',
            };
            const heading = objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, () => sysclr.text);
            const singleButton = {
                bg: {
                    $: 'ButtonFace',
                    hover: 'SelectedItem',
                    active: 'ButtonFace',
                },
                border: {
                    $: [
                        'ButtonFace',
                        'ButtonBorder',
                    ],
                    active: [
                        'ButtonFace',
                        'ButtonBorder',
                    ],
                    hover: 'SelectedItem',
                },
                text: {
                    $: 'ButtonText',
                    hover: 'SelectedItemText',
                    active: 'ButtonText',
                },
                ui: {
                    $: 'ButtonText',
                    hover: 'SelectedItemText',
                    active: 'ButtonText',
                },
            };
            const button = {
                ...objectMap(variations.universal, () => singleButton),
                disabled: singleButton,
            };
            const complete = {
                background: sysclr.background,
                text,
                ui: text,
                heading,
                selection: {
                    bg: 'Highlight',
                    text: 'HighlightText',
                },
                link,
                'link-icon': link,
                'link-ui': link,
                button,
                field: {
                    accent: {
                        $: 'ActiveText',
                        hover: 'ActiveText',
                        active: 'ActiveText',
                    },
                    bg: {
                        $: 'Field',
                        hover: 'SelectedItem',
                        active: 'Field',
                    },
                    border: {
                        $: 'FieldText',
                        hover: 'SelectedItem',
                        active: 'FieldText',
                    },
                    text: {
                        $: 'FieldText',
                        hover: 'SelectedItemText',
                        active: 'FieldText',
                    },
                },
                system: {
                    accent: {
                        bg: [
                            'CanvasText',
                            'AccentColor',
                        ],
                        text: [
                            'Canvas',
                            'AccentColorText',
                        ],
                    },
                    mark: {
                        bg: [
                            'CanvasText',
                            'AccentColor',
                            'Mark',
                        ],
                        text: [
                            'Canvas',
                            'AccentColorText',
                            'MarkText',
                        ],
                    },
                    selected: {
                        bg: 'SelectedItem',
                        text: 'SelectedItemText',
                    },
                },
            };
            return complete;
        }
        Build.forcedColors = forcedColors;
    })(Build = Tokens_Themes_Set_SingleMode.Build || (Tokens_Themes_Set_SingleMode.Build = {}));
})(Tokens_Themes_Set_SingleMode || (Tokens_Themes_Set_SingleMode = {}));
//# sourceMappingURL=Themes_Set_SingleMode.js.map