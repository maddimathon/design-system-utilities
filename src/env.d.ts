/// <reference path="../.astro/types.d.ts" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
    readonly BRAND_KIT_VERSION: string;
    readonly BRAND_KIT_VERSION_STYLESHEET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
