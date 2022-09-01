<script lang="ts">
	import search from '$lib/assets/svg/icons/search.svg';
</script>

<div class="bg-secondary rounded-full px-4 mx-auto flex  flex-row gap-6">
	<img src={search} alt="search here" />
	<input
		placeholder="Search Collections and Creators"
		class="bg-transparent outline-none h-8 target:h11  rounded-full text-primary tablet:min-w-[30rem]"
	/>
</div>
