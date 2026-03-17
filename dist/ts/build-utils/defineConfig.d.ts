/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { Config, PackageStage, TestStage } from '@maddimathon/build-utilities';
import { Build } from './classes/Build.js';
import { Compile } from './classes/Compile.js';
import { Document } from './classes/Document.js';
export type { Config };
/**
 * Applies a better default build config for npm-build-utilities.
 *
 * @since 0.1.0-alpha
 */
export declare function defineConfig(config: Omit<Config, 'stages'> & {
    stages?: undefined | Omit<Config['stages'], 'build' | 'compile' | 'document' | 'package' | 'test'>;
}, _classes?: {
    Build?: typeof Build;
    Compile?: typeof Compile;
    Document?: typeof Document;
    Package?: typeof PackageStage;
    Test?: typeof TestStage;
}): Config;
