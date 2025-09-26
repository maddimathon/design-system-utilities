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
import { CompileStage } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since ___PKG_VERSION___
 */
export declare class Compile extends CompileStage {
    /**
     * All sub-stages to run in this stage (in order).
     *
     * @category Running
     *
     * @source
     */
    readonly subStages: Stage.SubStage.Compile[];
    protected templates(): Promise<void>;
    protected scss(): Promise<void>;
}
//# sourceMappingURL=Compile.d.ts.map