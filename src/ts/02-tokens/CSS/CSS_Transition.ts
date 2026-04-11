/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { mergeArgs } from '@maddimathon/utility-typescript';
import { AbstractTokens } from '../abstract/AbstractTokens.js';

/**
 * Generates a complete token object for the design system.
 * 
 * @since 0.1.0-alpha
 */
export class Tokens_CSS_Transition extends AbstractTokens<{
    data: Tokens_CSS_Transition.Data;
    json: Tokens_CSS_Transition.JsonReturn;
    scss: Tokens_CSS_Transition.ScssVars;
}> {

    public static get default(): Tokens_CSS_Transition.Data {

        const always: Tokens_CSS_Transition.AllowedProperties[] = [
            'accent-color',
            'background-color',
            'border-color',
            'box-shadow',
            'color',
            'font-weight',
            'opacity',
            // 'outline-color',
            'text-decoration-color',
            'text-shadow',
            'visibility',
        ];

        return {

            properties: {

                always,

                motion: [
                    ...always,
                    'aspect-ratio',
                    // 'border',
                    'border-color',
                    'border-width',
                    'bottom',
                    // 'font',
                    'font-weight',
                    'gap',
                    'height',
                    'left',
                    // 'letter-spacing',
                    // 'line-height',
                    'margin',
                    'max-height',
                    'max-width',
                    'min-height',
                    'min-width',
                    // 'outline',
                    'outline-color',
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

                timing: {
                    $: 'fast',

                    'accent-color': 'fast',
                    'background-color': 'fast',
                    'border-color': 'fast',
                    border: 'fast',
                    'box-shadow': 'fast',
                    color: 'fast',
                    'font-weight': 'fast',
                    font: 'fast',
                    'letter-spacing': 'fast',
                    opacity: 'fast',
                    'outline-color': 'fast',
                    outline: 'fast',
                    'text-decoration-color': 'fast',
                    'text-indent': 'fast',
                    'text-shadow': 'fast',
                    'vertical-align': 'fast',
                    visibility: 'fast',
                    width: 'fast',
                    'word-spacing': 'fast',
                    'z-index': 'fast',

                    'aspect-ratio': 'normal',
                    'border-width': 'normal',
                    bottom: 'normal',
                    'flex-basis': 'normal',
                    gap: 'normal',
                    height: 'normal',
                    left: 'normal',
                    'line-height': 'normal',
                    margin: 'normal',
                    'max-height': 'normal',
                    'max-width': 'normal',
                    'min-height': 'normal',
                    'min-width': 'normal',
                    'transform-origin': 'normal',
                    transform: 'normal',
                    translate: 'normal',
                    top: 'normal',
                    padding: 'normal',
                    right: 'normal',
                    rotate: 'normal',
                    scale: 'normal',
                },
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

    public toScssVars(): Tokens_CSS_Transition.ScssVars {
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
        | 'accent-color'
        | 'aspect-ratio'
        | 'background-color'
        | 'border'
        | 'border-color'
        | 'border-width'
        | 'bottom'
        | 'box-shadow'
        | 'color'
        | 'flex-basis'
        | 'gap'
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

            timing: {
                /**
                 * A time key to use when motion is disabled.
                 */
                $: string;
            } & {
                /**
                 * A time key to use for this property when motion is enabled.
                 */
                [ K in AllowedProperties ]: string;
            };
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

    /**
     * @since ___PKG_VERSION___
     */
    export type ScssVars = Data;
}