/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { JsonToScss } from '@maddimathon/utility-sass';

/**
 * Base class for the classes used to construct tokens.
 * 
 * @since ___PKG_VERSION___
 */
export abstract class AbstractTokens<
    T_ExportType extends object,
    T_InputType extends object,
> {

    constructor (
        protected readonly input: T_InputType,
    ) { }

    public abstract export(): T_ExportType;

    public toJSON(): T_ExportType {
        return this.export();
    }

    public toSCSS(): string {
        return JsonToScss.convert( this.export() ) || '()';
    }

    public valueOf(): T_ExportType {
        return this.export();
    }
}