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

import * as Schemata from '../../00-schemata/index.js';

import { AbstractTokens } from '../abstracts/AbstractTokens.js';


/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_CSS_Border extends AbstractTokens<
    typeof Schemata.Tokens.shape.CSS.shape.border,
    Tokens_CSS_Border.Export,
    Schemata.PartialTokens.CSS.Border
> {

    get schema() {
        return Schemata.Tokens.shape.CSS.shape.border;
    }

    public readonly radius: Tokens_CSS_Border.Export[ 'radius' ];
    public readonly stroke: Tokens_CSS_Border.Export[ 'stroke' ];
    public readonly width: Tokens_CSS_Border.Export[ 'width' ];

    public constructor (
        input?: Schemata.PartialTokens.CSS.Border,
    ) {
        super( input ?? {} );

        this.radius = this.objectMap(
            Schemata.Tokens.shape.CSS.shape.border.shape.radius.parse( input?.radius ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );

        this.stroke = this.objectMap(
            Schemata.Tokens.shape.CSS.shape.border.shape.stroke.parse( input?.stroke ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );

        this.width = this.objectMap(
            Schemata.Tokens.shape.CSS.shape.border.shape.width.parse( input?.width ?? {} ),
            ( key, value ) => key && this.roundToPixel( value as number, 32 )
        );
    }

    public export(): Tokens_CSS_Border.Export {

        return {
            radius: this.radius,
            stroke: this.stroke,
            width: this.width,
        };
    }

    public toJSON() {
        return this.export();
    }

    public toScssVars() {
        return this.export();
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Border {

    export interface Export extends z.infer<typeof Schemata.Tokens.shape.CSS.shape.border> { };
}