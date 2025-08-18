
import type { AstroUserConfig } from 'astro';

import { astroConfig } from './src/astro/functions/astroConfig.js';

import partialConfig from './.scripts/build.config.js';
import pkg from './package.json';

const config: AstroUserConfig = astroConfig( new URL( pkg.homepage ), partialConfig );

if ( !config.experimental ) {
    config.experimental = {};
}

config.experimental.contentIntellisense = true;

if ( !config.server ) {
    config.server = {};
}

if ( typeof config.server != 'function' ) {
    config.server.port = 8888;
}

export default config;