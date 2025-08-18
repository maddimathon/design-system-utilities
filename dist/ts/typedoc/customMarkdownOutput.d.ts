import * as UA from '@maddimathon/utility-astro';
import type { MarkdownApplication } from 'typedoc-plugin-markdown';
import * as z from 'zod';
export declare const typeDocSchemata: UA.typedoc.Schemata<z.ZodObject<{
    readonly name: z.ZodString;
    readonly kind: z.ZodUnion<[z.ZodLiteral<"Accessor">, z.ZodLiteral<"CallSignature">, z.ZodLiteral<"Class">, z.ZodLiteral<"Constructor">, z.ZodLiteral<"ConstructorSignature">, z.ZodLiteral<"Document">, z.ZodLiteral<"Enum">, z.ZodLiteral<"EnumMember">, z.ZodLiteral<"Function">, z.ZodLiteral<"GetSignature">, z.ZodLiteral<"IndexSignature">, z.ZodLiteral<"Interface">, z.ZodLiteral<"Method">, z.ZodLiteral<"Module">, z.ZodLiteral<"Namespace">, z.ZodLiteral<"Parameter">, z.ZodLiteral<"Project">, z.ZodLiteral<"Property">, z.ZodLiteral<"Reference">, z.ZodLiteral<"SetSignature">, z.ZodLiteral<"TypeAlias">, z.ZodLiteral<"TypeLiteral">, z.ZodLiteral<"TypeParameter">, z.ZodLiteral<"Variable">]>;
    readonly typeDocId: z.ZodNumber;
    readonly parent: z.ZodOptional<z.ZodType<UA.typedoc.Schemata.Metadata.Reflection>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    kind: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable";
    typeDocId: number;
    parent?: UA.typedoc.Schemata.Metadata.Reflection | undefined;
}, {
    name: string;
    kind: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable";
    typeDocId: number;
    parent?: UA.typedoc.Schemata.Metadata.Reflection | undefined;
}>, z.ZodObject<{
    readonly fullName: z.ZodString;
    readonly customSlug: z.ZodOptional<z.ZodString>;
    readonly splitName: z.ZodArray<z.ZodString, "many">;
    readonly flags: z.ZodOptional<z.ZodObject<{
        abstract: z.ZodOptional<z.ZodLiteral<true>>;
        const: z.ZodOptional<z.ZodLiteral<true>>;
        experimental: z.ZodOptional<z.ZodLiteral<true>>;
        external: z.ZodOptional<z.ZodLiteral<true>>;
        inherited: z.ZodOptional<z.ZodLiteral<true>>;
        optional: z.ZodOptional<z.ZodLiteral<true>>;
        private: z.ZodOptional<z.ZodLiteral<true>>;
        protected: z.ZodOptional<z.ZodLiteral<true>>;
        public: z.ZodOptional<z.ZodLiteral<true>>;
        readonly: z.ZodOptional<z.ZodLiteral<true>>;
        rest: z.ZodOptional<z.ZodLiteral<true>>;
        static: z.ZodOptional<z.ZodLiteral<true>>;
    }, "strip", z.ZodTypeAny, {
        abstract?: true | undefined;
        const?: true | undefined;
        experimental?: true | undefined;
        external?: true | undefined;
        inherited?: true | undefined;
        optional?: true | undefined;
        private?: true | undefined;
        protected?: true | undefined;
        public?: true | undefined;
        readonly?: true | undefined;
        rest?: true | undefined;
        static?: true | undefined;
    }, {
        abstract?: true | undefined;
        const?: true | undefined;
        experimental?: true | undefined;
        external?: true | undefined;
        inherited?: true | undefined;
        optional?: true | undefined;
        private?: true | undefined;
        protected?: true | undefined;
        public?: true | undefined;
        readonly?: true | undefined;
        rest?: true | undefined;
        static?: true | undefined;
    }>>;
    readonly modifierTags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    readonly blockTags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        content: z.ZodArray<z.ZodObject<{
            kind: z.ZodString;
            text: z.ZodString;
            tag: z.ZodOptional<z.ZodString>;
            target: z.ZodOptional<z.ZodString>;
            targetAnchor: z.ZodOptional<z.ZodString>;
            tsLinkText: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }, {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }>, "many">;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tag: string;
        content: {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }[];
        name?: string | undefined;
    }, {
        tag: string;
        content: {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }[];
        name?: string | undefined;
    }>, "many">>;
    readonly pageSections: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        headings: z.ZodArray<z.ZodObject<{
            link: z.ZodString;
            text: z.ZodString;
            level: z.ZodOptional<z.ZodNumber>;
            kind: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"Accessor">, z.ZodLiteral<"CallSignature">, z.ZodLiteral<"Class">, z.ZodLiteral<"Constructor">, z.ZodLiteral<"ConstructorSignature">, z.ZodLiteral<"Document">, z.ZodLiteral<"Enum">, z.ZodLiteral<"EnumMember">, z.ZodLiteral<"Function">, z.ZodLiteral<"GetSignature">, z.ZodLiteral<"IndexSignature">, z.ZodLiteral<"Interface">, z.ZodLiteral<"Method">, z.ZodLiteral<"Module">, z.ZodLiteral<"Namespace">, z.ZodLiteral<"Parameter">, z.ZodLiteral<"Project">, z.ZodLiteral<"Property">, z.ZodLiteral<"Reference">, z.ZodLiteral<"SetSignature">, z.ZodLiteral<"TypeAlias">, z.ZodLiteral<"TypeLiteral">, z.ZodLiteral<"TypeParameter">, z.ZodLiteral<"Variable">]>>;
            classes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }, {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        headings: {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }[];
    }, {
        title: string;
        headings: {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    pageSections: {
        title: string;
        headings: {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }[];
    }[];
    splitName: string[];
    flags?: {
        abstract?: true | undefined;
        const?: true | undefined;
        experimental?: true | undefined;
        external?: true | undefined;
        inherited?: true | undefined;
        optional?: true | undefined;
        private?: true | undefined;
        protected?: true | undefined;
        public?: true | undefined;
        readonly?: true | undefined;
        rest?: true | undefined;
        static?: true | undefined;
    } | undefined;
    blockTags?: {
        tag: string;
        content: {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }[];
        name?: string | undefined;
    }[] | undefined;
    customSlug?: string | undefined;
    modifierTags?: string[] | undefined;
}, {
    fullName: string;
    pageSections: {
        title: string;
        headings: {
            link: string;
            text: string;
            kind?: "Accessor" | "CallSignature" | "Class" | "Constructor" | "ConstructorSignature" | "Document" | "Enum" | "EnumMember" | "Function" | "GetSignature" | "IndexSignature" | "Interface" | "Method" | "Module" | "Namespace" | "Parameter" | "Project" | "Property" | "Reference" | "SetSignature" | "TypeAlias" | "TypeLiteral" | "TypeParameter" | "Variable" | undefined;
            level?: number | undefined;
            classes?: string | undefined;
        }[];
    }[];
    splitName: string[];
    flags?: {
        abstract?: true | undefined;
        const?: true | undefined;
        experimental?: true | undefined;
        external?: true | undefined;
        inherited?: true | undefined;
        optional?: true | undefined;
        private?: true | undefined;
        protected?: true | undefined;
        public?: true | undefined;
        readonly?: true | undefined;
        rest?: true | undefined;
        static?: true | undefined;
    } | undefined;
    blockTags?: {
        tag: string;
        content: {
            text: string;
            kind: string;
            tag?: string | undefined;
            target?: string | undefined;
            targetAnchor?: string | undefined;
            tsLinkText?: string | undefined;
        }[];
        name?: string | undefined;
    }[] | undefined;
    customSlug?: string | undefined;
    modifierTags?: string[] | undefined;
}>>;
export declare const flagKeys: z.ZodEnum<["rest", "abstract", "const", "experimental", "external", "inherited", "optional", "private", "protected", "public", "readonly", "static"]>;
export declare namespace TypeDocSchemata {
    type FlagKeys = z.infer<typeof flagKeys>;
    namespace Metadata {
        type Reflection = z.infer<typeof typeDocSchemata.metadata.reflection>;
        type Page = z.infer<typeof typeDocSchemata.metadata.page>;
    }
}
/**
 * This is the function run by typeDoc for this plugin.
 */
export declare function load(app: MarkdownApplication): void;
//# sourceMappingURL=customMarkdownOutput.d.ts.map