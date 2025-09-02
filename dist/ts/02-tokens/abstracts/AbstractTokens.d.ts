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
type RecursiveRecord<T_Keys extends number | string | symbol = number | string | symbol, T_Values extends any = any> = {
    [K in T_Keys]: T_Values | RecursiveRecord<T_Keys, T_Values>;
};
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export declare abstract class AbstractTokens<T_SystemSchema extends z.ZodTypeAny, T_ExportType extends object = z.infer<T_SystemSchema>, T_InputType extends object = Partial<z.infer<T_SystemSchema>>, T_JsonType extends object = T_ExportType, T_ScssType extends object = T_ExportType> {
    protected readonly input: T_InputType;
    abstract get schema(): T_SystemSchema;
    constructor(input: T_InputType);
    protected objectMap<T_Object extends object, T_Return extends unknown>(obj: T_Object, mapper: (key: keyof T_Object, value: T_Object[keyof T_Object]) => T_Return): {
        [K in keyof T_Object]: T_Return;
    };
    /**
     * Returns a single-level object record with kebab case keys based on nested
     * map keys.
     */
    protected objectFlatten<T_Keys extends string, T_Values extends any>(obj: RecursiveRecord<T_Keys, T_Values>, prefix: string, suffix: string): {
        [key: string]: T_Values;
    };
    protected roundToPixel(num: number, factor?: number): number;
    abstract export(): T_ExportType;
    abstract toJSON(): T_JsonType;
    abstract toScssVars(): T_ScssType;
    toScss(): string;
    valueOf(): T_ExportType;
}
export {};
//# sourceMappingURL=AbstractTokens.d.ts.map