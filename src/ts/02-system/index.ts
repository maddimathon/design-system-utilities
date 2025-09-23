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

/**
 * @since ___PKG_VERSION___
 */
export namespace Schemata {



    /**
     * Token definitions that fit the W3C proposed standard.
     * 
     * @see {@link https://www.designtokens.org/tr/drafts/format | Proposed spec}
     * 
     * @since ___PKG_VERSION___
     */
    export namespace W3C {

        /**
         * @since ___PKG_VERSION___
         */
        export type TokenOrGroupName = string;

        /** @hidden */
        export const TokenOrGroupName = z.string().regex(
            /^[a-z|0-9|\-|_]+$/g,
            'Token and group names must be at least one character long and using only characters a-z, 0-9, -, or _.'
        ) satisfies z.ZodType<TokenOrGroupName>;


        /**
         * @since ___PKG_VERSION___
         * @useDeclaredType
         */
        export type TokenType = z.infer<typeof TokenType>;

        /** @hidden */
        export const TokenType = z.union( [
            z.literal( 'color' ),
            z.literal( 'dimension' ),
        ] );


        /** 
         * @since ___PKG_VERSION___
         * @useDeclaredType
         */
        export type GenericToken = z.infer<ReturnType<typeof GenericToken>>;

        /** @hidden */
        export const GenericToken = <
            T_Type extends z.infer<typeof TokenType> = z.infer<typeof TokenType>,
            T_Value extends any = any,
        >(
            { type, value }: {
                type?: z.ZodType<T_Type>;
                value?: z.ZodType<T_Value>;
            } = {}
        ) => z.object( {
            '$type': type ?? z.undefined(),
            '$description': z.string().optional(),
            '$deprecated': z.union( [ z.boolean(), z.string() ] ).optional(),
            '$value': value ?? z.string(),

            '$extensions': z.record(
                z.string().regex(
                    /^[^\$\{\}]/g,
                    'Extension names cannot contain $ or {}.'
                ),
                z.any(),
            ).optional(),
        } );


        /**
         * @since ___PKG_VERSION___
         * @useDeclaredType
         */
        export type Token = z.infer<typeof Token>;

        /** @hidden */
        export const Token = GenericToken();
        // export const Token = z.union( [ GenericToken() ]);


        /**
         * @since ___PKG_VERSION___
         * @useDeclaredType
         */
        export type TokenGroup = {
            '$type'?: Token[ '$type' ];
            '$description'?: string;
        } & {
            [ key: string ]: Token | TokenGroup;
        };

        /** @hidden */
        export const TokenGroup = z.object( {
            '$description': z.string().optional(),
            '$type': TokenType.optional(),
        } ).and( z.record(
            TokenOrGroupName,
            z.union( [
                Token,
                z.lazy( (): z.ZodType<TokenGroup> => TokenGroup ),
            ] )
        ) );
    };
};