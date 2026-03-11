/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { AbstractStage, Stage } from '@maddimathon/build-utilities';
import { DocumentStage } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha
 */
export declare class Document extends DocumentStage {
    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    readonly subStages: Stage.SubStage.Document[];
    /**
     * The source globs (relative to src) to copy to the this.astroPublicDir dir.
     */
    protected readonly assetSourceGlobs: string[];
    protected readonly astroPublicDir = "docs/_public";
    protected assets(): Promise<void>;
    protected astro(): Promise<void>;
    protected scss(args?: Partial<AbstractStage.runCustomScssDirSubStage.Opts>): Promise<void>;
}
