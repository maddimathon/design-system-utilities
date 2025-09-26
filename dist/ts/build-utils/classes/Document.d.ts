/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import type { Stage } from '@maddimathon/build-utilities';
import { DocumentStage } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since ___PKG_VERSION___
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
    protected scss(): Promise<void>;
    protected astro(): Promise<void>;
}
//# sourceMappingURL=Document.d.ts.map