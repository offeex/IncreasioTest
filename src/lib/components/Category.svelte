<script lang="ts">
	export let iconPath: String;
	export let name: String;
</script>

<div class="bg-[#1D1D41] w-28 h-28 p-3 rounded-3xl relative">
	<div class="bg-[#2F2F6B] w-full h-full rounded-2xl flex">
		<img src="./icons/{iconPath}" alt="icon lmao" class="w-12 h-12 m-auto" />
	</div>
	<span class="absolute -bottom-8 left-1/4 text-[15px]">{name}</span>
</div>
