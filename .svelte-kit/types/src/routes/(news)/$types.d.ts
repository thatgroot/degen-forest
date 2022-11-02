import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type LayoutData = Record<never, never>;
export type LayoutServerData = null;