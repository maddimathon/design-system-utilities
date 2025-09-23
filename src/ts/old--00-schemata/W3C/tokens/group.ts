/**
 * Groups of tokens.
 * 
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */


import value from './value.js';

/** @hidden */
function group() { }

namespace group {

    export type LocalProps = {
        '$type'?: value.TokenType;

        '$deprecated'?: boolean | string;
        '$description'?: string;
        '$extensions'?: { [ key: string ]: {}; };
    };

    export type Any = LocalProps & {
        [ key: string ]: value.Any | Any;
    };
}

export default group;