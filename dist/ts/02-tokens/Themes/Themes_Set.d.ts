/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { ColourTokenSlug, CssSystemColor, RequiredHeadingLevels, ThemeColourOption, ThemeMode_ContrastOption } from '../@types.js';
import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes_Set<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never> extends AbstractTokens<{
    data: Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    json: Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    scss: Tokens_Themes_Set.ScssVars<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
}> {
    /** Name for this shade set. */
    protected readonly name: T_ThemeName;
    protected readonly clrNames: readonly T_ColourName[];
    protected readonly extraColourLevels: readonly T_ExtraColourLevels[];
    protected readonly brightnessModes: readonly T_ThemeBrightnessMode[number][];
    protected readonly contrastModes: readonly T_ThemeContrastMode[number][];
    protected readonly forcedColours: Tokens_Themes_Set.SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>;
    protected readonly modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set.SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
        };
    };
    /**
     * Used instead of the constructor so that it can be async.
     */
    static build<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends string, T_ThemeContrastMode extends ThemeMode_ContrastOption, T_ThemeName extends string, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never>(name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[], contrastModes: readonly T_ThemeContrastMode[], input: Tokens_Themes_Set.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, readonly NoInfer<T_ThemeBrightnessMode>[], readonly NoInfer<T_ThemeContrastMode>[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>): Promise<Tokens_Themes_Set<T_ColourName, T_ExtraColourLevels, readonly T_ThemeBrightnessMode[], readonly T_ThemeContrastMode[], T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>>;
    get data(): Tokens_Themes_Set.Data<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    protected constructor(
    /** Name for this shade set. */
    name: T_ThemeName, clrNames: readonly T_ColourName[], extraColourLevels: readonly T_ExtraColourLevels[], brightnessModes: readonly T_ThemeBrightnessMode[number][], contrastModes: readonly T_ThemeContrastMode[number][], forcedColours: Tokens_Themes_Set.SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>, modes: {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set.SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
        };
    });
    toJSON(): Tokens_Themes_Set.JsonReturn<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
    toScssVars(): Tokens_Themes_Set.ScssVars<T_ColourName, T_ExtraColourLevels, T_ThemeBrightnessMode, T_ThemeContrastMode, T_ThemeName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
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
    type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        name: T_ThemeName;
        forcedColours: Tokens_Themes_Set.SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set.SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        name: T_ThemeName;
        variations?: Tokens_Themes_Set.SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>['variations'];
        forcedColours?: Omit<Tokens_Themes_Set.SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>, "levels" | "variations"> & {
            overrides?: Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>;
        };
    } & {
        [B in T_ThemeBrightnessMode[number]]?: {
            [C in T_ThemeContrastMode[number]]?: Tokens_Themes_Set.SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background> & {
                overrides?: Tokens_Themes_Set.SingleMode.Data.RecursivePartial<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
            };
        };
    };
    /**
     * @since 0.1.0-alpha
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        name: T_ThemeName;
        levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[];
        forcedColours: Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set.SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
        };
    };
    /**
     * @since 0.1.1-alpha.1.draft
     */
    type ScssVars<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_ThemeBrightnessMode extends readonly string[], T_ThemeContrastMode extends readonly ThemeMode_ContrastOption[], T_ThemeName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> = {
        'forced-colors': Tokens_Themes_Set.SingleMode.ScssVars<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>;
    } & {
        [B in T_ThemeBrightnessMode[number]]: {
            [C in T_ThemeContrastMode[number]]: Tokens_Themes_Set.SingleMode.ScssVars<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
        };
    };
    /**
     * Generates a complete token object for the design system.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    class SingleMode<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> extends AbstractTokens<{
        data: SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
        json: SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
        scss: SingleMode.ScssVars<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
    }> {
        readonly description: null | string;
        readonly levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[];
        readonly data: SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
        static build<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never>(preset: "forcedColors", brightness: undefined | string, clrNames: readonly T_ColourName[], input: SingleMode.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>, overrides?: SingleMode.Data.RecursivePartial<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, NoInfer<T_Keyword_Universal>, NoInfer<T_Keyword_Text>, NoInfer<T_Keyword_Background>>): Promise<SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>>;
        static build<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never>(preset: "low" | "average" | "high" | "max", brightness: undefined | string, clrNames: readonly T_ColourName[], input: SingleMode.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>, overrides?: SingleMode.Data.RecursivePartial<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, NoInfer<T_Keyword_Universal>, NoInfer<T_Keyword_Text>, NoInfer<T_Keyword_Background>>): Promise<SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>>;
        protected constructor(description: null | string, levelsInUse: ("black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional)[], data: SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>);
        toJSON(): SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
        toScssVars(): {
            link: {
                outline: {
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    disabled: __T_ColourOption;
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                };
                $: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
                /**
                 * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                 */
                decoration: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
                icon: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    disabled: __T_ColourOption;
                };
            };
            system: {
                background: {
                    $: __T_ColourOption;
                } & {
                    grey: __T_ColourOption;
                } & { [K in T_Keyword_Universal]: __T_ColourOption; } & { [K_1 in T_Keyword_Background]: __T_ColourOption; };
                button: SingleMode.Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
                input: {
                    /**
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    bg: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    placeholder: __T_ColourOption;
                    text: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                };
                link: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    active: __T_ColourOption;
                    hover: __T_ColourOption;
                    disabled: __T_ColourOption;
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
            background: {
                $: __T_ColourOption;
            } & {
                grey: __T_ColourOption;
            } & { [K in T_Keyword_Universal]: __T_ColourOption; } & { [K_1 in T_Keyword_Background]: __T_ColourOption; };
            text: {
                $: __T_ColourOption;
            } & {
                primary: __T_ColourOption;
                secondary: __T_ColourOption;
            } & {
                active: __T_ColourOption;
                disabled: __T_ColourOption;
                grey: __T_ColourOption;
            } & { [K_2 in T_Keyword_Universal]: __T_ColourOption; } & { [K_3 in T_Keyword_Text]: __T_ColourOption; };
            ui: {
                $: __T_ColourOption;
            } & {
                primary: __T_ColourOption;
                secondary: __T_ColourOption;
            } & {
                active: __T_ColourOption;
                disabled: __T_ColourOption;
                grey: __T_ColourOption;
            } & { [K_4 in T_Keyword_Universal]: __T_ColourOption; } & { [K_5 in T_Keyword_Text]: __T_ColourOption; };
            heading: {
                2: __T_ColourOption;
                1: __T_ColourOption;
                4: __T_ColourOption;
                3: __T_ColourOption;
                7: __T_ColourOption;
                5: __T_ColourOption;
                6: __T_ColourOption;
                8: __T_ColourOption;
                9: __T_ColourOption;
                10: __T_ColourOption;
            };
            selection: {
                bg: __T_ColourOption;
                text: __T_ColourOption;
            };
            button: {
                primary: SingleMode.Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
                secondary: SingleMode.Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
                disabled: SingleMode.Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            } & { [K_6 in T_Keyword_Universal]: SingleMode.Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>; };
            /**
             * @since 0.1.1-alpha.0 — Changed from field to input.
             * @since 0.1.1-alpha.1.draft — Added placeholder colour.
             */
            input: {
                disabled: {
                    /**
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    bg: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    placeholder: __T_ColourOption;
                    text: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                };
                $: {
                    /**
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    bg: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    placeholder: __T_ColourOption;
                    text: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                };
                readonly: {
                    /**
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    bg: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    placeholder: __T_ColourOption;
                    text: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                };
            };
        };
    }
    /**
     * Utilities for the {@link SingleMode} class.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to {@link Tokens_Themes_Set} and renamed.
     */
    namespace SingleMode {
        const allHeadingLevels: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        /**
         * @since 0.1.0-alpha
         */
        type Data<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = {
            background: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourName>['background']]: __T_ColourOption;
            } & {
                [K in T_Keyword_Universal]: __T_ColourOption;
            } & {
                [K in T_Keyword_Background]: __T_ColourOption;
            };
            text: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourName>['universal']]: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourName>['text']]: __T_ColourOption;
            } & {
                [K in T_Keyword_Universal]: __T_ColourOption;
            } & {
                [K in T_Keyword_Text]: __T_ColourOption;
            };
            ui: {
                $: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourName>['universal']]: __T_ColourOption;
            } & {
                [K in keyof RequiredVariations<T_ColourName>['text']]: __T_ColourOption;
            } & {
                [K in T_Keyword_Universal]: __T_ColourOption;
            } & {
                [K in T_Keyword_Text]: __T_ColourOption;
            };
            heading: {
                [L in RequiredHeadingLevels]: __T_ColourOption;
            };
            selection: {
                bg: __T_ColourOption;
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
                    [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
                };
                /**
                 * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                 */
                decoration: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
                };
                icon: {
                    $: __T_ColourOption;
                    visited: __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
                };
                /**
                 * Used for the focus outline and similar elements.
                 *
                 * @since 0.1.1-alpha.0
                 */
                outline: {
                    [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
                };
            };
            button: {
                [K in 'primary' | 'secondary' | 'disabled']: Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            } & {
                [K in T_Keyword_Universal]: Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            };
            /**
             * @since 0.1.1-alpha.0 — Changed from field to input.
             * @since 0.1.1-alpha.1.draft — Added placeholder colour.
             */
            input: {
                [K in "$" | "disabled" | "readonly"]: {
                    /**
                     * Used for accent-color and focus ring colour.
                     */
                    accent: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    bg: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    border: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                    placeholder: __T_ColourOption;
                    text: {
                        $: __T_ColourOption;
                        hover: __T_ColourOption;
                        active: __T_ColourOption;
                    };
                };
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
        namespace Data {
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Data and renamed.
             */
            type Button<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = {
                bg: {
                    $: __T_ColourOption;
                    hover: __T_ColourOption;
                    active: __T_ColourOption;
                };
                border: {
                    $: __T_ColourOption;
                    hover: __T_ColourOption;
                    active: __T_ColourOption;
                };
                outline: {
                    $?: undefined | never;
                    hover: __T_ColourOption;
                    active: __T_ColourOption;
                };
                text: {
                    $: __T_ColourOption;
                    hover: __T_ColourOption;
                    active: __T_ColourOption;
                };
                ui: {
                    $: __T_ColourOption;
                    hover: __T_ColourOption;
                    active: __T_ColourOption;
                };
            };
            /**
             * @since 0.1.0-alpha
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Data and renamed.
             */
            type RecursivePartial<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = {
                background?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['background']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Universal]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Background]?: undefined | __T_ColourOption;
                };
                text?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['text']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Universal]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Text]?: undefined | __T_ColourOption;
                };
                ui?: undefined | {
                    $?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['universal']]?: undefined | __T_ColourOption;
                } & {
                    [K in keyof RequiredVariations<T_ColourName>['text']]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Universal]?: undefined | __T_ColourOption;
                } & {
                    [K in T_Keyword_Text]?: undefined | __T_ColourOption;
                };
                heading?: undefined | {
                    [L in RequiredHeadingLevels]?: undefined | __T_ColourOption;
                };
                selection?: undefined | {
                    bg: __T_ColourOption;
                    text: __T_ColourOption;
                };
                link?: {
                    $: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourName>['interactive']]?: undefined | __T_ColourOption;
                    };
                    /**
                     * @since 0.1.1-alpha.0 — Renamed from link-ui to link-decoration.
                     */
                    decoration?: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourName>['interactive']]?: undefined | __T_ColourOption;
                    };
                    icon?: undefined | {
                        $?: undefined | __T_ColourOption;
                        visited?: undefined | __T_ColourOption;
                    } & {
                        [K in keyof RequiredVariations<T_ColourName>['interactive']]?: undefined | __T_ColourOption;
                    };
                    outline?: undefined | {
                        [K in keyof RequiredVariations<T_ColourName>['interactive']]?: undefined | __T_ColourOption;
                    };
                };
                button?: undefined | {
                    [K in 'primary' | 'secondary' | 'disabled']?: undefined | Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
                } & {
                    [K in T_Keyword_Universal]?: undefined | Data.Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
                };
                input?: undefined | {
                    [K in "$" | "disabled" | "readonly"]?: {
                        accent?: undefined | {
                            $?: undefined | __T_ColourOption;
                            hover?: undefined | __T_ColourOption;
                            active?: undefined | __T_ColourOption;
                        };
                        bg?: undefined | {
                            $?: undefined | __T_ColourOption;
                            hover?: undefined | __T_ColourOption;
                            active?: undefined | __T_ColourOption;
                        };
                        border?: undefined | {
                            $?: undefined | __T_ColourOption;
                            hover?: undefined | __T_ColourOption;
                            active?: undefined | __T_ColourOption;
                        };
                        text?: undefined | {
                            $?: undefined | __T_ColourOption;
                            hover?: undefined | __T_ColourOption;
                            active?: undefined | __T_ColourOption;
                        };
                    };
                };
                system?: undefined | {
                    accent?: undefined | {
                        bg?: undefined | __T_ColourOption;
                        text?: undefined | __T_ColourOption;
                    };
                    mark?: undefined | {
                        bg?: undefined | __T_ColourOption;
                        text?: undefined | __T_ColourOption;
                    };
                    selected?: undefined | {
                        bg?: undefined | __T_ColourOption;
                        text?: undefined | __T_ColourOption;
                    };
                };
            };
        }
        /** @internal @private */
        interface RequiredVariations<T_ColourName extends string> {
            base: T_ColourName;
            background: {
                grey: T_ColourName;
            };
            universal: {
                primary: T_ColourName;
                secondary: T_ColourName;
            };
            text: {
                active: T_ColourName;
                disabled: T_ColourName;
                grey: T_ColourName;
            };
            heading: {
                [L in RequiredHeadingLevels]: T_ColourName;
            };
            interactive: {
                active: T_ColourName;
                hover: T_ColourName;
                disabled: T_ColourName;
            };
        }
        /** @internal @private */
        interface AllVariations<T_ColourName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> {
            base: T_ColourName;
            background: RequiredVariations<T_ColourName>['background'] & {
                [K in T_Keyword_Background]: T_ColourName;
            };
            universal: RequiredVariations<T_ColourName>['universal'] & {
                [K in T_Keyword_Universal]: T_ColourName;
            };
            text: RequiredVariations<T_ColourName>['text'] & {
                [K in T_Keyword_Text]: T_ColourName;
            };
            heading: RequiredVariations<T_ColourName>['heading'] & {
                [key: number]: T_ColourName;
            };
            interactive: RequiredVariations<T_ColourName>['interactive'];
        }
        /**
         * Utilities and types for levels.
         *
         * @since 0.1.1-alpha.1.draft
         */
        namespace Levels {
            /**
             * @since 0.1.1-alpha.1.draft
             */
            interface Input<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                background?: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Partial<Levels.Set.AccentGrey<T_ExtraColourLevels>>;
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
                background: Levels.Set.AccentGrey<T_ExtraColourLevels>;
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
                background: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels | Levels.Set.AccentGrey<T_ExtraColourLevels>;
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
                 * @since 0.1.1-alpha.1.draft — Made public, moved to SingleMode.Levels.Sets and renamed.
                 */
                interface AccentMin<T_ExtraColourLevels extends ColourUtilities.Levels.Optional> {
                    $: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    accent: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
                    min: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels;
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
            }
            /**
             * @since 0.1.1-alpha.0
             * @since 0.1.1-alpha.1.draft — Moved to SingleMode.Levels and renamed.
             */
            namespace DEFAULT {
                const average: {
                    readonly background: {
                        readonly $: "150";
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
                        readonly accent: "150";
                        readonly grey: "150";
                    };
                    readonly text: {
                        readonly $: "850";
                        readonly accent: "750";
                        readonly min: "700";
                    };
                    readonly ui: {
                        readonly $: "850";
                        readonly accent: "750";
                        readonly min: "700";
                    };
                    readonly heading: {
                        readonly 1: "800";
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
                const low: {
                    readonly background: {
                        readonly $: "300";
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
                    readonly text: "black";
                    readonly ui: "black";
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
        interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
            description?: null | string;
            levels?: undefined | Levels.Input<T_ExtraColourLevels>;
            variations?: undefined | {
                background?: Partial<RequiredVariations<T_ColourName>['background']> & {
                    [K in T_Keyword_Background]: T_ColourName;
                };
                universal?: Partial<RequiredVariations<T_ColourName>['universal']> & {
                    [K in T_Keyword_Universal]: T_ColourName;
                };
                text?: Partial<RequiredVariations<T_ColourName>['text']> & {
                    [K in T_Keyword_Text]: T_ColourName;
                };
                heading?: Partial<RequiredVariations<T_ColourName>['heading']> & {
                    [key: number]: T_ColourName;
                };
                interactive?: Partial<RequiredVariations<T_ColourName>['interactive']>;
            };
        }
        /**
         * @since 0.1.0-alpha
         */
        type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = {
            description?: undefined | string;
            data: Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>;
            levelsInUse: {
                light: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
                dark: "black" | "white" | ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional;
            }[];
        };
        /**
         * @since 0.1.1-alpha.1.draft
         */
        type ScssVars<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption> & {
            link: Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>['link'] & {
                outline: Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, __T_ColourOption>['link']['outline'] & {
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
        namespace Build {
            /**
             * @since 0.1.0-alpha
             */
            interface Param<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> {
                levels: Levels.Parsed<T_ExtraColourLevels>;
                variations: AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
            }
            /**
             * @since 0.1.0-alpha
             */
            interface Param_ForcedColors<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string> {
                levels?: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>['levels'];
                variations: AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
            }
            function colourOption<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional>(name: T_ColourName, level: "black" | "white" | ColourUtilities.Levels.Required | T_ExtraColourLevels): "black" | "white" | ColourTokenSlug<T_ColourName, T_ExtraColourLevels>;
            function completeVariations<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string, T_Keyword_Text extends string, T_Keyword_Background extends string>(clrNames: readonly T_ColourName[], input: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>['variations']): AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>;
            /**
             * An easy way to generate a complete token set from limited inputs.
             *
             * @since 0.1.0-alpha
             */
            function data<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never>(input: Param<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>>;
            /**
             * An easy way to generate a complete token set from limited inputs.
             *
             * @since 0.1.0-alpha
             */
            function forcedColors<T_ColourName extends string, T_ExtraColourLevels extends ColourUtilities.Levels.Optional, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never, T_Keyword_Background extends string = never>(input: Param_ForcedColors<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, T_Keyword_Background, CssSystemColor>>;
        }
    }
}
//# sourceMappingURL=Themes_Set.d.ts.map