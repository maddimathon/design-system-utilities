/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { RequiredHeadingLevels, TokenTypes } from '../@types.js';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes_Set<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> extends AbstractTokens<{
    data: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    json: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    scss: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
}> {
    /** Name for this shade set. */
    protected readonly name: T_ThemeTypes['name'];
    protected readonly clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>;
    protected readonly extraColourLevels: readonly T_ColourTypes['extraLevels'][];
    protected readonly brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[];
    protected readonly contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[];
    protected readonly forcedColours: Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
    protected readonly modes: TokenTypes.Theme.Mode.NestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes>>;
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(name: T_ThemeTypes['name'], clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>, extraColourLevels: readonly T_ColourTypes['extraLevels'][], brightnessModes: T_ThemeTypes['brightness'], contrastModes: T_ThemeTypes['contrast'], input: Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>): Promise<Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>>;
    get data(): Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    protected constructor(
    /** Name for this shade set. */
    name: T_ThemeTypes['name'], clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>, extraColourLevels: readonly T_ColourTypes['extraLevels'][], brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[], contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[], forcedColours: Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>, modes: TokenTypes.Theme.Mode.NestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode<T_ColourTypes, T_ThemeTypes>>);
    toJSON(): Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    toScssVars(): Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
}
/**
 * Utilities for the {@link Tokens_Themes_Set} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Themes_Set {
    /**
     * @since 0.1.0-alpha
     */
    type Data<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        name: T_ThemeTypes['name'];
        forcedColours: Tokens_Themes_Set.SingleMode.Data<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
    } & TokenTypes.Theme.Mode.NestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode.Data<T_ColourTypes, T_ThemeTypes>>;
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ThisThemeName extends T_ThemeTypes['name'] = T_ThemeTypes['name']> = {
        name: __T_ThisThemeName;
        variations?: Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes>['variations'];
        forcedColours?: Omit<Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>, "levels" | "variations"> & {
            overrides?: Tokens_Themes_Set.SingleMode.Data.Partial<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
        };
    } & TokenTypes.Theme.Mode.PartialNestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode.InputParam<T_ColourTypes, T_ThemeTypes>>;
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        name: T_ThemeTypes['name'];
        levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[];
        forcedColours: Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>;
    } & TokenTypes.Theme.Mode.NestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes>>;
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> = {
        'forced-colors': Tokens_Themes_Set.SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes>;
    } & TokenTypes.Theme.Mode.NestedObject<T_ThemeTypes, Tokens_Themes_Set.SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes>>;
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    class SingleMode<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> extends AbstractTokens<{
        data: SingleMode.Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        json: SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        scss: SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
    }> {
        readonly name: "default" | T_ThemeTypes['name'];
        readonly brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>;
        readonly constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>;
        readonly description: null | string;
        readonly levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[];
        readonly data: SingleMode.Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        static build<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(themeName: "default" | T_ThemeTypes['name'], brightness: null, constrast: "forcedColors", clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>, input: SingleMode.InputParam<NoInfer<T_ColourTypes>, T_ThemeTypes, TokenTypes.Css.SystemColor>, overrides?: SingleMode.Data.Partial<NoInfer<T_ColourTypes>, NoInfer<T_ThemeTypes>, TokenTypes.Css.SystemColor>): Promise<SingleMode<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>>;
        static build<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(themeName: "default" | T_ThemeTypes['name'], brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>, constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>, clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>, input: SingleMode.InputParam<NoInfer<T_ColourTypes>, T_ThemeTypes>, overrides?: SingleMode.Data.Partial<NoInfer<T_ColourTypes>, NoInfer<T_ThemeTypes>>): Promise<SingleMode<T_ColourTypes, T_ThemeTypes>>;
        protected constructor(name: "default" | T_ThemeTypes['name'], brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>, constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>, description: null | string, levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[], data: SingleMode.Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption>);
        toJSON(): SingleMode.JsonReturn<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
        toScssVars(): SingleMode.ScssVars<T_ColourTypes, T_ThemeTypes, __T_ColourOption>;
    }
    /**
     * Utilities for the {@link SingleMode} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    namespace SingleMode {
        type InteractiveStyles<T_StyleValue> = {
            [S in "$" | "hover" | "active"]: T_StyleValue;
        };
        type InteractiveStylesWithFocus<T_StyleValue> = {
            [S in "$" | "hover" | "focus" | "active"]: T_StyleValue;
        };
        export const allHeadingLevels: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        /**
         * @since 0.1.0-alpha
         */
        export type Data<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = {
            background: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourTypes['names']>['background']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['universal']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['background']]: __T_ColourOption;
            };
            text: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourTypes['names']>['universal']]: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourTypes['names']>['text']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['universal']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['text']]: __T_ColourOption;
            };
            ui: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourTypes['names']>['universal']]: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourTypes['names']>['text']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['universal']]: __T_ColourOption;
            } & {
                [K in T_ThemeTypes['variations']['text']]: __T_ColourOption;
            };
            heading: {
                [L in RequiredHeadingLevels]: __T_ColourOption;
            };
            selection: {
                background: __T_ColourOption;
                text: __T_ColourOption;
            };
            /**
             * @since 0.1.1-alpha.0 — Switched to a nested object instead of separate keys.
             */
            link: {
                $: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]: __T_ColourOption;
                };
                /**
                 * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                 */
                decoration: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]: __T_ColourOption;
                };
                icon: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]: __T_ColourOption;
                };
                /**
                 * Used for the focus outline and similar elements.
                 *
                 * @since 0.1.1-alpha.0
                 */
                outline: {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]: __T_ColourOption;
                };
            };
            button: {
                [K in 'primary' | 'secondary' | 'disabled']: Data.Button<T_ColourTypes, __T_ColourOption>;
            } & {
                [K in T_ThemeTypes['variations']['universal']]: Data.Button<T_ColourTypes, __T_ColourOption>;
            };
            input: {
                [K in "$" | "disabled" | "readonly"]: Data.Input<T_ColourTypes, __T_ColourOption>;
            };
            system: {
                accent: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                mark: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                selected: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
            };
        };
        /**
         * Utilities and types for the complete tokens theme data for a single mode.
         *
         * @since 0.1.1-alpha.1.draft
         */
        export namespace Data {
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Data and renamed.
             */
            type Button<T_ColourTypes extends TokenTypes.Colour.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = {
                background: InteractiveStyles<__T_ColourOption>;
                border: InteractiveStyles<__T_ColourOption>;
                outline: Omit<InteractiveStyles<__T_ColourOption>, '$'>;
                text: InteractiveStyles<__T_ColourOption>;
                ui: InteractiveStyles<__T_ColourOption>;
            };
            /**
             * @since 0.1.1-alpha.1.draft
             */
            type Input<T_ColourTypes extends TokenTypes.Colour.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = {
                accent: InteractiveStylesWithFocus<__T_ColourOption>;
                background: __T_ColourOption;
                border: InteractiveStylesWithFocus<__T_ColourOption>;
                placeholder: __T_ColourOption;
                text: __T_ColourOption;
            };
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Data and renamed.
             */
            type Partial<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = {
                background?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['background']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['background']]?: undefined | __T_ColourOption;
                };
                text?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['text']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['text']]?: undefined | __T_ColourOption;
                };
                ui?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourTypes['names']>['text']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_ThemeTypes['variations']['text']]?: undefined | __T_ColourOption;
                };
                heading?: undefined | {
                    [L in RequiredHeadingLevels]?: undefined | __T_ColourOption;
                };
                selection?: undefined | {
                    background: __T_ColourOption;
                    text: __T_ColourOption;
                };
                link?: {
                    $: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]?: undefined | __T_ColourOption;
                    };
                    /**
                     * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                     */
                    decoration?: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]?: undefined | __T_ColourOption;
                    };
                    icon?: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]?: undefined | __T_ColourOption;
                    };
                    outline?: undefined | {
                        [K in keyof RequiredVariations<T_ColourTypes['names']>['interactive']]?: undefined | __T_ColourOption;
                    };
                };
                button?: undefined | {
                    [K in 'primary' | 'secondary' | 'disabled']?: undefined | Data.Button<T_ColourTypes, __T_ColourOption>;
                } & {
                    [K in T_ThemeTypes['variations']['universal']]?: undefined | Data.Button<T_ColourTypes, __T_ColourOption>;
                };
                input?: undefined | {
                    [K in "$" | "disabled" | "readonly"]?: undefined | Data.Input<T_ColourTypes, __T_ColourOption>;
                };
                system?: undefined | {
                    accent?: undefined | {
                        bg: __T_ColourOption;
                        text: __T_ColourOption;
                    };
                    mark?: undefined | {
                        bg: __T_ColourOption;
                        text: __T_ColourOption;
                    };
                    selected?: undefined | {
                        bg: __T_ColourOption;
                        text: __T_ColourOption;
                    };
                };
            };
        }
        /** @internal @private */
        export interface RequiredVariations<T_ColourName extends string> {
            base: TokenTypes.Colour.GenericName<T_ColourName>;
            background: {
                $: TokenTypes.Colour.GenericName<T_ColourName>;
                bright: TokenTypes.Colour.GenericName<T_ColourName>;
                grey: TokenTypes.Colour.GenericName<T_ColourName>;
            };
            universal: {
                primary: TokenTypes.Colour.GenericName<T_ColourName>;
                secondary: TokenTypes.Colour.GenericName<T_ColourName>;
            };
            text: {
                active: TokenTypes.Colour.GenericName<T_ColourName>;
                disabled: TokenTypes.Colour.GenericName<T_ColourName>;
                grey: TokenTypes.Colour.GenericName<T_ColourName>;
            };
            heading: {
                [L in RequiredHeadingLevels]: TokenTypes.Colour.GenericName<T_ColourName>;
            };
            interactive: {
                active: TokenTypes.Colour.GenericName<T_ColourName>;
                hover: TokenTypes.Colour.GenericName<T_ColourName>;
                disabled: TokenTypes.Colour.GenericName<T_ColourName>;
            };
        }
        /** @internal @private */
        export interface AllVariations<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> {
            base: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
            background: RequiredVariations<T_ColourTypes['names']>['background'] & {
                [K in T_ThemeTypes['variations']['background']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
            };
            universal: RequiredVariations<T_ColourTypes['names']>['universal'] & {
                [K in T_ThemeTypes['variations']['universal']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
            };
            text: RequiredVariations<T_ColourTypes['names']>['text'] & {
                [K in T_ThemeTypes['variations']['text']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
            };
            heading: RequiredVariations<T_ColourTypes['names']>['heading'] & {
                [key: number]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
            };
            interactive: RequiredVariations<T_ColourTypes['names']>['interactive'];
        }
        /**
         * Utilities and types for levels.
         *
         * @since 0.1.1-alpha.1.draft
         */
        export namespace Levels {
            /**
             * @since 0.1.1-alpha.1.draft
             */
            interface Input<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                background?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentBrightGrey<T_ExtraColourLevels>>;
                text?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentMin<T_ExtraColourLevels>>;
                ui?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentMin<T_ExtraColourLevels>>;
                heading?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | {
                    [L in RequiredHeadingLevels]?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            }
            /**
             * @since 0.1.1-alpha.1.draft
             */
            interface Parsed<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                background: Levels.Set.AccentBrightGrey<T_ExtraColourLevels>;
                text: Levels.Set.AccentMin<T_ExtraColourLevels>;
                ui: Levels.Set.AccentMin<T_ExtraColourLevels>;
                heading: {
                    [L in RequiredHeadingLevels]: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            }
            /**
             * @since 0.1.1-alpha.1.draft — Made public, moved to SingleMode.Levels and renamed.
             */
            interface Required<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                background: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentBrightGrey<T_ExtraColourLevels>;
                text: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentMin<T_ExtraColourLevels>;
                ui: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentMin<T_ExtraColourLevels>;
                heading: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | {
                    [L in RequiredHeadingLevels]: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                };
            }
            /**
             * Common object shapes used to set multiple level types.
             *
             * @since 0.1.1-alpha.1.draft
             */
            namespace Set {
                /**
                 * @since 0.1.1-alpha.1.draft
                 */
                interface AccentBrightGrey<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    bright: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    grey: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                }
                /**
                 * @since 0.1.1-alpha.0
                 * @since 0.1.1-alpha.1.draft — Made public, moved to SingleMode.Levels.Sets and renamed.
                 */
                interface AccentGrey<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    grey: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                }
                /**
                 * @since 0.1.1-alpha.1.draft — Made public, moved to SingleMode.Levels.Sets and renamed.
                 */
                interface AccentMin<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    min: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                }
            }
            /**
             * @since 0.1.1-alpha.0
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Levels and renamed.
             */
            namespace DEFAULT {
                const average: {
                    readonly background: {
                        readonly $: "150";
                        readonly bright: "100";
                        readonly accent: "200";
                        readonly grey: "200";
                    };
                    readonly text: {
                        readonly $: "750";
                        readonly accent: "700";
                        readonly min: "600";
                    };
                    readonly ui: {
                        readonly $: "750";
                        readonly accent: "700";
                        readonly min: "600";
                    };
                    readonly heading: {
                        readonly 1: "800";
                        readonly 2: "700";
                        readonly 3: "700";
                        readonly 4: "700";
                        readonly 5: "700";
                        readonly 6: "700";
                        readonly 7: "700";
                        readonly 8: "700";
                        readonly 9: "700";
                        readonly 10: "700";
                    };
                };
                const high: {
                    readonly background: {
                        readonly $: "100";
                        readonly bright: "white";
                        readonly accent: "150";
                        readonly grey: "150";
                    };
                    readonly text: {
                        readonly $: "800";
                        readonly accent: "750";
                        readonly min: "700";
                    };
                    readonly ui: {
                        readonly $: "800";
                        readonly accent: "750";
                        readonly min: "700";
                    };
                    readonly heading: {
                        readonly 1: "800";
                        readonly 2: "750";
                        readonly 3: "750";
                        readonly 4: "750";
                        readonly 5: "750";
                        readonly 6: "750";
                        readonly 7: "750";
                        readonly 8: "750";
                        readonly 9: "750";
                        readonly 10: "750";
                    };
                };
                const low: {
                    readonly background: {
                        readonly $: "250";
                        readonly bright: "200";
                        readonly accent: "250";
                        readonly grey: "250";
                    };
                    readonly text: {
                        readonly $: "700";
                        readonly accent: "700";
                        readonly min: "600";
                    };
                    readonly ui: {
                        readonly $: "700";
                        readonly accent: "700";
                        readonly min: "600";
                    };
                    readonly heading: {
                        readonly 1: "600";
                        readonly 2: "700";
                        readonly 3: "700";
                        readonly 4: "700";
                        readonly 5: "750";
                        readonly 6: "750";
                        readonly 7: "750";
                        readonly 8: "750";
                        readonly 9: "750";
                        readonly 10: "750";
                    };
                };
                const max: {
                    readonly background: "white";
                    readonly text: {
                        readonly $: "black";
                        readonly accent: "850";
                        readonly min: "850";
                    };
                    readonly ui: {
                        readonly $: "black";
                        readonly accent: "850";
                        readonly min: "850";
                    };
                    readonly heading: {
                        readonly 1: "850";
                        readonly 2: "850";
                        readonly 3: "850";
                        readonly 4: "850";
                        readonly 5: "850";
                        readonly 6: "850";
                        readonly 7: "850";
                        readonly 8: "850";
                        readonly 9: "850";
                        readonly 10: "850";
                    };
                };
            }
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Levels and renamed. Added default param and made inputs optional.
             */
            function parse<T_ExtraColourLevels extends ColourUtilities.Levels.Optional>(defaults: Levels.Required<T_ExtraColourLevels>, inputs?: Levels.Input<T_ExtraColourLevels>): Levels.Parsed<T_ExtraColourLevels>;
        }
        /**
         * This is used by the build function, not by the constructor.
         *
         * @since 0.1.0-alpha
         */
        export interface InputParam<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> {
            description?: null | string;
            levels?: undefined | Levels.Input<T_ColourTypes['extraLevels']>;
            variations?: undefined | {
                background?: Partial<RequiredVariations<T_ColourTypes['names']>['background']> & {
                    [K in T_ThemeTypes['variations']['background']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
                };
                universal?: Partial<RequiredVariations<T_ColourTypes['names']>['universal']> & {
                    [K in T_ThemeTypes['variations']['universal']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
                };
                text?: Partial<RequiredVariations<T_ColourTypes['names']>['text']> & {
                    [K in T_ThemeTypes['variations']['text']]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
                };
                heading?: Partial<RequiredVariations<T_ColourTypes['names']>['heading']> & {
                    [key: number]: TokenTypes.Colour.GenericName<T_ColourTypes['names']>;
                };
                interactive?: Partial<RequiredVariations<T_ColourTypes['names']>['interactive']>;
            };
        }
        /**
         * @since 0.1.0-alpha
         */
        export type JsonReturn<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = {
            name: "default" | T_ThemeTypes['name'];
            brightness: TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>;
            constrast: TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>;
            description?: undefined | string;
            data: Data<T_ColourTypes, T_ThemeTypes, __T_ColourOption> & {
                button: {
                    [K in keyof Data<T_ColourTypes, T_ThemeTypes>['button']]: Data.Button<T_ColourTypes, __T_ColourOption> & {
                        outline: InteractiveStyles<__T_ColourOption>;
                    };
                };
                link: Data<T_ColourTypes, T_ThemeTypes>['link'] & {
                    outline: Data<T_ColourTypes, T_ThemeTypes>['link']['outline'] & {
                        $: __T_ColourOption;
                        visited: __T_ColourOption;
                    };
                };
            };
            levelsInUse: {
                light: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
                dark: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
            }[];
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        export type ScssVars<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams, __T_ColourOption extends TokenTypes.Theme.ColourOption<T_ColourTypes> = TokenTypes.Theme.ColourOption<T_ColourTypes>> = Data<T_ColourTypes, T_ThemeTypes> & {
            button: {
                [K in keyof Data<T_ColourTypes, T_ThemeTypes>['button']]: Data.Button<T_ColourTypes, __T_ColourOption> & {
                    outline: InteractiveStyles<__T_ColourOption>;
                };
            };
            link: Data<T_ColourTypes, T_ThemeTypes>['link'] & {
                outline: Data<T_ColourTypes, T_ThemeTypes>['link']['outline'] & {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                };
            };
            system: {
                accent: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                background: {
                    $: __T_ColourOption;
                };
                button: {
                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };
                input: {
                    bg: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                    text: {
                        $: __T_ColourOption;
                        active: __T_ColourOption;
                        hover: __T_ColourOption;
                    };
                };
                link: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    visited: __T_ColourOption;
                };
                mark: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                selected: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                selection: {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                text: {
                    $: __T_ColourOption;
                    active: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
            };
        };
        /**
         * Used by the {@link SingleMode.build} static function,
         * not meant to be exposed through the API.
         *
         * @since 0.1.0-alpha
         * @internal
         */
        export namespace Build {
            /**
             * @since 0.1.0-alpha
             */
            interface Param<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> {
                levels: Levels.Parsed<T_ColourTypes['extraLevels']>;
                variations: AllVariations<T_ColourTypes, T_ThemeTypes>;
            }
            /**
             * @since 0.1.0-alpha
             */
            interface Param_ForcedColors<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams> {
                levels?: InputParam<T_ColourTypes, T_ThemeTypes>['levels'];
                variations: AllVariations<T_ColourTypes, T_ThemeTypes>;
            }
            function colourOption<T_ColourTypes extends TokenTypes.Colour.TypeParams>(name: TokenTypes.Colour.GenericName<T_ColourTypes['names']>, level: "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes['extraLevels']): "black" | "white" | TokenTypes.Colour.TokenSlug<T_ColourTypes['names'], T_ColourTypes['extraLevels']>;
            function completeVariations<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(clrNames: TokenTypes.Colour.GenericNameArray<T_ColourTypes['names']>, input: InputParam<T_ColourTypes, T_ThemeTypes>['variations']): AllVariations<T_ColourTypes, T_ThemeTypes>;
            /**
             * An easy way to generate a complete token set from limited inputs.
             *
             * @since 0.1.0-alpha
             */
            function data<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(inputParam: Param<T_ColourTypes, T_ThemeTypes>, overrides?: Data.Partial<NoInfer<T_ColourTypes>, NoInfer<T_ThemeTypes>>): Promise<Data<T_ColourTypes, T_ThemeTypes>>;
            /**
             * An easy way to generate a complete token set from limited inputs.
             *
             * @since 0.1.0-alpha
             */
            function forcedColors<T_ColourTypes extends TokenTypes.Colour.TypeParams, T_ThemeTypes extends TokenTypes.Theme.TypeParams>(input: Param_ForcedColors<T_ColourTypes, T_ThemeTypes>, overrides: Data.Partial<NoInfer<T_ColourTypes>, NoInfer<T_ThemeTypes>, TokenTypes.Css.SystemColor>): Promise<Data<T_ColourTypes, T_ThemeTypes, TokenTypes.Css.SystemColor>>;
        }
        export {};
    }
}
