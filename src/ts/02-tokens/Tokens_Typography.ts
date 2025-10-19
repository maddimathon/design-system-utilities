/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import type { Objects } from '@maddimathon/utility-typescript/types';
import { arrayUnique, mergeArgs } from '@maddimathon/utility-typescript/functions';

import type { RecursiveRecord } from '../01-utilities/@types.js';
import type {
    RequiredHeadingLevels,
    TokenLevels,
    TokenLevels_Extended,
} from './@types.js';
import type { Tokens_Spacing } from './Tokens_Spacing.js';

import { objectMap } from '../01-utilities/objectMap.js';
import { roundToPixel } from '../01-utilities/roundToPixel.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Typography extends AbstractTokens<Tokens_Typography.Data> {

    public static get default(): Tokens_Typography.Data {
        return {

            lineHeight: {
                '100': -2.75,
                '200': -2,
                '300': -1.25,
                '400': 0,
                '500': 1,
                '600': 2,
            },

            fonts: {},

            size: {

                heading: {
                    1: 7,
                    2: 5,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: -0.25,
                    8: -1,
                    9: -1.75,
                    10: -2.5,
                },

                normal: 0,

                smaller: {
                    1: -0.75,
                    2: -1.5,
                    3: -2.0,
                    // 4: -2.5,
                    // 5: -3.0,
                },

                bigger: {
                },
            },
        };
    }

    // public get data(): Tokens_Typography.Data {
    //     return {};
    // }
    public readonly data: Tokens_Typography.Data;

    public constructor (
        protected readonly spacing: Tokens_Spacing,
        input: Tokens_Typography.InputParam,
    ) {
        super();

        this.data = mergeArgs( Tokens_Typography.default, input, true );
    }

    public toJSON(): Tokens_Typography.JsonReturn {

        type SizeJson = Tokens_Typography.JsonReturn[ 'size' ][ 'title' ];

        const sizeConverter = ( num: number ) => {
            const rem = roundToPixel( Math.pow( this.spacing.data.multiplier, num ), 32 );

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
            ( { key, value } ): Tokens_Typography.JsonReturn[ 'size' ][ string ] => {
                // returns
                if ( typeof value === 'object' ) {
                    return sizeMapper( value );
                }

                return sizeConverter( value );
            }
        ) as Tokens_Typography.JsonReturn[ 'size' ];

        return {
            ...this.data,
            size,
        };
    }

    public toScssVars() {

        const familyMapper = (
            family: Tokens_Typography.Font.Family,
            weight: TokenLevels,
            { key: style, value: font }: {
                key: "italic" | "normal";
                value: Tokens_Typography.Font.File;
            },
        ): NonNullable<Tokens_Typography.Font.FamilyScss[ TokenLevels ]> => {

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

            return {

                family: family.name,
                fallbacks,

                style,
                weight,

                display: font.display ?? family.display,
                'line-gap-override': font.lineGapOverride ?? family.lineGapOverride,
                'size-adjust': font.sizeAdjust ?? family.sizeAdjust,
                'unicode-range': font.unicodeRange ?? family.unicodeRange,

                src: Object.values(
                    objectMap(
                        font.path,
                        ( { key: type, value: paths } ) => typeof paths === 'undefined'
                            ? []
                            : (
                                Array.isArray( paths ) ? paths : [ paths ]
                            ).map(
                                ( path ) => ( { type, path } )
                            )
                    )
                ).flat(),
            };
        };

        return {
            font: {
                // UPGRADE - make empty size objects equal to null
                size: this.data.size,

                family: objectMap(
                    this.data.fonts,
                    ( { value: family }: { value: Tokens_Typography.Font.Family; } ) => family && objectMap(
                        family.weights,
                        ( { key: weight, value: fontSet } ) => fontSet && objectMap(
                            fontSet,
                            ( obj ) => familyMapper( family, weight, obj )
                        )
                    )
                ),
            },

            line_height: this.data.lineHeight,
        };
    }
}

/**
 * Utilities for the {@link Tokens_Typography} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Typography {

    type DefaultLineHeightLevels = "100" | "200" | "300" | "400" | "500" | "600";

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_SizeValue = number,
        T_FontFamilySlug extends string = string,
    > = {

        lineHeight: {
            [ L in DefaultLineHeightLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultLineHeightLevels> | TokenLevels_Extended ]?: number;
        };

        fonts: {
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
                // 4: T_SizeValue;
                // 5: T_SizeValue;
                [ key: number ]: T_SizeValue;
            };

            normal: T_SizeValue;

            bigger: {
                [ key: number ]: T_SizeValue;
            };

            [ key: string ]: T_SizeValue | RecursiveRecord<number | string, T_SizeValue>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_FontFamilySlug extends string = string,
    > = Partial<Omit<Data<number, T_FontFamilySlug>, 'lineHeight' | 'size'>> & {
        size?: Objects.RecursivePartial<Data<number, T_FontFamilySlug>[ 'size' ]>;
        lineHeight?: Partial<Data<number, T_FontFamilySlug>[ 'lineHeight' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_FontFamilySlug extends string = string,
    > = Data<{
        rem: number;
        pt: number;
        px: number;
    }, T_FontFamilySlug>;

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Font {

        /**
         * @since ___PKG_VERSION___
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
         * @since ___PKG_VERSION___
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
         * @since ___PKG_VERSION___
         */
        export interface FontFileOptions {
            display?: undefined | "auto" | "block" | "fallback" | "optional" | "swap";
            lineGapOverride?: undefined | string;
            sizeAdjust?: undefined | string;
            unicodeRange?: undefined | string;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export interface File extends FontFileOptions {
            path: {
                [ F in "local" | "ttf" | "woff" | "woff2" ]?: string | string[];
            };
            style: "normal" | "italic";
            weight: TokenLevels;
        }

        /**
         * @since ___PKG_VERSION___
         */
        export type FamilyScss = {
            [ L in TokenLevels | `${ TokenLevels }i` ]?: {
                family: string;
                fallbacks: string[];
                src: {
                    type: "local" | "ttf" | "woff" | "woff2";
                    path: string;
                }[];
                style: "normal" | "italic";
                weight: TokenLevels | `${ TokenLevels } ${ TokenLevels }`;


                display?: "auto" | "block" | "fallback" | "optional" | "swap";
                'line-gap-override'?: string;
                'size-adjust'?: string;
                'unicode-range'?: string;
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        export interface Family<T_Slug extends string = string> extends FontFileOptions {

            slug: T_Slug;

            name: string;
            fallbacks?: string[];

            /**
             * Whether to append the system fonts list to the fallbacks when
             * outputting to scss.
             */
            appendSystemFontsToFallbacks?: boolean | "monospace";

            weights: {
                [ K in TokenLevels ]?: {
                    normal: File;
                    italic: File;
                };
            };
        };
    }
}