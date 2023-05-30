<script lang="ts">
	export let dataType: String;
</script>

<div
	class="bg-[#1D1D41] h-[170px] p-4 rounded-3xl flex items-center relative"
>
	<div class="bg-[#D9D9D9] w-[140px] h-[140px] rounded-xl" />

	<div class="flex flex-col ml-3 gap-2 w-auto">
		<p>Average {dataType}</p>
		<div class="flex flex-row items-center w-full">
			<h1 class="leading-none">$500k</h1>
				<img src="./icons/arrowup.svg" alt="arrow" class="inline ml-6" />
				<span class="text-[10px] tracking-[0.5px] font-bold text-[#79CC6C] ml-2">
					0.5%
				</span>
		</div>
		<p class="text-xs tracking-[0.75px] text-[#79CC6C]">Click Now</p>
	</div>
</div>
