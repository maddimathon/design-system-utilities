/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

import type {
    RequiredPartially,
} from '@maddimathon/utility-typescript/types';

import type { GenericElementProps } from '@maddimathon/utility-astro';

import type { TokenTypes } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens_Photos } from '../../ts/02-tokens/Tokens_Photos.js';

type ImageComponentProps = HTMLAttributes<'img'>;

type Image_ExcludedProps = 'alt' | 'class' | 'class:list' | 'height' | 'width' | 'src';

export type BrandImageData = ImageMetadata & {
    filepath: string;
};

/**
 * Input for photo files.
 */
export type AllPhotos<T_Types extends TokenTypes.TypeParams> = {
    [ K in T_Types[ 'photos' ][ 'photoSlugs' ] ]?: Omit<Tokens_Photos.Photo.JSON<K>, 'filepath'> & {
        image: BrandImageData | BrandImageData[];
    };
};

/**
 * Input for thumbnail files.
 */
export type AllThumbnails<T_Types extends TokenTypes.TypeParams> = {
    [ K in T_Types[ 'photos' ][ 'thumbnailSlugs' ] ]?: Omit<Tokens_Photos.Thumbnail.JSON<K>, 'filepath'> & {
        image: BrandImageData | BrandImageData[];
    };
};

/**
 * Input for thumbnail files.
 */
export type PhotoData<
    T_Slug extends string,
    T_Object extends Tokens_Photos.Photo.JSON<T_Slug> | Tokens_Photos.Thumbnail.JSON<T_Slug> = Tokens_Photos.Photo.JSON<T_Slug> | Tokens_Photos.Thumbnail.JSON<T_Slug>,
> = {

    attrs: RequiredPartially<Omit<ImageComponentProps, 'class' | 'class:list'>, 'alt' | 'src'> & {
        class?: undefined | null | string;
    };

    caption?: undefined | string;

    filename: string;
    filepath: string;

    image: ImageMetadata;
    imagesAll: undefined | {
        [ K in BrandImageData[ 'format' ] ]?: BrandImageData[];
    };

    isThumbnail: boolean;

    meta: Omit<T_Object, 'alt' | 'filepath' | 'slug'>;

    slug: T_Slug;
};

export type BrandPhotoProps_Base<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    T_Slug extends T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ] = T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ],
> = {
    photos: AllPhotos<T_Types>;
    slug: T_Slug;
    thumbnails: AllThumbnails<T_Types>;
    urlMaker: ( currentURL: URL, targetSubpath: string ) => string;

    class?: string;
    defineSize?: boolean;
    includeCaption?: null | boolean;

    href?: undefined;
    linkAttrs?: undefined | HTMLAttributes<'a'>;
    linkLabel?: undefined,
};

export type BrandPhotoProps_Default<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    T_Slug extends T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ] = T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ],
> = GenericElementProps<BrandPhotoProps_Base<T_Types, T_Slug>, 'img', Image_ExcludedProps>;

export type BrandPhotoProps_Linked<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    T_Slug extends T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ] = T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ],
> = GenericElementProps<Omit<BrandPhotoProps_Base<T_Types, T_Slug>, 'href' | 'linkLabel'> & {
    href: string;
    linkLabel: string,
}, 'img', Image_ExcludedProps>;

export type BrandPhotoProps<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
    T_Slug extends T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ] = T_Types[ 'photos' ][ 'photoSlugs' ] | T_Types[ 'photos' ][ 'thumbnailSlugs' ],
> = BrandPhotoProps_Default<T_Types, T_Slug> | BrandPhotoProps_Linked<T_Types, T_Slug>;