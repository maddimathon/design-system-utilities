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

import { objectMap } from '../01-utilities/objectMap.js';
import { SvgMaker } from '../01-utilities/SvgMaker.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
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
            ( { value } ) => (
                value instanceof SvgMaker
                    ? value
                    : value && new SvgMaker( value )
            )
        );
    }

    public toJSON(): Tokens_Logos.JsonReturn<T_LogoNames> {

        return objectMap(
            this.data,
            ( { value } ) => value.toJSON()
        );
    }

    public toScssVars(): {
        [ K in keyof Tokens_Logos.Data<T_LogoNames> ]: {
            label: string;
            height: number;
            width: number;
            embedded: string;
        };
    } {
        return objectMap(
            this.data,
            ( { value } ) => ( {
                label: value.label,
                height: value.height,
                width: value.width,

                aspectRatio: value.aspectRatio[ 0 ] === value.aspectRatio[ 1 ]
                    ? value.aspectRatio[ 0 ]
                    : value.aspectRatio.join( ' / ' ),

                embedded: `url( 'data:image/svg+xml;utf8,${ value.svg }' )`
            } )
        );
    }
}

/**
 * Utilities for the {@link Tokens_Logos} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Logos {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<
        T_LogoNames extends string,
    > = {
            [ I in T_LogoNames ]: SvgMaker;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<
        T_LogoNames extends string,
    > = {
            [ I in T_LogoNames ]: SvgMaker.Data | SvgMaker;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<
        T_LogoNames extends string,
    > = {
            [ I in T_LogoNames ]: SvgMaker.JsonReturn;
        };
}