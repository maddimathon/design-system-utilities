/**
 * @since 0.1.0-alpha.2
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';
import type { Tokens } from './Tokens.ts';

/**
 * Returns a set of the unique levels in use for the given theme tokens.
 * 
 * @since 0.1.0-alpha.2
 */
export function getLevelsInUse( themes: Tokens.JsonReturn[ 'themes' ] ) {

    const levelsInUse = new Set<ColourUtilities.Levels.Required | ColourUtilities.Levels.Optional>();

    Object.values( themes ).forEach(
        ( theme ) => theme.levelsInUse.forEach(
            level => levelsInUse.add( level )
        )
    );

    return levelsInUse;
}