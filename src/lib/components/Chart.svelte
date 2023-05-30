<script lang="ts">
	import { Line } from "svelte-chartjs";

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		type ChartData,
		type ChartOptions,
	} from "chart.js";
	import dateFormat from "dateformat";

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	);

	export let cat: ICategoryData
	export let currentYear: number

	const yearData = getRevenueInMonths(cat.yearlyIncomeData[currentYear])
	const prevYearData = getRevenueInMonths(cat.yearlyIncomeData[currentYear - 1])

	function getRevenueInMonths(data: IYearlyIncomeData) {
		return data.monthlyIncomeData
		.map(m => m.dailyIncomeData
		.flatMap(d => d.revenue)
		.reduce((p, c) => p + c))
	}

	function getMonthNames() {
		return Array(12).fill(0).map((_, i) => {
			const date = new Date()
			date.setMonth(i)
			const res = i == 1 ? "Feb" : date.toLocaleString('en-US', { month: 'short' })
			return res
		})
	}

	const data: ChartData<"line", number[]> = {
		xLabels: getMonthNames(),
		datasets: [
			{
				fill: false,
				tension: 0.3,
				spanGaps: true,
				stepped: false,
				borderColor: "white",
				pointBorderColor: "rgba(0, 0, 0, 0)",
				pointHoverBackgroundColor: "#6359E9",
				pointHoverBorderColor: "#FFFFFF",
				pointHoverRadius: 8,
				pointHoverBorderWidth: 4,
				data: yearData,
			},
			{
				tension: 0.3,
				borderWidth: 1.5,
				borderColor: "rgb(99, 89, 233)",
				borderCapStyle: "round",
				borderDash: [15, 15],
				pointBorderColor: "rgba(0, 0, 0, 0)",
				pointHitRadius: 0,
				data: prevYearData,
			},
		],
	};

	ChartJS.defaults.font.size = 16;
	ChartJS.defaults.font.weight = "700";
	ChartJS.defaults.font.family = "DM Sans";
	ChartJS.defaults.color = "#FFFFFFA6";
	const options: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				displayColors: false,
				padding: {
					top: 10, bottom: 4, left: 10, right: 40
				},
				cornerRadius: 15,
				backgroundColor: 'white',
				titleColor: '#6359E9A6',
				bodyFont: {
					size: 26
				},
				titleMarginBottom: 3,
				callbacks: {
					title(ctx) {
						const date = new Date()
						date.setFullYear(currentYear)
						date.setMonth(ctx[0].dataIndex)
						return dateFormat(date, "dd.mm.yyyy")
					},
					label(ctx) {
						return `$${ctx.formattedValue}`
					},
					labelTextColor() {
						return 'black'
					},
				}
			}
		},
		hover: {
			intersect: false,
		},
		layout: {
			padding: {
				top: 30,
				bottom: 30,
				left: 40,
				right: 40,
			},
		},
		scales: {
			x: {
				ticks: {
					autoSkip: true,
					maxTicksLimit: 12,
				},
				offset: true,
				grid: {
					tickColor: "#FFFFFF",
					drawTicks: false,
				},

			},
			y: {
				offset: true,
				border: {
					display: false,
					dash: [4, 4],
				},
				grid: {
					display: true,
					color: "#8C89B47F",
					drawTicks: true,
					tickColor: "#00000000",
				},
				ticks: {
					stepSize: 1000,
					callback(val, i, ticks) {
						return '$' + val
					}
				},
			},
		},
	};
</script>

<Line class="absolute" {data} {options} />