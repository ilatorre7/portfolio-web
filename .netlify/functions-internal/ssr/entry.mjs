import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_48-diW16.mjs';

const _page0  = () => import('./chunks/generic_cih8oPbh.mjs');
const _page1  = () => import('./chunks/index_QITiBcjY.mjs');
const _page2  = () => import('./chunks/experience_Gwu2jueP.mjs');
const _page3  = () => import('./chunks/projects_7Dxuge4r.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/experience.astro", _page2],["src/pages/projects.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
