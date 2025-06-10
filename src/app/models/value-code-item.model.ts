export class ValueCodeItem {
    __type: string;
    code: string;
    value: string;

    constructor(__type: string, code: string, value: string) {
        this.__type = __type;
        this.code = code;
        this.value = value;
    }
}
