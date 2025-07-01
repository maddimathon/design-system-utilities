/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import type { Stage } from '@maddimathon/build-utilities';
import { CompileStage } from '@maddimathon/build-utilities';
/**
 * Extension of the built-in one.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Compile extends CompileStage {
    readonly subStages: Stage.SubStage.Compile[];
    protected css(): Promise<void>;
    protected scss(): Promise<void>;
}
//# sourceMappingURL=Compile.d.ts.map