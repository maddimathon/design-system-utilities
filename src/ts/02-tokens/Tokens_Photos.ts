/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { GlobOptions } from 'glob';

import type { PartialPick } from '@maddimathon/utility-typescript/types';

import { globSync } from 'glob';

// import NodeFS from 'node:fs';
// import NodePath from 'node:path';

import {
    objectMapAsync,
    VariableInspector,
} from '@maddimathon/utility-typescript';

import type { TokenTypes } from './@types.js';

import { AbstractTokens } from './abstract/AbstractTokens.js';
import { LocalErrors } from '../01-utilities/Errors.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_Photos<T_Params extends TokenTypes.Photos.TypeParams> extends AbstractTokens<{
    data: Tokens_Photos.Data<T_Params>;
    json: Tokens_Photos.JsonReturn<T_Params>;
    scss: Tokens_Photos.ScssVars<T_Params>;
}> {

    public static async build<T_Params extends TokenTypes.Photos.TypeParams>(
        input: Tokens_Photos.InputParam<T_Params>,
    ): Promise<Tokens_Photos<T_Params>> {

        return Promise.all( [

            objectMapAsync(
                input.photos,
                ( [ slug, photo ] ) => Tokens_Photos.Photo.build( slug, photo )
            ) as Promise<{
                [ S in keyof Tokens_Photos.InputParam<T_Params>[ 'photos' ] ]: Tokens_Photos.Photo<S>;
            }>,

            objectMapAsync(
                input.thumbnails,
                ( [ slug, thumbnail ] ) => Tokens_Photos.Thumbnail.build( slug, thumbnail )
            ) as Promise<{
                [ S in keyof Tokens_Photos.InputParam<T_Params>[ 'thumbnails' ] ]: Tokens_Photos.Thumbnail<S>;
            }>,
        ] ).then(
            ( [ photos, thumbnails ] ) => new Tokens_Photos( { photos, thumbnails } )
        );
    }

    public constructor (
        public readonly data: Tokens_Photos.Data<T_Params>,
    ) {
        super();
    }

    public toJSON(): Tokens_Photos.JsonReturn<T_Params> {
        return this.data satisfies Tokens_Photos.JsonReturn<T_Params>;
    }

    public toScssVars(): Tokens_Photos.ScssVars<T_Params> {
        return this.data satisfies Tokens_Photos.ScssVars<T_Params>;
    }
}

