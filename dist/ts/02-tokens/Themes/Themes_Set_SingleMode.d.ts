/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.10
 * @license MIT
 */
import type { ColourLevels_Extended, ColourLevels, ColourTokenSlug, CssSystemColor, RequiredHeadingLevels, ThemeColourOption } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha
 */
export declare class Tokens_Themes_Set_SingleMode<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, __T_ColourOption>> {
    readonly description: null | string;
    readonly levelsInUse: (ColourLevels | ColourLevels_Extended)[];
    readonly data: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, __T_ColourOption>;
    static build<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never>(preset: "forcedColors", brightness: undefined | string, clrNames: readonly T_ColourName[], input: Tokens_Themes_Set_SingleMode.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>, overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, NoInfer<T_Keyword_Universal>, NoInfer<T_Keyword_Text>>): Promise<Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>>;
    static build<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never>(preset: "low" | "average" | "high" | "max", brightness: undefined | string, clrNames: readonly T_ColourName[], input: Tokens_Themes_Set_SingleMode.InputParam<NoInfer<T_ColourName>, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>, overrides?: Tokens_Themes_Set_SingleMode.Data_RecursivePartial<NoInfer<T_ColourName>, NoInfer<T_ExtraColourLevels>, NoInfer<T_Keyword_Universal>, NoInfer<T_Keyword_Text>>): Promise<Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, ThemeColourOption<T_ColourName, T_ExtraColourLevels>>>;
    protected constructor(description: null | string, levelsInUse: (ColourLevels | ColourLevels_Extended)[], data: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, __T_ColourOption>);
    toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, __T_ColourOption>;
    toScssVars(): {
        system: {
            background: __T_ColourOption;
            button: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
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
        background: __T_ColourOption;
        text: {
            $: __T_ColourOption;
        } & {
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
        } & {
            active: __T_ColourOption;
            disabled: __T_ColourOption;
            grey: __T_ColourOption;
        } & { [K in T_Keyword_Universal]: __T_ColourOption; } & { [K_1 in T_Keyword_Text]: __T_ColourOption; };
        ui: {
            $: __T_ColourOption;
        } & {
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
        } & {
            active: __T_ColourOption;
            disabled: __T_ColourOption;
            grey: __T_ColourOption;
        } & { [K_2 in T_Keyword_Universal]: __T_ColourOption; } & { [K_3 in T_Keyword_Text]: __T_ColourOption; };
        heading: {
            1: __T_ColourOption;
            2: __T_ColourOption;
            9: __T_ColourOption;
            3: __T_ColourOption;
            4: __T_ColourOption;
            5: __T_ColourOption;
            6: __T_ColourOption;
            7: __T_ColourOption;
            8: __T_ColourOption;
            10: __T_ColourOption;
        };
        selection: {
            bg: __T_ColourOption;
            text: __T_ColourOption;
        };
        link: {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            active: __T_ColourOption;
            hover: __T_ColourOption;
            disabled: __T_ColourOption;
        };
        'link-icon': {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            active: __T_ColourOption;
            hover: __T_ColourOption;
            disabled: __T_ColourOption;
        };
        'link-ui': {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            active: __T_ColourOption;
            hover: __T_ColourOption;
            disabled: __T_ColourOption;
        };
        button: {
            primary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            secondary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            disabled: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        } & { [K_4 in T_Keyword_Universal]: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>; };
        field: {
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
            text: {
                $: __T_ColourOption;
                hover: __T_ColourOption;
                active: __T_ColourOption;
            };
        };
    };
}
/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 *
 * @since 0.1.0-alpha
 */
export declare namespace Tokens_Themes_Set_SingleMode {
    export const allHeadingLevels: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    export interface Data_Button<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
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
    }
    /**
     * @since 0.1.0-alpha
     */
    export interface Data<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
        background: __T_ColourOption;
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
        link: {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
        };
        'link-icon': {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
        };
        'link-ui': {
            $: __T_ColourOption;
            visited: __T_ColourOption;
        } & {
            [K in keyof RequiredVariations<T_ColourName>['interactive']]: __T_ColourOption;
        };
        button: {
            [K in 'primary' | 'secondary' | 'disabled']: Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        } & {
            [K in T_Keyword_Universal]: Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        };
        field: {
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
            text: {
                $: __T_ColourOption;
                hover: __T_ColourOption;
                active: __T_ColourOption;
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
    }
    /**
     * @since 0.1.0-alpha
     */
    export interface Data_RecursivePartial<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
        background?: undefined | __T_ColourOption;
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
        link?: undefined | {
            $?: undefined | __T_ColourOption;
            hover?: undefined | __T_ColourOption;
            active?: undefined | __T_ColourOption;
            visited?: undefined | __T_ColourOption;
        };
        'link-icon'?: undefined | {
            $?: undefined | __T_ColourOption;
            hover?: undefined | __T_ColourOption;
            active?: undefined | __T_ColourOption;
            visited?: undefined | __T_ColourOption;
        };
        'link-ui'?: undefined | {
            $?: undefined | __T_ColourOption;
            hover?: undefined | __T_ColourOption;
            active?: undefined | __T_ColourOption;
            visited?: undefined | __T_ColourOption;
        };
        button?: undefined | {
            [K in 'primary' | 'secondary' | 'disabled']?: undefined | Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        } & {
            [K in T_Keyword_Universal]?: undefined | Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        };
        field?: undefined | {
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
    }
    /** @internal @private */
    export interface RequiredVariations<T_ColourName extends string> {
        base: T_ColourName;
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
    export interface AllVariations<T_ColourName extends string, T_Keyword_Universal extends string, T_Keyword_Text extends string> {
        base: T_ColourName;
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
    interface LevelsSet<T_ExtraColourLevels extends ColourLevels_Extended> {
        $: ColourLevels | T_ExtraColourLevels;
        accent: ColourLevels | T_ExtraColourLevels;
        min: ColourLevels | T_ExtraColourLevels;
    }
    /** @internal @private */
    export interface RequiredLevels<T_ExtraColourLevels extends ColourLevels_Extended> {
        background: ColourLevels | T_ExtraColourLevels;
        text: LevelsSet<T_ExtraColourLevels>;
        ui: LevelsSet<T_ExtraColourLevels>;
        heading: {
            [L in RequiredHeadingLevels]: ColourLevels | T_ExtraColourLevels;
        };
    }
    /**
     * This is used by the build function, not by the constructor.
     *
     * @since 0.1.0-alpha
     */
    export interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
        description?: null | string;
        levels?: undefined | {
            background?: ColourLevels | T_ExtraColourLevels;
            text?: ColourLevels | T_ExtraColourLevels | Partial<LevelsSet<T_ExtraColourLevels>>;
            ui?: ColourLevels | T_ExtraColourLevels | Partial<LevelsSet<T_ExtraColourLevels>>;
            heading?: ColourLevels | T_ExtraColourLevels | {
                [L in RequiredHeadingLevels]?: ColourLevels | T_ExtraColourLevels;
            };
        };
        variations?: undefined | {
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
    export type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = {
        description?: undefined | string;
        data: Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, __T_ColourOption>;
        levelsInUse: {
            light: ColourLevels | ColourLevels_Extended;
            dark: ColourLevels | ColourLevels_Extended;
        }[];
    };
    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
     * not meant to be exposed through the API.
     *
     * @since 0.1.0-alpha
     * @internal
     */
    export namespace Build {
        /**
         * @since 0.1.0-alpha
         */
        interface Param<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string> {
            levels: RequiredLevels<T_ExtraColourLevels>;
            variations: AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text>;
        }
        /**
         * @since 0.1.0-alpha
         */
        interface Param_ForcedColors<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string> {
            levels?: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['levels'];
            variations: AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text>;
        }
        function colourOption<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended>(name: T_ColourName, level: ColourLevels | T_ExtraColourLevels): ColourTokenSlug<T_ColourName, T_ExtraColourLevels>;
        function completeLevels<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string>(input: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['levels']): Param<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['levels'];
        function completeVariations<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string, T_Keyword_Text extends string>(clrNames: readonly T_ColourName[], input: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>['variations']): AllVariations<T_ColourName, T_Keyword_Universal, T_Keyword_Text>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha
         */
        function data<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never>(input: Param<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha
         */
        function forcedColors<T_ColourName extends string, T_ExtraColourLevels extends ColourLevels_Extended, T_Keyword_Universal extends string = never, T_Keyword_Text extends string = never>(input: Param_ForcedColors<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, T_Keyword_Text, CssSystemColor>>;
    }
    export {};
}
//# sourceMappingURL=Themes_Set_SingleMode.d.ts.map