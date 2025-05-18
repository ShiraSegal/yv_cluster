import { StatisticDetail } from "./StatisticDetail";

export class StatisticData {
    totalCount: number;
    details: StatisticDetail[];

    constructor(totalCount: number, details: StatisticDetail[]) {
        this.totalCount = totalCount;
        this.details = details;
    }
}