/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set_SingleMode extends AbstractTokens {
    description;
    levelsInUse;
    data;
    /**
     * An easy way to generate a complete token set from limited inputs.
     *
     * @since 0.1.0-alpha
     */
    static async build(preset, brightness, clrNames, input, overrides = {}) {
        const defaultLevels = preset !== 'forcedColors'
            ? Tokens_Themes_Set_SingleMode.Levels.DEFAULT[preset]
            : Tokens_Themes_Set_SingleMode.Levels.DEFAULT.max;
        const levels = Tokens_Themes_Set_SingleMode.Levels.parse(defaultLevels, input.levels);
        const variations = Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations);
        const clrOpt = Tokens_Themes_Set_SingleMode.Build.colourOption;
        let description = input.description ?? null;
        let defaultOverrides = {};
        // returns if forced colours
        switch (preset) {
            case 'average':
                description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';
                defaultOverrides.selection = {
                    bg: clrOpt(variations.universal.primary, '300'),
                    text: clrOpt(variations.base, '800'),
                };
                break;
            case 'low':
                description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';
                defaultOverrides.selection = {
                    bg: clrOpt(variations.universal.primary, '300'),
                    text: clrOpt(variations.base, '800'),
                };
                break;
            case 'high':
                description = description ?? 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                break;
            case 'max':
                description = description ?? 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';
                defaultOverrides.background = {
                    $: 'white',
                    grey: 'white',
                    ...objectGenerator(arrayUnique([
                        ...Object.keys(variations.universal),
                        ...Object.keys(variations.background),
                    ]), () => 'white'),
                };
                defaultOverrides.text = {
                    $: 'black',
                    ...objectGenerator(arrayUnique([
                        ...Object.keys(variations.universal),
                        ...Object.keys(variations.text),
                    ]), () => 'black'),
                };
                defaultOverrides.ui = {
                    $: 'black',
                    ...objectGenerator(arrayUnique([
                        ...Object.keys(variations.universal),
                        ...Object.keys(variations.text),
                    ]), () => 'black'),
                };
                defaultOverrides.selection = {
                    bg: clrOpt(variations.universal.primary, '850'),
                    text: clrOpt(variations.base, '100'),
                };
                break;
            case 'forcedColors':
                const _input = {
                    ...input,
                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations),
                };
                return new Tokens_Themes_Set_SingleMode('This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!', [], await Tokens_Themes_Set_SingleMode.Build.forcedColors(_input));
        }
        const allLevelsInUse = Object.values(objectFlatten(levels)).concat(Object.values(objectFlatten(overrides)).map((val) => {
            const match = String(val).match(/\-(\d+)$/);
            // returns
            if (match && match[1]) {
                return match[1];
            }
            return false;
        }).filter(v => v !== false));
        const levelsInUse = arrayUnique(allLevelsInUse).sort();
        return Tokens_Themes_Set_SingleMode.Build.data({
            levels,
            variations,
        }).then((defaultInputData) => new Tokens_Themes_Set_SingleMode(description, levelsInUse, mergeArgs(defaultInputData, mergeArgs(defaultOverrides, overrides, true), true)));
    }
    constructor(description, levelsInUse, data) {
        super();
        this.description = description;
        this.levelsInUse = levelsInUse;
        this.data = data;
    }
    toJSON() {
        const levelsInUse = this.levelsInUse.map((light) => ({
            light,
            dark: ColourUtilities.Levels.toDark(light),
        }));
        return {
            description: this.description ?? undefined,
            data: this.data,
            levelsInUse,
        };
    }
    toScssVars() {
        return {
            ...this.data,
            link: {
                ...this.data.link,
                outline: {
                    $: this.data.link.outline.hover,
                    visited: this.data.link.outline.hover,
                    ...this.data.link.outline,
                },
            },
            system: {
                ...this.data.system,
                background: this.data.background,
                button: this.data.button.primary,
                input: this.data.input.$,
                link: this.data.link.$,
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
 * @since 0.1.0-alpha
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
    /**
     * Utilities and types for the complete tokens theme data for a single mode.
     *
     * @since 0.1.1-alpha.1.draft
     */
    let Data;
    (function (Data) {
        ;
    })(Data = Tokens_Themes_Set_SingleMode.Data || (Tokens_Themes_Set_SingleMode.Data = {}));
    ;
    ;
    /* Levels
     * ====================================================================== */
    /**
     * Utilities and types for levels.
     *
     * @since 0.1.1-alpha.1.draft
     */
    let Levels;
    (function (Levels) {
        ;
        ;
        /**
         * @since 0.1.1-alpha.0
         * @since 0.1.1-alpha.1.draft — Moved to Tokens_Themes_Set_SingleMode.Levels and renamed.
         */
        let DEFAULT;
        (function (DEFAULT) {
            DEFAULT.average = {
                background: {
                    $: '150',
                    accent: '200',
                    grey: '200',
                },
                text: {
                    $: '750',
                    accent: '700',
                    min: '600',
                },
                ui: {
                    $: '750',
                    accent: '700',
                    min: '600',
                },
                heading: {
                    1: '800',
                    2: '700',
                    3: '700',
                    4: '700',
                    5: '700',
                    6: '700',
                    7: '700',
                    8: '700',
                    9: '700',
                    10: '700',
                },
            };
            DEFAULT.high = {
                background: {
                    $: '100',
                    accent: '150',
                    grey: '150',
                },
                text: {
                    $: '850',
                    accent: '750',
                    min: '700',
                },
                ui: {
                    $: '850',
                    accent: '750',
                    min: '700',
                },
                heading: {
                    1: '800',
                    2: '700',
                    3: '700',
                    4: '700',
                    5: '750',
                    6: '750',
                    7: '750',
                    8: '750',
                    9: '750',
                    10: '750',
                },
            };
            DEFAULT.low = {
                background: {
                    $: '300',
                    accent: '250',
                    grey: '250',
                },
                text: {
                    $: '700',
                    accent: '700',
                    min: '600',
                },
                ui: {
                    $: '700',
                    accent: '700',
                    min: '600',
                },
                heading: {
                    1: '600',
                    2: '700',
                    3: '700',
                    4: '700',
                    5: '750',
                    6: '750',
                    7: '750',
                    8: '750',
                    9: '750',
                    10: '750',
                },
            };
            DEFAULT.max = {
                background: 'white',
                text: 'black',
                ui: 'black',
                heading: {
                    1: '850',
                    2: '850',
                    3: '850',
                    4: '850',
                    5: '850',
                    6: '850',
                    7: '850',
                    8: '850',
                    9: '850',
                    10: '850',
                },
            };
        })(DEFAULT = Levels.DEFAULT || (Levels.DEFAULT = {}));
        /**
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.1.draft — Moved to Tokens_Themes_Set_SingleMode.Levels and renamed. Added default param and made inputs optional.
         */
        function parse(defaults, inputs = {}) {
            const nomalized_input = {
                background: typeof inputs?.background === 'object'
                    ? inputs?.background
                    : {
                        $: inputs?.background,
                        accent: inputs?.background,
                        grey: inputs?.background,
                    },
                heading: typeof inputs?.heading === 'object'
                    ? inputs?.heading
                    : inputs?.heading
                        ? objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, () => inputs?.heading)
                        : {},
                text: typeof inputs?.text === 'object'
                    ? inputs?.text
                    : {
                        $: inputs?.text,
                        accent: inputs?.text,
                        min: inputs?.text,
                    },
                ui: typeof inputs?.ui === 'object'
                    ? inputs?.ui
                    : {
                        $: inputs?.ui,
                        accent: inputs?.ui,
                        min: inputs?.ui,
                    },
            };
            const DEFAULTS = {
                background: typeof defaults?.background === 'object'
                    ? defaults?.background
                    : {
                        $: defaults?.background,
                        accent: defaults?.background,
                        grey: defaults?.background,
                    },
                heading: typeof defaults?.heading === 'object'
                    ? defaults?.heading
                    : objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, () => defaults?.heading),
                text: typeof defaults?.text === 'object'
                    ? defaults?.text
                    : {
                        $: defaults?.text,
                        accent: defaults?.text,
                        min: defaults?.text,
                    },
                ui: typeof defaults?.ui === 'object'
                    ? defaults?.ui
                    : {
                        $: defaults?.ui,
                        accent: defaults?.ui,
                        min: defaults?.ui,
                    },
            };
            const background = {
                $: nomalized_input.background?.$ ?? DEFAULTS.background.$,
                accent: nomalized_input.background?.accent ?? nomalized_input.background?.$ ?? DEFAULTS.background.accent,
                grey: nomalized_input.background?.grey ?? nomalized_input.background?.$ ?? DEFAULTS.background.grey,
            };
            const text = {
                $: nomalized_input.text?.$ ?? DEFAULTS.text.$,
                accent: nomalized_input.text?.accent ?? nomalized_input.text?.$ ?? DEFAULTS.text.accent,
                min: nomalized_input.text?.min ?? nomalized_input.text?.$ ?? DEFAULTS.text.min,
            };
            const ui = {
                $: nomalized_input.ui?.$ ?? nomalized_input.text?.$ ?? DEFAULTS.ui.$,
                accent: nomalized_input.ui?.accent ?? nomalized_input.text?.accent ?? nomalized_input.ui?.$ ?? DEFAULTS.ui.accent,
                min: nomalized_input.ui?.min ?? nomalized_input.text?.min ?? nomalized_input.ui?.$ ?? DEFAULTS.ui.min,
            };
            const heading = objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => nomalized_input.heading?.[hdgNum] ?? text.accent ?? DEFAULTS.heading[hdgNum]);
            return {
                background,
                text,
                ui,
                heading,
            };
        }
        Levels.parse = parse;
    })(Levels = Tokens_Themes_Set_SingleMode.Levels || (Tokens_Themes_Set_SingleMode.Levels = {}));
    ;
    /* Set Builders
     * ====================================================================== */
    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
     * not meant to be exposed through the API.
     *
     * @since 0.1.0-alpha
     * @internal
     */
    let Build;
    (function (Build) {
        ;
        ;
        function colourOption(name, level) {
            // returns
            switch (level) {
                case 'black':
                case 'white':
                    return level;
            }
            return `${name}-${level}`;
        }
        Build.colourOption = colourOption;
        function completeVariations(clrNames, input) {
            const clrNames_noBase = clrNames.filter(v => v !== 'base');
            const base = 'base';
            const clr_1 = input?.universal?.primary ?? clrNames_noBase[0] ?? base;
            const clr_2 = input?.universal?.secondary ?? clrNames_noBase[1] ?? clr_1;
            const clr_3 = input?.text?.active ?? input?.interactive?.active ?? clrNames_noBase[2] ?? clr_2;
            const def = {
                base: base,
                background: {
                    grey: base,
                },
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
            if (!input?.background) {
                def.background.primary = clr_1;
            }
            const vars = mergeArgs(def, input, true);
            return vars;
        }
        Build.completeVariations = completeVariations;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha
         */
        async function data(input) {
            const clrOpt = colourOption;
            const { levels, variations, } = input;
            const background = {
                $: clrOpt(variations.base, levels.background.$),
                ...objectMap(variations.background, ([key, clrName]) => clrOpt(clrName, levels.background.grey)),
                ...objectMap(variations.universal, ([key, clrName]) => clrOpt(clrName, levels.background.accent)),
                grey: clrOpt(variations.base, levels.background.grey),
            };
            const text = {
                $: clrOpt(variations.base, levels.text.$),
                ...objectMap(variations.universal, ([key, clrName]) => clrOpt(clrName, levels.text.accent)),
                ...objectMap(variations.text, ([key, clrName]) => clrOpt(clrName, levels.text.accent)),
                disabled: clrOpt(variations.text.disabled, levels.text.min),
                grey: clrOpt(variations.text.disabled, levels.text.accent),
            };
            const ui = {
                $: clrOpt(variations.base, levels.ui.$),
                ...objectMap(variations.universal, ([key, clrName]) => clrOpt(clrName, levels.ui.accent)),
                ...objectMap(variations.text, ([key, clrName]) => clrOpt(clrName, levels.ui.accent)),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
                grey: clrOpt(variations.text.disabled, levels.ui.accent),
            };
            const heading = objectGenerator(Tokens_Themes_Set_SingleMode.allHeadingLevels, (hdgNum) => clrOpt(variations.heading[hdgNum] ?? variations.heading[10], levels.heading[hdgNum]));
            const link = {
                $: clrOpt(variations.universal.primary, levels.text.accent),
                visited: clrOpt(variations.universal.primary, levels.text.accent),
                ...objectMap(variations.interactive, ([key, clrName]) => clrOpt(clrName, levels.text.accent)),
                disabled: clrOpt(variations.text.disabled, levels.text.min),
            };
            const linkDecoration = {
                $: clrOpt(variations.universal.primary, levels.ui.accent),
                visited: clrOpt(variations.universal.primary, levels.ui.accent),
                hover: 'transparent',
                active: clrOpt(variations.interactive.active, levels.ui.accent),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
            };
            const linkIcon = {
                $: clrOpt(variations.base, levels.ui.accent),
                visited: clrOpt(variations.base, levels.ui.accent),
                hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                active: clrOpt(variations.interactive.active, levels.ui.accent),
                disabled: clrOpt(variations.text.disabled, levels.ui.min),
            };
            const linkOutline = {
                hover: clrOpt(variations.interactive.hover, levels.ui.accent),
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
                    outline: {
                        hover: clrOpt(_secondaryClr, levels.text.accent),
                        active: clrOpt(_activeClr, levels.text.accent),
                    },
                    text: {
                        $: clrOpt(variations.base, levels.background.$),
                        hover: clrOpt(variations.base, levels.background.$),
                        active: clrOpt(variations.base, levels.background.$),
                    },
                    ui: {
                        $: clrOpt(variations.base, levels.background.$),
                        hover: clrOpt(variations.base, levels.background.$),
                        active: clrOpt(variations.base, levels.background.$),
                    },
                };
            };
            const button = {
                ...objectMap(variations.universal, ([key, clrName]) => singleButtonMaker(clrName)),
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
                    outline: {
                        hover: clrOpt(variations.base, levels.text.min),
                        active: clrOpt(variations.base, levels.text.min),
                    },
                    text: {
                        $: clrOpt(variations.base, levels.background.$),
                        hover: clrOpt(variations.base, levels.background.$),
                        active: clrOpt(variations.base, levels.background.$),
                    },
                    ui: {
                        $: clrOpt(variations.base, levels.background.$),
                        hover: clrOpt(variations.base, levels.background.$),
                        active: clrOpt(variations.base, levels.background.$),
                    },
                },
            };
            const inputField = {
                accent: {
                    $: clrOpt(variations.universal.primary, levels.ui.accent),
                    hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                    active: clrOpt(variations.interactive.active, levels.ui.accent),
                },
                bg: {
                    $: clrOpt(variations.base, levels.background.$),
                    hover: clrOpt(variations.base, levels.background.$),
                    active: clrOpt(variations.base, levels.background.$),
                },
                border: {
                    $: clrOpt(variations.base, levels.ui.min),
                    hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                    active: clrOpt(variations.interactive.active, levels.ui.accent),
                },
                placeholder: clrOpt(variations.base, levels.text.min),
                text: {
                    $: clrOpt(variations.base, levels.text.$),
                    hover: clrOpt(variations.base, levels.text.$),
                    active: clrOpt(variations.base, levels.text.$),
                },
            };
            const complete = {
                background,
                text,
                ui,
                heading,
                selection: {
                    bg: clrOpt(variations.universal.primary, levels.text.accent),
                    text: clrOpt(variations.base, levels.background.$),
                },
                link: {
                    $: link,
                    decoration: linkDecoration,
                    icon: linkIcon,
                    outline: linkOutline,
                },
                button,
                input: {
                    $: inputField,
                    disabled: inputField,
                    readonly: inputField,
                },
                system: {
                    accent: {
                        bg: clrOpt(variations.universal.primary, levels.text.accent),
                        text: clrOpt(variations.base, levels.background.$),
                    },
                    mark: {
                        bg: clrOpt(variations.text.active, levels.text.accent),
                        text: clrOpt(variations.base, levels.background.$),
                    },
                    selected: {
                        bg: clrOpt(variations.interactive.hover, levels.text.accent),
                        text: clrOpt(variations.base, levels.background.$),
                    },
                },
            };
            return complete;
        }
        Build.data = data;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha
         */
        async function forcedColors(input) {
            const { variations, } = input;
            const sysclr = {
                background: 'Canvas',
                text: 'CanvasText',
            };
            const background = {
                $: sysclr.background,
                ...objectMap(variations.background, () => sysclr.background),
                ...objectMap(variations.universal, () => sysclr.background),
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
            const linkOutline = {
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
                outline: {
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
            const inputField = {
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
                placeholder: 'FieldText',
                text: {
                    $: 'FieldText',
                    hover: 'SelectedItemText',
                    active: 'FieldText',
                },
            };
            const complete = {
                background,
                text,
                ui: text,
                heading,
                selection: {
                    bg: 'Highlight',
                    text: 'HighlightText',
                },
                link: {
                    $: link,
                    decoration: link,
                    icon: link,
                    outline: linkOutline,
                },
                button,
                input: {
                    $: inputField,
                    disabled: inputField,
                    readonly: inputField,
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
