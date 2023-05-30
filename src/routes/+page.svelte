<script lang="ts">
	import AnalyticsText from "$lib/components/AnalyticsText.svelte";
	import Category from "$lib/components/Category.svelte";
	import Result from "$lib/components/Result.svelte";
	import Chart from "$lib/components/Chart.svelte";
  	import { revenueStream } from "$lib/scripts/storage";

	const currentYear = revenueStream.averageRevenue.length - 1

	const cats = revenueStream.categories
	const icons = ['fire', 'apple', 'money'].map(v => `./icons/${v}.svg`)

	const avRev = revenueStream.averageRevenue[currentYear]
	const avIn = revenueStream.averageIncome[currentYear]
	const avOut = revenueStream.averageOutcome[currentYear]
	
	let currentCat = cats[0]
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=DM+Sans"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex" >
	<!-- Sidebar -->
	<div class="flex flex-col py-8 gap-5 items-center min-w-[96px] rounded-r-2xl bg-white overflow">
		<img src="./icons/kozak.jpg" alt="kozak" class="w-[50px] rounded-full" />
		<hr class="w-[70px] border-t-2 border-solid border-gray-200" />
		<img src="./icons/profile.svg" alt="profile" />
		<img src="./icons/setting.svg" alt="setting" />
	</div>

	<!-- The rest -->
	<div class="m-[28px] w-full">
		<h2>Dashboard</h2>

		<!-- Categories -->
		<div class="mt-6">
			<h3>Categories</h3>
			<div class="mt-4 flex flex-row gap-5 w-full">
				{#each cats as cat, i}
					<Category bind:currentCat {cat} icon={icons[i]}/>
				{/each}
			</div>
		</div>

		<div class="flex flex-row mt-8 gap-8 max-w-full">
			<!-- Analytics -->
			<div class="w-full">
				<!-- Analystics header -->
				<div class="prikol">
					<h3 class="frik">Analytics</h3>
					<span class="frik flex items-center">
						<AnalyticsText text="Income" />
					</span>
					<span class="frik ml-4 flex items-center">
						<AnalyticsText text="Last year income">
							<div class="w-full h-full rounded-full bg-violet-500" />
						</AnalyticsText>
					</span>
				</div>

				<!-- Chart itself -->
				<div class="mt-2 min-w-[700px] w-full h-[575px] bg-[#1D1D41] rounded-3xl">
					{#key currentCat}
						<Chart cat={currentCat} {currentYear} />
					{/key}
				</div>
			</div>

			<!-- Results -->
			<div class="flex flex-col">
				<h3>Results</h3>
				<div class="mt-2 flex flex-col gap-6">
					<Result dataType="Revenue" average={avRev.averageRevenue} change={avRev.revenueChange}/>
					<Result dataType="Income" average={avIn.averageIncome} change={avIn.incomeChange}/>
					<Result dataType="Outcome" average={avOut.averageOutcome} change={avOut.averageOutcome}/>
				</div>
			</div>
		</div>
		
	</div>
</div>

<style>
	:global(body) {
		background-color: #13132e;

		font-family: DM Sans, sans-serif;
		font-weight: 700;
		letter-spacing: 1.25px;

		color: white;
	}

	:global(h1) {
		font-size: 55px;
		letter-spacing: 2px;
	}

	h2 {
		font-size: 40px;
		letter-spacing: 2px;
	}

	h3 {
		font-size: 24px;
		letter-spacing: 1.5px;
	}

	.prikol {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.frik:first-child {
		margin-right: auto;
	}
</style>
