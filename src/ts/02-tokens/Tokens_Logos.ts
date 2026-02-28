/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectKeySort_Tokens } from '../01-utilities/objectKeySort_Tokens.js';
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
> extends AbstractTokens<{
    data: Tokens_Logos.Data<T_LogoNames>;
    json: Tokens_Logos.JsonReturn<T_LogoNames>;
    scss: Tokens_Logos.ScssVars<T_LogoNames>;
}> {


    public readonly data: Tokens_Logos.Data<T_LogoNames>;

    public constructor (
        input: Tokens_Logos.InputParam<T_LogoNames>,
    ) {
        super();

        const mapped = objectMap(
            input,
            <K extends T_LogoNames>(
                [ key, value ]: [ K, SvgMaker.Data<K> | SvgMaker<K> ]
            ): SvgMaker<K> => (
                value instanceof SvgMaker
                    ? value
                    : value && new SvgMaker( value )
            )
        ) as Tokens_Logos.Data<T_LogoNames>;

        this.data = objectKeySort_Tokens( mapped, false );
    }

    public toJSON(): Tokens_Logos.JsonReturn<T_LogoNames> {

        // returns - no logos, so we return an empty object
        if ( !Object.keys( this.data ).length ) {
            return {} as Tokens_Logos.JsonReturn<T_LogoNames>;
        }

        return objectMap(
            this.data,
            ( [ key, value ] ): SvgMaker.JsonReturn => value.toJSON()
        ) as Tokens_Logos.JsonReturn<T_LogoNames>;
    }

    public toScssVars(): Tokens_Logos.ScssVars<T_LogoNames> {

        return objectMap(
            this.data,
            ( [ key, value ] ) => value.toScssVars()
        ) as Tokens_Logos.ScssVars<T_LogoNames>;
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
            [ L in T_LogoNames ]: SvgMaker.JsonReturn<L>;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<
        T_LogoNames extends string,
    > = undefined | {
        [ L in T_LogoNames ]: SvgMaker.ScssVars<L>;
    };
}