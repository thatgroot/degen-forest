import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = Kit.AwaitedErrors<typeof import('./proxy+page.server.js').POST> | Kit.AwaitedErrors<typeof import('./proxy+page.server.js').PATCH>;
export type PageData = Omit<import('../$types.js').LayoutData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>;
export type PageServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>;
export type PageServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<RouteParams, import('../$types.js').LayoutServerData, OutputData>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type Action = Kit.Action<RouteParams>