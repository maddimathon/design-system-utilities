/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

// import { JsonToScss } from '@maddimathon/utility-sass';
// import * as z from 'zod';

import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since ___PKG_VERSION___
 */
export class Tokens_CSS_Transition extends AbstractTokens<Tokens_CSS_Transition.Data> {

    public static get default(): Tokens_CSS_Transition.Data {
        return {
            time: {
                fast: '250ms',
                normal: '500ms',
                slow: '750ms',
            },
        };
    }

    public readonly data: Tokens_CSS_Transition.Data;

    public constructor (
        input: Tokens_CSS_Transition.InputParam,
    ) {
        super();

        this.data = mergeArgs( Tokens_CSS_Transition.default, input, true );
    }

    public toJSON(): Tokens_CSS_Transition.JsonReturn {

        return this.data;
    }

    public toScssVars(): {
        [ K in keyof Tokens_CSS_Transition.Data ]: AbstractTokens.ScssReturn;
    } {

        return {
            time: this.data.time,
        };
    }
}

/**
 * Utilities for the {@link Tokens_CSS_Transition} class.
 * 
 * @since ___PKG_VERSION___
 */
export namespace Tokens_CSS_Transition {

    type TransitionTime = `${ number }ms` | `${ number }s`;

    /**
     * @since ___PKG_VERSION___
     */
    export type Data = {

        time: {
            fast: TransitionTime;
            normal: TransitionTime;
            slow: TransitionTime;
            [ key: string ]: TransitionTime;
        };
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type InputParam = Partial<Omit<Data, 'time'>> & {
        time?: Partial<Data[ 'time' ]>;
    };

    /**
     * @since ___PKG_VERSION___
     */
    export type JsonReturn = Data;

}