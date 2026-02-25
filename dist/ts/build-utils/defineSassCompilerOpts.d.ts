/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { CLI, Config, Stage } from '@maddimathon/build-utilities';
import type { Logger } from '@maddimathon/build-utilities/internal';
/**
 * Defines on the sass compiler options part of the build-utilities config.
 */
export declare function defineSassCompilerOpts(args: {
    config: Config.Class;
    console: Logger;
    params: CLI.Params;
}, partial?: Partial<Stage.Compiler.Args.Sass> | Stage.Compiler.Args.Sass | ((args: {
    config: Config.Class;
    console: Logger;
    params: CLI.Params;
}) => Partial<Stage.Compiler.Args.Sass>)): {
    functions: {
        [x: string]: import("sass-embedded").CustomFunction<"async">;
    };
    benchmarkCompileTime?: boolean;
    cli?: {
        "embed-sources"?: boolean;
        "embed-source-map"?: boolean;
        "error-css"?: boolean;
        indented?: boolean;
        "source-map-urls"?: "absolute" | "relative";
        update?: true;
    };
    compileViaCLI?: boolean;
    holdDeprecationsToEnd?: boolean;
    ignoreWarningsInPackaging?: string;
    isWatchedUpdate?: boolean;
    neverDisplayDeprecationDetails?: boolean;
    onlyOneDeprecationWarningPerCompile?: boolean;
    pathToSassLoggingRoot?: string;
    alertAscii?: boolean | undefined;
    alertColor?: boolean | undefined;
    charset?: boolean | undefined;
    fatalDeprecations?: (import("sass-embedded").DeprecationOrId | import("sass-embedded").Version)[] | undefined;
    futureDeprecations?: import("sass-embedded").DeprecationOrId[] | undefined;
    importers?: (import("sass-embedded").NodePackageImporter | import("sass-embedded").Importer<"async"> | import("sass-embedded").FileImporter<"async">)[] | undefined;
    loadPaths?: string[] | undefined;
    logger?: import("sass-embedded").Logger | undefined;
    quietDeps?: boolean | undefined;
    silenceDeprecations?: import("sass-embedded").DeprecationOrId[] | undefined;
    sourceMap?: boolean | undefined;
    sourceMapIncludeSources?: boolean | undefined;
    style?: import("sass-embedded").OutputStyle | undefined;
    verbose?: boolean | undefined;
} & Partial<Stage.Compiler.Args.Sass>;
