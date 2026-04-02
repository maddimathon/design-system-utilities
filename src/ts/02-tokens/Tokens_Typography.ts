/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import NodeFS from 'node:fs';
import NodePath from 'node:path';

import type { Classify, RecursivePartial } from '@maddimathon/utility-typescript/types';
import {
    arrayUnique,
    deleteUndefinedProps,
    mergeArgs,
    objectMap,
} from '@maddimathon/utility-typescript';

import type { RecursiveRecord } from '../01-utilities/@types.js';
import type {
    AnyTokenLevel,
    RequiredHeadingLevels,
    WholeTokenLevel,
} from './@types.js';
import type { Tokens_Spacing } from './Tokens_Spacing.js';

import { roundToPixel } from '../01-utilities/roundToPixel.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Typography<
    T_FontFamilySlug extends string,
> extends AbstractTokens<{
    data: Tokens_Typography.Data<T_FontFamilySlug>;
    json: Tokens_Typography.JsonReturn<T_FontFamilySlug>;
    scss: Tokens_Typography.ScssVars<T_FontFamilySlug>;
}> {

    public static get default(): Tokens_Typography.Data<never> {
        return {

            lineHeight: {
                '100': -2.75,
                '200': -2,
                '300': -1.25,
                '400': 0,
                '500': 1,
                '600': 2,
            },

            fonts: {
                icons: undefined,
            },

            size: {

                heading: {
                    1: 7,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: -0.5,
                    8: -1,
                    9: -1.5,
                    10: -2,
                },

                normal: 0,

                smaller: {
                    1: -1.0,
                    2: -1.5,
                    3: -2.0,
                    // 4: -2.375,
                    // 5: -2.625,
                },

                bigger: {
                },
            },

            sizeScale: 1.0625,
        };
    }

    public readonly data: Tokens_Typography.Data<T_FontFamilySlug>;

    public readonly familyOverrides: undefined | {
        [ F in Tokens_Typography.DefaultFontFamilies ]?: undefined | Tokens_Typography.Font.FamilyOverride;
    } & {
        [ F in T_FontFamilySlug ]?: Tokens_Typography.Font.FamilyOverride;
    };

    public constructor (
        protected readonly spacing: Tokens_Spacing,
        input: Tokens_Typography.InputParam<T_FontFamilySlug>,
    ) {
        super();

        this.data = mergeArgs(
            Tokens_Typography.default as Tokens_Typography.Data<T_FontFamilySlug>,
            {
                ...input,
                fonts: {
                    ...input.fonts,
                    icons: input.fonts?.icons === false ? undefined : input.fonts?.icons,
                },
            },
            true,
        );

        this.familyOverrides = this.data.fonts
            ? Object.fromEntries(
                (
                    Object.values( this.data.fonts ) as (
                        undefined
                        | Tokens_Typography.Font.Family<Tokens_Typography.DefaultFontFamilies | T_FontFamilySlug>
                    )[]
                ).map(
                    ( font ): [
                        Tokens_Typography.DefaultFontFamilies | T_FontFamilySlug,
                        Tokens_Typography.Font.FamilyOverride,
                    ] | [] => {
                        // returns
                        if ( typeof font === 'undefined' ) {
                            return [];
                        }

                        let isOverride = font.fontOverrideOption;

                        if ( typeof isOverride === 'undefined' ) {

                            switch ( font.slug ) {
                                case 'dyslexic':
                                case 'hyperlegible':
                                case 'monospace':
                                    isOverride = true;
                                    break;
                            }
                        }

                        return isOverride ? [
                            font.slug,
                            {
                                label: font.slug === 'monospace' ? 'Monospace' : font.name,
                                value: font.slug,
                                labelClass: `font-family-override-${ font.slug }`,

                                ...deleteUndefinedProps( {
                                    contentWidthScale: font.contentWidthScale,
                                    lineHeightScale: font.lineHeightScale,
                                } ),
                            } satisfies Tokens_Typography.Font.FamilyOverride,
                        ] : [];
                    }
                )
            )
            : undefined;
    }

    public toJSON(): Tokens_Typography.JsonReturn<T_FontFamilySlug> {

        type SizeJson = Tokens_Typography.JsonReturn<T_FontFamilySlug>[ 'size' ][ 'title' ];

        const sizeConverter = ( num: number ) => {
            const rem = roundToPixel( Math.pow( this.spacing.data.multiplier, num ) * this.data.sizeScale, 32 );

            return {
                px: roundToPixel( rem * 16, 2 ),
                pt: roundToPixel( rem * 11, 2 ),
                rem,
            } satisfies SizeJson;
        };

        type SizeMapper<T_Obj extends RecursiveRecord<number | string, number>> = {
            [ K in keyof T_Obj ]: T_Obj[ K ] extends object
            ? SizeMapper<T_Obj[ K ]>
            : SizeJson
        };

        const sizeMapper = <T_Obj extends RecursiveRecord<number | string, number>>(
            sizes: T_Obj,
        ) => {
            // @ts-expect-error - this will be filled
            const mapped: SizeMapper<T_Obj> = {};

            for ( const sizeKey of ( Object.keys( sizes ) as ( keyof typeof sizes )[] ) ) {
                const sizeValue = sizes[ sizeKey ];

                const sizeValue_type = typeof sizeValue;

                // continues
                if ( sizeValue_type !== 'object' ) {
                    // continues
                    if ( sizeValue_type === 'undefined' ) {
                        continue;
                    }

                    // @ts-expect-error - this will be filled
                    mapped[ sizeKey ] = sizeConverter( sizeValue );
                    continue;
                }
            }

            return mapped;
        };

        const size = objectMap(
            this.data.size,
            ( [ key, value ] ): Tokens_Typography.JsonReturn<T_FontFamilySlug>[ 'size' ][ string ] => {
                // returns
                if ( typeof value === 'object' ) {
                    return sizeMapper( value );
                }

                return sizeConverter( value );
            }
        ) as Tokens_Typography.JsonReturn<T_FontFamilySlug>[ 'size' ];

        return {
            ...this.data,
            size,
            familyOverrides: this.familyOverrides ?? {},
        };
    }

    public toScssVars(): Tokens_Typography.ScssVars<T_FontFamilySlug> {

        const familyMapper = (
            family: Tokens_Typography.Font.Family,
            weight: WholeTokenLevel | 'variable',
            { value: font }: {
                key: "italic" | "normal";
                value: Tokens_Typography.Font.File;
            },
        ): NonNullable<Tokens_Typography.Font.FamilyScss[ WholeTokenLevel ]> => {

            let fallbacks = family.fallbacks ?? [];

            if ( family.appendSystemFontsToFallbacks ) {

                switch ( family.appendSystemFontsToFallbacks ) {

                    case 'monospace':
                        fallbacks.push( ...Tokens_Typography.Font.SystemMonospace );
                        break;

                    default:
                        fallbacks.push( ...Tokens_Typography.Font.SystemUI );
                        break;
                }

                fallbacks = arrayUnique( fallbacks );
            }

            let woffSrcPath: null | string = null;

            const sources = objectMap(
                font.path,
                ( [ type, paths ] ) => {
                    // returns
                    if ( typeof paths === 'undefined' ) {
                        return [];
                    }

                    const pathsArr = Array.isArray( paths ) ? paths : [ paths ];

                    if ( type == 'woff' ) {
                        woffSrcPath = pathsArr[ 0 ] ?? null;
                    }

                    return pathsArr.map(
                        ( path ) => ( {
                            type: type == 'ttf' ? 'truetype' as const : type,
                            path,
                        } )
                    );
                }
            );

            let base64: null | string = null;

            if ( woffSrcPath ) {
                woffSrcPath = NodePath.resolve( 'src/assets/fonts', woffSrcPath );

                if ( NodeFS.existsSync( woffSrcPath ) ) {
                    base64 = NodeFS.readFileSync( woffSrcPath, { encoding: 'base64' } );
                }
            }

            return {

                family: family.name,
                fallbacks,

                style: font.style,
                weight: font.weight,

                printFontFace: family.printFontFace ?? true,

                display: font.display ?? family.display,
                'line-gap-override': font.lineGapOverride ?? family.lineGapOverride,
                'size-adjust': font.sizeAdjust ?? family.sizeAdjust,
                'unicode-range': font.unicodeRange ?? family.unicodeRange,

                src: Object.values( {
                    ...sources,
                    truetype: sources.ttf,
                    ttf: undefined,
                } ).flat().filter( v => typeof v !== 'undefined' ),

                base64: base64 ? `url(data:font/woff;base64,${ base64 })` : undefined,
            };
        };

        return {
            font: {
                // UPGRADE - make empty size objects equal to null
                size: this.data.size,

                sizeScale: this.data.sizeScale,

                family: this.data.fonts && objectMap(
                    this.data.fonts,
                    ( [ __key, family ] ) => family && ( {

                        contentWidthScale: family.contentWidthScale,
                        css: family.css,
                        lineHeightScale: family.lineHeightScale,

                        variable: family.variable && objectMap(
                            family.variable,
                            ( [ key, value ] ) => familyMapper( family, 'variable', { key, value } )
                        ) satisfies {
                            normal: Tokens_Typography.Font.FamilyScss[ WholeTokenLevel ];
                            italic: Tokens_Typography.Font.FamilyScss[ WholeTokenLevel ];
                        },

                        weights: objectMap(
                            family.weights,
                            ( [ weight, fontSet ] ): undefined | {
                                normal: Tokens_Typography.Font.FamilyScss[ WholeTokenLevel ];
                                italic: Tokens_Typography.Font.FamilyScss[ WholeTokenLevel ];
                            } => fontSet && objectMap(
                                fontSet,
                                ( [ key, value ] ) => familyMapper( family, weight, { key, value } )
                            )
                        ),
                    } satisfies Classify<Tokens_Typography.ScssVars.Family> )
                ),

                familyOverrides: this.familyOverrides,
            },

            line_height: this.data.lineHeight,
        };
    }
}

