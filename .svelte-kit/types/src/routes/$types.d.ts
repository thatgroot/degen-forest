import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = undefined;
export type PageData = Omit<LayoutData, keyof LayoutData & null> & LayoutData & null;
export type PageLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Load<RouteParams, null, LayoutData, OutputData>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageServerData = null;
export type LayoutData = Record<never, never>;
export type LayoutServerData = null;