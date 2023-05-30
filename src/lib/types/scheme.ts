interface IDailyIncomeData {
    day: number;
    revenue: number;
}

interface IMonthlyIncomeData {
    month: number;
    dailyIncomeData: IDailyIncomeData[];
}

interface IYearlyIncomeData {
    year: number;
    monthlyIncomeData: IMonthlyIncomeData[];
}

interface ICategoryData {
    name: string;
    yearlyIncomeData: IYearlyIncomeData[];
}

interface IIncomeOverviewData {
    year: number;
    totalIncome: number;
    incomeChange: number;
}

interface IAverageRevenueData {
    year: number;
    averageRevenue: number;
    revenueChange: number;
}

interface IAverageIncomeData {
    year: number;
    averageIncome: number;
    incomeChange: number;
}

interface IAverageOutcomeData {
    year: number;
    averageOutcome: number;
    outcomeChange: number;
}

interface IRevenueStream {
    categories: ICategoryData[];
    incomeOverview: IIncomeOverviewData[];
    averageRevenue: IAverageRevenueData[];
    averageIncome: IAverageIncomeData[];
    averageOutcome: IAverageOutcomeData[];
}