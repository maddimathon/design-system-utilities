/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Tokens_Colour } from '../../ts/02-tokens/Tokens/Colour.js';

import { shadeMapToArray } from './shadeMapToArray.js';

/**
 * @since ___PKG_VERSION___
 */
export function colourToArray<T_ColourName extends string>(
    p: { colour: Tokens_Colour.JSON<T_ColourName | 'base'>; }
) {
    const clr = p.colour;

    // const valuesToArray = ( values: Tokens_Colour_ShadeMap_Shade.JSON ) => {

    //     const spaces = Object.keys(
    //         values
    //     ) as ( keyof Tokens_Colour_ShadeMap_Shade.JSON )[];

    //     return spaces
    //         .map( ( space ) => {
    //             switch ( space ) {
    //                 case 'hex':
    //                     return {
    //                         space: 'hex',
    //                         value: values.hex,
    //                     } as const;

    //                 case 'hsl':
    //                     return {
    //                         space: 'hsl',
    //                         value: `hsl( ${ values.hsl.h }, ${ values.hsl.s }%, ${ values.hsl.l }% )`,
    //                     } as const;

    //                 case 'rgb':
    //                     return {
    //                         space: 'rgb',
    //                         value: `rgb( ${ values.rgb.r }, ${ values.rgb.g }, ${ values.rgb.b } )`,
    //                     } as const;

    //                 case 'lch':
    //                     return {
    //                         space: 'lch',
    //                         value: `lch( ${ values.lch.l } ${ values.lch.c } ${ values.lch.h } )`,
    //                     } as const;
    //             }

    //             // @ts-expect-error
    //             return false;
    //         } )
    //         .filter( ( v ) => v !== false );
    // };


    const names = Object.keys( clr ) as T_ColourName[];

    return names
        .map( ( name ) =>
            clr[ name ]
                ? {
                    name,
                    map: shadeMapToArray( clr[ name ] ),
                }
                : false
        )
        .filter( ( v ) => v !== false );
}