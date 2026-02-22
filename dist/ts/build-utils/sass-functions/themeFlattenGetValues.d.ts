/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { CLI, Config } from '@maddimathon/build-utilities';
import type { Logger } from '@maddimathon/build-utilities/internal';
import * as sass from "sass-embedded";
/**
 * A function to include in {@link sass.Options} that flattens the scss theme
 * objects and sets their values to colour values.
 *
 * @since __PKG_VERSION___
 */
export declare function sassFn_themeFlattenGetValues({ console }: {
    config: Config.Class;
    console: Logger;
    params: CLI.Params;
}): [string, sass.CustomFunction<'async'>];
