/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects/partial';
import type { CssSystemColor } from '../@types.js';
import { AbstractTokens } from '../abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since ___PKG_VERSION___
 */
export declare class Tokens_Themes_Set_SingleMode<T_ColourOptions extends string = CssSystemColor> extends AbstractTokens<Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>> {
    readonly data: Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>;
    /**
     * An easy way to generate a complete token set from limited inputs.
     *
     * @param preset  Contrast preset to use to complete the object.
     * @param input   Optional overrides.
     */
    static build<T_ColourOptions extends CssSystemColor>(preset: "forcedColors", input: Tokens_Themes_Set_SingleMode.InputParam<CssSystemColor>): Promise<Tokens_Themes_Set_SingleMode<CssSystemColor>>;
    static build<T_ColourOptions extends string>(preset: Tokens_Themes_Set_SingleMode.Templates.Name, input: Tokens_Themes_Set_SingleMode.InputParam<T_ColourOptions>): Promise<Tokens_Themes_Set_SingleMode<T_ColourOptions>>;
    protected constructor(data: Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>);
    toJSON(): Tokens_Themes_Set_SingleMode.JsonReturn<T_ColourOptions>;
    toScssVars(): Tokens_Themes_Set_SingleMode.Data<T_ColourOptions>;
}
/**
 * Utilities for the {@link Tokens_Themes_Set_SingleMode} class.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace Tokens_Themes_Set_SingleMode {
    /**
     * @since ___PKG_VERSION___
     */
    interface Data<T_ColourOptions extends string> {
        background: T_ColourOptions;
        text: {
            '$': T_ColourOptions;
            'primary': T_ColourOptions;
            'secondary': T_ColourOptions;
            'active': T_ColourOptions;
            'disabled': T_ColourOptions;
        };
        ui: {
            '$': T_ColourOptions;
            'primary': T_ColourOptions;
            'secondary': T_ColourOptions;
            'active': T_ColourOptions;
            'disabled': T_ColourOptions;
        };
        selection: {
            'bg': T_ColourOptions;
            'text': T_ColourOptions;
        };
        link: {
            '$': T_ColourOptions;
            'hover': T_ColourOptions;
            'active': T_ColourOptions;
            'visited': T_ColourOptions;
        };
        button: {
            bg: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
            border: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
            text: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
        };
        field: {
            bg: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
            border: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
            text: {
                '$': T_ColourOptions;
                'hover': T_ColourOptions;
                'active': T_ColourOptions;
            };
            placeholder: T_ColourOptions;
        };
        system: {
            accent: {
                bg: T_ColourOptions;
                text: T_ColourOptions;
            };
            mark: {
                bg: T_ColourOptions;
                text: T_ColourOptions;
            };
            selected: {
                bg: T_ColourOptions;
                text: T_ColourOptions;
            };
        };
    }
    /**
     * @since ___PKG_VERSION___
     */
    type InputParam<T_ColourOptions extends string> = RecursivePartial<Data<T_ColourOptions>>;
    /**
     * @since ___PKG_VERSION___
     */
    type JsonReturn<T_ColourOptions extends string> = Data<T_ColourOptions>;
    namespace Templates {
        type Name = "average" | "forcedColors" | "high" | "low";
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         *
         * @since ___PKG_VERSION___
         */
        function average<T_ColourOptions extends string = CssSystemColor>(input: InputParam<T_ColourOptions>): Promise<Data<T_ColourOptions>>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For average contrast.
         *
         * @since ___PKG_VERSION___
         */
        function forcedColors(input: InputParam<CssSystemColor>): Promise<Data<CssSystemColor>>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For high contrast.
         *
         * @since ___PKG_VERSION___
         */
        function high<T_ColourOptions extends string = CssSystemColor>(input: InputParam<T_ColourOptions>): Promise<Data<T_ColourOptions>>;
        /**
         * An easy way to generate a complete token set from limited inputs.
         * For low contrast.
         *
         * @since ___PKG_VERSION___
         */
        function low<T_ColourOptions extends string = CssSystemColor>(input: InputParam<T_ColourOptions>): Promise<Data<T_ColourOptions>>;
    }
}
//# sourceMappingURL=Themes_Set_SingleMode.d.ts.map