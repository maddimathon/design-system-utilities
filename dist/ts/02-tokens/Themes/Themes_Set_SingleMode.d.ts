/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { CssSystemColor, ThemeColourOption, TokenLevels, TokenLevels_Extended } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Themes_Set_SingleMode<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, __T_ColourOption>> {
    readonly data: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, __T_ColourOption>;
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string = never>(preset: "forcedColors", clrNames: readonly T_ColourName[], input: Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, CssSystemColor>): Promise<Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, CssSystemColor>>;
    static build<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string = never>(preset: "low" | "average" | "high", clrNames: readonly T_ColourName[], input: Tokens_Themes_Set_SingleMode.InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>): Promise<Tokens_Themes_Set_SingleMode<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>>;
    protected constructor(data: Tokens_Themes_Set_SingleMode.Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, __T_ColourOption>);
    toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>;
    toScssVars(): {
        system: {
            background: __T_ColourOption;
            button: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            input: {
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
                hover: __T_ColourOption;
                active: __T_ColourOption;
                visited: __T_ColourOption;
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
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
            active: __T_ColourOption;
            disabled: __T_ColourOption;
        } & { [K in T_Keyword_Universal]: __T_ColourOption; };
        ui: {
            $: __T_ColourOption;
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
            active: __T_ColourOption;
            disabled: __T_ColourOption;
        } & { [K_1 in T_Keyword_Universal]: __T_ColourOption; };
        selection: {
            bg: __T_ColourOption;
            text: __T_ColourOption;
        };
        link: {
            $: __T_ColourOption;
            hover: __T_ColourOption;
            active: __T_ColourOption;
            visited: __T_ColourOption;
        };
        button: {
            primary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            secondary: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
            disabled: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        } & { [K_2 in T_Keyword_Universal]: Tokens_Themes_Set_SingleMode.Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>; };
        field: {
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
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Themes_Set_SingleMode {
    interface Data_Button<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
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
    }
    /**
     * @since 0.1.0-alpha.draft
     */
    interface Data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
        background: __T_ColourOption;
        text: {
            $: __T_ColourOption;
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
            active: __T_ColourOption;
            disabled: __T_ColourOption;
        } & {
            [K in T_Keyword_Universal]: __T_ColourOption;
        };
        ui: {
            $: __T_ColourOption;
            primary: __T_ColourOption;
            secondary: __T_ColourOption;
            active: __T_ColourOption;
            disabled: __T_ColourOption;
        } & {
            [K in T_Keyword_Universal]: __T_ColourOption;
        };
        selection: {
            bg: __T_ColourOption;
            text: __T_ColourOption;
        };
        link: {
            $: __T_ColourOption;
            hover: __T_ColourOption;
            active: __T_ColourOption;
            visited: __T_ColourOption;
        };
        button: {
            [K in 'primary' | 'secondary' | 'disabled']: Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        } & {
            [K in T_Keyword_Universal]: Data_Button<T_ColourName, T_ExtraColourLevels, __T_ColourOption>;
        };
        field: {
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
    /** @internal @private */
    interface RequiredVariations<T_ColourName extends string> {
        base: T_ColourName;
        universal: {
            primary: T_ColourName;
            secondary: T_ColourName;
        };
    }
    /** @internal @private */
    interface AllVariations<T_ColourName extends string, T_Keyword_Universal extends string> {
        base: T_ColourName;
        universal: RequiredVariations<T_ColourName>['universal'] & {
            [K in T_Keyword_Universal]: T_ColourName;
        };
    }
    /** @internal @private */
    interface RequiredLevels<T_ExtraColourLevels extends TokenLevels_Extended> {
        background: TokenLevels | T_ExtraColourLevels;
        text: TokenLevels | T_ExtraColourLevels;
        ui: TokenLevels | T_ExtraColourLevels;
    }
    /**
     * This is used by the build function, not by the constructor.
     *
     * @since 0.1.0-alpha.draft
     */
    interface InputParam<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> {
        levels?: Partial<RequiredLevels<T_ExtraColourLevels>>;
        variations?: {
            universal?: Partial<RequiredVariations<T_ColourName>['universal']> & {
                [K in T_Keyword_Universal]: T_ColourName;
            };
        };
    }
    /**
     * @since 0.1.0-alpha.draft
     */
    type JsonReturn<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string, __T_ColourOption extends ThemeColourOption<T_ColourName, T_ExtraColourLevels> = ThemeColourOption<T_ColourName, T_ExtraColourLevels>> = Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, __T_ColourOption>;
    /**
     * Used by the {@link Tokens_Themes_Set_SingleMode.build} static function,
     * not meant to be exposed through the API.
     *
     * @since 0.1.0-alpha.draft
     * @internal
     */
    namespace Build {
        /**
         * @since 0.1.0-alpha.draft
         */
        interface Param<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string> {
            levels: RequiredLevels<T_ExtraColourLevels>;
            variations: AllVariations<T_ColourName, T_Keyword_Universal>;
        }
        /**
         * @since 0.1.0-alpha.draft
         */
        interface Param_ForcedColors<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string> {
            levels?: Partial<RequiredLevels<T_ExtraColourLevels>>;
            variations: AllVariations<T_ColourName, T_Keyword_Universal>;
        }
        function completeLevels<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string>(input: InputParam<T_ColourName, T_ExtraColourLevels, string>['levels']): Param<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>['levels'];
        function completeVariations<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string>(clrNames: readonly T_ColourName[], input: InputParam<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>['variations']): AllVariations<T_ColourName, T_Keyword_Universal>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha.draft
         */
        function data<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string = never>(input: Param<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         *
         * @since 0.1.0-alpha.draft
         */
        function forcedColors<T_ColourName extends string, T_ExtraColourLevels extends TokenLevels_Extended, T_Keyword_Universal extends string = never>(input: Param_ForcedColors<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal>): Promise<Data<T_ColourName, T_ExtraColourLevels, T_Keyword_Universal, CssSystemColor>>;
    }
}
//# sourceMappingURL=Themes_Set_SingleMode.d.ts.map