export class ValueCodeItem {
    __type: string;
    Code: string;
    Value: string;

    constructor(__type: string, Code: string, Value: string) {
        this.__type = __type;
        this.Code = Code;
        this.Value = Value;
    }
}