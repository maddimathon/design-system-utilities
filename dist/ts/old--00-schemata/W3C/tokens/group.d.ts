/**
 * Groups of tokens.
 *
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import value from './value.js';
/** @hidden */
declare function group(): void;
declare namespace group {
    type LocalProps = {
        '$type'?: value.TokenType;
        '$deprecated'?: boolean | string;
        '$description'?: string;
        '$extensions'?: {
            [key: string]: {};
        };
    };
    type Any = LocalProps & {
        [key: string]: value.Any | Any;
    };
}
export default group;
//# sourceMappingURL=group.d.ts.map