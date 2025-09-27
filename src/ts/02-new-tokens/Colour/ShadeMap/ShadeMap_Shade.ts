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

import { ColourUtilities } from '../../../01-utilities/ColourUtilities.js';
import { ColourContrastTest } from '../../../01-utilities/ColourContrastTest.js';
import { objectMap } from '../../../01-utilities/objectMap.js';

import type { TokenLevels, TokenLevels_Extended } from '../../@types.js';

import { AbstractTokens } from '../../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Colour_ShadeMap_Shade<
    T_ColourName extends string,
    T_ExtraLevels extends TokenLevels_Extended,
> extends AbstractTokens<Tokens_Colour_ShadeMap_Shade.Data> {

    // public get schemaJSON() {
    //     return Tokens_Colour_ShadeMap_Shade.Schema.JSON( this.allNames, this.extraLevels );
    // }

    public readonly data: Tokens_Colour_ShadeMap_Shade.Data;

    public contrast: Tokens_Colour_ShadeMap_Shade.Contrast<T_ColourName, T_ExtraLevels> = {
        min: {},
        max: {},
        results: {},
    };

    public constructor (
        protected readonly allNames: readonly T_ColourName[],
        protected readonly extraLevels: readonly T_ExtraLevels[],
        protected readonly shadeName: T_ColourName,
        protected readonly thisLevel: TokenLevels | T_ExtraLevels,
        input: Tokens_Colour_ShadeMap_Shade.InputParam,
    ) {
        super();
        this.data = ColourUtilities.SingleShade.parse( input );
    }

    /**
     * Adds the given shade to this shade's contrast results.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTest(
        colourGroupName: T_ColourName,
        level: TokenLevels | T_ExtraLevels,
        testClr: ColourUtilities.SingleShade,
    ) {
        if ( typeof this.contrast.results[ colourGroupName ] === 'undefined' ) {
            this.contrast.results[ colourGroupName ] = {};
        }

        const contrastTest = new ColourContrastTest(
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
        testNameLoop:
        for ( const testName of ( [ 'ui', 'text' ] as const ) ) {
            // continues
            if ( !contrastTest.aa[ testName ] && !contrastTest.aaa[ testName ] ) {
                continue testNameLoop;
            }

            if ( typeof this.contrast.min[ colourGroupName ][ testName ] === 'undefined' ) {
                this.contrast.min[ colourGroupName ][ testName ] = {
                    aa: undefined,
                    aaa: undefined,
                };
            }

            standardsLoop:
            for ( const standard of [ 'aa', 'aaa' ] as const ) {
                // if it didn't pass, ignore this
                if ( !contrastTest[ standard ][ testName ] ) {
                    continue standardsLoop;
                }

                if (
                    // if there's no minimum, then this is the new minimum
                    typeof this.contrast.min[ colourGroupName ][ testName ]?.[ standard ] === 'undefined'

                    // this result is less than the existing minimum
                    || contrastTest.ratio < this.contrast.min[ colourGroupName ][ testName ]?.[ standard ].ratio
                ) {

                    this.contrast.min[ colourGroupName ][ testName ][ standard ] = {
                        name: colourGroupName,
                        level,
                        ratio: contrastTest.ratio,
                    };
                }
            }
        }

        // SETTING MAXIMUM
        if (
            // if there's no maximum, then this is the new maximum
            typeof this.contrast.max[ colourGroupName ] === 'undefined'

            // this result is more than the existing maximum
            || contrastTest.ratio > this.contrast.max[ colourGroupName ].ratio
        ) {

            this.contrast.max[ colourGroupName ] = {
                name: colourGroupName,
                level,
                ratio: contrastTest.ratio,
            };
        }

        this.contrast.results[ colourGroupName ][ level ] = contrastTest;
    }

    public shadeValue(): ColourUtilities.SingleShade {

        return {
            hex: this.data.hex,
            hsl: this.data.hsl,
            rgb: this.data.rgb,
            lch: this.data.lch,
        };
    }

    public toJSON(): Tokens_Colour_ShadeMap_Shade.JsonReturn<T_ColourName, T_ExtraLevels> {

        const max = objectMap(
            this.contrast.max,
            ( { value }: {
                value: Tokens_Colour_ShadeMap_Shade.Contrast.SingleMinMax<T_ColourName, T_ExtraLevels>;
            } ) => value && {
                ...value,
                // ratio: undefined
            },
        );

        const min: Tokens_Colour_ShadeMap_Shade.Contrast.Minimum<
            T_ColourName,
            T_ExtraLevels,
            number
        > = objectMap(
            this.contrast.min,
            ( { value: testGroup } ) => ( {

                ui: testGroup?.ui && {
                    aa: testGroup.ui.aa && {
                        ...testGroup.ui.aa,
                        // ratio: undefined,
                    },
                    aaa: testGroup.ui.aaa && {
                        ...testGroup.ui.aaa,
                        // ratio: undefined,
                    },
                },

                text: testGroup?.text && {
                    aa: testGroup.text.aa && {
                        ...testGroup.text.aa,
                        // ratio: undefined,
                    },
                    aaa: testGroup.text.aaa && {
                        ...testGroup.text.aaa,
                        // ratio: undefined,
                    },
                },
            } ),
        );

        return {
            ...this.shadeValue(),
            contrast: {
                max,
                min,
                results: this.contrast.results,
            },
        };
    }

    public toScssVars() {
        return `lch( ${ this.data.lch.l } ${ this.data.lch.c } ${ this.data.lch.h } )`;
    }
}

/**
 * Utilities for the {@link Tokens_Colour_ShadeMap_Shade} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Colour_ShadeMap_Shade {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = ColourUtilities.SingleShade;

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = ColourUtilities.SingleShade_Input;

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
    > = ColourUtilities.Value_All & {
        contrast: Contrast<T_ColourName, T_ExtraLevels, number>;
    };



    /**
     * @since ___PKG_VERSION___
     */
    export type ContrastResults<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
        T_RatioValue extends number | undefined = number,
    > = {
            [ N in T_ColourName ]?: undefined | {
                [ K in TokenLevels | T_ExtraLevels ]?: ColourContrastTest.Parsed;
            };
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type Contrast<
        T_ColourName extends string,
        T_ExtraLevels extends TokenLevels_Extended,
        T_RatioValue extends number | undefined = number,
    > = {
        min: Contrast.Minimum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        max: Contrast.Maximum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        results: ContrastResults<T_ColourName, T_ExtraLevels>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Contrast {

        /**
         * @since ___PKG_VERSION___
         */
        export type SingleMinMax<
            T_ColourName extends string,
            T_ExtraLevels extends TokenLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = undefined | {
            name: T_ColourName;
            level: TokenLevels | T_ExtraLevels;
            ratio: T_RatioValue;
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type Maximum<
            T_ColourName extends string,
            T_ExtraLevels extends TokenLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = {
                [ N in T_ColourName ]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
            };

        /**
         * @since ___PKG_VERSION___
         */
        export type Minimum<
            T_ColourName extends string,
            T_ExtraLevels extends TokenLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = {
                [ N in T_ColourName ]?: undefined | {
                    [ K in keyof ColourContrastTest.TestResult_Single ]?: undefined | {
                        [ S in keyof ColourContrastTest.TestStandards ]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
                    };
                };
            };
    }
}