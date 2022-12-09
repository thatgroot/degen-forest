import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = undefined;
export type PageData = Omit<import('../../../../$types.js').LayoutData, keyof import('../../../$types.js').LayoutData> & import('../../../$types.js').LayoutData;
export type PageServerData = null;