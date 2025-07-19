/*
 * @package @maddimathon/design-system-utilities
 * @author Maddi Mathon (www.maddimathon.com)
 * 
 * @license MIT
 */

// import type { Reflection } from 'typedoc';
import type { MarkdownApplication, MarkdownThemeContext } from 'typedoc-plugin-markdown';

import * as YAML from 'yaml';

import * as z from 'zod';

import {
    // typeOf,
} from '@maddimathon/utility-typescript/functions';

import {
    // VariableInspector,
} from '@maddimathon/utility-typescript/classes';

import {
    isObjectEmpty,
} from '@maddimathon/build-utilities/internal';

import { parseKind } from './lib/parseKind.js';
import { parseCommentDisplayPart } from './lib/parseCommentDisplayPart.js';


export const astroCollectionSchema = z.object( {

    title: z.string(),
    customSlug: z.string().optional(),

    fullName: z.string(),
    typeDocID: z.number(),
    kind: parseKind.returnSchema,

    // pageHeadings: z.array( z.object( {
    //     link: z.string(),
    //     text: z.string(),
    //     level: z.number().optional(),
    //     kind: parseKind.returnSchema.optional(),
    //     classes: z.string().optional(),
    // } ) ),

    pageSections: z.array( z.object( {
        title: z.string(),
        headings: z.array( z.object( {
            link: z.string(),
            text: z.string(),
            level: z.number().optional(),
            kind: parseKind.returnSchema.optional(),
            classes: z.string().optional(),
        } ) ),
    } ) ),


    blockTags: z.array( z.object( {
        tag: z.string(),

        // content: z.array( z.string() ),
        content: z.array( z.object( {
            kind: z.string(),
            text: z.string(),

            tag: z.string().optional(),
            target: z.string().optional(),
            targetAnchor: z.string().optional(),
            tsLinkText: z.string().optional(),
        } ) ),

        name: z.string().optional(),
    } ) ),

    modifierTags: z.array( z.string() ),


    flags: z.object( {
        abstract: z.literal( true ),
        const: z.literal( true ),
        experimental: z.literal( true ),
        external: z.literal( true ),
        inherited: z.literal( true ),
        optional: z.literal( true ),
        private: z.literal( true ),
        protected: z.literal( true ),
        public: z.literal( true ),
        readonly: z.literal( true ),
        rest: z.literal( true ),
        static: z.literal( true ),
    } ).partial().optional(),
} );

const flagKeys = astroCollectionSchema.required().shape.flags.keyof();

export type FlagKeys = z.infer<typeof flagKeys>;

export interface TypeDocMarkdownFrontmatter extends z.infer<typeof astroCollectionSchema> {
    argsKeys?: any;
};

/**
 * Creates a valid YAML string to insert at the beginning of the file.
 */
