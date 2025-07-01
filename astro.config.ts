
import { astroConfig } from './src/astro/functions/astroConfig.js';

import partialConfig from './.scripts/build.config.js';
import pkg from './package.json';

export default astroConfig( new URL( pkg.homepage ), partialConfig );