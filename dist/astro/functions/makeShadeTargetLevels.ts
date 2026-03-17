/**
 * @since 0.1.0-beta.0.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */

import { objectMapAsync } from '@maddimathon/utility-typescript';

import type { TokenTypes } from '../../ts/02-tokens/@types.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';
import type { LevelTargets } from '../components/ShadeSwatchTable.astro';

import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

/**
 * Takes a shade map and uses it to define target contrast levels using the
 * map's contrast levels with the given sampleColourName.
 *
 * @since 0.1.0-beta.0.draft
 */
export async function makeShadeTargetLevels<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
>(
    sampleColourName: TokenTypes.Colour.GenericName<T_Types[ 'colour' ][ 'names' ]>,
    targetShadeMap: undefined | Tokens_Colour_ShadeMap.JsonReturn<T_Types[ 'colour' ]>,
): Promise<LevelTargets<T_Types[ 'colour' ]> | undefined> {
    // returns
    if ( !targetShadeMap ) {
        return undefined;
    }

    const matchedPairs = [
        [ '100', '900' ],
        [ '150', '850' ],
        [ '200', '800' ],
        [ '250', '750' ],
        [ '300', '700' ],
        [ '350', '650' ],
        [ '400', '600' ],
        [ '450', '550' ],
    ] as const;

    const current: LevelTargets<T_Types[ 'colour' ]> = await objectMapAsync(
        targetShadeMap,
        async ( [ level, value ] ) => {

            if ( !value.contrast ) {
                return undefined satisfies LevelTargets<
                    T_Types[ 'colour' ]
                >[ Exclude<keyof typeof targetShadeMap, 'name'> ];
            }

            return {
                min: {
                    aa: {
                        ui: value.contrast.min[ sampleColourName ]?.ui?.aa?.level,
                        text: value.contrast.min[ sampleColourName ]?.text?.aa
                            ?.level,
                    },
                    aaa: {
                        ui: value.contrast.min[ sampleColourName ]?.ui?.aaa
                            ?.level,
                        text: value.contrast.min[ sampleColourName ]?.text?.aaa
                            ?.level,
                    },
                },
                max: value.contrast.max[ sampleColourName ]?.level,
            } satisfies LevelTargets<
                T_Types[ 'colour' ]
            >[ Exclude<keyof typeof targetShadeMap, 'name'> ];
        },
    );

    const getMaxLevel = (
        _lvlA?:
            | undefined
            | ColourUtilities.Levels.Required
            | T_Types[ 'colour' ][ 'extraLevels' ],
        _lvlB?:
            | undefined
            | ColourUtilities.Levels.Required
            | T_Types[ 'colour' ][ 'extraLevels' ],
    ):
        | undefined
        | ColourUtilities.Levels.Required
        | T_Types[ 'colour' ][ 'extraLevels' ] => {
        // returns
        if ( !_lvlA || !_lvlB ) {
            return undefined;
        }

        _lvlB = ColourUtilities.Levels.toDark( _lvlB );

        const num_A = Number( _lvlA );
        const num_B = Number( _lvlB );

        return Math.max( num_A, num_B ).toString() as
            | ColourUtilities.Levels.Required
            | T_Types[ 'colour' ][ 'extraLevels' ];
    };

    for ( const [ _t_level_a, _t_level_b ] of matchedPairs ) {

        const level_a = _t_level_a as
            | ColourUtilities.Levels.Required
            | T_Types[ 'colour' ][ 'extraLevels' ];

        const level_b = _t_level_b as
            | ColourUtilities.Levels.Required
            | T_Types[ 'colour' ][ 'extraLevels' ];

        // continues
        if ( !current[ level_a ] || !current[ level_b ] ) {
            continue;
        }

        const corrected_a = {
            min: {
                aa: {
                    ui: getMaxLevel(
                        current[ level_a ].min.aa.ui,
                        current[ level_b ].min.aa.ui,
                    ),
                    text: getMaxLevel(
                        current[ level_a ].min.aa.text,
                        current[ level_b ].min.aa.text,
                    ),
                },
                aaa: {
                    ui: getMaxLevel(
                        current[ level_a ].min.aaa.ui,
                        current[ level_b ].min.aaa.ui,
                    ),
                    text: getMaxLevel(
                        current[ level_a ].min.aaa.text,
                        current[ level_b ].min.aaa.text,
                    ),
                },
            },
            max: getMaxLevel( current[ level_a ].max, current[ level_b ].max ),
        } satisfies LevelTargets[ Exclude<keyof typeof targetShadeMap, 'name'> ];

        current[ level_a ] = corrected_a;

        current[ level_b ] = {
            min: {
                aa: {
                    ui:
                        corrected_a.min.aa.ui &&
                        ColourUtilities.Levels.toDark( corrected_a.min.aa.ui ),
                    text:
                        corrected_a.min.aa.text &&
                        ColourUtilities.Levels.toDark( corrected_a.min.aa.text ),
                },
                aaa: {
                    ui:
                        corrected_a.min.aaa.ui &&
                        ColourUtilities.Levels.toDark( corrected_a.min.aaa.ui ),
                    text:
                        corrected_a.min.aaa.text &&
                        ColourUtilities.Levels.toDark( corrected_a.min.aaa.text ),
                },
            },
            max:
                corrected_a.max &&
                ColourUtilities.Levels.toDark( corrected_a.max ),
        } satisfies LevelTargets[ Exclude<keyof typeof targetShadeMap, 'name'> ];
    }

    return current;
}