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

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	);

	const data: ChartData<"line", number[]> = {
		xLabels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		yLabels: ["a", "b", "c"],
		datasets: [
			{
				fill: false,
				tension: 0.3,
				borderColor: "white",
				pointBorderColor: "rgba(0, 0, 0, 0)",
				pointHoverBackgroundColor: "#6359E9",
				pointHoverBorderColor: "#FFFFFF",
				pointHoverRadius: 8,
				pointHoverBorderWidth: 4,
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				tension: 0.3,
				borderWidth: 1.5,
				borderColor: "rgb(99, 89, 233)",
				borderCapStyle: "round",
				borderDash: [15, 15],
				pointBorderColor: "rgba(0, 0, 0, 0)",
				pointHitRadius: 0,
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	};

	ChartJS.defaults.font.size = 20;
	ChartJS.defaults.font.weight = "700";
	ChartJS.defaults.font.family = "DM Sans";
	ChartJS.defaults.color = "#FFFFFFA6";
	const options: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		font: {
			size: 14,
			weight: "700",
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				displayColors: false,
				padding: {
					top: 10, bottom: 6, left: 10, right: 80
				},
				cornerRadius: 15,
				backgroundColor: 'white',
				titleColor: '#6359E9A6',
				bodyFont: {
					size: 26
				},
				titleMarginBottom: 0,
				callbacks: {
					title(ctx) {
						console.log(this.title);
						return '05.04.20'
					},
					label(ctx) {
						return ctx.label
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
					stepSize: 12,
				},
			},
		},
	};
</script>

<Line class="absolute" {data} {options} />