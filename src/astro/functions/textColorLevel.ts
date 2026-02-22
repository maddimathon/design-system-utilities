/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

/**
 * Returns a default text level for the given background level. Should only be
 * used as a last-resort fallback.
 * 
 * @since ___PKG_VERSION___
 */
export function textColorLevel(
    lvl:
        | 'black'
        | 'white'
        | ColourUtilities.Levels.Required
        | ColourUtilities.Levels.Optional,
):
    | 'black'
    | 'white'
    | ColourUtilities.Levels.Required
    | ColourUtilities.Levels.Optional {
    switch ( lvl ) {

        case '100':
        case 'white':
            return '700';

        case '150':
            return '800';

        case '200':
            return '800';

        case '250':
            return '800';

        case '300':
            return '900';

        case '350':
            return '900';

        case '400':
            return '900';

        case '450':
            return 'black';

        case '500':
            return 'white';

        case '550':
            return 'white';

        case '600':
            return '100';

        case '650':
            return '100';

        case '700':
            return '100';

        case '750':
            return '200';

        case '800':
            return '200';

        case '850':
            return '200';

        case '900':
        case 'black':
            return '300';
    }
}