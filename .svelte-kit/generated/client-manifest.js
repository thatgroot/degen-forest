export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const dictionary = {
	"(app)": [5,[2]],
	"playbook": [24,[3]],
	"support": [25,[4]],
	"(app)/airdrops": [6,[2]],
	"(app)/compo": [9,[2]],
	"(app)/dex": [10,[2]],
	"(app)/launchpad": [11,[2]],
	"(app)/marketplace": [14,[2]],
	"(app)/news": [22,[2]],
	"(app)/staking": [23,[2]],
	"(app)/analytics/defi": [7,[2]],
	"(app)/analytics/nft": [8,[2]],
	"(app)/launchpad/apply": [12,[2]],
	"(app)/launchpad/launches": [13,[2]],
	"(app)/marketplace/asset": [15,[2]],
	"(app)/marketplace/auctions": [16,[2]],
	"(app)/marketplace/collection": [17,[2]],
	"(app)/marketplace/drop-calendar": [20,[2]],
	"(app)/marketplace/popular-collections": [21,[2]],
	"(app)/marketplace/collection/[contract]": [18,[2]],
	"(app)/marketplace/collection/[contract]/[token_id]": [19,[2]]
};