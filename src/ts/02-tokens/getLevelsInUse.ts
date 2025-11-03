/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { Tokens } from './Tokens.ts';
import type { ColourLevels, ColourLevels_Extended } from './@types.js';

/**
 * Returns a set of the unique levels in use for the given theme tokens.
 * 
 * @since ___PKG_VERSION___
 */
export function getLevelsInUse( themes: Tokens.JsonReturn[ 'themes' ] ) {

    const levelsInUse = new Set<ColourLevels | ColourLevels_Extended>();

    Object.values( themes ).forEach(
        ( theme ) => theme.levelsInUse.forEach(
            level => levelsInUse.add( level )
        )
    );

    return levelsInUse;
}