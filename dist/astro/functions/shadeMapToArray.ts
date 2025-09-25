/**
 * @since 0.1.0-alpha.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */


import type { TokenLevels } from '../../ts/02-tokens/@utils.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Tokens/Colour/Colour_ShadeMap.js';

export function shadeMapToArray( map: Tokens_Colour_ShadeMap.JSON ) {
    const levels = Object.keys( map ) as TokenLevels[];

    return levels
        .map( ( level ) => {
            // returns
            if ( !map[ level ] ) {
                return false;
            }

            // const values = valuesToArray( map[ level ] );

            // let textColor: TokenLevels | undefined = undefined;

            // switch ( level ) {
            //     case '100':
            //         textColor = '700';
            //         break;

            //     case '200':
            //         textColor = '800';
            //         break;

            //     case '300':
            //         textColor = '900';
            //         break;

            //     case '400':
            //         textColor = '900';
            //         break;

            //     case '500':
            //         textColor = '100';
            //         break;

            //     case '600':
            //         textColor = '100';
            //         break;

            //     case '700':
            //         textColor = '100';
            //         break;

            //     case '800':
            //         textColor = '200';
            //         break;

            //     case '900':
            //         textColor = '300';
            //         break;
            // }

            return {
                level,
                values: map[ level ],
                // bg: `hsl( ${ map[ level ].hsl.h }, ${ map[ level ].hsl.s }%, ${ map[ level ].hsl.l }% )`,
                // bg: values.filter( ( val ) => val.space == 'hsl' )[ 0 ]?.value,

                // clr:
                //     textColor &&
                //     clr.base &&
                //     textColor in clr.base &&
                //     `hsl( ${ clr.base[ textColor ].hsl.h }, ${ clr.base[ textColor ].hsl.s }%, ${ clr.base[ textColor ].hsl.l }% )`,

                // shortDisplay: values.filter(
                //     ( val ) => val.space == 'lch' || val.space == 'hsl'
                // ),
            };
        } )
        .filter( ( v ) => v !== false );
};