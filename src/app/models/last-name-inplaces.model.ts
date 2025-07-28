export class lastNameInPlaces {
    TotalCount: number;
    Count: number;
    Code: string;
    Value: string;

    constructor(totalCount: number, count: number, code: string, value: string) {
        this.TotalCount = totalCount;
        this.Count = count;
        this.Code = code;
        this.Value = value;
    }
}