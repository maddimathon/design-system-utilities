/**
 * Individual token types and shapes.
 *
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
var Value;
(function (Value) {
    /**
     * Creates a W3C-compatible token schema with zod based on the given types.
     */
    function _generic(value, type) {
        return z.object({
            '$value': value,
            '$type': type ? z.literal(type) : z.never(),
            '$deprecated': z.union([z.boolean(), z.string()]).optional(),
            '$description': z.string().optional(),
            '$extensions': z.record(z.string(), z.unknown()).optional(),
        });
    }
    Value.alias = _generic(z.string());
    Value.cubicBezier = _generic(z.tuple([z.number(), z.number(), z.number(), z.number()]), 'cubicBezier');
    Value.dimension = _generic(z.object({
        value: z.number(),
        unit: z.union([z.literal('px'), z.literal('rem')]),
    }), 'dimension');
    Value.duration = _generic(z.object({
        value: z.number(),
        unit: z.union([z.literal('ms'), z.literal('s')]),
    }), 'duration');
    Value.fontFamily = _generic(z.union([z.string(), z.array(z.string())]), 'fontFamily');
    /**
     * This is intentionally more restricted than the actual W3C spec.
     */
    Value.fontWeight = _generic(z.union([
        z.literal(100),
        z.literal(200),
        z.literal(300),
        z.literal(400),
        z.literal(500),
        z.literal(600),
        z.literal(700),
        z.literal(800),
        z.literal(900),
    ]), 'fontWeight');
    Value.number = _generic(z.number(), 'number');
})(Value || (Value = {}));
export default Value;
//# sourceMappingURL=value.js.map