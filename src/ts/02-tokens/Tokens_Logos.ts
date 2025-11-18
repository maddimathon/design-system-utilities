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

import { objectMap } from '../01-utilities/objectMap.js';
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Logos<
    T_LogoNames extends string,
> extends AbstractTokens<Tokens_Logos.Data<T_LogoNames>> {


    public readonly data: Tokens_Logos.Data<T_LogoNames>;

    public constructor (
        input: Tokens_Logos.InputParam<T_LogoNames>,
    ) {
        super();

        this.data = objectMap(
            input,
            ( [ key, value ] ) => (
                value instanceof SvgMaker
                    ? value
                    : value && new SvgMaker( value )
            )
        );
    }

    public toJSON(): Tokens_Logos.JsonReturn<T_LogoNames> {

        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toJSON()
        );
    }

    public toScssVars(): {
        [ K in keyof Tokens_Logos.Data<T_LogoNames> ]: {
            label: string;
            height: number;
            width: number;
            aspectRatio: string;
            // embedded: string;
        };
    } {
        return objectMap(
            this.data,
            ( [ key, value ] ) => ( {
                label: value.label,
                height: value.height,
                width: value.width,

                aspectRatio: value.aspectRatio[ 0 ] === value.aspectRatio[ 1 ]
                    ? value.aspectRatio[ 0 ].toString()
                    : value.aspectRatio.join( ' / ' ),

                // embedded: `url( 'data:image/svg+xml;utf8,${ value.svg }' )`
            } )
        );
    }
}

/**
 * Utilities for the {@link Tokens_Logos} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Logos {

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_LogoNames extends string,
    > = {
            [ L in T_LogoNames ]: SvgMaker<L>;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_LogoNames extends string,
    > = {
            [ L in T_LogoNames ]: SvgMaker.Data<L> | SvgMaker<L>;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_LogoNames extends string,
    > = {
            [ L in T_LogoNames ]: SvgMaker.JsonReturn<T_LogoNames>;
        };
}