import { statisticDetail } from "./statistic-detail.model";

export class statisticData {
    totalCount: number;
    details: statisticDetail[];

    constructor(totalCount: number, details: statisticDetail[]) {
        this.totalCount = totalCount;
        this.details = details;
    }
}