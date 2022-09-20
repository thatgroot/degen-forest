<div class="flex">
	<div class="flex flex-col relative rounded-xl transition-all ease-in-out hover:scale-90 w-max">
		<img
			draggable="false"
			loading="lazy"
			alt="..."
			class="rounded-xl"
			src="https://img-cdn.magiceden.dev/rs:fill:252:189:0:0/plain/https://v5.airtableusercontent.com/v1/7/7/1662595200000/rpsJNeGg_StEM3wzAem2vA/t3_EGqU42d-Mpg1EEaDF-ILa1N5hGLLFpmMPa5sxoKEU0TJtKgBFGSb1Ssnazbs-dalYHveMxKl2XKjjgrnqVw/9wvAZIQsY34hkwLjlMe51I9DBEuDzQ3qJxT58gv_LIQ"
			style="background-color: transparent;"
		/>
		<div class="w-full text-sm whitespace-nowrap flex flex-col items-center rounded-b-xl ">
			<span class="text-white-1">Laidback Lions Gen 2</span><span
				class="text-accent flex items-center space-x-2 text-xs"
				><span>Laidback Lions Gen 2</span></span
			>
			<div class="bg-gray-200 text-xs py-1 px-2 mt-3 text-primary flex space-x-2">
				<span class="text-success">LIVE</span>
			</div>

			<div class="flex gap-1">
				<slot />
			</div>
		</div>
	</div>
</div>