export function getMarkdownFrontmatterString( args: MarkdownThemeContext ) {

    // type _ParentReturn = { name: string; parent?: _ParentReturn; };

    // const modelParentifier = (
    //     _modelParent?: Reflection,
    //     __isRecursiveCall = false,
    // ): _ParentReturn | undefined => {

    //     // returns
    //     if ( !_modelParent ) {
    //         return undefined;
    //     }

    //     const _obj = {
    //         name: _modelParent.name,
    //         // kind: _modelParent.kind,
    //         kind: parseKind( _modelParent.kind ),
    //         // kindName: parseKind( _modelParent.kind ),
    //         id: _modelParent.id,
    //     } as const;

    //     // returns
    //     if ( _obj.kind === 'Project' ) {
    //         return undefined;
    //     }

    //     // returns
    //     if ( _modelParent.parent ) {

    //         return {
    //             ..._obj,
    //             parent: modelParentifier( _modelParent.parent, true ),
    //         };
    //     }

    //     return __isRecursiveCall ? {
    //         ..._obj,
    //         name: _modelParent.name,
    //     } : undefined;
    // };

    const flags: TypeDocMarkdownFrontmatter[ 'flags' ] = {
        abstract: args.page.model.flags.isAbstract || undefined,
        const: args.page.model.flags.isConst || undefined,
        external: args.page.model.flags.isExternal || undefined,
        inherited: args.page.model.flags.isInherited || undefined,
        optional: args.page.model.flags.isOptional || undefined,
        private: args.page.model.flags.isPrivate || undefined,
        protected: args.page.model.flags.isProtected || undefined,
        public: args.page.model.flags.isPublic || undefined,
        readonly: args.page.model.flags.isReadonly || undefined,
        rest: args.page.model.flags.isRest || undefined,
        static: args.page.model.flags.isStatic || undefined,

        experimental: undefined,
    };

    const blockTags = Array.from( args.page.model.comment?.blockTags ?? [] );

    const modifierTags = Array.from( args.page.model.comment?.modifierTags ?? [] );

    if ( args.page.model.comment?.modifierTags ) {

        for ( const _tag of args.page.model.comment.modifierTags ) {
            modifierTags.push( _tag );

            switch ( _tag ) {

                case '@experimental':
                    flags.experimental = true;
                    break;
            }
        }
    }

    // type ArgsKeys = { [ key: string ]: string | ArgsKeys; };

    // const objectKeyParser = <T_Obj extends { [ key: string ]: any; } | any[]>(
    //     _obj: T_Obj,
    //     _recursionLevel: number = 0,
    // ): T_Obj extends any[] ? string | ArgsKeys : ArgsKeys => {

    //     const _keys: ArgsKeys = {};

    //     // returns
    //     if ( Array.isArray( _obj ) ) {
    //         // @ts-expect-error
    //         return 'array';
    //     }

    //     for ( const __key in _obj ) {

    //         // _keys[ __key ] = VariableInspector.stringify( { var: _obj[ __key ] }, {

    //         //     includePrefix: false,

    //         //     childArgs: {
    //         //         includeValue: false,
    //         //     },
    //         // } );

    //         const __type = typeof _obj[ __key ];

    //         // continues
    //         if ( [
    //             'function',
    //             'undefined',
    //         ].includes( __type ) ) {
    //             continue;
    //         }

    //         const _shouldRecur = _recursionLevel < 3
    //             && __type === 'object'
    //             && !isObjectEmpty( _obj[ __key ] );

    //         _keys[ __key ] = _shouldRecur
    //             ? objectKeyParser( _obj[ __key ] as object, 1 + _recursionLevel )
    //             : typeOf( _obj[ __key ] as typeOf.TestType );
    //     }

    //     return _keys;
    // };

    // const argsKeys: ArgsKeys = objectKeyParser( args );

    args.page.frontmatter = {
        ...args.page.frontmatter,

        // argsKeys,

        title: args.page.model.name,
        customSlug: args.page.url.toLowerCase().replace( /\.md$/gi, '' ) || undefined,

        kind: parseKind( args.page.model.kind ),
        typeDocID: args.page.model.id,

        fullName: args.page.model.getFriendlyFullName(),

        // parent: modelParentifier( args.page.model.parent ),

        flags: isObjectEmpty( flags ) ? undefined : flags,
        // comment: args.page.model.comment,

        modifierTags,

        blockTags: blockTags.map( _tag => ( {
            tag: _tag.tag,
            content: parseCommentDisplayPart( _tag.content ),
            name: _tag.name,
        } ) ),

        // pageHeadings: args.page.pageHeadings.map( _hdg => ( {
        //     link: _hdg.link,
        //     text: _hdg.text,
        //     level: _hdg.level,
        //     kind: _hdg.kind ? parseKind( _hdg.kind ) : _hdg.kind,
        //     classes: _hdg.classes,
        // } ) ),

        pageSections: args.page.pageSections.map( _sec => ( {
            title: _sec.title,
            headings: _sec.headings.map( _hdg => ( {
                link: _hdg.link,
                text: _hdg.text,
                level: _hdg.level,
                kind: _hdg.kind ? parseKind( _hdg.kind ) : _hdg.kind,
                classes: _hdg.classes,
            } ) ),
        } ) ),

    } satisfies TypeDocMarkdownFrontmatter;

    const frontmatter = '---\n' + YAML.stringify( args.page.frontmatter ).trim() + '\n---\n';

    return frontmatter;
}

/**
 * Export the plugin
 */
export function load( app: MarkdownApplication ) {
    app.renderer.markdownHooks.on( 'page.begin', getMarkdownFrontmatterString );
}