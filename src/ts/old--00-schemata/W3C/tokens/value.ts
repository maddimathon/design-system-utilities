/**
 * Individual token types and shapes.
 * 
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

namespace Value {

    /**
     * Creates a W3C-compatible token schema with zod based on the given types.
     */
    function _generic<
        T_Value extends z.ZodType,
        T_Type extends string = never,
    >( value: T_Value, type?: T_Type ) {

        return z.object( {
            '$value': value,
            '$type': type ? z.literal( type ) : z.never(),

            '$deprecated': z.union( [ z.boolean(), z.string() ] ).optional(),
            '$description': z.string().optional(),
            '$extensions': z.record( z.string(), z.unknown() ).optional(),
        } );
    }

    export const alias = _generic( z.string() );

    export const cubicBezier = _generic( z.tuple( [ z.number(), z.number(), z.number(), z.number() ] ), 'cubicBezier' );

    export const dimension = _generic( z.object( {
        value: z.number(),
        unit: z.union( [ z.literal( 'px' ), z.literal( 'rem' ) ] ),
    } ), 'dimension' );

    export const duration = _generic( z.object( {
        value: z.number(),
        unit: z.union( [ z.literal( 'ms' ), z.literal( 's' ) ] ),
    } ), 'duration' );

    export const fontFamily = _generic( z.union( [ z.string(), z.array( z.string() ) ] ), 'fontFamily' );

    /**
     * This is intentionally more restricted than the actual W3C spec.
     */
    export const fontWeight = _generic( z.union( [
        z.literal( 100 ),
        z.literal( 200 ),
        z.literal( 300 ),
        z.literal( 400 ),
        z.literal( 500 ),
        z.literal( 600 ),
        z.literal( 700 ),
        z.literal( 800 ),
        z.literal( 900 ),
    ] ), 'fontWeight' );

    export const number = _generic( z.number(), 'number' );
}

namespace Value {

    export type CompositeTokenType =
        | "strokeStyle"
        ;

    export type TokenType =
        | "color"
        | "cubicBezier"
        | "dimension"
        | "duration"
        | "fontFamily"
        | "fontWeight"
        | "number"
        | CompositeTokenType;

    export type Alias = z.infer<typeof alias>;

    export type CubicBezier = z.infer<typeof cubicBezier>;

    export type Dimension = z.infer<typeof dimension>;

    export type Duration = z.infer<typeof duration>;

    export type FontFamily = z.infer<typeof fontFamily>;

    export type FontWeight = z.infer<typeof fontWeight>;

    export type Number = z.infer<typeof number>;


    export type Any =
        | Alias
        | CubicBezier
        | Dimension
        | Duration
        | FontFamily
        | FontWeight
        | Number;
}

export default Value;