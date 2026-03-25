/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { arrayUnique, mergeArgs, objectFlatten, objectMap, } from '@maddimathon/utility-typescript';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectGenerator } from '../../01-utilities/objectGenerator.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectKeySort_Tokens } from '../../01-utilities/objectKeySort_Tokens.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export class Tokens_Themes_Set extends AbstractTokens {
    name;
    brightnessModes;
    contrastModes;
    colours;
    forcedColours;
    modes;
    /**
     * Used instead of the constructor so that it can be async.
     *
     * @since 0.1.0-beta.0.draft — Changed second & third param to colours object (as fourth param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    static async build(name, brightnessModes, contrastModes, colours, input) {
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
        const forcedColours = Tokens_Themes_Set.SingleMode.build(name, null, 'forcedColors', colours, {
            ...input.forcedColours ?? {},
            variations: input.variations,
        }, input.forcedColours?.overrides);
        const modes = objectGeneratorAsync(allBrightnessModes, async (brightness) => objectGeneratorAsync(allContrastModes, async (contrast) => Tokens_Themes_Set.SingleMode.build(name, brightness, contrast, colours, {
            ...input[brightness]?.[contrast] ?? {},
            variations: mergeArgs(input.variations ?? {}, input[brightness]?.[contrast]?.variations ?? {}, true),
        }, input[brightness]?.[contrast]?.overrides ?? {})));
        return Promise.all([
            forcedColours,
            modes,
        ]).then((([forcedColours_resolved, modes_resolved,]) => new Tokens_Themes_Set(name, brightnessModes, contrastModes, colours, forcedColours_resolved, modes_resolved)));
    }
    get data() {
        return {
            name: this.name ?? 'default',
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.data)),
            forcedColours: this.forcedColours.data,
        };
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    meta;
    /**
     * @since 0.1.0-beta.0.draft — Changed second & third param to colours object (as fourth param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    constructor(
    /** Name for this shade set. */
    name, brightnessModes, contrastModes, colours, forcedColours, modes) {
        super();
        this.name = name;
        this.brightnessModes = brightnessModes;
        this.contrastModes = contrastModes;
        this.colours = colours;
        this.forcedColours = forcedColours;
        this.modes = modes;
        const allLevelsInUse = new Set();
        const allThemeKeys = {
            background: [],
            button: [],
            text: [],
            textAndBackground: [],
        };
        const keyFilter = (key) => key !== '$' && key !== 'active' && key !== 'disabled';
        for (const brightness of Object.keys(this.modes)) {
            const _contrastEntries = Object.values(this.modes[brightness]);
            for (const singleMode of _contrastEntries) {
                singleMode.levelsInUse.forEach(key => allLevelsInUse.add(key));
                allThemeKeys.background.push(new Set(Object.keys(singleMode.data.background).filter(keyFilter)));
                allThemeKeys.button.push(new Set(Object.keys(singleMode.data.button).filter(keyFilter)));
                allThemeKeys.text.push(new Set([
                    ...Object.keys(singleMode.data.text),
                    ...Object.keys(singleMode.data.ui),
                ].filter(keyFilter)));
            }
        }
        const keySets = objectMap(allThemeKeys, ([key, sets]) => sets?.length
            ? sets.reduce((previous, current) => previous.intersection(current))
            : new Set());
        keySets.textAndBackground = keySets.text.intersection(keySets.background);
        const keys = objectMap(keySets, ([key, set]) => Array.from(set).sort(objectKeySort_Tokens.sorter));
        this.meta = {
            keys,
            levelsInUse: arrayUnique(Array.from(allLevelsInUse).map((light) => [light, ColourUtilities.Levels.toDark(light)]).flat()).sort(),
        };
    }
    toJSON() {
        return {
            _name: this.name ?? 'default',
            _meta: this.meta,
            forcedColours: this.forcedColours.toJSON(),
            ...objectMap(this.modes, ([brightnessMode]) => objectMap(this.modes[brightnessMode], ([__key, value]) => value.toJSON())),
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
     * @since 0.1.0-beta.0.draft — Moved to {@link Tokens_Themes_Set} and renamed.
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
         * @since 0.1.0-beta.0.draft — Changed fourth param to colours object with both names and all levels set.
         */
        static async build(themeName, brightness, constrast, colours, input, inputOverrides = {}) {
            const defaultLevels = constrast !== 'forcedColors'
                ? SingleMode.Levels.DEFAULT[constrast]
                : SingleMode.Levels.DEFAULT.max;
            const levels = SingleMode.Levels.parse(defaultLevels, input.levels);
            const variations = SingleMode.Build.completeVariations(colours.names, input.variations);
            const clrOpt = SingleMode.Build.colourOption;
            let description = input.description ?? null;
            const defaultOverrides = {};
            // returns if forced colours
            switch (constrast) {
                case 'average':
                    description = description ?? 'This is the default contrast mode for most users, unless they have defined a specific preference (‘low’, ‘high’, or ‘forced-colors’) in their OS or browser settings.  It meets or exceeds WCAG AAA contrast standards.';
                    if (!inputOverrides.selection) {
                        const _text_levels = Object.values(levels.text);
                        const _bg_levels = Object.values(levels.background);
                        defaultOverrides.selection = {
                            background: clrOpt(variations.interactive.hover, ColourUtilities.Levels.augmentor(colours.allLevels, ColourUtilities.Levels.max(_bg_levels), brightness === 'dark' ? 200 : 150)),
                            text: clrOpt(variations.base, ColourUtilities.Levels.augmentor(colours.allLevels, ColourUtilities.Levels.max(_text_levels), 150)),
                        };
                    }
                    break;
                case 'low':
                    description = description ?? 'This is the low contrast mode.  This is the default for users who set ‘low’ as their preferred contrast mode in their OS or browser settings.  It mostly meets WCAG AA contrast standards, but in rare cases does not (which is acceptable in this case).';
                    if (!inputOverrides.selection) {
                        const _text_levels = Object.values(levels.text);
                        const _bg_levels = Object.values(levels.background);
                        defaultOverrides.selection = {
                            background: clrOpt(variations.interactive.hover, ColourUtilities.Levels.augmentor(colours.allLevels, ColourUtilities.Levels.max(_bg_levels), brightness === 'dark' ? 150 : 100)),
                            text: clrOpt(variations.base, ColourUtilities.Levels.augmentor(colours.allLevels, ColourUtilities.Levels.max(_text_levels), 100)),
                        };
                    }
                    break;
                case 'high':
                    description = description ?? 'This is the high contrast mode.  This is the default for users who set ‘high’ as their preferred contrast mode in their OS or browser settings.  It exceeds WCAG AAA contrast standards.';
                    if (!inputOverrides.selection) {
                        const _text_levels = Object.values(levels.text);
                        const _bg_levels = Object.values(levels.background);
                        defaultOverrides.selection = {
                            background: clrOpt(variations.interactive.hover, ColourUtilities.Levels.min(_text_levels)),
                            text: clrOpt(variations.base, ColourUtilities.Levels.min(_bg_levels)),
                        };
                    }
                    break;
                case 'max':
                    description = description ?? 'This is the maximum contrast mode.  This is an alternate option for users who want an even higher contrast than the ‘high’ mode, but without enabling ‘forced-colors’ mode.  It exceeds WCAG AAA contrast standards.';
                    break;
                case 'forcedColors':
                    return SingleMode.Build.forcedColors({
                        ...input,
                        variations,
                    }, inputOverrides).then((completedData) => new SingleMode(themeName, brightness, constrast, 'This is the forced colours contrast mode, which is a mode only applied for users with this accessibility featured enabled in their OS settings.  It cannot be manually selected.  This mode uses System Colour keywords, which lets users apply custom colours to websites.  This is very important for accessibility!', [], completedData));
            }
            const allLevelsInUse = Object.values(objectFlatten(levels)).concat(Object.values(objectFlatten(inputOverrides)).map((val) => {
                const match = String(val).match(/\-(\d+)$/);
                // returns
                if (match && match[1]) {
                    return match[1];
                }
                return false;
            }).filter(v => v !== false));
            const levelsInUse = arrayUnique(allLevelsInUse).sort();
            return SingleMode.Build.data({ levels, variations }, mergeArgs(defaultOverrides, inputOverrides, true)).then((completedData) => new SingleMode(themeName, brightness, constrast, description, levelsInUse, completedData));
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
                data: objectKeySort_Tokens({
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
                system: objectKeySort_Tokens({
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
     * @since 0.1.0-beta.0.draft — Moved to {@link Tokens_Themes_Set} and renamed.
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
         * @since 0.1.0-beta.0.draft
         */
        let Levels;
        (function (Levels) {
            ;
            ;
            /**
             * @since 0.1.0-beta.0.draft
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
                        $: '800',
                        accent: '750',
                        min: '700',
                    },
                    ui: {
                        $: '800',
                        accent: '750',
                        min: '700',
                    },
                    heading: {
                        1: '800',
                        2: '750',
                        3: '750',
                        4: '750',
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
                        $: '250',
                        bright: '200',
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
                        1: '700',
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
                    text: {
                        $: 'black',
                        accent: '850',
                        min: '850',
                    },
                    ui: {
                        $: 'black',
                        accent: '850',
                        min: '850',
                    },
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
             * @since 0.1.0-beta.0.draft
             */
            function normalize(inputs) {
                return {
                    background: typeof inputs?.background === 'object'
                        ? inputs?.background
                        : {
                            $: inputs?.background,
                            accent: inputs?.background,
                            bright: inputs?.background,
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
            }
            /**
             * @since 0.1.0-alpha
             * @since 0.1.0-beta.0.draft — Moved to SingleMode.Levels and renamed. Added default param and made inputs optional.
             */
            function parse(defaults, inputs = {}) {
                const nomalized_input = normalize(inputs);
                const DEFAULTS = normalize(defaults);
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
                const heading = objectGenerator(SingleMode.allHeadingLevels, (hdgNum) => nomalized_input.heading?.[hdgNum] ?? text.accent);
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
                // returns
                switch (name) {
                    case 'black':
                    case 'white':
                        return name;
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
            async function data(inputParam, overrides = {}) {
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
                const linkCompleter = (_subKey, _levelsKey) => {
                    const _overrides = overrides.link?.[_subKey];
                    const _fallbackObj = _levelsKey === 'ui' ? ui : text;
                    const _defaultClr = _overrides?.$ ?? (_subKey === 'icon'
                        ? _fallbackObj.grey
                        : _fallbackObj.primary);
                    return {
                        $: _defaultClr,
                        visited: _overrides?.visited ?? _defaultClr,
                        ...objectMap(variations.interactive, ([_key, _clrName]) => {
                            // returns
                            if (_overrides?.[_key]) {
                                return _overrides[_key];
                            }
                            // returns on match
                            switch (_key) {
                                case 'disabled':
                                    return clrOpt(_clrName, levels[_levelsKey].min);
                                case 'hover':
                                    // returns
                                    if (_subKey === 'decoration') {
                                        return 'transparent';
                                    }
                                    break;
                            }
                            return clrOpt(_clrName, levels[_levelsKey].accent);
                        }),
                    };
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
                        _hoverClr_outline = _hoverClr;
                        _activeClr_outline = _activeClr;
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
                const button = objectMap({
                    ...variations.universal,
                    disabled: variations.interactive.disabled,
                }, ([key, clrName]) => overrides.button?.[key] ?? singleButtonMaker(key, clrName));
                const singleInputMaker = (_variation) => {
                    const _active_ui = clrOpt(variations.interactive.active, levels.ui.accent);
                    const _hover_ui = clrOpt(variations.interactive.hover, levels.ui.accent);
                    const _accent = {
                        $: ui[_variation] ?? ui.primary,
                        focus: _hover_ui,
                        hover: _hover_ui,
                        active: _active_ui,
                    };
                    const _border = { ..._accent };
                    if (_variation === 'readonly') {
                        _border.$ = ui.grey;
                        _border.hover = ui.grey;
                    }
                    return {
                        accent: _accent,
                        background: _variation === 'readonly' ? background.grey : background.bright,
                        border: _border,
                        placeholder: text.disabled,
                        text: text.$,
                    };
                };
                const inputField = {
                    $: overrides.input?.$ ?? singleInputMaker('primary'),
                    disabled: overrides.input?.disabled ?? {
                        accent: {
                            $: ui.disabled,
                            focus: ui.disabled,
                            hover: ui.disabled,
                            active: ui.disabled,
                        },
                        background: background.grey,
                        border: {
                            $: ui.disabled,
                            focus: ui.disabled,
                            hover: ui.disabled,
                            active: ui.disabled,
                        },
                        placeholder: text.disabled,
                        text: text.disabled,
                    },
                    readonly: overrides.input?.readonly ?? singleInputMaker('readonly'),
                };
                return {
                    background,
                    button,
                    heading,
                    input: inputField,
                    link: {
                        $: linkCompleter('$', 'text'),
                        decoration: linkCompleter('decoration', 'ui'),
                        icon: linkCompleter('icon', 'ui'),
                        outline: linkOutline,
                    },
                    selection: overrides.selection ?? {
                        background: clrOpt(variations.interactive.hover, levels.ui.accent),
                        text: clrOpt(variations.base, levels.background.bright),
                    },
                    text,
                    ui,
                    system: {
                        accent: overrides.system?.accent ?? {
                            bg: clrOpt(variations.universal.primary, levels.text.accent),
                            text: clrOpt(variations.base, levels.background.$),
                        },
                        mark: overrides.system?.mark ?? {
                            bg: clrOpt(variations.text.active, levels.text.accent),
                            text: clrOpt(variations.base, levels.background.$),
                        },
                        selected: overrides.system?.selected ?? {
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
            async function forcedColors(input, overrides) {
                const { variations, } = input;
                const sysclr = {
                    background: overrides.background?.$ ?? 'Canvas',
                    text: {
                        $: overrides.text?.$ ?? 'CanvasText',
                        active: overrides.text?.active ?? 'ActiveText',
                        disabled: overrides.text?.disabled ?? 'GrayText',
                        grey: overrides.text?.grey ?? 'GrayText',
                    },
                };
                const background = {
                    ...objectMap(variations.background, ([key]) => overrides.background?.[key] ?? sysclr.background),
                    ...objectMap(variations.universal, ([key]) => overrides.background?.[key] ?? sysclr.background),
                };
                const text = {
                    $: sysclr.text.$,
                    ...objectMap(variations.universal, ([key]) => overrides.text?.[key] ?? sysclr.text[key] ?? sysclr.text.$),
                    ...objectMap(variations.text, ([key]) => overrides.text?.[key] ?? sysclr.text[key] ?? sysclr.text.$),
                };
                const ui = mergeArgs(text, overrides.ui);
                const link = {
                    $: overrides.link?.$?.$ ?? 'LinkText',
                    visited: overrides.link?.$?.visited ?? 'VisitedText',
                    hover: overrides.link?.$?.hover ?? sysclr.text.active,
                    active: overrides.link?.$?.active ?? sysclr.text.active,
                    disabled: overrides.link?.$?.disabled ?? text.disabled,
                };
                const linkOutline = {
                    hover: overrides.link?.outline?.hover ?? link.hover,
                    active: overrides.link?.outline?.active ?? link.active,
                    disabled: overrides.link?.outline?.disabled ?? link.disabled,
                };
                const linkDecoration = mergeArgs(link, overrides.link?.decoration);
                const linkIcon = mergeArgs(link, overrides.link?.icon);
                const heading = objectGenerator(SingleMode.allHeadingLevels, (num) => overrides.heading?.[num] ?? text.primary);
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
                    ...objectMap(variations.universal, ([key]) => overrides.button?.[key] ?? singleButton),
                    disabled: overrides.button?.disabled ?? singleButton,
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
                        $: overrides.input?.$ ?? inputField,
                        disabled: overrides.input?.disabled ?? inputField,
                        readonly: overrides.input?.readonly ?? inputField,
                    },
                    link: {
                        $: link,
                        decoration: linkDecoration,
                        icon: linkIcon,
                        outline: linkOutline,
                    },
                    selection: overrides.selection ?? {
                        background: 'Highlight',
                        text: 'HighlightText',
                    },
                    text,
                    ui,
                    system: mergeArgs({
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
                    }, overrides.system, true),
                };
            }
            Build.forcedColors = forcedColors;
        })(Build = SingleMode.Build || (SingleMode.Build = {}));
    })(SingleMode = Tokens_Themes_Set.SingleMode || (Tokens_Themes_Set.SingleMode = {}));
})(Tokens_Themes_Set || (Tokens_Themes_Set = {}));
