/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as z from 'zod';
/**
 * Takes an array of values and translates them into an appropriate ZodType.
 *
 * @since ___PKG_VERSION___
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