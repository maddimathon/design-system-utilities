/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { mergeArgs } from '@maddimathon/utility-typescript/functions';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Transition extends AbstractTokens<Tokens_CSS_Transition.Data> {

    public static get default(): Tokens_CSS_Transition.Data {

        const always: Tokens_CSS_Transition.AllowedProperties[] = [
            'background-color',
            'border-color',
            // 'box-shadow',
            'color',
            'font-weight',
            'opacity',
            'outline-color',
            'text-decoration-color',
            // 'text-shadow',
            'visibility',
        ];

        return {

            properties: {

                always,

                motion: [
                    ...always,
                    'aspect-ratio',
                    // 'border',
                    'bottom',
                    // 'font',
                    'font-weight',
                    'height',
                    'left',
                    // 'letter-spacing',
                    // 'line-height',
                    'margin',
                    // 'max-height',
                    // 'max-width',
                    // 'min-height',
                    // 'min-width',
                    // 'outline',
                    'padding',
                    'right',
                    // 'rotate',
                    // 'scale',
                    // 'text-indent',
                    'top',
                    'transform',
                    // 'transform-origin',
                    // 'translate',
                    // 'vertical-align',
                    'width',
                    // 'word-spacing',
                    // 'z-index',
                ],
            },

            time: {
                fast: '250ms',
                normal: '500ms',
                slow: '750ms',
                'toggle-closing': '1200ms',
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
            properties: this.data.properties,
            time: this.data.time,
        };
    }
}

/**
 * Utilities for the {@link Tokens_CSS_Transition} class.
 * 
 * @since 0.1.0-alpha
 */
export namespace Tokens_CSS_Transition {

    type TransitionTime = `${ number }ms` | `${ number }s`;

    export type AllowedProperties =
        | 'aspect-ratio'
        | 'background-color'
        | 'border-color'
        | 'border'
        | 'bottom'
        | 'box-shadow'
        | 'color'
        | 'font-weight'
        | 'font-weight'
        | 'font'
        | 'height'
        | 'left'
        | 'letter-spacing'
        | 'line-height'
        | 'margin'
        | 'max-height'
        | 'max-width'
        | 'min-height'
        | 'min-width'
        | 'opacity'
        | 'outline-color'
        | 'outline'
        | 'padding'
        | 'right'
        | 'rotate'
        | 'scale'
        | 'text-decoration-color'
        | 'text-indent'
        | 'text-shadow'
        | 'top'
        | 'transform-origin'
        | 'transform'
        | 'translate'
        | 'vertical-align'
        | 'visibility'
        | 'width'
        | 'word-spacing'
        | 'z-index';

    /**
     * @since 0.1.0-alpha
     */
    export type Data = {

        properties: {
            always: AllowedProperties[];
            motion: AllowedProperties[];
        },

        time: {
            fast: TransitionTime;
            normal: TransitionTime;
            slow: TransitionTime;

            'toggle-closing': TransitionTime;

            [ key: string ]: TransitionTime;
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export type InputParam = Partial<Omit<Data, 'time'>> & {
        time?: Partial<Data[ 'time' ]>;
    };

    /**
     * @since 0.1.0-alpha
     */
    export type JsonReturn = Data;

}