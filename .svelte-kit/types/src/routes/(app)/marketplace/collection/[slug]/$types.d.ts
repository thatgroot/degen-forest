import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> { slug: string }
interface LayoutParams extends RouteParams {}

export type LayoutData = Record<never, never>;
export type LayoutServerData = null;