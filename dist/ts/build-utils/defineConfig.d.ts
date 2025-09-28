/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { Config } from '@maddimathon/build-utilities';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
/**
 * Applies a better default build config for npm-build-utilities.
 *
 * @since 0.1.0-alpha.draft
 */
export declare function defineConfig<T_Build extends typeof Build, T_Compile extends typeof Compile, T_Document extends typeof Document>(config: Config, _classes?: {
    Build?: T_Build;
    Compile?: T_Compile;
    Document?: T_Document;
}): Config;
//# sourceMappingURL=defineConfig.d.ts.map