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

import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap_Shade.Schema,
    Tokens_Colour_ShadeMap_Shade.Export,
    Partial<Tokens_Colour_ShadeMap_Shade.Export>,
    Tokens_Colour_ShadeMap_Shade.JSON,
    Tokens_Colour_ShadeMap_Shade.ScssVars
> {

    get schema() {
        return Tokens_Colour_ShadeMap_Shade.Schema;
    }

    public readonly hex: Tokens_Colour_ShadeMap_Shade.Export[ 'hex' ];
    public readonly hsl: Tokens_Colour_ShadeMap_Shade.Export[ 'hsl' ];
    public readonly rgb: Tokens_Colour_ShadeMap_Shade.Export[ 'rgb' ];
    public readonly oklch: Tokens_Colour_ShadeMap_Shade.Export[ 'oklch' ];

    public constructor (
        public readonly name: string,
        input: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> | z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
    ) {
        super( {} );

        const parsed = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: `Tokens_Colour_ShadeMap_Shade.${ this.name }`,
                location: 'src/ts/02-tokens/Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.ts:56',
            },
        );

        this.hex = parsed.hex;
        this.hsl = parsed.hsl;
        this.rgb = parsed.rgb;
        this.oklch = parsed.oklch;
    }

    public valueOf(): Tokens_Colour_ShadeMap_Shade.Export {

        return {
            hex: this.hex,
            hsl: this.hsl,
            rgb: this.rgb,
            oklch: this.oklch,
        };
    }

    public toJSON(): Tokens_Colour_ShadeMap_Shade.JSON {
        return this.valueOf();
    }

    public toScssVars(): Tokens_Colour_ShadeMap_Shade.ScssVars {
        return `hsl( ${ this.hsl.h }, ${ this.hsl.s }%, ${ this.hsl.l }% )`;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour_ShadeMap_Shade {

    export const Schema_Hex = z.string().toUpperCase().regex( /^#?[0-9|A-H]{3,6}$/i );

    export const Schema_HSL = z.object( {
        h: z.number().nonnegative().lte( 360 ),
        s: z.number().nonnegative().lte( 100 ),
        l: z.number().nonnegative().lte( 100 ),
    } );

    export const Schema_RGB = z.object( {
        r: z.number().nonnegative().lte( 255 ),
        g: z.number().nonnegative().lte( 255 ),
        b: z.number().nonnegative().lte( 255 ),
    } );

    export const Schema_OKLCH = z.object( {
        l: z.number().nonnegative().lte( 100 ),
        c: z.number().safe().lte( 32 ),
        h: z.number().safe(),
    } );

    export const Schema = z.union( [
        Schema_Hex,
        Schema_HSL,
        Schema_RGB,
        Schema_OKLCH,

        z.object( {
            hex: Schema_Hex,
            hsl: Schema_HSL,
            rgb: Schema_RGB,
            oklch: Schema_OKLCH,
        } ),
    ] ).transform( ( input ): {
        hex: z.infer<typeof Schema_Hex>,
        hsl: z.infer<typeof Schema_HSL>,
        rgb: z.infer<typeof Schema_RGB>,
        oklch: z.infer<typeof Schema_OKLCH>,
    } => {

        // returns - is already converted
        if ( typeof input === 'object' && 'hex' in input ) {
            return input;
        }

        // returns - is hex code
        if ( typeof input === 'string' ) {

            return {
                hex: input,
                hsl: { h: 0, s: 0, l: 50 },
                rgb: { r: 80, g: 80, b: 80 },
                oklch: { l: 0.4313, c: 0, h: 0 },
            };
        }

        return {
            hex: '#505050',
            hsl: { h: 0, s: 0, l: 50 },
            rgb: { r: 80, g: 80, b: 80 },
            oklch: { l: 0.4313, c: 0, h: 0 },
        };
    } );

    export interface Export extends z.output<typeof Schema> {
    };

    export interface JSON extends Export {
    };

    export type ScssVars = string;
}