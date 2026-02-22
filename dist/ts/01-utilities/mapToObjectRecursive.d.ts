/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
/**
 * Converts a Map (and any of its Map children, recursively) to a simple object.
 *
 * @category Utilities
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare function mapToObjectRecursive<T_Keys extends unknown, T_Values extends unknown>(map: Map<T_Keys, T_Values>): Promise<Record<T_Keys & (number | string | symbol), T_Values>>;
