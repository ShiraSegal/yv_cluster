import { SapirClusterDetail } from "./sapir-cluster-detail.model";

export class SapirClusterModel {
    BookIdList: string[];
    SapirClusterDetails: SapirClusterDetail[];
    Comments: string | null;
    Level: string | null;
    GroupHasMultimedia: boolean;
    GroupId: string | null;
    StatusCode: number;
  }