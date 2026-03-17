
import type { AstroUserConfig } from 'astro';

import { astroConfig } from './src/astro/functions/astroConfig.js';

import partialConfig from './.scripts/build.config.js';
import pkg from './package.json';

const config: AstroUserConfig = astroConfig(
    new URL( pkg.homepage ),
    partialConfig,
    {
        publicDir: 'src/docs/_public',
    },
);

if ( !config.server ) {
    config.server = {};
}

if ( typeof config.server != 'function' ) {
    config.server.port = 8888;
}

export default config;