/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { globSync } from 'glob';
// import NodeFS from 'node:fs';
// import NodePath from 'node:path';
import { objectMap, objectMapAsync, VariableInspector, } from '@maddimathon/utility-typescript';
import { AbstractTokens } from './abstract/AbstractTokens.js';
import { LocalErrors } from '../01-utilities/Errors.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-beta.0.draft
 */
export class Tokens_Photos extends AbstractTokens {
    data;
    static async build(input) {
        return Promise.all([
            objectMapAsync(input.photos, ([slug, photo]) => Tokens_Photos.Photo.build(slug, photo)),
            objectMapAsync(input.thumbnails, ([slug, thumbnail]) => Tokens_Photos.Thumbnail.build(slug, thumbnail)),
        ]).then(([photos, thumbnails]) => new Tokens_Photos({ photos, thumbnails }));
    }
    constructor(data) {
        super();
        this.data = data;
    }
    toJSON() {
        return {
            photos: objectMap(this.data.photos, ([slug, photo]) => photo.toJSON()),
            thumbnails: objectMap(this.data.thumbnails, ([slug, thumbnail]) => thumbnail.toJSON()),
        };
    }
    toScssVars() {
        return {
            photos: objectMap(this.data.photos, ([slug, photo]) => photo.toScssVars()),
        };
    }
}
/**
 * Utilities for the {@link Tokens_Photos} class.
 *
 * @since 0.1.0-beta.0.draft
 */
(function (Tokens_Photos) {
    /**
     * @since 0.1.0-beta.0.draft
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
    };
    /**
     * @since 0.1.0-beta.0.draft
     */
    class Photo {
        data;
        static async buildData(slug, input) {
            let filepath = input.filepath;
            // uses a variety of globs to try and guess the path
            if (!filepath) {
                const baseGlobs = [
                    `**/${slug}.jpeg`,
                    `**/${slug}.jpg`,
                    `**/${slug}.png`,
                    `**/${slug}.svg`,
                ];
                let _results = globSync(baseGlobs.map(str => `src/assets/photos/${str}`), globOpts);
                if (!_results.length) {
                    _results = globSync(baseGlobs.map(str => `src/assets/${str}`), globOpts);
                    if (!_results.length) {
                        _results = globSync(baseGlobs.map(str => `src/${str}`), globOpts);
                    }
                }
                filepath = _results?.map(path => path.replace(/^src\//gi, ''));
                // throws - no successful path found
                if (!filepath) {
                    throw new LocalErrors.TokenBuildError(`No filepath was given for ${slug} photo and none could be successfully guessed.`, {
                        class: 'Tokens_Photos.Photo',
                        method: 'build',
                    }, {
                        cause: VariableInspector.stringify({
                            vars: {
                                slug,
                                'baseGlobs.map( str => `src/assets/thumbnails/${ str }` )': baseGlobs.map(str => `src/assets/thumbnails/${str}`),
                                'baseGlobs.map( str => `src/assets/${ str }` )': baseGlobs.map(str => `src/assets/${str}`),
                                'baseGlobs.map( str => `src/${ str }` )': baseGlobs.map(str => `src/${str}`),
                                input,
                            }
                        }),
                    });
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
            };
        }
        static async build(slug, input) {
            return Photo.buildData(slug, input).then(data => new Photo(data));
        }
        alt;
        attributionRequired;
        credit;
        filepath;
        label;
        license;
        slug;
        source;
        constructor(data) {
            this.data = data;
            this.alt = data.alt;
            this.attributionRequired = data.attributionRequired;
            this.credit = data.credit;
            this.filepath = data.filepath;
            this.label = data.label;
            this.license = data.license;
            this.slug = data.slug;
            this.source = data.source;
        }
        toJSON() {
            return this.data;
        }
        toScssVars() {
            return {
                alt: this.data.alt,
                filepath: Array.isArray(this.data.filepath) ? this.data.filepath[0] : this.data.filepath,
                slug: this.data.slug,
            };
        }
    }
    Tokens_Photos.Photo = Photo;
    /**
     * @since 0.1.0-beta.0.draft
     */
    class Thumbnail extends Photo {
        static async buildData(slug, input) {
            let filepath = input.filepath;
            // uses a variety of globs to try and guess the path
            if (!filepath) {
                const baseGlobs = [
                    `**/${slug}.jpeg`,
                    `**/${slug}.jpg`,
                    `**/${slug}.png`,
                    `**/${slug}.svg`,
                ];
                let _results = globSync(baseGlobs.map(str => `src/assets/thumbnails/${str}`), globOpts);
                if (!_results.length) {
                    _results = globSync(baseGlobs.map(str => `src/assets/${str}`), globOpts);
                    if (!_results.length) {
                        _results = globSync(baseGlobs.map(str => `src/${str}`), globOpts);
                    }
                }
                filepath = _results?.map(path => path.replace(/^src\//gi, ''));
                // throws - no successful path found
                if (!filepath) {
                    throw new LocalErrors.TokenBuildError(`No filepath was given for ${slug} thumbnail and none could be successfully guessed.`, {
                        class: 'Tokens_Photos.Thumbnail',
                        method: 'build',
                    }, {
                        cause: VariableInspector.stringify({
                            vars: {
                                slug,
                                'baseGlobs.map( str => `src/assets/thumbnails/${ str }` )': baseGlobs.map(str => `src/assets/thumbnails/${str}`),
                                'baseGlobs.map( str => `src/assets/${ str }` )': baseGlobs.map(str => `src/assets/${str}`),
                                'baseGlobs.map( str => `src/${ str }` )': baseGlobs.map(str => `src/${str}`),
                                input,
                            }
                        }),
                    });
                }
            }
            return Photo.buildData(slug, {
                ...input,
                filepath,
            });
        }
        static async build(slug, input) {
            return Thumbnail.buildData(slug, input).then(data => new Thumbnail(data));
        }
        constructor(data) {
            super(data);
        }
    }
    Tokens_Photos.Thumbnail = Thumbnail;
})(Tokens_Photos || (Tokens_Photos = {}));
