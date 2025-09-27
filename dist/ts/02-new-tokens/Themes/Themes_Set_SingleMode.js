/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export class Tokens_Themes_Set_SingleMode extends AbstractTokens {
    data;
    static async build(preset, input) {
        let complete;
        // returns for forcedColors
        switch (preset) {
            case 'forcedColors':
                complete = await Tokens_Themes_Set_SingleMode.Templates.forcedColors(input);
                return new Tokens_Themes_Set_SingleMode(complete);
            default:
                complete = await Tokens_Themes_Set_SingleMode.Templates[preset](input);
                break;
        }
        return new Tokens_Themes_Set_SingleMode(complete);
    }
    constructor(data) {
        super();
        this.data = data;
    }
    toJSON() {
        return this.data;
    }
    toScssVars() {
        return this.data;
    }
}
/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 *
 * @since 0.1.0-alpha.draft
 */
(function (Tokens_Themes_Set_SingleMode) {
    ;
    /* Set Builders
     * ====================================================================== */
    let Templates;
    (function (Templates) {
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha.draft
         */
        async function template(input) {
            const complete = {
                background: 'base-100',
                text: {
                    '$': 'CanvasText',
                    'primary': 'CanvasText',
                    'secondary': 'CanvasText',
                    'active': 'CanvasText',
                    'disabled': 'CanvasText',
                },
                ui: {
                    '$': 'CanvasText',
                    'primary': 'CanvasText',
                    'secondary': 'CanvasText',
                    'active': 'CanvasText',
                    'disabled': 'CanvasText',
                },
                selection: {
                    'bg': 'CanvasText',
                    'text': 'CanvasText',
                },
                link: {
                    '$': 'CanvasText',
                    'hover': 'CanvasText',
                    'active': 'CanvasText',
                    'visited': 'CanvasText',
                },
                button: {
                    bg: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                    border: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                    text: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                },
                field: {
                    bg: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                    border: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                    text: {
                        '$': 'CanvasText',
                        'hover': 'CanvasText',
                        'active': 'CanvasText',
                    },
                    placeholder: 'CanvasText',
                },
                system: {
                    accent: {
                        bg: 'CanvasText',
                        text: 'CanvasText',
                    },
                    mark: {
                        bg: 'CanvasText',
                        text: 'CanvasText',
                    },
                    selected: {
                        bg: 'CanvasText',
                        text: 'CanvasText',
                    },
                },
            };
            return complete;
        }
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         *
         * @since 0.1.0-alpha.draft
         */
        async function average(input) {
            return template(input);
        }
        Templates.average = average;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         *
         * @since 0.1.0-alpha.draft
         */
        async function forcedColors(input) {
            return template(input);
        }
        Templates.forcedColors = forcedColors;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For high contrast.
         *
         * @since 0.1.0-alpha.draft
         */
        async function high(input) {
            return template(input);
        }
        Templates.high = high;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For low contrast.
         *
         * @since 0.1.0-alpha.draft
         */
        async function low(input) {
            return template(input);
        }
        Templates.low = low;
    })(Templates = Tokens_Themes_Set_SingleMode.Templates || (Tokens_Themes_Set_SingleMode.Templates = {}));
})(Tokens_Themes_Set_SingleMode || (Tokens_Themes_Set_SingleMode = {}));
//# sourceMappingURL=Themes_Set_SingleMode.js.map