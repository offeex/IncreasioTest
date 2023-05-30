const yearsRange = 3

const categories: ICategoryData[] = [
	{ name: "Hot tubs", yearlyIncomeData: genYears() },
	{ name: "Promos", yearlyIncomeData: genYears() },
	{ name: "Fruits", yearlyIncomeData: genYears() },
];
let incomeOverview: IIncomeOverviewData[] = []
let averageIncome: IAverageIncomeData[] = []
let averageOutcome: IAverageOutcomeData[] = []
let averageRevenue: IAverageRevenueData[] = []

for (let i = 0; i < yearsRange; i++) {
    incomeOverview.push(getIncomeOverview(i + 1))
    averageIncome.push(getAverageIncome(i + 1))
    averageOutcome.push(getAverageOutcome(i + 1))
    averageRevenue.push(getAverageRevenue(i + 1))
}

export const revenueStream: IRevenueStream = {
    categories,
    incomeOverview,
    averageIncome,
    averageOutcome,
    averageRevenue
}
console.log(revenueStream);

function getAverageRevenue(year: number): IAverageRevenueData {

    function getRevenue(year: number) {
        return getAverageIncome(year).averageIncome - getAverageOutcome(year).averageOutcome
    }

    function getChange(year: number) {
        return getAverageIncome(year).incomeChange - getAverageOutcome(year).outcomeChange
    }

    const averageRevenue = getRevenue(year) - getRevenue(year - 1)
    const revenueChange = getChange(year) - getChange(year - 1)

    return { averageRevenue, revenueChange, year }
}

// Since no Outcome interfaces are given, i generate it fully randomly
function getAverageOutcome(year: number): IAverageOutcomeData {
    return {
        year,
        averageOutcome: Math.round(Math.random() * 10000),
        outcomeChange: Math.round(Math.random() * 10000)
    }
}

function getAverageIncome(year: number): IAverageIncomeData {

    function getAverage(year: number) {
        if (year < 1) return 0
        return getTotalIncome(year) / flatCat(year).length
    }

    const averageIncome = getAverage(year)
    const incomeChange = averageIncome - getAverage(year - 1)

    return { year, averageIncome, incomeChange }
}

function getIncomeOverview(year: number): IIncomeOverviewData {

	const totalIncome = getTotalIncome(year)
    const prevTotalIncome = getTotalIncome(year - 1)
    const incomeChange = totalIncome - prevTotalIncome

    return { year, totalIncome, incomeChange }
}

function getTotalIncome(year: number): number {
    if (year < 1) return 0
    return flatCat(year)
        .flatMap((v) => v.revenue)
        .reduce((prev, cur) => prev + cur);
}

/* :3 meow */
function flatCat(year: number): IDailyIncomeData[] {
    return categories[year - 1].yearlyIncomeData
        .flatMap((v) => v.monthlyIncomeData
        .flatMap((v) => v.dailyIncomeData))
}

function genYears(): IYearlyIncomeData[] {
	return duckArray(yearsRange).map((_, i) => genYearlyIncome(i + 1));
}

function genYearlyIncome(year: number): IYearlyIncomeData {
	return {
		monthlyIncomeData: duckArray(12).map((_, i) => genMonthlyIncome(year, i + 1)),
		year,
	};
}

function genMonthlyIncome(year: number, month: number): IMonthlyIncomeData {

    function getDaysInMonth() {
        return new Date(year, month, 0).getDate();
    }
    
	return {
		dailyIncomeData: duckArray(getDaysInMonth()).map((_, i) => genDailyIncome(i + 1)),
		month,
	};
}

function genDailyIncome(day: number): IDailyIncomeData {
	return {
		day,
		revenue: Math.round(Math.random() * 100000),
	};
}

function duckArray(size: number) {
    return Array(size).fill(0)
}