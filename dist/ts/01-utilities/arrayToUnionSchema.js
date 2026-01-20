/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.7
 * @license MIT
 */
import * as z from 'zod';
/**
 * Takes an array of values and translates them into an appropriate ZodType.
 *
 * @since 0.1.0-alpha
 */
export function arrayToUnionSchema(arr) {
    // returns
    if (!arr.length) {
        return z.undefined();
    }
    const schemas = arr.map((value) => {
        // return
        switch (typeof value) {
            case 'object':
                if (value === null) {
                    return z.null();
                }
                break;
        }
        return z.literal(value);
    });
    // returns
    if (schemas.length == 1) {
        return schemas[0];
    }
    return z.union(schemas);
}
//# sourceMappingURL=arrayToUnionSchema.js.map