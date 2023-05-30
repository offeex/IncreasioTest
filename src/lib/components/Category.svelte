<script lang="ts">
	export let cat: ICategoryData
	export let icon: string

	// Little handy trick here
	export let currentCat: ICategoryData
</script>

<div class="flex flex-col items-center justify-start gap-3">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="bg-[#1D1D41] w-28 h-28 p-3 rounded-3xl hover:cursor-pointer" on:click={() => currentCat = cat}>
		<div class="bg-[#2F2F6B] w-full h-full rounded-2xl flex">
			<img src="{icon}" alt="lmao" class="w-12 h-12 m-auto" />
		</div>
	</div>
	<span class="text-[15px]">{cat.name}</span>
</div>
