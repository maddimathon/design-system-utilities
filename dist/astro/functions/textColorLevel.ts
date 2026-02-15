/**
 * @since 0.1.1-alpha.1.draft
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */

import type { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

/**
 * Returns a default text level for the given background level. Should only be
 * used as a last-resort fallback.
 * 
 * @since 0.1.1-alpha.1.draft
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
        case 'black':
            return 'white';

        case 'white':
            return 'black';

        case '100':
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
            return '900';

        case '500':
            return '100';

        case '550':
            return '100';

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
            return '300';
    }
}