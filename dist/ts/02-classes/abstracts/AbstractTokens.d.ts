/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
/**
 * Base class for the classes used to construct tokens.
 *
 * @since 0.1.0-alpha.draft
 */
export declare abstract class AbstractTokens<T_ExportType extends object, T_InputType extends object> {
    protected readonly input: T_InputType;
    constructor(input: T_InputType);
    abstract export(): T_ExportType;
    toJSON(): T_ExportType;
    toSCSS(): string;
    valueOf(): T_ExportType;
}
//# sourceMappingURL=AbstractTokens.d.ts.map