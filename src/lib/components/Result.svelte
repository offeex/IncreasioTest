<script lang="ts">
	export let dataType: String;
	export let average: number;
	export let change: number;
</script>

<div class="bg-[#1D1D41] h-[170px] p-4 rounded-3xl flex items-center justify-between">
	<div class="bg-[#D9D9D9] w-[140px] h-[140px] rounded-xl" />

	<div class="flex flex-col ml-3 gap-2 w-auto whitespace-nowrap">
		<p>Average {dataType}</p>
		<h1 class="leading-none">${average.toFixed()}k</h1>
		<p class="text-xs tracking-[0.75px] text-[#79CC6C]">Click Now</p>
	</div>

	<div class="flex items-center">
		{#if change > 0}
			<img src="./icons/arrowup.svg" alt="arrow" class="inline ml-6" />
		{:else}
			<img src="./icons/arrowdown.svg" alt="arrow" class="inline ml-6" />
		{/if}

		<span class="text-[10px] tracking-[0.5px] font-bold text-[#79CC6C] ml-2">
			{((change / average) * 100).toFixed()}%
		</span>
	</div>
</div>
