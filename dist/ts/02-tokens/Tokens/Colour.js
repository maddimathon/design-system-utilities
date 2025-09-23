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
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap } from './Colour/Colour_ShadeMap.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
// <
//     T_AdditionalShadeMaps extends string = never,
// >
export class Tokens_Colour extends AbstractTokens {
    names;
    get schema() {
        return Tokens_Colour.Schema(this.names);
    }
    maps;
    constructor(names, input) {
        super(input ?? {});
        this.names = names;
        this.maps = this.parseSchema(this.schema, input, {
            name: `Tokens_Colour`,
            location: 'src/ts/02-tokens/Tokens/Colour.ts:66',
        });
    }
    valueOf() {
        return AbstractTokens.objectMap(this.maps, (name, map) => map.valueOf());
    }
    toJSON() {
        return AbstractTokens.objectMap(this.maps, (name, map) => map.toJSON());
    }
    toScssVars() {
        return AbstractTokens.objectMap(this.maps, (name, map) => map.toScssVars());
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Colour) {
    /* SCHEMA
     * ====================================================================== */
    Tokens_Colour.Schema = (names) => {
        const obj = AbstractTokens.objectGenerator(names, () => Tokens_Colour_ShadeMap.Schema);
        return z.object(obj).transform((part) => AbstractTokens.objectMap(part, (key, value) => new Tokens_Colour_ShadeMap(`Tokens_Colour.${String(key)}`, value)));
    };
})(Tokens_Colour || (Tokens_Colour = {}));
//# sourceMappingURL=Colour.js.map