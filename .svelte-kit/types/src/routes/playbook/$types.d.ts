import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = undefined;
export type PageData = Omit<import('../$types.js').LayoutData, keyof LayoutData> & LayoutData;
export type PageServerData = null;
export type LayoutData = import('../$types.js').LayoutData;
export type LayoutServerData = null;