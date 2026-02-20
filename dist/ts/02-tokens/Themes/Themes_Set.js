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
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectKeySort } from '../../01-utilities/objectKeySort.js';
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set extends AbstractTokens {
    name;
    clrNames;
    extraColourLevels;
    brightnessModes;
    contrastModes;
    forcedColours;
    modes;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static async build(name, clrNames, extraColourLevels, brightnessModes, contrastModes, input) {
        const allBrightnessModes = [
            'light',
            'dark',
            ...brightnessModes,
        ];
        const allContrastModes = [
            'low',
            'average',
            'high',
            ...contrastModes,
        ];
        const forcedColours = Tokens_Themes_Set.SingleMode.build(name, null, 'forcedColors', clrNames, {
            ...input.forcedColours ?? {},
            variations: input.variations,
        }, input.forcedColours?.overrides);
        const modes = objectGeneratorAsync(allBrightnessModes, async (brightness) => objectGeneratorAsync(allContrastModes, async (contrast) => Tokens_Themes_Set.SingleMode.build(name, brightness, contrast, clrNames, {
            ...input[brightness]?.[contrast] ?? {},
            variations: mergeArgs(input.variations ?? {}, input[brightness]?.[contrast]?.variations ?? {}, true),
        }, input[brightness]?.[contrast]?.overrides ?? {})));
        return Promise.all([
            forcedColours,
            modes,
        ]).then((([forcedColours_resolved, modes_resolved,]) => new Tokens_Themes_Set(name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours_resolved, modes_resolved)));
    }
    get data() {
        return {
            name: this.name ?? 'default',
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.data)),
            forcedColours: this.forcedColours.data,
        };
    }
    constructor(
    /** Name for this shade set. */
    name, clrNames, extraColourLevels, brightnessModes, contrastModes, forcedColours, modes) {
        super();
        this.name = name;
        this.clrNames = clrNames;
        this.extraColourLevels = extraColourLevels;
        this.brightnessModes = brightnessModes;
        this.contrastModes = contrastModes;
        this.forcedColours = forcedColours;
        this.modes = modes;
    }
    toJSON() {
        const allLevelsInUse = objectMap(this.modes, ([brightnessMode]) => Object.values(objectMap(this.modes[brightnessMode], ([__key, value]) => value.levelsInUse)).flat());
        const levelsInUse = arrayUnique(Object.values(allLevelsInUse).flat());
        const levelsInUse_dark = levelsInUse.map((light) => ColourUtilities.Levels.toDark(light));
        return {
            name: this.name ?? 'default',
            forcedColours: this.forcedColours.toJSON(),
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.toJSON())),
            levelsInUse: arrayUnique(levelsInUse.concat(levelsInUse_dark)).sort(),
        };
    }
    toScssVars() {
        return {
            'forced-colors': this.forcedColours.toScssVars(),
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.toScssVars())),
        };
    }
}
/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 *
 * @since 0.1.0-alpha
 */
