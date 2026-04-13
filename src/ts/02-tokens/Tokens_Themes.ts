/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ArrayItem } from '@maddimathon/utility-typescript/types';

import { objectMap } from '@maddimathon/utility-typescript';

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import { objectGenerator } from '../01-utilities/objectGenerator.js';

import type {
    TokenTypes,
} from './@types.d.ts';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { Tokens_Themes_Set } from './Themes/Themes_Set.js';
import { objectKeySort_Tokens } from '../01-utilities/objectKeySort_Tokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_Themes<
    T_ColourTypes extends TokenTypes.Colour.TypeParams,
    T_ThemeTypes extends TokenTypes.Theme.TypeParams,
> extends AbstractTokens<{
    data: Tokens_Themes.Data<T_ColourTypes, T_ThemeTypes>;
    json: Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    scss: Tokens_Themes.ScssVars<T_ColourTypes, T_ThemeTypes>;
}> {

    /**
     * Used instead of the constructor so that it can be async.
     * 
     * @since ___PKG_VERSION___ — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    public static async build<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    >(
        brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[],
        contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[],

        colours: {
            names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
            allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
        },

        input: Tokens_Themes.InputParam<T_ColourTypes, T_ThemeTypes>,
    ): Promise<Tokens_Themes<T_ColourTypes, T_ThemeTypes>> {

        return Tokens_Themes.buildSets(
            brightnessModes,
            contrastModes,
            colours,
            input,
        ).then(
            sets => new Tokens_Themes(
                brightnessModes,
                contrastModes,
                colours,
                sets,
            )
        );
    }

    /**
     * Used to initialize multiple themes at once.
     * 
     * @since ___PKG_VERSION___ — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected static async buildSets<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    >(
        brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[],
        contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[],

        colours: {
            names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
            allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
        },

        input: Tokens_Themes.InputParam<T_ColourTypes, T_ThemeTypes>,
    ): Promise<Tokens_Themes<T_ColourTypes, T_ThemeTypes>[ 'sets' ]> {

        type DefaultThemeInput = Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes> & { name: 'default'; };

        type CompleteArray = [
            DefaultThemeInput,
            ...Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>[]
        ];

        const arr: CompleteArray =
            Array.isArray( input )
                ? (
                    input.length
                        ? input as CompleteArray
                        : [
                            { name: 'default' } as DefaultThemeInput,
                        ] satisfies CompleteArray
                )
                : [
                    {
                        ...input,
                        name: 'default',
                    },
                ];

        return Promise.all(
            arr.map(
                ( set ) => Tokens_Themes_Set.build<T_ColourTypes, T_ThemeTypes>(
                    set.name,
                    brightnessModes as T_ThemeTypes[ 'brightness' ],
                    contrastModes as T_ThemeTypes[ 'contrast' ],
                    colours,
                    set,
                )
            )
        ).then( ( objs ): {
            default: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
        } & {
            [ N in T_ThemeTypes[ 'name' ] ]: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
        } => {
            const allThemeNames = objs.map( o => o.data.name ) as [ 'default', ...T_ThemeTypes[ 'name' ][] ];

            return objectGenerator(
                allThemeNames,
                ( name ) => objs[ allThemeNames.indexOf( name ) ] as Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>
            );
        } );
    }


    public get data() {

        return objectMap(
            this.sets,
            ( [ key, value ] ) => value.data
        ) as Tokens_Themes.Data<T_ColourTypes, T_ThemeTypes>;
    }

    /**
     * @since ___PKG_VERSION___
     */
    public readonly meta: Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>;

    /**
     * @since ___PKG_VERSION___ — Changed first & second param to colours object (as third param) with both names and all levels set (to match change to {@link Tokens_Themes_Set.SingleMode.build}).
     */
    protected constructor (
        protected readonly brightnessModes: readonly TokenTypes.Theme.GetBrightnessKeys<T_ThemeTypes>[],
        protected readonly contrastModes: readonly TokenTypes.Theme.GetContrastKeys<T_ThemeTypes>[],
        protected readonly colours: {
            names: TokenTypes.Colour.GenericNameArray<T_ColourTypes[ 'names' ]>;
            allLevels: Set<ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]>;
        },
        protected readonly sets: {
            default: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
        } & {
            [ N in T_ThemeTypes[ 'name' ] ]: Tokens_Themes_Set<T_ColourTypes, T_ThemeTypes>;
        },
    ) {
        super();

        const allLevelsInUse = new Set<
            "black" | "white" | ColourUtilities.Levels.Required | T_ColourTypes[ 'extraLevels' ]
        >();

        const allThemeKeys: {
            [ K in keyof Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ] ]: Set<
                ArrayItem<Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ][ K ]>
            >[];
        } = {
            background: [],
            button: [],
            text: [],
            textAndBackground: [],
        };

        for ( const themeSet of Object.values( this.sets ) ) {
            themeSet.meta.levelsInUse.forEach( key => allLevelsInUse.add( key ) );

            allThemeKeys.background.push( new Set( themeSet.meta.keys.background ) );
            allThemeKeys.button.push( new Set( themeSet.meta.keys.button ) );
            allThemeKeys.text.push( new Set( themeSet.meta.keys.text ) );
        }

        const keySets = objectMap(
            allThemeKeys,
            <K extends keyof Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ]>(
                [ key, sets ]: [ K, Set<
                    ArrayItem<Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ][ K ]>
                >[] ]
            ) => sets?.length
                    ? sets.reduce(
                        ( previous, current ) => previous.intersection( current ),
                    )
                    : new Set<
                        ArrayItem<Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ][ K ]>
                    >()
        );

        keySets.textAndBackground = keySets.text.intersection( keySets.background );

        const keys = objectMap(
            keySets,
            <K extends keyof Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ]>(
                [ key, set ]: [ K, Set<
                    ArrayItem<Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ][ K ]>
                > ]
            ) => Array.from( set ).sort( objectKeySort_Tokens.sorter )
        ) as Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>[ 'keys' ];

        this.meta = {
            keys,
            levelsInUse: Array.from( allLevelsInUse ).sort(),
        };
    }

    public toJSON(): Tokens_Themes.JsonReturn<T_ColourTypes, T_ThemeTypes> {
        return {
            _meta: this.meta,

            ...objectMap(
                this.sets,
                ( [ key, value ] ) => value.toJSON()
            ),
        };
    }

    public toScssVars(): Tokens_Themes.ScssVars<T_ColourTypes, T_ThemeTypes> {
        return {
            _meta: this.meta,

            ...objectMap(
                this.sets,
                ( [ key, value ] ) => value.toScssVars()
            ),
        };
    }
}

