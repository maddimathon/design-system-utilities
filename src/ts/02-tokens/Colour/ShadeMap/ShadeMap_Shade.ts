/**
 * @since 0.1.0-alpha
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

import type { ColourLevels, ColourLevels_Extended } from '../../@types.js';

import { AbstractTokens } from '../../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Colour_ShadeMap_Shade<
    T_ColourName extends string,
    T_ExtraLevels extends ColourLevels_Extended,
> extends AbstractTokens<Tokens_Colour_ShadeMap_Shade.Data> {

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
        protected readonly thisLevel: ColourLevels | T_ExtraLevels,
        input: Tokens_Colour_ShadeMap_Shade.InputParam,
    ) {
        super();
        this.data = ColourUtilities.SingleShade.parse( input );
    }

    /**
     * Adds the given shade to this shade's contrast results.
     * 
     * @since 0.1.0-alpha
     */
    public async addContrastTest(
        colourGroupName: T_ColourName,
        level: ColourLevels | T_ExtraLevels,
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

        this.contrast.results[ colourGroupName ][ level ] = {
            ...contrastTest.toJSON(),
        };
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

        const max = this.contrast.max;

        const min: Tokens_Colour_ShadeMap_Shade.Contrast.Minimum<
            T_ColourName,
            T_ExtraLevels,
            number
        > = objectMap(
            this.contrast.min,
            ( [ key, testGroup ] ) => ( {

                ui: testGroup?.ui && {
                    aa: testGroup.ui.aa,
                    aaa: testGroup.ui.aaa,
                },

                text: testGroup?.text && {
                    aa: testGroup.text.aa,
                    aaa: testGroup.text.aaa,
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
        return ColourUtilities.toString.hsl( this.data.hsl );
    }
}

/**
 * Utilities for the {@link Tokens_Colour_ShadeMap_Shade} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Colour_ShadeMap_Shade {

    /**
     * @since 0.1.0-alpha
     */
    export type Data = ColourUtilities.SingleShade;

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = ColourUtilities.SingleShade_Input;

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
    > = ColourUtilities.Value_All & {
        contrast: Contrast<T_ColourName, T_ExtraLevels, number>;
    };



    /**
     * @since 0.1.0-alpha
     */
    export type ContrastResults<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
    > = {
            [ N in T_ColourName ]?: undefined | {
                [ K in ColourLevels | T_ExtraLevels ]?: ColourContrastTest.Parsed;
            };
        };

    /**
     * @since 0.1.0-alpha
     */
    export type Contrast<
        T_ColourName extends string,
        T_ExtraLevels extends ColourLevels_Extended,
        T_RatioValue extends number | undefined = number,
    > = {
        min: Contrast.Minimum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        max: Contrast.Maximum<T_ColourName, T_ExtraLevels, T_RatioValue>;
        results: ContrastResults<T_ColourName, T_ExtraLevels>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export namespace Contrast {

        /**
         * @since 0.1.0-alpha
         */
        export type SingleMinMax<
            T_ColourName extends string,
            T_ExtraLevels extends ColourLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = undefined | {
            name: 'base' | T_ColourName;
            level: ColourLevels | T_ExtraLevels;
            ratio: T_RatioValue;
        };

        /**
         * @since 0.1.0-alpha
         */
        export type Maximum<
            T_ColourName extends string,
            T_ExtraLevels extends ColourLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = {
                [ N in 'base' | T_ColourName ]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
            };

        /**
         * @since 0.1.0-alpha
         */
        export type Minimum<
            T_ColourName extends string,
            T_ExtraLevels extends ColourLevels_Extended,
            T_RatioValue extends number | undefined = number,
        > = {
                [ N in 'base' | T_ColourName ]?: undefined | {
                    [ K in keyof ColourContrastTest.TestResult_Single ]?: undefined | {
                        [ S in keyof ColourContrastTest.TestStandards ]?: SingleMinMax<T_ColourName, T_ExtraLevels, T_RatioValue>;
                    };
                };
            };
    }
}