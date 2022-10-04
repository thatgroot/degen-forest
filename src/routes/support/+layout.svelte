<script lang="ts">
	import '../../app.css';
	let toggle: boolean = false;
</script>

<main class="p-0 m-0">
	<div>
		<!-- body -->
		<div class="flex flex-col tablet:flex-row">
		
			<slot />
		
		</div>
	</div>
</main>
