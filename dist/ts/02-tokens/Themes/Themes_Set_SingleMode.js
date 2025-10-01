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
import { objectMap } from '../../01-utilities/objectMap.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Themes_Set_SingleMode extends AbstractTokens {
    data;
    /**
     * An easy way to generate a complete token set from limited inputs.
     *
     * @since 0.1.0-alpha.draft
     */
    static async build(preset, clrNames, input) {
        // returns if forced colours
        switch (preset) {
            case 'average':
                break;
            case 'high':
                break;
            case 'low':
                break;
            case 'forcedColors':
                const _input = {
                    ...input,
                    variations: Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations),
                };
                return new Tokens_Themes_Set_SingleMode(await Tokens_Themes_Set_SingleMode.Build.forcedColors(_input));
        }
        return new Tokens_Themes_Set_SingleMode(await Tokens_Themes_Set_SingleMode.Build.data({
            levels: Tokens_Themes_Set_SingleMode.Build.completeLevels(input.levels),
            variations: Tokens_Themes_Set_SingleMode.Build.completeVariations(clrNames, input.variations),
        }));
    }
    constructor(data) {
        super();
        this.data = data;
    }
    toJSON() {
        return this.data;
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
        function clrOpt(name, level) {
            return `${name}-${level}`;
        }
        function completeLevels(input) {
            const def = {
                background: '100',
                text: '700',
                ui: '700',
            };
            return mergeArgs(def, input, false);
        }
        Build.completeLevels = completeLevels;
        function completeVariations(clrNames, input) {
            const clrNames_noBase = clrNames.filter(v => v !== 'base');
            const base = 'base';
            const clr_1 = clrNames_noBase[0] ?? base;
            const clr_2 = clrNames_noBase[1] ?? clr_1;
            // const clr_3 = clrNames_noBase[ 2 ] ?? clr_2;
            const def = {
                base: base,
                universal: {
                    primary: clr_1,
                    secondary: clr_2,
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
            const { levels, variations, } = input;
            const text = {
                $: clrOpt(variations.base, levels.text),
                ...objectMap(variations.universal, ({ value: clrName }) => clrOpt(clrName, levels.text)),
                active: clrOpt(variations.universal.secondary, levels.text),
                disabled: clrOpt(variations.base, levels.text),
            };
            const ui = {
                $: clrOpt(variations.base, levels.ui),
                ...objectMap(variations.universal, ({ value: clrName }) => clrOpt(clrName, levels.ui)),
                active: clrOpt(variations.universal.secondary, levels.ui),
                disabled: clrOpt(variations.base, levels.ui),
            };
            const singleButtonMaker = (_clrName) => ({
                bg: {
                    $: '"??"',
                    hover: '"??"',
                    active: '"??"',
                },
                border: {
                    $: '"??"',
                    hover: '"??"',
                    active: '"??"',
                },
                text: {
                    $: '"??"',
                    hover: '"??"',
                    active: '"??"',
                },
            });
            const button = {
                ...objectMap(variations.universal, ({ value: clrName }) => singleButtonMaker(clrName)),
                disabled: singleButtonMaker(variations.base),
            };
            const complete = {
                background: clrOpt(variations.base, levels.background),
                text,
                ui,
                selection: {
                    bg: '"??"',
                    text: '"??"',
                },
                link: {
                    $: '"??"',
                    hover: '"??"',
                    active: '"??"',
                    visited: '"??"',
                },
                button,
                field: {
                    bg: {
                        $: '"??"',
                        hover: '"??"',
                        active: '"??"',
                    },
                    border: {
                        $: '"??"',
                        hover: '"??"',
                        active: '"??"',
                    },
                    text: {
                        $: '"??"',
                        hover: '"??"',
                        active: '"??"',
                    },
                    placeholder: '"??"',
                },
                system: {
                    accent: {
                        bg: '"??"',
                        text: '"??"',
                    },
                    mark: {
                        bg: '"??"',
                        text: '"??"',
                    },
                    selected: {
                        bg: '"??"',
                        text: '"??"',
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
                active: 'ActiveText',
                disabled: 'GrayText',
            };
            const ui = text;
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
            };
            const button = {
                ...objectMap(variations.universal, () => singleButton),
                disabled: singleButton,
            };
            const complete = {
                background: sysclr.text,
                text,
                ui,
                selection: {
                    bg: 'Highlight',
                    text: 'HighlightText',
                },
                link: {
                    $: 'LinkText',
                    hover: 'ActiveText',
                    active: 'ActiveText',
                    visited: 'VisitedText',
                },
                button,
                field: {
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
                    placeholder: 'FieldText',
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