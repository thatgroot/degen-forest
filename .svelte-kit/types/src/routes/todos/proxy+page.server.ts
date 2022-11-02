import { error } from '@sveltejs/kit';
import { api } from './api';
import type { PageServerLoad, Action } from './$types';

type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
	pending_delete: boolean;
};

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	// locals.userid comes from src/hooks.js
	const response = await api('GET', `todos/${locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			todos: [] as Todo[]
		};
	}

	if (response.status === 200) {
		return {
			todos: (await response.json()) as Todo[]
		};
	}

	throw error(response.status);
};

export const POST = async ({ request, locals }: Parameters<Action>[0]) => {
	const form = await request.formData();

	await api('POST', `todos/${locals.userid}`, {
		text: form.get('text')
	});
};

export const PATCH = async ({ request, locals }: Parameters<Action>[0]) => {
	const form = await request.formData();

	await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
		text: form.has('text') ? form.get('text') : undefined,
		done: form.has('done') ? !!form.get('done') : undefined
	});
};

export const DELETE = async ({ request, locals }: Parameters<Action>[0]) => {
	const form = await request.formData();

	await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
};
