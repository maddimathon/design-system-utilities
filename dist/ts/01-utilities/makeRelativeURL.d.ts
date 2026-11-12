/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.3.0-draft
 * @license MIT
 */
/**
 * Makes a filenames-based relative url for offline-friendly exports.
 *
 * @param config_base    Value of `base` as imported from 'astro:config/client' in the build env.
 * @param config_build   Value of `build` as imported from 'astro:config/client' in the build env.
 * @param currentURL     Value of `Astro.url` in the build env.
 * @param targetSubpath  Path to used to construct the URL - relative to the site root (ignoring the base path).
 *
 * @since 0.1.0
 */
export declare function makeFileBasedURL(config_base: string, config_build: {
    format: "preserve" | "file" | "directory";
}, currentURL: URL, targetSubpath: string, opts?: Partial<{
    fileExtension: string;
    homeIsIndex: boolean;
    relative: boolean;
}>): string;
/**
 * Makes a filenames-based relative url for offline-friendly exports.
 *
 * @param config_base    Value of `base` as imported from 'astro:config/client' in the build env.
 * @param config_build   Value of `build` as imported from 'astro:config/client' in the build env.
 * @param currentURL     Value of `Astro.url` in the build env.
 * @param targetSubpath  Path to used to construct the URL - relative to the site root (ignoring the base path).
 *
 * @since 0.1.0-alpha
 * @since 0.1.0-alpha.4 — Added a check for existing file extensions before adding '.html'.
 *
 * @deprecated 0.2.0 — Will be removed in 0.2.0. Please use {@link makeFileBasedURL} with `{ relative: true }` instead.
 */
export declare function makeRelativeURL(config_base: string, config_build: {
    format: "preserve" | "file" | "directory";
}, currentURL: URL, targetSubpath: string, opts?: Partial<{
    fileExtension: string;
    homeIsIndex: boolean;
}>): string;
