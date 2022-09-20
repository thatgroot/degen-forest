<script lang="ts">
	import Input from '$lib/form/Input.svelte';
	import clock from '$lib/assets/svg/icons/clock.svg';

	export let toggle_calendar: any = () => {};
</script>

<div
	id="offer_calendar"
	class="md:p-8 p-5 hidden bg-primary  border border-secondary rounded-lg absolute bottom-12 left-0 right-0"
>
	<div class="px-4 flex items-center justify-between">
		<span
			tabindex="0"
			class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
			>October 2020
		</span>
		<div class="flex items-center">
			<button
				aria-label="calendar backward"
				class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-chevron-left"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<polyline points="15 6 9 12 15 18" />
				</svg>
			</button>
			<button
				aria-label="calendar forward"
				class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler  icon-tabler-chevron-right"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<polyline points="9 6 15 12 9 18" />
				</svg>
			</button>
		</div>
	</div>
	<div class="flex items-center flex-col gap-2 justify-between pt-12 overflow-x-auto">
		<table class="w-full">
			<thead>
				<tr>
					{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
						<th>
							<div class="w-full flex justify-center">
								<p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
									{day}
								</p>
							</div>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				<tr>
					{#each ['', '', '', 1, 2, 3, 4] as date}
						<td class="p-2 rounded-full hover:bg-accent" on:click={toggle_calendar}>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">{date}</p>
							</div>
						</td>
					{/each}
				</tr>
				<tr>
					{#each [5, 6, 7, 8, 9, 10, 11] as date}
						<td class="p-2 rounded-full hover:bg-accent" on:click={toggle_calendar}>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-800 dark:text-gray-100">{date}</p>
							</div>
						</td>
					{/each}
				</tr>
				<tr>
					{#each [12, 13, 14, 15, 16, 17, 18] as date}
						<td class="p-2 rounded-full hover:bg-accent" on:click={toggle_calendar}>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-800 dark:text-gray-100">{date}</p>
							</div>
						</td>
					{/each}
				</tr>
				<tr>
					{#each [19, 20, 21, 22, 23, 24, 25] as date}
						<td class="p-2 rounded-full hover:bg-accent" on:click={toggle_calendar}>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-800 dark:text-gray-100">{date}</p>
							</div>
						</td>
					{/each}
				</tr>
				<tr>
					{#each [26, 27, 28, 29, 30, 31, ''] as date}
						<td class="p-2 rounded-full hover:bg-accent" on:click={toggle_calendar}>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">{date}</p>
							</div>
						</td>
					{/each}
				</tr>
			</tbody>
		</table>

		<div class="w-full">
			<Input border="secondary" round="md" prefix={clock} placeholder="hh:mm" />
		</div>
	</div>
</div>
