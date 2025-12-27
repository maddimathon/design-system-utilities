/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.4
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
 * @since 0.1.0-alpha
 * @since 0.1.0-alpha.4 — Added a check for existing file extensions before adding '.html'.
 */
export declare function makeRelativeURL(config_base: string, config_build: {
    format: "preserve" | "file" | "directory";
}, currentURL: URL, targetSubpath: string): string;
//# sourceMappingURL=makeRelativeURL.d.ts.map