/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.12
 * @license MIT
 */
import type { Stage } from '@maddimathon/build-utilities';
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
    protected readonly astroPublicDir = "docs/_public/assets";
    protected scss(): Promise<void>;
    protected astro(): Promise<void>;
}
//# sourceMappingURL=Document.d.ts.map