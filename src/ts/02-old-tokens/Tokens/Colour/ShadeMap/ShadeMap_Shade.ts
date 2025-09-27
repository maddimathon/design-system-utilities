/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

import { ColourUtilities } from '../../../../01-utilities/ColourUtilities.js';
import { ColourContrastTest } from '../../../../01-utilities/ColourContrastTest.js';
import { objectMap } from '../../../../01-utilities/objectMap.js';

import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';

import {
    // ColourNameSchema,
    TokenLevels,
    TokenLevels_Extended,
} from '../../../@utils.js';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap_Shade<
    T_ColourName extends string,
> extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap_Shade.Schema,
    Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>,
    Tokens_Colour_ShadeMap_Shade.Part,
    Tokens_Colour_ShadeMap_Shade.JSON<T_ColourName>,
    Tokens_Colour_ShadeMap_Shade.ScssVars
> {

    get schema() {
        return Tokens_Colour_ShadeMap_Shade.Schema;
    }

    public readonly hex: Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>[ 'hex' ];
    public readonly hsl: Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>[ 'hsl' ];
    public readonly rgb: Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>[ 'rgb' ];
    public readonly lch: Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>[ 'lch' ];

    public contrast: Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>[ 'contrast' ] = {
        min: {},
        max: {},
        results: {},
    };

    public constructor (
        public readonly name: string,
        input: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> | z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
    ) {
        super( input );

        const parsed = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: `Tokens_Colour_ShadeMap_Shade.${ this.name }`,
                location: 'src/ts/02-tokens/Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.ts:50',
            },
        );

        this.hex = parsed.hex;
        this.hsl = parsed.hsl;
        this.rgb = parsed.rgb;
        this.lch = parsed.lch;
    }

    /**
     * Adds the given shade to this shade's contrast results.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTest(
        colourGroupName: T_ColourName,
        level: TokenLevels | TokenLevels_Extended,
        testClr: ColourUtilities.SingleShade,
    ) {
        if ( typeof this.contrast.results[ colourGroupName ] === 'undefined' ) {
            this.contrast.results[ colourGroupName ] = {};
        }

        const test = new ColourContrastTest(
            this.shadeValue(),
            testClr,
        );

        if ( typeof this.contrast.min[ colourGroupName ] === 'undefined' ) {
            this.contrast.min[ colourGroupName ] = {
                ui: undefined,
                text: undefined,
            };
        }

        // SETTING MINIMUMS
        for ( const testName of ( [ 'ui', 'text' ] as const ) ) {
            // continues
            if ( !test.aa[ testName ] ) {
                continue;
            }

            if (
                // if there's no minimum, then this is the new minimum
                typeof this.contrast.min[ colourGroupName ][ testName ] === 'undefined'

                // this result is less than the existing minimum
                || test.ratio < this.contrast.min[ colourGroupName ][ testName ].ratio
            ) {

                this.contrast.min[ colourGroupName ][ testName ] = {
                    name: colourGroupName,
                    level,
                    ratio: test.ratio,
                };
            }
        }

        // SETTING MAXIMUM
        if (
            // if there's no maximum, then this is the new maximum
            typeof this.contrast.max[ colourGroupName ] === 'undefined'

            // this result is more than the existing maximum
            || test.ratio > this.contrast.max[ colourGroupName ].ratio
        ) {

            this.contrast.max[ colourGroupName ] = {
                name: colourGroupName,
                level,
                ratio: test.ratio,
            };
        }

        this.contrast.results[ colourGroupName ][ level ] = test;
    }

    public shadeValue(): ColourUtilities.SingleShade {

        return {
            hex: this.hex,
            hsl: this.hsl,
            rgb: this.rgb,
            lch: this.lch,
        };
    }

    public valueOf(): Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName> {

        return {
            ...this.shadeValue(),
            contrast: this.contrast,
        };
    }

    public toJSON(): Tokens_Colour_ShadeMap_Shade.JSON<T_ColourName> {

        const max = objectMap(
            this.contrast.max,
            (
                { value }: {
                    value?: Tokens_Colour_ShadeMap_Shade.Parsed_Contrast_Max<T_ColourName, number>;
                }
            ) => value?.level,
        );

        const min = objectMap(
            this.contrast.min,
            (
                { value }: {
                    value?: Tokens_Colour_ShadeMap_Shade.Parsed_Contrast_Min<T_ColourName, number>;
                }
            ) => value && objectMap(
                value,
                ( { value: subValue } ) => subValue?.level
            ),
        );

        return {
            ...this.shadeValue(),

            contrast: {
                min,
                max,
                results: this.contrast.results,
            },
        };
    }

    public toScssVars(): Tokens_Colour_ShadeMap_Shade.ScssVars {
        return `lch( ${ this.lch.l } ${ this.lch.c } ${ this.lch.h } )`;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour_ShadeMap_Shade {

    export type ContrastResults<T_ColourName extends string> = {
        [ N in T_ColourName ]?: {
            [ K in TokenLevels | TokenLevels_Extended ]?: ColourContrastTest.Parsed;
        };
    };

    export type ContrastMinMax<
        T_ColourName extends string,
    > = {
            [ N in T_ColourName ]?: {
                [ K in keyof ColourContrastTest.TestResult_Single ]: {
                    name: T_ColourName;
                    level: TokenLevels | TokenLevels_Extended;
                };
            };
        };



    /* SCHEMA
     * ====================================================================== */

    export const Schema = ColourUtilities.SingleShade;

    // /**
    //  * Creates a JSON schema for the contrast property in this class.
    //  */
    // const JSON_ContrastGroup = <T_ColourName extends string>(
    //     clrNames: T_ColourName[]
    // ) => {

    //     const minMaxResult = ( name: T_ColourName ) => z.object( {
    //         name: z.literal( name ),
    //         level: z.union( [ TokenLevels, TokenLevels_Extended ] ),
    //         ratio: z.number(),
    //     } );

    //     const min = z.object(
    //         objectGenerator(
    //             clrNames,
    //             ( name ) => z.object( {
    //                 ui: minMaxResult( name ),
    //                 text: minMaxResult( name ),
    //             } )
    //         )
    //     );

    //     const max = z.object(
    //         objectGenerator(
    //             clrNames,
    //             ( name ) => minMaxResult( name )
    //         )
    //     );

    //     const results = z.object(
    //         objectGenerator(
    //             clrNames,
    //             () => z.object(
    //                 objectGenerator(
    //                     [
    //                         '100',
    //                         '200',
    //                         '300',
    //                         '400',
    //                         '500',
    //                         '600',
    //                         '700',
    //                         '800',
    //                         '900',
    //                     ],
    //                     () => ColourContrastTest.JSON
    //                 )
    //             )
    //         )
    //     );

    //     return z.object( {
    //         min,
    //         max,
    //         results,
    //     } );
    // };

    // /**
    //  * Creates a JSON schema for this class.
    //  */
    // export const JSON = <T_ColourName extends string>(
    //     clrNames: T_ColourName[]
    // ) => {

    //     return z.object( {
    //         ...ColourUtilities.Value_All.shape,
    //         contrast: JSON_ContrastGroup( clrNames ),
    //     } );
    // };



    /* TYPES
     * ====================================================================== */

    /**
     * @private
     * @since ___PKG_VERSION___
     */
    export type Parsed_Contrast_Min<
        T_ColourName extends string,
        T_RatioValue extends number | undefined,
    > = {
            [ K in keyof ColourContrastTest.TestResult_Single ]: undefined | {
                name: T_ColourName;
                level: TokenLevels | TokenLevels_Extended;
                ratio: T_RatioValue;
            };
        };

    /**
     * @private
     * @since ___PKG_VERSION___
     */
    export type Parsed_Contrast_Max<
        T_ColourName extends string,
        T_RatioValue extends number | undefined,
    > = {
        name: T_ColourName;
        level: TokenLevels | TokenLevels_Extended;
        ratio: T_RatioValue;
    };

    /**
     * @private
     * @since ___PKG_VERSION___
     */
    export type Parsed_Contrast<
        T_ColourName extends string,
        T_RatioValue extends number | undefined = number,
    > = {
        min: {
            [ N in T_ColourName ]?: Parsed_Contrast_Min<T_ColourName, T_RatioValue>;
        },
        max: {
            [ N in T_ColourName ]?: Parsed_Contrast_Max<T_ColourName, T_RatioValue>
        },
        results: ContrastResults<T_ColourName>;
    };

    /**
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    export type Parsed<
        T_ColourName extends string,
    > = z.output<typeof Schema> & {
        contrast: Parsed_Contrast<T_ColourName>;
    };

    /**
     * The partialized version of the
     * {@link Tokens_Colour_ShadeMap_Shade.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    export type Part = z.input<typeof Schema>;

    /**
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    export type JSON<T_ColourName extends string> = z.output<typeof Schema> & {
        contrast: {
            min: {
                [ N in T_ColourName ]?: {
                    [ K in keyof ColourContrastTest.TestResult_Single ]?: undefined | TokenLevels | TokenLevels_Extended;
                };
            },
            max: {
                [ N in T_ColourName ]?: undefined | TokenLevels | TokenLevels_Extended;
            },
            results: ContrastResults<T_ColourName>;
        };
    };

    export type ScssVars = string;
}