export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png", "images/art/degods.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
	mimeTypes: { ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
	_: {
		entry: { "file": "_app/immutable/start-7dcd0935.js", "imports": ["_app/immutable/start-7dcd0935.js", "_app/immutable/chunks/index-3819e20c.js", "_app/immutable/chunks/singletons-9a94afa0.js", "_app/immutable/chunks/index-441f76bf.js"], "stylesheets": [] },
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js')
		],
		routes: [
			{
				id: "(app)",
				pattern: /^\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 5 },
				endpoint: null
			},
			{
				id: "playbook",
				pattern: /^\/playbook\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 3], "errors": [1, null], "leaf": 22 },
				endpoint: null
			},
			{
				id: "support",
				pattern: /^\/support\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 4], "errors": [1, null], "leaf": 23 },
				endpoint: null
			},
			{
				id: "(app)/airdrops",
				pattern: /^\/airdrops\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 6 },
				endpoint: null
			},
			{
				id: "(app)/compo",
				pattern: /^\/compo\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 9 },
				endpoint: null
			},
			{
				id: "(app)/dex",
				pattern: /^\/dex\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 10 },
				endpoint: null
			},
			{
				id: "(app)/launchpad",
				pattern: /^\/launchpad\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 11 },
				endpoint: null
			},
			{
				id: "(app)/marketplace",
				pattern: /^\/marketplace\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 14 },
				endpoint: null
			},
			{
				id: "(app)/news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 20 },
				endpoint: null
			},
			{
				id: "(app)/staking",
				pattern: /^\/staking\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 21 },
				endpoint: null
			},
			{
				id: "(app)/analytics/defi",
				pattern: /^\/analytics\/defi\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 7 },
				endpoint: null
			},
			{
				id: "(app)/analytics/nft",
				pattern: /^\/analytics\/nft\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 8 },
				endpoint: null
			},
			{
				id: "(app)/launchpad/apply",
				pattern: /^\/launchpad\/apply\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 12 },
				endpoint: null
			},
			{
				id: "(app)/launchpad/launches",
				pattern: /^\/launchpad\/launches\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 13 },
				endpoint: null
			},
			{
				id: "(app)/marketplace/auctions",
				pattern: /^\/marketplace\/auctions\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 15 },
				endpoint: null
			},
			{
				id: "(app)/marketplace/collection",
				pattern: /^\/marketplace\/collection\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 16 },
				endpoint: null
			},
			{
				id: "(app)/marketplace/drop-calendar",
				pattern: /^\/marketplace\/drop-calendar\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 17 },
				endpoint: null
			},
			{
				id: "(app)/marketplace/asset",
				pattern: /^\/marketplace\/asset\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 18 },
				endpoint: null
			},
			{
				id: "(app)/marketplace/popular-collections",
				pattern: /^\/marketplace\/popular-collections\/?$/,
				names: [],
				types: [],
				page: { "layouts": [0, 2], "errors": [1, null], "leaf": 19 },
				endpoint: null
			}
		],
		matchers: async () => {

			return {};
		}
	}
};
