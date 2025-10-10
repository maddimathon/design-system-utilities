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

import type { RecursivePartial } from '@maddimathon/utility-typescript/types/objects/partial';
import { mergeArgs } from '@maddimathon/utility-typescript/functions';

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
            // @ts-expect-error
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

                    // @ts-expect-error
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

        return {
            font: {
                // UPGRADE - make empty size objects equal to null
                size: this.data.size,
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
    > = {

        lineHeight: {
            [ L in DefaultLineHeightLevels ]: number;
        } & {
            [ L in Exclude<TokenLevels, DefaultLineHeightLevels> | TokenLevels_Extended ]?: number;
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
    export type InputParam = Partial<Omit<Data, 'lineHeight' | 'size'>> & {
        size?: RecursivePartial<Data[ 'size' ]>;
        lineHeight?: Partial<Data[ 'lineHeight' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data<{
        rem: number;
        pt: number;
        px: number;
    }>;

}