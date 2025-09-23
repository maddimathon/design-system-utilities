/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
/**
 * @since 0.1.0-alpha.draft
 */
export var Schemata;
(function (Schemata) {
    /**
     * Token definitions that fit the W3C proposed standard.
     *
     * @see {@link https://www.designtokens.org/tr/drafts/format | Proposed spec}
     *
     * @since 0.1.0-alpha.draft
     */
    let W3C;
    (function (W3C) {
        /** @hidden */
        W3C.TokenOrGroupName = z.string().regex(/^[a-z|0-9|\-|_]+$/g, 'Token and group names must be at least one character long and using only characters a-z, 0-9, -, or _.');
        /** @hidden */
        W3C.TokenType = z.union([
            z.literal('color'),
            z.literal('dimension'),
        ]);
        /** @hidden */
        W3C.GenericToken = ({ type, value } = {}) => z.object({
            '$type': type ?? z.undefined(),
            '$description': z.string().optional(),
            '$deprecated': z.union([z.boolean(), z.string()]).optional(),
            '$value': value ?? z.string(),
            '$extensions': z.record(z.string().regex(/^[^\$\{\}]/g, 'Extension names cannot contain $ or {}.'), z.any()).optional(),
        });
        /** @hidden */
        W3C.Token = W3C.GenericToken();
        /** @hidden */
        W3C.TokenGroup = z.object({
            '$description': z.string().optional(),
            '$type': W3C.TokenType.optional(),
        }).and(z.record(W3C.TokenOrGroupName, z.union([
            W3C.Token,
            z.lazy(() => W3C.TokenGroup),
        ])));
    })(W3C = Schemata.W3C || (Schemata.W3C = {}));
    ;
})(Schemata || (Schemata = {}));
;
//# sourceMappingURL=index.js.map