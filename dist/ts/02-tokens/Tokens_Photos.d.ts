/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { PartialPick } from '@maddimathon/utility-typescript/types';
import type { TokenTypes } from './@types.js';
import { AbstractTokens } from './abstract/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare class Tokens_Photos<T_Params extends TokenTypes.Photos.TypeParams> extends AbstractTokens<{
    data: Tokens_Photos.Data<T_Params>;
    json: Tokens_Photos.JsonReturn<T_Params>;
    scss: Tokens_Photos.ScssVars<T_Params>;
}> {
    readonly data: Tokens_Photos.Data<T_Params>;
    static build<T_Params extends TokenTypes.Photos.TypeParams>(input: Tokens_Photos.InputParam<T_Params>): Promise<Tokens_Photos<T_Params>>;
    constructor(data: Tokens_Photos.Data<T_Params>);
    toJSON(): Tokens_Photos.JsonReturn<T_Params>;
    toScssVars(): Tokens_Photos.ScssVars<T_Params>;
}
/**
 * Utilities for the {@link Tokens_Photos} class.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare namespace Tokens_Photos {
    /**
     * @since 0.1.0-beta.0.draft
     */
    type Data<T_Params extends TokenTypes.Photos.TypeParams> = {
        photos: {
            [S in T_Params['photoSlugs']]: Photo<S>;
        };
        thumbnails: {
            [S in T_Params['thumbnailSlugs']]: Thumbnail<S>;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type InputParam<T_Params extends TokenTypes.Photos.TypeParams> = {
        photos: {
            [S in T_Params['photoSlugs']]: Photo.Input<S>;
        };
        thumbnails: {
            [S in T_Params['thumbnailSlugs']]: Thumbnail.Input<S>;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type JsonReturn<T_Params extends TokenTypes.Photos.TypeParams> = {
        photos: {
            [S in T_Params['photoSlugs']]: Photo.JSON<S>;
        };
        thumbnails: {
            [S in T_Params['thumbnailSlugs']]: Thumbnail.JSON<S>;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    type ScssVars<T_Params extends TokenTypes.Photos.TypeParams> = {
        photos: {
            [S in T_Params['photoSlugs']]: Photo.ScssVars<S>;
        };
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    class Photo<T_Slug extends string> implements Photo.Data<T_Slug> {
        protected readonly data: Photo.Data<T_Slug>;
        static buildData<T_Slug extends string>(slug: T_Slug, input: Photo.Input<T_Slug>): Promise<Photo.Data<T_Slug>>;
        static build<T_Slug extends string>(slug: T_Slug, input: Photo.Input<T_Slug>): Promise<Photo<T_Slug>>;
        readonly alt: Photo.Data<T_Slug>['alt'];
        readonly attributionRequired: Photo.Data<T_Slug>['attributionRequired'];
        readonly credit: Photo.Data<T_Slug>['credit'];
        readonly filepath: Photo.Data<T_Slug>['filepath'];
        readonly label: Photo.Data<T_Slug>['label'];
        readonly license: Photo.Data<T_Slug>['license'];
        readonly slug: Photo.Data<T_Slug>['slug'];
        readonly source: Photo.Data<T_Slug>['source'];
        protected constructor(data: Photo.Data<T_Slug>);
        toJSON(): Photo.JSON<T_Slug>;
        toScssVars(): Photo.JSON<T_Slug>;
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Photo {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Data<T_Slug extends string> = {
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
         * @since 0.1.0-beta.0.draft
         */
        type Input<T_Slug extends string> = PartialPick<Omit<Data<T_Slug>, 'slug'>, 'attributionRequired' | 'credit' | 'filepath' | 'label' | 'license' | 'source'>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type JSON<T_Slug extends string> = Data<T_Slug>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ScssVars<T_Slug extends string> = Omit<Data<T_Slug>, 'attributionRequired' | 'credit' | 'label' | 'license' | 'source'>;
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    class Thumbnail<T_Slug extends string> extends Photo<T_Slug> implements Thumbnail.Data<T_Slug> {
        static buildData<T_Slug extends string>(slug: T_Slug, input: Thumbnail.Input<T_Slug>): Promise<Thumbnail.Data<T_Slug>>;
        static build<T_Slug extends string>(slug: T_Slug, input: Thumbnail.Input<T_Slug>): Promise<Thumbnail<T_Slug>>;
        protected constructor(data: Thumbnail.Data<T_Slug>);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    namespace Thumbnail {
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Data<T_Slug extends string> = Photo.Data<T_Slug> & {};
        /**
         * @since 0.1.0-beta.0.draft
         */
        type Input<T_Slug extends string> = Photo.Input<T_Slug> & PartialPick<Omit<Data<T_Slug>, keyof Photo.Data<T_Slug>>, never>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type JSON<T_Slug extends string> = Data<T_Slug>;
        /**
         * @since 0.1.0-beta.0.draft
         */
        type ScssVars<T_Slug extends string> = Photo.ScssVars<T_Slug> & PartialPick<Omit<Data<T_Slug>, keyof Photo.ScssVars<T_Slug>>, never>;
    }
}
