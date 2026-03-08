/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import { AbstractStage, } from '@maddimathon/build-utilities';
/**
 * Take a token object and write its relevant files and assets to their output directories.
 *
 * @since 0.1.0-beta.0.draft
 */
export async function buildTokens(stage, tokens, level, paths) {
    stage.console.progress('building token files...', 0 + level);
    stage.console.verbose('parsing paths...', 1 + level);
    const tokensDistDir = stage.getDistDir(undefined, paths.tokensDistSubpath ?? 'tokens');
    const paths_icons = paths.assets === false
        ? paths.assets
        : paths.assets?.icons === false
            ? paths.assets?.icons
            : (Array.isArray(paths.assets?.icons)
                ? paths.assets?.icons
                : [paths.assets?.icons ?? 'assets/icons']).map(path => stage.fs.pathResolve(tokensDistDir, path));
    const paths_logos = paths.assets === false
        ? paths.assets
        : paths.assets?.logos === false
            ? paths.assets?.logos
            : (Array.isArray(paths.assets?.logos)
                ? paths.assets?.logos
                : [paths.assets?.logos ?? 'assets/logos']).map(path => stage.fs.pathResolve(tokensDistDir, path));
    const completePaths = {
        slug: paths.slug,
        assets: {
            icons: paths_icons,
            logos: paths_logos,
        },
        json: paths.json === false
            ? paths.json
            : (Array.isArray(paths.json)
                ? paths.json
                : [paths.json ?? `${paths.slug}.json`]).map(path => stage.fs.pathResolve(tokensDistDir, path)),
        scss: paths.scss === false
            ? paths.scss
            : Array.isArray(paths.scss)
                ? paths.scss
                : [paths.scss ?? 'src/scss/tokens/system/_tokens.scss'],
    };
    return Promise.all([
        buildTokens.writeJson(stage, tokens, completePaths.json, level),
        buildTokens.writeScss(stage, tokens, completePaths.scss, level),
        buildTokens.writeIcons(stage, tokens, completePaths.assets.icons, level),
        buildTokens.writeLogos(stage, tokens, completePaths.assets.logos, level),
    ]);
}
/**
 * Utilities for the {@link buildTokens} function.
 *
 * @since 0.1.0-beta.0.draft
 */
(function (buildTokens) {
    /**
     * @since 0.1.0-beta.0.draft
     */
    async function writeIcons(stage, tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        stage.console.verbose('writing icon files...', 1 + level);
        return Promise.all(paths.map(async (path) => Promise.all(Object.values(tokens.icons.data).map(async (icon) => stage.try(stage.fs.write, (stage.params.verbose ? 2 : 1) + level, [
            stage.fs.pathResolve(path, `${icon.slug}.svg`),
            icon.svgFile(),
            { force: true },
        ])))));
    }
    buildTokens.writeIcons = writeIcons;
    /**
     * @since 0.1.0-beta.0.draft
     */
    async function writeJson(stage, tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        stage.console.verbose('writing json tokens...', 1 + level);
        const tokenJson = JSON.stringify(tokens, null, 4);
        return Promise.all(paths.map(async (path) => stage.try(stage.fs.write, (stage.params.verbose ? 2 : 1) + level, [path, tokenJson, { force: true }])));
    }
    buildTokens.writeJson = writeJson;
    /**
     * @since 0.1.0-beta.0.draft
     */
    async function writeLogos(stage, tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        stage.console.verbose('writing logo files...', 1 + level);
        return Promise.all(paths.map(async (path) => Promise.all(Object.values(tokens.logos.data).map(async (logo) => stage.try(stage.fs.write, (stage.params.verbose ? 2 : 1) + level, [
            stage.fs.pathResolve(path, `${logo.slug}.svg`),
            logo.svgFile(),
            { force: true },
        ])))));
    }
    buildTokens.writeLogos = writeLogos;
    /**
     * @since 0.1.0-beta.0.draft
     */
    async function writeScss(stage, tokens, paths, level) {
        // returns
        if (!paths) {
            return;
        }
        stage.console.verbose('writing scss tokens...', 1 + level);
        const tokenScss = tokens.toScss();
        return Promise.all(paths.map(async (path) => stage.try(stage.fs.write, (stage.params.verbose ? 2 : 1) + level, [
            path,
            tokenScss,
            { force: true }
        ]))).then(async () => stage.atry(stage.fs.prettier, (stage.params.verbose ? 2 : 1) + level, [
            paths,
            'scss',
        ]));
    }
    buildTokens.writeScss = writeScss;
})(buildTokens || (buildTokens = {}));
