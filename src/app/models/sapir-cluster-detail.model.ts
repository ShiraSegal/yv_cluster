import { ValueDetail } from "./value-detail.model";

export class SapirClusterDetail {
    Field: string;
    Values: ValueDetail[];
    HasOtherOption: boolean;
    RadioOptions: { key: string; value: string }[];
  }
  