/**
 * Utilities for the {@link Tokens_Photos} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_Photos {

    /**
     * @since ___PKG_VERSION___
     */
    export type Data<T_Params extends TokenTypes.Photos.TypeParams> = {
        // TODO - add favicon property that intakes an SVG and outputs the various sizes/formats desired
        // TODO - add site icon property that intakes an SVG and outputs the various sizes/formats desired

        photos: {
            [ S in T_Params[ 'photoSlugs' ] ]: Photo<S>;
        };

        thumbnails: {
            [ S in T_Params[ 'thumbnailSlugs' ] ]: Thumbnail<S>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam<T_Params extends TokenTypes.Photos.TypeParams> = {

        photos: {
            [ S in T_Params[ 'photoSlugs' ] ]: Photo.Input<S>;
        };

        thumbnails: {
            [ S in T_Params[ 'thumbnailSlugs' ] ]: Thumbnail.Input<S>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn<T_Params extends TokenTypes.Photos.TypeParams> = {

        photos: {
            [ S in T_Params[ 'photoSlugs' ] ]: Photo.JSON<S>;
        };

        thumbnails: {
            [ S in T_Params[ 'thumbnailSlugs' ] ]: Thumbnail.JSON<S>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars<T_Params extends TokenTypes.Photos.TypeParams> = {

        photos: {
            [ S in T_Params[ 'photoSlugs' ] ]: Photo.ScssVars<S>;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    const globOpts = {
        absolute: false,
        dot: false,
        follow: false,
        ignore: [
            '**/._*',
            '**/._*/**/*',
            '**/.DS_STORE',
            '**/.smbdelete*',
            '**/.smbdelete*/**/*',
        ],
        nodir: true,
        realpath: true,
    } satisfies GlobOptions;

    /**
     * @since ___PKG_VERSION___
     */
    export class Photo<T_Slug extends string> implements Photo.Data<T_Slug> {

        public static async buildData<T_Slug extends string>(
            slug: T_Slug,
            input: Photo.Input<T_Slug>,
        ): Promise<Photo.Data<T_Slug>> {

            let filepath: string | string[] | undefined = input.filepath;

            // uses a variety of globs to try and guess the path
            if ( !filepath ) {

                const baseGlobs = [
                    `**/${ slug }.jpeg`,
                    `**/${ slug }.jpg`,
                    `**/${ slug }.png`,
                    `**/${ slug }.svg`,
                ];

                let _results = globSync(
                    baseGlobs.map( str => `src/assets/photos/${ str }` ),
                    globOpts,
                );

                if ( !_results.length ) {
                    _results = globSync(
                        baseGlobs.map( str => `src/assets/${ str }` ),
                        globOpts,
                    );

                    if ( !_results.length ) {
                        _results = globSync(
                            baseGlobs.map( str => `src/${ str }` ),
                            globOpts,
                        );
                    }
                }

                filepath = _results?.map(
                    path => path.replace( /^src\//gi, '' )
                );

                // throws - no successful path found
                if ( !filepath ) {
                    throw new LocalErrors.TokenBuildError(
                        `No filepath was given for ${ slug } photo and none could be successfully guessed.`,
                        {
                            class: 'Tokens_Photos.Photo',
                            method: 'build',
                        },
                        {
                            cause: VariableInspector.stringify( {
                                vars: {
                                    slug,
                                    'baseGlobs.map( str => `src/assets/thumbnails/${ str }` )': baseGlobs.map( str => `src/assets/thumbnails/${ str }` ),
                                    'baseGlobs.map( str => `src/assets/${ str }` )': baseGlobs.map( str => `src/assets/${ str }` ),
                                    'baseGlobs.map( str => `src/${ str }` )': baseGlobs.map( str => `src/${ str }` ),
                                    input,
                                }
                            } ),
                        },
                    );
                }
            }

            return {
                alt: input.alt,
                attributionRequired: input.attributionRequired ?? null,
                credit: input.credit,
                filepath,
                label: input.label,
                license: input.license,
                slug,
                source: input.source,
            } satisfies Photo.Data<T_Slug>;
        }

        public static async build<T_Slug extends string>(
            slug: T_Slug,
            input: Photo.Input<T_Slug>,
        ): Promise<Photo<T_Slug>> {

            return Photo.buildData( slug, input ).then(
                data => new Photo( data )
            );
        }

        public readonly alt: Photo.Data<T_Slug>[ 'alt' ];
        public readonly attributionRequired: Photo.Data<T_Slug>[ 'attributionRequired' ];
        public readonly credit: Photo.Data<T_Slug>[ 'credit' ];
        public readonly filepath: Photo.Data<T_Slug>[ 'filepath' ];
        public readonly label: Photo.Data<T_Slug>[ 'label' ];
        public readonly license: Photo.Data<T_Slug>[ 'license' ];
        public readonly slug: Photo.Data<T_Slug>[ 'slug' ];
        public readonly source: Photo.Data<T_Slug>[ 'source' ];

        protected constructor (
            protected readonly data: Photo.Data<T_Slug>,
        ) {
            this.alt = data.alt;
            this.attributionRequired = data.attributionRequired;
            this.credit = data.credit;
            this.filepath = data.filepath;
            this.label = data.label;
            this.license = data.license;
            this.slug = data.slug;
            this.source = data.source;
        }

        public toJSON(): Photo.JSON<T_Slug> {
            return this.data;
        }

        public toScssVars(): Photo.JSON<T_Slug> {
            return this.data;
        }
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Photo {

        /**
         * @since ___PKG_VERSION___
         */
        export type Data<T_Slug extends string> = {

            /**
             * Alt text to use for this image.
             */
            alt: string;

            /**
             * Whether attribution is required based on the license of this post.
             * Null means attribution requirements are unknown.
             */
            attributionRequired: null | boolean;

            /**
             * Short credit for this image (probably without including the image
             * source).
             */
            credit: undefined | string | {
                /**
                 * Name only. The credit will be prepended by 'Photo by ' in
                 * most outputs.
                 */
                label: string;
                href: string;
            };

            /**
             * The path to this image in the source folder (which will be copied
             * to dist directory), including filename and extension.
             *
             * If not input, it will attempt to be guessed by globbing expected
             * directories. If not found, an error will be thrown.
             */
            filepath: string | string[];

            /**
             * The human-readable name used to describe this image (e.g., in
             * headings or option names), if any.
             */
            label: undefined | string;

            /**
             * The name of the license for this image, if applicable.
             */
            license: undefined | string | {
                label: string;
                href: string;
            };

            /**
             * The id value for this image.
             */
            slug: T_Slug;

            /**
             * The name and full URL for the source of this image, to be combined
             * with the credit string (if any) to display in image captions.
             */
            source: undefined | {
                label: string;
                href: string;
            };
        };

        /**
         * @since ___PKG_VERSION___
         */
        export type Input<T_Slug extends string> = PartialPick<
            Omit<Data<T_Slug>, 'slug'>,
            'attributionRequired' | 'credit' | 'filepath' | 'label' | 'license' | 'source'
        >;

        /**
         * @since ___PKG_VERSION___
         */
        export type JSON<T_Slug extends string> = Data<T_Slug>;

        /**
         * @since ___PKG_VERSION___
         */
        export type ScssVars<T_Slug extends string> = Omit<
            Data<T_Slug>,
            'attributionRequired' | 'credit' | 'label' | 'license' | 'source'
        >;
    }

    /**
     * @since ___PKG_VERSION___
     */
    export class Thumbnail<T_Slug extends string> extends Photo<T_Slug> implements Thumbnail.Data<T_Slug> {

        public static override async buildData<T_Slug extends string>(
            slug: T_Slug,
            input: Thumbnail.Input<T_Slug>,
        ): Promise<Thumbnail.Data<T_Slug>> {

            let filepath: string | string[] | undefined = input.filepath;

            // uses a variety of globs to try and guess the path
            if ( !filepath ) {

                const baseGlobs = [
                    `**/${ slug }.jpeg`,
                    `**/${ slug }.jpg`,
                    `**/${ slug }.png`,
                    `**/${ slug }.svg`,
                ];

                let _results = globSync(
                    baseGlobs.map( str => `src/assets/thumbnails/${ str }` ),
                    globOpts,
                );

                if ( !_results.length ) {
                    _results = globSync(
                        baseGlobs.map( str => `src/assets/${ str }` ),
                        globOpts,
                    );

                    if ( !_results.length ) {
                        _results = globSync(
                            baseGlobs.map( str => `src/${ str }` ),
                            globOpts,
                        );
                    }
                }

                filepath = _results?.map(
                    path => path.replace( /^src\//gi, '' )
                );

                // throws - no successful path found
                if ( !filepath ) {
                    throw new LocalErrors.TokenBuildError(
                        `No filepath was given for ${ slug } thumbnail and none could be successfully guessed.`,
                        {
                            class: 'Tokens_Photos.Thumbnail',
                            method: 'build',
                        },
                        {
                            cause: VariableInspector.stringify( {
                                vars: {
                                    slug,
                                    'baseGlobs.map( str => `src/assets/thumbnails/${ str }` )': baseGlobs.map( str => `src/assets/thumbnails/${ str }` ),
                                    'baseGlobs.map( str => `src/assets/${ str }` )': baseGlobs.map( str => `src/assets/${ str }` ),
                                    'baseGlobs.map( str => `src/${ str }` )': baseGlobs.map( str => `src/${ str }` ),
                                    input,
                                }
                            } ),
                        },
                    );
                }
            }

            return Photo.buildData( slug, {
                ...input,
                filepath,
            } );
        }

        public static override async build<T_Slug extends string>(
            slug: T_Slug,
            input: Thumbnail.Input<T_Slug>,
        ): Promise<Thumbnail<T_Slug>> {

            return Thumbnail.buildData( slug, input ).then(
                data => new Thumbnail( data )
            );
        }

        protected constructor (
            data: Thumbnail.Data<T_Slug>,
        ) {
            super( data );
        }
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Thumbnail {

        /**
         * @since ___PKG_VERSION___
         */
        export type Data<T_Slug extends string> = Photo.Data<T_Slug> & {};

        /**
         * @since ___PKG_VERSION___
         */
        export type Input<T_Slug extends string> = Photo.Input<T_Slug> & PartialPick<
            Omit<Data<T_Slug>, keyof Photo.Data<T_Slug>>,
            never
        >;

        /**
         * @since ___PKG_VERSION___
         */
        export type JSON<T_Slug extends string> = Data<T_Slug>;

        /**
         * @since ___PKG_VERSION___
         */
        export type ScssVars<T_Slug extends string> = Photo.ScssVars<T_Slug> & PartialPick<
            Omit<Data<T_Slug>, keyof Photo.ScssVars<T_Slug>>,
            never
        >;
    }
}