/**
 * Utilities for the {@link Tokens_Typography} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Typography {

    /**
     * @since ___PKG_VERSION___
     */
    export type DefaultFontFamilies = "icons";

    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_FontFamilySlug extends string,
        T_SizeValue = number,
    > = {

        lineHeight: {
            [ L in DefaultLineHeightLevels ]: number;
        } & {
            [ L in Exclude<AnyTokenLevel, DefaultLineHeightLevels> ]?: number;
        };

        fonts: {
            [ F in DefaultFontFamilies ]?: undefined | Font.Family<F>;
        } & {
            [ F in T_FontFamilySlug ]: Font.Family<F>;
        };

        size: {

            heading: {
                [ L in RequiredHeadingLevels ]: T_SizeValue;
            } & {
                [ key: number ]: T_SizeValue;
            };

            smaller: {
                1: T_SizeValue;
                2: T_SizeValue;
                3: T_SizeValue;
                [ key: number ]: T_SizeValue;
            };

            normal: T_SizeValue;

            bigger: {
                [ key: number ]: T_SizeValue;
            };

            [ key: string ]: T_SizeValue | RecursiveRecord<number | string, T_SizeValue>;
        };

        sizeScale: number;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_FontFamilySlug extends string,
        T_SizeValue = number,
    > = Partial<Omit<Data<T_FontFamilySlug, T_SizeValue>, 'fonts' | 'lineHeight' | 'size'>> & {

        fonts?: {
            [ F in DefaultFontFamilies ]?: undefined | false | Font.Family<F>;
        } & {
            [ F in T_FontFamilySlug ]?: undefined | Font.Family<F>;
        };

        lineHeight?: Partial<Data<T_FontFamilySlug, T_SizeValue>[ 'lineHeight' ]>;
        size?: RecursivePartial<Data<T_FontFamilySlug, T_SizeValue>[ 'size' ]>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_FontFamilySlug extends string,
        T_SizeValue = {
            rem: number;
            pt: number;
            px: number;
        },
    > = Data<T_FontFamilySlug, T_SizeValue> & {

        familyOverrides: {
            [ K in T_FontFamilySlug ]?: undefined | Tokens_Typography.Font.FamilyOverride;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<
        T_FontFamilySlug extends string,
    > = {

        font: {
            family?: undefined | {
                [ F in T_FontFamilySlug ]?: undefined | ScssVars.Family;
            };

            familyOverrides: undefined | {
                [ K in T_FontFamilySlug ]?: undefined | Tokens_Typography.Font.FamilyOverride;
            };

            size: Tokens_Typography.Data<T_FontFamilySlug, number>[ 'size' ];
            sizeScale: Tokens_Typography.Data<T_FontFamilySlug, number>[ 'sizeScale' ];
        };

        line_height: Tokens_Typography.Data<T_FontFamilySlug, number>[ 'lineHeight' ];
    };

    export namespace ScssVars {

        export type Family = Pick<Tokens_Typography.Font.Family, 'contentWidthScale' | 'css' | 'lineHeightScale'> & {

            weights: {
                [ K in WholeTokenLevel ]?: undefined | {
                    normal: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                    italic: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                };
            };

            variable?: undefined | {
                normal: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
                italic: undefined | Classify<Tokens_Typography.Font.SingleFamilyScss>;
            };
        };
    }

    /**
     * @since 0.1.0-alpha
     */
    export namespace Font {

        /**
         * @since 0.1.0-alpha
         */
        export const SystemMonospace = [
            'Menlo',
            'Consolas',
            'Monaco',
            'Liberation Mono',
            'Lucida Console',
            'monospace',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ];

        /**
         * @since 0.1.0-alpha
         */
        export const SystemUI = [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen-Sans',
            'Ubuntu',
            'Cantarell',
            'Helvetica Neue',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ];

        /**
         * @since 0.1.0-alpha
         */
        export type FontFileOptions = {

            /**
             * {@inheritDoc SingleFamilyScss['display']}
             */
            display?: undefined | SingleFamilyScss[ 'display' ];

            /**
             * {@inheritDoc SingleFamilyScss['line-gap-override']}
             */
            lineGapOverride?: undefined | SingleFamilyScss[ 'line-gap-override' ];

            /**
             * {@inheritDoc SingleFamilyScss['size-adjust']}
             */
            sizeAdjust?: undefined | SingleFamilyScss[ 'size-adjust' ];

            /**
             * {@inheritDoc SingleFamilyScss['unicode-range']}
             */
            unicodeRange?: undefined | SingleFamilyScss[ 'unicode-range' ];
        };

        /**
         * @since 0.1.0-alpha
         */
        export type File = FontFileOptions & {
            path: {
                [ F in "local" | "ttf" | "woff" | "woff2" ]?: undefined | string | string[];
            };
            style: "normal" | "italic";
            weight: WholeTokenLevel | `${ '000' | WholeTokenLevel } ${ WholeTokenLevel | '1000' }`;
        };

        /**
         * Used to alter various size and alignment tokens in css, typically
         * when a font override is active (e.g., from the settings menu).
         *
         * @since ___PKG_VERSION___
         */
        export type FamilyOverride = {
            label: string;
            value: string;

            /**
             * A factor to alter the width values for this font.
             */
            contentWidthScale?: number;

            /**
             * A utility class value to set this font as font-family in css.
             */
            labelClass?: string;

            /**
             * A factor to alter the line height values for this font.
             */
            lineHeightScale?: number;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type SingleFamilyScss = {
            family: string;
            fallbacks: string[];
            src: {
                type: "local" | "truetype" | "woff" | "woff2";
                path: string;
            }[];

            /**
             * This should be the full URL value e.g., `url(data:font/woff;base64,)`
             */
            base64: undefined | string;

            style: "normal" | "italic";
            weight: WholeTokenLevel | `${ '000' | WholeTokenLevel } ${ WholeTokenLevel | '1000' }`;

            printFontFace: boolean;

            /**
             * CSS \@font-face 'font-display' setting.
             *
             * “Determines how a font face is displayed based on whether and
             * when it is downloaded and ready to use.”
             *
             * @see
             * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display}
             */
            display?: "auto" | "block" | "fallback" | "optional" | "swap";

            /**
             * CSS \@font-face setting.
             * 
             * “Defines the line gap metric for the font.”
             * 
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/line-gap-override}
             */
            'line-gap-override'?: "normal" | `${ number }%`;

            /**
             * CSS \@font-face setting.
             *
             * “Defines a multiplier for glyph outlines and metrics associated
             * with this font. This makes it easier to harmonize the designs of
             * various fonts when rendered at the same font size.”
             *
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust}
             */
            'size-adjust'?: `${ number }%`;

            /**
             * CSS \@font-face setting.
             * 
             * “The range of Unicode code points to be used from the font.”
             * 
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range}
             */
            'unicode-range'?: string;
        };

        /**
         * @since 0.1.0-alpha
         */
        export type FamilyScss = {
            [ L in WholeTokenLevel | `${ WholeTokenLevel }i` ]?: Classify<SingleFamilyScss>;
        };

        /**
         * @since 0.1.0-alpha
         */
        export type Family<T_Slug extends string = string> = FontFileOptions & {

            slug: T_Slug;

            name: string;
            fallbacks?: string[];

            /**
             * Whether to append the system fonts list to the fallbacks when
             * outputting to scss.
             */
            appendSystemFontsToFallbacks?: boolean | "monospace";

            /**
             * Values to use in the css.
             */
            css?: undefined | RecursivePartial<{

                icon: {

                    inline: {
                        buffer: {
                            start: number;
                            end: number;
                        };
                    };

                    size: {
                        $: number;
                        inline: number;
                    };
                };

                /**
                 * Will be used as a multiplier.
                 */
                letterSpacing: number;
            }>;

            /**
             * A multiplier for the content/page widths when this font is
             * applied as an override.
             */
            contentWidthScale?: undefined | number;

            /**
             * Whether this should be an override option in website settings.
             */
            fontOverrideOption?: boolean;

            /**
             * A multiplier for the line height when this font is applied as an
             * override.
             */
            lineHeightScale?: undefined | number;

            /**
             * Whether to include font-face declarations in the css.
             * 
             * @default true
             */
            printFontFace?: boolean;

            weights: {
                [ K in WholeTokenLevel ]?: {
                    normal: File;
                    italic: File;
                };
            };

            variable?: {
                normal: File;
                italic: File;
            },
        };
    }
}