(function (Tokens_Themes_Set) {
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    class SingleMode extends AbstractTokens {
        name;
        brightness;
        constrast;
        description;
        levelsInUse;
        data;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha
         */
        static async build(themeName, brightness, constrast, clrNames, input, overrides = {}) {
            const defaultLevels = constrast !== 'forcedColors'
                ? SingleMode.Levels.DEFAULT[constrast]
                : SingleMode.Levels.DEFAULT.max;
            const levels = SingleMode.Levels.parse(defaultLevels, input.levels);
            const variations = SingleMode.Build.completeVariations(clrNames, input.variations);
            const clrOpt = SingleMode.Build.colourOption;
            let description = input.description ?? null;
            let defaultOverrides = {};
            // returns if forced colours
            switch (constrast) {
                case 'average':
                    description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';
                    defaultOverrides.selection = {
                        background: clrOpt(variations.universal.primary, '300'),
                        text: clrOpt(variations.base, '800'),
                    };
                    break;
                case 'low':
                    description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';
                    defaultOverrides.selection = {
                        background: clrOpt(variations.universal.primary, '300'),
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
                        background: clrOpt(variations.universal.primary, '850'),
                        text: clrOpt(variations.base, '100'),
                    };
                    break;
                case 'forcedColors':
                    const _input = {
                        ...input,
                        variations: SingleMode.Build.completeVariations(clrNames, input.variations),
                    };
                    return new SingleMode(themeName, brightness, constrast, 'This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!', [], await SingleMode.Build.forcedColors(_input));
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
            return SingleMode.Build.data({
                levels,
                variations,
            }, overrides).then((defaultInputData) => new SingleMode(themeName, brightness, constrast, description, levelsInUse, mergeArgs(defaultInputData, mergeArgs(defaultOverrides, overrides, true), true)));
        }
        constructor(name, brightness, constrast, description, levelsInUse, data) {
            super();
            this.name = name;
            this.brightness = brightness;
            this.constrast = constrast;
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
                name: this.name,
                brightness: this.brightness,
                constrast: this.constrast,
                description: this.description ?? undefined,
                data: objectKeySort({
                    ...this.data,
                    button: objectMap(this.data.button, ([key, value]) => ({
                        ...value,
                        outline: {
                            $: value.outline.hover,
                            ...value.outline,
                        },
                    })),
                    link: {
                        ...this.data.link,
                        outline: {
                            $: this.data.link.outline.hover,
                            visited: this.data.link.outline.hover,
                            ...this.data.link.outline,
                        },
                    },
                }, true),
                levelsInUse,
            };
        }
        toScssVars() {
            return {
                ...this.toJSON().data,
                system: objectKeySort({
                    ...this.data.system,
                    background: this.data.background,
                    button: {
                        bg: this.data.button.primary.background,
                        border: this.data.button.primary.border,
                        text: this.data.button.primary.text,
                    },
                    input: {
                        bg: {
                            $: this.data.input.$.background,
                            hover: this.data.input.$.background,
                            active: this.data.input.$.background,
                        },
                        border: {
                            $: this.data.input.$.border.$,
                            hover: this.data.input.$.border.hover,
                            active: this.data.input.$.border.active,
                        },
                        text: {
                            $: this.data.input.$.text,
                            hover: this.data.input.$.text,
                            active: this.data.input.$.text,
                        },
                    },
                    link: {
                        $: this.data.link.$.$,
                        active: this.data.link.$.active,
                        hover: this.data.link.$.hover,
                        visited: this.data.link.$.visited,
                    },
                    selection: {
                        bg: this.data.selection.background,
                        text: this.data.selection.text,
                    },
                    text: {
                        $: this.data.text.$,
                        active: this.data.text.active,
                        disabled: this.data.text.disabled,
                    },
                }),
            };
        }
    }
    Tokens_Themes_Set.SingleMode = SingleMode;
    /**
     * Utilities for the {@link SingleMode} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    (function (SingleMode) {
        SingleMode.allHeadingLevels = [
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
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Levels and renamed.
             */
            let DEFAULT;
            (function (DEFAULT) {
                DEFAULT.average = {
                    background: {
                        $: '150',
                        bright: '100',
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
                        bright: 'white',
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
                        bright: '300',
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
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Levels and renamed. Added default param and made inputs optional.
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
                            ? objectGenerator(SingleMode.allHeadingLevels, () => inputs?.heading)
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
                            bright: defaults?.background,
                            accent: defaults?.background,
                            grey: defaults?.background,
                        },
                    heading: typeof defaults?.heading === 'object'
                        ? defaults?.heading
                        : objectGenerator(SingleMode.allHeadingLevels, () => defaults?.heading),
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
                    bright: nomalized_input.background?.bright ?? nomalized_input.background?.$ ?? DEFAULTS.background.bright,
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
                const heading = objectGenerator(SingleMode.allHeadingLevels, (hdgNum) => nomalized_input.heading?.[hdgNum] ?? text.accent ?? DEFAULTS.heading[hdgNum]);
                return {
                    background,
                    text,
                    ui,
                    heading,
                };
            }
            Levels.parse = parse;
        })(Levels = SingleMode.Levels || (SingleMode.Levels = {}));
        ;
        /* Set Builders
         * ====================================================================== */
        /**
         * Used by the {@link SingleMode.build} static function,
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
                        $: base,
                        bright: base,
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
                    heading: objectGenerator(SingleMode.allHeadingLevels, (hdgNum) => hdgNum >= 9 ? base : hdgNum >= 7 ? clr_2 : clr_1),
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
            async function data(inputParam, overrides) {
                const clrOpt = colourOption;
                const { levels, variations, } = inputParam;
                const dataCompleter = (_variation, _levels = null, _opts = []) => {
                    const _overrides = overrides[_variation] ?? {};
                    const _variationKey = _variation in variations
                        ? _variation
                        : 'universal';
                    const _variationsObj = _opts.includes('includeUniversal')
                        ? {
                            ...variations.universal,
                            ...variations[_variationKey],
                        }
                        : variations[_variationKey];
                    const _levelsKey = _levels && _levels in levels ? _levels : _variation;
                    return objectMap({
                        $: variations.base,
                        ..._variationsObj,
                    }, ([key, clrName]) => {
                        // returns
                        if (_overrides[key]) {
                            return _overrides[key];
                        }
                        let _lvl = levels[_levelsKey][key];
                        if (!_lvl && key === 'disabled') {
                            _lvl = levels[_levelsKey].min;
                        }
                        return clrOpt(clrName, _lvl ?? levels[_levelsKey].accent);
                    });
                };
                const background = dataCompleter('background', null, ['includeUniversal']);
                const text = dataCompleter('text', null, ['includeUniversal']);
                const ui = dataCompleter('text', 'ui', ['includeUniversal']);
                const heading = objectGenerator(SingleMode.allHeadingLevels, (hdgNum) => overrides.heading?.[hdgNum] ?? clrOpt(variations.heading[hdgNum] ?? variations.heading[10], levels.heading[hdgNum]));
                const link__text = overrides.link?.$?.$ ?? text.primary;
                const link = {
                    $: link__text,
                    visited: overrides.link?.$?.visited ?? link__text,
                    ...objectMap(variations.interactive, ([key, clrName]) => overrides.link?.$?.[key]
                        ?? key === 'disabled'
                        ? clrOpt(clrName, levels.text.min)
                        : clrOpt(clrName, levels.text.accent)),
                };
                const link_deco_text = overrides.link?.decoration?.$ ?? ui.primary;
                const linkDecoration = {
                    $: link_deco_text,
                    visited: overrides.link?.decoration?.visited ?? link_deco_text,
                    hover: overrides.link?.decoration?.hover ?? 'transparent',
                    active: overrides.link?.decoration?.active ?? clrOpt(variations.interactive.active, levels.ui.accent),
                    disabled: overrides.link?.decoration?.disabled ?? clrOpt(variations.text.disabled, levels.ui.min),
                };
                const link_icon_text = overrides.link?.decoration?.$ ?? ui.grey;
                const linkIcon = {
                    $: link_icon_text,
                    visited: overrides.link?.decoration?.visited ?? link_icon_text,
                    ...objectMap(variations.interactive, ([key, clrName]) => overrides.link?.icon?.[key]
                        ?? key === 'disabled'
                        ? clrOpt(clrName, levels.ui.min)
                        : clrOpt(clrName, levels.ui.accent)),
                };
                const linkOutline = objectMap(variations.interactive, ([key, clrName]) => overrides.link?.outline?.[key]
                    ?? key === 'disabled'
                    ? clrOpt(clrName, levels.ui.min)
                    : clrOpt(clrName, levels.ui.accent));
                const singleButtonMaker = (_key, _primaryClr) => {
                    let _hoverClr;
                    let _activeClr;
                    let _hoverClr_outline;
                    let _activeClr_outline;
                    if (_key === 'disabled') {
                        _hoverClr = _primaryClr;
                        _activeClr = _primaryClr;
                        _hoverClr_outline = variations.interactive.hover;
                        _activeClr_outline = variations.interactive.active;
                    }
                    else {
                        _hoverClr = _primaryClr === variations.interactive.hover
                            ? variations.interactive.active
                            : variations.interactive.hover;
                        _activeClr = _hoverClr === variations.interactive.active
                            ? variations.universal.primary
                            : variations.interactive.active;
                        _hoverClr_outline = _primaryClr;
                        _activeClr_outline = _primaryClr;
                    }
                    const textOrBg_clr = clrOpt(variations.base, levels.background.$);
                    const textOrBg = {
                        $: textOrBg_clr,
                        hover: textOrBg_clr,
                        active: textOrBg_clr,
                    };
                    return {
                        background: {
                            $: clrOpt(_primaryClr, levels.text.accent),
                            hover: clrOpt(_hoverClr, levels.text.accent),
                            active: clrOpt(_activeClr, levels.text.accent),
                        },
                        border: {
                            $: clrOpt(_primaryClr, levels.text.accent),
                            hover: clrOpt(_hoverClr, levels.text.accent),
                            active: clrOpt(_activeClr, levels.text.accent),
                        },
                        outline: {
                            hover: clrOpt(_hoverClr_outline, levels.text.accent),
                            active: clrOpt(_activeClr_outline, levels.text.accent),
                        },
                        text: textOrBg,
                        ui: textOrBg,
                    };
                };
                const button = {
                    ...objectMap({
                        ...variations.universal,
                        disabled: variations.interactive.disabled,
                    }, ([key, clrName]) => singleButtonMaker(key, clrName)),
                    // disabled: {
                    //     background: {
                    //         $: clrOpt( variations.base, levels.text.min ),
                    //         hover: clrOpt( variations.base, levels.text.min ),
                    //         active: clrOpt( variations.base, levels.text.min ),
                    //     },
                    //     border: {
                    //         $: clrOpt( variations.base, levels.text.min ),
                    //         hover: clrOpt( variations.base, levels.text.min ),
                    //         active: clrOpt( variations.base, levels.text.min ),
                    //     },
                    //     outline: {
                    //         hover: clrOpt( variations.base, levels.text.min ),
                    //         active: clrOpt( variations.base, levels.text.min ),
                    //     },
                    //     text: {
                    //         $: clrOpt( variations.base, levels.background.$ ),
                    //         hover: clrOpt( variations.base, levels.background.$ ),
                    //         active: clrOpt( variations.base, levels.background.$ ),
                    //     },
                    //     ui: {
                    //         $: clrOpt( variations.base, levels.background.$ ),
                    //         hover: clrOpt( variations.base, levels.background.$ ),
                    //         active: clrOpt( variations.base, levels.background.$ ),
                    //     },
                    // },
                };
                const singleInputMaker = (_variation) => {
                    const _variationValue = _variation === 'base'
                        ? variations.base
                        : variations.universal[_variation] ?? variations.text[_variation] ?? 'base';
                    return {
                        accent: {
                            $: clrOpt(_variationValue, levels.ui.accent),
                            focus: clrOpt(variations.interactive.hover, levels.ui.accent),
                            hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                            active: clrOpt(variations.interactive.active, levels.ui.accent),
                        },
                        background: clrOpt(variations.base, levels.background.$),
                        border: {
                            $: clrOpt(_variationValue, levels.ui.accent),
                            focus: clrOpt(variations.interactive.hover, levels.ui.accent),
                            hover: clrOpt(variations.interactive.hover, levels.ui.accent),
                            active: clrOpt(variations.interactive.active, levels.ui.accent),
                        },
                        placeholder: clrOpt(variations.base, levels.text.min),
                        text: clrOpt(variations.base, levels.text.$),
                    };
                };
                const inputField = {
                    $: singleInputMaker('primary'),
                    disabled: singleInputMaker('disabled'),
                    readonly: singleInputMaker('readonly'),
                };
                return {
                    background,
                    button,
                    heading,
                    input: inputField,
                    link: {
                        $: link,
                        decoration: linkDecoration,
                        icon: linkIcon,
                        outline: linkOutline,
                    },
                    selection: {
                        background: clrOpt(variations.universal.primary, levels.text.accent),
                        text: clrOpt(variations.base, levels.background.$),
                    },
                    text,
                    ui,
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
                const heading = objectGenerator(SingleMode.allHeadingLevels, () => sysclr.text);
                const singleButton = {
                    background: {
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
                        $: 'CanvasText',
                        focus: 'CanvasText',
                        hover: 'CanvasText',
                        active: 'ActiveText',
                    },
                    background: 'Field',
                    border: {
                        $: 'CanvasText',
                        focus: 'CanvasText',
                        hover: 'CanvasText',
                        active: 'ActiveText',
                    },
                    placeholder: 'FieldText',
                    text: 'FieldText',
                };
                return {
                    background,
                    button,
                    heading,
                    input: {
                        $: inputField,
                        disabled: inputField,
                        readonly: inputField,
                    },
                    link: {
                        $: link,
                        decoration: link,
                        icon: link,
                        outline: linkOutline,
                    },
                    selection: {
                        background: 'Highlight',
                        text: 'HighlightText',
                    },
                    text,
                    ui: text,
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
            }
            Build.forcedColors = forcedColors;
        })(Build = SingleMode.Build || (SingleMode.Build = {}));
    })(SingleMode = Tokens_Themes_Set.SingleMode || (Tokens_Themes_Set.SingleMode = {}));
})(Tokens_Themes_Set || (Tokens_Themes_Set = {}));