/**
 * Utilities for the {@link Tokens_Themes} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_Themes {

    export type Default_ThemeName = 'default';

    /**
     * @since 0.1.0-alpha
     */
    export type Data<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        default: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
    } & {
            [ N in T_ThemeTypes[ 'name' ] ]: Tokens_Themes_Set.Data<T_ColourTypes, T_ThemeTypes>;
        };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > =
        | never[]
        | Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>
        | [
            Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes, 'default'>,
            ...Tokens_Themes_Set.InputParam<T_ColourTypes, T_ThemeTypes>[]
        ];

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        /**
         * @since ___PKG_VERSION___
         */
        _meta: Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>;

        default: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
    } & {
            [ N in T_ThemeTypes[ 'name' ] ]: Tokens_Themes_Set.JsonReturn<T_ColourTypes, T_ThemeTypes>;
        };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<
        T_ColourTypes extends TokenTypes.Colour.TypeParams,
        T_ThemeTypes extends TokenTypes.Theme.TypeParams,
    > = {
        /**
         * @since ___PKG_VERSION___
         */
        _meta: Tokens_Themes_Set.Metadata<T_ColourTypes, T_ThemeTypes>;

        default: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
    } & {
            [ K in T_ThemeTypes[ 'name' ] ]: Tokens_Themes_Set.ScssVars<T_ColourTypes, T_ThemeTypes>;
        };
}