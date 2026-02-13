/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha
 */
export declare function objectGenerator<T_Keys extends number | string, T_Return extends unknown>(keys: T_Keys[] | readonly T_Keys[], mapper: (key: T_Keys) => T_Return): {
    [K in T_Keys]: T_Return;
};
/**
 * Takes an array of keys and a callback function to easily construct a
 * typed object.
 *
 * @since 0.1.0-alpha
 */
export declare function objectGeneratorAsync<T_Keys extends number | string, T_Return extends unknown>(keys: T_Keys[] | readonly T_Keys[], mapper: (key: T_Keys) => Promise<T_Return>): Promise<{
    [K in T_Keys]: T_Return;
}>;
//# sourceMappingURL=objectGenerator.d.ts.map