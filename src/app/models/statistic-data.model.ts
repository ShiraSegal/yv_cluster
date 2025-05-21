import { StatisticDetail } from "./statistic-detail.model";

export class StatisticData {
    totalCount: number;
    details: StatisticDetail[];

    constructor(totalCount: number, details: StatisticDetail[]) {
        this.totalCount = totalCount;
        this.details = details;
    }
}